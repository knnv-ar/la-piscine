let numLineas = 180;
let angulo;
let frecuencia = 0.1; // frecuencia de oscilación
let numPuntos = 60;

function setup() {
  createCanvas(512, 512);
  angulo = TWO_PI / numLineas;
}

function draw() {
  background(0, 30);
  // verificar si el mouse está dentro del canvas
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  //controlar amplitud
    let amplitud = map(mouseX, 0, width, mouseY, 100);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(1.5);

    for (let i = 0; i < numLineas; i++) {
      let angulo1 = angulo * i;
      let xFinal = cos(angulo1) * amplitud;
      let yFinal = sin(angulo1) * amplitud;

      // efecto de oscilación
      let oscilacion = sin(frameCount * frecuencia + angulo1 * 5) * 50;
      xFinal += oscilacion;
      yFinal += oscilacion;

      // línea de puntos
      let xIncremento = xFinal / numPuntos;
      let yIncremento = yFinal / numPuntos;

      for (let j = 0; j <= numPuntos; j++) {
        let xPunto = xIncremento * j;
        let yPunto = yIncremento * j;
        point(xPunto, yPunto);
      }
    }
  }
}

