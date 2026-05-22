const translations = {
  es: {
    'site.title': '<la-piscine> galería de arte',
    'site.description': 'Espacio expositivo de arte digital contemporáneo de la cátedra Lacabanne (UNA)',
    'nav.home': 'Inicio',
    'nav.archive': 'Archivo',
    'nav.about': 'Acerca de',
    'search.placeholder': 'Buscar por obra, artista, año, semestre...',
    'search.noResults': 'No se encontraron proyectos para esta selección.',
    'project.fullScreen': 'Pantalla Completa',
    'project.restart': 'Reiniciar Obra',
    'project.credits': 'Presentación de la Obra',
    'project.bio': 'Biografía del Artista',
    'project.semester': 'Semestre',
    'project.year': 'Año',
    'project.author': 'Artista',
    'project.first': 'Primer Semestre',
    'project.second': 'Segundo Semestre',
    'archive.title': 'Todos los proyectos',
    'archive.back': '← Volver al inicio',
    'home.rss': 'Suscribirse a través de RSS',
    'home.all': 'Todos los proyectos',
    'home.subtitle': 'Artes Multimediales, cátedra Lacabanne | Universidad Nacional de las Artes',
    'language.label': 'English Version',
    'language.targetCode': 'en',
    'language.targetName': 'EN'
  },
  en: {
    'site.title': '<la-piscine> art gallery',
    'site.description': 'Contemporary digital art exhibition space by the Lacabanne chair (UNA)',
    'nav.home': 'Home',
    'nav.archive': 'Archive',
    'nav.about': 'About',
    'search.placeholder': 'Search by artwork, artist, year, semester...',
    'search.noResults': 'No projects found for this selection.',
    'project.fullScreen': 'Full Screen',
    'project.restart': 'Restart Artwork',
    'project.credits': 'Artwork Presentation',
    'project.bio': 'Artist Biography',
    'project.semester': 'Semester',
    'project.year': 'Year',
    'project.author': 'Artist',
    'project.first': 'First Semester',
    'project.second': 'Second Semester',
    'archive.title': 'All projects',
    'archive.back': '← Back to home',
    'home.rss': 'Subscribe via RSS',
    'home.all': 'All Projects',
    'home.subtitle': 'Multimedia Arts, Lacabanne chair | Universidad Nacional de las Artes',
    'language.label': 'Versión en Español',
    'language.targetCode': 'es',
    'language.targetName': 'ES'
  }
} as const;

export type Locale = 'es' | 'en';

export function useTranslations(locale: Locale = 'es') {
  return function t(key: keyof typeof translations['es']) {
    return translations[locale][key] || translations['es'][key];
  };
}
