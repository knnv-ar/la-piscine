///////////////////////-INSTRUCCIONES-///////////////////////////////
//////-PRESIONAR CLICK DERECHO PARA EL INICIO DEL MOVIMIENTO-///////
/////-PRESIONAR LAS TECLAS 1,2,3 Y 4 RESPECTIVAMENTE O EN ORDEN-/////
/////-ALEATORIO PARA GENERAR DIFERENTES FONDOS-/////////////////////

var angulo1 = 0.0; //rect. que se mueven
var angulo2 = 0.0; //color de la computadora
var desplazamiento = 40;
var escalar = 2;
var velocidad1 = 0.02;
var velocidad2 = 0.5;
var color1;
var color2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(60);

  ////////////////////////FONDO//////////////////////////////
  for (var a = 0; a < 400; a++) {
    strokeWeight(5);
    stroke(2 * a * 0.5);
    line(-100 * a * 50, 600 + a * 2, 600 + a, 600 - a * 5);
  }
  ///////////////////////////////////////////////////////////
}

function draw() {
  //console.log("x: " + mouseX + " y:" + mouseY);

  //////////////VAR. COLORES EN MOVIMIENTO////////////////////////////
  var x1 = desplazamiento + sin(angulo1 * 2) * escalar;
  var y1 = desplazamiento + cos(angulo1 / 2) * escalar;
  var x2 = desplazamiento - sin(angulo1 * 2) * escalar;
  var y2 = desplazamiento - cos(angulo1 / 2) * escalar;

  var valorSeno = sin(angulo2);
  var color1 = map(-valorSeno, -1, 1, 0, 255);
  var color2 = map(valorSeno, -1, 1, 0, 255);
  ///////////////////////////////////////////////////////////////////////

  //////////////////TECLA 2 circulos//////////////////////////////////
  if (keyIsDown) {
    if (key == "2") {
      desplazamiento = desplazamiento + 10;
      if ((desplazamiento) => 75) {
        desplazamiento = 70;
      }
      for (i = 0.3; i < 30; i++) {
        for (j = 0.3; j < 30; j++) {
          rectMode(CENTER);
          noStroke();

          fill(random(0, 255), 90);
          ellipse(i * 25, random(j * 500, 0), random(0, 20));
        }
      }
    }
  }
  //////////////////////////////////////////////////////////////////////

  ///////////////////TECLA 1 //////////////////////////////////////
  push();
  if (keyIsDown) {
    if (key == "1") {
      for (i = 0.3; i < 30; i++) {
        for (j = 0.3; j < 30; j++) {
          rectMode(CENTER);
          stroke(color2, 1);
          fill(random(100, 150), 10);
          rect(i * 25, j * 25, random(5, 100));
        }
      }
    }
  }
  pop();
  ///////////////////////////////////////////////////////////////////////

  /////////////RECT. EN MOVIMIENTO  CLICK/////////////////////////////////
  push();
  if (keyIsDown) {
    if (mouseButton == LEFT) {
      for (var a = 0; a < 400; a++) {
        strokeWeight(1);
        stroke(color2, 100);
        line(-300 * a, 600 + a, 600 + a, 600 - a * 5);
      }
    }
  }
  pop();

  push();
  if (keyIsDown) {
    if (mouseButton == LEFT) {
      fill(color1);

      translate(180, 190);
      //strokeWeight(1);
      //stroke(color2);
      noStroke(0);
      rect(x1, y1, 60, 60);
      rect(x2, y2, 60, 60);
      translate(0, 150);
      rotate(300);
      rect(x2, y2, 60, 60);
      rect(x1, y1, 60, 60);

      //////velocidad en reversa de los rect
      push();
      if (x1 > 200 && y1 > 200) {
        velocidad1 = -velocidad1;
        velocidad2 = -velocidad2;
      }
      pop();
    }
  }
  pop();

  ////////////////////////TECLA 3 CUADRADOS/////////////////////////////
  if (keyIsDown) {
    if (key == "3")
      for (i = 0.3; i < 30; i++) {
        for (j = 0.3; j < 30; j++) {
          rectMode(CENTER);
          stroke(color1, 2);
          fill(random(100, 150), 10);
          rect(i * 50, j * 50, 40);
        }
      }
  }
  ///////////////////////////////////////////////////////////////////////

  ///////////////////////TECLA 4////////////////////////////////////////

  push();
  if (keyIsDown) {
    if (key == "4") {
      for (var a = 0; a < 400; a++) {
        strokeWeight(4);
        stroke(2 * a, 200);
        line(-100 * a * 50, 600 + a, 600 + a, 600 - a * 5);
      }
      for (i = 0.3; i < 30; i++) {
        for (j = 0.3; j < 30; j++) {
          rectMode(CENTER);
          stroke(color1, 2);
          fill(random(100, 150), 20);
          ellipse(i * 50, j * 50, 40);
        }
      }
    }
  }
  pop();

  ///////////////////////////////////////////////////////////

  /////////////////////////COMPUTADORA///////////////////////////////
  push();
  rectMode(CORNER);
  stroke(40);
  strokeWeight(10);
  rect(220, 225, 80, 55);
  noFill();
  rect(205, 210, 110, 90);
  line(220, 302, 220, 315);
  line(300, 302, 300, 315);
  rect(195, 317, 130, 30);
  strokeCap(SQUARE);
  line(205, 331, 230, 331);
  square(290, 331, 1, 1);
  square(310, 331, 1, 1);
  stroke(170);
  strokeWeight(5);
  fill(color2);
  rect(220, 225, 80, 55);
  noFill();
  rect(205, 210, 110, 90);
  line(220, 302, 220, 315);
  line(300, 302, 300, 315);
  rect(195, 317, 130, 30);
  line(205, 331, 230, 331);
  square(290, 331, 1, 1);
  square(310, 331, 1, 1);
  pop();
  ////////////////////////////////////////////////////////////////////////

  angulo1 += velocidad1;
  angulo2 += 0.03;
  escalar += velocidad2;

  document.oncontextmenu = function () {
    return false;
  }; // para que no se abra el menu de click derecho
}
