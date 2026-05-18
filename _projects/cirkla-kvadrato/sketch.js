/*CIRKLA KVADRATO

  NOTAS: 
     Click Mouse: Paleta más oscura
     Clik Letra: Bordes redondos */

var Colorbase = 80;
var Borde = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(Colorbase + 190);

  if (mouseIsPressed === true) {
    Colorbase = 0;
  } else {
    Colorbase = 80;
  }

  rect(25, 25, 50, 50);

  fill(Colorbase + 110);

  push();
  strokeWeight(0); // Cuadrado arriba izq.
  rect(7, 7, 200, 200, Borde);
  fill(Colorbase);
  rect(21, 22, 170, 170, Borde);
  fill(Colorbase + 160);
  rect(33, 34, 140, 140, Borde);

  noFill();
  if (keyIsPressed === true) {
    Borde = 45;
  } else {
    Borde = 0;
  }

  angleMode(DEGREES); // cuadradito rotado
  translate(100, 100);
  rotate(35);
  strokeWeight(3);
  rect(-45, -45, 100, 100, Borde);
  rotate(45);
  fill(Colorbase - 10, 90);
  rect(-35, -37, 90, 90, Borde);
  rect(-23, -23, 50, 50, Borde);
  pop();

  push();
  strokeWeight(2); // Cuadrado arriba der.
  fill(Colorbase);
  rect(220, 7, 280, 350, Borde);
  strokeWeight(1);
  fill(Colorbase + 20);
  rect(233, 21, 250, 320, Borde);
  fill(Colorbase + 30);
  rect(250, 50, 200, 250, Borde);
  fill(Colorbase + 50);
  rect(263, 70, 160, 190, Borde);
  fill(Colorbase + 70);
  rect(275, 85, 125, 150, Borde);
  fill(Colorbase + 90);
  rect(285, 105, 95, 105, Borde);
  fill(Colorbase + 110);
  rect(300, 120, 60, 70, Borde);
  fill(Colorbase + 130);
  rect(310, 130, 30, 40, Borde);
  pop();

  push();
  strokeWeight(3); // Cuadrado abajo izq.
  rect(7, 220, 200, 280, Borde);
  strokeWeight(1);
  fill(Colorbase + 140);
  rect(17, 230, 180, 260, Borde);
  fill(Colorbase + 140);
  rect(25, 239, 160, 240, Borde);
  fill(Colorbase + 10);
  rect(34, 250, 140, 220, Borde);
  strokeWeight(0);
  fill(Colorbase + 140);
  rect(80, 300, 40, 110, Borde);
  pop();

  push();
  strokeWeight(3); // Cuadrado abajo der.
  rect(220, 370, 280, 130, Borde);
  strokeWeight(0);
  fill(Colorbase + 70);
  rect(230, 378, 150, 90, Borde);
  strokeWeight(1);
  fill(Colorbase - 40, 90);
  rect(258, 392, 250, 40, Borde);
  noFill();
  rect(305, 407, 90, 82, Borde);
  rect(314, 417, 73, 60, Borde);
  pop();

  push();
  fill(Colorbase - 50, 90);
  rect(160, 153, 170, 165, Borde);
  rect(55, 346, 90, 90, Borde);
  rect(348, 34, 120, 120, Borde);
  pop();

}
