let gridNum = 16;
let rectAlpha = 255;
let internalRot = 1;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent("div-sketch");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  let squareSize = width / gridNum;
  rectAlpha = constrain(rectAlpha, 0, 255);
  background(10, 230);

  //grilla de cuadrados
  push();
  translate(height / 2 + 1, width / 2);
  rotate(45);

  for (let x = -width / 2; x < width / 2.5; x += squareSize) {
    for (let y = -height / 2; y < height / 2.5; y += squareSize) {
      //cuadrados externos
      push();
      fill(40, 220);
      strokeWeight(1);
      translate(x, y);
      square(0, 0, squareSize, 8);

      //cuadrados internos
      push();
      noStroke();
      fill(150, 200);
      rotate(internalRot);
      square(0, 0, squareSize - 23, 1.5);
      pop();

      pop();
    }
  }
  pop();

  //cuadrado negro tapa cosas
  push();
  noStroke();
  //interaccion
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      rectAlpha -= 4;
    }
  } else {
    rectAlpha += 8;
  }

  fill(10, rectAlpha);
  rect(width / 4, height / 2, width / 2, height);
  pop();

  //hace rotar los cuadrados internos
  internalRot++;
}
