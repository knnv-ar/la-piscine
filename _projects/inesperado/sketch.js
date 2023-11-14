let circulos = [];
let actTam = 0;
let mov1 = 0;
let mov2 = 0;

let vel1 = 0.01;
let vel2 = 1;
let vel3 = 0.001;
let angulo1 = 0;
let angulo2 = 20;
let angulo3 = 45;
let flor = 1;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(50);
  angleMode(DEGREES);
  colorMode(HSB, 360, 80, 80, 80);

  h = 36;
  s = random(60, 100);
  b = random(80, 100);

  for (let i = 0; i < 85; i++) {
    circulos.push({
      a: 70 - i,
      tamanio1: 0.1 + actTam,
      tamanio2: 0.2 + actTam,
      posX: 10,
      posY: 10,
    });
    actTam += 3;
  }
}
function draw() {
  background(0);

  if (flor == 1) {
    //1
    flor1(180, 180, 0.4);
  } else if (flor == 2) {
    //2
    flor2(0, 0, 0.4);
  } else if (flor == 3) {
    //3
    flor3(200, 200, 2);
  }
}

function flor1(uno, dos, tres) {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < circulos.length; i++) {
    ellipseMode(CENTER);
    noFill();
    strokeWeight(1.3);
    stroke(h, s, b, circulos[i].a);

    ellipse(0, 0, circulos[i].tamanio1 + mov1, circulos[i].tamanio2 + mov2);
    mov1 = 1 + sin(uno + frameCount * 0.2) * 100;
    mov2 = 1 + cos(dos + frameCount * 0.2) * 300;

    rotate(angulo1);
  }
  angulo1 += tres * vel1;
  pop();
}

function flor2(uno, dos, tres) {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < circulos.length; i++) {
    ellipseMode(CENTER);
    noFill();
    strokeWeight(1.3);
    stroke(h, s, b, circulos[i].a);

    ellipse(0, 0, circulos[i].tamanio1 + mov1, circulos[i].tamanio2 + mov2);
    mov1 = 1 + sin(uno + frameCount * 0.2) * 200;
    mov2 = 1 + cos(dos + frameCount * 0.2) * 350;
    rotate(angulo2);
  }
  angulo2 += tres * vel1;
  pop();
}

function flor3(uno, dos, tres) {
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < circulos.length; i++) {
    ellipseMode(CENTER);
    noFill();
    strokeWeight(1.3);
    stroke(h, s, b, circulos[i].a);
    ellipse(0, 0, circulos[i].tamanio1 + mov1, circulos[i].tamanio2 + mov2);
    mov1 = 1 + sin(uno + frameCount * 0.2) * 200;
    mov2 = 1 + cos(dos + frameCount * 0.2) * 450;
    rotate(angulo3);
  }
  angulo3 += tres * vel1;
  pop();
}

function mousePressed() {
  s = random(70, 100);
  b = random(20, 80);
}

function keyPressed() {
  if (key == "a") {
    flor = 1;
  } else if (key == "s") {
    flor = 2;
  } else if (key == "d") {
    flor = 3;
  }
}
