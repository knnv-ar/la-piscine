//Fernández Ana Irupé
var video;
var font;
var nivel, paso;
var imgVerde, img1, img2, img3, imgRoja;
var x1 = 290, x2 = 650;
var keyPressed;
var rectX, rectY, rect2X, rect2Y; // Position of square button

function setup () {
  let canvas = createCanvas(650, 650);
  canvas.parent('div-sketch');
  IniciarVariables();
  video= createCapture(VIDEO);
  video.size(400, 400);
  video.hide();
}

function draw() {
  background(255);
  
  if (nivel == 0) {
    Inicio ();
  }
  if (nivel == 1) {
    Reloj ();
  }
  if (nivel == 2) {
    Escapar ();
  }
  if (nivel == 3) {
    Entrar ();
  }
  if (nivel == 4) {
    ManzanaVerde ();
  }
  if (nivel == 5) {
    ManzanaRoja ();
  }
}

function keyPressed() {
  if (key == '|') {
    paso = 1;
  }
  if (key == '4') {
    paso = 2;
  }
  if (key == 'i') {
    paso = 3;
  }
  if (key == 'o') {
    paso = 4;
  }
  if (key == 'w') {
    paso = 5;
  }
  if (key == '_') {
    paso = 6;
  }
  if (key == '1') {
    paso = 7;
  }
  if (key == '*') {
    paso = 8;
  }
  if (key == '-') {
    paso = 9;
  } 
  if (key == '9') {
    paso = 10;
  } 
  if (key == '&') {
    paso = 11;
  }
  if (key == '0') {
    paso = 12;
  }
  if (key == '¿') {
    paso = 13;
  }
  if (key == '/') {
    paso = 14;
  }
  if (key == ' ') {
    paso = 15;
  }
  
}


function mousePressed () {

  if (mouseX > 0 && mouseY > 60 && mouseX < 650 && mouseY < 650) { //reloj
    nivel = 1;
  }
  if ( mouseX > 50 && mouseY > 30 && mouseX < 130 && mouseY < 60) { // a escape
    nivel = 2;
  }
  if (mouseX > 510 && mouseY > 30 && mouseX < 590 && mouseY < 60) { //a entrada
    nivel = 3;
  }
  if (mouseX > 55 && mouseY > 290 && mouseX < 140  && mouseY < 380) {
    nivel = 4; // a manzana verde
  }
  if (mouseX > 250 && mouseY > 490 && mouseX < 400 && mouseY < 600 ) {
    nivel = 5; // a manzana roja270, 470
  }
}


function IniciarVariables() { //DECLARO VARIABLES
  nivel = 0;
  paso = 0;
  rect2X = 510; 
  rect2Y = 30;
  rectX = 50;  
  rectY = 30;
  imgVerde = loadImage ("manzanaverde.png");
  imgRoja = loadImage ("manzanaroja.png");
  img1 = loadImage ("manzana1.jpeg");
  img2 = loadImage ("manzana2.jpeg");
  img3 = loadImage ("manzana3.jpeg");
}
function Inicio () {
  background (0);
  fill (249, 65, 82);
  ellipse (random(650), random(650), 20, 20 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 20, 20 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 10, 10 );
  fill(81, 116, 73);
  ellipse (random(650), random(650), 20, 20 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 20, 20 );
  ellipse (random(650), random(650), 10, 10 );
  ellipse (random(650), random(650), 10, 10 );
  fill (255);

  text ("Haz CLICK para comenzar", 200, 550);

  text ("TIEMPO ", 240, 250);
  text (" CONTEMPORÁNEO", 100, 300);
}
function Reloj () {
  background(255);
  if (mouseX>320) {
    fill (0);
    ellipse (320, 320, 600, 600);
    fill (255);

    text("NO", 150, 200);
    text("HAY", 380, 250);
    text("MÁS", 220, 500);
    fill (0);
    noStroke();
    rect (rect2X, rect2Y, 80, rectY);
    fill(255);
    text ("Entrar", 525, 50);
    ellipse (315,310,30,30);
    rect (310, 50, 10, 260);
    rect (150, 310, 155, 8);
 stroke(255);
 line (310, 300, 500, 500);
 
  }
  if (mouseX<320) {
    fill (0);
    text("1", 430, 90);
    text("2", 560, 200);
    text("3", 580, 340);
    text("4", 570, 460);
    text("5", 470, 560);
    text("6", 300, 600);
    text("7", 150, 560);
    text("8", 90, 450);
    text("9", 50, 340);
    text("10", 90, 200);
    text("11", 180, 90);
    text("12", 300, 60);
    noStroke();
    rect(rectX, rectY, 80, rectY);
    fill(255);
    text ("Escapar", 60, 50);
    fill (0);
     ellipse (315,310,30,30);
    rect (310, 50, 10, 260);
    rect (150, 310, 155, 8);
 stroke(0);
 line (310, 300, 500, 500);
 
  }
}
function Escapar () { //COME OUT
  background (0);
  fill(255);
  
}

function Entrar () { 
  background (0);
  
  text("ROJO VERDE ROJO VERDE R", 0, x1);
  text("ROJO VERDE ROJO VERDE R", 0, x2);
  text("ROJO VERDE ROJO ", 0, 260);
  text("ROJO VERDE ROJO ", 0, 310);
  text("ROJO VERDE ROJO ", 0, 360);
  text("ROJO VERDE ROJO ", 0, 410);
  text("ROJO VERDE ROJO VERDE R", 0, 460);
  text("ROJO VERDE ROJO VERDE R ", 0, 510);
  text("ROJO VERDE ROJO VERDE R", 0, 560);
  text("ROJO VERDE ROJO VERDE R", 0, 610);
  text("ROJO VERDE ROJO VERDE R", 0, 660);
  text("ROJO VERDE ROJO ", 0, 235);
  text("ROJO VERDE ROJO ", 0, 285);
  text("ROJO VERDE ROJO ", 0, 335);
  text("ROJO VERDE ROJO ", 0, 385);
  text("ROJO VERDE ROJO VERDE R", 0, 435);
  text("ROJO VERDE ROJO VERDE R", 0, 485);
  text("ROJO VERDE ROJO VERDE R ", 0, 535);
  text("ROJO VERDE ROJO VERDE R", 0, 585);
  text("ROJO VERDE ROJO VERDE R", 0, 635);
  text("ROJO VERDE ROJO VERDE R", 0, 685);

  fill (0);
  rect (216, 200, 100, 50);
  image (img1, 1, 1, 216, 216);
  image (img2, 217, 217, 216, 216);
  image (img3, 433.5, 433.5, 216, 216);
  image (imgVerde, -170, 200, 320, 200);
  image (imgRoja, 270, 470, 95, 120);
  fill (255);
  
  text ("¿QUÉ  VAS", 240, 80);
  text ("A ELEGIR", 340, 190);
  text ("HOY?", 455, 300);

  x1 += 5.0;
  x2 -= 5.0;
  if (x1 > 650) {
    x1 = 290;
  }
  if (x2 < 240) {
    x2 = 650;
  }
}

function ManzanaVerde () {
  background (0);
  stroke (255);
  rect (50, 130, 520, 80);
  fill(0);
  stroke(255);
  rect (15, 80, 155, 30);
  rect (50, 280, 520, 30);
  rect (190, 450, 260, 30);
 
  fill(255);
  text ("Decifrar el código", 25, 100);
  fill (0);
  text (" A  B  C  D  E  F  G  H  I  J  K  L  M  N  Ñ  O  P  Q  R  S  T  U  V  W  X  Y  Z", 60, 160);
  text ("4   8   *   o    w  7   <   #  1  /  +  |    _    -   =   0   9  @  &  ¿  ¡   n  u  m   *  %  $", 60, 190);
  fill(255);
  text (" E  _   _  C   _ O       _    _      _    _  R A R   _   O   _   L O S   _   _ O P I   _   _   O  _  O S  ", 60, 300);
  
  if (paso == 1) {
    text (" L ", 75, 300);
  }
  if (paso == 2) {
    text (" L   A ", 75, 300);
  }
  if (paso == 3) {
    text (" L   A       T ", 75, 300);
  }
  if (paso == 4) {
    text (" L   A    T           D  ", 75, 300);
  }
  if (paso == 5) {
    text (" L   A    T           D   E ", 75, 300);
  }
  if (paso == 6) {
    text (" L   A    T           D   E      M", 75, 300);
  }
  if (paso == 7) {   
    text (" L   A    T           D   E      M   I", 75, 300);
  }
  if (paso == 8) {
    text (" L   A    T           D   E      M    I                 C ", 75, 300);
  }
  if (paso == 9) {
    text (" L   A    T           D   E      M    I                 C       N ", 75, 300);
  }
  if (paso == 10) {
    text (" L   A    T           D   E      M    I                 C      N               P", 75, 300);
  }
  if (paso == 11) {
    text (" L   A    T           D   E      M    I                 C      N               P    R", 75, 300);
  }
  if (paso == 12) {
    text (" L   A    T           D   E      M    I                 C      N               P    R           O", 75, 300);
  }
  if (paso == 13) { 
    text (" L   A    T           D   E      M    I                 C      N               P    R           O   S ", 75, 300);
  }
  if (paso == 14) {
    text (" L   A    T           D   E      M    I                 C      N               P    R           O   S         J ", 75, 300);
  }
  //MITO
 
  fill(255);
  
}
function  ManzanaRoja () { // AGREGAR CAMARA WEB
  background (0);
  fill(0);
  stroke(255);
  rect (230, 50, 200, 30);
  
  fill(255);
 
  text ("Sonría lo estamos filmando", 250, 70);
  image(video, 100, 100);
}
