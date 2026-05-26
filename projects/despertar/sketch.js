//Trabajo Practico N°1
//Romina Troncoso

var x = 20;
var y = 10;
var velocidad = 30;
var limite = 100;
var angulo = 0.0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(8);

   var valorSeno = sin(angulo);
   var gris = map(valorSeno, -1, 1, 0, 255);
   background(gris);
   angulo += 0.1;


  push(); //capa 1

  strokeWeight(0);

  if (keyIsPressed) {
   if (key == "z" || key == "Z") {
    fill(165, 150);
  }
  for (var i = mouseY; i < 250; i += 10) {
    quad(
      i,
      486 + sin(frameCount / 50) * 50,
      i,
      50 + sin(frameCount / 50) * 40,
      445,
      45 + sin(frameCount / 70) * 50,
      40,
      202
    );
  }
  }

  pop(); //Fin capa 1

  noFill();

  push(); //Capa 2

  x += velocidad;

  if (mouseIsPressed) {
    translate(x, 0);
  }
  if (x > width - limite) {
    x = 0;
  }

  stroke(230);
  for (var i = mouseY; i < 250; i += 10) {
    bezier(
      i,
      i + sin(frameCount / 50) * 50,
      330,
      250 + sin(frameCount / 50) * 40,
      330,
      210 + sin(frameCount / 70) * 50,
      300,
      290
    );
  }

  pop(); //Fin de capa 2

  push(); //Capa 3

  stroke(150);
  for (var i = 150; i < 250; i += 10) {
    quad(
      i,
      486 + sin(frameCount / 50) * 50,
      i,
      50 + sin(frameCount / 50) * 40,
      445,
      45 + sin(frameCount / 70) * 50,
      40,
      202
    );
  }

  pop(); //Fin de capa 3

  push(); //Capa 4

  for (var i = mouseX; i < 250; i += 10) {
    translate(i * 1, i * 1);
    rotate(radians(i * 1));
    stroke(80);
    rect(
      i,
      i + sin(frameCount / 50) * 50,
      520,
      520 + sin(frameCount / 50) * 40
    );
  }

  pop(); //Fin de capa 4

  push(); //Capa 5

  translate(x, y);
  rotate(radians(x));

  stroke(mouseY);
  noFill(mouseX);
  point(10, 50);

  pop(); //Fin de capa 5

  push(); //Capa 6
  for (var i = 0; i <= 100; i++) {
    push();
    if (mouseY > 250) {
      translate(i * 1, i * 1);
      rotate(radians(i * 1));

      stroke(200);
      point(
        i,
        i + sin(frameCount / 50) * 50,
        520 + sin(frameCount / 50) * 40
      );
    } else if (key == "r") {
      translate(i * 1, i * 1);
      rotate(radians(i * 1));

      stroke(200);
      line(
        i,
        i + sin(frameCount / 50) * 50,
        520,
        520 + sin(frameCount / 50) * 40
      );
    }
  }

  pop(); //Fin de capa 6
}

