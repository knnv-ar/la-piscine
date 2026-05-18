//Obra:"Estas drogadx en tu bedroom"
var angulo = 0.0;
var desplazamiento = 235;
var escalar = 12;
var velocidad = 0.2;

var rotación = 0;

function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');

}

function draw() {
  //colores
  var c = map(mouseX, 0, 512, 255, 0);
  var c2 = map(mouseX, 0, 512, 255, 255);
  var c3 = map(mouseX, 0, 512, 0, 255);
  var c4 = map(mouseX, 0, 512, 256, 200);
  var c5 = map(mouseX, 0, 512, 255, 125);

  var r = random(255);

  push(); //fondo
  background(255);
  pop();

  //creación

  push(); //lineas estáticas
  strokeWeight(3);
  stroke(c);
  line(160, 350, 0, 512);
  line(160, 160, 0, 0);
  line(351, 160, 512, 0);
  line(426, 426, 512, 512);
  pop();

  push(); //cuadrado grande
  fill(c);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 192, 192);
  pop();

  push(); //puerta
  fill(c3);
  noStroke();
  rectMode(CENTER);
  rect(200, 292, 50, 120);
  fill(c);
  rect(183, 288, 8, 8);
  rect(183, 297, 3, 5);
  pop();

  push(); //ventana
  fill(c);
  noStroke();
  quad(30, 150, 128, 227, 128, 310, 30, 384);
  noStroke();
  quad(40, 170, 118, 227, 118, 310, 40, 364);
  pop();

  push(); //marco ventana
  fill(c2, r);
  noStroke();
  quad(40, 170, 118, 227, 118, 310, 40, 364);
  pop();

  push(); //rejas
  stroke(c);
  strokeWeight(3);
  noFill();
  line(58, 180, 39, 313);
  line(40, 170, 91, 328);
  line(98, 211, 80, 248);
  line(40, 233, 118, 280);
  line(118, 280, 91, 328);
  line(95, 211, 75, 248);
  line(40, 240, 111, 280);
  line(111, 280, 91, 328);
  line(55, 173, 35, 290);
  line(35, 170, 89, 338);
  line(80, 248, 39, 364);
  line(75, 248, 35, 364);
  line(56, 355, 118, 227);
  line(62, 352, 121, 227);
  line(35, 320, 116, 280);
  line(35, 324, 118, 283);
  line(56, 196, 119, 252);
  line(56, 201, 119, 257);
  pop();

  push(); //pared derecha
  translate(435, 246);
  rotate(radians(rotación));
  noStroke();
  fill(c);
  ellipse(0, 0, 80, 160);
  strokeWeight(4);
  stroke(c5, r);
  fill(255);
  ellipse(0, 0, 50, 100);
  fill(c);
  ellipse(0, 0, 35, 70);
  strokeWeight(5);
  fill(255);
  ellipse(0, 0, 15, 30);
  strokeWeight(6);
  fill(c);
  ellipse(0, 0, 10, 20);
  rotación += 10;
  pop();

  push();//alfombra
  noStroke();
  fill(c4);
  quad(204, 376, 254, 376, 279, 416, 179, 416);
  fill(c5);
  stroke(c2,r);
  circle(200, 405, 20);
  circle(220, 405, 20);
  circle(240, 405, 20);
  circle(260, 405, 20);
  circle(204, 390, 10);
  circle(214, 390, 10);
  circle(224, 390, 10);
  circle(234, 390, 10);
  circle(244, 390, 10);
  circle(254, 390, 10);
  circle(208, 382, 7);
  circle(216, 382, 7);
  circle(224, 382, 7);
  circle(230, 382, 7);
  circle(236, 382, 7);
  circle(244, 382, 7);
  circle(250, 382, 7);
  pop();

  push(); //cama
  noStroke();
  fill(c4); //respaldo
  rect(286, 300, 66, 52);
  rect(343, 387, 86, 40); //pies del respaldo
  stroke(c);
  strokeWeight(3); //tirantes
  noStroke();
  fill(c);
  quad(286, 325, 351, 325, 430, 388, 343, 387); //sabana
  fill(c5);
  quad(286, 352, 286, 325, 345, 387, 343, 426); //costado cama
  pop();

  push(); //cuadro
  fill(c2);
  noStroke();
  rect(256, 206, 60, 60);
  pop();

  push(); //circulos cuadro
  noStroke();
  var y1 = desplazamiento + sin(angulo) * escalar;
  var y2 = desplazamiento + sin(angulo + 0.4) * escalar;
  var y3 = desplazamiento + sin(angulo + 0.8) * escalar;
  fill(c5); //circulo grande
  circle(270, y1, 20);
  fill(c4); //circulo medio
  circle(290, y2, 13);
  fill(c); //circulo chico
  circle(305, y3, 7);
  angulo += velocidad;
  pop();

  push(); //techo
  strokeWeight(3);
  stroke(c);
  quad(43, 12, 473, 12, 344, 135, 166, 135);
  noStroke();
  fill(c);
  quad(73, 25, 443, 25, 341, 123, 169, 123);
  pop();

  push(); //estrellas primera linea
  translate(176, 112);
  scale(0.1);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();
  pop();

  push(); //estrellas segunda linea
  translate(159, 100);
  scale(0.142);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  pop();

  push(); //estrellas tercera linea
  translate(154, 87);
  scale(0.172);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();
  pop();

  push(); //estrellas cuarta linea
  translate(137, 69);
  scale(0.182);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();
  pop();

  push(); //estrellas quinta linea
  translate(117, 55);
  scale(0.192);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(140, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();
  pop();

  push(); //estrellas sexta linea
  translate(108, 36);
  scale(0.22);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();

  translate(150, 0);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  vertex(-35, 0);
  endShape();
  pop();

  
}
