// Farsa sostenida -  Álvaro Oxley

let paso2 = 8;
let largo = 10;

let lines = 10;
let spacing = 15;
let freq = 0.05;
let amp = 20;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  angleMode(RADIANS);
  
  //-------------- OBJETOS ------------------

 
}

function draw() {
  background("#000000");
  stroke("#060606");
  fill("#000000");
  strokeWeight(2);
  stroke("rgb(140,140,140)");

  for (let x2 = 0; x2 < width; x2 += paso2) {
    for (let y2 = 0; y2 < height; y2 += paso2) {
      let lineaY2 = 255;

      if (y2 > lineaY2 && y2 < lineaY2 + 200) {
        
        // 

        let rawangle = sin(x2 * 0.05 + y2 * 0.03 + frameCount * 0.045) * 15;
        let angulo = radians(rawangle);

        // Rango de -15° a +15° aprox

        push();
        translate(x2, y2);
        rotate(angulo);
        line(-largo / 2, 0, largo / 2, 0);
        pop();
      }
    }
  }

  let offset = PI / 10; // equivalente a PI/10 en grados
  let t = frameCount * 0.015; // velocidad de animación razonable

  push();
  stroke("#FFFFFF");
  noFill();
  translate(260,50);

  for (let j = -lines / 2; j < lines / 2; j++) {
    beginShape();
    for (let x = -width / 2; x <= width / 2; x += 5) {
      let y = sin(x * freq + j * offset + t) * amp + j * spacing;
      vertex(x, y);
    }
    endShape();
  }
  pop();
  
  stroke(0,0,0)
  fill(0,0,0,)
  beginShape()
  vertex(0,65)
  vertex(166,99)
  vertex(512,108)
  vertex(512,226)
  vertex(0,205)
  endShape(CLOSE)
  
   //Castillo
  stroke("#E9E9E9");
  fill("#E9E9E9");
  strokeWeight(2);
  beginShape();
  vertex(238, 253);
  vertex(237, 249);
  vertex(239, 247);
  vertex(239, 204);
  vertex(242, 208);
  vertex(240, 171);
  vertex(243, 165);
  vertex(242, 130);
  vertex(245, 125);
  vertex(245, 48);
  vertex(286, 53);
  vertex(300, 58);
  vertex(308, 248);
  endShape(CLOSE);

  stroke("#A5A5A5");
  fill("#A5A5A5");
  beginShape();
  vertex(289, 64);
  vertex(295, 73);
  vertex(299, 86);
  vertex(305, 246);
  vertex(300, 248);
  vertex(295, 233);
  vertex(289, 67);
  endShape(CLOSE);

  //Fuego Claros

  stroke("#DEDEDE");
  fill("#DEDEDE");
  quad(226, 40, 229, 45, 221, 43, 213, 40);
  quad(196, 34, 183, 34, 182, 34, 166, 31);

  stroke("#2C2C2C");
  strokeWeight(1);

  beginShape();
  vertex(304, 50);
  vertex(315, 42);
  vertex(315, 48);
  vertex(317, 38);
  vertex(317, 47);
  vertex(315, 52);
  vertex(320, 53);
  vertex(326, 50);
  vertex(328, 52);
  vertex(331, 51);
  vertex(328, 56);
  vertex(324, 59);
  vertex(321, 63);
  vertex(323, 67);
  vertex(318, 65);
  vertex(320, 71);
  vertex(317, 71);
  vertex(313, 68);
  vertex(312, 62);
  endShape();

  beginShape();
  vertex(300, 27);
  vertex(302, 30);
  vertex(306, 30);
  vertex(309, 27);
  vertex(309, 22);
  endShape();

  stroke("#DEDEDE");
  line(298, 55, 298, 45);
  line(294, 48, 294, 53);
  line(290, 53, 290, 50);

  beginShape();
  vertex(262, 42);
  vertex(258, 39);
  vertex(261, 32);
  vertex(263, 32);
  vertex(264, 35);
  vertex(269, 37);
  vertex(271, 37);
  vertex(272, 45);
  vertex(268, 45);
  endShape();

  beginShape();
  vertex(235, 42);
  vertex(231, 37);
  vertex(230, 31);
  vertex(240, 32);
  vertex(243, 37);
  vertex(249, 37);
  vertex(249, 35);
  vertex(257, 36);
  vertex(258, 43);
  endShape();

  beginShape();
  vertex(243, 31);
  vertex(246, 21);
  vertex(244, 16);
  vertex(246, 10);
  vertex(245, 4);
  vertex(250, 10);
  vertex(249, 16);
  vertex(251, 20);
  vertex(255, 27);
  endShape();

  beginShape();
  vertex(264, 29);
  vertex(262, 23);
  vertex(260, 12);
  vertex(264, 13);
  vertex(266, 24);
  vertex(271, 21);
  vertex(272, 13);
  vertex(274, 30);
  endShape();

  beginShape();
  vertex(274, 38);
  vertex(274, 32);
  vertex(276, 14);
  vertex(270, 14);
  vertex(265, 11);
  vertex(265, 4);
  vertex(262, 0);
  vertex(312, 0);
  vertex(316, 4);
  vertex(314, 10);
  vertex(308, 12);
  vertex(276, 39);
  endShape();

  //Fuego Oscuros
  stroke("#7A7A7A");
  fill("#7A7A7A");
  beginShape();
  vertex(303, 65);
  vertex(302, 65);
  vertex(304, 62);
  vertex(307, 62);
  vertex(309, 65);
  vertex(310, 66);
  vertex(312, 64);
  vertex(314, 62);
  vertex(317, 61);
  vertex(313, 60);
  vertex(313, 58);
  vertex(315, 54);
  vertex(312, 57);
  vertex(310, 54);
  vertex(309, 52);
  vertex(307, 55);
  vertex(301, 55);
  vertex(301, 56);
  vertex(301, 69);
  endShape();

  beginShape();
  vertex(251, 48);
  vertex(250, 45);
  vertex(248, 46);
  vertex(245, 44);
  vertex(244, 44);
  vertex(240, 48);
  vertex(235, 48);
  vertex(236, 44);
  vertex(238, 42);
  vertex(241, 43);
  vertex(239, 42);
  vertex(242, 40);
  vertex(244, 42);
  vertex(247, 42);
  vertex(250, 44);
  vertex(252, 40);
  vertex(254, 44);
  vertex(257, 45);
  vertex(260, 45);
  vertex(263, 49);
  endShape();

  beginShape();
  vertex(260, 32);
  vertex(256, 25);
  vertex(254, 28);
  vertex(252, 25);
  vertex(251, 30);
  vertex(249, 30);
  vertex(244, 32);
  vertex(248, 34);
  vertex(254, 34);
  vertex(258, 38);
  vertex(260, 32);
  endShape();

  beginShape();
  vertex(263, 28);
  vertex(265, 36);
  vertex(269, 36);
  vertex(269, 34);
  vertex(271, 34);
  vertex(271, 31);
  vertex(274, 32);
  vertex(275, 30);
  vertex(266, 30);
  vertex(264, 28);
  endShape();

  beginShape();
  vertex(258, 44);
  vertex(258, 40);
  vertex(263, 44);
  vertex(264, 39);
  vertex(268, 42);
  vertex(269, 48);
  vertex(271, 46);
  vertex(275, 42);
  vertex(277, 43);
  vertex(278, 50);
  endShape();

  //Rayo #E9E9E9 #A5A5A5
  stroke("#000000");
  strokeWeight(2);
  fill("#E9E9E9");
  beginShape();
  vertex(370, 1);
  vertex(371, 30);
  vertex(365, 31);
  vertex(365, 23);
  vertex(341, 1);
  vertex(348, 1);
  vertex(360, 7);
  vertex(362, 1);
  endShape();

  stroke("#000");
  beginShape();
  vertex(336, 1);
  vertex(341, 40);
  vertex(307, 21);
  vertex(294, 33);
  vertex(308, 37);
  vertex(278, 44);
  vertex(275, 42);
  vertex(275, 35);
  vertex(289, 10);
  vertex(288, 29);
  vertex(309, 13);
  vertex(334, 28);
  vertex(330, 1);
  endShape(CLOSE);

  //Ventanas
  fill("#000");
  quad(252, 117, 262, 122, 262, 136, 251, 138);
  quad(264, 251, 263, 248, 267, 246, 267, 251);
  quad(274, 114, 274, 136, 284, 137, 284, 114);

  beginShape();
  vertex(273, 87);
  vertex(258, 89);
  vertex(257, 69);
  vertex(261, 65);
  vertex(268, 69);
  vertex(269, 75);
  vertex(273, 77);
  endShape(CLOSE);

  //Sombra Torre
  strokeWeight(1);
  line(287, 69, 288, 92);
  strokeWeight(2);
  stroke("#3B3B3B");
  line(288, 96, 288, 106);
  stroke("#000");
  fill("#000");
  quad(299, 227, 294, 231, 293, 252, 298, 248);
  quad(240, 198, 240, 206, 235, 206, 235, 199);
  line(289, 116, 291, 177);

  beginShape();
  vertex(295, 227);
  vertex(295, 198);
  vertex(294, 196);
  vertex(293, 180);
  vertex(291, 180);
  vertex(291, 198);
  vertex(293, 199);
  vertex(291, 220);
  vertex(293, 222);
  vertex(294, 229);
  endShape();

  noFill();
  beginShape();
  vertex(245, 46);
  vertex(244, 123);
  vertex(242, 131);
  vertex(243, 166);
  vertex(240, 171);
  vertex(241, 207);
  vertex(239, 207);
  vertex(239, 246);
  vertex(236, 249);
  vertex(236, 252);
  endShape();
  //trazos
  
  
  stroke("#FFFFFF");
  fill("#FFFFFF");
  strokeWeight(4);
  line(1, 257, 301, 255);
  line(25, 259, 275, 257);
  line(32, 261, 276, 259);

  quad(29, 267, 5, 270, 5, 287, 36, 287);
  quad(30, 262, 32, 287, 163, 281, 275, 259);
  quad(304, 260, 304, 264, 233, 268, 273, 258);
  quad(40, 289, 42, 299, 136, 295, 137, 284);
  quad(119, 295, 186, 306, 128, 312, 45, 299);
  quad(204, 308, 206, 312, 1, 322, 127, 312);
  triangle(137, 288, 137, 295, 169, 290);
  quad(65, 320, 103, 328, 57, 330, 15, 326);
  triangle(1, 286, 1, 273, 3, 269);

  beginShape();
  vertex(510, 287);
  vertex(499, 287);
  vertex(500, 285);
  vertex(508, 284);
  vertex(510, 283);
  vertex(510, 280);
  vertex(501, 277);
  vertex(500, 275);
  vertex(496, 275);
  vertex(498, 279);
  vertex(480, 283);
  vertex(477, 279);
  vertex(473, 279);
  vertex(472, 275);
  vertex(467, 279);
  vertex(466, 276);
  vertex(458, 275);
  vertex(482, 271);
  vertex(510, 271);
  endShape(CLOSE);

  beginShape();
  vertex(55, 332);
  vertex(11, 330);
  vertex(13, 333);
  vertex(38, 334);
  vertex(24, 339);
  vertex(52, 339);
  vertex(61, 342);
  vertex(47, 345);
  vertex(79, 342);
  vertex(77, 339);
  vertex(67, 339);
  vertex(75, 337);
  endShape();

  beginShape();
  vertex(39, 293);
  vertex(22, 293);
  vertex(9, 297);
  vertex(38, 301);
  endShape(CLOSE);

  //--------------- MASCARAS -----------------
  //Agua

  stroke("#000000");
  fill("#000000");
  quad(1, 261, 21, 261, 27, 264, 1, 270);
  beginShape();
  vertex(1, 290);
  vertex(37, 288);
  vertex(37, 290);
  vertex(23, 290);
  vertex(1, 297);
  endShape();

  beginShape();
  vertex(1, 307);
  vertex(31, 306);
  vertex(39, 311);
  vertex(40, 301);
  vertex(107, 310);
  vertex(40, 313);
  vertex(1, 317);
  endShape();

  beginShape();
  vertex(302, 252);
  vertex(308, 259);
  vertex(308, 263);
  vertex(283, 271);
  vertex(236, 275);
  vertex(213, 278);
  vertex(212, 284);
  vertex(236, 287);
  vertex(236, 298);
  vertex(282, 303);
  vertex(304, 306);
  vertex(318, 312);
  vertex(220, 318);
  vertex(193, 321);
  vertex(217, 323);
  vertex(242, 326);
  vertex(246, 329);
  vertex(214, 331);
  vertex(230, 334);
  vertex(249, 342);
  vertex(291, 348);
  vertex(354, 352);
  vertex(368, 356);
  vertex(255, 365);
  vertex(309, 367);
  vertex(473, 382);
  vertex(492, 390);
  vertex(494, 396);
  vertex(510, 398);
  vertex(511, 309);
  vertex(427, 298);
  vertex(455, 290);
  vertex(420, 289);
  vertex(438, 284);
  vertex(439, 276);
  vertex(482, 271);
  vertex(489, 271);
  vertex(509, 265);
  vertex(509, 253);
  endShape(CLOSE);

  beginShape();
  vertex(1, 333);
  vertex(26, 336);
  vertex(12, 339);
  vertex(42, 342);
  vertex(51, 350);
  vertex(70, 346);
  vertex(90, 348);
  vertex(114, 350);
  vertex(129, 350);
  vertex(132, 353);
  vertex(142, 353);
  vertex(150, 351);
  vertex(158, 356);
  vertex(161, 351);
  vertex(169, 353);
  vertex(168, 353);
  vertex(163, 359);
  vertex(147, 359);
  vertex(132, 356);
  vertex(126, 361);
  vertex(112, 361);
  vertex(92, 360);
  vertex(78, 363);
  vertex(74, 361);
  vertex(68, 367);
  vertex(72, 374);
  vertex(73, 366);
  vertex(92, 366);
  vertex(106, 371);
  vertex(118, 370);
  vertex(129, 373);
  vertex(142, 375);
  vertex(155, 375);
  vertex(173, 378);
  vertex(193, 379);
  vertex(200, 379);
  vertex(199, 384);
  vertex(202, 389);
  vertex(205, 382);
  vertex(208, 379);
  vertex(216, 383);
  vertex(229, 381);
  vertex(237, 384);
  vertex(245, 381);
  vertex(252, 384);
  vertex(268, 383);
  vertex(271, 389);
  vertex(290, 390);
  vertex(298, 389);
  vertex(304, 391);
  vertex(308, 404);
  vertex(314, 412);
  vertex(315, 420);
  vertex(339, 419);
  vertex(360, 419);
  vertex(366, 423);
  vertex(377, 420);
  vertex(380, 429);
  vertex(388, 422);
  vertex(413, 422);
  vertex(441, 424);
  vertex(461, 425);
  vertex(464, 428);
  vertex(490, 432);
  vertex(465, 433);
  vertex(458, 438);
  vertex(450, 435);
  vertex(449, 437);
  vertex(378, 443);
  vertex(137, 437);
  vertex(155, 429);
  vertex(125, 422);
  vertex(121, 427);
  vertex(113, 427);
  vertex(114, 422);
  vertex(103, 421);
  vertex(85, 424);
  vertex(79, 425);
  vertex(75, 421);
  vertex(67, 419);
  vertex(50, 425);
  vertex(48, 418);
  vertex(1, 415);
  vertex(6, 413);
  vertex(17, 410);
  vertex(9, 407);
  vertex(1, 406);
  vertex(1, 405);
  endShape(CLOSE);

  beginShape();
  vertex(130, 437);
  vertex(118, 438);
  vertex(103, 436);
  vertex(97, 439);
  vertex(88, 441);
  vertex(85, 438);
  vertex(73, 440);
  vertex(54, 440);
  vertex(42, 443);
  vertex(23, 443);
  vertex(17, 438);
  vertex(12, 444);
  vertex(1, 444);
  vertex(1, 509);
  vertex(511, 510);
  vertex(508, 443);
  vertex(485, 442);
  vertex(479, 438);
  vertex(471, 444);
  vertex(450, 444);
  vertex(449, 439);
  vertex(437, 443);
  vertex(416, 442);
  vertex(388, 443);
  endShape();
  
}
