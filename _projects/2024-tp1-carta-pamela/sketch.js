//interacciones:
//mouse sobre el centro del alfil
//hacer clic
//presionar tecla

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(100);

  let b = color("rgb(0, 0, 0)");
  let lb = color("rgb(40,40,40)");
  let w = color("rgb(255,255,255)");
  let dw = color("rgb(225,225,225)");
  let j = color("rgb(136,136,136)");

  //cambio de colores

  if (mouseIsPressed) {
    w = color("rgb(0,0,0)");
    b = color("rgb(255,255,255)");
  }

  //tablero
  push();
  noStroke();
  fill(dw);
  quad(0, 0, 0, 103, 129, 103, 126, 0);
  quad(258, 0, 258, 103, 387, 103, 387, 0);
  quad(129, 103, 129, 203, 258, 203, 258, 103);
  quad(387, 103, 387, 203, 516, 203, 516, 103);
  quad(0, 203, 0, 303, 129, 303, 129, 203);
  quad(258, 203, 258, 303, 387, 303, 387, 203);
  quad(0, 402, 0, 502, 129, 503, 129, 403);
  quad(129, 303, 129, 403, 258, 403, 258, 303);
  quad(387, 303, 387, 403, 516, 403, 516, 303);
  quad(258, 403, 258, 503, 387, 503, 387, 403);
  quad(387, 503, 387, 603, 516, 603, 516, 503);

  quad(129, 503, 129, 603, 258, 603, 258, 502);
  fill(lb);
  quad(131, 0, 127, 103, 257, 103, 258, 0);
  quad(387, 0, 387, 103, 516, 103, 516, 0);
  quad(0, 103, 0, 203, 129, 203, 129, 103);
  quad(258, 103, 258, 203, 387, 203, 387, 103);
  quad(129, 203, 129, 303, 258, 303, 258, 203);
  quad(387, 203, 387, 303, 516, 303, 516, 203);
  quad(0, 303, 0, 403, 129, 403, 129, 303);
  quad(258, 303, 258, 403, 387, 403, 387, 303);
  quad(0, 503, 0, 603, 129, 603, 129, 503);
  quad(129, 403, 129, 503, 258, 503, 258, 403);
  quad(387, 403, 387, 503, 516, 503, 516, 403);
  quad(258, 503, 258, 603, 387, 603, 387, 502);
  pop();

  //ventanita
  push();
  stroke(1);
  fill(j);
  quad(188, 74, 187, 162, 249, 173, 245, 79);
  pop();

  //jaque
  if (keyIsPressed === true) {
    //caballito
    fill(w);
    beginShape();
    vertex(222, 84);
    bezierVertex(224, 84, 225, 85, 225, 86);
    bezierVertex(225, 86, 225, 88, 224, 89);
    bezierVertex(224, 89, 225, 90, 226, 93);
    bezierVertex(226, 93, 231, 91, 233, 94);
    bezierVertex(233, 94, 233, 95, 233, 96);
    bezierVertex(233, 96, 234, 97, 235, 102);
    bezierVertex(235, 102, 242, 102, 243, 107);
    bezierVertex(243, 107, 243, 110, 240, 112);
    bezierVertex(240, 112, 238, 112, 235, 113);
    bezierVertex(235, 113, 233, 112, 230, 111);
    bezierVertex(229, 110, 227, 109, 226, 109);
    bezierVertex(226, 109, 231, 112, 234, 117);
    bezierVertex(234, 117, 234, 122, 234, 126);
    bezierVertex(234, 126, 233, 130, 232, 133);
    bezierVertex(232, 133, 232, 134, 232, 134);
    bezierVertex(232, 134, 232, 135, 232, 135);
    bezierVertex(232, 135, 233, 136, 234, 136);
    bezierVertex(234, 136, 235, 137, 236, 138);
    bezierVertex(236, 138, 236, 138, 237, 139);
    bezierVertex(237, 139, 237, 140, 236, 141);
    bezierVertex(236, 141, 235, 142, 235, 142);
    bezierVertex(235, 142, 234, 142, 223, 142);
    bezierVertex(223, 142, 212, 140, 202, 138);
    bezierVertex(202, 138, 199, 137, 196, 136);
    bezierVertex(196, 136, 195, 133, 195, 133);
    bezierVertex(195, 133, 195, 132, 195, 131);
    bezierVertex(195, 131, 196, 130, 198, 131);
    bezierVertex(198, 131, 200, 130, 202, 130);
    bezierVertex(202, 130, 203, 127, 203, 125);
    bezierVertex(203, 125, 204, 121, 205, 117);
    bezierVertex(205, 117, 204, 114, 204, 111);
    bezierVertex(204, 111, 203, 108, 203, 105);
    bezierVertex(203, 105, 204, 101, 205, 98);
    bezierVertex(205, 98, 208, 95, 210, 92);
    bezierVertex(210, 92, 214, 91, 217, 90);
    bezierVertex(217, 90, 218, 88, 220, 87);
    bezierVertex(220, 87, 221, 85, 225, 84);
    endShape();

    fill(j);
    stroke(1);
    quad(213, 234, 249, 351, 338, 214, 336, 183);
    let j2 = color("rgb(218,218,218)");
    stroke(218);
    strokeWeight(5);
    fill(w);
    //j
    bezier(223, 234, 230, 230, 238, 226, 245, 222);
    bezier(235, 229, 239, 244, 242, 253, 257, 321);
    bezier(232, 285, 236, 299, 245, 312, 257, 321);
    //a
    bezier(253, 221, 256, 253, 256, 257, 256, 260);
    bezier(257, 263, 258, 278, 260, 291, 261, 308);
    bezier(254, 220, 264, 241, 273, 262, 280, 284);
    bezier(269, 256, 268, 257, 266, 258, 265, 259);
    bezier(257, 265, 259, 262, 262, 261, 265, 259);
    //q
    bezier(267, 220, 268, 216, 271, 213, 275, 212);
    bezier(275, 212, 279, 212, 283, 214, 285, 217);
    bezier(285, 217, 285, 218, 286, 218, 286, 219);
    bezier(286, 219, 287, 220, 287, 222, 287, 223);
    bezier(287, 223, 287, 228, 287, 234, 284, 238);
    bezier(284, 238, 283, 240, 284, 241, 280, 242);
    bezier(280, 242, 279, 242, 278, 241, 277, 241);
    bezier(277, 241, 275, 241, 274, 240, 272, 239);
    bezier(272, 239, 272, 238, 271, 237, 271, 236);
    bezier(271, 236, 268, 230, 267, 224, 267, 218);
    bezier(280, 236, 283, 246, 285, 257, 288, 268);
    bezier(280, 256, 283, 254, 286, 252, 289, 251);
    //u
    bezier(292, 213, 291, 221, 294, 229, 297, 237);
    bezier(297, 237, 297, 238, 297, 239, 298, 239);
    bezier(298, 239, 299, 240, 300, 241, 301, 241);
    bezier(300, 241, 301, 241, 303, 241, 305, 241);
    bezier(306, 240, 306, 239, 309, 236, 309, 234);
    bezier(309, 234, 310, 228, 309, 222, 308, 216);
    bezier(308, 216, 307, 214, 307, 211, 306, 209);
    //e
    bezier(321, 197, 319, 200, 317, 202, 315, 204);
    bezier(314, 204, 316, 211, 317, 218, 318, 225);
    bezier(318, 225, 319, 224, 320, 223, 320, 222);
    bezier(320, 222, 322, 218, 325, 214, 328, 210);
    bezier(317, 212, 319, 210, 322, 208, 324, 205);
  }

  //alfin cuerpo
  beginShape();
  stroke(1);
  strokeWeight(2);
  fill(w);
  vertex(381, 103);
  bezierVertex(376, 108, 369, 116, 369, 125);
  bezierVertex(371, 133, 379, 154, 343, 220);
  bezierVertex(367, 248, 383, 246, 415, 254);
  bezierVertex(450, 239, 467, 237, 474, 226);
  bezierVertex(489, 203, 452, 157, 428, 134);
  bezierVertex(410, 118, 393, 109, 381, 103);
  endShape();

  //alfil cabeza
  beginShape();
  vertex(332, 85);
  bezierVertex(334, 84, 308, 64, 311, 58);
  bezierVertex(314, 52, 355, 57, 365, 80);
  bezierVertex(365, 82, 371, 95, 363, 105);
  bezierVertex(348, 117, 358, 112, 363, 105);
  bezierVertex(371, 95, 365, 80, 365, 82);
  bezierVertex(371, 95, 363, 105, 358, 112);
  bezierVertex(348, 117, 340, 114, 339, 114);
  bezierVertex(338, 113, 337, 113, 326, 104);
  bezierVertex(318, 82, 322, 80, 325, 78);
  bezierVertex(325, 78, 332, 85, 332, 85);
  endShape();

  push();
  fill(b);
  stroke(0);
  strokeWeight(2);
  //rey cuerpo
  beginShape();
  vertex(133, 170);
  bezierVertex(146, 205, 162, 239, 179, 272);
  bezierVertex(182, 277, 185, 283, 189, 288);
  bezierVertex(194, 296, 200, 304, 206, 312);
  bezierVertex(187, 314, 170, 324, 152, 329);
  bezierVertex(144, 331, 136, 332, 130, 333);
  bezierVertex(103, 336, 78, 340, 53, 337);
  bezierVertex(68, 325, 73, 305, 77, 287);
  bezierVertex(82, 262, 88, 236, 82, 212);
  endShape();

  beginShape();
  vertex(202, 314);
  bezierVertex(207, 310, 212, 307, 217, 305);
  bezierVertex(220, 311, 222, 318, 224, 325);
  bezierVertex(226, 330, 228, 335, 229, 341);
  bezierVertex(222, 345, 215, 346, 208, 348);
  bezierVertex(195, 349, 183, 349, 171, 349);
  bezierVertex(147, 351, 124, 356, 99, 359);
  bezierVertex(83, 362, 67, 362, 51, 361);
  bezierVertex(48, 360, 46, 359, 43, 359);
  bezierVertex(44, 349, 44, 341, 44, 333);

  endShape();
  //rey cabeza
  strokeWeight(2);
  beginShape();
  vertex(84, 160);
  bezierVertex(87, 157, 96, 153, 103, 150);
  bezierVertex(106, 149, 109, 147, 112, 145);
  bezierVertex(119, 141, 128, 137, 136, 138);
  bezierVertex(145, 139, 153, 148, 150, 156);
  bezierVertex(149, 160, 143, 159, 136, 167);
  bezierVertex(131, 172, 131, 174, 126, 178);
  bezierVertex(123, 181, 120, 183, 116, 185);
  bezierVertex(114, 185, 112, 185, 109, 186);
  bezierVertex(105, 187, 102, 189, 89, 208);
  bezierVertex(82, 212, 73, 213, 65, 211);
  bezierVertex(62, 210, 58, 208, 56, 206);
  bezierVertex(49, 201, 47, 192, 49, 184);
  bezierVertex(52, 176, 58, 170, 66, 167);
  bezierVertex(74, 164, 81, 160, 84, 160);
  push();
  stroke(b);
  line(70, 126, 88, 157);
  line(68, 149, 92, 129);
  pop();
  endShape();

  pop();

  //movimiento rey

  if (
    mouseX >= 387 - 10 &&
    mouseX <= 417 + 25 &&
    mouseY >= 170 - 10 &&
    mouseY <= 152 + 25
  ) {
    let mx = random(5, -5);
    let my = random(5, -5);
    //movimiento cabeza
    beginShape();
    fill(b);
    vertex(mx + 84, my + 160);
    bezierVertex(mx + 87, my + 157, mx + 96, my + 153, mx + 103, my + 150);
    bezierVertex(mx + 106, my + 149, mx + 109, my + 147, mx + 112, my + 145);
    bezierVertex(mx + 119, my + 141, mx + 128, my + 137, mx + 136, my + 138);
    bezierVertex(mx + 145, my + 139, mx + 153, my + 148, mx + 150, my + 156);
    bezierVertex(mx + 149, my + 160, mx + 143, my + 159, mx + 136, my + 167);
    bezierVertex(mx + 131, my + 172, mx + 131, my + 174, mx + 126, my + 178);
    bezierVertex(mx + 123, my + 181, mx + 120, my + 183, mx + 116, my + 185);
    bezierVertex(mx + 114, my + 185, mx + 112, my + 185, mx + 109, my + 186);
    bezierVertex(mx + 105, my + 187, mx + 102, my + 189, mx + 89, my + 208);
    bezierVertex(mx + 82, my + 212, mx + 73, my + 213, mx + 65, my + 211);
    bezierVertex(mx + 62, my + 210, mx + 58, my + 208, mx + 56, my + 206);
    bezierVertex(mx + 49, my + 201, mx + 47, my + 192, mx + 49, my + 184);
    bezierVertex(mx + 52, my + 176, mx + 58, my + 170, mx + 66, my + 167);
    bezierVertex(mx + 74, my + 164, mx + 81, my + 160, mx + 84, my + 160);
    endShape();
    line(mx + 70, my + 126, mx + 88, my + 157);
    line(mx + 68, my + 149, mx + 92, my + 129);

    //mov cuerpo
    beginShape();
    vertex(133 + mx, 170 + my);
    bezierVertex(146 + mx, 205 + my, 162 + mx, 239 + my, 179 + mx, 272 + my);
    bezierVertex(182 + mx, 277 + my, 185 + mx, 283 + my, 189 + mx, 288 + my);
    bezierVertex(194 + mx, 296 + my, 200 + mx, 304 + my, 206 + mx, 312 + my);
    bezierVertex(187 + mx, 314 + my, 170 + mx, 324 + my, 152 + mx, 329 + my);
    bezierVertex(144 + mx, 331 + my, 136 + mx, 332 + my, 130 + mx, 333 + my);
    bezierVertex(103 + mx, 336 + my, 78 + mx, 340 + my, 53 + mx, 337 + my);
    bezierVertex(68 + mx, 325 + my, 73 + mx, 305 + my, 77 + mx, 287 + my);
    bezierVertex(82 + mx, 262 + my, 88 + mx, 236 + my, 82 + mx, 212 + my);
    endShape();

    beginShape();
    vertex(202 + mx, 314 + my);
    bezierVertex(207 + mx, 310 + my, 212 + mx, 307 + my, 217 + mx, 305 + my);
    bezierVertex(220 + mx, 311 + my, 222 + mx, 318 + my, 224 + mx, 325 + my);
    bezierVertex(226 + mx, 330 + my, 228 + mx, 335 + my, 229 + mx, 341 + my);
    bezierVertex(222 + mx, 345 + my, 215 + mx, 346 + my, 208 + mx, 348 + my);
    bezierVertex(195 + mx, 349 + my, 183 + mx, 349 + my, 171 + mx, 349 + my);
    bezierVertex(147 + mx, 351 + my, 124 + mx, 356 + my, 99 + mx, 359 + my);
    bezierVertex(83 + mx, 362 + my, 67 + mx, 362 + my, 51 + mx, 361 + my);
    bezierVertex(48 + mx, 360 + my, 46 + mx, 359 + my, 43 + mx, 359 + my);
    bezierVertex(44 + mx, 349 + my, 44 + mx, 341 + my, 44 + mx, 333 + my);
    endShape();
  }
}
document.oncontextmenu = function () {
  return false;
};
