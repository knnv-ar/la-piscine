// -CREAR O CONSUMIR- //
// Mantener presionado click y mover el mouse para intervenir.

var x = 0;
var y = 0;
var ta = 256;
var tra = 50;
var negro = 0;
var blanco = 255;
var pun = 10;
var pen = 10;



var angulo = 0.0;
var desplazamiento = 80;
var escalar = 10;
var velocidad = 0.001;

var angulo2 = 40;
var desplazamiento2 = 256;
var escalar2 = 20;
var velocidad2 = 0.001;




function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
   background(negro);

}

function draw(){
  push()
  
  // Perspectiva 
if (mouseIsPressed) { 
  //frameRate(40)
  blanco = 0;
  negro = 100;
  x= -200;
 tra = 30;
  ta += 0.05;
  if (ta >= 356) {
    ta = 256;
    } else { ta = 256;}
strokeWeight(1)
  stroke(255,100)
  pun += 1;
  pen += 1;
  line(mouseX, mouseY,pun,pen);
  if (pun >= 512) {
    pun = 0;
  }
  if (pen >= 512) {
    pen = 256;
  }
  
  } else {
    ta = 256;
    blanco = 255;

  }
 
    pop()
    ////
  
    //Fondo latente
  for (var i = 3; i < 515; i += 84) {
  var y1 = desplazamiento + sin(angulo) * escalar;
  strokeWeight(1.5)
   stroke(blanco);
  fill(blanco); 
    
  line(i,y1,i,400)
  angulo += velocidad;
    
 // Centro 
     var y2 = desplazamiento2 + sin(angulo2) * escalar2;
    var x2 = desplazamiento2 + cos(angulo2) * escalar2;
    noStroke(0)
      fill(2,120)
    ellipse (x2,y2,ta,ta)
 angulo2 += velocidad2;
    
    // Figura blanca - Luces
     push()
x = x + 0.5;
 translate(x, height / 2 - 200 / 2);
     //reinicia la posición
  if (x > width + 200) {
    x = -200;
  }
  fill(2,tra);
  ellipse(0, -50, 312,312);
    ellipse(0,256,312,312)
       pop()

} 
} 
document.oncontextmenu = function () {
  return false;
}