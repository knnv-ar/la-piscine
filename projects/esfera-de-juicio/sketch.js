let anillo1 = 0;
let anillo2 = 0;
let anillo3 = 0;
let anillo4 = 0;
let maxDistancia;
let maxDistancia2;
let ruido;
let blanco;
let voces1;
let voces2;
let voces3;
let voces4;

function preload() {
  ruido = loadImage('ruido.gif');
  blanco = loadSound('audios/blanco.mp3');
  voces1 = loadSound('audios/voces1.mp3');
  voces2 = loadSound('audios/voces2.mp3');
  voces3 = loadSound('audios/voces3.mp3');
  voces4 = loadSound('audios/voces4.mp3');
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');

  noStroke();
  
  blanco.loop();
  voces1.loop();
  voces2.loop();
  voces3.loop();
  voces4.loop();
  
  blanco.setVolume(0);
  voces1.setVolume(0);
  voces2.setVolume(0);
  voces3.setVolume(0);
  voces4.setVolume(0);

  maxDistancia = dist(255, 255, width / 2, height / 2);
  maxDistancia2 = dist(600, 600, width / 2, height / 2);
  blanco.setVolume(0);
}

function draw() {
  background(0);

  let distancia = dist(mouseX, mouseY, width / 2, height / 2);
  let color = map(distancia, 255, maxDistancia, 255, 0);
  let opacidad = map(distancia, 0, maxDistancia, 255, 50);
  
  pointLight(255, 255, 255, 0, 0, 200);

  // Esfera
  push();
  fill(255, color);
  translate(0, 0, 0);
  sphere(50);
  pop();

  // Anillos
  push();
  rotateX(anillo1);
  rotateY(anillo1);
  fill(random(0,255), random(0,255), random(0,255), 100);
  torus(140, 5);
  pop();

  push();
  rotateX(anillo2);
  rotateZ(anillo2);
  fill(random(0,255), random(0,255), random(0,255), 100);
  torus(140, 5);
  pop();
  
  push();
  rotateX(anillo3);
  rotateY(anillo3);
  fill(random(0,255), random(0,255), random(0,255), 100);
  torus(140, 5);
  pop();

  push();
  rotateX(anillo4);
  rotateZ(anillo4);
  fill(random(0,255), random(0,255), random(0,255), 100);
  torus(140, 5);
  pop();

  // Rotaciones de los anillos
  anillo1 += 0.020;
  anillo2 += 0.015;
  anillo3 += 0.010;
  anillo4 += 0.005;

  let volumen = map(distancia, 1, maxDistancia2, 1, 0);
  blanco.setVolume(volumen);
  voces1.setVolume(volumen);
  voces2.setVolume(volumen);
  voces3.setVolume(volumen);
  voces4.setVolume(volumen);

  tint(255, opacidad);
  image(ruido, -300, -300);
}

document.oncontextmenu = function() {
  return false;
}