// Nombre de la obra: Skele-tons
// Artista: Catalina Scaramuzza
// AM1 2022    TPN1

let blanco = 255;
let negro = 0;
let gris1 = 100;
let gris2 = 150;
let gris3 = 200;
let hueso = 230;

let angulo = 0.0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(negro);

  let valorSeno = sin(angulo);
  hueso = map(valorSeno, -1, 1, 0, 255);
  blanco = map(valorSeno, -1, 1, 0, 255);
  angulo += 5;

  for (var i = 10; i <= width - 10; i += 8) {
    stroke(gris1);
    line(i, 10, i, 500);

    for (var j = 10; j <= height - 10; j += 8) {
      stroke(gris2);
      line(10, j, 500, j);
      //fondo cuadriculado
    }

    push();

    strokeWeight(3); //cuerda
    stroke(blanco);
    line(width / 2, 0, width / 2, height / 2 - 200);

    pop();

    //cabeza

    noStroke();
    fill(hueso);

    push();

    translate(263, 100);

    noStroke();
    fill(negro);

    rect(0, 0, 25, 45);

    ellipse(20, 38, 40, 28);

    pop();

    push();

    translate(275, 80);
    rotate(radians(38));

    strokeJoin(ROUND);
    strokeCap(ROUND);
    strokeWeight(2);
    stroke(negro);
    fill(hueso);
    rect(0, 0, 25, 25, 5);

    pop();

    push();

    translate(255, 80);
    rotate(radians(50));

    strokeWeight(3);
    stroke(negro);
    fill(hueso);
    ellipse(0, 0, 50, 65);
    noStroke();
    fill(hueso);
    ellipse(20, 0, 15, 30);

    pop();

    push();

    translate(275, 62);
    rotate(40);

    fill(negro);
    stroke(negro);
    ellipse(25, 0, 15, 25);
    ellipse(0, 0, 8, 20);

    pop();

    push();

    translate(276, 83);

    fill(negro);
    ellipse(0, 0, 7, 12);
    pop();

    push();
    translate(282, 82);
    rotate(radians(130));

    noStroke();
    fill(negro);
    ellipse(0, 0, 4, 12);
    pop();

    push();

    strokeCap(ROUND);
    strokeJoin(ROUND);
    strokeWeight(1);
    stroke(negro);
    fill(hueso);
    triangle(266, 121, 283, 138, 268, 145);

    noStroke();
    rect(270, 130, 28, 18, 10);
    pop();

    //cuello

    push();

    strokeWeight(3);
    stroke(negro);
    fill(hueso);
    ellipse(248, 128, 8, 8);
    ellipse(242, 140, 6, 6);
    ellipse(236, 148, 5, 5);
    pop();

    push();
    translate(213, 152);

    strokeWeight(3);
    stroke(negro);
    fill(hueso);
    ellipse(0, 0, 30, 7);

    rotate(radians(-5));

    ellipse(43, 5, 30, 8);

    pop();

    //brazo izquierdo

    push();

    translate(187, 170);
    rotate(radians(40));
    noStroke();
    fill(negro);
    ellipse(0, 0, 20, 15);
    ellipse(-2, 56, 20, 15);

    pop();

    push();

    translate(140, 210);
    rotate(radians(-45));
    noStroke();
    fill(negro);
    rect(0, 0, 60, 11);

    strokeCap(ROUND);
    strokeJoin(ROUND);
    fill(hueso);
    rect(7, 3, 50, 5);

    pop();

    push();

    translate(185, 170);
    rotate(radians(80));
    ellipse(0, 0, 13, 7);

    rotate(radians(-80));

    ellipse(5, 4, 12, 7);

    pop();

    push();

    translate(147, 209);
    ellipse(0, 0, 8, 8);

    rotate(radians(-95));
    ellipse(-4, 5, 10, 5);

    pop();

    push();

    noStroke();
    fill(negro);

    translate(158, 235);

    rotate(radians(-30));

    ellipse(0, 0, 30, 15);
    ellipse(15, 60, 30, 15);

    pop();

    push();

    noStroke();
    fill(negro);

    translate(152, 241);

    rotate(radians(-45));

    rect(0, 0, 18, 70);
    pop();

    push();
    translate(159, 242);
    rotate(radians(-45));

    noStroke();
    strokeCap(ROUND);
    strokeJoin(ROUND);
    fill(hueso);
    rect(0, 0, 10, 55);
    pop();

    push();

    translate(158, 240);
    rotate(radians(-17));

    ellipse(0, 0, 20, 8);

    rotate(radians(-36));
    ellipse(9, 0, 17, 8);

    pop();

    push();

    translate(200, 281);
    rotate(radians(10));

    noStroke();
    fill(hueso);
    ellipse(0, 0, 8, 10);
    rotate(radians(45));
    ellipse(-3, -10, 8, 11);

    pop();

    push();

    translate(200, 300);
    rotate(radians(10));

    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 7, 15);
    pop();

    push();

    translate(210, 295);
    rotate(radians(-10));

    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 5, 13);
    pop();

    push();

    translate(217, 289);
    rotate(radians(-20));

    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 7, 13);
    pop();

    push();

    translate(225, 278);
    rotate(radians(-86));

    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 6, 15);
    pop();

    push();

    translate(190, 296);
    rotate(radians(15));

    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 5, 7);
    pop();

    push();
    strokeWeight(3);
    stroke(negro);
    fill(hueso);
    ellipse(236, 285, 4, 10);
    ellipse(229, 298, 5, 5);
    ellipse(220, 308, 7, 7);
    ellipse(205, 315, 3, 5);
    ellipse(188, 312, 3, 5);
    pop();

    //brazo derecho

    push();

    translate(299, 159);
    rotate(radians(45));
    fill(negro);
    rect(0, 0, 60, 11);
    pop();

    push();

    translate(296, 166);
    rotate(radians(-45));
    fill(negro);
    ellipse(0, 0, 20, 10);
    ellipse(0, 60, 20, 10);
    pop();

    push();

    translate(299, 170);
    rotate(radians(25));
    ellipse(0, 0, 10, 5);
    pop();

    push();

    translate(303, 167);
    rotate(radians(95));
    ellipse(0, 0, 10, 5);
    pop();

    push();

    translate(337, 207);
    rotate(radians(95));
    ellipse(0, 0, 10, 5);
    pop();

    push();

    translate(340, 204);
    rotate(radians(0));
    ellipse(0, 0, 10, 5);
    pop();

    push();

    translate(304, 167);
    rotate(radians(45));
    rect(0, 0, 50, 5, 10);
    pop();

    push();

    fill(negro);
    translate(343, 213);
    rotate(radians(20));
    rect(0, 0, 15, 70, 10);

    pop();

    push();

    translate(328, 275);
    rotate(radians(30));
    fill(negro);
    ellipse(0, 0, 25, 12);

    pop();

    push();

    translate(345, 221);
    rotate(radians(20));
    rect(0, 0, 6, 55, 10);

    pop();

    push();

    translate(345, 222);
    rotate(radians(50));
    ellipse(0, 0, 10, 5);

    pop();

    push();

    translate(351, 224);
    rotate(radians(0));
    ellipse(0, 0, 10, 5);

    pop();

    push();

    translate(326, 273);
    rotate(radians(0));
    ellipse(0, 0, 10, 5);

    pop();

    push();

    translate(333, 276);
    rotate(radians(30));
    ellipse(0, 0, 10, 5);

    pop();

    push();

    translate(343, 292);
    rotate(radians(-40));
    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 6, 13);
    pop();

    push();

    translate(334, 294);
    rotate(radians(-30));
    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 6, 13);
    pop();

    push();

    translate(325, 294);
    rotate(radians(-10));
    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 7, 14);
    pop();

    push();

    translate(316, 292);
    rotate(radians(0));
    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 8, 14);
    pop();

    push();

    translate(312, 284);
    rotate(radians(50));
    stroke(negro);
    strokeWeight(3);
    ellipse(0, 0, 6, 13);
    pop();

    push();
    strokeWeight(3);
    stroke(negro);
    ellipse(306, 292, 6, 10);
    ellipse(312, 304, 5, 5);
    ellipse(322, 306, 6, 7);
    ellipse(336, 308, 5, 7);
    ellipse(349, 305, 3, 5);
    pop();

    //costilla
    push();
    noStroke();
    fill(negro);

    translate(243, 184);
    rotate(radians(-12));

    ellipse(0, 0, 75, 35);
    ellipse(0, 15, 70, 30);
    ellipse(0, 30, 65, 25);

    pop();

    push();

    noStroke();
    fill(negro);
    translate(264, 218);
    rotate(radians(-15));

    ellipse(0, 0, 40, 25);
    fill(hueso);
    ellipse(0, -4, 30, 20);
    pop();

    push();

    translate(243, 184);
    rotate(radians(-12));

    noStroke();
    fill(hueso);
    ellipse(0, 0, 65, 25);
    ellipse(0, 15, 60, 20);
    ellipse(0, 30, 55, 15);

    pop();

    push();
    rectMode(CENTER);
    translate(231, 187);
    rotate(radians(-12));
    noStroke();
    fill(negro);

    ellipse(5, 0, 30, 10);
    ellipse(25, 0, 20, 10);
    rect(0, 15, 22, 10, 10);
    rect(25, 15, 20, 10, 10);

    rotate(radians(-10));
    rect(-3, 30, 20, 7, 10);
    rotate(radians(20));
    rect(30, 25, 15, 7, 10);
    pop();

    //columna
    push();

    strokeWeight(4);
    stroke(negro);
    fill(hueso);
    ellipse(260, 244, 10, 10);
    ellipse(268, 265, 10, 10);
    ellipse(269, 288, 10, 10);

    pop();

    //cadera

    push();

    translate(241, 289);
    rotate(radians(20));

    noStroke();
    fill(negro);
    rect(0, 0, 70, 20, 15);

    rotate(radians(-50));
    rect(-20, 25, 70, 20, 10);
    pop();

    push();
    noStroke();
    fill(negro);
    ellipse(292, 296, 30, 30);
    pop();

    push();
    translate(245, 292);
    rotate(radians(20));

    noStroke();
    fill(hueso);
    rect(0, 0, 60, 17, 15);

    rotate(radians(-50));
    rect(-20, 25, 60, 14, 10);
    pop();

    push();
    translate(287, 300);
    rotate(radians(-25));
    noStroke();
    fill(hueso);
    ellipse(0, 0, 33, 25);
    pop();

    push();

    translate(260, 306);
    rotate(radians(35));
    noStroke();
    fill(negro);
    ellipse(0, 0, 23, 10);
    pop();

    push();
    translate(286, 300);
    rotate(radians(-35));
    noStroke();
    fill(negro);
    ellipse(0, 0, 23, 10);
    pop();

    //piernas

    push();
    noStroke();
    fill(negro);
    ellipse(233, 346, 20, 20);
    ellipse(202, 415, 20, 20);
    ellipse(321, 338, 20, 20);
    ellipse(349, 405, 20, 20);
    pop();

    push();

    translate(225, 340);
    rotate(radians(23));
    noStroke();
    fill(negro);
    rect(0, 0, 20, 80, 10);

    pop();

    push();
    noStroke();
    fill(negro);
    translate(311, 339);
    rotate(radians(-23));
    rect(0, 0, 20, 80, 10);
    pop();

    push();

    translate(227, 346);
    rotate(radians(23));

    noStroke();
    fill(hueso);
    rect(0, 0, 10, 70, 10);
    pop();

    push();
    translate(318, 342);
    rotate(radians(-23));

    noStroke();
    fill(hueso);
    rect(0, 0, 10, 70, 10);
    pop();

    push();
    translate(228, 345);
    rotate(radians(80));
    noStroke();
    fill(hueso);
    ellipse(0, 0, 13, 9);

    pop();

    push();
    translate(201, 412);
    rotate(radians(-10));
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(237, 349);
    rotate(radians(150));
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(206, 415);
    rotate(radians(-140));
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(320, 341);
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(324, 339);
    rotate(radians(100));
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(347, 404);
    rotate(radians(130));
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(352, 400);
    ellipse(0, 0, 13, 9);
    pop();

    push();
    translate(192, 435);

    strokeWeight(4);
    stroke(negro);
    fill(hueso);
    ellipse(0, 0, 15, 15);
    ellipse(175, -5, 15, 15);
    pop();

    push();

    translate(190, 461);
    rotate(radians(-20));
    fill(negro);
    rect(0, 0, 20, 60, 10);
    pop();

    push();

    translate(350, 447);
    rotate(radians(20));
    fill(negro);
    rect(0, 0, 20, 60, 10);
    pop();

    push();

    translate(199, 456);
    fill(negro);
    ellipse(0, 0, 30, 15);
    ellipse(158, -5, 30, 15);
    pop();

    push();
    translate(199, 460);
    rotate(radians(30));
    ellipse(0, 0, 18, 7);
    pop();

    push();
    translate(206, 458);
    rotate(radians(-30));
    ellipse(0, 0, 18, 7);
    pop();

    push();
    translate(353, 454);
    rotate(radians(30));
    ellipse(0, 0, 18, 7);
    pop();

    push();
    translate(364, 454);
    rotate(radians(-30));
    ellipse(0, 0, 18, 7);
    pop();

    push();

    translate(197, 463);
    rotate(radians(-20));
    rect(0, 0, 10, 50, 10);

    pop();

    push();

    translate(352, 454);
    rotate(radians(20));
    rect(0, 0, 10, 50, 10);

    pop();

    push();
    fill(negro);
    rect(205, 499, 180, 10);
    pop();

    push();
    translate(278, 102);
    rotate(radians(-40));

    fill(negro);
    rect(0, 0, 4, 15, 20);
    rect(8, 0, 4, 10, 20);
    pop();

    push();
    translate(279, 128);
    rotate(radians(0));

    fill(negro);
    rect(0, 0, 4, 11, 20);
    rect(8, 0, 4, 10, 20);
    pop();
  }
}
