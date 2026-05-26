function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent("div-sketch");
  noFill();
  strokeWeight(1);
}

function draw() {
  background(2, 10); // Fondo semitransparente para dejar estela o rastro

  // Bucle para dibujar  figuras por cuadro
  for (let i = 1; i < 400; i++) {
    push(); // Guarda el estado actual de transformación

    // Velocidad dek Movimiento general
    let t = (frameCount * 0.025) / i;

    // Coordenadas base de cada figura, oscilan desde el centro
    let x = width / 2 + cos(t + i) * 150; // Desplazamiento horizontal
    let y = height / 2 + sin(t + i) * 130; // Desplazamiento vertical

    translate(x, y); // Posiciona la figura en el canvas

    // Rotación de cada figura afectada por el mouse y su índice
    rotate(t * 0 + sin(mouseY + mouseX) * 50.1 + i * 0.01);

    // Color en escala de grises basado en el tiempo y el índice
    let gris = map(sin(t + i), -1, 1, 240, 4);
    stroke(gris); // Aplica el tono de gris al contorno

    // Dibujo de la figura:
    // - 9 puntos curvos conectados con deformaciones dinámicas
    // - Cada punto se deforma según el tiempo, el índice y la posición del mouse
    // - Los ángulos están mapeados de forma parcial, lo que genera irregularidad

    beginShape();
    for (let j = 0; j < 9; j++) {
      let ang = map(j, 2, 6, 4, TWO_PI); // Ángulo distorsionado
      let deformacion = sin(frameCount * 0.05 + j + i) * mouseX + mouseY;
      let radio = 40 + deformacion;
      let px = cos(ang) * radio;
      let py = sin(ang) * radio;
      curveVertex(px, py); // Añade punto a la curva
    }
    endShape(CLOSE); // Cierra la figura

    pop(); // Restaura el estado de transformación
  }
}
