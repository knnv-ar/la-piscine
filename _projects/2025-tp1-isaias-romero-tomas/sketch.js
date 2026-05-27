// Variables Lineas Rebotes
let x1 = 45 ;
let velocidadX1 = 5;
let direccionX1 = 1.5;

let y1 = 259; 
let velocidadY1 = 5;
let direccionY1 = 1.5;

let x2 = 254;
let velocidadX2 = 5;
let direccionX2 = 1.5;

let y2 = 39;
let velocidadY2 = 5;
let direccionY2 = 1.5;

let x3 = 245;
let velocidadX3 = 5;
let direccionX3 = 1.5;

let y3 = 270;
let velocidadY3 = 5;
let direccionY3 = 1.5;

let x4 = 25;
let velocidadX4 = 5;
let direccionX4 = 1.5;

let x5 = 40;
let velocidadX5 = 5;
let direccionX5 = 1.5;

//Variables Lineas Laterales
let izq = 55;
let abj = 55;
let der = 455;
let arr = 430;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(220);
  frameRate(7)
}

function draw() {
  
  x1 += velocidadX1 * direccionX1;
  
  if ((x1 > 230) || (x1 < 50)) {
    direccionX1 = - direccionX1;
  }
  
  x2 -= velocidadX2 * direccionX2;
  
  if ((x2 < 254) || (x2 > 470)) {
    direccionX2 =  - direccionX2;
  }
  
  x3 += velocidadX3 * direccionX3;
  
  if ((x3 > 460) || (x3 < 252)) {
    direccionX3 = - direccionX3;
  }
  
  x4 -= velocidadX4 * direccionX4;
  
  if ((x4 < 24) || (x4 > 230)) {
    direccionX4 = - direccionX4;
  }
  
  x5 -= velocidadX5 * direccionX5;
  
  if ((x5 < 36) || (x5 > 230)) {
    direccionX5 = - direccionX5;
  }
  
  y1 += velocidadY1 * direccionY1;
  
  if ((y1 < 265) || (y1 > 450)) {
    direccionY1 = - direccionY1;
  }
  
  y2 -= velocidadY2 * direccionY2;
  
  if ((y2 < 34) || (y2 > 245)) {
    direccionY2 = - direccionY2;
  }
  
  y3 -= velocidadY3 * direccionY3;
  
  if ((y3 < 265) || (y3 > 476)) {
    direccionY3 = - direccionY3;
  }
  
// ----------------//Arriba//----------------- //
  
  line(x5, 30, 32, 250);//Esquina Izquierda
  
  line(236, 46, x1, 250);//Centro Izquierda

  line(244, 243, x3, 30);//Centro Derecha
  
  line(250, 249, 482, y2);//Esquina Derecha
  
// ----------------//Abajo//----------------- //
  
  line(30, y1, 225, 258);//Esquina Izquierda
  
  line(234, 265, x4, 483);//Centro Izquierda
  
  push();
  stroke(220);
  strokeWeight(7);
  line(115, 384, 238, 384);
  line(244, 76, 418, 76);
  line(28, 139, 138, 139);
  line(315, 185, 480,180);
  line(65, 260, 65, 424);
  pop();
  
  line(247, 482, x2, 259);//Centro Derecha

  line(258, 483, 482, y3);//Esquina Derecha
  
  push();
  stroke(220);
  strokeWeight(7);
  line(413, 327, 413, 481);
  pop();
  
// ----------------//Lineas Laterales//----------------- //
  
//Izquierda//
  izq += 10;
  if (izq > 455) {
    izq -= 11;
  }
  for (var i = 2; i < 22; i += 5) {
    line(i, 32, i, izq);
  }
  
  //Abajo//
  abj += 10;
  if (abj > 482) {
    abj -= 11;
  }
  for (var i = 495; i < 515; i += 5) {
    line (13, i, abj, i);
  }
  
  //Derecha//
  der -= 10;
  if (der < 30) {
    der += 11;
  }
  for (i = 495; i < 515; i += 5) {
    line(i, der, i, 480);
  }
  
  //Arriba//
  arr -= 10;
  if (arr < 30) {
    arr += 11;
  }
  for (i = 2; i < 22; i += 5) {
    line(arr, i, 465, i);
  }
}