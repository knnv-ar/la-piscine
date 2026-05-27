//Carla Torrejon
//Artes Multimediales I Cát. Lacabanne 2021
//Obra:ABISMO SINESTESICO

let lini;
let der;
let izq;
let circu;
var black = 0;
var white = 200;

function setup() {
  frameRate(10);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(200);
  noCursor();
  document.oncontextmenu = function () {
    return false;
  };
}

function draw() {
  black = map(mouseY, 0, 400, 0, 255);
  white = map(mouseY, 0, 256, 400, 0);
  background(black);
  stroke(white);
  fill(0);

  if (mouseIsPressed) {
    background(0);
    fill(0);
    stroke(0);
  }

  circu = random(0, 60);

  stroke(100);
  noFill();
  lini = random(0, 1000);
  if (mouseIsPressed) {
    lini = 0;
    oval = 0;
  }

  //cuadros
  push();
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 10, 90));
  rect(0, 0, 500, 500);
  pop();

  //circulocentral

  oval = random(0, 90);
  push();
  strokeWeight(oval);
  fill(0, 10);
  ellipse(250, 250, lini, lini);
  pop();

  //quads
  push();
  if (mouseIsPressed) {
    fill(circu, 50);
    push();
    quad(0, 512, mouseX, mouseY, 512, lini, mouseY, 100);
    quad(0, 0, mouseX, mouseY, 512, 512, mouseY, 100);
    quad(mouseX, mouseY, mouseX, mouseY, mouseY, mouseX, mouseY, mouseX);

    pop();

    //quadup
    fill(circu, 90);
    quad(250, 512, mouseX, mouseY, 250, 0, mouseY, mouseX);
    quad(mouseX, mouseY, 512, 250, mouseY, mouseX, 0, 250);
  }
  pop();

  if (mouseIsPressed) {
    frameRate(120);
  } else {
    frameRate(10);
  }
}
