// Arandú Leguiza. AM1 cat. Lacabanne. TP1
function setup() {
  frameRate(2);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  stroke(150);
  strokeWeight(2);
  noFill();
  noCursor();
}
//var angulo = 0.0;
function draw() {
  //fondo

  background(0);

  //ciclos (zonas de iluminación)

  push();
  if (frameCount % 2 === 0) {
    fill(255, 210);
  }

  rect(150, 100, 100, 100); //rect arriba (1)

  pop();

  push();
  if (frameCount % 3 === 0) {
    fill(255);
  }

  rect(350, 300, 100, 101); //rect abajo (2)

  pop();

  push();
  if (frameCount % 5 === 0) {
    fill(255, 210);
  }
  rect(2, 150, 198, 100); //rect izq arriba (3)

  pop();

  push();
  if (frameCount % 7 === 0) {
    fill(255);
  }
  rect(2, 200, 248, 100); // rect izq abajo (4)

  pop();

  push();
  if (frameCount % 11 === 0) {
    fill(255, 210);
  }
  rect(300, 150, 210, 100); //rect der arriba (5)
  pop();

  push();
  if (frameCount % 13 === 0) {
    fill(255);
  }
  rect(350, 200, 160, 100); //rect der abajo (6)
  pop();

  push();
  if (frameCount % 17 === 0) {
    fill(255);
  }
  quad(150, 101, 150, 200, 350, 401, 350, 300); //quad izq (7)
  pop();

  push();
  if (frameCount % 19 === 0) {
    fill(255, 210);
  }
  quad(251, 101, 250, 200, 450, 400, 450, 300); //quad der (8)
  pop();
}
