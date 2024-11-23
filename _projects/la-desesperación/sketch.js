//--- Click izquierdo del mouse cambia de color el cuadrado junto al círculo
let cambiarcolor = 255;
let destinoX=0;
let destinoY=0;
let angulo = 0.0;
var desplazamiento = 60;
var escalar = 40;
var velocidad = 0.05;

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  background(220);
  stroke(5);
  
}

function draw() {
var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  angulo += velocidad;
  
  angulo += 0.009;
  
  if (mouseIsPressed) {
     destinoX = mouseX;  
     destinoY = mouseY;
  }
  
 //--- mov de lìneas
  for (var x = 5; x < width; x += 10) {
    let mx = mouseX / 10;
    let desplazamientoA = random(-mx, +mx);
    let desplazamientoB = random(+mx, -mx);
    line(x + desplazamientoA, 512, x - desplazamientoB, 0);
  }
    //cuadrado
  push()
  fill(cambiarcolor);
  rectMode(CENTER);
  rect(mouseX, mouseY,50, 50); 
  pop()
  rect(200, 200, 100, 100);
  }
function mouseClicked(){
  cambiarcolor = random (0,255);
  }