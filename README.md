# `<la-piscine>` galería de arte

> Tercera versión de la galería en línea de sketches de [p5.js](https://p5js.org/) realizados por estudiantes de **Artes Multimediales 1, cátedra Lacabanne** — [Universidad Nacional de las Artes (UNA)](https://una.edu.ar).

[![Deploy to GitHub Pages](https://github.com/knnv-ar/la-piscine/actions/workflows/deploy.yml/badge.svg)](https://github.com/knnv-ar/la-piscine/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-4-FF5D01?logo=astro&logoColor=white)
![Node](https://img.shields.io/badge/Node-≥24-339933?logo=node.js&logoColor=white)
![p5.js](https://img.shields.io/badge/p5.js-1.10-ED225D?logo=p5dotjs&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-es%20%7C%20en-blue)
![Versión](https://img.shields.io/badge/versión-v3-blue)
![Licencia código](https://img.shields.io/badge/código-AGPLv3-blue)
![Licencia obras](https://img.shields.io/badge/obras-licencia%20por%20autor%2Fa-lightgrey)

---

## Tabla de contenidos

- [Sitio en producción](#sitio-en-producción)
- [Características](#características)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Desarrollo local](#desarrollo-local)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Crear una nueva obra](#crear-una-nueva-obra)
- [Dependencias de sketches](#dependencias-de-sketches)
- [Modo mantenimiento](#modo-mantenimiento)
- [Deploy](#deploy)
- [Licencias](#licencias)
- [Créditos](#créditos)

---

## Sitio en producción

| Sitio | URL |
|---|---|
| **Galería (GitHub Pages)** | <https://knnv-ar.github.io/la-piscine/> |
| **Cátedra** | <https://am1-lacabanne.atamvirtual.com.ar> |

---

## Características

- 🖼️ Galería de thumbnails con búsqueda en tiempo real y filtro por año/cuatrimestre.
- 🎨 Páginas individuales que renderizan cada sketch de p5.js con su statement descriptivo.
- 🌐 Internacionalización (i18n) integrada: español (por defecto) e inglés.
- ⚡ Build estático ultra-rápido con [Astro](https://astro.build/).
- 📦 Sincronización automática de assets desde `_projects/` hacia `public/projects/` vía script de pre-build.
- 🔄 Redirecciones legacy automáticas (`statement.html`) para compatibilidad con URLs históricas.
- 🚧 Modo mantenimiento / "En construcción" activable con un único flag.
- 🚀 CI/CD automático con GitHub Actions: push a `main` → deploy a GitHub Pages.

---

## Requisitos previos

| Herramienta | Versión mínima |
|---|---|
| [Node.js](https://nodejs.org/) | 24 |
| [npm](https://www.npmjs.com/) | 10 |
| [Git](https://git-scm.com/) | 2.x |

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/knnv-ar/la-piscine.git
cd la-piscine

# 2. Instalar dependencias
npm install
```

---

## Desarrollo local

```bash
npm run dev
```

El servidor de desarrollo se inicia en **`http://localhost:4321/la-piscine/`** con recarga en vivo (HMR).

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción estático (salida en `dist/`) |
| `npm run preview` | Previsualización del build de producción |
| `npm run sync-assets` | Sincroniza assets de `_projects/` → `public/projects/` |

> **Nota:** `sync-assets` se ejecuta automáticamente antes de `dev` y `build` gracias a los scripts `predev` y `prebuild`.

---

## Estructura del proyecto

```
la-piscine/
├── _projects/                  # Obras de estudiantes (fuente de verdad)
│   └── <año>-tp<n>-<nombre>/
│       ├── statement.mdx       # Frontmatter + contenido bilingüe
│       ├── sketch.js           # Sketch de p5.js
│       └── thumbnail.webp      # Miniatura cuadrada
├── src/
│   ├── components/             # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── SearchBar.astro
│   │   ├── Language.astro
│   │   └── UnderConstruction.astro
│   ├── config.ts               # Configuración global (modo mantenimiento)
│   ├── content/
│   │   └── config.ts           # Schema de colecciones (Zod)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Layout base del sitio
│   │   └── ProjectLayout.astro # Layout de página de obra
│   ├── pages/
│   │   ├── index.astro         # Página principal (ES)
│   │   ├── archivo.astro       # Archivo completo (ES)
│   │   ├── acerca-de.astro     # Acerca de (ES)
│   │   ├── 404.astro           # Página de error
│   │   ├── search-index.json.ts
│   │   ├── projects/           # Rutas dinámicas de obras
│   │   └── en/                 # Páginas en inglés
│   └── utils/
│       ├── dependencies.ts     # Mapa de dependencias CDN
│       ├── licenses.mjs        # Licencias disponibles para las obras
│       ├── selected-projects.ts
│       └── translations.ts     # Diccionario i18n
├── public/
│   └── assets/                 # Favicon, fotos, etc.
├── scripts/
│   ├── sync-assets.mjs         # Sincronización de assets al build
│   ├── check-licenses.mjs      # Chequeo de licencias en pull requests
│   └── rename-projects.mjs     # Utilidad para renombrar carpetas
├── astro.config.mjs            # Configuración de Astro
├── LICENSE                     # AGPLv3 (código de la galería)
├── package.json
├── tsconfig.json
└── .github/
    ├── pull_request_template.md  # Plantilla de montaje de obras
    └── workflows/
        ├── deploy.yml          # CI/CD: build & deploy a GitHub Pages
        └── check-licenses.yml  # Chequeo de licencias en cada PR
```

---

## Crear una nueva obra

1. **Crear la carpeta** del proyecto dentro de `_projects/` siguiendo la convención de nombres:

   ```
   _projects/<año>-tp<n>-<apellido>-<nombre>/
   ```

   Ejemplo: `_projects/2026-tp1-garcia-maria/`

2. **Agregar `sketch.js`** con el código de p5.js. El canvas debe vincularse al div contenedor:

   ```js
   function setup() {
     let canvas = createCanvas(400, 400);
     canvas.parent('div-sketch');
   }
   ```

3. **Agregar `statement.mdx`** con el frontmatter y el contenido bilingüe:

   ```yaml
   ---
   layout: post
   author: María García
   title: Mi obra
   date: 2026-05-15
   year: 2026
   cuatrimestre: primer cuatrimestre
   thumbnail: thumbnail.webp
   license: CC-BY-SA-4.0
   dependencies:
     - p5.v2.3.3
     - p5.sound.v2.3.3
   ---
   ```

   El campo **`license` es obligatorio para las obras nuevas** y lo elige cada autor/a. Las opciones están explicadas en [Licencias](#licencias).

   Debajo del frontmatter, incluir el sketch y los bloques `<Language>`:

   ```html
   <div id="div-sketch">
     <script type="text/javascript" src="sketch.js"></script>
   </div>

   <Language code="es">
   Descripción en español...
   </Language>

   <Language code="en">
   Description in English...
   </Language>
   ```

4. **Agregar una miniatura cuadrada** (`thumbnail.webp` o `thumbnail.png`) en la carpeta del proyecto.

5. **Verificar localmente** con `npm run dev` y navegar al proyecto. Para chequear la licencia antes de abrir el pull request:

   ```bash
   node scripts/check-licenses.mjs --new _projects/2026-tp1-garcia-maria/statement.mdx
   ```

6. **Abrir el pull request** y completar la plantilla: declaración de autoría, licencia elegida y material de terceros. Un chequeo automático verifica que las obras nuevas declaren una licencia válida.

---

## Dependencias de sketches

Las dependencias externas se declaran en el frontmatter del `statement.mdx` y se resuelven automáticamente desde CDN. Las disponibles están definidas en [`src/utils/dependencies.ts`](src/utils/dependencies.ts):

| Clave | Librería |
|---|---|
| `p5.v2.3.3` | p5.js 2.3.3 |
| `p5.sound.v2.3.3` | p5.sound 2.3.3 |
| `p5.v1.11.13` | p5.js 1.11.13 |
| `p5.sound.v1.11.13` | p5.sound 1.10.0 |
| `ml5` | ml5.js 1.x |
| `face-api` | face-api.js |
| `flexbox` | Flexbox Grid |

> Si no se declara ninguna dependencia `p5*`, el sistema incluye `p5` automáticamente.

---

## Modo mantenimiento

Para activar la página "En construcción", editar [`src/config.ts`](src/config.ts):

```ts
export const SITE_CONFIG = {
  maintenanceMode: true, // Cambiar a false para publicar el sitio
};
```

Hacer commit, push, y el sitio mostrará automáticamente la pantalla de mantenimiento.

---

## Deploy

El deploy se gestiona automáticamente mediante **GitHub Actions**. El workflow (`.github/workflows/deploy.yml`) se activa con cada push a la rama `main`:

1. Checkout del repositorio.
2. Instalación de Node.js 24 y dependencias (con caché).
3. Build estático con `npm run build`.
4. Publicación del directorio `dist/` a la rama `gh-pages`.

No se requiere intervención manual. Para desplegar cambios, simplemente:

```bash
git add .
git commit -m "Agrega nueva obra"
git push origin main
```

---

## Licencias

El repositorio contiene dos capas de naturaleza distinta, y por eso se licencian por separado.

### 1. Código de la galería — AGPLv3

El código que hace funcionar la galería (`src/`, `scripts/`, `.github/`, configuración) se publica bajo la [GNU Affero General Public License v3.0](LICENSE) (AGPLv3).

- Cualquiera puede usar, estudiar, copiar y modificar la galería, por ejemplo para montar la de otra cátedra.
- Quien publique una versión modificada, **incluso si sólo la ofrece como sitio web**, debe compartir su código fuente bajo la misma licencia.

Elegimos una licencia *copyleft* porque priorizamos la reciprocidad por sobre la mera circulación: lo que se recibe del común, se devuelve al común.

### 2. Obras de estudiantes — licencia elegida por cada autor/a

Cada obra de `_projects/` (toda su carpeta: `sketch.js`, `statement.mdx`, miniatura y demás archivos) pertenece a su autor/a (Ley 11.723) y **no** está alcanzada por la AGPLv3. Su licencia la elige cada estudiante al montar la obra, en el campo `license` del frontmatter:

| Valor de `license` | Licencia | Qué permite a terceros |
|---|---|---|
| `CC-BY-SA-4.0` *(sugerida)* | [Creative Commons Atribución-CompartirIgual 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) | Copiar, modificar y usar la obra, incluso comercialmente, citando la autoría; las obras derivadas deben llevar la misma licencia. |
| `CC-BY-4.0` | [Creative Commons Atribución 4.0](https://creativecommons.org/licenses/by/4.0/deed.es) | Copiar, modificar y usar la obra, incluso comercialmente, citando la autoría. |
| `CC-BY-NC-SA-4.0` | [Creative Commons Atribución-NoComercial-CompartirIgual 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es) | Igual que BY-SA, pero sin usos comerciales. |
| `all-rights-reserved` | Todos los derechos reservados | Nada: la obra se exhibe en la galería, pero no puede reutilizarse sin permiso de su autor/a. |

- La licencia de cada obra se muestra en su página, con enlace al texto de la licencia.
- **Exhibir no obliga a abrir**: `all-rights-reserved` es una opción válida.
- **Corpus histórico**: las obras montadas antes de esta política no declaran licencia y se consideran `all-rights-reserved` hasta que su autor/a elija otra. Si sos egresado/a y querés licenciar tu obra, escribile a la cátedra o abrí un pull request agregando el campo `license` a tu `statement.mdx`.
- **Material de terceros**: una licencia Creative Commons sólo cubre lo que es del autor/a. Las imágenes, sonidos, tipografías o código ajenos conservan su propia licencia y deben declararse en el statement y en el pull request.

---

## Créditos

- **Antecedente**: la versión 2 (Ruby/Jekyll) se basó en la plantilla [jekyll-p5-portfolio](https://github.com/BenjaminHabert/jekyll-p5-portfolio) de [Benjamin Habert](https://github.com/BenjaminHabert). La versión 3 es una reescritura completa en Astro que conserva de aquella plantilla sus ideas organizadoras (una carpeta por obra, statement con frontmatter, dependencias por proyecto) y la imagen `default_thumbnail.png`.
- **Cátedra**: Artes Multimediales 1 y 4, cátedra Lacabanne — [UNA](https://una.edu.ar).
- **Diseño y desarrollo del proyecto**: Raúl Federico Lacabanne (alias [knnv-ar](https://github.com/knnv-ar)).
- **Framework**: [Astro](https://astro.build/) · [p5.js](https://p5js.org/) · [MDX](https://mdxjs.com/).
