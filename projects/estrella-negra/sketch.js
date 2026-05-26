// obra estilo Ben Laposky - Lautaro Sánchez AM1.

var angulo = 5;
var desplazamiento = 256;
var escalar = 162;
var velocidad = 0.15;

function setup() {
  let canvas = createCanvas (512,512);
  canvas.parent('div-sketch');
  frameRate(25);
}

function draw() {
  background(random(0, 50), 5);
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  stroke(random(100, 255));
  line(y, x, 256, 256);
  angulo += velocidad;

  //circulo central 0//
  push();
  noFill();
  stroke(random(0, 255));
  translate(random(5, 20), noise(5, 150));
  circle(250, 255, 325);
  pop();

  //circulo central 1//
  push();
  noFill();
  stroke(random(0, 255));
  //translate(5, 5);
  circle(260, 255, 275);
  pop();

  //circulo central 2//
  push();
  noFill();
  stroke(random(0, 255));
  translate(noise(5, 10), random(5, 10));
  circle(255, 255, 225);
  pop();

  //circulo central 3//
  push();
  noFill();
  stroke(random(0, 255));
  translate(5, 5);
  circle(255, 255, 190);
  pop();

  //circulo central 4//
  push();
  noFill();
  stroke(random(0, 255));
  translate(random(5, 10), random(5, 10));
  circle(255, 255, 160);
  pop();

  //circulo central 5//
  push();
  noFill();
  stroke(random(0, 255));
  translate(5, 5);
  circle(255, 255, 130);
  pop();

  //circulo central 6//
  push();
  noFill();
  stroke(random(0, 255));
  translate(noise(5, 10), random(5, 10));
  circle(260, 255, 100);
  pop();

  //circulo central 7//
  push();
  noFill();
  stroke(random(0, 255));
  translate(5, 5);
  //rotate (frameCount*5)
  circle(255, 255, 70);
  pop();

  //circulo central 8//
  push();
  noFill();
  stroke(random(0, 255));
  translate(random(5, 10), noise(5, 10));
  //rotate (frameCount*5)
  circle(250, 255, 35);
  pop();

  //circulo central 9//
  push();
  fill(random(100, 255));
  stroke(random(0, 255));
  //rotate (frameCount*5)
  // translate(5, 5);
  circle(256, 256, 12);
  pop();
}
