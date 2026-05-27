//"BABAS DEL DIABLO"
//toca la tecla que quieras de tu teclado

var angulo = 2.0;
var desplazamiento = 23;
var escalar = 12;
var velocidad = 10;

var angulo2 = -15;
var desplazamiento2 = 5.8;
var escalar2 = -0.4;
var velocidad2 = 9;

var angulo3 = 0;
var desplazamiento3 = 6.8;
var escalar3 = 0.1;
var velocidad3 = -3;

var angulo4 = 1.9;
var desplazamiento4 = 6.7;
var escalar4 = 0.14;
var velocidad4 = 10;

var angulo5 = 4;
var desplazamiento5 = 6.7;
var escalar5 = 0.2;
var velocidad5 = 2;

var angulo6 = 2;
var desplazamiento6 = 6.1;
var escalar6 = -0.1;
var velocidad6 = 9;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(100);
  frameRate(10);
}

function draw() {
  

  //fondo
  background(50);
  fill(220);
 dibujarFigura(256, 270, 515,5);

  if (keyIsPressed) {
  
     dibujarFigura(256, 270, 515,80);
  
  }
  //fondo lado izq
  if (keyIsPressed) {
    strokeWeight(1);

    push();
    var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;

    ellipse(x, y, 30, 30);
    ellipse(x, y, 25, 25);
    ellipse(x, y, 20, 20);
    ellipse(x, y, 15, 15);
    ellipse(x, y, 10, 10);
    ellipse(x, y, 5, 5);
    angulo += velocidad;
    pop();

    push();
    var x = desplazamiento2 + cos(angulo2) * escalar2;
    var y = desplazamiento2 + sin(angulo2) * escalar2;

    ellipse(x * 4, y * 13, 40, 40);
    ellipse(x * 4, y * 13, 35, 35);
    ellipse(x * 4, y * 13, 30, 30);
    ellipse(x * 4, y * 13, 25, 25);
    ellipse(x * 4, y * 13, 20, 20);
    ellipse(x * 4, y * 13, 15, 15);
    ellipse(x * 4, y * 13, 10, 10);
    ellipse(x * 4, y * 13, 5, 5);
    angulo2 += velocidad2;
    pop();
    push();
    var x = desplazamiento2 + cos(angulo2) * escalar2;
    var y = desplazamiento2 + sin(angulo2) * escalar2;
    ellipse(x * 3, y * 22, 25, 25);
    ellipse(x * 3, y * 22.3, 20, 20);
    ellipse(x * 3, y * 22, 15, 15);
    ellipse(x * 3, y * 22.3, 10, 10);
    ellipse(x * 3, y * 22, 5, 5);
    angulo2 += velocidad2;
    pop();
    push();
    var x = desplazamiento2 + cos(angulo2) * escalar2;
    var y = desplazamiento2 + sin(angulo2) * escalar2;
    ellipse(x * 13, y * 6, 40, 40);
    ellipse(x * 13, y * 5.8, 35, 35);
    ellipse(x * 13, y * 5.7, 30, 30);
    ellipse(x * 13, y * 6, 25, 25);
    ellipse(x * 13, y * 6, 20, 20);
    ellipse(x * 13, y * 6.2, 15, 15);
    ellipse(x * 13, y * 6, 10, 10);
    ellipse(x * 13, y * 6, 5, 5);
    angulo2 += velocidad2;
    pop();
    push();
    var x = desplazamiento3 + cos(angulo3) * escalar3;
    var y = desplazamiento3 + sin(angulo3) * escalar3;
    ellipse(x * 9, y * 12, 20, 20);
    ellipse(x * 9, y * 12, 15, 15);
    ellipse(x * 9, y * 12, 10, 10);
    ellipse(x * 9, y * 12, 5, 5);
    angulo3 += velocidad3;
    pop();

    //fondo lado derecho
    push();
    var x = desplazamiento4 + cos(angulo4) * escalar4;
    var y = desplazamiento4 + sin(angulo4) * escalar4;
    ellipse(x * 72, y * 6, 35, 35);
    ellipse(x * 72, y * 6, 25, 25);
    ellipse(x * 72, y * 6, 22, 22);
    ellipse(x * 72, y * 6, 15, 15);
    ellipse(x * 72, y * 6, 12, 12);
    ellipse(x * 72, y * 6, 5, 5);
    angulo4 += velocidad4;
    pop();
    push();
    var x = desplazamiento5 + cos(angulo5) * escalar5;
    var y = desplazamiento5 + sin(angulo5) * escalar5;
    ellipse(x * 62, y * 4, 60, 60);
    ellipse(x * 62, y * 4, 55, 55);
    ellipse(x * 62, y * 4, 50, 50);
    ellipse(x * 62, y * 4, 45, 45);
    ellipse(x * 62, y * 4, 6, 40);
    ellipse(x * 62, y * 4, 35, 35);
    ellipse(x * 62, y * 4, 30, 30);
    ellipse(x * 62, y * 4, 8, 30);
    ellipse(x * 62, y * 4, 25, 25);
    ellipse(x * 62, y * 4, 20, 20);
    ellipse(x * 62, y * 4, 10, 20);
    ellipse(x * 62, y * 4, 15, 15);
    ellipse(x * 62, y * 4, 10, 10);
    ellipse(x * 62, y * 4, 5, 5);
    angulo5 += velocidad5;
    pop();
    push();
    var x = desplazamiento6 + cos(angulo6) * escalar6;
    var y = desplazamiento6 + sin(angulo6) * escalar6;
    ellipse(x * 80, y * 15, 30, 30);
    ellipse(x * 80, y * 15, 25, 25);
    ellipse(x * 80, y * 15, 20, 20);
    ellipse(x * 80, y * 15, 15, 15);
    ellipse(x * 80, y * 15, 10, 10);
    ellipse(x * 80, y * 15, 5, 5);
    angulo6 += velocidad6;
    pop();
  }
  //edificios fondo izquierdo
  fill(69);
  triangle(133, 290, 254, 512, 12, 512);
  fill(153);
  rect(0, 372, 100, 150);

  //ventanas edi fondo izquierdo
  fill(40);
  rect(6, 390, 40);
  rect(6, 450, 40);
  rect(56, 390, 20, 40);
  rect(56, 450, 20, 40);
  rect(136, 350, 20, 40);
  rect(136, 400, 20, 40);
  ellipse(134, 325, 20, 20);
  fill(0);
  line(26, 390, 26, 430);
  line(26, 450, 26, 480);
  line(66, 390, 66, 430);
  line(66, 450, 66, 490);
  line(6, 410, 46, 410);
  line(6, 470, 46, 470);
  line(146, 350, 146, 390);
  line(146, 400, 146, 440);
  line(136, 370, 156, 370);
  line(136, 420, 156, 420);

  if (keyIsPressed) {
    fill(250);
    rect(6, 390, 40);
    rect(6, 450, 40);
    rect(56, 390, 20, 40);
    rect(56, 450, 20, 40);
    rect(136, 350, 20, 40);
    rect(136, 400, 20, 40);
    ellipse(134, 325, 20, 20);
    fill(0);
    line(26, 390, 26, 430);
    line(26, 450, 26, 480);
    line(66, 390, 66, 430);
    line(66, 450, 66, 490);
    line(6, 410, 46, 410);
    line(6, 470, 46, 470);
    line(146, 350, 146, 390);
    line(146, 400, 146, 440);
    line(136, 370, 156, 370);
    line(136, 420, 156, 420);
    line(146, 350, 146, 390);
    line(146, 400, 146, 440);
    line(136, 370, 156, 370);
    line(136, 420, 156, 420);
  }

  //edificios fondo derecho
  fill(80);
  rect(350, 320, 160, 240);
  fill(100);
  rect(237, 200, 100, 300);
  fill(0);
  rect(495, 487, 10, 40);

  //ventanas fondo derecho
  fill(60);
  rect(369, 361, 50);
  rect(369, 430, 50);
  rect(450, 361, 40, 50);
  rect(450, 430, 40, 50);
  ellipse(324, 216, 15);
  ellipse(324, 246, 15);
  ellipse(324, 276, 15);
  ellipse(324, 306, 15);
  ellipse(324, 336, 15);
  ellipse(324, 366, 15);
  ellipse(324, 396, 15);
  rect(254, 216, 30, 30);
  rect(254, 256, 30, 30);

  if (keyIsPressed) {
    fill(250);
    rect(369, 361, 50);
    rect(369, 430, 50);
    rect(450, 361, 40, 50);
    rect(450, 430, 40, 50);
    ellipse(324, 216, 15);
    ellipse(324, 246, 15);
    ellipse(324, 276, 15);
    ellipse(324, 306, 15);
    ellipse(324, 336, 15);
    ellipse(324, 366, 15);
    ellipse(324, 396, 15);
    rect(254, 216, 30, 30);
    rect(254, 256, 30, 30);
  }

  //torre cuadrados
  strokeWeight(1);
  fill(160);
  rect(160, 420, 190, 90);
  rect(180, 350, 150, 70);
  rect(200, 300, 110, 50);
  rect(220, 270, 70, 30);
  rect(240, 260, 30, 10);
  strokeWeight(2);
  line(253, 220, 253, 260);

  // ventanas torre cuadrados

  strokeWeight(1);
  fill(107);
  ellipse(253, 285, 20);
  rect(221, 305, 10, 40);
  rect(231, 305, 10, 40);
  rect(281, 305, 10, 40);
  rect(271, 305, 10, 40);
  rect(200, 366, 40, 40);
  rect(270, 366, 40, 40);
  line(220, 366, 220, 406);
  line(290, 366, 290, 406);
  line(200, 386, 240, 386);
  line(270, 386, 310, 386);
  if (keyIsPressed) {
    fill(250);
    ellipse(253, 285, 20);
    rect(221, 305, 10, 40);
    rect(231, 305, 10, 40);
    rect(281, 305, 10, 40);
    rect(271, 305, 10, 40);
    rect(200, 366, 40, 40);
    rect(270, 366, 40, 40);
    line(220, 366, 220, 406);
    line(290, 366, 290, 406);
    line(200, 386, 240, 386);
    line(270, 386, 310, 386);

    fill(0);
    rect(205, 372, 30, 30);
    rect(275, 371, 30, 30);
    ellipse(253, 285, 15);
    fill(255);
    rect(210, 377, 20, 20);
    rect(280, 376, 20, 20);
    ellipse(253, 285, 10);
    fill(0);
    rect(215, 382, 10, 10);
    rect(285, 381, 10, 10);
    ellipse(253, 285, 5);
  }

  //edificio izq
  fill(170);
  rect(80, 332, 50, 180);

  //ventanas edificio izq
  fill(90);
  strokeWeight(1.5);
  rect(88, 347, 30, 15);
  rect(88, 377, 30, 15);
  rect(88, 407, 15, 7);
  rect(88, 417, 15, 7);
  rect(108, 407, 15, 7);
  rect(108, 417, 15, 7);
  rect(108, 427, 16, 12);
  ellipse(94, 435, 15, 15);
  rect(108, 444, 15, 7);
  rect(108, 454, 15, 7);
  rect(108, 464, 15, 7);
  rect(108, 474, 15, 7);
  rect(88, 448, 16, 35);
  line(96, 448, 96, 483);
  line(88, 466, 102, 466);
  if (keyIsPressed) {
    fill(250);
    rect(88, 347, 30, 15);
    rect(88, 377, 30, 15);
    rect(88, 407, 15, 7);
    rect(88, 417, 15, 7);
    rect(108, 407, 15, 7);
    rect(108, 417, 15, 7);
    rect(105, 427, 18, 12);
    ellipse(94, 435, 15, 15);
    rect(108, 444, 15, 7);
    rect(108, 454, 15, 7);
    rect(108, 464, 15, 7);
    rect(108, 474, 15, 7);
    rect(88, 448, 15, 35);
    line(96, 448, 96, 483);
    line(88, 466, 102, 466);
  }

  //edificio derecho

  fill(130);
  strokeWeight(0);
  rect(380, 350, 100, 170);
  rect(433, 293, 47, 57);
  rect(454, 273, 15, 20);

  //ventanas edificio derecho

  fill(100);
  ellipse(443, 306, 10, 10);
  ellipse(443, 326, 10, 10);
  ellipse(443, 346, 10, 10);
  ellipse(443, 366, 10, 10);
  ellipse(443, 386, 10, 10);
  ellipse(443, 406, 10, 10);
  ellipse(443, 426, 10, 10);
  ellipse(443, 446, 10, 10);
  rect(456, 300, 20, 10);
  rect(456, 320, 20, 10);
  rect(456, 340, 20, 30);
  rect(456, 360, 20, 10);
  rect(456, 380, 20, 10);
  rect(456, 400, 20, 10);
  rect(456, 420, 20, 30);

  rect(390, 365, 40, 80);
  strokeWeight(1);
  line(410, 365, 410, 445);
  line(390, 405, 430, 405);
  line(466, 420, 466, 450);
  line(456, 435, 476, 435);
  line(466, 340, 466, 370);
  line(456, 356, 476, 356);

  strokeWeight(0);
  if (keyIsPressed) {
    fill(250);
    ellipse(443, 306, 10, 10);
    ellipse(443, 326, 10, 10);
    ellipse(443, 346, 10, 10);
    ellipse(443, 366, 10, 10);
    ellipse(443, 386, 10, 10);
    ellipse(443, 406, 10, 10);
    ellipse(443, 426, 10, 10);
    ellipse(443, 446, 10, 10);
    rect(456, 300, 20, 10);
    rect(456, 320, 20, 10);
    rect(456, 340, 20, 30);
    rect(456, 360, 20, 10);
    rect(456, 380, 20, 10);
    rect(456, 400, 20, 10);
    rect(456, 420, 20, 30);
    rect(390, 365, 40, 80);
    strokeWeight(1);
    line(410, 365, 410, 445);
    line(390, 405, 430, 405);
    line(466, 420, 466, 450);
    line(456, 435, 476, 435);
    line(466, 340, 466, 370);
    line(456, 356, 476, 356);
  }

  fill(120);
  push();
  rectMode(CENTER);
  rotate(0.7);
  rect(515, -13, 8, 80);
  pop();

  //casas
  strokeWeight(1);
  fill(115);
  rect(16, 471, 30, 40);
  fill(182);
  triangle(62, 480, 72, 512, 52, 512);
  fill(98);
  quad(128, 441, 163, 465, 163, 512, 128, 512);
  ellipse(365, 500, 30, 30);
  ellipse(365, 480, 20, 20);
  ellipse(365, 467, 10, 10);

  //ventanas casa
  strokeWeight(0);
  fill(70);
  rect(20, 481, 10, 15);
  rect(32, 481, 10, 7);
  rect(32, 490, 10, 7);
  ellipse(62, 499, 8);
  rect(133, 476, 10, 7);
  rect(133, 466, 10, 7);
  triangle(147, 465, 160, 484, 146, 484);
  if (keyIsPressed) {
    fill(250);
    rect(20, 481, 10, 15);
    rect(32, 481, 10, 7);
    rect(32, 490, 10, 7);
    ellipse(62, 499, 8);
    rect(133, 476, 10, 7);
    rect(133, 466, 10, 7);
    triangle(147, 465, 160, 484, 146, 484);
  }

  //puertas
  fill(0);
  triangle(104, 493, 112, 512, 96, 512);
  triangle(30, 498, 38, 512, 22, 512);
  square(135, 493, 20);
  ellipse(365, 507, 15, 15);
  rect(420, 492, 25, 20);
  rect(420, 492, 15, 10);
  ellipse(258, 500, 50);
  square(58, 507, 8);
  ellipse(258, 500, 50);
  fill(255);
  rect(420, 492, 15, 10);

  //ojo

  strokeWeight(1);
  fill(250);
  ellipse(255, 120, 90, 90);
  fill(80);
  ellipse(270, 147, 30, 30);
  noFill();
  bezier(260, 137, 207, 133, 263, 102, 218, 93);
  bezier(273, 133, 284, 117, 257, 110, 288, 91);
  bezier(236, 105, 246, 86, 257, 111, 257, 76);
  bezier(241, 131, 228, 137, 226, 125, 224, 150);
  
  
  
  }
function dibujarFigura(x, y, tamanio, cantidad) {
  var valorGris = 255 / cantidad;
  var pasos = tamanio / cantidad;
  
  for (var i = 0; i < cantidad; i++) {
    fill(i * valorGris);
    ellipse(x, y, tamanio - i * pasos, tamanio - i * pasos);
  }
  

 }
  
 