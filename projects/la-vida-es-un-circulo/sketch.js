/* "LA VIDA ES UN CIRCULO" 
OBRA DE SOL PUIG */

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(255);
}

function draw() {
  var color = map(mouseX, 0, 512, 254, 0);

  //circulo mouse
  stroke(color);
  noFill();
  ellipse(mouseX, mouseY, 100, 100);
}
