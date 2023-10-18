// AM1 cátedra Lacabanne
// Ejemplo de TPNº1
// Modelo de obra
// Raúl Federico Lacabanne
// 2022

let xoff = 0.0;
let yoff = 256.333;

function setup() {
  // Insertar en setup() y adecuar DESDE AQUÍ...
  // recordar que si usás WEBGL, lo tenés que
  // incorporar como tercer parámetro:
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  // ... HASTA AQUÍ.
  background(204);
}

function draw() {
  xoff = xoff + 0.05;
  yoff = yoff + 0.05;
  let nX = noise(xoff) * width;
  let nY = noise(yoff) * height;
  ellipse(nX, nY, 51, 51);
}
