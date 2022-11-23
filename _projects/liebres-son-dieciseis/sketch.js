//colores
var c1 = "#000000";
var c2 = "#181818";
var c3 = "#282828";
var c4 = "#383838";
var c5 = "#474747";
var c6 = "#565656";
var c7 = "#646464";
var c8 = "#717171";
var c9 = "#7e7e7e";
var c10 = "#8c8c8c";
var c11 = "#9b9b9b";
var c12 = "#ababab";
var c13 = "#bdbdbd";
var c14 = "#d1d1d1";
var c15 = "#e7e7e7";
var c16 = "#ffffff";
var cc = [c3, c4, c5, c6, c7];
//cuadrados
var r1a;
var r1b;
var r1c;
var r2a;
var r2b;
var r2c;
var r3a;
var r3b;
var r3c;
var r4a;
var r4b;
var r4c;
//tiempo
let stime;
let contador;
//animación final
let telonSize;
//movimiento
let mov;
let movd;
let stimemov;
let rotoj = 0;

function colores() {
  r1a = random(cc);
  r1b = random(cc);
  r1c = random(cc);
  r2a = random(cc);
  r2b = random(cc);
  r2c = random(cc);
  r3a = random(cc);
  r3b = random(cc);
  r3c = random(cc);
  r4a = random(cc);
  r4b = random(cc);
  r4c = random(cc);
}

function start() {
  stime = millis();
  movd = 1;
  stimemov = millis();
  colores();
}

function movimiento() {
  stimemov = millis();
  movd = 1 * -movd;
}

//liebre cabeza
function liebre(liX, liY, liS) {
  push();
  angleMode(DEGREES);
  imageMode(CENTER);
  translate(liX, liY);
  scale(liS);
  rotate(mov);
  push();
  translate(-256, -330);
  fill(c15);
  strokeWeight(5);
  circle(256, 316, 200);
  circle(170, 100, 100);
  circle(340, 100, 100);
  beginShape();
  vertex(156, 320);
  vertex(121, 100);
  vertex(220, 100);
  vertex(238, 218);
  endShape();
  beginShape();
  vertex(356, 320);
  vertex(390, 100);
  vertex(290, 100);
  vertex(274, 218);
  endShape();
  noStroke();
  circle(256, 316, 195);
  circle(170, 100, 95);
  circle(340, 100, 95);
  strokeWeight(5);
  circle(210, 305, 30);
  circle(302, 305, 30);
  pop();
  pop();
}
function ojos(ojX, ojY, ojS, ojR) {
  push();
  translate(ojX, ojY);
  scale(ojS);
  rotate(ojR);
  push();
  angleMode(DEGREES);
  rotate(45);
  push();
  noStroke();
  fill(c2);
  translate(-width / 2, -height / 2);
  beginShape();
  vertex(width / 3, 0);
  vertex((2 * width) / 3, 0);
  vertex((2 * width) / 3, height / 3);
  vertex(width, height / 3);
  vertex(width, (2 * height) / 3);
  vertex((2 * width) / 3, (2 * height) / 3);
  vertex((2 * width) / 3, height);
  vertex(width / 3, height);
  vertex(width / 3, (2 * height) / 3);
  vertex(0, (2 * height) / 3);
  vertex(0, height / 3);
  vertex(width / 3, height / 3);
  endShape();
  pop();
  pop();
  pop();
}

function liebref(liX, liY, liS) {
  push();
  angleMode(DEGREES);
  imageMode(CENTER);
  translate(liX, liY);
  scale(liS);
  rotate(-mov);
  push();
  translate(-256, -300);
  fill(c15);
  strokeWeight(5);
  circle(256, 316, 200);
  circle(170, 100, 100);
  circle(340, 100, 100);
  beginShape();
  vertex(156, 320);
  vertex(121, 100);
  vertex(220, 100);
  vertex(238, 218);
  endShape();
  beginShape();
  vertex(356, 320);
  vertex(390, 100);
  vertex(290, 100);
  vertex(274, 218);
  endShape();
  noStroke();
  circle(256, 316, 195);
  circle(170, 100, 95);
  circle(340, 100, 95);
  strokeWeight(5);
  circle(210, 305, 30);
  circle(302, 305, 30);
  ojos(width / 3 + 40, 310, 0.1, -rotoj);
  ojos((2 * width) / 3 - 40, 310, 0.1, rotoj);
  pop();
  pop();
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  start();
}

function draw() {
  background(c10);
  //reset
  let limite = 8496;
  let ctime = millis();
  //movimiento
  rotoj = rotoj + 5;

  //animacion------------------------------------
  if (millis() - stime > 1062) {
    push();
    noStroke();
    //a
    fill(r1a);
    rect(6, 6, 100);
    liebre(55, 75, 0.2);
    //b
    fill(r1a);
    rect(406, 6, 100);
    liebre(455, 75, 0.2);
    //c
    fill(r1a);
    rect(6, 406, 100);
    liebre(55, 475, 0.2);
    //d
    fill(r1a);
    rect(406, 406, 100);
    liebre(455, 475, 0.2);
    pop();
  }

  if (millis() - stime > 2124) {
    push();
    noStroke();
    //a
    fill(r2a);
    rect(106, 6, 100);
    liebre(155, 75, 0.2);
    //b
    fill(r2a);
    rect(306, 6, 100);
    liebre(355, 75, 0.2);
    //c
    fill(r2a);
    rect(406, 106, 100);
    liebre(455, 175, 0.2);
    //d
    fill(r2a);
    rect(406, 306, 100);
    liebre(455, 375, 0.2);
    //e
    fill(r2a);
    rect(106, 406, 100);
    liebre(155, 475, 0.2);
    //f
    fill(r2a);
    rect(306, 406, 100);
    liebre(355, 475, 0.2);
    //g
    fill(r2a);
    rect(6, 106, 100);
    liebre(55, 175, 0.2);
    //h
    fill(r2a);
    rect(6, 306, 100);
    liebre(55, 375, 0.2);
    pop();
  }

  if (millis() - stime > 3186) {
    push();
    noStroke();
    fill(r3a);
    rect(206, 6, 100);
    liebre(255, 75, 0.2);
    fill(r3a);
    rect(406, 206, 100);
    liebre(455, 275, 0.2);
    fill(r3a);
    rect(206, 406, 100);
    liebre(255, 475, 0.2);
    fill(r3a);
    rect(6, 206, 100);
    liebre(55, 275, 0.2);
    pop();
  }

  //-------reset mov
  if (ctime > stimemov + 531) {
    movimiento();
  }
  //--------
  if (millis() - stime > 4248) {
    push();
    noStroke();
    fill(c2);
    rect(106, 106, 300);
    liebref(256, 300, 0.6);
    pop();
    mov = map(ctime, stimemov, stimemov + 531, -10 * movd, 10 * movd);
  } else {
    mov = 0;
  }

  if (millis() - stime > 5310) {
    r1a = r1b;
    r2a = r2b;
    r3a = r3b;
  }
  if (millis() - stime > 6372) {
    r1a = r1c;
    r2a = r2c;
    r3a = r3c;
  }
  if (millis() - stime > 7434) {
    r1a = r4a;
    r2a = r4b;
    r3a = r4c;
  }

  //--------------------------------------------------
  //vignette
  push();
  noFill();
  strokeJoin(ROUND);
  stroke(c1);
  strokeWeight(12);
  rect(0, 0, 512, 512);
  pop();

  //telon
  if (millis() - stime > 7434) {
    let contadorT = map(ctime, stime + 7434, stime + 8496, 256, 0);
    telonSize = contadorT;
    translate(256, 256);
    fill(0);
    beginShape();
    vertex(-width, -height);
    vertex(width, -height);
    vertex(width, height);
    vertex(-width, height);
    beginContour();
    vertex(-telonSize, -telonSize);
    vertex(-telonSize, telonSize);
    vertex(telonSize, telonSize);
    vertex(telonSize, -telonSize);
    endContour();
    endShape(CLOSE);
  }
  //final
  if (ctime > stime + limite) {
    start();
  }
}

document.oncontextmenu = function () {
  return false;
};
