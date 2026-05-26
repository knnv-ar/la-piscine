//sol herrera
let xoff = 0.80;
let yoff = 0.80;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  //background(0);
}

function draw() {
  xoff += 0.008;
  yoff += 0.01;
  let nX = noise(xoff) * width;
  let nY = noise(yoff) * height;

  //background(200);
  fill(255, 250);
  ellipse(nX, nY,5, 221);

}






