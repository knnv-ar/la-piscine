/*
Alumno: Javier Iaria
TPN1
*/

var grande = 2; 


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
}

function draw() {
 // background(240);
  strokeWeight(grande); //
  for (let i = 0; i < 4000; i++) { //densidad de puntos
    stroke(0);
    point(random(512), random(512));

    stroke(150);
    point(random(512), random(512));

    stroke(255);
    point(random(512), random(512));
  }
}

function mousePressed() { 
  if (mouseButton == LEFT) {
    grande = grande + 1; //boton izq hace mas grande los puntos
  } else if (mouseButton == RIGHT) {
    grande = grande - 1; //boton derecho hace mas chicos los puntos
  }
}

document.oncontextmenu = function () {
  return false;
};
