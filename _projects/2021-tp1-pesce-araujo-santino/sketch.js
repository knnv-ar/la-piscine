// Santino Alejandro Pesce Araujo
// TP1 

var apagado = 2;
//Radio de los circulos
var radio1 = 65
var radio2 = 65
//Angulo del circulo
var angulo1 = 0
var angulo2 = 0

var prevX
var prevY

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  angleMode (DEGREES)
  background (0)
  //Forma de el algoritmo
  radio1 = random(50, 100)
  radio2 = random(50, 100)
  
  angulo1Inc = random(0.1, 10)
  angulo2Inc = random(0.1, 10)
}

function draw () {
  
  translate(width / 2, height / 2)
  stroke (255)
  
//Para acelerar la velocidad
  for (var i = 0; i < 7.5; i++) {
      var x1 = radio1 * cos(angulo1)
  var y1 = radio1 * sin(angulo1)
  
  var x2 = x1 + radio2 * cos (angulo2)
  var y2 = y1 + radio2 * sin (angulo2)
  
  line(prevX, prevY, x2, y2)
  
  prevX = x2
  prevY = y2
  
  angulo1 += angulo1Inc
  angulo2 += angulo2Inc

  }
 }