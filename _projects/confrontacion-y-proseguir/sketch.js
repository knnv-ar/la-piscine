//------------------------------------------------------VARIABLES
let boxVelocidad = 0.005;

let cristal;

let bolaInicial = 25;
let bolaFinal = 62;
let bolaCrecimiento = 0.02;

let textura = false;

let transparencia = 50;
//------------------------------------------------------PRELOAD
function preload() {
  cristal = loadImage("broken.png");
}
//------------------------------------------------------SETUP
function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
}
//------------------------------------------------------DRAW
function draw() {
  background(250, 223, 161);

  bolaInterna();
  cuboMayor();

  figuraExteriorCono1();
  figuraExteriorCono2();
  figuraExteriorCubo1();
  figuraExteriorCubo2();
  figuraExteriorBola1();
  figuraExteriorBola2();
}
//------------------------------------------------------BOLA
function bolaInterna() {
  push();
  normalMaterial();
  //ambientMaterial(50)
  pointLight(161, 255, 182, 100, 100, 255);

  bolaCambio();

  fill(182, 255, 161);
  noStroke();
  sphere(bolaInicial);
  pop();
}
//--------------------------------------CRECIMIENTO
function bolaCambio() {
  if (bolaInicial < bolaFinal) {
    bolaInicial += bolaCrecimiento;
  }
}

//------------------------------------------------------CUBO
function cuboMayor() {
  push();
  specularMaterial(125);
  pointLight(100, 100, 100, 0, 0, 255);

  fill(25, 22, 16, 200);

  if (bolaInicial >= bolaFinal) {
    texture(cristal);
    transparencia = 175;
  }
  rotateY(frameCount * boxVelocidad);
  rotateZ(frameCount * boxVelocidad);
  box(125);

  pop();
}
function cambioAlpha() {
  if (bolaInicial >= BolaFinal) {
    transparencia = 150;
  }
}
//------------------------------------------------------FIGURAS EXTERIORES
function figuraExteriorCono1() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(-225, -225, 0);
  fill(201, 104, 104, transparencia);

  rotateY(frameCount * -boxVelocidad);
  rotateZ(frameCount * boxVelocidad);

  cone(30, 80, 20, 10);

  pop();
}

function figuraExteriorCono2() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(225, 200, 0, transparencia);
  fill(255, 100, 0, transparencia);

  rotateY(frameCount * boxVelocidad);
  rotateZ(frameCount * -boxVelocidad);

  cone(20, 40, 20, 10);

  pop();
}

function figuraExteriorCubo1() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(100, -170, 0, transparencia);

  fill(180, 150, 220, transparencia);

  rotateY(frameCount * -boxVelocidad);
  rotateZ(frameCount * -boxVelocidad);

  box(25);

  pop();
}
function figuraExteriorCubo2() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(-50, 250, 0);

  fill(180, 150, 220, transparencia);

  rotateY(frameCount * -boxVelocidad);
  rotateZ(frameCount * -boxVelocidad);

  box(40);

  pop();
}

function figuraExteriorBola1() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(-200, 100, 0);

  fill(126, 172, 181, transparencia);

  rotateY(frameCount * boxVelocidad);
  rotateZ(frameCount * -boxVelocidad);

  ellipsoid(20, 30, 15);

  pop();
}
function figuraExteriorBola2() {
  push();
  normalMaterial();
  pointLight(255, 255, 255, 0, 0, 200);

  translate(255, -270, 0);

  fill(201, 104, 104, transparencia);

  rotateY(frameCount * boxVelocidad);
  rotateZ(frameCount * boxVelocidad);

  ellipsoid(20, 40, 25);

  pop();
}
