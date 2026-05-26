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
    'language.targetName': 'EN',
    '404.title': '404: Fuera de la-piscine',
    '404.heading': '404',
    '404.subheading': 'Te has sumergido demasiado profundo',
    '404.message': 'La página o la obra que buscas no existe o ha sido trasladada a otro rincón de la piscina.',
    '404.cta': 'Volver a nadar (Inicio)',
    '404.suggest': '¿Buscas algo más?'
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
    'language.targetName': 'ES',
    '404.title': '404: Out of la-piscine',
    '404.heading': '404',
    '404.subheading': 'You have dived too deep',
    '404.message': 'The page or artwork you are looking for does not exist or has been moved to another corner of the pool.',
    '404.cta': 'Return to swim (Home)',
    '404.suggest': 'Looking for something else?'
  }
} as const;

export type Locale = 'es' | 'en';

export function useTranslations(locale: Locale = 'es') {
  return function t(key: keyof typeof translations['es']) {
    return translations[locale][key] || translations['es'][key];
  };
}
