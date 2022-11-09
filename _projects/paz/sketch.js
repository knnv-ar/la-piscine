/*TP N°2 Artes Multimediales
Subir el volúmen, sentarse y disfrutar de la pieza :) 
*/

var radioMayor = 750;
var x = radioMayor;
var velocidad = 0.3;
var direccion = 1;
var anguloRotacion = 0;

var bolita = [];
var cantidad = 3;
var offset = 20;

function preload() {
  music = loadSound("Oogway.mp3");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('div-sketch');
  music.loop();

  for (let i = 0; i <= cantidad; i++) {
    bolita.push({
      posx: i * 90,
      posy: 0,
      angulo: i * 30,
      velAngulo: random(2),
      velx: random(4),
      vely: random(3),
    });
  }
}

function draw() {
  background(213, 247, 242);

  x += velocidad;

  //NUBES

  push();

  translate(x, height / 20);
  rotate(radians(anguloRotacion));

  fill(240, 252, 252);
  bezier(55, 100, 100, 80, 150, 75, 250, 100);
  circle(105, 75, 45);
  circle(150, 60, 75);
  circle(190, 85, 30);
  bezier(275, 210, 320, 190, 370, 185, 470, 210);
  circle(335, 180, 60);
  circle(383, 188, 42);
  bezier(550, 45, 610, 30, 660, 30, 730, 45);
  circle(610, 20, 50);
  circle(657, 17, 58);
  circle(685, 28, 30);
  bezier(-225, 210, -180, 190, -130, 185, -30, 210);
  circle(-165, 180, 60);
  circle(-117, 188, 42);
  bezier(-745, 100, -700, 80, -650, 75, -550, 100);
  circle(-695, 75, 45);
  circle(-650, 60, 75);
  circle(-610, 85, 30);

  pop();

  if (x > height + radioMayor) {
    x = -radioMayor;
  }
  //MONTAÑAS

  noStroke();
  fill(175, 227, 187);
  triangle(500, 515, 232, 180, -20, 520);
  triangle(387, 478, 670, 157, 1000, 478);
  fill(195, 245, 193);
  triangle(500, 515, 232, 180, 340, 521);
  triangle(1000, 478, 670, 157, 770, 530);

  //adelante
  fill(99, 171, 133);
  triangle(500, 525, 705, 240, 900, 525);
  triangle(230, 530, 450, 190, 710, 545);
  triangle(220, 513, 10, 220, -160, 540);
  //luces
  fill(152, 196, 132);
  triangle(950, 525, 705, 240, 790, 540);
  triangle(710, 545, 450, 190, 550, 545);
  triangle(220, 513, 10, 220, 87, 530);

  fill(106, 197, 212);
  noStroke();
  square(-10, 500, 900);

  //TORRE
  fill(209, 183, 169);
  square(93, 290, 20);
  stroke(204, 145, 96);
  strokeWeight(15);
  line(50, 490, 50, 290);
  line(160, 490, 160, 290);
  strokeWeight(10);
  line(20, 310, 190, 310);
  noFill();
  strokeWeight(12);
  bezier(200, 264, 160, 295, 50, 295, 10, 264);

  //LUCES
  stroke(235, 205, 84);
  strokeWeight(5);
  line(166, 317, 166, 450);
  line(55, 317, 55, 450);
  line(56, 290, 56, 303);
  line(166, 289, 166, 303);
  line(193, 309, 192, 312);
  line(203, 260, 204, 267);
  stroke(227, 225, 202);
  line(112, 295, 112, 303);

  //PLANTAS
  fill(75, 189, 117);
  noStroke();
  circle(177, 459, 50);
  circle(155, 437, 30);
  circle(65, 454, 35);
  circle(615, 800, 300);
  circle(830, 670, 200);
  fill(65, 171, 104);
  circle(142, 465, 50);
  circle(35, 465, 45);
  circle(790, 780, 250);
  circle(480, 815, 170);
  circle(550, 840, 150);

  //ROQUITAS
  fill(140, 133, 101);
  noStroke();
  bezier(320, 555, 275, 460, 22, 400, -100, 555);
  fill(98, 148, 189, 120);
  bezier(320, 555, -10, 690, -40, 637, -100, 555);
  bezier(420, 590, 470, 555, 600, 555, 630, 590);

  //BARQUITO

  push();
  strokeWeight(3);
  stroke(82, 140, 160);
  line(595, 530, 645, 480);
  strokeWeight(1);
  line(645, 480, 733, 564);
  stroke(191, 216, 227);
  line(720, 565, 740, 565);
  pop();

  fill(82, 140, 168);
  rect(580, 515, 20, 40);
  fill(222, 204, 158);
  circle(590, 503, 20);
  fill(168, 130, 84);
  triangle(570, 495, 610, 495, 590, 485);
  fill(94, 86, 62);

  push();
  stroke(235, 205, 84);
  strokeWeight(2);
  line(600, 517, 600, 545);
  line(590, 486, 610, 494);
  pop();

  push();
  fill(145, 94, 204, 30);
  triangle(587, 485, 587, 553, 530, 544);
  pop();

  bezier(430, 540, 470, 580, 600, 580, 650, 540);

  //RAYOS DE SOL
  fill(255, 244, 143, 30);
  triangle(800, 40, -200, 620, 60, 850);
  triangle(800, 40, 180, 805, 300, 805);
  triangle(800, 40, -10, 345, -20, 410);

  //ARBOLITO
  stroke(161, 126, 74);
  line(845, 185, 615, 66);
  line(675, 97, 590, 140);
  line(590, 140, 518, 127);

  //HOJITAS

  //naranjitas
  fill(250, 188, 147);
  noStroke();
  circle(768, 87, 50);
  circle(784, 166, 30);
  circle(690, 100, 20);
  circle(600, 123, 20);

  //oscuritas
  fill(250, 107, 131);
  circle(530, 116, 40);
  circle(590, 147, 45);
  circle(623, 103, 40);
  circle(525, 156, 30);
  circle(475, 126, 25);
  circle(605, 55, 35);
  circle(668, 73, 40);
  circle(695, 121, 40);
  circle(750, 135, 50);
  circle(745, 50, 50);
  circle(790, 8, 50);
  circle(803, 100, 50);
  circle(795, 185, 40);

  //más claritas
  fill(255, 138, 147);
  circle(555, 128, 30);
  circle(633, 132, 40);
  circle(494, 149, 15);
  circle(570, 85, 20);
  circle(696, 82, 30);
  circle(750, 180, 30);
  circle(740, 110, 50);
  circle(780, 55, 50);
  circle(795, 147, 40);

  for (var i = 0; i <= cantidad; i++) {
    hojas(i);
  }

  function hojas(indice) {
    //FUNCIÓN BOLITAS CAYENDO

    push();
    bolita[indice].posx += bolita[indice].velx;
    bolita[indice].posy += bolita[indice].vely;
    bolita[indice].angulo += bolita[indice].velAngulo;

    translate(bolita[indice].posx, bolita[indice].posy);
    rotate(radians(bolita[indice].angulo));

    push();
    fill(255, 138, 147, 200);
    noStroke();
    circle(30, 0, 13);
    pop();

    if (bolita[indice].posy > height + offset) {
      bolita[indice].posy = -offset;
    }

    if (bolita[indice].posx > width + offset) {
      bolita[indice].posx = -offset;
    }
    pop();
  }

}
