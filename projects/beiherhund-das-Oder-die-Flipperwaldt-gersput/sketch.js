let color1Obra1;
let color2Obra1;
let color1Obra2;
let color2Obra2;
let color3Obra2;
let color1Obra4;
let color2Obra4;
let posicionPuntNegX;
let posicionPuntNegY;
let puntoGris1X = 90;
let puntoGris1Y = 206;
let puntoGris2X = 450;
let puntoGris2Y = 356;
let puntoGris3X = 300;
let puntoGris3Y = 49;
let puntoGris4X = 210;
let puntoGris4Y = 438;
let obra1 = false;
let obra2 = false;
let obra3 = false;
let obra4 = false;
let textoInfoYPuntos = true;
let proximidad = 5;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(255);
  posicionPuntNegX = 256;
  posicionPuntNegY = 256;
  textFont('Courier New');
  
  //colorcitos obra4 :3
  color1Obra4 = random(200, 255);
  color2Obra4 = random(110, 185);
}

function draw() {
  
  
  let d1 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris1X, puntoGris1Y);
  let d2 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris2X, puntoGris2Y);
  let d3 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris3X, puntoGris3Y);
  let d4 = dist(posicionPuntNegX, posicionPuntNegY, puntoGris4X, puntoGris4Y);

  // Aparece obra 1
  if (d1 < proximidad) {
    obra1 = true;
    textoInfoYPuntos = false;
    } else {
    obra1 = false;
    textoInfoYPuntos = true;
  }
  
   // decide si hay o no obra2
  if (d2 < proximidad) {
    obra2 = true;
    textoInfoYPuntos = false;
    } else {
    obra2 = false;
    textoInfoYPuntos = true;
  }
  
  // decide si hay o no obra3
  if (d3 < proximidad) {
    obra3 = true;
    textoInfoYPuntos = false;
    } else {
    obra3 = false;
    textoInfoYPuntos = true;
  }
  
  //decide si hay o no obra4
  if (d4 < proximidad) {
    obra4 = true;
    textoInfoYPuntos = false;
    } else {
    obra4 = false;
    textoInfoYPuntos = true;
  }
  
  // decide si hay texto
  if (obra1 || obra2 || obra3 || obra4) {
    textoInfoYPuntos = false;
  } else {
    textoInfoYPuntos = true;
  }

  // aparece la obra
  if (obra1) {
    
  background(0);
  noStroke();
    
  let color1Obra1 = (frameCount * 15) % 256;
  let color2Obra1 = (frameCount * 25) % 256;
  
  //rect 1
  fill(color1Obra1);
  rect(105, 105, 190, 190);
  fill(color2Obra1);
  rect(130, 130, 140, 140);
  fill(color1Obra1);
  rect(155, 155, 90, 90);
  fill(color2Obra1);
  rect(170, 170, 60, 60);
  fill(color1Obra1);
  rect(195, 195, 10, 10);
  //rect 2
  fill(color1Obra1);
  rect(275, 270, 140, 140);
  fill(color2Obra1);
  rect(295, 290, 100, 100);
  fill(color1Obra1);
  rect(315, 310, 60, 60);
  fill(color2Obra1);
  rect(340, 335, 10, 10);
  //rect 3
  fill(color1Obra1);
  rect(380, 70, 120, 120);
  fill(color2Obra1);
  rect(395, 85, 90, 90);
  fill(color1Obra1);
  rect(405, 95, 70, 70);
  fill(color2Obra1);
  rect(415, 105, 50, 50);
  fill(color1Obra1);
  rect(430,120, 20, 20);
  fill(color2Obra1);
  rect(438, 128, 5, 5);
  //rect 4
  fill(color1Obra1);
  rect(70, 380, 100, 100);
  fill(color2Obra1);
  rect(85, 395, 70, 70);
  fill(color1Obra1);
  rect(100, 410, 40, 40);
  fill(color2Obra1);
  rect(117, 427, 7, 7);
  //rect 5
  fill(color1Obra1);
  rect(-30, 460, 115, 115);
  fill(color2Obra1);
  rect(-20, 480, 90, 90);
  fill(color1Obra1);
  rect(-10, 500, 65, 65);
  //rect 6
  fill(color1Obra1);
  rect(-50, 40, 100, 100);
  fill(color2Obra1);
  rect(-35, 55, 70, 70);
  fill(color1Obra1);
  rect(-15, 70, 40, 40);
  fill(color2Obra1);
  rect(0, 85, 10, 10);
  //rect 7
  fill(color1Obra1);
  rect(450, 460, 120, 120);
  fill(color2Obra1);
  rect(470, 480, 100, 100);
  fill(color1Obra1);
  rect(490, 500, 80, 80);
  //rect 8
  fill(color1Obra1);
  rect(270, -40, 90, 90);
  fill(color2Obra1);
  rect(285, -25, 60, 60);
  fill(color1Obra1);
  rect(300, -10, 30, 30)
  fill(color2Obra1);
  rect(310, 0, 10, 10);
  //rect 9
  fill(color1Obra1);
  rect(-100, 320, 250, 40);
  fill(color2Obra1);
  rect(-80, 330, 220, 20);
  fill(color1Obra1);
  rect(-60, 338, 190, 4);
  //rect 10
  fill(color1Obra1);
  rect(200, 320, 40, 40);
  fill(color2Obra1);
  rect(210, 330, 20, 20);
  //rect 11
  fill(color1Obra1);
  rect(130, 500, 270, 30);
  //rect 12
  fill(color1Obra1);
  rect(480, 256, 50, 50);
  fill(color2Obra1);
  rect(490, 270, 25, 25);
  fill(color1Obra1);
  rect(500, 280, 55, 5);
  //rect 13
  fill(color1Obra1);
  rect(450, 350, 123, 30);
  fill(color2Obra1);
  rect(460, 357, 125, 15);
  //rect 14
  fill(color1Obra1);
  rect(89, -50, 55, 140);
  fill(color2Obra1);
  rect(102, -50, 30, 130);
  fill(color1Obra1);
  rect(110, -50, 15, 120);
  //rect 15
  fill(color1Obra1);
  rect(300, 450, 5, 5);
  rect(260, 430, 6, 6);
  rect(480, 420, 7, 7);
  //rect 16
  fill(color1Obra1);
  rect(400, 450, 20, 20);
  fill(color2Obra1);
  rect(405, 455, 10, 10);
  //rect 17
  fill(color1Obra1);
  rect(20, 210, 50, 50);
  fill(color2Obra1);
  rect(30, 220, 30, 30);
  fill(color1Obra1);
  rect(38, 228, 15, 15);
  } else {
    background(255);
  }
  
  // Aparece la obra 2
  if (obra2) {
  color1Obra2 = min(frameCount * 0.02, 256);
  color2Obra2 = min(frameCount * 0.03, 256);
  color3Obra2 = min(frameCount * 0.01, 256);

  background(0);
  strokeWeight(0.5);

  stroke(color1Obra2);
  noFill();
  rect(12, 20, 80, 200);
  rect(50, 60, 120, 100);
  rect(150, 10, 90, 180);
  rect(70, 150, 100, 60);
  rect(200, 40, 56, 140);
  rect(90, 70, 110, 90);
  rect(30, 180, 80, 150);
  rect(160, 120, 70, 80);
  rect(20, 250, 100, 70);
  rect(180, 200, 40, 120);
  rect(50, 200, 140, 80);
  rect(120, 150, 60, 90);
  rect(2, 300, 130, 50);
  stroke(color2Obra2);
  rect(200, 150, 52, 100);
  rect(60, 400, 70, 30);
  rect(30, 350, 90, 40);
  rect(220, 70, 40, 110);
  rect(100, 300, 60, 90);
  rect(190, 220, 50, 70);
  rect(40, 400, 110, 60);
  rect(150, 250, 70, 110);
  rect(30, 100, 80, 130);
  rect(210, 30, 40, 90);
  rect(5, 200, 20, 80);
  rect(225, 240, 43, 20);
  stroke(color3Obra2);
  rect(225, 250, 40, 25);
  rect(120, 80, 70, 60);
  rect(80, 200, 90, 70);
  rect(160, 180, 60, 50);
  rect(50, 120, 130, 50);
  rect(100, 350, 100, 90);
  rect(4, 400, 90, 70);
  rect(200, 406, 56, 78);
  rect(190, 300, 60, 135);
  rect(179, 410, 40, 200);
  rect(29, 410, 40, 200);
  rect(99, 440, 40, 200);
  rect(20, 270, 233, 235);
  }
  
  // Aparece la obra 3
  if (obra3) {
    background(0);
  //ajustes de los cuadrados
  noFill();
  strokeWeight(2);
  //segundo color linea diagonal 1
  stroke(255);
  rect(142, 120, 20, 20);
  rect(142, 142.5, 20, 20);
  rect(142, 158, 20, 30);
  rect(142, 210, 20, 20);
  rect(146, 232.5, 16, 20);
  rect(142, 255, 20, 20);
  strokeWeight(5);
  rect(142, 277.5, 20, 20);
  strokeWeight(2);
  rect(142, 313, 20, 20);
  rect(142, 332.5, 20, 20);
  rect(142, 355, 20, 20);
  //primer color linea diagonal
  stroke(145);
  rect(120, 120, 20, 20);
  rect(120, 142.5, 20, 20);
  rect(120, 165, 20, 20);
  rect(114, 187.5, 29, 26);
  rect(114, 210, 29, 28);
  rect(120, 232.5, 20, 20);
  rect(120, 255, 20, 20);
  rect(114, 270, 29, 30);
  rect(120, 292.5, 20, 20);
  rect(114, 310, 29, 26);
  rect(120, 332.5, 20, 20);
  rect(120, 355, 20, 20);
  //segundo color linea diagonal 2
  stroke(255);
  rect(164, 110, 20, 40);
  strokeWeight(5);
  rect(164, 142.5, 20, 20);
  strokeWeight(2);
  rect(157, 165, 35, 20);
  rect(164, 187.5, 20, 20);
  rect(164, 210, 20, 20);
  rect(164, 225, 20, 27);
  rect(164, 255, 20, 20);
  rect(164, 270, 27, 27);
  strokeWeight(5);
  rect(164, 292.5, 20, 20);
  strokeWeight(2);
  rect(164, 310, 20, 20);
  rect(164, 332.5, 20, 20);
  rect(164, 355, 20, 25);
  //segundo color linea diagonal 3
  rect(180, 110, 35, 30);
  rect(186, 142.5, 20, 20);
  rect(186, 165, 20, 20);
  rect(186, 187.5, 20, 30);
  strokeWeight(5);
  rect(186, 210, 20, 20);
  strokeWeight(2);
  rect(186, 232.5, 20, 20);
  rect(186, 255, 20, 20);
  rect(186, 270, 20, 20);
  rect(186, 292.5, 20, 20);
  rect(186, 310, 20, 20);
  rect(180, 332.5, 26, 20);
  rect(186, 355, 20, 25);
   //segundo color linea diagonal 3
  rect(208, 120, 20, 20);
  rect(208, 142.5, 20, 20);
  rect(208, 165, 20, 20);
  rect(208, 187.5, 20, 20);
  rect(208, 210, 20, 20);
  rect(208, 255, 20, 20);
  rect(208, 277.5, 20, 20);
  rect(208, 300, 20, 20);
  rect(208, 310, 20, 20);
  strokeWeight(5);
  rect(208, 332, 20, 20);
  strokeWeight(2);
  rect(208, 355, 20, 20);
  //tercer color linea diagonal 1
  stroke(60);
  rect(230, 120, 20, 20);
  rect(230, 142.5, 20, 20);
  rect(230, 165, 20, 20);
  rect(230, 187.5, 20, 20);
  rect(230, 210, 20, 20);
  rect(230, 232.5, 20, 20);
  rect(230, 255, 20, 20);
  rect(230, 277.5, 20, 20);
  rect(230, 300, 20, 20);
  rect(230, 312.5, 20, 25);
  rect(230, 340, 20, 15);
  rect(230, 355, 20, 20);
  //tercer color linea diagonal 2
  rect(252, 120, 20, 20);
  rect(252, 142.5, 20, 26);
  strokeWeight(5);
  rect(252, 165, 20, 20);
  strokeWeight(2);
  rect(252, 187.5, 20, 20);
  rect(253, 211, 18, 18);
  rect(252, 232.5, 20, 20);
  rect(252, 255, 20, 20);
  rect(242, 267.5, 40, 40);
  rect(252, 300, 20, 20);
  rect(252, 322.5, 20, 20);
  rect(252, 345, 20, 10);
  rect(242, 345, 40, 40);
  //tercer color linea diagonal 3
  rect(274, 110, 20, 30);
  rect(274, 142.5, 20, 30);
  rect(274, 165, 20, 20);
  rect(274, 187.5, 20, 20);
  rect(274, 210, 20, 20);
  rect(275, 233.5, 18, 18);
  rect(274, 255, 20, 20);
  rect(274, 277.5, 20, 20);
  rect(274, 300, 20, 20);
  rect(274, 310, 20, 20);
  rect(274, 332.5, 20, 20);
  rect(274, 355, 20, 20);
  //tercer color linea diagonal 4
  rect(296, 120, 20, 20);
  rect(296, 142.5, 20, 20);
  rect(296, 165, 20, 20);
  rect(296, 187.5, 20, 20);
  strokeWeight(5);
  rect(296, 210, 20, 20);
  strokeWeight(2);
  rect(296, 232.5, 20, 20);
  rect(297, 256, 18, 18);
  rect(296, 277.5, 20, 20);
  rect(296, 300, 20, 20);
  rect(286, 312, 40, 40);
  rect(296, 355, 20, 20);
  //cuarto color linea diagonal 1
  stroke(25)
  rect(318, 120, 20, 20);
  rect(310, 142.5, 28, 20);
  rect(318, 165, 20, 20);
  strokeWeight(5);
  rect(318, 187.5, 20, 20);
  strokeWeight(2);
  rect(318, 210, 20, 20);
  rect(318, 232.5, 20, 20);
  rect(318, 255, 20, 20);
  rect(318, 277.5, 20, 20);
  rect(318, 300, 20, 20);
  strokeWeight(5);
  rect(318, 323, 20, 28);
  strokeWeight(2);
  rect(318, 355, 20, 25);
  //cuarto color linea diagonal 2
  rect(340, 120, 30, 20);
  rect(340, 142.5, 20, 20);
  rect(340, 165, 20, 20);
  rect(340, 187.5, 20, 20);
  rect(340, 210, 30, 20);
  rect(340, 232.5, 20, 25);
  rect(340, 255, 20, 20);
  rect(340, 277.5, 20, 20);
  rect(330, 290, 40, 40);
  rect(340, 312.5, 20, 20);
  rect(340, 335, 20, 20);
  rect(340, 355, 20, 20);
  
  //bordes negros
  noStroke();
  fill(0);
  //izquierda
  rect(88, 118, 30, 260);
  //arriba
  rect(88, 88, 290, 30);
  //abajo
  rect(88, 377.5, 304, 30);
  //derecha
  rect(362, 88, 30, 290);
  }
  
  //aparece la obra 4
  if (obra4) {
    background(0);
  
  noFill();
  stroke(color1Obra4);
  strokeWeight(4);
  
  //Fila 1
  //rect 1 
  rect(40, 40, 100, 100);
  rect(50, 50, 80, 80);
  rect(60, 60, 60, 60);
  rect(70, 70, 40, 40);
  rect(80, 80, 20, 20);
  //rect 2
  rect(150, 40, 100, 100);
  rect(160, 50, 80, 80);
  rect(170, 60, 60, 60);
  rect(180, 70, 40, 40);
  rect(190, 80, 20, 20);
  //rect 3
  rect(260, 40, 100, 100);
  rect(270, 50, 80, 80);
  rect(280, 60, 60, 60);
  rect(290, 70, 40, 40);
  rect(300, 80, 20, 20);
  //rect 4
  rect(370, 40, 100, 100);
  rect(380, 50, 80, 80);
  rect(390, 60, 60, 60);
  rect(400, 70, 40, 40);
  rect(410, 80, 20, 20);
  rect(417.5, 87.5, 5, 5);
  
  //FIla 2
  //rect 1
  rect(40, 150, 100, 100);
  rect(50, 160, 80, 80);
  rect(60, 170, 60, 60);
  rect(70, 180, 40, 40);
  rect(80, 190, 20, 20);
  //rect 2
  rect(155, 155, 90, 90);
  rect(165, 165, 70, 70);
  rect(175, 175, 50, 50);
  rect(185, 185, 30, 30);
  rect(195, 195, 10, 10);
  //rect 3
  rect(260, 150, 100, 100);
  rect(270, 160, 80, 80);
  rect(280, 170, 60, 60);
  rect(290, 180, 40, 40);
  rect(300, 190, 20, 20);
  //rect 4
  rect(370, 150, 100, 100);
  rect(380, 160, 80, 80);
  rect(390, 170, 60, 60);
  rect(400, 180, 40, 40);
  rect(410, 190, 20, 20);
  
  //Fila 3
  //rect 1
  rect(40, 260, 100, 100);
  rect(50, 270, 80, 80);
  rect(60, 280, 60, 60);
  rect(70, 290, 40, 40);
  rect(80, 300, 20, 20);
  //rect 2
  rect(150, 260, 100, 100);
  rect(160, 270, 80, 80);
  rect(170, 280, 60, 60);
  rect(180, 290, 40, 40);
  rect(190, 300, 20, 20);
  //rect 3
  rect(260, 260, 100, 100);
  rect(270, 270, 80, 80);
  rect(280, 280, 60, 60);
  rect(290, 290, 40, 40);
  rect(300, 300, 20, 20);
  //rect 4
  rect(370, 260, 100, 100);
  rect(380, 270, 80, 80);
  rect(390, 280, 60, 60);
  rect(400, 290, 40, 40);
  rect(410, 300, 20, 20);
  
  //fila 4
  //rect 1
  rect(37, 370, 103, 100);
  rect(47, 380, 83, 80);
  rect(57, 390, 63, 60);
  rect(67, 400, 43, 40);
  rect(77, 410, 23, 20);
  //rect 2
  rect(150, 370, 100, 100);
  rect(160, 380, 80, 80);
  rect(170, 390, 60, 60);
  rect(180, 400, 40, 40);
  rect(190, 410, 20, 20);
  
  push();
  stroke(color2Obra4);
  //rect 3
  rect(260, 370, 100, 100);
  rect(270, 380, 80, 80);
  rect(280, 390, 60, 60);
  rect(290, 400, 40, 40);
  rect(300, 410, 20, 20);
  pop();
  
  //rect 4
  rect(370, 370, 100, 100);
  rect(380, 380, 80, 80);
  rect(390, 390, 60, 60);
  rect(400, 400, 40, 40);
  rect(410, 410, 20, 20);
}

  // mover punto
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      posicionPuntNegY--;
    }
    if (keyCode === DOWN_ARROW) {
      posicionPuntNegY++;
    }
    if (keyCode === LEFT_ARROW) {
      posicionPuntNegX--;
    }
    if (keyCode === RIGHT_ARROW) {
      posicionPuntNegX++;
    }
  }
  
  //TEXTO Y PUNTOS
  
  if (textoInfoYPuntos) {
  // punto gris 1
  fill(150);
  noStroke();
  ellipse(puntoGris1X, puntoGris1Y, 10);
  // punto gris 2
  noStroke();
  ellipse(puntoGris2X, puntoGris2Y, 10);
  // punto gris 3
  noStroke();
  ellipse(puntoGris3X, puntoGris3Y, 10);
  // punto gris 4
  noStroke();
  ellipse(puntoGris4X, puntoGris4Y, 10);
  
  //testo negro
  fill(0);
    
  //TEXTO OBRA1
  stroke(0);
  strokeWeight(1);
  textSize(28);
  text("Pixillation", -7, 195);
  textSize(18);
  text("lillian   Schwartz", 0, 210);
  textSize(10);
  text("Lillian Schwartz is a pioneer of computer-generated art. From 1969-2002", -160, 230);
  text("she was a resident visitor at Bell Laboratories, producing groundbreaking films, videos, and multimedia works", -400, 238);
  text("The Schwartz Collection spans Lillian's childhood into her late career", -180, 246);
  text(" documenting an expansive mindset, mastery over traditional and experimental mediums", -280, 254);
  text("alike--and above all--an ability to create inspirational connections between", -250, 262);
  text("science, art, and technology.", -1, 270);
    
  //TEXTO OBRA2
  textSize(12.5);
  text("Vertical-horizontal number three", 340, 285);
  textSize(20.5);
  text("A.Michael Noll", 340, 300);
  textSize(10.5);
  text("This is a photographic print of a computer-generated image", 340, 310);
  text("originally created by A. Michael Noll", 340, 328);
  text("at Bell Labs, Murray Hill, New Jersey", 340, 338.2);
  text("Noll has explained that 'The", 340, 347);
  text("position of the end points of the lines", 340, 370);
  text("was chosen at random with a uniform probability density", 340, 379);
  text("One of the coordinates was then changed", 340, 389);
  text("alternately to create horizontal and vertical lines", 340, 398);
    
  //TEXTO OBRA3
  push();
  translate(0, height);
  rotate(-HALF_PI);
  textSize(12.5);
  text("Matrizenmulti", 420, 190);
  text("iplikation", 434, 200);
  textSize(20);
  text("Frieder", 425, 219);
  text("Nake", 460, 234);
  textSize(10);
  text("a portfolio of twelve plotter", 340, 250);
  text("drawings one colophon page", 355, 260);
  text("and one computer code print", 350, 270);
  text("out in a custom made", 393, 280);
  text("quad-fold portfolio", 399, 290);
  text("each drawing is signed,   titled", 317, 300);
  text("and dated in machin-   -e ink", 334.5, 313);
  text("each drawing is signed,   titled", 317, 323);
  text("and dated in   graphite", 375, 333);
  text("on the reverse of   the paper", 340, 343);
  text("printed and published by Han-   -sjörg May", 260, 353)
  text("er", 499, 363)
  pop();
    
  //TEXTO OBRA4
  //strokeWeight(2);
  textSize(25);
  text("1%DÉSORDRE", 0, 400);
  textSize(30);
  text("Vera Molnar", 0, 445);
  strokeWeight(1);
  textSize(9);
  text("Vera Molnár is a Hungarian-born artist", 40, 410);
  text("recognized for her pioneering work", -40, 417);
  text("in computer and generative art.", 40, 424);
  text("She began her artistic career with traditional mediums,", 20, 454);
  text("exploring geometric abstraction.", -35, 463);
  text("In the 1960s, intrigued by the potential of technology", 70, 472);
  text("Molnár started using computers as an artistic tool", -100, 482);
  text("becoming one of the first artists to do so.", 40, 491);
  text("She created algorithms to generate visual compositions,", -70, 498);
  text("examining the intersection of creativity and mathematical precision.", 90, 507);
  text("This innovative approach allowed her to create intricate abstract works.", -80, 515);
    
  // punto negro 
  stroke(0);
  strokeWeight(9);
  fill(0);
  point(posicionPuntNegX, posicionPuntNegY, 10);
  }
  
}

//¡Esta ultima linea de codigo solo está para superar las 700 lineas! Si lees esto, te mando un gran saludo, realmente fue un mes divertido haciendo esto, aprendí mas de lo que esperaba y me pude dejar llevar por el codigo, sentí la esencia misma del arte pasar por mi en algunos momentos.
//¿Que por qué escribo esto? Para que quede como un pequeño recuerdo de lo que hice, de que estuve acá y programé esto, quizá y algun dia yo o quien sea vuelva acá, y se encuentre esta carta del pasado al futuro. A veces uno simplemente debe dejarse llevar.
//Y con 701 lineas me despido, aun queda trabajo por hacer, pero lejos de este codigo, y, como ultimo mensaje...¡Deberias probar Flower, Sun & Rain de Suda51! Es realmente un gran juego.