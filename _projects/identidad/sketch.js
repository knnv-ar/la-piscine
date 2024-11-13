/* TP N°1. "Identidad" (2024) - Vera Pallavicini 
Artes Multimediales I
Inspirado en la serie de obras "Oscillons" de Ben Laposky. */

// ----------> VARIABLES GLOBALES
let xOffset = 0;
let incremento = 0.01; // incremento que será sumado a xOffset
let opacidad = 255; // valor de opacidad inicial
let decrementoOpacidad = 0.5;

// puntos
let x1;
let y1;
let x2;
let y2;

// para generar variaciones en las coordenadas de los puntos
let incrementoX;
let incrementoY;

// ----------> CONFIGURACIONES GENERALES
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(5); // fondo negro

  /* incremento para los distintos puntos.
    creo distintos rangos para que los puntos en X y en Y no coincidan nunca */
  incrementoX = random(0, 500);
  incrementoY = random(500, 1000);
}

function draw() {
  stroke(230, 230, 230, opacidad);
  /* genera los puntos para crear las líneas
  multiplicar por width / height sería el equivalente a hacer un map */
  x1 = noise(xOffset) * width;
  y1 = noise(xOffset + incrementoY) * height;
  x2 = noise(xOffset + incrementoX) * width;
  y2 = noise(xOffset + incrementoY * 2) * height;

  line(x1, y1, x2, y2);

  xOffset += incremento; // recorre el gráfico de noise

  opacidad -= decrementoOpacidad; // disminuye la opacidad de la línea en cada iteración

  // cuando la línea es prácticamente imperceptible, se reinicia el dibujo
  if (opacidad <= 40) {
    background(5);
    opacidad = 255;
  }
}