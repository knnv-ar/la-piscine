// Aaron Joel Juarez TN
// TP1
// Escpectro de Oscilación

var posicion = 131;
var velocidadX = 2;
var velocidadY = 2;
var direccionX = 2.5;
var direccionY = 3;
var x = posicion;
var y = posicion;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(50);

  x += velocidadX * direccionX;
  if (x > 399 - posicion || x < posicion) {
    direccionX = -direccionX;
  }

  y += velocidadY * direccionY;
  if (y > 399 - posicion || y < posicion) {
    direccionY = -direccionY;
  }

  push();
  noFill();
  stroke(255);
  for (c = 131; c < 400; c += 15) {
    bezier(c, 125, 400, 100, 100, 400, c, 400);
  }
  pop();

  push();
  noFill();
  bezier(x, 125, 400, 100, 100, 400, y, 400);
  bezier(x + 15, 125, 400, 100, 100, 400, y + 15, 400);
  bezier(x + 30, 125, 400, 100, 100, 400, y + 30, 400);
  bezier(x + 45, 125, 400, 100, 100, 400, y + 45, 400);
  bezier(x + 60, 125, 400, 100, 100, 400, y + 60, 400);
  bezier(x + 75, 125, 400, 100, 100, 400, y + 75, 400);
  bezier(x + 90, 125, 400, 100, 100, 400, y + 90, 400);
  bezier(x + 105, 125, 400, 100, 100, 400, y + 105, 400);
  pop();
}
