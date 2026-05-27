function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(200);
  //primera fila
  var posX = constrain(mouseX, 0, width);
  var matiz = map(posX, 0, width, 0, 255);
  var matizDos = map(posX, 0, width, 255, 0);
  fill(matizDos);
  rect(6, 6, 90, 90);
  fill(matizDos);
  rect(108.5, 6, 90, 90);
  fill(matizDos);
  rect(211, 6, 90, 90);
  fill(matizDos);
  rect(313.5, 6, 90, 90);
  fill(matizDos);
  rect(416, 6, 90, 90);
  //////////////////////
  fill(80);
  rect(6, 6, 80, 80);
  fill(80);
  rect(108.5, 6, 80, 80);
  fill(80);
  rect(211, 6, 80, 80);
  fill(80);
  rect(313.5, 6, 80, 80);
  fill(80);
  rect(416, 6, 80, 80);
  /////////////////////////////////
  fill(matiz);
  rect(10, 6, 75, 75);
  fill(matiz);
  rect(112.5, 6, 75, 75);
  fill(matiz);
  rect(215, 6, 75, 75);
  fill(matiz);
  rect(317.5, 6, 75, 75);
  fill(matiz);
  rect(421, 6, 75, 75);
  ////////////////////////////////
  fill(matizDos);
  rect(15, 6, 60, 60);
  fill(matizDos);
  rect(117.5, 6, 60, 60);
  fill(matizDos);
  rect(220, 6, 60, 60);
  fill(matizDos);
  rect(322.5, 6, 60, 60);
  fill(matizDos);
  rect(426, 6, 60, 60);
  /////////////////////////////////
  fill(matiz);
  rect(15, 6, 55, 55);
  fill(matiz);
  rect(117.5, 6, 55, 55);
  fill(matiz);
  rect(220, 6, 55, 55);
  fill(matiz);
  rect(322.5, 6, 55, 55);
  fill(matiz);
  rect(426, 6, 55, 55);
  ////////////////////////////////////

  fill(matizDos);
  rect(20, 6, 40, 40);
  fill(matizDos);
  rect(122.5, 6, 40, 40);
  fill(matizDos);
  rect(225, 6, 40, 40);
  fill(matizDos);
  rect(327.5, 6, 40, 40);
  fill(matizDos);
  rect(431, 6, 40, 40);

  ///////////////////////////////////////
  fill(matiz);
  rect(25, 11, 30, 30);
  fill(matiz);
  rect(127.5, 11, 30, 30);
  fill(matiz);
  rect(230, 11, 30, 30);
  fill(matiz);
  rect(332.5, 11, 30, 30);
  fill(matiz);
  rect(436, 11, 30, 30);
  ///////////////////////////////////////////
  fill(matizDos);
  rect(25, 11, 15, 15);
  fill(matizDos);
  rect(127.5, 11, 15, 15);
  fill(matizDos);
  rect(230, 11, 15, 15);
  fill(matizDos);
  rect(332.5, 11, 15, 15);
  fill(matizDos);
  rect(436, 11, 15, 15);

  //segunda fila
  var matizTres = map(posX, 0, width, 0, 120);
  var posY = constrain(mouseY, 0, height);
  var matizC = map(posY, 0, height, 40, 255);
  fill(matizDos);
  rect(6, 108.5, 90, 90);
  fill(matizDos);
  rect(108.5, 108.5, 90, 90);
  fill(matizDos);
  rect(211, 108.5, 90, 90);
  fill(matizDos);
  rect(313.5, 108.5, 90, 90);
  fill(matizDos);
  rect(416, 108.5, 90, 90);
  fill(matizTres);
  rect(16, 108.5, 80, 80);
  fill(matizTres);
  rect(118.5, 108.5, 80, 80);
  fill(matizTres);
  rect(221, 108.5, 80, 80);
  fill(matizTres);
  rect(323.5, 108.5, 80, 80);
  fill(matizTres);
  rect(426, 108.5, 80, 80);
  push();
  noStroke();
  fill(120);
  rect(18, 112.5, 75, 75);
  fill(120);
  rect(120.5, 112.5, 75, 75);
  fill(120);
  rect(223, 112.5, 75, 75);
  fill(120);
  rect(324.5, 112.5, 75, 75);
  fill(120);
  rect(427, 112.5, 75, 75);
  pop();
  push();
  strokeWeight(1);
  stroke(matizC);
  noFill();
  rect(20, 117, 60, 60);
  rect(130, 117, 60, 60);
  rect(235, 120, 60, 60);
  rect(330, 117, 60, 60);
  rect(440, 122, 60, 60);
  ///////////////////////////////////////////////////////
  rect(30, 130, 45, 45);
  rect(20, 117, 45, 45);
  rect(40, 138, 35, 45);
  rect(45, 125, 45, 50);
  rect(20, 117, 45, 45);

  ///////////////////////////////////////////////////////
  rect(135, 125, 45, 45);
  rect(145, 138, 35, 35);
  rect(125, 142, 40, 40);
  rect(140, 127, 25, 45);
  rect(150, 119, 20, 35);
  ////////////////////////////////////////////////////////
  rect(230, 125, 45, 45);
  rect(245, 140, 50, 35);
  rect(235, 148, 35, 35);
  rect(260, 130, 30, 45);
  rect(240, 128, 20, 20);
  /////////////////////////////////////////////////////////
  rect(350, 138, 45, 45);
  rect(345, 130, 45, 35);
  rect(335, 120, 35, 50);
  rect(338, 145, 35, 35);
  rect(360, 148, 30, 30);
  ///////////////////////////////////////////////////////////
  rect(430, 140, 35, 35);
  rect(435, 119, 50, 50);
  rect(450, 135, 45, 40);
  rect(458, 130, 38, 30);
  rect(445, 125, 40, 45);
  pop();

  //tercera fila
  fill(matizDos);
  rect(6, 211, 90, 90);
  fill(matizDos);
  rect(108.5, 211, 90, 90);
  fill(matizDos);
  rect(211, 211, 90, 90);
  fill(matizDos);
  rect(313.5, 211, 90, 90);
  fill(matizDos);
  rect(416, 211, 90, 90);
  fill(80);
  rect(6, 211, 80, 80);
  fill(80);
  rect(108.5, 211, 80, 80);
  fill(80);
  rect(211, 211, 80, 80);
  fill(80);
  rect(313.5, 211, 80, 80);
  fill(80);
  rect(416, 211, 80, 80);
  fill(255);
  push();

  strokeWeight(20);
  stroke(matiz);
  strokeCap(SQUARE);
  line(15, 230, 80, 230);
  line(25, 220, 25, 280);
  line(70, 220, 70, 280);
  line(125, 220, 125, 280);
  line(115, 230, 180, 230);
  line(115, 270, 180, 270);
  line(230, 220, 230, 280);
  line(230, 270, 280, 270);
  line(270, 220, 270, 270);
  line(325, 230, 385, 230);
  line(325, 270, 385, 270);
  line(375, 230, 375, 270);
  line(425, 230, 480, 230);
  line(435, 220, 435, 280);
  line(480, 220, 480, 280);

  pop();
  //cuarta fila

  push();
  fill(matizDos);
  rect(6, 313.5, 90, 90);
  fill(matizDos);
  rect(108.5, 313.5, 90, 90);
  fill(matizDos);
  rect(211, 313.5, 90, 90);
  fill(matizDos);
  rect(313.5, 313.5, 90, 90);
  fill(matizDos);
  rect(416, 313.5, 90, 90);
  fill(120);
  rect(16, 313.5, 80, 80);
  fill(120);
  rect(118.5, 313.5, 80, 80);
  fill(120);
  rect(221, 313.5, 80, 80);
  fill(120);
  rect(323.5, 313.5, 80, 80);
  fill(120);
  rect(426, 313.5, 80, 80);
  fill(120);
  rect(18, 315.5, 75, 75);
  fill(120);
  rect(120.5, 315.5, 75, 75);
  fill(120);
  rect(223, 315.5, 75, 75);
  fill(120);
  rect(325.5, 315.5, 75, 75);
  fill(120);
  rect(428, 315.5, 75, 75);
  pop();

  push();
  var matizD = map(posY, 0, height, 40, 255);
  strokeWeight(1);
  stroke(matizD);
  noFill();
  rect(20, 330, 60, 60);
  rect(130, 320, 60, 60);
  rect(235, 325, 60, 60);
  rect(330, 330, 60, 60);
  rect(440, 317, 60, 60);
  ///////////////////////////////////////////////////////
  rect(30, 330, 45, 45);
  rect(20, 337, 45, 45);
  rect(40, 320, 35, 45);
  rect(45, 335, 45, 50);
  rect(20, 327, 45, 45);

  ///////////////////////////////////////////////////////
  rect(135, 335, 45, 45);
  rect(145, 340, 35, 35);
  rect(125, 332, 40, 40);
  rect(140, 345, 25, 45);
  rect(150, 319, 20, 35);
  ////////////////////////////////////////////////////////
  rect(230, 345, 45, 45);
  rect(245, 330, 50, 35);
  rect(235, 325, 35, 35);
  rect(260, 320, 30, 45);
  rect(240, 350, 20, 20);
  /////////////////////////////////////////////////////////
  rect(350, 338, 45, 45);
  rect(345, 320, 45, 35);
  rect(335, 340, 35, 50);
  rect(338, 345, 35, 35);
  rect(360, 335, 30, 30);
  ///////////////////////////////////////////////////////////
  rect(430, 320, 35, 35);
  rect(435, 325, 50, 50);
  rect(450, 340, 45, 40);
  rect(458, 360, 38, 30);
  rect(445, 330, 40, 45);
  pop();

  //quinta fila

  fill(matizDos);
  rect(6, 416, 90, 90);
  fill(matizDos);
  rect(108.5, 416, 90, 90);
  fill(matizDos);
  rect(211, 416, 90, 90);
  fill(matizDos);
  rect(313.5, 416, 90, 90);
  fill(matizDos);
  rect(416, 416, 90, 90);
  fill(160);
  rect(6, 416, 80, 80);
  fill(160);
  rect(108.5, 416, 80, 80);
  fill(160);
  rect(211, 416, 80, 80);
  fill(160);
  rect(313.5, 416, 80, 80);
  fill(160);
  rect(416, 416, 80, 80);
  fill(matiz);
  rect(10, 416, 75, 75);
  fill(matiz);
  rect(112.5, 416, 75, 75);
  fill(matiz);
  rect(215, 416, 75, 75);
  fill(matiz);
  rect(317.5, 416, 75, 75);
  fill(matiz);
  rect(421, 416, 75, 75);
  fill(matizDos);
  rect(15, 416, 60, 60);
  fill(matizDos);
  rect(117.5, 416, 60, 60);
  fill(matizDos);
  rect(220, 416, 60, 60);
  fill(matizDos);
  rect(322.5, 416, 60, 60);
  fill(matizDos);
  rect(426, 416, 60, 60);
  fill(matiz);
  rect(15, 416, 55, 55);
  fill(matiz);
  rect(117.5, 416, 55, 55);
  fill(matiz);
  rect(220, 416, 55, 55);
  fill(matiz);
  rect(322.5, 416, 55, 55);
  fill(matiz);
  rect(426, 416, 55, 55);
  fill(matizDos);
  rect(20, 416, 40, 40);
  fill(matizDos);
  rect(122.5, 416, 40, 40);
  fill(matizDos);
  rect(225, 416, 40, 40);
  fill(matizDos);
  rect(327.5, 416, 40, 40);
  fill(matizDos);
  rect(431, 416, 40, 40);
  fill(matiz);
  rect(25, 421, 30, 30);
  fill(matiz);
  rect(127.5, 421, 30, 30);
  fill(matiz);
  rect(230, 421, 30, 30);
  fill(matiz);
  rect(332.5, 421, 30, 30);
  fill(matiz);
  rect(436, 421, 30, 30);
  fill(matizDos);
  rect(25, 421, 15, 15);
  fill(matizDos);
  rect(127.5, 421, 15, 15);
  fill(matizDos);
  rect(230, 421, 15, 15);
  fill(matizDos);
  rect(332.5, 421, 15, 15);
  fill(matizDos);
  rect(436, 421, 15, 15);
}
