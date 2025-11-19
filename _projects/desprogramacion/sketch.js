//DESPROGRAMACIÓN  Domino virtual-Crackeo del sistema o perfeccion banal???? //
 // FILAS Y COLUMNAS
let columnas = 90;
let filas = 9;
let anchoCelda, altoCelda;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  rectMode(CENTER);
  anchoCelda = width / columnas;
  altoCelda = height / filas;
}

function draw() {
  background(255); // fondo blanco

  for (let col = 0; col < columnas; col++) {
    for (let fila = 0; fila < filas; fila++) {
      let x = col * anchoCelda + anchoCelda / 2;
      let y = fila * altoCelda + altoCelda / 2;

      let tiempo = (col + fila) * 1;
      let angulo = 0;

      if (frameCount > tiempo) {
        angulo = map(frameCount - tiempo, 0, 30, 0, PI / 2);
        angulo = constrain(angulo, 0, PI / 2);
      }

      // ruido visual
      let desplazamientoX = random(-2, 2);
      let desplazamientoY = random(-2, 2);
      let anchoRect = anchoCelda * 0.4 + random(-1, 1);
      let altoRect = altoCelda * 0.8 + random(-1, 1);

      push();
      translate(x + desplazamientoX, y + desplazamientoY);
      rotate(angulo);
      fill(0);
      noStroke();
      rect(0, 0, anchoRect, altoRect);
      pop();
    }
  }
}