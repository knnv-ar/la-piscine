// CONSTS
let angle = 0;
let x = 10;
let y = 10;
let words = ["mind", "cat", "phone", "God", "platitude", "hope", "community", "father", "trophy", "home", ];
let index = 0;

// SETUP
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(255);
  angleMode(DEGREES);
  frameRate(6);
}

function draw() {

// ---------------- CARA 
  push();
  stroke(15);
  strokeWeight(2);
  translate(x, y);
  rotate(angle);
  angle = angle + 20;
  x = x + 1;

  //ojo izquierdo y nariz
  beginShape(POINTS);
  vertex(272, 264);
  vertex(278, 261);
  vertex(283, 261);
  vertex(288, 261);
  vertex(295, 263);
  vertex(299, 266);
  vertex(303, 272);
  vertex(303, 276);
  vertex(304, 283);
  vertex(303, 289);
  vertex(303, 294);
  vertex(302, 300);
  vertex(301, 307);
  vertex(301, 314);
  vertex(299, 321);
  vertex(298, 329);
  vertex(295, 333);
  vertex(292, 330);
  vertex(292, 324);
  vertex(301, 322);
  vertex(305, 323);
  vertex(308, 325);
  vertex(310, 328);
  vertex(311, 332);
  vertex(313, 333);
  vertex(316, 333);
  vertex(317, 330);
  vertex(296, 283);
  vertex(289, 284);
  vertex(280, 284);
  vertex(276, 279);
  vertex(276, 274);
  vertex(280, 270);
  vertex(288, 270);
  vertex(295, 274);
  vertex(290, 279);
  vertex(286, 279);
  endShape();

  //ojo derecha 
  beginShape(TRIANGLES);
  vertex(322, 285);
  vertex(328, 287);
  vertex(334, 287);
  vertex(341, 287);
  vertex(346, 284);
  vertex(322, 276);
  vertex(325, 273);
  vertex(328, 270);
  vertex(332, 269);
  vertex(336, 268);
  vertex(340, 268);
  vertex(344, 269);
  vertex(349, 273);
  vertex(323, 281);
  vertex(328, 283);
  vertex(335, 283);
  vertex(339, 278);
  vertex(335, 274);
  vertex(329, 274);
  vertex(328, 277);
  vertex(342, 283);
  vertex(345, 280);
  endShape();

  //labios
  strokeWeight(2);
  beginShape(TRIANGLES);
  vertex(281, 347);
  vertex(284, 345);
  vertex(285, 347);
  vertex(287, 350);
  vertex(289, 349);
  vertex(291, 346);
  vertex(293, 344);
  vertex(295, 349);
  vertex(298, 350);
  vertex(302, 348);
  vertex(304, 345);
  vertex(305, 349);
  vertex(309, 350);
  vertex(311, 350);
  vertex(314, 348);
  vertex(317, 344);
  vertex(318, 349);
  vertex(321, 351);
  vertex(325, 351);
  vertex(283, 351);
  vertex(288, 353);
  vertex(293, 354);
  vertex(302, 355);
  vertex(309, 355);
  vertex(318, 354);
  vertex(297, 354);
  vertex(305, 355);
  vertex(312, 355);
  vertex(316, 355);
  endShape();

  // las mejillas
  beginShape(TRIANGLES);
  vertex(340, 315);
  vertex(344, 312);
  vertex(342, 308);
  vertex(338, 310);
  vertex(338, 318);
  vertex(344, 318);
  vertex(348, 318);
  vertex(350, 315);
  vertex(353, 311);
  vertex(265, 309);
  vertex(269, 308);
  vertex(269, 303);
  vertex(261, 303);
  vertex(262, 312);
  vertex(267, 312);
  vertex(272, 307);
  vertex(258, 297);
  endShape();
  pop();
  
}


function mouseMoved() {
  // -------------------- PALABRAS
  push();
  noStroke();
  rect(170, 175, 180, 38);
  textSize(35);
  text("where", 10, 65);
  text("is", 180, 65);
  text("my", 10, 204);
  text(words[index], 180, 204);
  index = floor(random(words.length));

  if (index == words.length) {
    index = 0;
    pop();
  } 
  

}



