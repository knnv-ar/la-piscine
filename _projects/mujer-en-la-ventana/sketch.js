function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  strokeWeight(2);

  //fondo exterior
  for (var i = 20; i < 150; i += 5) {
    line(i, 20, i, 512);
  }
  for (var i = 20; i < 416; i += 5) {
    line(i, 20, i, 65);
  }

  strokeWeight(1);
  line(500, 20, 420, 65);
  line(490, 20, 410, 65);
  line(480, 20, 400, 65);
  line(470, 20, 390, 65);
  line(460, 20, 380, 65);
  line(450, 20, 370, 65);
  line(440, 20, 360, 65);
  line(430, 20, 350, 65);
  fill(180);
  quad(420, 69, 425, 505, 503, 505, 503, 25);

  //mujer
  fill(250);
  ellipse(300, 200, 100, 150); //rostro
  fill(110);
  ellipse(286, 174, 25, 35); //ojo izq
  fill(120);
  ellipse(316, 181, 15, 25); //ojo der
  //line(316, 188, 328, 173);
  fill(110);
  ellipse(303, 229, 40, 20); //boca
  line(314, 131, 297, 199); //nariz
  line(297, 202, 313, 218);
  line(307, 241, 297, 272);
  //cabello
  fill(190);
  quad(325, 132, 357, 229, 371, 229, 345, 138);
  quad(248, 172, 226, 226, 244, 226, 268, 140);
  quad(272, 127, 272, 139, 324, 137, 323, 126);
  fill(240);

  triangle(298, 277, 298, 405, 369, 277); //cuerpo
  line(174, 70, 414, 70);
  fill(210);
  arc(298, 278, 271, 316, HALF_PI, PI);

  //ventana
  strokeWeight(5);
  line(174, 70, 174, 512);
  line(414, 70, 414, 512);

  //fondo interior
  strokeWeight(1);
  line(214, 70, 214, 273);
  line(214, 400, 214, 512);
  line(254, 70, 254, 273);
  line(254, 426, 254, 512);
  line(294, 70, 294, 124);
  line(294, 438, 294, 512);
  line(334, 70, 334, 135);
  line(334, 253, 334, 275);
  line(334, 340, 334, 512);
  line(374, 70, 374, 512);
  line(414, 70, 414, 512);
  fill(225);
  ellipse(245, 118, 30, 30);
  ellipse(372, 92, 30, 30);
  ellipse(215, 439, 30, 30);
  ellipse(371, 424, 30, 30);
  ellipse(292, 483, 30, 30);

  strokeWeight(10);
  point(208, 89);
  point(211, 230);
  point(375, 171);
  point(339, 398);
  point(245, 479);
  point(376, 356);
  point(338, 484);
}
