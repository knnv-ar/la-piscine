//Título de la obra: Para Vera
//Año: 2021
//Autor/a: Vanesa Inés Juan
//Artes Multimediales 1. Cátedra Lacabanne. Trabajo Práctico Nro1

var x = 282;
var y = 20;
var x1 = 97;
var y1 = 20;
var x2 = 18;
var y2 = 320;
var x3 = 148;
var y3 = 450;
var x4 = 255;
var y4 = 350;
var mv = 0.11;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

var angulo = 0.0;
var desplazamiento = 60;
var escalar = 40;
var velocidad = 0.001;

function draw() {
  background(0);

  //lineas centrales
  push();
  for (var i = 112; i <= 395; i += 10) {
    var m = mouseX / 9;
    var despl = random(m);
    rect(i + despl, 42 + despl, 4, 412);
  }
  pop();

  //cuadrado y rectangulos

  /*Desactivado xq esta ahi sin una justificacion real. igual tkm
  var y1 = desplazamiento * sin(angulo) * escalar;
  noStroke();
  square(330, y1, 130);
  angulo += velocidad;
*/

  noStroke();
  rect(x, y, 211, 32);
  x += random(-mv, mv);
  y += random(-mv, mv);

  noStroke();
  rect(x1, y1, 155, 300);
  x1 += random(-mv, mv);
  y1 += random(-mv, mv);

  noStroke();
  rect(x2, y2, 93, 188);
  x2 += random(-mv, mv);
  y2 += random(-mv, mv);

  noStroke();
  rect(x3, y3, 282, 52);
  x3 += random(-mv, mv);
  y3 += random(-mv, mv);

  noStroke();
  rect(x4, y4, 45, 77);
  x4 += random(-mv, mv);
  y4 += random(-mv, mv);
}
