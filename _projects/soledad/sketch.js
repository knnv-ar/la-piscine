/*Tocando cualquiera de las siguientes letras o numeros: 1, 2, 3, 4, 5, 6, 7, q, w, e, r,, t, y, a, s, d, f, g, h, j, k, z, x, c, v, b, n, m Y , se pueden generar interacciones.*/

/*Moviendo el mouse por encima de la pantalla de izquierda a derecha se regula el paneo mientras que moviendolo de arriba a abajo se regula el volumen.*/

/*Moviendo del mouse por encima del lienzo se pinta y dibuja la pelota del medio y se regula el tipo de luz que hay sobre los objetos.*/

var fondo;
var musica;
var fondo;
var vid;
var vid1;
var vid2;
var rt = [];

function preload() {
  musica = loadSound("musicaa.mp3");
  musica2 = loadSound("musica2.mp3");
  musica3 = loadSound("musica3.mp3");
  musica4 = loadSound("musica4.mp3");
  musica5 = loadSound("musica5.mp3");
  fondo = loadImage("fondo.png");
  fondo1 = loadImage("fondo.png");
  fondo2 = loadImage("fondo2.jpg");
  fondo3 = loadImage("fondo3.jpg");
  fondo4 = loadImage("fondo4.jpg");
  fondo5 = loadImage("fondo5.png");
  fondo6 = loadImage("fondo6.jpg");
  fondo7 = loadImage("fondo7.jpg");
  fondo8 = loadImage("fondo8.jpg");
}

function setup() {
  let canvas = createCanvas(400, 300, WEBGL);
canvas.parent('div-sketch');
  musica.loop();

  //video de los cuadrados superiores
  vid1 = createVideo("video.mp4");
  vid1.size(320, 240);
  vid1.hide();
  vid1.loop();
  vid2 = createVideo("video2.mp4");
  vid2.size(320, 240);
  vid2.hide();
  vid2.loop();
  vid3 = createVideo("video3.mp4");
  vid3.size(320, 240);
  vid3.hide();
  vid3.loop();
  vid4 = createVideo("video4.mp4");
  vid4.size(320, 240);
  vid4.hide();
  vid4.loop();
  vid = vid1;

  grafico = createGraphics(200, 200);
  grafico.background(118, 3, 132);
  
  rt[0] = "0.01";
  rt[1] = "-0.01";
  rt[2] = "0.005";
  rt[3] = "0.01";
  rt[4] = "0.01";
}

function draw() {
  background(220);
  //Imagen de fondo
  image(fondo, -200, -150, 400, 300);

  //Cuadrado superior izquierdo
  push();
  translate(-122, -100);
  rotateY(frameCount * rt[0]);
  texture(vid);
  box(50, 50, 50, 50);
  pop();

  //Cuadrado superior derecho
  push();
  translate(122, -100);
  rotateY(frameCount * rt[1]);
  texture(vid);
  box(50, 50, 50, 50);
  pop();

  //Interaccion para pintar/dibujar la esfera central
  grafico.fill(10, 135, 163);
  grafico.ellipse(40, 40, mouseX, mouseY);

  //esfera central
  push();
  rotateX(frameCount * rt[2]);
  texture(grafico);
  sphere(40);
  pop();

  //Tipo de luz y para interactuar con ella
  var mY = mouseX - width / 4;
  var mX = mouseY - height / 4;
  specularMaterial(255);
  ambientLight(25);
  pointLight(44, 246, 212, mX, mY, 0);

  //cono
  push();
  rotateY(frameCount * rt[3]);
  translate(-125, 50, 0);
  cone(25, 50); //Parámetros: radio, altura
  pop();

  //cono 2
  push();
  rotateY(frameCount * rt[3]);
  translate(125, 50, 0);
  cone(25, 50); //Parámetros: radio, altura
  pop();

  //dona
  push();
  rotateX(frameCount * rt[4]);
  translate(0, 105, 0);
  torus(15, 5); //Parámetros: radio exterior, radio interior
  pop();

  //dona 2
  push();
  rotateX(frameCount * rt[4]);
  translate(0, -105, 0);
  torus(15, 5); //Parámetros: radio exterior, radio interior
  pop();

  //Para modificar el paneo y el volumen
  var paneo = map(mouseX, 100, width, 0, 1);
  musica.pan(paneo);

  var volumen = map(mouseY + 80, 100, height, 1, 0);
  musica.setVolume(volumen);
}

function keyPressed() {
  //Para pausar, poner stop y play a la musica
  if (key == "6") {
    musica.pause();
    musica2.pause();
    musica3.pause();
    musica4.pause();
    musica5.pause();
  }
  if (key == "7") {
    musica.stop();
    musica2.stop();
    musica3.stop();
    musica4.stop();
    musica5.stop();
  }
  if (key == "5") {
    musica.play();
    musica2.stop();
    musica3.stop();
    musica4.stop();
    musica5.stop();
  }
  //Para cambiar de cancion
  if (key == "4") {
    musica.stop();
    musica3.stop();
    musica4.stop();
    musica5.stop();
    musica2.loop();
  }
  if (key == "1") {
    musica.stop();
    musica2.stop();
    musica4.stop();
    musica5.stop();
    musica3.loop();
  }
  if (key == "2") {
    musica.stop();
    musica2.stop();
    musica3.stop();
    musica5.stop();
    musica4.loop();
  }
  if (key == "3") {
    musica.stop();
    musica2.stop();
    musica3.stop();
    musica4.stop();
    musica5.loop();
  }
  //Para pausar, poner stop, play al video o cambiarlo por otro video.
  if (key == "t" || key == "T") {
    vid.pause();
    vid2.pause();
  }
  if (key == "y" || key == "Y") {
    vid.stop();
    vid2.stop();
  }
  if (key == "w" || key == "W") {
    vid = vid1;
    vid.play();
  }
  if (key == "q"|| key == "Q") {
    vid = vid2;
    vid.loop();
  }
  if (key == "e"|| key == "E") {
    vid = vid3;
    vid.loop();
  }
  if (key == "r"|| key == "R") {
    vid = vid4;
    vid.loop();
  }
  //Para cambiar el fondo
  if (key == "a" || key == "A") {
    fondo = fondo2;
  }
  if (key == "s" || key == "S") {
    fondo = fondo3;
  }
  if (key == "d" || key == "D") {
    fondo = fondo4;
  }
  if (key == "f" || key == "F") {
    fondo = fondo5;
  }
  if (key == "g" || key == "G") {
    fondo = fondo6;
  }
  if (key == "h" || key == "H"){
    fondo = fondo7;
  }
  if (key == "j" || key == "J"){
    fondo = fondo8;
  }
  if (key == "k" || key == "K"){
    fondo = fondo1;
  }
  //Para cambiar la direccion de las figuras
 if (key == "z" || key == "Z") {
    rt[0] = "-0.01";
    rt[1] = "0.01";
  }
  if (key == "x" || key == "X") {
    rt[0] = "0.01";
    rt[1] = "-0.01";
  }
 if (key == "c" || key == "C") {
    rt[2] = "-0.005";
  }
  if (key == "v" || key == "V") {
    rt[2] = "0.005";
  }
 if (key == "b" || key == "B") {
    rt[3] = "-0.01";
  }
  if (key == "n" || key == "N") {
    rt[3] = "0.01";
  }
 if (key == "m" || key == "M") {
    rt[4] = "-0.01";
  }
 if (key == ",") {
    rt[4] = "0.01";
  }

}
