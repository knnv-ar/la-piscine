/*
SAMANTA BERBERIAN
Trabajo Práctico Nro:1
1º Cuatrimestre 2021

Título de la Obra: El aleteo de un Colibrí.

"la evolución de las tecnologías es ahora más rápida que la
de la lengua: para cuando un término es adecuadamente traducido, la función
o el objeto a que se refiere habrá ya sido reemplazado por otro."
BREA, José Luis.

Instrucciones: Mover el mouse para darle movimiento al colibri
*/

var angulo = 0.0;
var anguloDireccion = 3;
var velocidad = 0.03;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}
function draw() {
  background(63);

  push();
  translate(mouseX, mouseY);
  stroke(192);
  
  //Ala Izquierda
  push();
  translate(285, 190);
  scale(1.8);
  rotate(radians(200));

  translate(20, -25); // Mover ala 
  rotate(angulo * -1.3);
  strokeWeight(6);
  line(0, 0, 80, 0);

  angulo += velocidad * anguloDireccion;
  if (angulo > QUARTER_PI || angulo < 0) {
    anguloDireccion *= -1;
  }
  pop();

  //Ala Derecha
  push();
  translate(255, 178);
  scale(1.8);
  translate(20, 25); // // Mover ala 
  rotate(angulo * 1.3);
  strokeWeight(6);
  line(0, 0, 80, 0);

  angulo += velocidad * anguloDireccion;
  if (angulo > QUARTER_PI || angulo < 0) {
    anguloDireccion *= -1;
  }
  pop();

  fill(187);
  stroke(0);
  mitadAncho = width / 2;
  mitadAlto = height / 2;

  //Cola
  triangle(260, 300, 297, 365, 190, 350);

  //Cuerpo
  ellipse(mitadAncho + 5, mitadAncho, 65, 140);

  //Cabeza
  circle(252, 180, 50);

  //Ojo
  fill(255);
  circle(250, 170, 15);
  fill(0);
  circle(246, 170, 8);

  //Pico
  triangle(170, 205, 227, 187, 227, 175);
  pop();
  //Sol
  fill(240);
  circle(420, 40, mitadAncho);
  
  push();
  translate(-10,-80);
  //Flor1
  fill(0);
  translate(250, 450);
  for (let i = 0; i < 10; i++) {
    ellipse(15, 30, 20, 40);
    rotate(PI / 5);
  }
  //Flor2
  translate(150, 5);
  for (let i = 0; i < 10; i++) {
    ellipse(5, 15, 10, 30);
    rotate(PI / 5);
  }
  //Flor3
  translate(-300, -5);
  fill(0);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 35);
    rotate(PI / 5);
  }
  pop();
}
