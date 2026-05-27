let control = 0; //variable de contol. Toma en cada frame alternadamente los valores 0 y 1
let fin = false //variable para terminar el programa

let valor = 0; //brillo de las lineas
let repeticion = 0; //númereo de repetición de la obra

//VARIABLES DE LOS OJOS IZQUIERDO Y DERECHO. las que terminan en 2 corresponden al punto en el que se queda la linea en el frame anterior
let xIz1 = 120;
let yIz1 = 120;
let xIz2 = 120;
let yIz2 = 120;

//VARIABLES DEL OJO DERECHO
let xDer1 = 392;
let yDer1 = 120;
let xDer2 = 392;
let yDer2 = 120;

//VARIABLES DE LA BOCA
let xBoca1 = 100;
let yBoca1 = 400;
let xBoca2 = 100;
let yBoca2 = 400;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  strokeWeight(4);
  stroke(valor);

  //Ojos

  if (control == 0) {
    xIz1 = randomGaussian(120, 40);
    xDer1 = randomGaussian(392, 40);
  } else {
    yIz1 = randomGaussian(150, 40);
    yDer1 = randomGaussian(150, 40);
  }

  //Boca

  if (control == 0) {
    xBoca1 = randomGaussian(412, 50);
  } else {
    xBoca1 = randomGaussian(100, 50);
  }
  yBoca1 = randomGaussian(400, 15);

  line(xBoca1, yBoca1, xBoca2, yBoca2);

  line(xIz1, yIz1, xIz2, yIz2);
  line(xDer1, yDer1, xDer2, yDer2);

  //Actualización de las varables
  
  xIz2 = xIz1;
  yIz2 = yIz1;
  xDer2 = xDer1;
  yDer2 = yDer1;
  xBoca2 = xBoca1;
  yBoca2 = yBoca1;
  
  valor += 10;

  if (control == 0) {
    control = 1;
  } else {
    control = 0;
  }
  if (valor > 600) {
    background(0);
    valor = 0;
    repeticion++;
  }

  if (repeticion == 4) {
    if(valor > 300){
    fin = true
  }}
  
  if(fin == true){
    background(0)
  }
}
