function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noLoop();
}

function draw() {
  background(255);

  // Tamaño de la cuadrícula y espaciado entre las líneas
  const cols = 2;
  const rows = 2;
  const spacing = width / cols;
  const gap = 10;

  // Calcula el movimiento de las líneas en función de la posición del mouse
  const verticalSpacingFactor = map(mouseY, 0, height, 1, 10);
  const horizontalSpacingFactor = map(mouseX, 0, width, 1, 10);
  const verticalLineThickness = (spacing - gap) / verticalSpacingFactor;
  const horizontalLineThickness = (spacing - gap) / horizontalSpacingFactor;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
     
      // Dibuja las líneas verticales cuando el mouse se mueve verticalmente
      if (abs(pmouseY - mouseY) > 1) {
        stroke(0);
        strokeWeight(2);
        for (let i = x; i < x + spacing; i += verticalLineThickness + gap) {
          line(i, y, i, y + spacing);
        }
      }

      // Dibuja las líneas horizontales cuando el mouse se mueve horizontalmente
      if (abs(pmouseX - mouseX) > 1) {
        stroke(0);
        strokeWeight(2);
        for (let j = y; j < y + spacing; j += horizontalLineThickness + gap) {
          line(x, j, x + spacing, j);
        }
      }
    }
  }
  fill(0);
  
  // Punto superior derecho
  ellipse(width / 1.01, height / 100, 5, 5);
  
  // Punto inferior izquierdo
  ellipse(width / 4, height / 1.39, 5, 5);
}

function mouseMoved() {
  redraw();
}
