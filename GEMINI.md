# Project Overview

This is a Jekyll-based website acting as an art gallery/portfolio for p5.js sketches. It is a class project for "Artes Multimediales 1 y 4, cátedra Lacabanne" at the Universidad Nacional de las Artes (UNA). The site is built to be hosted on GitHub Pages and uses a template originally created by Benjamin Habert. It features a homepage that lists projects using thumbnails, and individual pages for each project displaying the p5.js sketch alongside a descriptive statement.

# Building and Running

To run the project locally for development, you need Ruby and Jekyll installed. Use the following commands:

1. Install dependencies (if not already done):
   ```bash
   bundle install
   ```

2. Serve the website locally with live-reload:
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000/la-piscine/`.

# Development Conventions

## Project Structure
- `_config.yml`: Contains global site configuration (title, description, baseurl, etc.).
- `_projects/`: This directory contains all the individual p5.js sketches. Each project lives in its own subdirectory.
- `_data/dependencies.yml`: Manages external dependencies like the p5.js library and its addons.
- `Gemfile`: Manages Ruby dependencies for Jekyll.

## Creating a New Sketch
To add a new project to the portfolio:
1. Create a new folder inside the `_projects/` directory (e.g., `_projects/my-new-sketch`).
2. Add a `sketch.js` file containing your p5.js code. The canvas should be parented to a specific div, typically `canvas.parent('div-sketch');`.
3. Add a `statement.md` (or similarly named markdown file) for the project description. This file must contain YAML front matter specifying the layout, title, date, thumbnail, and dependencies. Example:
   ```yaml
   ---
   layout: post
   title: "My New Sketch"
   date: 2026-05-15
   thumbnail: thumbnail.png
   dependencies:
     - p5
     - p5.sound
   ---
   ```
   Below the front matter, include the HTML to load the sketch and the text description:
   ```html
   <div id="div-sketch">
     <script type="text/javascript" src="sketch.js"></script>
   </div>
   ```
4. Add a square thumbnail image (e.g., `thumbnail.png`) in the project's folder.
