function setup() {
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

let x, y;
let gira = 2;
let velocidad = 1;

function draw() {
  colorMode(RGB);
  gira += velocidad;
  rueda = gira % 255;
  console.log(rueda);
  background(255 - rueda);

  //gato 1
  push();
  translate(30, 0);
  push();
  //orejas
  strokeWeight(3);
  stroke(0 + rueda);
  line(30, 376, 23, 411);
  line(30, 376, 44, 411);
  line(107, 385, 82, 412);
  line(107, 385, 110, 415);

  point(44, 411);
  point(63, 409);
  point(82, 412);

  beginShape();
  noFill();
  curveVertex(44, 411);
  curveVertex(44, 411);
  curveVertex(63, 409);
  curveVertex(82, 412);
  curveVertex(82, 412);
  endShape();

  //menton
  point(23, 411);
  point(16, 441);
  point(66, 459);
  point(113, 455);
  point(110, 415);

  beginShape();
  curveVertex(23, 411);
  curveVertex(23, 411);
  curveVertex(16, 441);
  curveVertex(66, 459);
  curveVertex(113, 455);
  curveVertex(110, 415);
  curveVertex(110, 415);
  endShape();

  //cuerpo
  line(48, 455, 28, 511);
  line(86, 460, 90, 511);

  //cara
  circle(44, 432, 5);
  circle(78, 432, 5);
  line(37, 423, 51, 427);
  line(85, 422, 70, 425);

  point(52, 443);
  point(56, 446);
  point(62, 443);
  point(73, 448);
  point(82, 441);

  beginShape();
  curveVertex(52, 443);
  curveVertex(52, 443);
  curveVertex(56, 446);
  curveVertex(62, 443);
  curveVertex(73, 448);
  curveVertex(82, 441);
  curveVertex(82, 441);
  endShape();

  //cachete
  noStroke();
  fill(200);
  ellipse(30, 437, 15, 10);
  ellipse(93, 438, 15, 10);
  pop();
  pop();
  //gato 2

  push();
  strokeWeight(3);
  stroke(0 + rueda);
  noFill();
  line(172, 82, 180, 182);
  line(172, 82, 204, 181);
  line(253, 180, 273, 82);
  line(273, 82, 283, 180);

  point(204, 181);
  point(227, 178);
  point(252, 180);

  beginShape();
  curveVertex(204, 181);
  curveVertex(204, 181);
  curveVertex(227, 178);
  curveVertex(252, 180);
  curveVertex(252, 180);
  endShape();

  line(180, 182, 169, 204);
  line(282, 179, 288, 196);

  point(173, 246);
  point(187, 265);
  point(278, 259);
  point(285, 242);

  beginShape();
  curveVertex(173, 246);
  curveVertex(173, 246);
  curveVertex(187, 265);
  curveVertex(278, 259);
  curveVertex(285, 242);
  curveVertex(285, 242);
  endShape();

  push();
  noStroke();
  circle(232, 263, 55);
  pop();

  point(202, 267);
  point(188, 348);
  point(168, 422);
  point(167, 513);

  beginShape();
  curveVertex(202, 267);
  curveVertex(202, 267);
  curveVertex(188, 348);
  curveVertex(168, 422);
  curveVertex(167, 513);
  curveVertex(167, 513);
  endShape();

  point(260, 262);
  point(273, 357);
  point(290, 407);
  point(314, 515);

  beginShape();
  curveVertex(260, 262);
  curveVertex(260, 262);
  curveVertex(273, 357);
  curveVertex(290, 407);
  curveVertex(314, 515);
  curveVertex(314, 515);
  endShape();

  //bigotes
  point(168, 205);
  point(134, 210);
  point(170, 215);

  beginShape();
  curveVertex(168, 205);
  curveVertex(168, 205);
  curveVertex(134, 210);
  curveVertex(170, 215);
  curveVertex(170, 215);
  endShape();

  point(171, 221);
  point(135, 229);
  point(171, 229);

  beginShape();
  curveVertex(171, 221);
  curveVertex(171, 221);
  curveVertex(135, 229);
  curveVertex(171, 229);
  curveVertex(171, 229);
  endShape();

  point(173, 237);
  point(143, 248);
  point(172, 247);

  beginShape();
  curveVertex(173, 237);
  curveVertex(173, 237);
  curveVertex(143, 248);
  curveVertex(172, 247);
  curveVertex(172, 247);
  endShape();

  point(291, 198);
  point(314, 202);
  point(288, 207);

  beginShape();
  curveVertex(291, 198);
  curveVertex(291, 198);
  curveVertex(314, 202);
  curveVertex(288, 207);
  curveVertex(288, 207);
  endShape();

  point(286, 212);
  point(318, 220);
  point(288, 220);

  beginShape();
  curveVertex(286, 212);
  curveVertex(286, 212);
  curveVertex(318, 220);
  curveVertex(288, 220);
  curveVertex(288, 220);
  endShape();

  point(286, 228);
  point(317, 239);
  point(288, 242);

  beginShape();
  curveVertex(286, 228);
  curveVertex(286, 228);
  curveVertex(317, 239);
  curveVertex(288, 242);
  curveVertex(288, 242);
  endShape();

  //cara
  ellipse(200, 218, 40, 20);
  ellipse(255, 218, 40, 20);
  fill(0 + rueda);
  rect(195, 209, 9, 17);
  rect(252, 209, 9, 17);

  stroke(0 + rueda);
  noFill();
  bezier(210, 243, 206, 257, 231, 259, 224, 243);
  bezier(224, 243, 231, 255, 244, 255, 240, 243);

  pop();

  //gato 3
  push();
  strokeWeight(3);
  stroke(0 + rueda);
  noFill();
  line(315, 28, 315, 79);
  line(315, 28, 357, 66);
  line(441, 65, 469, 28);
  line(469, 28, 488, 73);

  point(357, 66);
  point(384, 62);
  point(413, 62);
  point(440, 66);

  beginShape();
  curveVertex(357, 66);
  curveVertex(357, 66);
  curveVertex(384, 62);
  curveVertex(413, 62);
  curveVertex(440, 66);
  curveVertex(440, 66);
  endShape();

  point(315, 80);
  point(307, 146);
  point(302, 197);

  beginShape();
  curveVertex(315, 80);
  curveVertex(315, 80);
  curveVertex(307, 146);
  curveVertex(302, 197);
  curveVertex(302, 197);
  endShape();

  line(300, 206, 299, 212);
  line(297, 220, 296, 228);

  point(292, 244);
  point(283, 315);

  point(285, 391);

  beginShape();
  curveVertex(292, 244);
  curveVertex(292, 244);
  curveVertex(283, 315);
  curveVertex(285, 391);
  curveVertex(285, 391);
  endShape();

  point(487, 73);
  point(502, 127);
  point(507, 177);
  point(513, 266);
  point(523, 406);

  beginShape();
  curveVertex(487, 73);
  curveVertex(487, 73);
  curveVertex(502, 127);
  curveVertex(507, 177);
  curveVertex(513, 266);
  curveVertex(513, 266);
  curveVertex(523, 406);
  curveVertex(523, 406);
  endShape();

  //cara
  noStroke();
  fill(200);
  ellipse(405, 139, 30, 10);

  //ojo
  stroke(0 + rueda);
  noFill();
  point(332, 99);
  point(352, 102);
  point(366, 109);
  point(378, 117);
  point(366, 125);
  point(352, 130);
  point(332, 140);

  beginShape();
  curveVertex(332, 99);
  curveVertex(332, 99);
  curveVertex(352, 102);
  curveVertex(366, 109);
  curveVertex(378, 117);
  curveVertex(366, 125);
  curveVertex(352, 130);
  curveVertex(332, 140);
  curveVertex(332, 140);
  endShape();

  push();
  circle(450, 118, 40);
  fill(0 + rueda);
  circle(450, 118, 10);
  pop();

  //boca
  point(404, 146);
  point(400, 171);
  point(375, 189);
  point(361, 188);
  point(345, 169);

  beginShape();
  curveVertex(404, 146);
  curveVertex(404, 146);
  curveVertex(400, 171);
  curveVertex(375, 189);
  curveVertex(361, 188);
  curveVertex(345, 169);
  curveVertex(345, 169);
  endShape();

  point(404, 146);
  point(411, 167);
  point(430, 186);
  point(457, 187);
  point(476, 168);

  beginShape();
  curveVertex(404, 146);
  curveVertex(404, 146);
  curveVertex(411, 167);
  curveVertex(430, 186);
  curveVertex(457, 187);
  curveVertex(476, 168);
  curveVertex(476, 168);
  endShape();
  pop();

  //circulos-gato 1

  push();
  strokeWeight(2);
  stroke(0 + rueda);
  noFill();
  x = 94;
  y = 430;

  push();
  translate(x, y);
  circle(0, 0, 50 + sin(frameCount / 10) * 5);
  circle(0, 0, 90 + sin(frameCount / 20) * 15);
  circle(0, 0, 130 + sin(frameCount / 30) * 25);
  circle(0, 0, 160 + sin(frameCount / 40) * 35);
  pop();

  pop();

  //rectangulos-gato 3

  push();
  strokeWeight(2);
  stroke(0 + rueda);
  noFill();
  rect((x = 320), (y = 90), 50, 30 + sin(frameCount / 10) * 5);
  rect((x = 300), (y = 80), 90, 50 + sin(frameCount / 20) * 15);
  rect((x = 290), (y = 60), 130, 90 + sin(frameCount / 30) * 25);
  rect((x = 270), (y = 40), 190, 140 + sin(frameCount / 40) * 35);
  pop();
}
