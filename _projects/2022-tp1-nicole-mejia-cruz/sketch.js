/*Nicole Mejia Cruz, Artes Multimediales 1, Universidad de las Artes
Trabajo Practico 1 "que se me caen las hojas y me aprietan mas la raices"*/

//Variables

//raices derechas
let pos;
let pos2;
let pos3;
let pos4;
let pos5;
let pos6;
let pos8;
//raices izquierda
let pos9;
let pos10;
let pos11;
let pos12;
let pos13;
let pos14;
let pos15;
let pos16;
let posr;

//tronco
let tronco;

//ramas

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(8);

  //vectores de raices
  pos = createVector(width / 2, height / 2);
  pos2 = createVector(width / 2, height / 2);
  pos3 = createVector(width / 2, height / 2);
  pos4 = createVector(width / 2, height / 2);
  pos5 = createVector(width / 2, height / 2);
  pos6 = createVector(width / 2, height / 2);
  pos7 = createVector(width / 2, height / 2);
  pos8 = createVector(width / 2, height / 2);
  pos9 = createVector(width / 2, height / 2);
  pos10 = createVector(width / 2, height / 2);
  pos11 = createVector(width / 2, height / 2);
  pos12 = createVector(width / 2, height / 2);
  pos13 = createVector(width / 2, height / 2);
  pos14 = createVector(width / 2, height / 2);
  pos15 = createVector(width / 2, height / 2);
  pos16 = createVector(width / 2, height / 2);
  posr = createVector(width / 2, height / 2);

  //tronco
  tronco = createVector(width / 2, height/2 - 32);

  background(0);
}

function draw() {
  
  //raices
  push();
  translate(0,-32);
  stroke(220);
  for (var punto = 32; punto > 0; punto += -1) {
    strokeWeight(1);
  }
  strokeCap(PROJECT);
  //raiz central
  point(posr.x, posr.y);
  posr.x = posr.x + random(-0.5, 0.5);
  posr.y = posr.y + random(0, 1);

  //raices derecha
  point(pos.x, pos.y);
  pos.x = pos.x + random(0, 2);
  pos.y = pos.y + random(0, 1);

  point(pos2.x, pos2.y);
  pos2.x = pos2.x + random(0, 2);
  pos2.y = pos2.y + random(0, 1);

  point(pos3.x, pos3.y);
  pos3.x = pos2.x + random(0, 3);
  pos3.y = pos2.y + random(0, 2);

  point(pos4.x, pos4.y);
  pos4.x = pos4.x + random(0, 4);
  pos4.y = pos4.y + random(0, 1);

  point(pos5.x, pos5.y);
  pos5.x = pos5.x + random(0, 5);
  pos5.y = pos5.y + random(0, 2);

  point(pos6.x, pos6.y);
  pos6.x = pos6.x + random(0, 6);
  pos6.y = pos6.y + random(0, 1);

  point(pos7.x, pos7.y);
  pos7.x = pos7.x + random(0, 7);
  pos7.y = pos7.y + random(0, 2);

  point(pos8.x, pos8.y);
  pos8.x = pos8.x + random(0, 8);
  pos8.y = pos8.y + random(0, 1);

  //raices izquierda

  point(pos9.x, pos9.y);
  pos9.x = pos9.x + random(0, -1);
  pos9.y = pos9.y + random(0, 1);

  point(pos10.x, pos10.y);
  pos10.x = pos10.x + random(0, -2);
  pos10.y = pos10.y + random(0, 1);

  point(pos11.x, pos11.y);
  pos11.x = pos11.x + random(0, -3);
  pos11.y = pos11.y + random(0, 1);

  point(pos12.x, pos12.y);
  pos12.x = pos12.x + random(0, -4);
  pos12.y = pos12.y + random(0, 2);

  point(pos13.x, pos13.y);
  pos13.x = pos13.x + random(0, -5);
  pos13.y = pos13.y + random(0, 1);

  point(pos14.x, pos14.y);
  pos14.x = pos14.x + random(0, -6);
  pos14.y = pos14.y + random(0, 2);

  point(pos15.x, pos15.y);
  pos15.x = pos15.x + random(0, -7);
  pos15.y = pos15.y + random(0, 1);

  point(pos16.x, pos16.y);
  pos16.x = pos16.x + random(0, -8);
  pos16.y = pos16.y + random(0, 2);
  pop();

  // tronco
  stroke(220);

  strokeWeight(4);

  tronco.x = tronco.x + random(-0.5, 0.5);
  tronco.y = tronco.y - 2.5;
  /*if (tronco.y <= 256) {
    strokeWeight(0);}
*/
  point(tronco.x, tronco.y);

 
}
