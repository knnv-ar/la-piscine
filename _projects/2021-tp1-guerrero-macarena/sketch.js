//Declaracion de variables
var col = 0;
var anchoPincel = 5;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}
function draw() {
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(38);
    } else if (mouseButton == RIGHT) {
      stroke(155);
    }
    strokeWeight(anchoPincel);
  }

  col = mouseX / 2;
  background(col);
  noStroke(0);
  fill(255, 128);

  for (var x = 0; x <= width; x += 12) {
    for (var y = 0; y <= height; y += 12) {
      fill(random(110, 15), random(255, 15));
      circle(250, 205, random(330, 10));
    }
  }
}
document.oncontextmenu = function () {
  return false;
};
