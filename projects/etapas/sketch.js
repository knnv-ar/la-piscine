let etapas = 0;
let boton;
let objetos;
let numImg = 0;
let img = [];
let music = [];
let inicio = 1;

function preload() {
  img[0] = loadImage("infancia.jpg");
  img[1] = loadImage("adol.jpg");
  img[2] = loadImage("adulto.jpg");
  img[3] = loadImage("vejez.jpg");

  music[0] = loadSound("inf_1.mp3");
  music[1] = loadSound("adol_2.mp3");
  music[2] = loadSound("adul_3.mp3");
  music[3] = loadSound("vejez_4.mp3");
}

function setup() {

   let canvas = createCanvas(600, 600, WEBGL);
   canvas.parent('div-sketch');
}

function draw() {
  orbitControl();
  noStroke();

  //Botones

  if (etapas == 0) infancia();
  if (etapas == 1) adolescencia();
  if (etapas == 2) adultez();
  if (etapas == 3) vejez();

  objetos += 0.1;
}

// --- boton y cambio ---

function keyPressed() {
  if (key == " ") {
    cambioEtapa();
  }
}

function cambioEtapa() {
  music[etapas].stop();
  if (etapas != 3) {
    etapas++;
    music[etapas].setVolume(0.02);
    music[etapas].loop();
  } else {
    etapas = 0;
    music[etapas].setVolume(0.02);
    music[etapas].loop();
  }
}

// --- etapas ---
function infancia() {
  background(255);
  push();
  texture(img[0]);
  rotateY(frameCount * 0.009);
  sphere(50);
  pop();

  j = 4;
  girandoCuadrados(j, etapas);
  girandoConos(j, etapas);
  girandoElipse(j, etapas);
}
function adolescencia() {
  background(255);
  push();
  texture(img[1]);
  rotateY(frameCount * 0.01);
  sphere(75);
  pop();

  j = 8;
  girandoCuadrados(j, etapas);
  girandoConos(j, etapas);
  girandoElipse(j, etapas);
}
function adultez() {
  background(255);
  push();
  texture(img[2]);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  j = 12;
  girandoCuadrados(j, etapas);
  girandoConos(j, etapas);
  girandoElipse(j, etapas);
}
function vejez() {
  background(255);
  push();
  texture(img[3]);
  rotateY(frameCount * 0.01);
  sphere(110);
  pop();

  j = 16;
  girandoCuadrados(j, etapas);
  girandoConos(j, etapas);
  girandoElipse(j, etapas);
}

function girandoCuadrados(j, etapas) {
  for (let i = 1; i < j; i += 1) {
    push();
    rotateY(frameCount * (0.009 * i));
    translate(30 * i + 50 * etapas, -20);
    fill(242 - etapas * 177, 228 - etapas * 40, 253 - etapas * 20);
    box(10, 10);
    pop();
  }
}

function girandoConos(j, etapas) {
  for (let i = 2; i < j + 1; i += 1) {
    push();
    rotateY(frameCount * (0.01 * i));
    translate(30 * i + 50 * etapas, 0);
    fill(177 - etapas * 40, 177 - etapas * 40, 242 - etapas * 20);
    cone(10, 10);
    pop();
  }
}

function girandoElipse(j, etapas) {
  for (let i = 1; i < j + 2; i += 1) {
    push();
    rotateY(frameCount * (0.011 * i));
    translate(30 * i + 50 * etapas, 20);
    fill(177 - etapas * 40, 242 - etapas * 40, 228 - etapas * 40);
    ellipsoid(5, 5, 5);
    pop();
  }
}

function mousePressed() {
  if (inicio == 1) {
    music[0].loop();
    music[0].setVolume(0.02);
    inicio = 0;
  }
}
