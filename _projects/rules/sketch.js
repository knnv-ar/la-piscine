//TP Nº2 AM1 TM - Lucía Marcinkevicius
//Nombre de la obra: Rules

var fondo, sol, grilla, medusa, circulo;

function preload() {
  fondo = loadImage("img/fondo.png");
  sol = loadImage("img/sun.png");
  grilla = loadImage("img/grid.png");
  medusa = loadImage("img/glitch.png");
  rojo = loadImage("img/rojo.png");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  //Imágenes
  image(fondo, -250, -250);
  image(sol, -150, -150);
  image(grilla, -290, -200);
  // image(rojo, -112, -75);

  figura();

  //Figuras 3D

  push();
  fill(72, 229, 247);
  translate(0, 10, 50);
  rotateX(frameCount * 0.02);
  torus(120, 1, 50);
  pop();

  push();
  fill(72, 229, 247);
  translate(0, 10, 50);
  rotateY(frameCount * -0.02);
  torus(120, 1, 50);
  pop();
}

document.oncontextmenu = function () {
  return false;
};

function figura() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      image(medusa, -112, -75);
    }
  } else {
    image(rojo, -112, -75);
  }
}
