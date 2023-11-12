//Procesos
let alfa = 50;
let v;
function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  background(0);
  v = createVideo("FUTURE.mp4");
  v.size(200, 200);
  v.loop();
  v.hide();
}

function draw() {
  rotateX(frameCount / 5);
  rotateY(frameCount / 6);
  rotateZ(frameCount / 4);
  translate(5, -8);
  stroke(255);
  fill(229, 204, 255, alfa);
  plane(200, 200);
  image(v, width, height);
}
