let imgOjo;
let imgOjo2;
let imgOjo3;
let imgOjo4;
let imgOjo5;
let imgOjo6;
let imgOjo7;
let angulo1 = 0;
let velocidadR = 0.01;
let colorCuadrado = 0;

function preload() {
  imgOjo = loadImage("AM1TP2/ojo.png");
  imgOjo2 = loadImage("AM1TP2/ojo1.png");
  imgOjo3 = loadImage("AM1TP2/ojo33.png");
  imgOjo4 = loadImage("AM1TP2/ojo4.png");
  imgOjo5 = loadImage("AM1TP2/ojo44.png");
  imgOjo6 = loadImage ("AM1TP2/ojo5.png");
  imgOjo7 =loadImage ("AM1TP2/ojo6.png")
}

function setup() {
  letCanvas = createCanvas(500, 500);
  canvas.parent('div-sketch');
}

function draw() {
  background(255, 10);
  image(imgOjo, 200, 200, 100, 100);

  // Cambiar el color de los cuadrados
  colorCuadrado = map(sin(frameCount * 0.05), -1, 1, 0, 255);

  // Cuadrados que giran
  for (let i = 0; i < 10; i++) {
    push();
    translate(250, 250);
    rotate(angulo1 + (i * PI) / 5);
    stroke(colorCuadrado);
    strokeWeight(1);
    noFill();
    scale(0.5 + i * 0.1); // Efecto mandala
    quad(-82, -80, 82, -80, 82, 80, -82, 80);
    pop();
  }

  angulo1 += velocidadR;
}
function mouseMoved() {
  background(0);
  image(imgOjo2, 400, 10, 100, 100);
  image(imgOjo3, 20, 20, 100, 100);
  image(imgOjo4, 330, 400, 100, 100);
  image(imgOjo5, 15, 200, 100, 100);
  image (imgOjo6, 200, 200, 200, 200)
  image (imgOjo7, 30, 380, 100, 100)
}
