let X = 1;
let Y = 1;
let strokes = 15;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  frameRate(44);
}

function draw() {
  
  noFill();

  stroke(strokes, random(250));
  strokes = strokes + 0.4;

  triangle(X, Y, 256, 256, random(512), random(512));
  //circle(X, Y, strokes);

  X = X + 3;
  Y = Y + 3;

  //prueba

  if (X > 512) {
    noFill();

    stroke(strokes, random(250));
    strokes = strokes + 2;

    triangle(0, 0, 256, 256, random(512), random(512));

    X = 512;
    X = X - 3;
    Y = 512;
    Y = 512 - 3;
  }
}
