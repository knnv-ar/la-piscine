//TPN°1 - Cuomo, Victoria - TM
//Obra: Through the window

//TECLAS: A-B-C-D-E-F
//CLICK MOUSE

var totalCanvas = 512;
var anchoCuadro = 482;
var altoCuadro = 472;
var luces = 10;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  //rectMode(CENTER);

  //VIÑETAS
  strokeWeight(10);
  stroke(255);
  line(width / 2, 0, width / 2, 512);
  line(0, totalCanvas / 3, 512, totalCanvas / 3);
  line(0, totalCanvas / (3 / 2), 512, totalCanvas / (3 / 2));
  line(5, 0, 5, 512); //linea izquierda
  line(0, 5, 512, 5); //linea arriba
  line(508, 0, 508, 512); //linea derecha
  line(0, 508, 512, 508);

  //CUADRO 1
  //reflejo
  push();
  stroke(210);
  fill(210);
  quad(17, 92, 17, 159, 32, 159, 32, 89); //izquierdo
  quad(31, 138, 113, 142, 135, 159, 34, 159); //abajo
  strokeWeight(1);
  stroke(0);
  strokeJoin(ROUND);
  fill(255);
  quad(113, 137, 113, 45, 161, 39, 161, 129); //heladera
  line(109, 127, 164, 117); //linea de heladera
  fill(210);
  stroke(210);
  quad(112, 138, 161, 130, 195, 155, 149, 163); //luz adelante de la heladera
  pop();

  push(); //ventanita derecha
  stroke(210);
  strokeCap(SQUARE);
  strokeWeight(3.5);
  line(213, 30, 213, 70); //dos de arriba
  line(220, 28, 220, 70);
  line(213, 73, 213, 114); //dos de abajo
  line(220, 73, 220, 112);
  pop();
  beginShape();
  strokeJoin(BEVEL);
  stroke(210);
  strokeWeight(3);
  vertex(213, 114);
  vertex(244, 130);
  endShape();

  //CUADRO 2
  push();
  strokeJoin(MITER); //ventana
  noStroke();
  quad(493, 159, 447, 134, 447, 23, 493, -10);
  pop();

  /*beginShape(); //reflejo
  fill(210);
  stroke(210);
  strokeJoin(MITER);
  vertex(434, 30);
  vertex(333, 98);
  vertex(333, 135);
  vertex(357, 158);
  vertex(469, 158);
  vertex(434, 139);
  endShape(CLOSE);*/

  push(); //marco de ventana
  stroke(255);
  strokeWeight(3.5);
  strokeCap(SQUARE);
  line(440.5, 25, 440.5, 82);
  pop();

  beginShape();
  stroke(255);
  strokeWeight(2);
  strokeCap(SQUARE);
  noFill();
  vertex(440.5, 88);
  vertex(440.5, 136.5);
  vertex(478, 157);
  endShape();

  //CUADRO 3
  noStroke(); //fondo negro
  fill(0);
  rect(15.1, 180.2, 230.8, 151.5);

  beginShape(); //ventana
  fill(255);
  strokeWeight(1);
  stroke(0);
  vertex(142, 186);
  vertex(181, 177);
  vertex(250, 177);
  vertex(250, 289);
  vertex(142, 272);
  endShape(CLOSE);

  push(); //separaciones ventana
  //verticales
  strokeCap(SQUARE);
  strokeWeight(5);
  stroke(0);
  line(234, 177, 234, 288); //1
  strokeWeight(4.5);
  line(216, 177, 216, 288); //2
  strokeWeight(4);
  line(198, 177, 198, 288); //3
  strokeWeight(3.5);
  line(181, 177, 181, 288); //4
  strokeWeight(3);
  line(165, 177, 165, 288); //5
  strokeWeight(2.5);
  line(152, 177, 152, 288); //6
  //horizontales
  strokeWeight(2.5);
  line(140, 259, 251, 271);
  strokeWeight(3);
  line(140, 244, 251, 250);
  strokeWeight(3.5);
  line(140, 229, 251, 228);
  strokeWeight(4);
  line(140, 213, 251, 205);
  strokeWeight(4.5);
  line(140, 198, 251, 184);
  pop();

  push(); //reflejo
  strokeJoin(BEVEL);
  fill(255, 255, 255, 210);
  quad(121, 283, 56, 294, 155, 325, 230, 310);
  //verticales (dos)
  strokeWeight(3);
  stroke(0);
  line(83, 305, 160, 290);
  line(121, 316, 192, 300);
  strokeWeight(1); //finitas
  line(70, 299, 138, 286.5);
  line(104, 310, 172, 295.5);
  line(141, 321, 209, 305);
  //horizonales
  strokeWeight(1);
  line(70, 292, 167, 322);
  line(84, 290, 185, 320);
  line(95, 286, 200, 316);
  line(110, 285, 217, 313.5);
  pop();

  //CUADRO 4
  //ventana
  push();
  translate(330, 203);
  rotate(radians(1.5));
  fill(255);
  rect(0, 0, 20, 60);
  pop();
  push();
  translate(354, 203.5);
  rotate(radians(1.5));
  rect(0, 0, 18, 60);
  pop();

  //reflejo
  push();
  translate(-5, 0);
  fill(210);
  //noStroke();
  stroke(210);
  quad(360, 290, 510, 337, 511, 316, 394, 285); //rect "piso"
  quad(454, 310, 454, 205, 519, 218, 512, 335); //rect "pared"
  pop();

  beginShape(); //linea oscura en reflejo
  translate(-5, 0);
  noFill();
  strokeWeight(3);
  stroke(0);
  vertex(362, 282);
  vertex(480, 318);
  vertex(480, 204);
  endShape();

  beginShape();
  strokeWeight(1.5);
  strokeCap(SQUARE);
  vertex(507.1, 199); //linea de marco derecho
  vertex(507.1, 336);
  vertex(458, 335);
  endShape();

  //CUADRO 5
  /* noStroke(); //fondo negro
  fill(0);
  rect(15.2, 346.2, 240.7, 156.6); */

  push();
  strokeWeight(0.5);
  stroke(0);
  fill(255);
  quad(17, 348.5, 17, 450, 90, 440, 90, 348.5); //ventana
  fill(255, 255, 255, 215);
  quad(101, 357, 101, 458, 155, 462, 155, 403); //reflejo
  strokeWeight(1);
  stroke(0);
  fill(215);
  quad(247, 452, 255, 461, 255, 487, 247, 480); //reflejito derecha
  pop();

  beginShape(); //reflejo del marco de la ventana
  noStroke();
  fill(255);
  vertex(92, 348.5);
  vertex(92, 441);
  vertex(57, 446.5);
  vertex(64, 450);
  vertex(98, 444);
  vertex(98.5, 355);
  endShape(CLOSE);

  push();
  noFill();
  strokeWeight(3);
  stroke(255);
  line(92, 445, 108, 442);
  noStroke();
  fill(0);
  quad(54, 451, 110, 442, 110, 463, 61, 465); //rectangulo para sombra
  pop();

  //CUADRO 6
  push(); //ventana principal
  strokeWeight(1);
  stroke(0);
  quad(293, 348, 312, 348, 312, 431, 293, 433);
  strokeWeight(5);
  line(282, 373, 315, 373);
  pop();

  push();
  beginShape(); //marco
  vertex(322, 348);
  vertex(321, 435);
  vertex(293, 437);
  vertex(293, 444);
  vertex(330, 441);
  vertex(330, 359);
  endShape(CLOSE);
  strokeWeight(5);
  stroke(0);
  line(315, 373, 334, 394);
  pop();

  push(); //reflejo ventana principal
  fill(255, 255, 255, 210);
  quad(359, 467, 438, 494, 405, 508, 320, 475);
  strokeWeight(6);
  stroke(0);
  line(445, 469, 360, 500);
  strokeWeight(8);
  stroke(255);
  line(348, 507, 414, 507); //linea tapa
  pop();
}

function draw() {

  //viñeta 1 - interact
  if (keyIsPressed) {
    if (key == "a" || key == "A") {
      beginShape(); //linterna
      noFill();
      strokeWeight(2);
      stroke(255);
      vertex(208, 159);
      vertex(199, 151);
      endShape();
      beginShape();
      fill(255);
      noStroke();
      vertex(199, 152);
      vertex(200, 147);
      vertex(196, 142);
      vertex(190, 148);
      vertex(194, 151);
      endShape(CLOSE);

      fill(255, 255, 255, luces); //luz
      beginShape();
      vertex(196, 148);
      vertex(178, 4);
      vertex(8, 5);
      vertex(5, 108);
      endShape();

      strokeWeight(0.5);
      stroke(255);
      line(113, 136, 85, 117);
      line(85, 117, 85, 31);
      line(85, 31, 114, 46);
      line(85, 31, 130, 27);
      line(130, 27, 160, 40);
    }
  }

  //viñeta 2 - interact
  if (keyIsPressed) {
    if (key == "b" || key == "B") {
      beginShape(); // proyección
      fill(255, 255, 255, 10);
      noStroke();
      strokeJoin(MITER);
      vertex(434, 30);
      vertex(333, 98);
      vertex(333, 135);
      vertex(357, 158);
      vertex(469, 158);
      vertex(434, 139);
      endShape(CLOSE);

      beginShape(); //proyector
      strokeJoin(MITER);
      fill(255);
      stroke(255);
      vertex(326, 103); //lente
      vertex(326, 124);
      vertex(317, 119);
      vertex(317, 108);
      endShape();
      rect(278, 100, 34, 25); //caja
      line(283, 130, 307, 130); //tripode
      push();
      strokeWeight(4);
      line(295, 129, 295, 160);
      line(284, 158, 306, 158);
      pop();
      push(); //adelante
      ellipse(309, 84, 23, 23);
      fill(0);
      ellipse(309, 84, 21, 21);
      fill(255);
      ellipse(309, 84, 10, 10);
      pop();
      push(); //atras
      ellipse(284, 88, 15, 15);
      fill(0);
      ellipse(284, 88, 13, 13);
      fill(255);
      ellipse(284, 88, 4, 4);
      pop();
    }
  }

  //viñeta 3 - interact
  if (keyIsPressed) {
    if (key == "c" || key == "C") {
      noStroke();
      fill(255);
      triangle(78, 216, 78 + 20, 216 + 35, 78 - 20, 216 + 35);

      strokeWeight(2.5);
      stroke(255);
      line(6, 235, 78, 235); //luz

      push();
      noStroke();
      fill(255, 255, 255, 3);
      triangle(78, 235, 173, 176, 249, 177);
      fill(255, 255, 255, 6);
      triangle(78, 235, 249, 177, 249, 207);
      fill(255, 255, 255, 9);
      triangle(78, 235, 249, 207, 249, 241);
      fill(255, 255, 255, 12);
      triangle(78, 235, 249, 241, 249, 263);
      fill(255, 255, 255, 15);
      triangle(78, 235, 249, 263, 249, 285);
      pop();
    }
  }

  //viñeta 4 - interact
  if (keyIsPressed) {
    if (key == "d" || key == "D") {
      stroke(255); //lampara
      line(412, 175, 412, 186);
      triangle(412, 186, 401, 196, 423, 196);
      ellipse(412, 196, 5, 5);

      noStroke();
      fill(255, 255, 255, 10);
      triangle(412, 186, 307, 337, 506, 337);
    }
  }

  //viñeta 5 - interact
  if (keyIsPressed) {
    if (key == "e" || key == "E") {
      noStroke();
      fill(255, 255, 255, 5);
      ellipse(198, 423, 80, 80);
      fill(255, 255, 255, 10);
      ellipse(198, 423, 60, 60);
      fill(255, 255, 255, 20);
      ellipse(198, 423, 40, 40);

      fill(255);
      rect(187, 460, 25, 35);
      ellipse(199, 447, 15, 25);
      strokeJoin(MITER);
      quad(186, 434, 211, 434, 204, 413, 192, 412);
    }
  }

  //viñeta 6
  if (keyIsPressed) {
    if (key == "f" || key == "F") {
      push();
      strokeCap(SQUARE); //soporte de velador
      strokeWeight(2);
      stroke(255);
      line(466, 492, 486, 492);
      line(476, 492, 482, 472);
      line(482, 472, 471, 458);

      triangle(471, 458, 455, 453, 470, 441); //lamparita
      ellipse(462, 446, 4, 4);
      pop();

      noStroke();
      fill(255, 255, 255, 5); //reflejo
      triangle(462, 446, 382, 424, 417, 387);
      fill(255, 255, 255, 30);
      ellipse(381, 386, 70, 70);
    }
  }
  //viñetas
  if (mouseIsPressed) {
    strokeWeight(10);
    stroke(random(255));
    line(width / 2, 0, width / 2, 512);
    line(0, totalCanvas / 3, 512, totalCanvas / 3);
    line(0, totalCanvas / (3 / 2), 512, totalCanvas / (3 / 2));
    line(5, 0, 5, 512); //linea izquierda
    line(0, 5, 512, 5); //linea arriba
    line(508, 0, 508, 512); //linea derecha
    line(0, 508, 512, 508);
  }
}
document.oncontextmenu = function () {
  return false;
};
