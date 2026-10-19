import { defineCollection, z } from 'astro:content';
import { LICENSE_IDS, DEFAULT_LICENSE, normalizeLicense } from '../utils/licenses.mjs';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.preprocess(
    (data: any) => {
      if (data && typeof data === 'object') {
        // Map cuatrimestre (1, 2, "primer cuatrimestre", etc.) to semester ("first", "second")
        if (!data.semester && data.cuatrimestre) {
          const cuat = String(data.cuatrimestre).toLowerCase();
          if (cuat.includes('prim') || cuat.includes('1')) {
            data.semester = 'first';
          } else if (cuat.includes('seg') || cuat.includes('2')) {
            data.semester = 'second';
          } else {
            data.semester = 'first'; // Safe fallback
          }
        }

        // Map autor to author
        if (!data.author && data.autor) {
          data.author = data.autor;
        }

        // Set safe default for author
        if (!data.author) {
          data.author = 'Estudiante Cátedra Lacabanne';
        }

        // Ensure year is a number
        if (data.year) {
          data.year = Number(data.year);
        } else if (data.date) {
          data.year = new Date(data.date).getFullYear();
        } else {
          data.year = 2020; // Safe historical default
        }

        // License: accept reasonable spellings ("CC BY-SA 4.0", "todos los derechos reservados")
        // and map them to the canonical id. Works without a license (historical corpus)
        // get DEFAULT_LICENSE via the schema default below.
        if (data.licencia && !data.license) {
          data.license = data.licencia;
        }
        if (data.license === null || data.license === '') {
          delete data.license;
        } else if (data.license !== undefined) {
          data.license = normalizeLicense(data.license);
        }

        // Preprocess dependencies safely (maps null or empty keys to an empty array)
        if (data.dependencies === undefined || data.dependencies === null || !Array.isArray(data.dependencies)) {
          data.dependencies = [];
        } else {
          data.dependencies = data.dependencies.filter(dep => typeof dep === 'string');
        }
      }
      return data;
    },
    z.object({
      layout: z.string().optional(),
      author: z.string().default('Estudiante Cátedra Lacabanne'),
      title: z.string(),
      date: z.coerce.date().optional(),
      year: z.number().default(2020),
      semester: z.enum(['first', 'second']).default('first'),
      thumbnail: z.string().optional(),
      dependencies: z.array(z.string()).default([]),
      license: z
        .enum(LICENSE_IDS, {
          errorMap: () => ({
            message: `Licencia inválida. Valores aceptados: ${LICENSE_IDS.join(', ')}`,
          }),
        })
        .default(DEFAULT_LICENSE),
    })
  ),
});

export const collections = {
  projects: projectsCollection,
};

