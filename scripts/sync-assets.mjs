import fs from 'fs';
import path from 'path';

const rawProjectsDir = path.resolve('_projects');
const astroContentProjectsDir = path.resolve('src/content/projects');
const publicProjectsDir = path.resolve('public/projects');

// Helper to copy directory recursively, ignoring markdown files
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      // Skip Markdown statement files
      if (ext === '.md' || ext === '.mdx') {
        continue;
      }
      // Skip files containing '#' in their name to prevent Astro/Vite build crashes on Windows/macOS/Linux
      if (entry.name.includes('#')) {
        console.log(`  ⚠️ Saltando archivo con '#' en el nombre para evitar fallos de compilación: ${entry.name}`);
        continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper to rewrite student relative asset paths to absolute site-relative paths
// This prevents Astro from trying to resolve relative images at compile-time
function fixRelativeAssetPaths(content, slug) {
  let fixedContent = content;

  // 1. Match Markdown images: ![alt](relative_path)
  // Negative lookahead for http://, https://, /, data:
  const mdImageRegex = /!\[([^\]]*?)\]\((?!https?:\/\/|\/|data:)(.+?)\)/g;
  fixedContent = fixedContent.replace(mdImageRegex, (match, alt, relPath) => {
    const cleanPath = relPath.replace(/^\.\//, '');
    const newPath = `/la-piscine/projects/${slug}/${cleanPath}`;
    return `![${alt}](${newPath})`;
  });

  // 2. Match HTML img tags: <img ... src="relative_path" ...>
  const htmlImgRegex = /<img\s+([^>]*?)src=["'](?!https?:\/\/|\/|data:)(.+?)["']([^>]*?)>/g;
  fixedContent = fixedContent.replace(htmlImgRegex, (match, before, relPath, after) => {
    const cleanPath = relPath.replace(/^\.\//, '');
    const newPath = `/la-piscine/projects/${slug}/${cleanPath}`;
    return `<img ${before}src="${newPath}"${after}>`;
  });

  return fixedContent;
}

// Helper to fix malformed historical front-matter blocks
function fixFrontMatter(content, slug) {
  let fixedContent = content;
  const trimmed = fixedContent.trim();
  
  // 1. Handle completely empty or extremely short files
  if (!trimmed) {
    console.log(`  🔧 Corrigiendo archivo markdown vacío en: ${slug}`);
    return `---
title: "${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}"
author: "Estudiante Cátedra Lacabanne"
year: 2020
semester: "first"
dependencies:
  - p5
  - p5.sound
---
<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>
`;
  }

  // 2. Check if opening '---' is missing but closing '---' is present
  if (!trimmed.startsWith('---')) {
    const parts = fixedContent.split('---');
    if (parts.length > 1) {
      const beforeFirstDashes = parts[0];
      const lines = beforeFirstDashes.split('\n').map(l => l.trim()).filter(Boolean);
      const hasFrontMatterKey = lines.some(line => {
        const lower = line.toLowerCase();
        return lower.startsWith('layout:') || 
               lower.startsWith('title:') || 
               lower.startsWith('date:') || 
               lower.startsWith('thumbnail:') ||
               lower.startsWith('cuatrimestre:') ||
               lower.startsWith('semester:') ||
               lower.startsWith('year:') ||
               lower.startsWith('author:') ||
               lower.startsWith('autor:');
      });
      
      if (hasFrontMatterKey && lines.length > 0) {
        console.log(`  🔧 Corrigiendo front-matter malformado (falta '---' inicial) en: ${slug}`);
        fixedContent = `---\n${fixedContent}`;
      }
    }
  }

  // 3. Check if there are at least two '---' markers (to enclose front matter)
  const dashesCount = (fixedContent.match(/^---/gm) || []).length;
  if (dashesCount < 2) {
    console.log(`  🔧 Generando front-matter faltante en: ${slug}`);
    const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    // Check if the content already has a div-sketch, if not, let's add one
    const hasDivSketch = fixedContent.includes('div-sketch') || fixedContent.includes('sketch.js');
    const bodySuffix = hasDivSketch ? '' : `\n\n<div id="div-sketch">\n  <script type="text/javascript" src="sketch.js"></script>\n</div>`;
    
    fixedContent = `---
title: "${readableTitle}"
author: "Estudiante Cátedra Lacabanne"
year: 2020
semester: "first"
dependencies:
  - p5
  - p5.sound
---

${fixedContent}${bodySuffix}`;
  }
  
  // 4. Ensure title is present in front-matter, and strip legacy 'layout'
  const regex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = fixedContent.match(regex);
  if (match) {
    const fmBlock = match[1];
    
    // Strip layout property
    let cleanLines = fmBlock.split('\n').filter(line => {
      const trimmedLine = line.trim();
      return !trimmedLine.toLowerCase().startsWith('layout:');
    });
    
    // Ensure title is present
    const hasTitle = cleanLines.some(line => {
      const trimmedLine = line.trim();
      return trimmedLine.toLowerCase().startsWith('title:');
    });
    
    if (!hasTitle) {
      console.log(`  🔧 Corrigiendo front-matter malformado (falta 'title') en: ${slug}`);
      const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      cleanLines.unshift(`title: "${readableTitle}"`);
    }
    
    const cleanFmBlock = cleanLines.join('\n');
    fixedContent = fixedContent.replace(regex, `---\n${cleanFmBlock}\n---`);
  }
  
  return fixedContent;
}

function main() {
  console.log('🔄 Sincronizando recursos de los estudiantes de p5.js...');
  const startTime = Date.now();

  // Create or clean src/content/projects
  if (fs.existsSync(astroContentProjectsDir)) {
    fs.rmSync(astroContentProjectsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(astroContentProjectsDir, { recursive: true });

  // Create or clean public/projects
  if (fs.existsSync(publicProjectsDir)) {
    fs.rmSync(publicProjectsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(publicProjectsDir, { recursive: true });

  if (!fs.existsSync(rawProjectsDir)) {
    console.error(`❌ Directorio de origen _projects no encontrado.`);
    process.exit(1);
  }

  // Scan all project folders in _projects
  const projects = fs.readdirSync(rawProjectsDir, { withFileTypes: true });

  let count = 0;
  for (const project of projects) {
    if (project.isDirectory()) {
      const slug = project.name;
      const projectSrcDir = path.join(rawProjectsDir, slug);

      // Find any markdown file in the root of this project folder
      const files = fs.readdirSync(projectSrcDir);
      const mdFile = files.find(f => {
        const ext = path.extname(f).toLowerCase();
        return ext === '.md' || ext === '.mdx';
      });

      if (mdFile) {
        const mdSrcPath = path.join(projectSrcDir, mdFile);
        const mdDestPath = path.join(astroContentProjectsDir, `${slug}${path.extname(mdFile)}`);
        
        // Read file content, run processing heuristics, and write back
        const rawContent = fs.readFileSync(mdSrcPath, 'utf-8');
        let processedContent = fixFrontMatter(rawContent, slug);
        processedContent = fixRelativeAssetPaths(processedContent, slug);
        fs.writeFileSync(mdDestPath, processedContent, 'utf-8');
      } else {
        // Fallback placeholder markdown if no statement file is found
        const fallbackContent = `---
title: "${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}"
author: "Estudiante Cátedra Lacabanne"
year: 2020
semester: "first"
dependencies:
  - p5
  - p5.sound
---
<div id="div-sketch">
  <script type="text/javascript" src="sketch.js"></script>
</div>
`;
        fs.writeFileSync(path.join(astroContentProjectsDir, `${slug}.md`), fallbackContent, 'utf-8');
      }

      // Copy non-markdown files and subfolders to public/projects/[slug]
      const projectDestDir = path.join(publicProjectsDir, slug);
      copyDirRecursive(projectSrcDir, projectDestDir);
      count++;
    }
  }

  // Copy global theme assets (favicon and default thumbnail)
  const globalSrcDir = path.resolve('assets');
  const globalDestDir = path.resolve('public/assets');
  if (fs.existsSync(globalSrcDir)) {
    if (!fs.existsSync(globalDestDir)) {
      fs.mkdirSync(globalDestDir, { recursive: true });
    }
    const globalAssets = ['favicon.png', 'default_thumbnail.png'];
    for (const asset of globalAssets) {
      const srcAssetPath = path.join(globalSrcDir, asset);
      const destAssetPath = path.join(globalDestDir, asset);
      if (fs.existsSync(srcAssetPath)) {
        fs.copyFileSync(srcAssetPath, destAssetPath);
      }
    }
    console.log('✨ Recursos globales del tema sincronizados con éxito.');
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`✅ ¡Recursos sincronizados con éxito! ${count} carpetas de proyectos procesadas en ${elapsed}s.`);
}

main();
