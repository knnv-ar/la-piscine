let img;
let img2;
let img3;
let img5;
let img5a;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
var cancion;

function preload() {
  img = loadImage("assets/edificios.webp");
  img2 = loadImage("assets/edificios2.webp");
  img3 = loadImage("assets/edificios3.webp");
  img5 = loadImage("assets/edificios5.webp");
  img5a = loadImage("assets/edificios5a.webp");
  img6 = loadImage("assets/edificios6.webp");
  img7 = loadImage("assets/barrio-1.webp");
  img8 = loadImage("assets/barrio-2.webp");
  img9 = loadImage("assets/barrio-3.webp");
  img10 = loadImage("assets/barrio-4.webp");
  img12 = loadImage("assets/edificios9jpeg.webp");
  cancion = loadSound("assets/louuud.m4a");
}

function setup() {


  let canvas = createCanvas(500, 600, WEBGL);
  canvas.parent('div-sketch');

 cancion.loop();
}

function draw() {
  
  
  orbitControl();

  background(200);
  noCursor();
  noStroke();
  rotateY(frameCount * 0.001);
  scale (0.5);
  push();
  texture(img);
  translate(120, 0, 0);
  box(70, 350, 70);
  pop();

  push();
  texture(img2);
  translate(0, -50, 0);
  box(100, 450, 90);
  pop();

  push();
  texture(img2);
  translate(0, -300, 0);
  box(90, 50, 90);
  pop();

  push();
  texture(img2);
  translate(0, -350, 0);
  box(80, 50, 90);
  pop();

  push();
  texture(img2);
  translate(0, -400, 0);
  box(70, 50, 90);
  pop();

  push();
  texture(img2);
  translate(0, -450, 0);
  box(60, 50, 90);
  pop();

  push();
  texture(img2);
  translate(0, -500, 0);
  box(50, 50, 90);
  pop();

  push();
  texture(img6);
  translate(-120, 0, 0);
  box(80, 350, 100);
  pop();

  push();
  texture(img6);
  translate(-120, -210, 0);
  box(40, 70, 100);
  pop();

  push();
  texture(img7);
  translate(0, 120, 130);
  box(240, 300, 60);
  pop();

  push();
  texture(img8);
  translate(0, 0, -90);
  box(80, 450, 70);
  pop();

  push();
  texture(img10);
  translate(170, 30, -100);
  box(50, 790, 30); //Parámetros: ancho y alto
  pop();

  push();
  texture(img12);
  translate(-170, 30, -100);
  box(50, 290, 30);
  pop();

  push();
  texture(img3);
  translate(-90, 130, -100);
  box(50, 760, 30);
  pop();

  push();
  texture(img);
  translate(-70, -0, -75);
  box(50, 910, 30);
  pop();

  push();
  texture(img10);
  translate(90, -50, -100);
  box(50, 380, 30);
  pop();

  push();
  texture(img2);
  translate(120, -50, -160);
  box(50, 440, 30);
  pop();

  push();
  texture(img2);
  translate(120, -290, -160);
  box(40, 40, 30);
  pop();

  push();
  texture(img2);
  translate(120, -330, -160);
  box(10, 40, 30);
  pop();

  push();
  texture(img12);
  translate(200, -50, -160);
  box(80, 320, 30);
  pop();

  push();
  texture(img7);
  translate(-200, -50, -160);
  box(80, 260, 30);
  pop();

  push();
  texture(img2);
  translate(-90, -50, -160);
  box(50, 480, 30);
  pop();

  //CUADRADOSDELANTEROS BLANCOS
  push();

  texture(img9);
  translate(-150, 190, 180);
  box(90, 160, 10);
  pop();

  push();
  texture(img9);
  translate(150, 190, 180);
  box(100, 160, 10);
  pop();

  push();
  texture(img2);
  translate(170, 200, 80);
  box(40, 350, 30);
  pop();

  push();
  texture(img2);
  translate(-170, 200, 80);
  box(40, 350, 30);
  pop();

  push();
  texture(img5);
  translate(250, 100, 10);
  box(140, 150, 60);
  pop();

  push();
  texture(img5a);
  translate(-250, 100, 10);
  box(80, 170, 30);
  pop();

}