function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(250);
  frameRate(30);
}
function draw() {
  noFill();
  let colore = random(20, 230);
  stroke(colore);
  let grosor = random(0.3, 2.3);
  strokeWeight(grosor);
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      push();
      frameRate(120);
      let alto = random(0, 400);
      let ancho = random(0, 400);
      let giro = random(0, 360);
      //rotate (PI / giro);
      ellipse(mouseX, mouseY, alto, ancho);
      pop();
    }
  }
  if (mouseIsPressed === true) {
    if (mouseButton === RIGHT) {
      push();
      frameRate(10);
      let alto = random(50, 450);
      let ancho = random(50, 450);
      triangle(alto, ancho, 256, 256, mouseX, mouseY);
      pop();
    }
  }
  if (keyIsPressed === true) {
    background(250);
  }
  document.oncontextmenu = function () {
    return false;
  };
}
