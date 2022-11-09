// TP N°2 - Victoria Carrer - TM
// Título de la obra: "Reemplazo"

// Presionar 'ENTER' para entrar al mundo tecnológico.
// Para ver belleza real, presionar la tecla 'R'.
// Para volver a la belleza virtual, presionar la tecla 'V'.

var mode, pixeboy, lentes;
var angulo = 0.0;
var desplazamiento = 90;
var escalar = 5;
var velocidad = 0.1;
var starSpeed = 3;
var resetInterval = 100;

function preload() {
  pixeboy = loadFont("img/pixeboy.ttf");
  lentes = loadImage("img/lentes.png");
}

class Star {
  constructor() {
    this.setup();
  }

  draw() {
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(random(150, 255), 150, random(150, 255));
    strokeWeight(this.sr);
    line(px, py, sx, sy);
  }

  update() {
    this.z -= starSpeed;
    if (this.z <= resetInterval) {
      this.setup();
    }
  }

  setup() {
    this.z = random(width);
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.pz = this.z;
    this.sr = random(1, 1000) / 300;
  }
}

const stars = [];

function setup() {
  mode = 0;
  let canvas = createCanvas(600, 420, WEBGL);
  canvas.parent('div-sketch');
  for (let i = 0; i < 60; i++) {
    stars.push(new Star());
  }
}

function draw() {
  push();
  colorMode(HSL, 250);
  background(mouseX, mouseY, 235);
  noCursor();
  pop();

  // Ready?
  if (mode == 0) {
    push();
    fill(103, 49, 105);
    textSize(21);
    textFont(pixeboy);
    text("READY?", -28, -40);
    fill(0);
    text("PRESS 'ENTER' TO", -70, 30);
    text("WEAR VIRTUAL GLASSES", -95, 47);
    text("AND WITNESS BEAUTY", -85, 64);
    pop();

    push();
    image(lentes, -75, -60);
    lentes.resize(150, 97);
    pop();

    push();
    var y1 = desplazamiento + sin(angulo) * escalar;
    var y2 = desplazamiento + sin(angulo + 0.4) * escalar;
    var y3 = desplazamiento + sin(angulo + 0.8) * escalar;
    noStroke();
    fill(103, 49, 105);
    ellipse(-10, y1, 3, 3);
    ellipse(0, y2, 3, 3);
    ellipse(10, y3, 3, 3);
    angulo += velocidad;
    pop();
  }

  // Virtualidad
  if (mode == 1) {
    background(0);

    push();
    starSpeed = map(mouseX, 0, width, 0, 40);
    resetInterval = map(mouseY, 0, height, 0, 40);
    translate(0, 0);
    stars.forEach((star) => {
      star.draw();
      star.update();
    });
    pop();

    push();
    fill(255);
    stroke(200, 191, 255);
    ambientLight(133, 110, 198);
    var x = mouseX - width / 2;
    var y = mouseY - height / 2;
    pointLight(156, 159, 56, x, y, 160);
    translate(0, -10, -5);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    sphere(120);
    pop();

    push();
    fill(255);
    textSize(21);
    textFont(pixeboy);
    text("PRESS 'r' TO WITNESS REAL BEAUTY", -140, 190);
    pop();
  }

  // Realidad
  if (mode == 2) {
    background(0);
    textSize(21);
    fill(255);
    textFont(pixeboy);
    text("LOOK AROUND YOU.", -70, 0);
    fill(100);
    text("OR JUST PRESS 'V'", -70, 20);
    text("TO GO BACK", -45, 35);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  } else if (key === "r" || key === "R") {
    mode = 2;
  } else if (key === "v" || key === "V") {
    mode = 1;
  }

  document.oncontextmenu = function () {
    return false;
  };
}
