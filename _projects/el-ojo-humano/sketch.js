//Bascuas Julieta Agustina, trabajo practico °1, RAUL LACABANNE,turno mañana,Universidad Nacional de las Artes
//Inspirada en Vera Molnar y Georg Nees.

//Declaracion de variables
var fondo = 220;
///////////
var radioMayor = 60;
var j = radioMayor;
var velocidad = 5;
var direccion = 1;
var anguloRotacion = 270;
////////////////////////
var angulo = 0.0;
var desplazamiento = 250;
var escalar = 10;
var velocidad1 = 5;

function setup() {
  createCanvas(512, 512);
  angleMode(DEGREES);
}

function draw() {
  var valorSeno = sin(angulo);
  var fondo = map(valorSeno, -1, 1, 0, 220);
  background(fondo);
  angulo += 0.1;

  for (let i = 0; i < 100; i++) {
    var r = random(1000);
    fill(0);
    stroke(r);
    rect(10, 10, 50);
    rect(5, 50, 50);
    rect(10, 100, 50);
    rect(5, 150, 50);
    rect(10, 200, 50);
    rect(5, 250, 50);
    rect(10, 300, 50);
    rect(5, 350, 50);
    rect(10, 400, 50);
    rect(5, 450, 50);
    //////
    rect(440, 10, 50);
    rect(450, 50, 50);
    rect(440, 100, 50);
    rect(450, 150, 50);
    rect(440, 200, 50);
    rect(450, 250, 50);
    rect(440, 300, 50);
    rect(450, 350, 50);
    rect(440, 400, 50);
    rect(450, 450, 50);
    ////
    push();
    noFill();
    stroke(r);
    rect(40, 40, 50);
    rect(80, 40, 50);
    rect(120, 40, 50);
    rect(160, 40, 50);
    rect(410, 430, 50);
    rect(370, 430, 50);
    rect(330, 430, 50);
    rect(290, 430, 50);

    pop();
  }

  ///CONTORNO DEL OJO///
  fill(150);
  bezier(35, 249, 185, 135, 365, 135, 505, 244);
  bezier(36, 249, 173, 370, 353, 378, 505, 243);

  ////PARTES DE ADENTRO////

  fill(0);
  stroke(2);
  circle(270, 250, 160);

  fill(100);
  circle(270, 250, 140);

  fill(0);
  stroke(2);
  circle(270, 250, 50);
  push();
  fill(255);
  var x = desplazamiento + 15 + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  circle(x, y, 30);
  angulo += velocidad1;
  pop();
  fill(220);
  bezier(33, 248, 70, 288, 80, 205, 33, 248);

  noFill();
  stroke(1);
  push();
  rotate(-10);
  ellipse(80, 200, 1, 20);
  ellipse(86, 200, 1, 20);
  ellipse(92, 200, 1, 20);
  pop();
  push();
  rotate(-15);
  ellipse(84, 205, 1, 20);
  ellipse(90, 205, 1, 20);
  ellipse(96, 205, 1, 20);
  ellipse(102, 205, 1, 20);
  ellipse(108, 205, 1, 20);
  ellipse(114, 204, 1, 20);
  ellipse(120, 204, 1, 20);
  ellipse(126, 204, 1, 20);
  ellipse(132, 204, 1, 20);
  ellipse(138, 204, 1, 20);
  ellipse(144, 204, 1, 20);
  ellipse(150, 204, 1, 20);
  ellipse(156, 204, 1, 20);
  ellipse(162, 204, 1, 20);
  ellipse(168, 204, 1, 20);
  pop();
  push();
  ellipse(225, 152, 1, 20);
  ellipse(231, 152, 1, 20);
  ellipse(237, 151, 1, 20);
  pop();

  push();
  ellipse(247, 151, 1, 20);
  ellipse(253, 150, 1, 20);
  ellipse(259, 150, 1, 20);
  ellipse(265, 150, 1, 20);
  ellipse(271, 150, 1, 20);
  ellipse(277, 150, 1, 20);
  ellipse(283, 150, 1, 20);
  ellipse(289, 150, 1, 20);
  ellipse(295, 150, 1, 20);
  ellipse(301, 150, 1, 20);
  ellipse(307, 150, 1, 20);
  ellipse(313, 150, 1, 20);
  ellipse(319, 150, 1, 20);
  pop();

  push();
  rotate(10);
  ellipse(347, 92, 1, 20);
  pop();
  push();
  rotate(15);

  ellipse(360, 60, 1, 20);
  ellipse(365, 60, 1, 20);
  ellipse(370, 60, 1, 20);
  ellipse(375, 60, 1, 20);
  ellipse(380, 58, 1, 20);
  ellipse(385, 57, 1, 20);
  ellipse(390, 57, 1, 20);
  ellipse(395, 57, 1, 20);
  ellipse(400, 57, 1, 20);
  ellipse(405, 57, 1, 20);
  ellipse(410, 57, 1, 20);
  ellipse(415, 57, 1, 20);
  ellipse(420, 58, 1, 20);
  ellipse(425, 58, 1, 20);
  ellipse(430, 58, 1, 20);
  ellipse(435, 58, 1, 20);

  pop();
  push();
  rotate(20);
  ellipse(444, 22, 1, 20);
  ellipse(449, 22, 1, 20);
  ellipse(454, 22, 1, 20);
  ellipse(459, 22, 1, 20);
  ellipse(464, 22, 1, 20);
  ellipse(469, 22, 1, 20);
  ellipse(474, 22, 1, 20);
  ellipse(479, 22, 1, 20);
  ellipse(484, 22, 1, 20);
  ellipse(489, 22, 1, 20);
  ellipse(494, 25, 1, 20);
  ellipse(499, 25, 1, 20);
  ellipse(504, 25, 1, 20);
  ellipse(509, 25, 1, 20);
  ellipse(514, 25, 1, 20);
  ellipse(519, 27, 1, 20);
  ellipse(524, 27, 1, 20);
  ellipse(529, 27, 1, 20);
  ellipse(534, 30, 1, 20);
  ellipse(539, 30, 1, 20);
  ellipse(544, 30, 1, 20);
  pop();

  //PESTAÑAS DE ABAJO

  push();
  rotate(10);
  ellipse(155, 295, 1, 20);
  pop();
  push();
  rotate(15);
  ellipse(186, 280, 1, 20);
  ellipse(192, 280, 1, 20);
  ellipse(198, 280, 1, 20);
  ellipse(204, 282, 1, 20);
  ellipse(210, 282, 1, 20);
  ellipse(216, 282, 1, 20);
  ellipse(222, 284, 1, 20);
  ellipse(228, 284, 1, 20);
  ellipse(234, 284, 1, 20);
  ellipse(240, 284, 1, 20);
  ellipse(246, 286, 1, 20);
  ellipse(252, 286, 1, 20);
  ellipse(258, 286, 1, 20);
  ellipse(264, 286, 1, 20);
  ellipse(270, 286, 1, 20);
  ellipse(276, 286, 1, 20);
  ellipse(282, 286, 1, 20);
  ellipse(288, 286, 1, 20);
  ellipse(294, 286, 1, 20);
  ellipse(300, 286, 1, 20);
  pop();

  push();
  ellipse(225, 355, 1, 20);
  ellipse(231, 355, 1, 20);
  ellipse(237, 355, 1, 20);
  ellipse(237, 355, 1, 20);
  pop();

  push();
  ellipse(247, 355, 1, 20);
  ellipse(253, 355, 1, 20);
  ellipse(259, 355, 1, 20);
  ellipse(265, 355, 1, 20);
  ellipse(271, 355, 1, 20);
  ellipse(277, 355, 1, 20);
  ellipse(283, 355, 1, 20);
  ellipse(289, 355, 1, 20);
  ellipse(295, 355, 1, 20);
  ellipse(301, 355, 1, 20);
  ellipse(307, 355, 1, 20);
  ellipse(313, 355, 1, 20);
  ellipse(319, 355, 1, 20);
  pop();

  push();
  rotate(-10);
  ellipse(260, 405, 1, 20);
  ellipse(266, 404, 1, 20);
  ellipse(272, 404, 1, 20);
  ellipse(278, 404, 1, 20);
  ellipse(284, 404, 1, 20);
  ellipse(290, 403, 1, 20);
  ellipse(296, 402, 1, 20);
  ellipse(302, 402, 1, 20);
  ellipse(308, 400, 1, 20);
  ellipse(314, 400, 1, 20);
  ellipse(320, 398, 1, 20);
  ellipse(326, 397, 1, 20);
  ellipse(332, 397, 1, 20);
  ellipse(338, 397, 1, 20);
  ellipse(344, 395, 1, 20);
  ellipse(350, 395, 1, 20);
  pop();

  push();
  rotate(-15);
  ellipse(321, 420, 1, 20);
  ellipse(327, 420, 1, 20);
  ellipse(333, 420, 1, 20);
  ellipse(339, 420, 1, 20);
  ellipse(345, 415, 1, 20);
  ellipse(351, 415, 1, 20);
  ellipse(357, 410, 1, 20);
  ellipse(363, 410, 1, 20);
  pop();
  push();
  rotate(-20);
  ellipse(332, 440, 1, 20);
  ellipse(338, 440, 1, 20);
  ellipse(344, 435, 1, 20);
  ellipse(350, 435, 1, 20);
  ellipse(356, 430, 1, 20);
  ellipse(362, 430, 1, 20);
  pop();

  push();
  j += 1 + velocidad; // Aumenta el valor de x
  fill(200);
  stroke(2);
  push();
  translate(20, j + 350);
  bezier(285, 100, 300, 150, 280, 150, 285, 100);

  if (j > width + radioMayor) {
    j = -radioMayor; // Mueve la figura al borde izquierdo
    pop();
  }
}
