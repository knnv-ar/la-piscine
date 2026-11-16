//inicie con las variables y estructura del ejemplo de mov. circular
let angulo = 100;
let velocidad = 0.01;
let escalar1 = 150;
let escalar2 = 250;

//canvas segun restricciones de la consigna y color gris oscuro de fondo
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(20);
}

function draw() {
  //movi el 0,0 al centro del canvas
  translate(256, 256);

  //manteniendo el click aumenta la velocidad y grosor del trazo
  if (mouseIsPressed) {
    stroke(255, 130);
    velocidad = 0.02;
  } else {
    stroke(255, 70);
    velocidad = 0.01;
  }
  //apretando la tecla P tomamos una fotografía
  if (keyIsPressed) {
    if (key === "p" || key === "P") {
      velocidad = 0;
      stroke(255, 0.1);
    }
    //apretando la tecla x se reinicia el movimiento
    if (key === "x" || key === "X") {
      background(20);
      angulo = 100;
    }
  } else {
    //agregué un rectángulo oscuro que se actualice con el movimiento para que el trazo se vaya desvaneciendo, como un osciloscopio
    fill(8, 10);
    rect(-256, -256, 512, 512);
  }

  if (keyIsPressed) {
      //apretar la tecla a crea otra figura distinta en simultáneo a la original
    if (key == "a" || key == "A") {
      fill(8, 10);
      rect(-256, -256, 512, 512);

      let x1 = cos(angulo * 2) * escalar1;
      let y1 = sin(angulo * 3) * escalar1;

      let x2 = cos(angulo * 1.2) * escalar2;
      let y2 = sin(angulo * 4) * escalar2;

      line(x1, y1, x2, y2);

      fill(255, 220);
      ellipse(x1, y1, 4, 4);
    }
  }

  let x1 = cos(angulo * 1.5 + 1) * (escalar2 * 0.5);
  let y1 = sin(angulo * 3) * (escalar1 * 1.5);

  let x2 = cos(angulo) * escalar2;
  let y2 = sin(angulo * 2.5) * escalar2;

  //cambie el elipse del ejemplo por lineas para que se asimile mas a los proyectos de Osciloscopio de Laposky
  line(x1, y1, x2, y2);

  //agregué un punto brillante en un extremo del trazo para que se más similar a un osciloscopio
  fill(255, 220);
  ellipse(x1, y1, 4, 4);

  angulo += velocidad;
}
