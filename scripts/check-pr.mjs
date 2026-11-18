// Revisión automática de obras para los pull requests de <la-piscine>.
//
// Uso:
//   node scripts/check-pr.mjs --git <base> <head>
//       Revisa los cambios entre dos commits. Lo ejecuta .github/workflows/check-pr.yml
//       en cada pull request.
//   node scripts/check-pr.mjs _projects/2026-tp1-garcia-maria [...]
//       Revisa carpetas puntuales como obras nuevas (para probar antes de abrir el PR).
//
// Qué revisa:
//   1. Que el PR sólo toque archivos dentro de _projects/<carpeta-de-la-obra>/.
//      A quienes mantienen el repositorio (OWNER, MEMBER, COLLABORATOR) sólo se les avisa.
//   2. thumbnail.webp: nombre exacto, que sea un WebP real y que mida 360 × 360 px.
//   3. statement.mdx: nombre exacto, frontmatter estándar, contenedor del sketch y
//      bloques <Language code="es"> y <Language code="en"> con sus secciones.
//   + Que el MDX compile (si las dependencias del proyecto están instaladas).
//
// Severidad: en las obras NUEVAS todo es obligatorio. En las obras ya publicadas que
// el PR modifica (corpus histórico) sólo se marcan como error los problemas que rompen
// el build o la licencia; el resto no se revisa.

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { LICENSE_IDS, SUGGESTED_LICENSE, normalizeLicense } from '../src/utils/licenses.mjs';

const PROJECTS_DIR = '_projects';
const THUMB_SIZE = 360;
const MAINTAINER_ROLES = ['OWNER', 'MEMBER', 'COLLABORATOR'];
const FOLDER_RE = /^\d{4}-tp\d+(-[a-z0-9]+)+$/;
const REQUIRED_FILES = ['statement.mdx', 'thumbnail.webp', 'sketch.js'];
const REQUIRED_KEYS = ['author', 'title', 'date', 'year', 'cuatrimestre', 'thumbnail', 'license', 'dependencies'];
const OPTIONAL_KEYS = ['layout'];
const CUATRIMESTRES = ['primer cuatrimestre', 'segundo cuatrimestre'];
const SECTIONS = {
  es: [
    { label: 'Desarrollo técnico, estético y conceptual' },
    { label: 'Bibliografía', bibliography: true },
    { label: 'Breve biografía' },
  ],
  en: [
    { label: 'Technical, aesthetic, and conceptual development' },
    { label: 'Bibliography', bibliography: true },
    { label: 'Brief resume', alt: ['Brief biography', 'Short biography', 'Brief bio', 'Short bio'] },
  ],
};
// Textos de la plantilla que no deberían quedar en una obra entregada.
const PLACEHOLDERS = [
  'Nombres y apellidos completos',
  'Título de la Obra',
  'Breve descripción de la obra en español',
  'Texto del desarrollo en español',
  'APELLIDO, Nombre',
  'Breve presentación tuya',
  'Brief description of the work in english',
  'Development text in english',
  'LASTNAME, Firstname',
  'Brief presentation of yourself',
];
const SKETCH_CONTAINER_RE =
  /<div\s+id=["']div-sketch["']\s*>\s*<script\s+type=["']text\/javascript["']\s+src=["']sketch\.js["']\s*>\s*<\/script>\s*<\/div>/g;
const SKETCH_CONTAINER = `<div id="div-sketch">\n  <script type="text/javascript" src="sketch.js"></script>\n</div>`;

// ---------------------------------------------------------------------------
// Utilidades

const norm = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');

function kebab(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function git(args) {
  return execFileSync('git', args, { encoding: 'utf-8', maxBuffer: 256 * 1024 * 1024 });
}

// Claves válidas para `dependencies`, leídas de src/utils/dependencies.ts (fuente única).
function readDependencyKeys() {
  try {
    const src = fs.readFileSync('src/utils/dependencies.ts', 'utf-8').replace(/\r\n?/g, '\n');
    const map = src.match(/dependenciesMap[^{]*\{([\s\S]*?)\n\s*\};/);
    if (!map) return null;
    return [...map[1].matchAll(/^\s*['"]?([A-Za-z0-9._-]+)['"]?\s*:/gm)].map((m) => m[1]);
  } catch {
    return null;
  }
}

async function optionalImport(name) {
  try {
    return await import(name);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Registro de resultados

const results = []; // { level, work, file, line, msg }
let currentWork = null;

function record(level, file, msg, line) {
  results.push({ level, work: currentWork?.slug ?? null, file, line, msg });
}

// En obras nuevas todo error cuenta. En obras ya publicadas, sólo los críticos.
function err(file, msg, { critical = false, line } = {}) {
  if (currentWork && !currentWork.strict && !critical) return;
  record('error', file, msg, line);
}
function warn(file, msg, { line } = {}) {
  if (currentWork && !currentWork.strict) return;
  record('warning', file, msg, line);
}

// ---------------------------------------------------------------------------
// 2. Miniatura

function detectFormat(buf) {
  if (buf.length >= 8 && buf.readUInt32BE(0) === 0x89504e47) return 'PNG';
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'JPEG';
  if (buf.toString('ascii', 0, 4) === 'GIF8') return 'GIF';
  if (buf.length >= 12 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') return 'WebP';
  return null;
}

function webpSize(buf) {
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X' && buf.length >= 30) {
    return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
  }
  if (chunk === 'VP8 ' && buf.length >= 30) {
    return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L' && buf.length >= 25) {
    const bits = buf.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function checkThumbnail(file) {
  const buf = fs.readFileSync(file);
  const format = detectFormat(buf);
  if (format !== 'WebP') {
    err(
      file,
      format
        ? `\`thumbnail.webp\` es en realidad una imagen ${format} con la extensión cambiada. ` +
            'Hay que exportarla (o convertirla) a formato WebP: renombrar el archivo no alcanza.'
        : '`thumbnail.webp` no es una imagen WebP válida.'
    );
    return;
  }
  const size = webpSize(buf);
  if (!size) {
    err(file, 'No se pudieron leer las dimensiones de `thumbnail.webp`.');
    return;
  }
  if (size.w !== THUMB_SIZE || size.h !== THUMB_SIZE) {
    err(
      file,
      `La miniatura mide ${size.w} × ${size.h} px; tiene que medir exactamente ` +
        `${THUMB_SIZE} × ${THUMB_SIZE} px.` +
        (size.w !== size.h ? ' Además no es cuadrada: recortala antes de redimensionarla.' : '')
    );
  }
}

// ---------------------------------------------------------------------------
// 3. statement.mdx

function cleanValue(v) {
  const s = v.trim();
  if (/^["']/.test(s)) return s.replace(/^(["'])([\s\S]*)\1\s*(#.*)?$/, '$2').trim();
  return s.replace(/\s+#.*$/, '').trim();
}

function parseFrontmatter(fmText, file, firstLine) {
  const data = {};
  let listKey = null;
  fmText.split('\n').forEach((raw, i) => {
    const line = firstLine + i;
    if (!raw.trim() || raw.trim().startsWith('#')) return;
    const item = raw.match(/^\s+-\s*(.*)$/) || raw.match(/^-\s+(.*)$/);
    if (item && listKey) {
      if (!Array.isArray(data[listKey])) data[listKey] = [];
      data[listKey].push(cleanValue(item[1]));
      return;
    }
    const kv = raw.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!kv) {
      err(file, `Línea del frontmatter con formato no reconocido: \`${raw.trim()}\``, { line });
      return;
    }
    const [, key, rawValue] = kv;
    if (key in data) err(file, `El campo \`${key}\` aparece más de una vez en el frontmatter.`, { critical: true, line });
    listKey = key;
    const value = rawValue.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value.slice(1, -1).split(',').map(cleanValue).filter(Boolean);
    } else {
      data[key] = cleanValue(value);
    }
    data[`__line_${key}`] = line;
  });
  return data;
}

function checkFrontmatterValues(fm, file, slug, depKeys) {
  const L = (k) => ({ line: fm[`__line_${k}`] });
  const keys = Object.keys(fm).filter((k) => !k.startsWith('__line_'));
  const str = (k) => (typeof fm[k] === 'string' ? fm[k] : '');

  for (const k of REQUIRED_KEYS) {
    if (keys.includes(k)) continue;
    if (k === 'license') err(file, `Falta el campo \`license\` (obligatorio para obras nuevas; sugerida: ${SUGGESTED_LICENSE}).`);
    else err(file, `Falta el campo \`${k}\` en el frontmatter.`);
  }
  for (const k of keys) {
    if (!REQUIRED_KEYS.includes(k) && !OPTIONAL_KEYS.includes(k)) {
      warn(file, `Campo \`${k}\` no previsto en el frontmatter estándar (¿error de tipeo?).`, L(k));
    }
  }

  if (keys.includes('author')) {
    if (!str('author')) err(file, 'El campo `author` está vacío.', L('author'));
    else if (str('author').split(/\s+/).length < 2) {
      warn(file, `\`author: ${str('author')}\` tiene una sola palabra: van nombres y apellidos completos.`, L('author'));
    }
  }
  if (keys.includes('title') && !str('title')) err(file, 'El campo `title` está vacío.', L('title'));

  let dateYear = null;
  if (keys.includes('date')) {
    const d = str('date');
    const m = d.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const parsed = m ? new Date(`${d}T00:00:00Z`) : null;
    const valid = parsed && !Number.isNaN(parsed.getTime()) && parsed.getUTCDate() === Number(m[3]);
    if (!valid) err(file, `\`date: ${d}\` no es una fecha válida con formato AAAA-MM-DD (por ejemplo 2026-05-15).`, L('date'));
    else dateYear = m[1];
  }
  if (keys.includes('year')) {
    const y = str('year');
    if (!/^\d{4}$/.test(y)) err(file, `\`year: ${y}\` tiene que ser un año de cuatro cifras (por ejemplo 2026).`, L('year'));
    else {
      if (dateYear && y !== dateYear) warn(file, `\`year\` (${y}) no coincide con el año de \`date\` (${dateYear}).`, L('year'));
      const folderYear = slug.slice(0, 4);
      if (/^\d{4}$/.test(folderYear) && y !== folderYear) {
        warn(file, `\`year\` (${y}) no coincide con el año del nombre de la carpeta (${folderYear}).`, L('year'));
      }
    }
  }
  if (keys.includes('cuatrimestre') && !CUATRIMESTRES.includes(str('cuatrimestre').toLowerCase())) {
    err(file, `\`cuatrimestre: ${str('cuatrimestre')}\` no es válido. Valores aceptados: ${CUATRIMESTRES.join(' / ')}.`, L('cuatrimestre'));
  }
  if (keys.includes('thumbnail') && str('thumbnail') !== 'thumbnail.webp') {
    err(file, `\`thumbnail: ${str('thumbnail')}\` tiene que ser exactamente \`thumbnail.webp\`.`, L('thumbnail'));
  }

  if (keys.includes('license')) {
    const value = str('license');
    if (!value) err(file, 'El campo `license` está vacío.', L('license'));
    else {
      const normalized = normalizeLicense(value);
      if (!LICENSE_IDS.includes(normalized)) {
        err(file, `Licencia inválida "${value}". Valores aceptados: ${LICENSE_IDS.join(', ')}.`, { critical: true, ...L('license') });
      } else if (normalized !== value) {
        warn(file, `Escribí la licencia exactamente como \`${normalized}\` (ahora dice "${value}").`, L('license'));
      }
    }
  }

  if (keys.includes('dependencies')) {
    const deps = fm.dependencies;
    if (!Array.isArray(deps) || deps.length === 0) {
      err(file, '`dependencies` tiene que ser una lista, con una línea `  - p5.v2.3.3` por dependencia.', L('dependencies'));
    } else {
      if (depKeys) {
        for (const d of deps) {
          if (!depKeys.includes(d)) {
            err(file, `Dependencia desconocida \`${d}\`: se ignoraría y el sketch podría no funcionar. Disponibles: ${depKeys.join(', ')}.`, {
              critical: true,
              ...L('dependencies'),
            });
          }
        }
      }
      const core = deps.filter((d) => /^p5(\.v.+)?$/.test(d));
      if (core.length === 0) warn(file, 'No se declara ninguna versión de p5 en `dependencies` (se usaría p5 1.10 por defecto).', L('dependencies'));
      if (core.length > 1) warn(file, `Se declaran varias versiones de p5: ${core.join(', ')}.`, L('dependencies'));
      const soundV = deps.find((d) => d.startsWith('p5.sound.'))?.replace('p5.sound.', '');
      const coreV = core[0]?.replace(/^p5\.?/, '');
      if (soundV && coreV && soundV !== coreV) {
        warn(file, `Las versiones de p5 (${core[0]}) y de p5.sound (p5.sound.${soundV}) no coinciden.`, L('dependencies'));
      }
    }
  }
}

function checkSections(block, file) {
  const expected = SECTIONS[block.code];
  const lang = block.code === 'es' ? 'español' : 'inglés';
  const lines = block.content.split('\n');
  const headings = [];
  const allTargets = Object.values(SECTIONS).flat().flatMap((s) => [s.label, ...(s.alt || [])]).map(norm);
  lines.forEach((l, i) => {
    const t = l.trim();
    const m = t.match(/^\*\*(.+?)\*\*\s*:?$/) || t.match(/^__(.+?)__\s*:?$/) || t.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (m) headings.push({ text: m[1].replace(/:\s*$/, ''), idx: i, bold: true });
    // Un título de sección escrito como texto común (sin negrita) también se reconoce.
    else if (t && allTargets.includes(norm(t))) headings.push({ text: t.replace(/:\s*$/, ''), idx: i, bold: false });
  });

  const positions = expected.map((s) => {
    const targets = [s.label, ...(s.alt || [])].map(norm);
    return headings.find((h) => targets.includes(norm(h.text)));
  });

  positions.forEach((h, i) => {
    if (h && !h.bold) {
      warn(file, `En el bloque en ${lang} el título \`${expected[i].label}\` va en negrita: \`**${expected[i].label}**\`.`, { line: block.line });
    }
  });

  expected.forEach((s, i) => {
    if (!positions[i]) err(file, `En el bloque en ${lang} falta la sección \`**${s.label}**\`.`, { line: block.line });
  });

  const found = positions.filter(Boolean);
  for (let i = 1; i < found.length; i++) {
    if (found[i].idx < found[i - 1].idx) {
      warn(file, `En el bloque en ${lang} las secciones no están en el orden esperado: ${expected.map((s) => s.label).join(' → ')}.`, {
        line: block.line,
      });
      break;
    }
  }

  // Breve descripción antes de la primera sección.
  const firstIdx = found.length ? Math.min(...found.map((h) => h.idx)) : lines.length;
  if (!lines.slice(0, firstIdx).join('\n').trim()) {
    err(file, `En el bloque en ${lang} falta la breve descripción de la obra, antes de la primera sección.`, { line: block.line });
  }

  // Contenido de cada sección (hasta la siguiente sección esperada).
  expected.forEach((s, i) => {
    const h = positions[i];
    if (!h) return;
    const next = found.filter((x) => x.idx > h.idx).sort((a, b) => a.idx - b.idx)[0];
    const text = lines.slice(h.idx + 1, next?.idx ?? lines.length).join('\n').trim();
    if (!text) err(file, `En el bloque en ${lang} la sección \`${s.label}\` está vacía.`, { line: block.line });
    else if (s.bibliography && !/^\s*([-*+]|\d+[.)])\s+/m.test(text)) {
      warn(file, `En el bloque en ${lang} la bibliografía no tiene formato de lista (cada referencia en una línea que empiece con "- ").`, {
        line: block.line,
      });
    }
  });
}

function checkLanguageBlocks(body, file, bodyFirstLine) {
  const lineAt = (idx) => bodyFirstLine + body.slice(0, idx).split('\n').length - 1;
  const blocks = [];
  let open = null;

  for (const t of body.matchAll(/<\s*(\/)?\s*(language)\b([^>]*)>/gi)) {
    const [whole, closing, name, attrs] = t;
    const line = lineAt(t.index);
    if (name !== 'Language') {
      err(file, `\`${whole}\`: la etiqueta se escribe \`Language\`, con L mayúscula.`, { critical: true, line });
    }
    if (!closing) {
      if (open) {
        err(file, `Se abre otro \`<Language>\` en la línea ${line} sin haber cerrado el de la línea ${open.line}: falta \`</Language>\`.`, {
          critical: true,
          line: open.line,
        });
        blocks.push({ ...open, content: body.slice(open.start, t.index) });
      }
      const code = attrs.match(/code\s*=\s*["']([^"']*)["']/)?.[1];
      open = { code, line, start: t.index + whole.length };
    } else {
      if (!open) {
        err(file, '`</Language>` sin un `<Language code="...">` que lo abra.', { critical: true, line });
        continue;
      }
      blocks.push({ ...open, content: body.slice(open.start, t.index) });
      open = null;
    }
  }
  if (open) {
    err(file, `Falta el \`</Language>\` que cierra el bloque \`<Language code="${open.code ?? '?'}">\` de la línea ${open.line}.`, {
      critical: true,
      line: open.line,
    });
    blocks.push({ ...open, content: body.slice(open.start) });
  }

  for (const code of ['es', 'en']) {
    const found = blocks.filter((b) => b.code === code);
    if (found.length === 0) err(file, `Falta el bloque \`<Language code="${code}">\` … \`</Language>\`.`);
    if (found.length > 1) err(file, `Hay ${found.length} bloques \`<Language code="${code}">\`; tiene que haber uno solo.`, { line: found[1].line });
  }
  for (const b of blocks) {
    if (!b.code) err(file, '`<Language>` sin el atributo `code` ("es" o "en").', { line: b.line });
    else if (!['es', 'en'].includes(b.code)) warn(file, `Idioma inesperado \`code="${b.code}"\` (se esperan "es" y "en").`, { line: b.line });
  }
  const es = blocks.find((b) => b.code === 'es');
  const en = blocks.find((b) => b.code === 'en');
  if (es && en && en.line < es.line) warn(file, 'El bloque en inglés aparece antes que el bloque en español.', { line: en.line });

  for (const b of [es, en].filter(Boolean)) checkSections(b, file);
}

async function checkMdxCompiles(file, slug, mdx) {
  // Se compila la versión que genera scripts/sync-assets.mjs (la misma que usa el build);
  // si todavía no existe, el archivo original.
  const synced = path.join('src/content/projects', `${slug}.mdx`);
  const source = fs.existsSync(synced) ? synced : file;
  const text = fs.readFileSync(source, 'utf-8').replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const fm = text.match(/^---[ \t]*\n[\s\S]*?\n---[ \t]*(\n|$)/);
  // El frontmatter se reemplaza por líneas vacías para conservar la numeración.
  const body = fm ? '\n'.repeat(fm[0].split('\n').length - 1) + text.slice(fm[0].length) : text;
  try {
    await mdx.compile(body);
  } catch (e) {
    const line = e.line ?? e.place?.line ?? e.place?.start?.line;
    err(file, `El MDX no compila, así que el sitio no se podría construir: ${e.reason || e.message}`, { critical: true, line });
  }
}

async function checkStatement(file, slug, ctx) {
  const text = fs.readFileSync(file, 'utf-8').replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const fmMatch = text.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(\n|$)/);
  if (!fmMatch) {
    const lines = text.split('\n');
    const dashLike = lines.findIndex((l, i) => i > 0 && i < 40 && /^\s*[-‐‑‒–—―]+\s*$/.test(l) && l.trim() !== '---');
    if (!text.startsWith('---')) {
      err(file, 'El archivo tiene que empezar con `---` en la primera línea (sin líneas vacías ni espacios antes).', { critical: true, line: 1 });
    } else if (dashLike >= 0) {
      err(file, `El frontmatter se cierra con \`${lines[dashLike].trim()}\`: tiene que ser exactamente \`---\` (tres guiones medios).`, {
        critical: true,
        line: dashLike + 1,
      });
    } else {
      err(file, 'No se encontró el cierre del frontmatter: falta una línea con `---` después de `dependencies`.', { critical: true, line: 1 });
    }
    return;
  }
  const fmText = fmMatch[1];
  const bodyFirstLine = fmMatch[0].split('\n').length;
  const body = text.slice(fmMatch[0].length);

  if (ctx.yaml) {
    try {
      ctx.yaml.load(fmText);
    } catch (e) {
      const line = e.mark ? e.mark.line + 2 : undefined;
      err(file, `El frontmatter no es YAML válido (${e.reason || e.message}). Si un valor tiene ":" o "#", ponelo entre comillas.`, {
        critical: true,
        line,
      });
    }
  }
  const fm = parseFrontmatter(fmText, file, 2);
  checkFrontmatterValues(fm, file, slug, ctx.depKeys);

  for (const p of PLACEHOLDERS) {
    const idx = text.indexOf(p);
    if (idx >= 0) err(file, `Quedó el texto de la plantilla "${p}": reemplazalo por el tuyo.`, { line: text.slice(0, idx).split('\n').length });
  }

  const containers = [...body.matchAll(SKETCH_CONTAINER_RE)];
  if (containers.length === 0) {
    err(
      file,
      (body.includes('div-sketch') ? 'El contenedor del sketch no tiene el formato esperado. ' : 'Falta el contenedor del sketch. ') +
        `Tiene que estar así, debajo del frontmatter:\n${SKETCH_CONTAINER}`,
      { line: bodyFirstLine }
    );
  } else if (containers.length > 1) {
    err(file, `El contenedor del sketch aparece ${containers.length} veces; tiene que estar una sola vez.`, { line: bodyFirstLine });
  }

  checkLanguageBlocks(body, file, bodyFirstLine);

  if (ctx.mdx) await checkMdxCompiles(file, slug, ctx.mdx);
}

// ---------------------------------------------------------------------------
// Revisión de una carpeta de obra

function listFiles(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(p));
    else out.push(p);
  }
  return out;
}

async function checkWork(slug, strict, ctx) {
  const dir = `${PROJECTS_DIR}/${slug}`;
  currentWork = { slug, strict };

  if (strict && !FOLDER_RE.test(slug)) {
    const suggestion = kebab(slug).replace(/^(\d{4})-tp-(\d+)-/, '$1-tp$2-');
    err(
      dir,
      `El nombre de la carpeta \`${slug}\` no sigue la convención \`<año>-tp<n>-<apellido>-<nombre>\` ` +
        '(minúsculas, sin espacios, tildes ni "ñ").' +
        (suggestion !== slug && FOLDER_RE.test(suggestion) ? ` Por ejemplo: \`${suggestion}\`.` : '')
    );
  }

  const files = listFiles(dir).map((f) => path.relative(dir, f).split(path.sep).join('/'));
  const topLevel = files.filter((f) => !f.includes('/'));

  for (const name of REQUIRED_FILES) {
    if (topLevel.includes(name)) continue;
    const stem = name.split('.')[0];
    const similar = files.filter((f) => path.basename(f).toLowerCase().startsWith(stem));
    err(
      `${dir}/${name}`,
      `Falta \`${name}\` en la carpeta de la obra.` +
        (similar.length
          ? ` Encontré ${similar.map((s) => `\`${s}\``).join(', ')}: tiene que llamarse exactamente \`${name}\`` +
            (name === 'thumbnail.webp' ? ' y estar en formato WebP.' : ', en minúsculas y en la raíz de la carpeta.')
          : ''),
      { critical: name === 'statement.mdx' }
    );
  }

  for (const f of files) {
    if (path.basename(f).includes('#')) {
      warn(`${dir}/${f}`, `El archivo \`${f}\` tiene "#" en el nombre y no se va a publicar. Renombralo.`);
    } else if (/[\s\u0080-￿]/.test(f) || /[A-Z]/.test(f)) {
      warn(`${dir}/${f}`, `El archivo \`${f}\` tiene espacios, mayúsculas, tildes o "ñ" en el nombre: puede fallar en el servidor.`);
    }
  }

  if (topLevel.includes('thumbnail.webp')) checkThumbnail(`${dir}/thumbnail.webp`);
  if (topLevel.includes('sketch.js')) {
    const sketch = fs.readFileSync(`${dir}/sketch.js`, 'utf-8');
    if (!sketch.trim()) err(`${dir}/sketch.js`, '`sketch.js` está vacío.');
    else if (!sketch.includes('div-sketch')) {
      warn(`${dir}/sketch.js`, "`sketch.js` no menciona `div-sketch`: el canvas debería ubicarse con `canvas.parent('div-sketch')` en `setup()`.");
    }
  }
  if (topLevel.includes('statement.mdx')) await checkStatement(`${dir}/statement.mdx`, slug, ctx);

  currentWork = null;
}

// ---------------------------------------------------------------------------
// 1. Cambios del pull request

function parseNameStatus(out) {
  const tokens = out.split('\0').filter((t) => t !== '');
  const changes = [];
  for (let i = 0; i < tokens.length; ) {
    const status = tokens[i++];
    if (/^[RC]/.test(status)) changes.push({ status: status[0], oldPath: tokens[i++], path: tokens[i++] });
    else changes.push({ status: status[0], path: tokens[i++] });
  }
  return changes;
}

function existsInCommit(commit, p) {
  try {
    return git(['ls-tree', '--name-only', commit, '--', p]).trim() !== '';
  } catch {
    return false;
  }
}

function collectFromGit(base, head, isMaintainer) {
  const changes = parseNameStatus(git(['diff', '--name-status', '-z', '-M', base, head]));
  const works = new Map(); // slug -> { strict }
  const outside = new Set();
  const deleted = new Set();

  for (const c of changes) {
    for (const p of c.oldPath ? [c.oldPath, c.path] : [c.path]) {
      const parts = p.split('/');
      if (parts[0] !== PROJECTS_DIR || parts.length < 3) {
        outside.add(p); // fuera de _projects/ o archivo suelto en _projects/
        continue;
      }
      const slug = parts[1];
      if (!existsInCommit(head, `${PROJECTS_DIR}/${slug}`)) {
        if (existsInCommit(base, `${PROJECTS_DIR}/${slug}`)) deleted.add(slug);
        continue;
      }
      if (!works.has(slug)) works.set(slug, { strict: !existsInCommit(base, `${PROJECTS_DIR}/${slug}`) });
    }
  }

  const level = isMaintainer ? 'warning' : 'error';
  if (outside.size) {
    const all = [...outside];
    const list = all.slice(0, 15).map((p) => `\`${p}\``).join(', ') + (all.length > 15 ? ` y ${all.length - 15} más` : '');
    record(
      level,
      all[0],
      `El pull request modifica archivos fuera de \`_projects/<carpeta-de-la-obra>/\`: ${list}. ` +
        (isMaintainer
          ? '(Sólo un aviso: quien abrió el PR mantiene el repositorio.)'
          : 'Una entrega sólo puede agregar o cambiar archivos dentro de la carpeta de su obra, en `_projects/`.')
    );
  }
  for (const slug of deleted) record(level, `${PROJECTS_DIR}/${slug}`, `El pull request elimina la obra \`${slug}\`.`);
  if (!isMaintainer && works.size > 1) {
    record('warning', null, `El pull request toca ${works.size} obras (${[...works.keys()].join(', ')}). Lo habitual es una obra por PR.`);
  }
  const newWorks = [...works.values()].filter((w) => w.strict).length;
  console.log(`Obras nuevas: ${newWorks}. Obras ya publicadas modificadas: ${works.size - newWorks}.\n`);
  return works;
}

// ---------------------------------------------------------------------------
// Salida: consola, anotaciones de GitHub y resumen del job

function escapeData(s) {
  return String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function escapeProp(s) {
  return escapeData(s).replace(/:/g, '%3A').replace(/,/g, '%2C');
}

function writeOutput(works) {
  const inCI = !!process.env.GITHUB_ACTIONS;
  const errors = results.filter((r) => r.level === 'error');
  const warnings = results.filter((r) => r.level === 'warning');

  for (const r of results) {
    const icon = r.level === 'error' ? '❌' : '⚠️ ';
    const where = r.file ? `${r.file}${r.line ? `:${r.line}` : ''}: ` : '';
    console.log(`${icon} ${where}${r.msg}`);
    if (inCI) {
      const props = [r.file && `file=${escapeProp(r.file)}`, r.line && `line=${r.line}`].filter(Boolean).join(',');
      console.log(`::${r.level}${props ? ' ' + props : ''}::${escapeData(r.msg)}`);
    }
  }

  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (summaryFile) {
    let md = '## Revisión de la obra\n\n';
    if (works.size === 0) md += 'El pull request no agrega ni modifica obras en `_projects/`.\n\n';
    for (const [slug, w] of works) {
      const own = results.filter((r) => r.work === slug);
      const status = own.some((r) => r.level === 'error') ? '❌' : own.length ? '⚠️' : '✅';
      md += `### ${status} \`${slug}\` ${w.strict ? '(obra nueva)' : '(obra ya publicada)'}\n\n`;
      if (!own.length) md += 'Todo en orden.\n';
      for (const r of own) md += `- ${r.level === 'error' ? '❌' : '⚠️'} ${r.line ? `Línea ${r.line}: ` : ''}${r.msg.replace(/\n/g, ' ')}\n`;
      md += '\n';
    }
    const general = results.filter((r) => !r.work);
    if (general.length) {
      md += '### Pull request\n\n';
      for (const r of general) md += `- ${r.level === 'error' ? '❌' : '⚠️'} ${r.msg}\n`;
      md += '\n';
    }
    md += errors.length
      ? `**${errors.length} error(es) a corregir.** Subí las correcciones a la misma rama del pull request y la revisión se vuelve a ejecutar sola.\n`
      : '**Sin errores.**\n';
    fs.appendFileSync(summaryFile, md);
  }

  console.log(`\n${errors.length} error(es), ${warnings.length} aviso(s).`);
  if (errors.length) {
    console.log('Ver la sección "Crear una nueva obra" del README.');
    process.exit(1);
  }
  console.log('Revisión aprobada.');
}

// ---------------------------------------------------------------------------

async function main() {
  const argv = process.argv.slice(2);
  const yaml = await optionalImport('js-yaml');
  const mdx = await optionalImport('@mdx-js/mdx');
  const ctx = { yaml: yaml?.default ?? yaml, mdx, depKeys: readDependencyKeys() };
  if (!mdx) console.log('(Aviso: @mdx-js/mdx no está instalado; no se prueba la compilación del MDX. Corré `npm ci`.)\n');

  let works;
  if (argv[0] === '--git') {
    const role = (process.env.PR_AUTHOR_ASSOCIATION || '').toUpperCase();
    works = collectFromGit(argv[1] || 'HEAD^1', argv[2] || 'HEAD', MAINTAINER_ROLES.includes(role));
  } else if (argv.length) {
    works = new Map();
    for (const a of argv) {
      const slug = path.basename(path.resolve(a));
      if (!fs.existsSync(`${PROJECTS_DIR}/${slug}`)) {
        record('error', a, `No existe la carpeta \`${PROJECTS_DIR}/${slug}\`. Las obras van dentro de \`${PROJECTS_DIR}/\`.`);
        continue;
      }
      works.set(slug, { strict: true });
    }
  } else {
    console.log('Uso: node scripts/check-pr.mjs --git <base> <head>  |  node scripts/check-pr.mjs _projects/<carpeta> [...]');
    process.exit(2);
  }

  for (const [slug, w] of works) await checkWork(slug, w.strict, ctx);
  writeOutput(works);
}

main();
