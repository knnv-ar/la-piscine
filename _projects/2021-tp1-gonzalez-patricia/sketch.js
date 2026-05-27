//Cecilia Patricia Gonzalez - Universo musical.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);

  //circulos
  stroke(0);
  strokeWeight(1);
  fill(255);
  ellipse(256, 256, 365, 365);
  ellipse(256, 256, 350, 350);
  fill(20);
  ellipse(256, 256, 300, 300);

  //cuadrado
  fill(255);
  quad(380, 180, 513, 180, 513, 340, 380, 340);

  //lineas negras guitarra
  push();
  fill(0);
  strokeWeight(2);
  line(378, 195, 512, 195);
  line(378, 228, 512, 228);
  line(378, 245, 512, 245);
  line(378, 270, 512, 270);
  line(378, 295, 512, 295);
  line(378, 325, 512, 325);
  line(429, 180, 429, 339);
  line(479, 180, 479, 339);
  line(433, 190, 433, 271);
  line(433, 290, 433, 339);
  line(484, 184, 484, 288);
  line(484, 303, 484, 334);
  pop();

  //lineas blancas guitarra
  push();
  strokeWeight(2);
  stroke(200);
  line(120, 195, 378, 195);
  line(109, 228, 378, 228);
  line(107, 245, 378, 245);
  line(107, 270, 378, 270);
  line(111, 295, 378, 295);
  line(123, 325, 378, 325);
  pop();

  //lineas del borde
  stroke(0);
  strokeWeight(1);
  line(246, 75, 246, 80);
  line(292, 76, 291, 84);
  line(334, 91, 332, 98);
  line(368, 112, 365, 118);
  line(397, 140, 392, 147);
  line(419, 173, 412, 178);
  line(200, 82, 202, 89);
  line(160, 100, 164, 108);
  line(121, 133, 125, 138);
  line(93, 173, 98, 178);
  line(77, 217, 84, 219);
  line(74, 256, 81, 256);
  line(79, 299, 86, 297);
  line(97, 344, 102, 339);
  line(128, 385, 132, 379);
  line(168, 415, 172, 408);
  line(206, 431, 208, 423);
  line(258, 437, 258, 429);
  line(312, 428, 310, 421);
  line(352, 410, 347, 405);
  line(382, 386, 378, 381);
  line(410, 352, 405, 347);

  //planetas
  push();
  fill(255);
  strokeWeight(1);
  ellipse(262, 184, 50, 50);
  ellipse(332, 242, 60, 58);
  ellipse(316, 215, 30, 30);
  ellipse(316, 343, 65, 62);
  ellipse(172, 161, 35, 35);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(331, 242, 85, 20);
  strokeWeight(2);
  ellipse(173, 162, 50, 15);
  ellipse(173, 167, 50, 15);
  pop();

  //planetas
  line(238, 174, 288, 185);
  line(238, 178, 288, 188);
  line(238, 185, 288, 199);
  line(238, 180, 288, 196);
  ellipse(257, 169, 10, 6);
  ellipse(319, 208, 10, 5);
  ellipse(311, 216, 15, 10);
  ellipse(323, 216, 5, 4);
  point(319, 223);
  point(311, 223);
  point(308, 205);
  point(323, 220);
  line(303, 230, 358, 227);
  line(302, 241, 361, 246);
  line(303, 252, 359, 250);
  line(307, 258, 354, 258);
  ellipse(177, 169, 10, 5);
  ellipse(163, 155, 6, 4);
  ellipse(177, 154, 10, 9);

  //estrellas
  push();
  strokeWeight(3);
  stroke(255);
  point(169, 167);
  point(236, 120);
  point(259, 253);
  point(138, 282);
  point(319, 148);
  point(256, 234);
  point(300, 367);
  point(176, 212);
  point(318, 316);
  point(178, 352);
  point(366, 186);
  point(218, 182);
  point(292, 383);
  point(202, 136);
  point(369, 310);
  point(264, 131);

  pop();
  push();
  stroke(255);
  strokeWeight(6);
  point(207, 161);
  point(119, 227);
  point(253, 345);
  point(357, 292);
  point(211, 224);
  point(290, 138);
  point(358, 162);
  point(210, 380);
  point(144, 302);
  point(300, 287);
  point(120, 256);

  pop();
  push();
  stroke(255);
  strokeWeight(1);
  point(243, 146);
  point(147, 184);
  point(153, 244);
  point(277, 298);
  point(214, 362);
  point(284, 286);
  point(326, 168);
  point(338, 346);
  point(252, 384);
  point(150, 336);
  point(214, 128);
  point(303, 173);
  point(280, 376);
  point(319, 287);
  point(137, 201);
  point(362, 337);
  point(129, 306);
  point(219, 188);
  point(313, 193);
  point(290, 336);
  point(309, 237);
  point(157, 271);
  point(332, 397);
  point(139, 316);
  pop();

  //sol
  triangle(194, 230, 210, 260, 190, 259);
  triangle(203, 353, 209, 329, 190, 325);
  triangle(167, 282, 167, 302, 143, 288);
  triangle(233, 281, 253, 288, 234, 300);
  triangle(155, 241, 191, 260, 166, 279);
  triangle(244, 239, 210, 261, 232, 279);
  triangle(155, 338, 168, 299, 190, 324);
  triangle(254, 330, 232, 297, 210, 324);
  line(176, 268, 154, 238);
  line(223, 265, 244, 235);
  line(228, 313, 254, 329);
  line(174, 315, 153, 338);
  ellipse(201, 294, 72, 72);

  //planeta
  line(292, 321, 348, 345);
  line(347, 351, 284, 333);
  line(283, 339, 340, 361);
  line(284, 355, 330, 365);
  ellipse(316, 319, 5, 6);
  push();
  fill(255);
  strokeWeight(2);
  text("♪", 50, 50);
  text("♪", 38, 181);
  text("♪", 164, 27);
  text("♪", 220, 51);
  text("♪", 276, 37);
  text("♪", 460, 71);
  text("♪", 378, 13);
  text("♪", 32, 290);
  text("♪", 36, 442);
  text("♪", 129, 438);
  text("♪", 397, 445);
  text("♪", 471, 410);
  text("♪", 90, 480);
  text("♪", 261, 479);
  text("♪", 401, 90);
  pop();

  //2 bezier
  fill(0);
  strokeWeight(2);
  stroke(255);
  bezier(425, 352, 422, 363, 414, 377, 396, 391);
  bezier(421, 378, 416, 388, 409, 394, 397, 406);
  bezier(443, 355, 439, 362, 437, 369, 433, 377);
  //2 bezier
  bezier(70, 321, 82, 345, 89, 356, 102, 371);
  bezier(70, 343, 76, 353, 79, 358, 86, 366);
  bezier(66, 350, 70, 357, 74, 362, 78, 366);
  //3 bezier
  bezier(95, 142, 105, 128, 119, 114, 137, 100);
  bezier(94, 124, 102, 114, 110, 102, 122, 93);
  bezier(122, 102, 130, 93, 134, 90, 139, 86);
  //4 bezier
  bezier(427, 173, 421, 158, 415, 146, 407, 137);
  bezier(435, 160, 429, 150, 425, 142, 421, 137);
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  ellipse(0, 0, 6);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(200, 200);
  translate(p5.Vector.fromAngle(millis() / 800, 40));
  ellipse(0, 0, 10);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(300, 200);
  translate(p5.Vector.fromAngle(millis() / 1900, 35));
  ellipse(0, 0, 5);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(300, 350);
  translate(p5.Vector.fromAngle(millis() / 900, 30));
  ellipse(0, 0, 9);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(300, 290);
  translate(p5.Vector.fromAngle(millis() / 2800, 40));
  ellipse(0, 0, 13);
  pop();
  push();
  noStroke();
  fill(random(150, 305));
  rectMode(CENTER);
  translate(300, 220);
  translate(p5.Vector.fromAngle(millis() / 1500, 40));
  ellipse(0, 0, 20);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(220, 290);
  translate(p5.Vector.fromAngle(millis() / 2800, 40));
  ellipse(0, 0, 13);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(170, 300);
  translate(p5.Vector.fromAngle(millis() / 800, 40));
  ellipse(0, 0, 7);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(310, 200);
  translate(p5.Vector.fromAngle(millis() / 2800, 40));
  ellipse(0, 0, 5);
  pop();
  push();
  noStroke();
  fill(random(150, 255));
  rectMode(CENTER);
  translate(251, 194);
  translate(p5.Vector.fromAngle(millis() / 800, 30));
  ellipse(0, 0, 13);
  pop();
}
