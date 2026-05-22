import { defineCollection, z } from 'astro:content';

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
    })
  ),
});

export const collections = {
  projects: projectsCollection,
};

