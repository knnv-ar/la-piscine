/*
2021 - Sistemas en Movimiento
TP Artes Multimediales 1
Matías Codón Varela
*/

//EVITAR MENÚ CONTEXTUAL DEL NAVEGADOR
document.oncontextmenu = function () {
  return false;
};

//DECLARACIÓN DE VARIABLES

let mitadAncho, mitadAlto;
let tCuadrado;
let lineWidth;
let alt;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  mitadAncho = width / 2;
  mitadAlto = height / 2;
  background(248, 247, 243);
}

function draw() {
  lineWidth = random(2, 10);
  tCuadrado = random(500);
  alt = random(215);

  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(alt, alt, alt, 40);
  fill(alt, alt, alt, 20);
  square(mitadAncho, mitadAlto, tCuadrado);

  if (mouseIsPressed) {
    background(250);
  }
}
