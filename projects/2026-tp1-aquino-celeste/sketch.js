let tiempo = 0.2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(230);

  tiempo = tiempo + 0.03;

  let columnas = 16;
  let filas = 16;
  let tamano = width / columnas;

  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {

      push();

      let posX = x * tamano + tamano / 2;
      let posY = y * tamano + tamano / 2;

      // Movimiento permanente muy leve
      let movimientoX = sin(tiempo + x * 0.5 + y * 0.2) * 3;
      let movimientoY = cos(tiempo + y * 0.5 + x * 0.2) * 3;

      // Zona de influencia del mouse
      if (
        mouseX > posX - 160 &&
        mouseX < posX + 160 &&
        mouseY > posY - 160 &&
        mouseY < posY + 160
      ) {

        // Movimiento mucho más fuerte
        movimientoX = movimientoX + random(-25, 25);
        movimientoY = movimientoY + random(-25, 25);
      }

      posX = posX + movimientoX;
      posY = posY + movimientoY;

      translate(posX, posY);

      // Rotación normal
      let giro = (x + y) * PI / 36;

      // Movimiento de rotación
      giro = giro + sin(tiempo + x + y) * PI / 18;

      // Si el mouse está cerca, se rompe todavía más
      if (
        mouseX > posX - 160 &&
        mouseX < posX + 160 &&
        mouseY > posY - 160 &&
        mouseY < posY + 160
      ) {
        giro = giro + random(-PI / 3, PI / 3);
      }

      rotate(giro);

      let gris = 40 + y * 10;

      fill(gris);
      stroke(20);

      rect(
        -tamano * 0.4,
        -tamano * 0.4,
        tamano * 0.8,
        tamano * 0.8
      );

      pop();
    }
  }
}