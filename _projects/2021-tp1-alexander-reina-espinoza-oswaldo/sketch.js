/*
2021 - Alexander Reina
Dibujo de Alexander Reina en 
https://www.openprocessing.org/
*/
var offset = 0;
var angulo = 0.0;
var desplazamiento = 60;
var escalar = 1;
var velocidad = 0.02;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(255);
  for (var z = 0; z <= width; z = z + 120) {
    var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;

    strokeCap(ROUND);
    fill(0);
    ellipse(255, 255, 500, 500);
    fill(255);
    ellipse(255, 255, 450, 450);
    fill(0);
    ellipse(255, 255, 400, 400);
    fill(255);
    ellipse(255, 255, 350, 350);
    fill(0);
    ellipse(255, 255, 300, 300);
    fill(255);
    ellipse(255, 255, 250, 250);
    fill(0);
    ellipse(255, 255, 200, 200);
    fill(255);
    ellipse(255, 255, 150, 150);
    fill(0);
    ellipse(255, 255, 100, 100);

    fill(255);
    strokeWeight(5);
    ellipse(255, 255, x, y);
    fill(255);
    ellipse(x + offset, 255, 520, 520);
    offset = offset + 1;
    angulo += velocidad;
    escalar += velocidad;
  }
  //para que no se despliegue el menú del navegador//
  document.oncontextmenu = function () {
    return false;
  };
}
