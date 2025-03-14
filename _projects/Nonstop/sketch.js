let angulo = 0;
let angleStep = 0.01;
let yOff = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  // Generar color rojo aleatorio
  let col = color(random(255), 0, 0);
  stroke(col);
  
  let x1 = map(noise(angulo), 0, 1, 0, width);
  let x2 = map(noise(angulo + 10), 0, 1, 0, width);
  let y1 = map(sin(yOff), -1, 1, 0, height);
  let y2 = map(sin(yOff + 0.1), -1, 1, 0, height);

  line(x1, y1, x2, y2);
  
  angulo += angleStep;
  yOff += 0.02; // Ajusta esta velocidad para cambiar la frecuencia de las olas.
}
