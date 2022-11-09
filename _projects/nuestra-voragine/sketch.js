let r1, r2, r3, r4;
let animate = true;
var contador = 0;

function setup() {
  let canvas = createCanvas (512,512);
  canvas.parent('div-sketch');
  r1 = random(0, 250);
  r2 = random(0, 250);
  r3 = random(0, 250);
  r4 = random(0, 250);
}

function draw() {
  if (animate) {
    background(0);
    translate(width / 2, height / 2);
    scale(0.5);
    for (let x = 0; x < width; x += 15) {
      for (let y = 0; y < width; y += 25) {
        let rot = contador  * 0.0001;
        rotate(rot);
        strokeWeight(0.2);
        stroke(100);
        line(y, r1, x, r2);
        strokeWeight(0.5);
        stroke(250);
        line(x, r3, y, r4);
      }
    }
    contador++;
  }
}
function mousePressed() {
  setup();
}
function keyPressed(SPACE) {
  animate = !animate;
}
