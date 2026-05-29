const translations = {
  es: {
    'site.title': '<la-piscine> galería de arte digital online',
    'site.description': 'Artes Multimediales y Electrónicas | Universidad Nacional de las Artes',
    'nav.home': 'inicio',
    'nav.archive': '<archivo>',
    'nav.about': '<acerca-de>',
    'search.placeholder': 'Buscar por obra, artista, año, semestre...',
    'search.noResults': 'No se encontraron proyectos para esta selección.',
    'project.fullScreen': 'Pantalla completa',
    'project.restart': 'Reiniciar obra',
    'project.credits': 'Presentación de la obra',
    'project.bio': 'Biografía del artista',
    'project.semester': 'Semestre',
    'project.year': 'Año',
    'project.author': 'Artista',
    'project.first': 'Primer Semestre',
    'project.second': 'Segundo Semestre',
    'archive.title': 'Todos los proyectos',
    'archive.back': '← Volver al inicio',
    'home.all': 'Todos los proyectos',
    'home.subtitle': 'Espacio expositivo online de arte digital: trabajos de estudiantes de Artes Multimediales 1 (cátedra Lacabanne)',
    'language.label': 'English Version',
    'language.targetCode': 'en',
    'language.targetName': 'en',
    '404.title': '404: Fuera de <la-piscine>',
    '404.heading': '404',
    '404.subheading': 'Te has sumergido demasiado profundo',
    '404.message': 'La página o la obra que buscas no existe o ha sido trasladada a otro rincón de la piscina.',
    '404.cta': 'Volver a nadar (inicio)',
    '404.suggest': '¿Buscás algo más?'
  },
  en: {
    'site.title': '<la-piscine> online digital art gallery',
    'site.description': 'Electronic and Multimedia Arts | Universidad Nacional de las Artes',
    'nav.home': 'home',
    'nav.archive': '<archive>',
    'nav.about': '<about>',
    'search.placeholder': 'Search by artwork, artist, year, semester...',
    'search.noResults': 'No projects found for this selection.',
    'project.fullScreen': 'Full screen',
    'project.restart': 'Restart artwork',
    'project.credits': 'Artwork presentation',
    'project.bio': 'Artist biography',
    'project.semester': 'Semester',
    'project.year': 'Year',
    'project.author': 'Artist',
    'project.first': 'First semester',
    'project.second': 'Second semester',
    'archive.title': 'All projects',
    'archive.back': '← Back to home',
    'home.all': 'All projects',
    'home.subtitle': 'Online digital art exhibition space: student projects from Multimedia Arts 1 (cátedra Lacabanne)',
    'language.label': 'Versión en Español',
    'language.targetCode': 'es',
    'language.targetName': 'es',
    '404.title': '404: Out of <la-piscine>',
    '404.heading': '404',
    '404.subheading': 'You have dived too deep',
    '404.message': 'The page or artwork you are looking for does not exist or has been moved to another corner of the pool.',
    '404.cta': 'Return to swim (home)',
    '404.suggest': 'Looking for something else?'
  }
} as const;

export type Locale = 'es' | 'en';

export function useTranslations(locale: Locale = 'es') {
  return function t(key: keyof typeof translations['es']) {
    return translations[locale][key] || translations['es'][key];
  };
}
