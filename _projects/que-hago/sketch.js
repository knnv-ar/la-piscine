// "¿Qué hago?"
// 2024
// Candela Di Genova
/* "¿Qué hago?" simboliza la constante búsqueda de dirección en un entorno que cambia de manera impredecible. El laberinto, que se redibuja con cada click, refleja la naturaleza fluctuante de las decisiones y los caminos que tomamos en la vida, caminos que nunca son los mismos y de los que no hay certeza alguna que nos dirijan al destino esperado. La incertidumbre y la indecisión nos congelan casi como en respuesta automática. La posición fetal nos trae de vuelta a casa, nos da seguridad en medio del caos.*/ 


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(220);
  dibujarLaberinto();
  dibujarPersonita();
}

function draw() {
  if (mouseIsPressed) {
    background(220);
    dibujarLaberinto();
    dibujarPersonita();
  }
}

function dibujarLaberinto() {
  stroke(40);
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let a = random();
      let b = random();

      if (a >= 0.4 && a <= 0.9) {
        line(x, y, x + 10, y);
      }
      if (b >= 0.4 && b <= 0.9) {
        line(x, y, x, y + 10);
      }
    }
  }
}

function dibujarPersonita() {
  //FONDO --------------------------------------------------
  stroke(220);
  strokeWeight(10);
  line(227, 132, 254, 132);
  line(217, 136, 262, 136);
  line(212, 140, 268, 140);
  line(208, 144, 271, 144);
  line(205, 148, 274, 148);
  line(202, 152, 275, 152);
  line(200, 156, 276, 156);
  line(199, 160, 277, 160);
  line(198, 164, 278, 164);
  line(198, 168, 279, 168);
  line(197, 172, 279, 172);
  line(198, 176, 280, 176);
  line(198, 180, 280, 180);
  line(199, 184, 280, 184);
  line(200, 188, 281, 188);
  line(201, 192, 281, 192);
  line(203, 196, 281, 196);
  line(205, 200, 280, 200);
  line(205, 204, 280, 204);
  line(206, 208, 279, 208);
  line(210, 212, 277, 212);
  line(221, 216, 275, 216);
  line(220, 220, 272, 220);
  line(217, 224, 266, 224);
  line(215, 228, 248, 228);
  line(213, 232, 254, 232);
  line(211, 236, 262, 236);
  line(209, 240, 269, 240);
  line(207, 244, 276, 244);
  line(206, 248, 290, 248);
  line(205, 252, 294, 252);
  line(204, 256, 302, 256);
  line(203, 260, 306, 260);
  line(202, 264, 309, 264);
  line(201, 268, 311, 268);
  line(200, 272, 312, 272);
  line(200, 276, 313, 276);
  line(199, 280, 314, 280);
  line(199, 284, 315, 284);
  line(199, 288, 316, 288);
  line(198, 292, 316, 292);
  line(198, 296, 316, 296);
  line(198, 300, 314, 300);
  line(197, 304, 312, 304);
  line(197, 308, 310, 308);
  line(197, 312, 303, 312);
  line(197, 316, 303, 316);
  line(197, 320, 303, 320);
  line(198, 324, 303, 324);
  line(198, 328, 303, 328);
  line(199, 332, 303, 332);
  line(199, 336, 303, 336);
  line(200, 340, 303, 340);
  line(201, 344, 303, 344);
  line(202, 348, 303, 348);
  line(203, 352, 303, 352);
  line(204, 356, 275, 356);
  line(283, 356, 308, 356);
  line(207, 360, 274, 360);
  line(283, 360, 312, 360);
  line(210, 364, 272, 364);
  line(282, 364, 318, 364);
  line(213, 368, 268, 368);
  line(281, 368, 328, 368);
  line(217, 372, 266, 372);
  line(280, 372, 334, 372);
  line(224, 376, 260, 376);
  line(281, 376, 336, 376);
  line(234, 380, 252, 380);
  line(288, 380, 332, 380);

  //LINEAS  ------------------------------------------------
  stroke(70);
  strokeWeight(1);
  line(227, 132, 254, 132);
  line(217, 136, 262, 136);
  line(212, 140, 268, 140);
  line(208, 144, 271, 144);
  line(205, 148, 274, 148);
  line(202, 152, 275, 152);
  line(200, 156, 276, 156);
  line(199, 160, 277, 160);
  line(198, 164, 278, 164);
  line(198, 168, 279, 168);
  line(197, 172, 279, 172);
  line(198, 176, 280, 176);
  line(198, 180, 280, 180);
  line(199, 184, 280, 184);
  line(200, 188, 281, 188);
  line(201, 192, 281, 192);
  line(203, 196, 281, 196);
  line(205, 200, 280, 200);
  line(205, 204, 280, 204);
  line(206, 208, 279, 208);
  line(210, 212, 277, 212);
  line(221, 216, 275, 216);
  line(220, 220, 272, 220);
  line(217, 224, 266, 224);
  line(215, 228, 248, 228);
  line(213, 232, 254, 232);
  line(211, 236, 255, 236);
  line(259, 236, 262, 236);

  line(209, 240, 259, 240);
  line(263, 240, 269, 240);

  line(207, 244, 264, 244);
  line(268, 244, 276, 244);

  line(206, 248, 268, 248);
  line(272, 248, 290, 248);

  line(205, 252, 274, 252);
  line(278, 252, 294, 252);

  line(204, 256, 235, 256);
  line(240, 256, 278, 256);
  line(282, 256, 294, 256);
  line(298, 256, 302, 256);

  line(203, 260, 242, 260);
  line(247, 260, 284, 260);
  line(288, 260, 298, 260);
  line(302, 260, 306, 260);

  line(202, 264, 245, 264);
  line(251, 264, 299, 264);
  line(303, 264, 309, 264);

  line(201, 268, 249, 268);
  line(257, 268, 303, 268);
  line(307, 268, 311, 268);

  line(200, 272, 248, 272);
  line(254, 272, 262, 272);
  line(267, 272, 306, 272);
  line(310, 272, 312, 272);

  line(200, 276, 248, 276);
  line(253, 276, 268, 276);
  line(273, 276, 306, 276);
  line(310, 276, 313, 276);

  line(199, 280, 247, 280);
  line(252, 280, 277, 280);
  line(282, 280, 305, 280);
  line(309, 280, 314, 280);

  line(199, 284, 246, 284);
  line(251, 284, 300, 284);
  line(304, 284, 315, 284);

  line(199, 288, 246, 288);
  line(250, 288, 278, 288);
  line(282, 288, 302, 288);
  line(306, 288, 316, 288);

  line(198, 292, 245, 292);
  line(249, 292, 278, 292);
  line(282, 292, 303, 292);
  line(307, 292, 316, 292);

  line(198, 296, 244, 296);
  line(248, 296, 278, 296);
  line(282, 296, 303, 296);
  line(307, 296, 316, 296);

  line(198, 300, 243, 300);
  line(247, 300, 278, 300);
  line(282, 300, 303, 300);
  line(307, 300, 314, 300);

  line(197, 304, 243, 304);
  line(247, 304, 278, 304);
  line(282, 304, 303, 304);
  line(307, 304, 312, 304);

  line(197, 308, 243, 308);
  line(247, 308, 277, 308);
  line(281, 308, 303, 308);
  line(307, 308, 310, 308);

  line(197, 312, 244, 312);
  line(248, 312, 277, 312);
  line(281, 312, 303, 312);

  line(197, 316, 243, 316);
  line(247, 316, 277, 316);
  line(281, 316, 303, 316);

  line(197, 320, 242, 320);
  line(246, 320, 278, 320);
  line(282, 320, 303, 320);

  line(198, 324, 240, 324);
  line(244, 324, 278, 324);
  line(282, 324, 303, 324);

  line(198, 328, 237, 328);
  line(241, 328, 278, 328);
  line(283, 328, 303, 328);
  //aca va tbm pierna/cadera

  line(199, 332, 277.5, 332);
  line(281, 332, 282, 332);
  line(285, 332, 303, 332);

  line(199, 336, 277.5, 336);
  line(281, 336, 282, 336);
  line(286, 336, 303, 336);

  line(200, 340, 278, 340);
  line(281, 340, 282, 340);
  line(286, 340, 303, 340);

  line(201, 344, 277, 344);
  line(281, 344, 283, 344);
  line(287, 344, 303, 344);

  line(202, 348, 277, 348);
  line(281, 348, 283, 348);
  line(287, 348, 303, 348);

  line(203, 352, 276, 352);
  line(282, 352, 284, 352);
  line(288, 352, 303, 352);

  line(204, 356, 275, 356);
  line(283, 356, 285, 356);
  line(289, 356, 308, 356);

  line(207, 360, 274, 360);
  line(283, 360, 284, 360);
  line(288, 360, 312, 360);

  line(210, 364, 272, 364);
  line(282, 364, 284, 364);
  line(288, 364, 318, 364);

  line(213, 368, 268, 368);
  line(281, 368, 284, 368);
  line(288, 368, 328, 368);

  line(217, 372, 266, 372);
  line(280, 372, 284, 372);
  line(288, 372, 334, 372);

  line(224, 376, 260, 376);
  line(281, 376, 283, 376);
  line(287, 376, 336, 376);

  line(234, 380, 252, 380);
  line(288, 380, 332, 380);
}
