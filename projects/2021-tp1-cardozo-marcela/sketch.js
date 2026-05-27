var llegoalmaximo = false;

var angulo1 = 0.5;
var desplazamiento = 290;
var escalar1 = 35;
var velocidad1 = 0;

var angulo2 = 0.05;
var escalar2 = 150;
var velocidad2 = 0;

var angulo3 = 0.05;
var escalar3 = 150;
var velocidad3 = 0;

var angulo4 = 0.05;
var escalar4 = 150;
var velocidad4 = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(10);
  var y1 = desplazamiento + sin(angulo1) * escalar1;
  var y2 = desplazamiento + sin(angulo2) * escalar2;
  var y3 = desplazamiento + sin(angulo3) * escalar3;
  var y4 = desplazamiento + sin(angulo4) * escalar4;

  if (llegoalmaximo === false) {
    if (velocidad1 < 0.15) {
      velocidad1 += 0.00005;
    }
    else{
      llegoalmaximo = true
    }
    if (velocidad2 < 0.10) {
      velocidad2 += 0.00005;
    }
    if (velocidad3 < 0.11) {
      velocidad3 += 0.00004;
    }
    if (velocidad4 < 0.12) {
      velocidad4 += 0.00005;
    }
  }
  else{
    if (velocidad1 >= 0.01) {
      velocidad1 -= 0.00005;
    }
    if (velocidad2 >= 0.02) {
      velocidad2 -= 0.00005;
    }
    if (velocidad3 >= 0.015) {
      velocidad3 -= 0.00004;
    }
    if (velocidad4 >= 0.01) {
      velocidad4 -= 0.00005;
    }
  }
    
  fill(110);
  noStroke();
  circle(256, y1, 40);
  noFill();
  stroke(255);
  bezier(5, 300, 100, y3, y2, y3, 507, 300);
  bezier(5, 300, y3, y4, 450, y4, 507, 300);
  
  angulo1 += velocidad1;
  angulo2 += velocidad2;
  angulo3 += velocidad3;
  angulo4 += velocidad4;
}
