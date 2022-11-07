function setup() {
let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
}

function draw() {
  var r = 1;
  var g = 1;
  var b = 1;
  r = random(0, 155);
  g = random(0, 255);
  b = random(0, 255);

  background(0);
  

  frameRate(30);

  strokeWeight(0);
  fill(r);
  rect(21, 31, 100, 50);
  rect(74, 56, 100, 50);
  rect(10, 68, 100, 50);
  rect(34, 100, 180, 50);

  strokeWeight(0);
  //230
  fill(r);
  rect(5, 129, 100, 50);
  rect(58, 159, 50, 50);

  fill(230);
  rect(387, 24, 100, 100);
  fill(230);
  strokeWeight(0);
  rect(230, 98, 257, 100);

  fill(230);
  rect(24, 250, 210, 80);
  rect(127, 156, 230, 100);

  fill(230);
  rect(242, 328, 230, 130);

  fill(0);
  rect(81, 116, 149, 55);

  fill(230);
  rect(95, 133, 139, 45);

  fill(0);
  rect(390, 113, 56, 30);

  strokeWeight(0);
  fill(0);
  line(346, 141, 346, 191);

  fill(0);
  for (var i = 346; i < 400; i += 4) {
    line(i, 141, i, 191);
    fill(0);
    rect(127, 242, 120, 66);
    rect(126, 199, 100, 100);
  }

  fill(0);
  rect(241, 189, 70, 70);

  // cuadrado que cambia tonalidades
  fill(250);
  rect(45, 344, 160, 90);
  strokeWeight(0);

  strokeWeight(2);
  fill(0);

  strokeWeight(2);
  fill(0);

  for (var x = 230; x < 390; x += 5) {
    line(x, 98, x, 134);
  }
  push();
  fill(0);
  line(230, 103, 386, 103);
  line(230, 110, 386, 110);
  line(230, 117, 386, 117);
  line(230, 124, 386, 124);
  line(230, 131, 386, 131);
  pop();

  //lineas verticales del rectangulo de abajo a la izquierda
  strokeWeight(2);
  for (var e = 46; e < 206; e += 5) {
    fill(0);
    line(e, 345, e, 430);
  }

  //250
  fill(b, b);

  rect(170, 386, 100, 70);
  fill(0);
  line(170, 387, 170, 455);
  line(175, 387, 175, 455);

  //lineas verticales del rectangulo de abajo a la derecha
  for (var r = 170; r < 350; r += 5) {
    line(r, 387, r, 455);
  }

  strokeWeight(5);
  for (var h = 320; h < 600; h += 8) {
    line(320, h, 400, h);
  }
  strokeWeight(0);
  fill(230);
  rect(402, 278, 90, 60);

  fill(0);

  for (var g = 401; g < 500; g += 5) {
    line(401, g, 491, g);
  }

  fill(0);
  rect(242, 328, 40, 20);
  fill(0);
  rect(240, 347, 20, 20);
  fill(0);
  rect(297, 327, 22, 62);

  strokeWeight(2);
  fill(0);
  line(401, 278, 491, 278);

  for (var y = 401; y < 601; y += 5) {
    line(401, y, y, y);
  }

  fill(0);
  line(354, 340, 355, 450);
  for (var f = 354; f < 400; f += 5) {
    line(f, 340, f, 455);
  }
  fill(0);
  rect(240, 457, 100, 10);
  fill(0);
  rect(45, 430, 123, 10);
  strokeWeight(3);
  line(97, 65, 97, 120);
  line(91, 56, 91, 130);
  line(85, 47, 85, 140);
  line(79, 42, 79, 170);

  for (var t = 9; t < 70; t += 6) {
    line(t, 30, t, 247);
  }
  strokeWeight(0);
  fill(230);
  rect(29, 57, 24, 20);
  fill(230);
  rect(16, 76, 24, 17);
  rect(34, 75, 25, 29);
  rect(5, 158, 50, 30);

  fill(0);
  rect(231, 134, 240, 100);

  strokeWeight(2);

  fill(0);
  line(5, 157, 54, 157);
  line(5, 162, 54, 162);
  line(5, 167, 54, 167);
  line(5, 172, 54, 172);
  line(5, 177, 54, 177);
  line(5, 182, 54, 182);
  line(5, 187, 54, 187);

  fill(0);
  rect(279, 370, 30, 15);
  rect(267, 356, 29, 9);
  rect(288, 337, 10, 18);
  strokeWeight(2);
  fill(0);
  line(104, 55, 104, 116);

  fill(0);
  line(240, 322, 307, 326);
  line(240, 328, 307, 331);

  for (var e = 260; e < 385; e += 4) {
    line(240, e, 307, e);
  }
  fill(0);
  rect(237, 329, 40, 30);
  rect(462, 349, 100, 70);

  strokeWeight(3);
  for (var q = 111; q < 200; q += 5) {
    line(q, 31, q, 115);
  }

  strokeWeight(0);

  fill(b);
  rect(74, 31, 33, 5);
  rect(87, 36, 20, 8);

  rect(386, 33, 60, 10);
  rect(399, 27, 30, 10);
  rect(439, 22, 40, 12);

  rect(386, 22, 7, 7);
  rect(434, 24, 7, 5);
  rect(386, 41, 7, 7);
  rect(386, 53, 60, 60);
  rect(434, 43, 10, 10);
  rect(402, 40, 29, 7);
  rect(446, 39, 36, 8);
  rect(446, 53, 36, 8);
  rect(446, 68, 36, 8);
  rect(446, 83, 36, 8);
  rect(446, 98, 36, 8);
  fill(230);
  circle(99, 175, 20);

  //seguidilla de cuadrados 1
  fill(0);
  rect(282, 141, 40, 40);
  fill(230);
  rect(285, 144, 40, 40);
  fill(0);
  rect(288, 147, 40, 40);
  fill(230);
  rect(291, 150, 40, 40);
  fill(0);
  rect(294, 153, 40, 40);
  fill(230);
  rect(297, 156, 40, 40);
  fill(0);
  rect(300, 159, 40, 40);
  fill(230);
  rect(303, 162, 40, 40);

  fill(0);
  rect(306, 165, 40, 40);
  fill(230);
  rect(309, 168, 40, 40);
  fill(0);
  rect(312, 171, 40, 40);
  fill(230);
  rect(315, 174, 40, 40);
  fill(0);
  rect(318, 177, 40, 40);
  fill(230);
  rect(321, 180, 40, 40);
  fill(0);
  rect(324, 183, 40, 40);
  fill(230);
  rect(327, 186, 40, 40);

  fill(0);
  rect(330, 189, 40, 40);
  fill(230);
  rect(333, 192, 40, 40);
  fill(0);
  rect(336, 195, 40, 40);
  fill(230);
  rect(339, 198, 40, 40);
  fill(0);
  rect(342, 201, 40, 40);
  fill(230);
  rect(345, 204, 40, 40);
  fill(0);
  rect(348, 207, 40, 40);
  fill(230);
  rect(351, 210, 40, 40);

  fill(0);
  rect(354, 213, 40, 40);
  fill(230);
  rect(357, 216, 40, 40);
  fill(0);
  rect(360, 219, 40, 40);
  fill(230);
  rect(363, 222, 40, 40);
  fill(0);
  rect(366, 225, 40, 40);
  fill(230);
  rect(369, 228, 40, 40);
  fill(0);
  rect(372, 231, 40, 40);
  fill(230);
  rect(375, 234, 40, 40);

  fill(0);
  rect(378, 237, 40, 40);
  fill(230);
  rect(381, 240, 40, 40);
  fill(0);
  rect(384, 243, 40, 40);
  fill(230);
  rect(387, 246, 40, 40);
  fill(0);
  rect(390, 249, 40, 40);
  fill(230);
  rect(393, 252, 40, 40);
  fill(0);
  rect(396, 255, 40, 40);
  fill(150);
  rect(399, 258, 40, 40);

  // seguidilla de cuadrados 1
  fill(0);
  rect(241, 141, 40, 40);
  fill(230);
  rect(244, 144, 40, 40);
  fill(0);
  rect(247, 147, 40, 40);
  fill(230);
  rect(250, 150, 40, 40);
  fill(0);
  rect(253, 153, 40, 40);
  fill(230);
  rect(256, 156, 40, 40);
  fill(0);
  rect(259, 159, 40, 40);
  fill(230);
  rect(262, 162, 40, 40);
  fill(0);
  rect(265, 165, 40, 40);

  fill(230);
  rect(268, 168, 40, 40);
  fill(0);
  rect(271, 171, 40, 40);
  fill(230);
  rect(274, 174, 40, 40);
  fill(0);
  rect(277, 177, 40, 40);

  fill(230);
  rect(279, 179, 40, 40);
  fill(0);
  rect(282, 182, 40, 40);
  fill(230);
  rect(285, 185, 40, 40);
  fill(0);
  rect(288, 188, 40, 40);

  fill(230);
  rect(291, 191, 40, 40);
  fill(0);
  rect(294, 194, 40, 40);
  fill(230);
  rect(297, 197, 40, 40);
  fill(0);
  rect(300, 200, 40, 40);

  fill(230);
  rect(303, 203, 40, 40);
  fill(0);
  rect(306, 206, 40, 40);
  fill(230);
  rect(309, 209, 40, 40);
  fill(0);
  rect(312, 212, 40, 40);
  fill(230);
  rect(315, 215, 40, 40);
  fill(0);
  rect(318, 218, 40, 40);
  fill(230);
  rect(321, 221, 40, 40);
  fill(0);
  rect(324, 224, 40, 40);
  fill(230);
  rect(327, 227, 40, 40);
  fill(0);
  rect(330, 230, 40, 40);
  fill(230);
  rect(333, 233, 40, 40);
  fill(0);
  rect(336, 236, 40, 40);
  fill(150);
  rect(339, 239, 40, 40);

  ////////seguidilla de cuadrados 2

  fill(0);
  rect(356, 114, 40, 40);
  fill(230);
  rect(353, 117, 40, 40);
  fill(0);
  rect(350, 120, 40, 40);
  fill(230);
  rect(347, 123, 40, 40);

  fill(0);
  rect(344, 126, 40, 40);
  fill(230);
  rect(341, 129, 40, 40);
  fill(0);
  rect(338, 132, 40, 40);
  fill(230);
  rect(334, 135, 40, 40);

  fill(0);
  rect(331, 138, 40, 40);
  fill(230);
  rect(328, 141, 40, 40);
  fill(0);
  rect(325, 144, 40, 40);
  fill(230);
  rect(322, 147, 40, 40);
  fill(0);
  rect(319, 150, 40, 40);
  fill(230);
  rect(316, 153, 40, 40);
  fill(0);
  rect(313, 156, 40, 40);
  fill(230);
  rect(310, 159, 40, 40);
  fill(0);
  rect(307, 162, 40, 40);
  fill(230);
  rect(304, 165, 40, 40);
  fill(0);
  rect(301, 168, 40, 40);
  fill(230);
  rect(298, 171, 40, 40);

  fill(0);
  rect(295, 174, 40, 40);
  fill(230);
  rect(292, 178, 40, 40);
  fill(0);
  rect(289, 181, 40, 40);
  fill(230);
  rect(286, 184, 40, 40);

  fill(0);
  rect(283, 187, 40, 40);
  fill(230);
  rect(280, 190, 40, 40);
  fill(0);
  rect(277, 193, 40, 40);
  fill(230);
  rect(274, 196, 40, 40);

  fill(0);
  rect(271, 199, 40, 40);
  fill(230);
  rect(268, 202, 40, 40);
  fill(0);
  rect(265, 205, 40, 40);
  fill(150);
  rect(262, 208, 40, 40);

  //seguidilla de cuadrados 3
  fill(0);
  rect(175, 186, 40, 40);
  fill(250);
  rect(178, 189, 40, 40);
  fill(0);
  rect(181, 192, 40, 40);
  fill(250);
  rect(184, 195, 40, 40);
  fill(0);
  rect(187, 198, 40, 40);
  fill(250);
  rect(190, 201, 40, 40);
  fill(0);
  rect(193, 204, 40, 40);
  fill(250);
  rect(196, 207, 40, 40);
  fill(0);
  rect(199, 210, 40, 40);
  fill(250);
  rect(202, 213, 40, 40);
  fill(0);
  rect(205, 216, 40, 40);
  fill(250);
  rect(208, 219, 40, 40);
  fill(0);
  rect(211, 222, 40, 40);
  fill(250);
  rect(214, 225, 40, 40);
  fill(0);
  rect(217, 228, 40, 40);
  fill(250);
  rect(220, 231, 40, 40);
  fill(0);
  rect(223, 234, 40, 40);
  fill(250);
  rect(226, 237, 40, 40);
  fill(0);
  rect(229, 240, 40, 40);

  fill(250);
  rect(232, 243, 40, 40);
  fill(0);
  rect(235, 246, 40, 40);
  fill(250);
  rect(238, 249, 40, 40);
  fill(0);
  rect(241, 253, 40, 40);
  fill(150);
  rect(244, 256, 40, 40);

  /////

  fill(0);
  rect(402, 301, 150, 69);
  rect(402, 298, 90, 30);
  rect(439, 279, 70, 20);

  strokeWeight(2);
  fill(0);

  fill(0);
  line(402, 370, 402, 457);

  for (var ww = 402; ww < 500; ww += 4) {
    line(ww, 370, ww, 457);
  }

  rect(164, 304, 70, 30);

  for (var q = 25; q < 200; q += 5) {
    line(25, q, 229, q);
  }

  fill(0);
  rect(19, 248, 150, 90);

  fill(0);
  rect(115, 250, 70, 20);
  rect(28, 322, 130, 120);

  push();
  for (bv = 17; bv < 100; bv += 5) {
    stroke(250);
    point(bv, 340);
  }

  for (ws = 17; ws < 100; ws += 5) {
    point(ws, 345);
  }

  for (re = 17; re < 100; re += 5) {
    point(re, 350);
  }
  for (qh = 17; qh < 100; qh += 5) {
    point(qh, 355);
  }
  for (jn = 17; jn < 100; jn += 5) {
    point(jn, 360);
  }
  for (kk = 17; kk < 100; kk += 5) {
    point(kk, 365);
  }
  for (rs = 17; rs < 100; rs += 5) {
    point(rs, 370);
  }
  for (df = 17; rs < 100; rs += 5) {
    point(df, 375);
  }
  for (tq = 17; tq < 100; tq += 5) {
    point(tq, 380);
  }

  for (nm = 17; nm < 100; nm += 5) {
    point(nm, 385);
  }
  for (uj = 17; uj < 100; uj += 5) {
    point(uj, 390);
  }
  stroke(250);
  for (vf = 17; vf < 100; vf += 5) {
    point(vf, 395);
  }

  for (sr = 17; sr < 100; sr += 5) {
    point(sr, 400);
  }

  for (qw = 17; qw < 100; qw += 5) {
    point(qw, 405);
  }

  for (ml = 17; ml < 100; ml += 5) {
    point(ml, 410);
  }

  for (ll = 17; ll < 100; ll += 5) {
    point(ll, 415);
  }
  for (hg = 17; hg < 100; hg += 5) {
    point(hg, 420);
  }
  for (jy = 17; jy < 100; jy += 5) {
    point(jy, 425);
  }

  for (bn = 17; bn < 100; bn += 5) {
    point(bn, 430);
  }

  for (zp = 17; zp < 100; zp += 5) {
    point(zp, 435);
  }

  for (tr = 17; tr < 100; tr += 5) {
    point(tr, 440);
  }

  for (tr = 17; tr < 100; tr += 5) {
    point(tr, 445);
  }

  for (uh = 17; uh < 100; uh += 5) {
    point(uh, 450);
  }
  for (yb = 17; yb < 100; yb += 5) {
    point(yb, 455);
  }

  for (er = 17; er < 475; er += 5) {
    point(er, 460);
  }

  for (yt = 17; yt < 475; yt += 5) {
    point(yt, 465);
  }
  for (yy = 17; yy < 475; yy += 5) {
    point(yy, 470);
  }
  for (ey = 17; ey < 475; ey += 5) {
    point(ey, 475);
  }

  for (we = 17; we < 475; we += 5) {
    point(we, 480);
  }
  pop();

  
  stroke(0)

  
}
