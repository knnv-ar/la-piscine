export const dependenciesMap: Record<string, string> = {
  'p5': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.js"></script>',
  'p5.sound': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/addons/p5.sound.min.js"></script>',
  'p5.v150': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js" integrity="sha512-WJXVjqeINVpi5XXJ2jn0BSCfp0y80IKrYh731gLRnkAS9TKc5KNt/OfLtu+fCueqdWniouJ1ubM+VI/hbo7POQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  'p5.sound.v150': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js" integrity="sha512-WzkwpdWEMAY/W8WvP9KS2/VI6zkgejR4/KTxTl4qHx0utqeyVE0JY+S1DlMuxDChC7x0oXtk/ESji6a0lP/Tdg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
  'p5.v170': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>',
  'p5.sound.v170': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>',
  'p5.v180': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>',
  'p5.sound.v180': '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js"></script>',
  'p5.v1.11.13': '<script src="https://cdn.jsdelivr.net/npm/p5@1.11.13/lib/p5.js"></script>',
  'p5.sound.v1.11.13': '<script src="https://cdn.jsdelivr.net/npm/p5@1.11.13/lib/addons/p5.sound.min.js"></script>',
  'p5.v2.2.3': '<script src="https://cdn.jsdelivr.net/npm/p5@2.2.3/lib/p5.js"></script>',
  'p5.sound.v2.2.3': '<script src="https://cdn.jsdelivr.net/npm/p5.sound@0.2.0/dist/p5.sound.min.js"></script>',
  flexbox: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" />',
  live: '<script type="text/javascript" src="http://livejs.com/live.js"></script>',
  'face-api': '<script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1/dist/face-api.js"></script>',
  ml5: '<script src="https://unpkg.com/ml5@1/dist/ml5.min.js"></script>'
};

export function getDependencyTags(dependencies: string[] = []): string {
  // Always ensure p5 is loaded if not explicitly declared, as it is the foundation
  const activeDeps = [...dependencies];
  if (!activeDeps.some(d => d.startsWith('p5'))) {
    activeDeps.unshift('p5');
  }
  
  return activeDeps
    .map(dep => dependenciesMap[dep] || '')
    .filter(Boolean)
    .join('\n');
}
