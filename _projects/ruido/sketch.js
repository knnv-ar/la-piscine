let x;
let y;

let angulo_rect = 0.0;

// Vera Molnár

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate = 45;
 
}

function draw() {
  push();
  angulo_rect += 0.1;
  let valorSeno = sin(angulo_rect) / 3;
  let gris = map(valorSeno, -1, 1, 0, 255);

  x = random(0, 512);
  y = random(0, 512);

  noFill();
  stroke(gris);

  rect(x, y, 50, 50);

  pop();

  if (mouseIsPressed == true) {
    // Dar click izq o der para
    background(255); // Reiniciar la obra
  }

  document.oncontextmenu = function () {
    return false;
  };
}
