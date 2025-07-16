// Florencia Luna 
// Título de la Obra: Cutout | Año: 1971 | Autora: Lillian F. Schwartz

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  colorMode(HSB, 360, 100, 100, 100); // modo de color
  frameRate(30); //para que vaya mas suave cambiar
}

//dibujo las 2 figuras con la función dibujar figura
function draw() {
  background(314, 10, 15); // fondo negro

  //repito las figuras y armo otra función figura1
  let x1 = width / 2 - 80;
  let y1 = height / 2;

  // figura2
  let x2 = width / 2 + 60;
  let y2 = height / 2 - 2;

  dibujarFigura(x1, y1);
  dibujarFigura(x2, y2);
}

//pongo la figura en una función para poder repetirla en draw
function dibujarFigura(centroX, centroY) {
  let tiempo = frameCount * 0.01;
  push();
  translate(centroX, centroY);

  // animación con el mouse
  let figura;
  let cursor = dist(mouseX, mouseY, centroX, centroY);
  let desparrame = 0;
  if (cursor < 150) {
    desparrame = 70;
  }

  //forma principal
  stroke(0, 0, 90);
  strokeWeight(4);
  noFill();
  ellipse(0, 0, 250, 250);

  //bucle circulos
  let radio = 100;
  let cantidad = 6;
  let anguloEntre = TWO_PI / cantidad; // cuanto gira
  noStroke();
  fill(0, 0, 100);
  for (let i = 0; i < cantidad; i++) {
    let angulo = i * anguloEntre + tiempo;
    let x = cos(angulo) * radio;
    let y = sin(angulo) * radio; // lento

    //desparramo
    if (desparrame > 0) {
      x = cos(angulo) * (radio + desparrame);
      y = sin(angulo) * (radio + desparrame);
    }

    ellipse(x, y, 12, 12);
  }

  //agujas
  push();
  rotate(tiempo); //que vaya como los circulos sdarios
  noStroke();
  fill(0, 0, 100);

  let numAgujas = 44; // cantidad de agujas
  let anguloEntreCirculo = TWO_PI / numAgujas;

  for (let i = 0; i < numAgujas; i++) {
    push();
    rotate(i * anguloEntreCirculo);
    beginShape();
    vertex(0, -2);
    vertex(60, 0);
    vertex(0, 2);
    endShape(CLOSE);
    pop();
  }

  pop();
  pop();
  //fin agujas
}
