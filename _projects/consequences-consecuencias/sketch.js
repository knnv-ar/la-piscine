// Vivian Choque Ramirez
// Parcial N° 02
// instrucciones del Sketches haciendo "Click" izquierdo en el mismo.

var imagen, imagen2, imagen3, imagen4;
var voces;
var mouseX;
var mouseY;
var texto = "Ⱨ₳ⱠⱠɄ₵ł₦₳₮łØ₦";
var texto2 = "INSTRUCCIONES";

function preload() {
  imagen = loadImage("archivos/susurro.gif");
  imagen2 = loadImage("archivos/estrellas.gif");
  imagen3 = loadImage("archivos/humo.png");
  imagen4 = loadImage("archivos/manos.gif");
  voces = loadSound("archivos/voces.mp3");
  
}
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  voces.loop();  
}

function draw() {
  // imagen
  tint(255, 215, 261);
  image(imagen, 0, 0, 600, 600);
  image(imagen2, 0, 0, 600, 600);
  // volumen
  var volumen = map(mouseY, 1, height, 4, 0);
  voces.setVolume(volumen);
  // texto
  text(texto, 145, 590);
  stroke(0);
  fill(155, 10, 10);
  textSize(40);
  // texto 2
  text(texto, 150, 590);
  stroke(0);
  fill(71, 75, 78);
  textSize(40);
  // imagen
  image(imagen3, 0, 0, 600, 2200);
  filter(DILATE);
  if (mouseIsPressed) {
    image(imagen4, 0, 0, 600, 600); // instrucciones
    text(texto2, 140, 80);
    fill(255, 255, 255);
    textSize(40);
}
}

function keyPressed() { // detener
  if (key == "s") {
    voces.stop();
  }
  if (key == "p") { // pausar
    voces.pause();
  }
  if (key == " ") { // reproducir
    voces.loop();
  } 

}
