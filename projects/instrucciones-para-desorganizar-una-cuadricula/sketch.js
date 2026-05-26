let currentStrokeColor;

function setup() {
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(150, 150, 150);
  frameRate(10);
  noFill();
  rectMode(CENTER);
  push()
  stroke(0, 0, 0)
  rect(width / 2, height / 2, 200);
  pop()
  currentStrokeColor = color(0);

  document.oncontextmenu = () => false;
}

function draw() {
  

  // Cambiar color con teclas
  if (keyIsPressed) {
    if (key === "a" || key === "A") {
      currentStrokeColor = color(255, 255, 255);
    } else if (key === "s" || key === "S") {
      currentStrokeColor = color(100, 100, 100);
    } else if (key === "d" || key === "D") {
      currentStrokeColor = color(0, 0, 0);
    }
  }
  
  // reiniciar
if (keyIsPressed) {
    if (key == "r" || key == "R") {
      background(150, 150, 150);
      stroke(0, 0, 0)
    rect(width / 2, height / 2, 200);
    }
  }
  
  stroke(currentStrokeColor);  

  // cuadrados aleatorios desde el centro
  let distMax = dist(mouseX, mouseY, width / 2, height / 2);

  for (let i = 0; i < 1; i++) {
    let angle = random(TWO_PI);
    let distance = random(0, distMax);
    let x = width / 2 + cos(angle) * distance;
    let y = height / 2 + sin(angle) * distance;
    let tam = random(1, 70);
    rect(x, y, tam);
  }
}
