let img;

function preload() {
  img = loadImage("cuadrado.jpg");
}

function setup() {
  let canvas = createCanvas(490, 410, WEBGL);
  canvas.parent('div-sketch');
  noStroke();
  background(0);
}

function draw() {
  // Si NO estás presionando el mouse se borra el arrastre
  if (!mouseIsPressed) {
    background(0);
  }

  orbitControl();

  // columnas
  dibujarColumna(0);
  dibujarColumna(100);
  dibujarColumna(-100);
  dibujarColumna(-190);
  dibujarColumna(190);
}

function dibujarColumna(x) {
  push();
  translate(x, -150, 0);
  texture(img);
  box(70);

  translate(0, 100, 0);
  box(70);

  translate(0, 105, 0);
  box(70);

  translate(0, 95, 0);
  box(70);
  pop();
}
