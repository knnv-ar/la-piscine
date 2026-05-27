import fs from 'fs';
import path from 'path';

// Common first names in Spanish and other languages
const FIRST_NAMES = new Set([
  'camila', 'martin', 'farid', 'julian', 'carla', 'javier', 'oscar', 'agustin', 'agustina',
  'micaela', 'ivan', 'sofia', 'anabel', 'ramiro', 'renata', 'raul', 'andres', 'martina',
  'jesica', 'nahuel', 'ludmila', 'cesia', 'damaris', 'amparo', 'melanie', 'jazmin',
  'nicolas', 'valentina', 'lourdes', 'estefania', 'francisco', 'angie', 'luciana', 'noah',
  'finn', 'yofrel', 'silvina', 'belen', 'mauro', 'malena', 'florencia', 'ayelen', 'yanina',
  'candelaria', 'magali', 'bryan', 'ezequiel', 'felipe', 'dorel', 'ignacio', 'pedro',
  'luca', 'saagar', 'mateo', 'lucas', 'santiago', 'tomas', 'benjamin', 'joaquin', 'lautaro',
  'franco', 'facundo', 'matias', 'emiliano', 'enzo', 'bruno', 'gaston', 'leandro', 'marcos',
  'manuel', 'lucio', 'guido', 'alan', 'gonzalo', 'rodrigo', 'juan', 'jose', 'carlos',
  'luis', 'miguel', 'angel', 'daniel', 'eduardo', 'fernando', 'pablo', 'sergio', 'jorge',
  'mariano', 'walter', 'gabriel', 'damian', 'cristian', 'ariel', 'sebastian', 'claudio',
  'adrian', 'hugo', 'roberto', 'marcelo', 'diego', 'alberto', 'victor', 'julio', 'hernan',
  'gustavo', 'alejandro', 'federico', 'leonardo', 'bautista', 'francesco', 'ian', 'thiago',
  'camilo', 'simon', 'tiziano', 'lisandro', 'maria', 'mariela', 'mariana', 'marina',
  'milagros', 'morena', 'melina', 'melisa', 'mercedes', 'mirta', 'monica', 'natalia',
  'noelia', 'norma', 'olga', 'patricia', 'paula', 'paulina', 'pilar', 'ramona', 'raquel',
  'rebeca', 'romina', 'rosana', 'rosa', 'roxana', 'ruth', 'sabrina', 'sandra', 'silvia',
  'sol', 'solange', 'soledad', 'stella', 'susana', 'tamara', 'tatiana', 'teresa', 'valeria',
  'valeska', 'vanesa', 'veronica', 'victoria', 'virginia', 'viviana', 'yamila', 'yisela',
  'yolanda', 'zulma', 'abril', 'adela', 'adelaida', 'adriana', 'agata', 'agueda', 'aida',
  'aileen', 'alba', 'aldana', 'alejandra', 'alicia', 'alma', 'amalia', 'amanda', 'ana',
  'anahi', 'analia', 'andrea', 'angela', 'angeles', 'angelica', 'antonia', 'araceli',
  'aranzazu', 'ariadna', 'ariana', 'astrid', 'aura', 'aurora', 'azucena', 'barbara',
  'beatriz', 'berenice', 'bernadette', 'betina', 'bianca', 'bibiana', 'blanca', 'brenda',
  'brigida', 'candela', 'carina', 'carlota', 'carmen', 'carola', 'carolina', 'catalina',
  'cecilia', 'celeste', 'celina', 'clara', 'claudia', 'clementina', 'cleopatra', 'constanza',
  'cora', 'coral', 'cristina', 'cruz', 'daiana', 'dalia', 'dalma', 'debora', 'delia',
  'delfina', 'demetria', 'diana', 'dolores', 'dora', 'doris', 'dulce', 'elena', 'eleonora',
  'eliana', 'elisa', 'elisabet', 'elisabeth', 'elizabeth', 'elsa', 'elvira', 'ema',
  'emilia', 'emilse', 'estela', 'ester', 'estrella', 'eugenia', 'eva', 'evangelina',
  'evelyn', 'fabiana', 'fanny', 'fatima', 'fedra', 'felicitas', 'felisa', 'fiorella',
  'flavia', 'francisca', 'gema', 'georgina', 'geraldine', 'gilda', 'gisel', 'gisela',
  'giselle', 'gladys', 'gloria', 'gracia', 'graciela', 'greta', 'guadalupe', 'guillermina',
  'haydee', 'helena', 'ilda', 'ines', 'ingrid', 'irene', 'iris', 'isabel', 'isabela',
  'isadora', 'ivana', 'ivone', 'jacinta', 'janet', 'jennifer', 'joana', 'jorgelina',
  'josefa', 'josefina', 'juana', 'juanita', 'julia', 'julieta', 'justina', 'karen',
  'karina', 'karla', 'katherina', 'katherine', 'katia', 'lara', 'laura', 'lea', 'leila',
  'lelia', 'leonor', 'leticia', 'lia', 'liana', 'libertad', 'lidia', 'ligia', 'lilia',
  'liliana', 'lina', 'linda', 'lisa', 'livia', 'lola', 'lorena', 'lucia', 'lucila',
  'lucrecia', 'luisa', 'lujan', 'luz', 'macarena', 'mafalda', 'magdalena', 'maia',
  'maira', 'margarita', 'marian', 'maribel', 'mariel', 'marilena', 'marilina', 'mariluz',
  'marisa', 'marisol', 'marta', 'martha', 'maximiliano', 'gaspar', 'octavio', 'nataniel',
  'ulises', 'valerio', 'walter', 'william', 'wilson', 'yamil', 'zacarias', 'ruben',
  'patricio', 'agustino', 'augusto', 'abel', 'adolfo', 'alberto', 'aldo', 'alonso',
  'alvaro', 'amadeo', 'amado', 'anibal', 'anselmo', 'antonio', 'apolinar', 'ariel',
  'aristides', 'arnaldo', 'arturo', 'atanasio', 'aurelio', 'baldomero', 'baltasar',
  'bartolome', 'basilio', 'benedicto', 'bernardino', 'bernardo', 'blas', 'bonifacio',
  'bonito', 'calixto', 'camilo', 'candelario', 'carlomagno', 'casimiro', 'cayetano',
  'ceferino', 'celestino', 'celso', 'cesar', 'cipriano', 'cirilo', 'ciro', 'clemente',
  'conrado', 'constantino', 'cornelio', 'cosme', 'cristobal', 'dacio', 'damaso',
  'dario', 'demetrio', 'diodoro', 'diogenes', 'dionisio', 'domingo', 'donato', 'duilio',
  'edilberto', 'edgardo', 'edmundo', 'efrain', 'eleuterio', 'eligio', 'elias', 'eliseo',
  'eloy', 'elpidio', 'emerio', 'emeterio', 'emilio', 'eneas', 'enrique', 'epifanio',
  'erasmo', 'erick', 'erico', 'ernesto', 'esteban', 'estanislao', 'eugenio', 'eusebio',
  'eustaquio', 'eutropio', 'evelio', 'evaristo', 'ezequiel', 'fabian', 'fabio', 'fabricio',
  'faustino', 'fausto', 'federico', 'feliciano', 'felipe', 'felix', 'fermin', 'fernando',
  'fidel', 'filemon', 'filiberto', 'florentino', 'florian', 'fortunato', 'francisco',
  'franco', 'fulgencio', 'gabriel', 'galileo', 'gaspar', 'gaston', 'generoso', 'gerardo',
  'german', 'gerson', 'gervasio', 'gilberto', 'giraldo', 'gonzalo', 'gregorio', 'gualberto',
  'guido', 'guillermo', 'gustavo', 'haroldo', 'hector', 'helidoro', 'heraclio', 'heriberto',
  'herman', 'hermogenes', 'hernando', 'hilario', 'hipolito', 'homer', 'homero', 'honorio',
  'horacio', 'hugo', 'humberto', 'ignacio', 'ildefonso', 'ineo', 'inocencio', 'ireneo',
  'isaac', 'isidoro', 'isidro', 'ismael', 'jacinto', 'jacobo', 'jaime', 'jair', 'jared',
  'javier', 'jeronimo', 'jesus', 'joaquin', 'jonas', 'jonatan', 'jonathan', 'jorge',
  'josue', 'jovito', 'juan', 'julian', 'julio', 'justo', 'juvenal', 'ladislao', 'laureano',
  'lazaro', 'leandro', 'leocadio', 'leon', 'leonardo', 'leonidas', 'leopoldo', 'liberato',
  'licerio', 'lino', 'lisandro', 'lorenzo', 'lucas', 'luciano', 'lucio', 'ludovico',
  'luis', 'macario', 'macedonio', 'mamerto', 'manuel', 'manolo', 'marcelino', 'marcelo',
  'marcial', 'marco', 'marcos', 'mariano', 'mario', 'martin', 'mateo', 'matias',
  'mauricio', 'mauro', 'maximo', 'melchor', 'meliton', 'miguel', 'milton', 'moises',
  'narciso', 'natalio', 'nazario', 'neftali', 'nelson', 'nery', 'nestor', 'nicanor',
  'nicolas', 'nicomedes', 'noel', 'norberto', 'octavio', 'ofelio', 'oliverio', 'omar',
  'onofre', 'orestes', 'orlando', 'oscar', 'osiris', 'oswaldo', 'otilio', 'ovidio',
  'pablo', 'panfilo', 'pascual', 'pastor', 'patricio', 'paulino', 'pedro', 'pelayo',
  'placido', 'plinio', 'pompeyo', 'porfirio', 'primitivo', 'radamel', 'rafael', 'ramiro',
  'ramon', 'raul', 'raymundo', 'regulo', 'reinaldo', 'rene', 'renegado', 'rey', 'reynaldo',
  'ricardo', 'rigoberto', 'roberto', 'roco', 'rodolfo', 'rodrigo', 'rogelio', 'roque',
  'rosendo', 'ruben', 'rufinio', 'ruperto', 'salomon', 'salvador', 'samuel', 'sancho',
  'santiago', 'saturnino', 'saul', 'sebastian', 'segundo', 'sergio', 'severino',
  'severo', 'sigfredo', 'silvano', 'silverio', 'silvestre', 'silvio', 'simon', 'sixto',
  'solomon', 'tadeo', 'telmo', 'teodoro', 'teofilo', 'tito', 'tobias', 'tomas', 'toribio',
  'ulises', 'valentin', 'valerio', 'valeriano', 'vance', 'vicente', 'victor', 'victoriano',
  'victorino', 'vidal', 'virgilio', 'vladimir', 'waldo', 'walter', 'wenceslao', 'wilfredo',
  'williams', 'willy', 'yamil', 'yuri', 'zacarias', 'zenon', 'zoilo', 'iara', 'olivia'
]);

const PARTICLES = new Set(['de', 'del', 'la', 'las', 'los', 'y', 'von', 'van']);

// Normalization function (strip accents, ñ -> n, lowercase)
function normalizeString(str) {
  if (!str) return '';
  let s = str.replace(/ñ/g, 'n').replace(/Ñ/g, 'n');
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // replace any non-alphanumeric (except space/hyphen) to clean up characters like apostrophes
  s = s.replace(/[^a-zA-Z0-9\s-]/g, '');
  return s.toLowerCase().trim();
}

function cleanAuthorName(author) {
  if (!author) return '';
  
  // Strip trailing commas and years/dates (e.g. ", 2024" or ", 2024.")
  let clean = author.replace(/,\s*\d{4}\.?$/, '').trim();
  
  // Specific override for Dorel Capris
  if (clean.toLowerCase() === 'dorel capris/la autor/a') {
    return 'Dorel Capris';
  }

  // 1. If it contains "a.k.a" or "aka", take everything before it
  const akaIdx = clean.toLowerCase().indexOf('a.k.a');
  if (akaIdx !== -1) {
    clean = clean.substring(0, akaIdx);
  }
  const akaIdx2 = clean.toLowerCase().indexOf(' aka ');
  if (akaIdx2 !== -1) {
    clean = clean.substring(0, akaIdx2);
  }
  
  // 2. Nicknames and parentheses
  const parenMatch = clean.match(/\(([^)]+)\)/);
  if (parenMatch) {
    const inside = parenMatch[1];
    const outside = clean.replace(/\([^)]+\)/g, ' ').trim();
    const outsideWords = outside.split(/\s+/).filter(Boolean);
    
    // Check if outside is just a nickname like Vange01, 0livia, or Krea
    const looksLikeNickname = outsideWords.length === 1 && 
      (/\d/.test(outsideWords[0]) || 
       !FIRST_NAMES.has(normalizeString(outsideWords[0])) || 
       outsideWords[0].toLowerCase() === 'krea');
      
    if (looksLikeNickname) {
      clean = inside;
    } else {
      // Keep both but remove parentheses
      clean = clean.replace(/[()]/g, ' ');
    }
  }
  
  // Clean single-letter middle initials followed by a dot (e.g. "D.")
  clean = clean.replace(/\b[A-Za-z]\./g, ' ');
  // Clean punctuation (keep comma if it's "Last, First")
  clean = clean.replace(/[;.#]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean;
}

function splitName(author) {
  const cleaned = cleanAuthorName(author);
  
  // If there's a comma inside the name after cleaning, it's typically "Lastnames, Firstnames"
  if (cleaned.includes(',')) {
    const parts = cleaned.split(',');
    return {
      last: parts[0].split(/\s+/).filter(Boolean),
      first: parts[1].split(/\s+/).filter(Boolean)
    };
  }

  const words = cleaned.split(/\s+/).filter(Boolean);
  
  if (words.length <= 1) {
    return {
      first: words,
      last: []
    };
  }

  // Specific name overrides
  const cleanedLower = cleaned.toLowerCase();
  if (cleanedLower === 'iaria javier oscar') {
    return { last: ['Iaria'], first: ['Javier', 'Oscar'] };
  }
  if (cleanedLower === 'aguiar agustina') {
    return { last: ['Aguiar'], first: ['Agustina'] };
  }
  if (cleanedLower === 'bermudez koleff lourdes estefania') {
    return { last: ['Bermúdez', 'Koleff'], first: ['Lourdes', 'Estefanía'] };
  }
  if (cleanedLower === 'ponce de leon bautista noe') {
    return { last: ['Ponce', 'de', 'León'], first: ['Bautista', 'Noé'] };
  }

  const first = [];
  const last = [];
  const normalizedWords = words.map(w => normalizeString(w));
  
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const norm = normalizedWords[i];
    
    if (PARTICLES.has(norm)) {
      last.push(w);
    } else if (FIRST_NAMES.has(norm)) {
      first.push(w);
    } else {
      last.push(w);
    }
  }
  
  if (last.length === 0) {
    last.push(first.pop());
  } else if (first.length === 0) {
    first.push(last.shift());
  }
  
  return { first, last };
}

function getFolderSlug(author, year, cuatrimestre) {
  const { first, last } = splitName(author);
  
  const cuat = String(cuatrimestre).toLowerCase();
  let trabajo = 'tp1';
  if (cuat.includes('seg') || cuat.includes('2')) {
    trabajo = 'tp2';
  }
  
  const lastStr = last.map(w => normalizeString(w)).filter(Boolean).join('-');
  const firstStr = first.map(w => normalizeString(w)).filter(Boolean).join('-');
  
  const nameSlug = `${lastStr}-${firstStr}`;
  const yearStr = normalizeString(year);
  
  return `${yearStr}-${trabajo}-${nameSlug}`;
}

const projectsDir = path.resolve('_projects');
const isDryRun = process.argv.includes('--dry-run');

function main() {
  console.log(`Starting rename task... Mode: ${isDryRun ? 'DRY RUN (Simulation)' : 'REAL RENAME (Action)'}`);
  
  if (!fs.existsSync(projectsDir)) {
    console.error(`Error: _projects directory not found at ${projectsDir}`);
    process.exit(1);
  }

  const folders = fs.readdirSync(projectsDir);
  const projects = [];
  const slugCounts = {};

  // First pass: extract metadata and generate slugs
  for (const folder of folders) {
    const folderPath = path.join(projectsDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const files = fs.readdirSync(folderPath);
    const statementFile = files.find(f => f === 'statement.mdx' || f === 'statement.md');

    if (!statementFile) {
      console.warn(`⚠️ Warning: No statement file in folder "${folder}". Skipping.`);
      continue;
    }

    const filePath = path.join(folderPath, statementFile);
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) {
      console.warn(`⚠️ Warning: No valid front matter in "${folder}/statement.mdx". Skipping.`);
      continue;
    }

    const fm = match[1];
    const lines = fm.split('\n');
    const data = {};
    for (const line of lines) {
      const idx = line.indexOf(':');
      if (idx === -1) continue;
      const key = line.substring(0, idx).trim();
      const val = line.substring(idx + 1).trim().replace(/^['"]|['"]$/g, '');
      data[key] = val;
    }

    const author = data.author || data.autor || 'Estudiante Catedra Lacabanne';
    const year = data.year || (data.date ? new Date(data.date).getFullYear() : 2020);
    const cuatrimestre = data.cuatrimestre || 'primer cuatrimestre';

    const baseSlug = getFolderSlug(author, year, cuatrimestre);
    if (!slugCounts[baseSlug]) {
      slugCounts[baseSlug] = [];
    }

    const project = {
      folder,
      folderPath,
      author,
      year,
      cuatrimestre,
      baseSlug,
    };
    slugCounts[baseSlug].push(project);
    projects.push(project);
  }

  // Resolve duplicate slugs by appending original project slug as a suffix
  for (const [slug, entries] of Object.entries(slugCounts)) {
    if (entries.length > 1) {
      console.log(`💡 Duplicate detected for slug "${slug}": ${entries.length} entries.`);
      for (const entry of entries) {
        entry.finalSlug = `${slug}-${entry.folder}`;
        console.log(`   - "${entry.folder}" renamed to "${entry.finalSlug}"`);
      }
    } else {
      entries[0].finalSlug = slug;
    }
  }

  console.log(`Parsed ${projects.length} valid projects.`);

  if (isDryRun) {
    console.log('\n--- DRY RUN RENAMES PROPOSED ---');
    for (const p of projects) {
      console.log(`[DRY RUN] Rename "${p.folder}" -> "${p.finalSlug}"`);
    }
    console.log('\nDry run completed. No files were modified.');
    return;
  }

  // Helper function to perform robust renaming with retries on Windows EPERM lock errors
  function robustRenameSync(src, dest) {
    let attempts = 0;
    const maxAttempts = 15;
    while (attempts < maxAttempts) {
      try {
        fs.renameSync(src, dest);
        return;
      } catch (err) {
        if (err.code === 'EPERM' || err.code === 'EACCES') {
          attempts++;
          if (attempts >= maxAttempts) {
            throw err;
          }
          // Synchronous block/sleep for 150ms before retrying
          const start = Date.now();
          while (Date.now() - start < 150) {}
        } else {
          throw err;
        }
      }
    }
  }

  // Real renaming pass: Single-pass renaming with robust retries
  console.log('\n--- EXECUTING SAFELY IN ONE PASS WITH RETRIES ---');
  let successCount = 0;
  for (const p of projects) {
    const targetPath = path.join(projectsDir, p.finalSlug);
    if (p.folderPath === targetPath) {
      // Already has the correct name, skip
      successCount++;
      continue;
    }
    
    try {
      robustRenameSync(p.folderPath, targetPath);
      successCount++;
    } catch (err) {
      console.error(`❌ Failed to rename "${p.folder}" to target "${p.finalSlug}":`, err);
    }
  }

  console.log(`\n🎉 Success! Renamed ${successCount} of ${projects.length} project folders successfully.`);
}

main();
