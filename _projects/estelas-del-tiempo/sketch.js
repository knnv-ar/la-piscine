/* TRABAJO PRÁCTICO N°1 - ARTES MULTIMEDIALES 1, 
--------------- CÁT. LACABANNE.
------- Título:"ESTELAS DEL TIEMPO" por SOL MARIEL SÁNCHEZ.
------- Año: 2022.
------- INSPIRADA EN LAS OBRAS DE VERA MOLNÁR. 

------- CLICK IZQUIERDO CAMBIA COLORES.
------- CONTROL REGRESA AL INICIO.


*/


// valores de rotación
var rotar = 0;
var angl = 0.0;
var despl = 55;
var velo = 0.04;
var escal = 250;

var color1 = 5;
var color2 = 155;
var color3 = 250;
var color4 = 55;
var color5 = 100;


function mouseClicked() {
  if (mouseButton == LEFT) {
    color2 = 5;
    color1 = color3;
  } else if (mouseButton == LEFT) {
    color2 = 155;
    color1 = 5;
  }
} 

//RESET
function keyPressed() {
  if (keyCode == CONTROL) {
    color2 = 155;
    color1 = 5;
  }
}



function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
}

function draw() {
  background(color1);

  push();
  var x = despl + cos(angl) * escal;
  var y = despl + sin(angl) * escal;
  fill(color2);
  translate(70, 420);
  stroke(200);
  strokeWeight(1);
  ellipse(x, y, 25, 25);
  angl += velo;
  pop();

  push();
  var y2 = despl * 2 + cos(angl) * escal;
  var x2 = despl * 2 + sin(angl) * escal;
  var x3 = despl * 2 + sin(angl) * escal;
  var y3 = despl * 2 + cos(angl) * escal;

  push(); // CUADRADOS fondo
  rectMode(CENTER);
  angleMode(RADIANS);
  noFill();
  translate(65, 415);
  stroke(color2);
  strokeWeight(1);
  rect(0, 0, width / 0.7, height / 0.7);
  rect(0, 0, width / 0.8, height / 0.8);
  rect(0, 0, width / 0.9, height / 0.9);
  rect(0, 0, width / 1.0, height / 1.0);
  rect(0, 0, width / 1.1, height / 1.1);
  pop();

  push();
  noFill();
  translate(325, 10);
  stroke(color2);
  strokeWeight(1);
  rect(0, 0, width / 3.5, height / 3.5);
  rect(0, 0, width / 3.7, height / 3.7);
  rect(0, 0, width / 3.8, height / 3.8);
  pop();

  push(); // CUADRADO 1
  rectMode(CENTER);
  angleMode(RADIANS);
  noFill();
  translate(65, 415);
  stroke(color2);
  strokeWeight(10);
  rotate((rotar / 20) * 1);
  rect(0, 0, width / 1.5, height / 1.5);
  pop();

  push(); // CUADRADO 2
  rectMode(CENTER);
  angleMode(RADIANS);
  noFill();
  translate(25, 415);
  stroke(color2);
  strokeWeight(3);
  rotate((rotar / 20) * 1);
  rect(0, 0, width / 1.5, height / 1.5);
  pop();

  push(); // CUADRADO 3
  rectMode(CENTER);
  angleMode(RADIANS);
  noFill();
  translate(25, 415);
  stroke(color2);
  strokeWeight(2);
  rotate((rotar / 20) * -1);
  rect(0, 0, width / 1.5, height / 1.5);
  pop();

  push(); //CUADRADO 4
  rectMode(CENTER);
  angleMode(RADIANS);
  noFill();
  translate(65, 415);
  stroke(color2);
  strokeWeight(5);
  rotate((rotar / 25) * -1);
  rect(0, 0, width / 1.5, height / 1.5);
  pop();

  rotar++;

  push(); // ELIPSE GRIS
  noStroke();
  fill(color2);
  ellipse(55, 420, 250, 250);
  pop();

  push(); // AGUJA SOBRE ELIPSE GRIS 1
  noStroke();
  translate(50, 415);
  rotate((rotar / 25) * -1);
  fill(color1);
  ellipse(0, 0, 5, 265);
  pop();

  push(); // AGUJA BAJO ELIPSE GRIS
  noStroke();
  translate(50, 415);
  rotate((rotar / 35) * 1);
  fill(color1);
  ellipse(0, 0, 5, 265);
  pop();

  push(); // ELIPSE NEGRA
  noStroke();
  fill(color1);
  ellipse(50, 420, 135, 135);
  pop();

  push();
  noStroke();
  translate(50, 415);
  rotate((rotar / 35) * 1);
  fill(color2);
  ellipse(0, 0, 5, 150);
  pop();

}  

document.oncontextmenu = function () {
  return false;
};
