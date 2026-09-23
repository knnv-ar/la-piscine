//Declaro variables
let tension  = 0;
let movimiento = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  //construcción del espacio.
  dibujarFondo (); //retomo al final el proceso.
  
  tension += 0.05; //formulas para utilizar después
  movimiento += 0.02;

let escala1 = map(sin(movimiento), -1, 1, 0.99, 1.01)

let escala2 = map(sin(movimiento + 0.5), -1, 1, 0.98, 1.02);

let escala3 = map(sin(movimiento + 1), -1, 1, 0.97, 1.03);

  // ========================= LINEA N1
  push();
  translate(256,256);
  scale(escala1);
  translate(-256,-256);
  
  strokeWeight(6); //SOMBRA sumar + para mover x e y
  stroke(60);
  line(128 + 4, 128 + 4, 384 + 4, 128 + 4);
  line(384 + 4, 128 + 4, 384 + 4, 384 + 4);
  line(180 + 4, 384 + 4, 384 + 4, 384 + 4);
  line(128 + 4, 128 + 4, 128 + 4, 384 + 4);
  //=========================
  strokeWeight(5);
  stroke(250);
  line(128, 128, 384, 128);
  line(384, 128, 384, 384);
  line(180, 384, 384, 384);
  line(128, 128, 128, 384);
  pop ();
  // ========================= LINEA N2
  push();
  translate(256,256);
  scale(escala3);
  translate(-256,-256);
  strokeWeight(5); // SOMBRA
  stroke(60);
  line(160 + 4, 160 + 4, 352 + 4, 160 + 4);
  line(352 + 4, 160 + 4, 352 + 4, 352 + 4);
  line(160 + 4, 352 + 4, 352 + 4, 352 + 4);
  line(160 + 4, 160 + 4, 160 + 4, 352 + 4);
  //=========================
  strokeWeight(6);
  stroke(210);
  line(160, 160, 352, 160);
  line(352, 160, 352, 352);
  line(160, 352, 352, 352);
  line(160, 160, 160, 352);
  pop ();
  // ========================= LINEA N3
  push();
  translate(256,256);
  scale(escala2);
  translate(-256,-256);
  strokeWeight(4); //SOMBRA
  stroke(60);
  line(192 + 3, 192 + 3, 320 + 3, 192 + 3);
  line(320 + 3, 192 + 3, 320 + 3, 320 + 3);
  line(192 + 3, 320 + 3, 320 + 3, 320 + 3);
  line(192 + 3, 210 + 3, 192 + 3, 320 + 3);
  //=========================
  strokeWeight(5);
  stroke(165);
  line(192, 192, 320, 192);
  line(320, 192, 320, 320);
  line(192, 320, 320, 320);
  line(192, 210, 192, 320);
  pop();
  // ========================= LINEA N4
  push();
  translate(256,256);
  scale(escala1);
  translate(-256,-256);
  strokeWeight(3); //SOMBRA
  stroke(60);
  line(224 + 2, 224 + 2, 288 + 2, 224 + 2);
  line(288 + 2, 224 + 2, 288 + 2, 288 + 2);
  line(224 + 2, 288 + 2, 275 + 2, 288 + 2);
  line(224 + 2, 224 + 2, 224 + 2, 288 + 2);
  //=========================
  strokeWeight(4);
  stroke(120);
  line(224, 224, 288, 224);
  line(288, 224, 288, 288);
  line(224, 288, 275, 288);
  line(224, 224, 224, 288);
  pop();
  //========================= LINEA N5
  push();
  translate(256,256);
  scale(escala3);
  translate(-256,-256);
  strokeWeight (2); //SOMBRA
  stroke (94);
  line(240 + 2, 240 + 2, 272 + 2, 240 + 2);
  line(272 + 2, 250 + 2, 272 + 2, 272 + 2);
  line(240 + 2, 272 + 2, 272 + 2, 272 + 2);
  line(240 + 2, 240 + 2, 240 + 2, 272 + 2);
  //=========================
  strokeWeight(3);
  stroke(80);
  line(240, 240, 272, 240);
  line(272, 250, 272, 272);
  line(240, 272, 272, 272);
  line(240, 240, 240, 272);
  pop();
  
  //========================= RECTANGULO BYN DERECHO
  noStroke();
  fill(250);
  quad(384, 48, 512, 48, 512, 128, 384, 128);
  fill(0);
  quad(390, 54, 506, 54, 506, 122, 390, 122);
  fill(250);
  quad(396, 60, 500, 60, 500, 116, 396, 116);
  fill(0);
  quad(403, 67, 493, 67, 493, 109, 403, 109);
  fill(250);
  quad(411, 75, 485, 75, 485, 101, 411, 101);
  fill(0);
  quad(420, 82, 476, 82, 476, 94, 420, 94);

  //========================= CUADRADO BYN IZQUIERDO
  noStroke();
  fill(250);
  quad(96, 381, 192, 381, 192, 480, 96, 480);
  fill(0);
  quad(101, 386, 187, 386, 187, 475, 101, 475);
  fill(250);
  quad(105, 390, 183, 390, 183, 471, 105, 471);
  fill(0);
  quad(111, 396, 177, 396, 177, 465, 111, 465);
  fill(250);
  quad(118, 403, 170, 403, 170, 458, 118, 458);
  fill(0);
  quad(125, 410, 163, 410, 163, 451, 125, 451);

  //=========================== CIRCULOS
  //circulo n1
  let tamaño1 = map(sin(tension), -1, 1, 8, 24);
  let gris1 = map(sin(tension + 1), -1, 1, 70, 250);
  fill(gris1);
  ellipse(256, 256, tamaño1, tamaño1);
  
  //circulo n2
  let tamaño2 = map(sin(tension + 2), -1, 1, 8, 30);
  let gris2 = map(sin(tension + 2), -1, 1, 250, 40);
  fill(gris2);
  ellipse(144, 430, tamaño2, tamaño2);
}
  //FONDO CODIGO
function dibujarFondo() {
  push();
  translate(110, 110);
  strokeWeight(2);
  stroke(45);
  noFill();
  
  //primera forma
  beginShape();
  vertex(-90, -50);
  vertex(-40, -50);
  vertex(-20, -70);
  vertex(50, -70);
  vertex(70, -40);
  vertex(70, 20);
  vertex(90, 40);
  vertex(90, 90);
  vertex(20, 90);
  vertex(0, 70);
  vertex(-50, 70);
  vertex(-70, 40);
  vertex(-90, 40);
  endShape(CLOSE);
  //segunda forma, más pequeña
  stroke(60);
  noFill();
  beginShape();
  vertex(-65, -35);
  vertex(-30, -35);
  vertex(-15, -50);
  vertex(35, -50);
  vertex(50, -25);
  vertex(50, 15);
  vertex(65, 30);
  vertex(65, 60);
  vertex(15, 60);
  vertex(0, 45);
  vertex(-35, 45);
  vertex(-50, 25);
  vertex(-65, 25);
  endShape(CLOSE);
  //tercera forma
  stroke(75);
  beginShape();
  vertex(-35, -20);
  vertex(-15, -20);
  vertex(0, -35);
  vertex(25, -35);
  vertex(35, -15);
  vertex(35, 10);
  vertex(45, 20);
  vertex(45, 35);
  vertex(15, 35);
  vertex(0, 25);
  vertex(-20, 25);
  vertex(-35, 10);
  endShape(CLOSE);
  pop();
  
  //recorridos
  strokeWeight(2);
  stroke(45);
  noFill();
  //recorrido n1
  beginShape();
  vertex(200,180);
  vertex(230, 180);
  vertex(230, 140);
  vertex(310, 140);
  vertex(310, 200);
  vertex(400, 200);
  vertex(400, 160);
  vertex(512, 160);
  endShape();
  //recorrido n2
  beginShape();
  vertex(0, 300);
  vertex(80, 300);
  vertex(80, 260);
  vertex(140, 260);
  vertex(140, 330);
  vertex(220, 330);
  vertex(220, 280);
  vertex(300, 280);
  vertex(300, 340);
  vertex(380, 340);
  vertex(380, 300);
  vertex(512, 300);
  endShape(); 
  //recorrido n3
  beginShape();
  vertex(20, 450);
  vertex(100, 450);
  vertex(100, 400);
  vertex(180, 400);
  vertex(180, 470);
  vertex(260, 470);
  vertex(260, 420);
  vertex(340, 420);
  vertex(340, 480);
  vertex(430, 480);
  vertex(430, 430);
  vertex(512, 430);
  endShape();

  //=========================== FONDO LINEAS
  stroke(45);
  line(32,480,40,480);
  line(45,480,55,480);
  line(62,480,80,480);
  line(80,480,80,490);
  line(90,490,110,490);
  line(120,490,135,490);
  line(140,490,170,490);
  line(180,490,210,490);
  line(215,490,225,490);
  line(230,490,260,490);
  line(265,425,265,490);
  line(270,425,290,425);
  line(300,425,330,425);
  line(335,425,335,490);
  line(340,490,380,490);
  line(385,490,400,490);
  line(410,490,420,490);
  line(425,490,430,490);
  line(440,435,440,490);
  line(445,435,460,435);
  line(470,435,490,435);
  line(500,435,511,435);

  line(10,310,40,310);
  line(50,310,80,310);
  line(85,280,85,310);
  line(85,265,85,275);
  line(90,265,110,265);
  line(120,265,135,265);
  line(135,270,135,335);
  line(145,335,180,335);
  line(185,335,220,335);
  line(225,300,225,335);
  line(290,300,290,345);
  line(300,345,350,345);
  line(360,345,380,345);
  line(395,310,420,310);
  line(430,310,445,310);
  line(450,310,470,310);
  line(475,310,490,310);
  line(496,310,508,310);

  line(236,146,250,146);
  line(260,146,275,146);
  line(280,146,300,146);
  line(300,150,300,180);
  line(300,185,300,200);
  line(300,205,320,205);
  line(330,205,350,205);
  line(360,205,380,205);
  line(385,205,395,205);
  line(405,165,405,180);
  line(405,185,405,190);
  line(405,195,405,205);
  line(410,165,425,165);
  line(430,165,460,165);
  line(470,165,490,165);
  line(495,165,510,165);
}
