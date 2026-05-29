# `<la-piscine>` galería de arte

> Tercera versión de la galería en línea de sketches de [p5.js](https://p5js.org/) realizados por estudiantes de **Artes Multimediales 1, cátedra Lacabanne** — [Universidad Nacional de las Artes (UNA)](https://una.edu.ar).

[![Deploy to GitHub Pages](https://github.com/knnv-ar/la-piscine/actions/workflows/deploy.yml/badge.svg)](https://github.com/knnv-ar/la-piscine/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-4-FF5D01?logo=astro&logoColor=white)
![Node](https://img.shields.io/badge/Node-≥24-339933?logo=node.js&logoColor=white)
![p5.js](https://img.shields.io/badge/p5.js-1.10-ED225D?logo=p5dotjs&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-es%20%7C%20en-blue)
![Versión](https://img.shields.io/badge/versión-v3-blue)

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
│       ├── selected-projects.ts
│       └── translations.ts     # Diccionario i18n
├── public/
│   └── assets/                 # Favicon, fotos, etc.
├── scripts/
│   ├── sync-assets.mjs         # Sincronización de assets al build
│   └── rename-projects.mjs     # Utilidad para renombrar carpetas
├── astro.config.mjs            # Configuración de Astro
├── package.json
├── tsconfig.json
└── .github/
    └── workflows/
        └── deploy.yml          # CI/CD: build & deploy a GitHub Pages
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
   dependencies:
     - p5
     - p5.sound
   ---
   ```

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

5. **Verificar localmente** con `npm run dev` y navegar al proyecto.

---

## Dependencias de sketches

Las dependencias externas se declaran en el frontmatter del `statement.mdx` y se resuelven automáticamente desde CDN. Las disponibles están definidas en [`src/utils/dependencies.ts`](src/utils/dependencies.ts):

| Clave | Librería |
|---|---|
| `p5` | p5.js 1.10.0 |
| `p5.sound` | p5.sound 1.10.0 |
| `p5.v150` | p5.js 1.5.0 (legacy) |
| `p5.v180` | p5.js 1.8.0 (legacy) |
| `p5.sound.v150` | p5.sound 1.5.0 (legacy) |
| `p5.sound.v180` | p5.sound 1.8.0 (legacy) |
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

## Créditos

- **Proyecto original**: plantilla portfolio de p5.js creada por [Benjamin Habert](https://github.com/benjaminhabert).
- **Cátedra**: Artes Multimediales 1 y 4, cátedra Lacabanne — [UNA](https://una.edu.ar).
- **Diseño y desarrollo del proyecto**: Raúl Federico Lacabanne (alias [knnv-ar](https://github.com/knnv-ar)).
- **Framework**: [Astro](https://astro.build/) · [p5.js](https://p5js.org/) · [MDX](https://mdxjs.com/).
