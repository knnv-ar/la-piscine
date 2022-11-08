let cancionn;

let a = 1;
let luzdeX = 0;
let luzdeY = 0;
var transla = -200;
var velocidadx = 2;
var img4;
var img3;
var img2;
var img1;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var x = 5;

function preload() {
  cancionn = loadSound("bassturbation.mp3");
  img01 = loadImage("imagenes/dnts.jpg");
  img02 = loadImage("imagenes/DSC00138.JPG");
  img04 = loadImage("imagenes/IMG_4073.jpg");
  img05 = loadImage("imagenes/prot11.jpg");
  img06 = loadImage("imagenes/prot18.jpg");
  img07 = loadImage("imagenes/prot15.jpg");
  img08 = loadImage("imagenes/prott.jpg");
  img09 = loadImage("imagenes/prot13.jpg");
  img010 = loadImage("imagenes/prot4.jpg");
}

function setup() {
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('div-sketch');
  cancionn.loop();
}

function draw() {
  background(0);
  
  x += velocidadx;

  image(img06, -x, -x);
  if (frameCount > 300) image(img02, -x, -x);
  if (frameCount > 550) image(img01, -x, -x);

  noStroke();
  specularMaterial(125);

  pointLight(225, 225, 150, luzdeX, luzdeY, 800);
  rotateY(a * frameCount * 0.01);

  texture(img05);
  sphere(100);

  texture(img07);
  translate(100, 100, 100);
  sphere(150);

  texture(img08);
  translate(100, -150, 150);
  sphere(200);

  texture(img04);
  translate(-100, -200, -300);
  sphere(150);

  texture(img06);
  translate(-300, 200, -100);
  sphere(100);

  texture(img09);
  translate(30, 20, 330);
  sphere(100);

  texture(img04);
  translate(-250, 246, -105);
  sphere(200);
}
