var angulo = 0.0;
var desplazamiento = 255;
var escalar = 200;
var velocidad = 0.03;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}
function draw() {
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  line(x, y, x, 400);
  strokeWeight(2);
  stroke(255);

  strokeCap(PROJECT);
  angulo += velocidad / 2;
}
