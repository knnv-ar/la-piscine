let bandera = true;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(40);
}

function draw() {
  if (frameCount == 1 || frameCount == 40) {
    background(100);
    strokeWeight(0);
    textSize(30);
    textStyle(ITALIC);
    text(`clickeame`, 180, 250);
  }
  if (frameCount == 40) {
    bandera = true;
  }
}

function generateDiagonals() {
  bandera = false;
  frameCount = 2;
  background(255);
  let gridSize = floor(random(5, 40));

  const squareSize = 512 / gridSize;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = i * squareSize;
      const y = j * squareSize;

      const diagonalType = floor(random(0, 2));

      strokeWeight(5);

      strokeCap(PROJECT);

      if (diagonalType === 1) {
        stroke(120);
        line(x, y, x + squareSize, y + squareSize);
      } else {
        stroke(0);
        line(x, y + squareSize, x + squareSize, y);
      }
    }
  }
}

function mouseClicked() {
  if (bandera) {
    generateDiagonals();
  }
}
