var angulo = 0.01;
var anguloR = 0.00001;
var desplX = 270;
var desplY = 200;
var escalar = 60;
var velocidad = 0.001;
var velocidadR = 0.0003;

let contador = 0;
var grosor = 0.3;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(90);
}
function draw() {
  background(80);
  angleMode(DEGREES);
  contador++;

  //CUADRADO
  push();
  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(grosor);

  //GIRO
  var x = desplX + cos(angulo) * escalar;
  var y = desplY + sin(angulo) * escalar;
  //

  for (var i = 4; i < 275; i += 3) {
    var mx = mouseX / 12;
    var desplA = random(-mx, mx);
    var desplB = random(-mx, mx);
    rect(x, y, i + desplA, i - desplB);
    rotate(anguloR);
    angulo += velocidad;
  }
  anguloR += velocidadR;
  if (contador > 3800) {
    velocidadR = 0.003;
  }
  pop();
}
