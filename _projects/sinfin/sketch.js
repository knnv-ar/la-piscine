//Trabajo Práctico 1
//Florencia Michelle Toledo
// Artes Multimediales 1 - Lacabanne
//2012-Turno mañana

//Declaración de variables

var blanco = 255;
var negro = 0;
var gris1 = (128, 128, 128);
var gris2 = (169, 169, 169);
var gris3 = (211, 211, 211);
var gris4 = (105, 105, 105);

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  background(negro);
  frameRate(10);
}

function draw() {
  stroke(blanco);
  noFill();
  rect(random(width), random(height), random(45), random(45));

  stroke(gris1);
  noFill();
  rect(random(width), random(height), random(45), random(45));

  stroke(gris2);
  noFill();
  rect(random(width), random(height), random(45), random(45));

  stroke(gris3);
  noFill();
  rect(random(width), random(height), random(45), random(45));

  stroke(gris4);
  noFill();
  rect(random(width), random(height), random(45), random(45));

  stroke(blanco);
  noFill();
  rect(140, 150, 481, 481);

  rect(130, 130, 481, 481);

  rect(30, 30, 481, 481);

  rect(100, 100, 481, 481);

  rect(80, 80, 481, 481);

  rect(-150, 150, 481, 481);

  rect(-80, 80, 481, 481);

  rect(-100, 100, 481, 481);

  rect(-130, -130, 481, 481);

  rect(-30, -30, 481, 481);

  rect(-10, 15, 110, 110);

  rect(30, 30, 110, 110);

  rect(50, -50, 110, 110);

  rect(-70, 70, 110, 110);

  rect(90, 60, 110, 110);

  rect(10, 110, 110, 110);

  rect(100, 120, 110, 110);

  rect(150, 150, 110, 110);

  rect(170, 170, 110, 110);

  rect(190, 190, 110, 110);

  rect(210, 210, 110, 110);

  rect(230, 230, 110, 110);

  rect(250, 250, 110, 110);

  rect(270, 270, 110, 110);

  rect(290, 290, 110, 110);

  rect(310, 410, 110, 110);

  rect(330, -330, 110, 110);

  rect(-350, 450, 110, 110);

  rect(370, 280, 110, 110);

  rect(290, 390, 110, 110);

  rect(450, 380, 110, 110);

  rect(400, 450, 110, 110);

  rect(370, 390, 110, 110);

  rect(490, 390, 110, 110);

  rect(60, 50, 395, 345);

  rect(58, 55, 378, 380);

  rect(125, 65, 368, 398);

  rect(90, 120, 260, 260);

  rect(95, 140, 218, 220);

  rect(122, 148, 286, 285);

  rect(188, 178, 136, 136);

  rect(246, 196, 96, 96);

  rect(245, 245, 44, 44);

  rect(260, 195, 28, 26);
}
