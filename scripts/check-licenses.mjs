// Chequeo de licencias para pull requests de obras.
//
// Uso:
//   node scripts/check-licenses.mjs --git <base> <head>
//       Compara dos commits y revisa los statement agregados y modificados en _projects/.
//   node scripts/check-licenses.mjs --new <statement.mdx ...> [--changed <statement.mdx ...>]
//       Revisa archivos puntuales (útil para probar localmente).
//
// - Obras nuevas (--new): el campo `license` es OBLIGATORIO y debe ser válido.
// - Obras modificadas (--changed): si declaran `license`, debe ser válido
//   (el corpus histórico sin licencia sigue siendo aceptado).
//
// Lo ejecuta .github/workflows/check-licenses.yml en cada pull request que toca _projects/.

import fs from 'fs';
import { execFileSync } from 'child_process';
import { LICENSE_IDS, SUGGESTED_LICENSE, normalizeLicense } from '../src/utils/licenses.mjs';

const STATEMENT_RE = /^_projects\/[^/]+\/statement\.mdx?$/;

// Lista los statement agregados (A) o modificados (M) entre dos commits, sin usar una shell.
function gitDiff(base, head, filter) {
  const out = execFileSync('git', ['diff', '--name-only', '-z', `--diff-filter=${filter}`, base, head, '--', '_projects'], {
    encoding: 'utf-8',
  });
  return out.split('\0').filter((f) => STATEMENT_RE.test(f));
}

function parseArgs(argv) {
  const groups = { new: [], changed: [] };
  if (argv[0] === '--git') {
    const [base, head] = [argv[1] || 'HEAD^1', argv[2] || 'HEAD'];
    groups.new = gitDiff(base, head, 'A');
    groups.changed = gitDiff(base, head, 'M');
    console.log(`Obras nuevas: ${groups.new.length ? groups.new.join(', ') : '(ninguna)'}`);
    console.log(`Obras modificadas: ${groups.changed.length ? groups.changed.join(', ') : '(ninguna)'}\n`);
    return groups;
  }
  let current = null;
  for (const arg of argv) {
    if (arg === '--new') current = 'new';
    else if (arg === '--changed') current = 'changed';
    else if (current && arg.trim()) groups[current].push(arg.trim());
  }
  return groups;
}

// Extrae el valor de `license:` (o `licencia:`) del frontmatter YAML, sin dependencias externas.
function readLicense(file) {
  const content = fs.readFileSync(file, 'utf-8').replace(/^﻿/, '');
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { frontmatter: false, value: undefined };
  const line = match[1].split(/\r?\n/).find((l) => /^\s*(license|licencia)\s*:/i.test(l));
  if (!line) return { frontmatter: true, value: undefined };
  const value = line
    .replace(/^\s*(license|licencia)\s*:\s*/i, '')
    .replace(/\s+#.*$/, '')
    .trim()
    .replace(/^["']|["']$/g, '');
  return { frontmatter: true, value: value || undefined };
}

const { new: newFiles, changed: changedFiles } = parseArgs(process.argv.slice(2));
const errors = [];
const ok = [];

for (const [file, required] of [
  ...newFiles.map((f) => [f, true]),
  ...changedFiles.map((f) => [f, false]),
]) {
  if (!fs.existsSync(file)) continue; // archivo eliminado en el PR
  const { frontmatter, value } = readLicense(file);

  if (!frontmatter) {
    errors.push(`${file}: no se encontró el bloque de frontmatter (--- ... ---).`);
    continue;
  }
  if (value === undefined) {
    if (required) {
      errors.push(
        `${file}: falta el campo \`license\` en el frontmatter. ` +
          `Es obligatorio para obras nuevas (sugerida: ${SUGGESTED_LICENSE}).`
      );
    }
    continue;
  }
  const normalized = normalizeLicense(value);
  if (!LICENSE_IDS.includes(normalized)) {
    errors.push(`${file}: licencia inválida "${value}". Valores aceptados: ${LICENSE_IDS.join(', ')}.`);
    continue;
  }
  ok.push(`${file}: ${normalized}`);
}

for (const line of ok) console.log(`✅ ${line}`);

if (errors.length) {
  console.error('\n❌ Problemas de licencia:\n');
  for (const line of errors) console.error(`  - ${line}`);
  console.error('\nRevisá la sección "Licencias" del README y la guía de montaje.');
  process.exit(1);
}

if (!ok.length) console.log('Sin obras nuevas o modificadas con licencia para revisar.');
console.log('\nChequeo de licencias aprobado.');
