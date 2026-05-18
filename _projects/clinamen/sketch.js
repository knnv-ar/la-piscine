// Declaración de variables (congelar imagen + tiempo)
let congelar = false;
let t = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  if (!congelar) {
    // Fondo con opacidad
    fill(0, 15);
    rect(0, 0, width, height);

    // Diseño lineas
    stroke(255);
    noFill();

    // Movimientos líneas
    let centerX = width / 2;
    let centerY = height / 2;
    // Cant. y medida
    let numLines = 5;
    let radius = 220; 
    
    // Líneas
    for (let i = 0; i < numLines; i++) {
      let angle = map(i, 0, numLines, 0, TWO_PI);
      let x1 = centerX + radius * cos(angle + t);
      let y1 = centerY + radius * sin(angle + t);
      let x2 = centerX + (radius / 2) * cos(angle - t);
      let y2 = centerY + (radius / 2) * sin(angle - t);
      line(x1, y1, x2, y2);
    }

    // Velocidad de movimiento
    t += 0.015;
  }
}

// Funcion para congelar

function mousePressed() {
  if (mouseButton === LEFT) {
    congelar = true;
  }
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    congelar = false;
  }
}
