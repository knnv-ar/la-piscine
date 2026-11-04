// Licencias disponibles para las obras de <la-piscine>.
// Fuente única: la usan el esquema de contenidos (src/content/config.ts),
// la página de cada obra (ProjectLayout.astro) y el chequeo de pull requests
// (scripts/check-licenses.mjs). Para agregar una opción, editar sólo este archivo.

/** Identificadores válidos para el campo `license` del frontmatter. */
export const LICENSE_IDS = /** @type {const} */ ([
  'CC-BY-SA-4.0',
  'CC-BY-4.0',
  'CC-BY-NC-SA-4.0',
  'all-rights-reserved',
]);

/** Licencia sugerida por la cátedra. */
export const SUGGESTED_LICENSE = 'CC-BY-SA-4.0';

/** Valor que reciben las obras que no declaran licencia (corpus histórico). */
export const DEFAULT_LICENSE = 'all-rights-reserved';

/** Explicación de la política de licencias en el repositorio. */
export const LICENSE_POLICY_URL = 'https://github.com/knnv-ar/la-piscine#licencias';

/** Nombres y enlaces de cada licencia, por idioma. */
export const LICENSES = {
  'CC-BY-SA-4.0': {
    short: 'CC BY-SA 4.0',
    name: {
      es: 'Creative Commons Atribución-CompartirIgual 4.0 Internacional',
      en: 'Creative Commons Attribution-ShareAlike 4.0 International',
    },
    url: {
      es: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
      en: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
    },
  },
  'CC-BY-4.0': {
    short: 'CC BY 4.0',
    name: {
      es: 'Creative Commons Atribución 4.0 Internacional',
      en: 'Creative Commons Attribution 4.0 International',
    },
    url: {
      es: 'https://creativecommons.org/licenses/by/4.0/deed.es',
      en: 'https://creativecommons.org/licenses/by/4.0/deed.en',
    },
  },
  'CC-BY-NC-SA-4.0': {
    short: 'CC BY-NC-SA 4.0',
    name: {
      es: 'Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional',
      en: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International',
    },
    url: {
      es: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es',
      en: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en',
    },
  },
  'all-rights-reserved': {
    short: {
      es: 'Todos los derechos reservados',
      en: 'All rights reserved',
    },
    name: {
      es: 'Todos los derechos reservados: la obra se exhibe en la galería, pero no puede reutilizarse sin permiso de su autor/a',
      en: 'All rights reserved: the artwork is exhibited in the gallery but may not be reused without its author’s permission',
    },
    url: {
      es: LICENSE_POLICY_URL,
      en: LICENSE_POLICY_URL,
    },
  },
};

/**
 * Normaliza las variantes razonables con que puede escribirse una licencia
 * ("CC BY-SA 4.0", "cc-by-sa-4.0", "Todos los derechos reservados", etc.)
 * al identificador canónico. Devuelve el texto original si no la reconoce,
 * para que la validación posterior informe el error.
 * @param {unknown} value
 * @returns {unknown}
 */
export function normalizeLicense(value) {
  if (typeof value !== 'string') return value;
  const key = value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const aliases = {
    'cc-by-sa-4.0': 'CC-BY-SA-4.0',
    'cc-by-4.0': 'CC-BY-4.0',
    'cc-by-nc-sa-4.0': 'CC-BY-NC-SA-4.0',
    'all-rights-reserved': 'all-rights-reserved',
    'todos-los-derechos-reservados': 'all-rights-reserved',
  };
  return aliases[key] ?? value;
}

/**
 * Datos para mostrar una licencia en un idioma dado.
 * @param {string} id
 * @param {'es' | 'en'} locale
 */
export function getLicenseDisplay(id, locale = 'es') {
  const entry = LICENSES[id] ?? LICENSES[DEFAULT_LICENSE];
  const short = typeof entry.short === 'string' ? entry.short : entry.short[locale];
  return { short, name: entry.name[locale], url: entry.url[locale] };
}
