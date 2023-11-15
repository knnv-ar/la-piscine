function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  fill(255);
  rect(30, 30, 412, 412);
}

function draw() {
  if (keyIsPressed == true) {
    noStroke();
    circle(236, 236, 280);
    fill(0);
  } else {
    circle(236, 236, 280);

    strokeWeight(2);
    stroke(237);

    beginShape(LINES);
    {
      fill(248);
      //lineas horizontales
      vertex(190, 135);
      vertex(194, 135);

      vertex(210, 135);
      vertex(215, 135);

      vertex(220, 135);
      vertex(225, 135);

      vertex(240, 135);
      vertex(242, 135);

      vertex(270, 135);
      vertex(272, 135);

      //-------
      vertex(170, 150);
      vertex(175, 150);

      vertex(200, 150);
      vertex(202, 150);

      vertex(210, 150);
      vertex(215, 150);

      vertex(220, 150);
      vertex(223, 150);

      vertex(230, 150);
      vertex(237, 150);

      vertex(250, 150);
      vertex(260, 150);

      vertex(280, 150);
      vertex(285, 150);

      vertex(295, 150);
      vertex(297, 150);
      //-----------
      vertex(140, 175);
      vertex(143, 175);

      vertex(154, 175);
      vertex(155, 175);

      vertex(170, 175);
      vertex(173, 175);

      vertex(210, 175);
      vertex(215, 175);

      vertex(240, 175);
      vertex(245, 175);

      vertex(270, 175);
      vertex(272, 175);

      vertex(290, 175);
      vertex(293, 175);

      vertex(310, 175);
      vertex(315, 175);

      vertex(330, 175);
      vertex(331, 175);

      //--------
      vertex(150, 190);
      vertex(160, 190);

      vertex(210, 190);
      vertex(215, 190);

      vertex(230, 190);
      vertex(240, 190);

      vertex(280, 190);
      vertex(285, 190);

      vertex(290, 190);
      vertex(295, 190);

      vertex(310, 190);
      vertex(312, 190);
      //-----------
      vertex(130, 205);
      vertex(135, 205);

      vertex(170, 205);
      vertex(171, 205);

      vertex(210, 205);
      vertex(215, 205);

      vertex(240, 205);
      vertex(245, 205);

      vertex(290, 205);
      vertex(292, 205);

      vertex(310, 205);
      vertex(315, 205);

      vertex(330, 205);
      vertex(345, 205);
      //-----------
      vertex(140, 220);
      vertex(143, 220);

      vertex(172, 220);
      vertex(177, 220);

      vertex(200, 220);
      vertex(210, 220);

      vertex(228, 220);
      vertex(237, 220);

      vertex(248, 220);
      vertex(249, 220);

      vertex(257, 220);
      vertex(260, 220);

      vertex(295, 220);
      vertex(283, 220);

      vertex(320, 220);
      vertex(325, 220);

      vertex(348, 220);
      vertex(349, 220);

      //-----------
      vertex(120, 235);
      vertex(125, 235);

      vertex(168, 235);
      vertex(178, 235);

      vertex(200, 235);
      vertex(208, 235);

      vertex(243, 235);
      vertex(247, 235);

      vertex(274, 235);
      vertex(285, 235);

      vertex(298, 235);
      vertex(305, 235);

      vertex(323, 235);
      vertex(326, 235);

      vertex(349, 235);
      vertex(354, 235);
      //---------
      vertex(130, 250);
      vertex(135, 250);

      vertex(150, 250);
      vertex(155, 250);

      vertex(180, 250);
      vertex(190, 250);

      vertex(200, 250);
      vertex(202, 250);

      vertex(210, 250);
      vertex(215, 250);

      vertex(220, 250);
      vertex(230, 250);

      vertex(240, 250);
      vertex(245, 250);

      vertex(250, 250);
      vertex(252, 250);

      vertex(270, 250);
      vertex(271, 250);

      vertex(280, 250);
      vertex(290, 250);

      vertex(310, 250);
      vertex(315, 250);

      vertex(330, 250);
      vertex(345, 250);
      //-------------
      vertex(128, 265);
      vertex(129, 265);

      vertex(164, 265);
      vertex(171, 265);

      vertex(173, 265);
      vertex(180, 265);

      vertex(204, 265);
      vertex(207, 265);

      vertex(214, 265);
      vertex(221, 265);

      vertex(252, 265);
      vertex(260, 265);

      vertex(284, 265);
      vertex(291, 265);

      vertex(294, 265);
      vertex(296, 265);

      vertex(327, 265);
      vertex(335, 265);

      vertex(348, 265);
      vertex(349, 265);

      //------------
      vertex(129, 280);
      vertex(133, 280);

      vertex(156, 280);
      vertex(166, 280);

      vertex(192, 280);
      vertex(193, 280);

      vertex(208, 280);
      vertex(214, 280);

      vertex(212, 280);
      vertex(213, 280);

      vertex(232, 280);
      vertex(233, 280);

      vertex(281, 280);
      vertex(291, 280);

      vertex(304, 280);
      vertex(314, 280);

      vertex(338, 280);
      vertex(342, 280);
      //----------
      vertex(170, 295);
      vertex(175, 295);

      vertex(185, 295);
      vertex(195, 295);

      vertex(200, 295);
      vertex(201, 295);

      vertex(210, 295);
      vertex(215, 295);

      vertex(230, 295);
      vertex(232, 295);

      vertex(270, 295);
      vertex(280, 295);

      vertex(310, 295);
      vertex(315, 295);

      //------------
      vertex(145, 310);
      vertex(148, 310);

      vertex(163, 310);
      vertex(165, 310);

      vertex(196, 310);
      vertex(208, 310);

      vertex(216, 310);
      vertex(228, 310);

      vertex(228, 310);
      vertex(229, 310);

      vertex(246, 310);
      vertex(258, 310);

      vertex(266, 310);
      vertex(268, 310);

      vertex(306, 310);
      vertex(308, 310);

      vertex(320, 310);
      vertex(322, 310);

      vertex(330, 310);
      vertex(332, 310);
      //--------------

      vertex(160, 325);
      vertex(163, 325);

      vertex(178, 325);
      vertex(180, 325);

      vertex(195, 325);
      vertex(202, 325);

      vertex(208, 325);
      vertex(215, 325);

      vertex(228, 325);
      vertex(233, 325);

      vertex(259, 325);
      vertex(269, 325);

      vertex(289, 325);
      vertex(290, 325);

      vertex(300, 325);
      vertex(301, 325);

      vertex(308, 325);
      vertex(311, 325);

      //--------------
      vertex(175, 340);
      vertex(179, 340);

      vertex(187, 340);
      vertex(195, 340);

      vertex(203, 340);
      vertex(205, 340);

      vertex(233, 340);
      vertex(235, 340);

      vertex(253, 340);
      vertex(257, 340);

      vertex(273, 340);
      vertex(279, 340);

      vertex(282, 340);
      vertex(283, 340);

      vertex(296, 340);
      vertex(299, 340);

      //lineas verticales

      vertex(120, 210);
      vertex(120, 211);

      vertex(120, 222);
      vertex(120, 229);

      vertex(120, 242);
      vertex(120, 269);
      //------------------
      vertex(135, 180);
      vertex(135, 188);

      vertex(135, 200);
      vertex(135, 205);

      vertex(135, 211);
      vertex(135, 212);

      vertex(135, 214);
      vertex(135, 228);

      vertex(135, 257);
      vertex(135, 260);

      vertex(135, 290);
      vertex(135, 300);

      //----------------
      vertex(165, 145);
      vertex(165, 146);

      vertex(165, 165);
      vertex(165, 187);

      vertex(165, 205);
      vertex(165, 207);

      vertex(165, 235);
      vertex(165, 237);

      vertex(165, 239);
      vertex(165, 240);

      vertex(165, 277);
      vertex(165, 287);

      vertex(165, 315);
      vertex(165, 327);
      //----------------
      vertex(150, 154);
      vertex(150, 158);

      vertex(150, 172);
      vertex(150, 179);

      vertex(150, 188);
      vertex(150, 193);

      vertex(150, 203);
      vertex(150, 204);

      vertex(150, 224);
      vertex(150, 227);

      vertex(150, 250);
      vertex(150, 258);

      vertex(150, 272);
      vertex(150, 285);

      vertex(150, 304);
      vertex(150, 319);
      //-----------------
      vertex(180, 135);
      vertex(180, 140);

      vertex(180, 155);
      vertex(180, 156);

      vertex(180, 188);
      vertex(180, 195);

      vertex(180, 210);
      vertex(180, 211);

      vertex(180, 228);
      vertex(180, 234);

      vertex(180, 240);
      vertex(180, 246);

      vertex(180, 279);
      vertex(180, 285);

      vertex(180, 293);
      vertex(180, 294);

      vertex(180, 327);
      vertex(180, 337);

      vertex(180, 347);
      vertex(180, 349);
      //---------------
      vertex(195, 156);
      vertex(195, 170);

      vertex(195, 196);
      vertex(195, 191);

      vertex(195, 226);
      vertex(195, 236);

      vertex(195, 275);
      vertex(195, 280);

      vertex(195, 295);
      vertex(195, 300);

      vertex(195, 318);
      vertex(195, 324);

      vertex(195, 333);
      vertex(195, 335);

      vertex(195, 356);
      vertex(195, 357);

      //-------------

      vertex(210, 136);
      vertex(210, 170);

      vertex(210, 196);
      vertex(210, 200);

      vertex(210, 246);
      vertex(210, 250);

      vertex(210, 278);
      vertex(210, 279);

      vertex(210, 294);
      vertex(210, 295);

      vertex(210, 311);
      vertex(210, 318);

      vertex(210, 326);
      vertex(210, 330);

      vertex(210, 333);
      vertex(210, 343);

      vertex(210, 354);
      vertex(210, 362);
      //-----------------
      vertex(225, 126);
      vertex(225, 130);

      vertex(225, 136);
      vertex(225, 140);

      vertex(225, 155);
      vertex(225, 160);

      vertex(225, 166);
      vertex(225, 170);

      vertex(225, 206);
      vertex(225, 214);

      vertex(225, 247);
      vertex(225, 257);

      vertex(225, 286);
      vertex(225, 295);

      vertex(225, 316);
      vertex(225, 322);

      vertex(225, 346);
      vertex(225, 350);
      //--------------------
      vertex(240, 132);
      vertex(240, 137);

      vertex(240, 145);
      vertex(240, 155);

      vertex(240, 183);
      vertex(240, 193);

      vertex(240, 233);
      vertex(240, 245);

      vertex(240, 273);
      vertex(240, 283);

      vertex(240, 291);
      vertex(240, 292);

      vertex(240, 302);
      vertex(240, 303);

      vertex(240, 326);
      vertex(240, 328);

      vertex(240, 345);
      vertex(240, 352);

      vertex(240, 363);
      vertex(240, 364);
      //-------------
      vertex(255, 120);
      vertex(255, 122);

      vertex(255, 180);
      vertex(255, 190);

      vertex(255, 243);
      vertex(255, 245);

      vertex(255, 280);
      vertex(255, 290);

      vertex(255, 325);
      vertex(255, 330);

      vertex(255, 356);
      vertex(255, 360);
      //--------------
      vertex(270, 125);
      vertex(270, 128);

      vertex(270, 135);
      vertex(270, 138);

      vertex(270, 143);
      vertex(270, 146);

      vertex(270, 155);
      vertex(270, 156);

      vertex(270, 185);
      vertex(270, 190);

      vertex(270, 205);
      vertex(270, 226);

      vertex(270, 255);
      vertex(270, 256);

      vertex(270, 279);
      vertex(270, 289);

      vertex(270, 324);
      vertex(270, 334);

      vertex(270, 355);
      vertex(270, 356);

      //-------------
      vertex(285, 129);
      vertex(285, 133);

      vertex(285, 145);
      vertex(285, 147);

      vertex(285, 160);
      vertex(285, 170);

      vertex(285, 192);
      vertex(285, 193);

      vertex(285, 215);
      vertex(285, 220);

      vertex(285, 225);
      vertex(285, 226);

      vertex(285, 305);
      vertex(285, 306);

      vertex(285, 315);
      vertex(285, 320);

      vertex(285, 325);
      vertex(285, 327);

      vertex(285, 340);
      vertex(285, 345);
      //-----------------
      vertex(300, 140);
      vertex(300, 145);

      vertex(300, 168);
      vertex(300, 180);

      vertex(300, 224);
      vertex(300, 233);

      vertex(300, 289);
      vertex(300, 295);

      vertex(300, 310);
      vertex(300, 320);

      vertex(300, 340);
      vertex(300, 341);
      //----------
      vertex(315, 145);
      vertex(315, 157);

      vertex(315, 159);
      vertex(315, 160);

      vertex(315, 185);
      vertex(315, 197);

      vertex(315, 217);
      vertex(315, 227);

      vertex(315, 269);
      vertex(315, 274);

      vertex(315, 305);
      vertex(315, 310);

      vertex(315, 314);
      vertex(315, 320);

      vertex(315, 333);
      vertex(315, 334);

      //----------------
      vertex(330, 159);
      vertex(330, 163);

      vertex(330, 175);
      vertex(330, 187);

      vertex(330, 199);
      vertex(330, 208);

      vertex(330, 230);
      vertex(330, 240);

      vertex(330, 275);
      vertex(330, 287);

      vertex(330, 315);
      vertex(330, 317);

      vertex(330, 322);
      vertex(330, 323);
      //-----------------
      vertex(345, 185);
      vertex(345, 187);

      vertex(345, 215);
      vertex(345, 217);

      vertex(345, 262);
      vertex(345, 284);

      vertex(345, 300);
      vertex(345, 303);
      //--------------
      vertex(360, 205);
      vertex(360, 207);

      vertex(360, 216);
      vertex(360, 220);

      vertex(360, 233);
      vertex(360, 247);

      vertex(360, 269);
      vertex(360, 270);

      endShape();
    }
  }
}
