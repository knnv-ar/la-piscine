let quadX, quadY, quadTamanio, quadGris;
let circuloX, circuloY, circuloTamanio, circuloGris;
let trazoX1, trazoY1, trazoX2, trazoY2;
let trazoGris, trazoPeso;

let duracion; 

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(20);
  noStroke();

  quadX = random(width);
  quadY = random(height);
  quadTamanio = random(30, 80);
  quadGris = random(100, 200);

  circuloX = random(width);
  circuloY = random(height);
  circuloTamanio = random(40, 90);
  circuloGris = random(80, 180);

  trazoX1 = random(width);
  trazoY1 = random(height);
  trazoX2 = random(width);
  trazoY2 = random(height);
  trazoPeso = random(2, 8);
  trazoGris = random(120, 220);
}

function draw() {
  duracion = random (1,20);
  background(20, duracion);
  push();
  fill(quadGris, 150);
  quad(
    quadX - quadTamanio / 2,
    quadY - quadTamanio / 2,
    quadX + quadTamanio / 2,
    quadY - quadTamanio / 2,
    quadX + quadTamanio / 2,
    quadY + quadTamanio / 2,
    quadX - quadTamanio / 2,
    quadY + quadTamanio / 2
  );

  quadX += random(-1, 1);
  quadY += random(-1, 1)
  quadTamanio -= random(1,1);
  quadGris -= random(1,1); 

  if (quadTamanio < 30 || quadGris < 60) {
    quadX = random(width);
    quadY = random(height);
    quadTamanio = random(30, 80);
    quadGris = random(100, 200);
  }
  pop();
  push();
  fill(circuloGris, 150);
  circle(circuloX, circuloY, circuloTamanio);
  circuloX += random(-1, 1);
  circuloY += random(-1, 1);
  circuloTamanio -= random(0.75, 1.5);
  circuloGris -= random(1.5, 3);

  if (circuloTamanio < 25 || circuloGris < 55) {
    circuloX = random(width);
    circuloY = random(height);
    circuloTamanio = random(40, 90);
    circuloGris = random(80, 180);
  }
  pop();

  push();
  stroke(trazoGris, 150);
  strokeWeight(trazoPeso);
  line(trazoX1, trazoY1, trazoX2, trazoY2);
  noStroke();
  trazoX1 += random(-1, 1);
  trazoY1 += random(-1, 1);
  trazoX2 += random(-1, 1);
  trazoY2 += random(-1, 1);
  trazoPeso -= random(0.1, 0.2);
  trazoGris -= random(2, 4);

  if (trazoPeso < 3 || trazoGris < 80) {
    trazoX1 = random(width);
    trazoY1 = random(height);
    trazoX2 = random(width);
    trazoY2 = random(height);
    trazoPeso = random(2, 8);
    trazoGris = random(120, 220);
  }
  pop();
  
}
