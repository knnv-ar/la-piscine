import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Postbuild Integration to automatically generate statement.html redirection files
function legacyRedirectsIntegration() {
  return {
    name: 'legacy-redirects',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const projectsDir = path.join(outDir, 'projects');
        
        if (!fs.existsSync(projectsDir)) {
          console.log('⚠️ [legacy-redirects] Directorio de proyectos no encontrado en la salida de compilación.');
          return;
        }

        const entries = fs.readdirSync(projectsDir, { withFileTypes: true });
        let count = 0;
        
        for (const entry of entries) {
          if (entry.isDirectory()) {
            const projectPath = path.join(projectsDir, entry.name);
            const redirectFile = path.join(projectPath, 'statement.html');
            
            const htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=./">
    <script type="text/javascript">
      window.location.href = "./";
    </script>
    <title>Redireccionando...</title>
  </head>
  <body>
    Redireccionando a la obra... si no eres redirigido, <a href="./">haz clic aquí</a>.
  </body>
</html>`;
            
            fs.writeFileSync(redirectFile, htmlContent, 'utf-8');
            count++;
          }
        }
        console.log(`\n✨ [legacy-redirects] ¡Creados con éxito ${count} archivos de redirección statement.html para compatibilidad histórica!\n`);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://knnv-ar.github.io',
  base: '/la-piscine',
  integrations: [mdx(), legacyRedirectsIntegration()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

