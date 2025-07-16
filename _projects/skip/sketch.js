function setup() {
  createCanvas(512, 512);
}

function draw() {
  // Fondo medio transparente
  fill(0, 20);
  rect(0, 0, width, height);

  stroke(255);
  noFill();

  // Coordenadas individuales
  let x0 = -260, y0 = 20;
  let x1 = -200, y1 = -50;
  let x2 = -140, y2 = -20;
  let x3 = -80, y3 = -60;
  let x4 = -20, y4 = -140;
  let x5 = 40, y5 = -60;
  let x6 = 100, y6 = -20;
  let x7 = 150, y7 = -80;
  let x8 = 190, y8 = -30;
  let x9 = 260, y9 = 20;

  let frecuencia = 0.05;
  let amplitud = 5;
  let latido = sin(frameCount * frecuencia) * amplitud;
  let capas = 5;

  // Variables para glitch
  let glitchActiva = false;
  if (frameCount % 180 < 10) {
    glitchActiva = true;
  }

  let glitchOffset;
  if (glitchActiva) {
    glitchOffset = random(-10, 8);
  } else {
    glitchOffset = 0;
  }

  for (let k = 0; k < capas; k++) {
    let movimiento = sin(frameCount * 0.1 + k) * (capas - k);

    let t = frameCount * 0.01 + k * 0.3;
    let gris = sin(t) * 127 + 128;
    let strokeValor;
    if (glitchActiva) {
      strokeValor = 255;
    } else {
      strokeValor = gris;
    }
    stroke(strokeValor);

    let MOVIA = 0;
    let MOVIB = 0;
    if (glitchActiva) {
      MOVIA = random(-5, 5);
      MOVIB = random(-5, 5);
    }

    // Línea 0 a 1
    line(x0 + width / 2 + MOVIA, y0 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x1 + width / 2 + MOVIB, y1 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 1 a 2
    line(x1 + width / 2 + MOVIA, y1 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x2 + width / 2 + MOVIB, y2 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 2 a 3
    line(x2 + width / 2 + MOVIA, y2 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x3 + width / 2 + MOVIB, y3 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 3 a 4
    line(x3 + width / 2 + MOVIA, y3 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x4 + width / 2 + MOVIB, y4 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 4 a 5
    line(x4 + width / 2 + MOVIA, y4 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x5 + width / 2 + MOVIB, y5 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 5 a 6
    line(x5 + width / 2 + MOVIA, y5 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x6 + width / 2 + MOVIB, y6 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 6 a 7
    line(x6 + width / 2 + MOVIA, y6 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x7 + width / 2 + MOVIB, y7 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 7 a 8
    line(x7 + width / 2 + MOVIA, y7 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x8 + width / 2 + MOVIB, y8 + height / 2 + latido + 100 + movimiento + glitchOffset);

    // Línea 8 a 9
    line(x8 + width / 2 + MOVIA, y8 + height / 2 + latido + 100 + movimiento + glitchOffset,
         x9 + width / 2 + MOVIB, y9 + height / 2 + latido + 100 + movimiento + glitchOffset);

    if (glitchActiva) {
      let p = random();
      if (p < 0.1) {
        let yg = random(height);
        stroke(255);
        line(0, yg, width * random(0.3, 0.7), yg);
      }
    }
  }

  // Círculos rotando y pulsando
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 0.3);

  for (let i = 0; i < 5; i++) {
    let aca = i * 0.1;
    let pulso = sin(frameCount * 0.1 + aca) * 20 + 300;
    noFill();
    stroke(200);
    strokeWeight(1.5);
    ellipse(0, 0, pulso + aca, pulso + aca);
  }
  pop();
}

