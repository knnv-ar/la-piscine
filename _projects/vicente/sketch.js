/* "vicente" 
OBRA DE SOL PUIG */

let maceta;
let centro;
let petalo;
let tallo;
let cuadro;
let cancion

function preload() {
  maceta = loadImage("maceta.jpg");
  centro = loadImage("centro.jpg");
  petalo = loadImage("petalo.jpg");
  tallo = loadImage("tallo.jpg");
  cuadro = loadImage("cuadro.jpg");
  cancion = loadSound("audio_girasol.mp3");
}

function setup() {
let canvas = createCanvas(300, 500, WEBGL);
canvas.parent('div-sketch');
cancion.loop();
}

function draw() {
  background(2, 217, 188); //celeste
  
  orbitControl();

  //CENTRO
  push();
  noStroke();
  texture(centro);
  translate(0, -90, 0);
  //rotateY(frameCount *0.01);
  //stroke(156, 99, 0); //marron
  //fill(224, 187, 0); //amarillo
  sphere(60);
  pop();

  //PETALOS
  push();
  noStroke();
  texture(petalo);
  translate(-80, -55, 0);
  rotate(-30.3);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(80, -55, 0);
  rotate(30.3);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(-60, -10, 0);
  rotate(-62.12);
  rotateY(frameCount * 0.01);
  // stroke(252, 194, 3);
  // fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(60, -10, 0);
  rotate(62.12);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(-90, -107, 0);
  rotate(14.3);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(90, -107, 0);
  rotate(-14.3);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(0, -197, 0);
  rotate(-15.7);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  push();
  noStroke();
  texture(petalo);
  translate(60, -170, 0);
  rotate(-15.1);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();
  
  push();
  noStroke();
  texture(petalo);
  translate(-60, -170, 0);
  rotate(15.1);
  rotateY(frameCount * 0.01);
  //stroke(252, 194, 3);
  //fill(235, 181, 5);
  cone(20, 100);
  pop();

  //TALLO
  push();
  noStroke();
  texture(tallo);
  translate(0, 30, 0);
  rotateY(frameCount * 0.01);
  //stroke(1, 138, 5);
  //fill(105, 200, 100); //verde
  cylinder(8, 300);
  pop();

  //MACETA
  push();
  translate(0, 200, 0);
  noStroke();
  texture(maceta);
  rotateY(frameCount * 0.01);
  //stroke(168, 63, 2);
  //fill(87, 32, 1); //marron maceta
  cylinder(90, 100);
  pop();

  push();
  noStroke();
  texture(maceta);
  tint(235, 146, 52);
  translate(0, 150, 0);
  rotateY(frameCount * 0.01);
  //stroke(87, 32, 1);
  //fill(138, 51, 1); //marron maceta
  cylinder(100, 30);
  pop();
}
