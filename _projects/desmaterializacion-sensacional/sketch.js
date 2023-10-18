//Interactua con un el mouse, haciendo click en el boton derecho o izquierdo para avanzar o retroceder, generando asi tu eleccion de obra.
let x = [];
let y = [];
let numPoints = 3;
let speed = 2;

function setup() {
   let canvas = createCanvas(512, 512);
   canvas.parent('div-sketch');


  // Inicializar las posiciones de los puntos
  for (let i = 0; i < numPoints; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }
}

function draw() {
  background(255);


  // Dibujar los puntos en las posiciones actuales
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    x[i] += random(-speed, speed);
    y[i] += random(-speed, speed);

    // Verificar si los puntos salen de la pantalla y volverlos a colocar dentro
    if (x[i] < 0 || x[i] > width || y[i] < 0 || y[i] > height) {
      x[i] = random(width);
      y[i] = random(height);
    }

    // Dibujar los puntos en las posiciones actuales
    point(x[i], y[i]);
    vertex(x[i], y[i]);
  }
  endShape();


}
function mousePressed() {
  if (mouseButton === RIGHT) {
    // Multiplicar numPoints por 2
    numPoints *= 2;
  } else if (mouseButton === LEFT) {
    numPoints /= 2;
  }

  // Limpiar y volver a inicializar las posiciones de los puntos
  x = [];
  y = [];
  for (let i = 0; i < numPoints; i++) {
    x[i] = random(width);
    y[i] = random(height);
  }
}
