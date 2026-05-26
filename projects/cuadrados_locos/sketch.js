let angle = 0;
let rotationSpeed = 0.05;
let color1 = 300; // color blanco inicial
let color2 = 0;   // color negro inicial

let lastKeyC = false;
let lastKeyF = false;
let lastKeySpace = false;
let lastKeyD = false;

let rotateActive = false;

function setup() {
 let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  angleMode(RADIANS);
}

function draw() {
  background(color1);
  strokeWeight(6);
  stroke(0);

  // Manejo de teclas
  if (keyIsPressed) {
    if ((key === 'c' || key === 'C') && !lastKeyC) {
      // Cambia colores random blanco y negro
      color1 = random(0, 300);
      color2 = random(0, 300);
      lastKeyC = true;
    }
    if ((key === 'f' || key === 'F') && !lastKeyF) {
      if (rotateActive) {
        rotationSpeed += 0.05;
      }
      lastKeyF = true;
    }
    if ((key === 'd' || key === 'D') && !lastKeyD) {
      rotateActive = !rotateActive;
      lastKeyD = true;
    }
    if (key === ' ' && !lastKeySpace) {
      // Reiniciar a estado inicial
      color1 = 300;
      color2 = 0;
      rotationSpeed = 0.05;
      angle = 0;
      rotateActive = false;
      lastKeySpace = true;
    }
  } else {
    lastKeyC = false;
    lastKeyF = false;
    lastKeySpace = false;
    lastKeyD = false;
  }

  fill(color1);

  // Cuadros blancos normales
  rect(10, 10, 160, 160);
  rect(25, 25, 130, 130);
  rect(40, 40, 100, 100);
  rect(60, 60, 60, 60);

  rect(180, 10, 160, 160);
  rect(195, 25, 130, 130);
  rect(210, 40, 100, 100);

  rect(350, 10, 160, 160);
  rect(365, 25, 130, 130);
  rect(380, 40, 100, 100);
  rect(400, 60, 60, 60);

  rect(10, 185, 160, 160);
  rect(25, 200, 130, 130);
  rect(40, 215, 100, 100);

  rect(180, 185, 160, 160);
  rect(195, 200, 130, 130);
  rect(210, 215, 100, 100);

  rect(350, 185, 160, 160);
  rect(365, 200, 130, 130);
  rect(380, 215, 100, 100);
  rect(400, 235, 60, 60);

  rect(180, 349, 160, 160);
  rect(195, 365, 130, 130);

  rect(10, 349, 160, 160);
  rect(25, 365, 130, 130);
  rect(40, 380, 100, 100);
  rect(210, 380, 100, 100);

  rect(350, 349, 160, 160);
  rect(365, 365, 130, 130);
  rect(380, 379, 100, 100);
  rect(400, 400, 60, 60);

  // Rotación de los cuadrados pequeños y negros

  push();
  translate(260, 90);
  rotate(rotateActive ? angle : PI / 12);
  rectMode(CENTER);
  fill(color1);
  rect(0, 0, 60, 60);
  fill(color2);
  rect(0, 0, 60, 60);
  pop();

  push();
  translate(90, 270);
  rotate(rotateActive ? angle : PI / 12);
  rectMode(CENTER);
  fill(color1);
  rect(0, 0, 60, 60);
  fill(color2);
  rect(0, 0, 30, 30);
  pop();

  push();
  translate(260, 430);
  rotate(rotateActive ? angle : PI / 12);
  rectMode(CENTER);
  fill(color1);
  rect(0, 0, 60, 60);
  fill(color2);
  rect(0, 0, 60, 60);
  pop();

  push();
  translate(260, 265);
  rotate(rotateActive ? angle : PI / 12);
  rectMode(CENTER);
  fill(color1);
  rect(0, 0, 60, 60);
  fill(color2);
  rect(0, 0, 30, 30);
  pop();

  if (rotateActive) {
    angle += rotationSpeed;
  }
}
