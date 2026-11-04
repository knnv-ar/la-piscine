// TP 1 - ÉTER - ANDRE PALACIOS - AM1 LACABANNE //

let t = 0; // Variable para controlar el paso del tiempo

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  fill(255); // Color de los puntos (Blanco)
  noStroke(); // Sin bordes
}

function draw() {
  background(0); // Fondo negro que limpia el lienzo en cada frame

  // Punto de origen (0,0) en la mitad de la pantalla
  translate(width / 2, height / 2);

  // La malla está pensada en un espacio de 800 x 800:
  // la escalamos para que entre completa en el lienzo de 512 x 512
  scale(width / 800);

  // INTERACTIVIDAD //

  // Usamos la posición del mouse para alterar la forma de la malla //
  // Si el mouse sale de la pantalla, le damos un valor por defecto //
  let mouseXClamped = constrain(mouseX, 0, width) || width / 2;
  let mouseYClamped = constrain(mouseY, 0, height) || height / 2;

  // Mapeamos el mouse a valores que afectarán la onda
  let waveFreq = map(mouseXClamped, 0, width, 0.005, 0.03); // Qué tan "apretada" es la curva
  let depth = map(mouseYClamped, 0, height, 50, 300); // Qué tan "profunda" es la deformación

  // Generamos una cuadrícula de puntos desde -400 hasta 400
  // 'u' y 'v' representan una cuadrícula recta y plana
  for (let u = -400; u <= 400; u += 15) {
    for (let v = -400; v <= 400; v += 15) {
      //  ------------------------------------//

      // Deformación //

      // Le sumamos una onda a la posición X basada en Y (v) y el tiempo (t)
      let x = u + sin(v * waveFreq + t) * depth;

      // Le sumamos una onda a la posición Y basada en X (u) y el tiempo (t)
      let y = v + cos(u * waveFreq - t) * depth;

      // Dibujamos un pequeño círculo en la nueva coordenada deformada
      circle(x, y, 2.5);
    }
  }

  // Avanzamos el tiempo para que se anime
  t += 0.02;
}
