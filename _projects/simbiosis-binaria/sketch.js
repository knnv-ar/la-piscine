let pasto;
let cielo;
let fuego;
let aire;
let agua;
let tierra;
let texturActual1;
let texturaActual2;
let texturaActual3;
let texturaActual4;
let audio;
let negro;
let blanco;
let tam = 40;
let posy = 'y';
let posx = 'x';


function preload () {
  cielo = createVideo('visual/cielo.mp4');
  pasto = createVideo('visual/pasto.mp4');
  negro = loadImage('visual/negro.jpg');
  blanco = loadImage('visual/blanco.png');
  audio = loadSound('audio.mp3');
  audio1 = loadSound('audio1.mp3');
  
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  
  cielo.size(600, 600);
  cielo.hide();
  cielo.loop();
  
  pasto.size(600, 600);
  pasto.hide();
  pasto.loop();
  
   // Llama a las funciones Loaded cuando sus respectivos videos terminan de cargar:
  
  fuego = createVideo('visual/fuego.mp4', fuegoLoaded);
  fuego.size(tam); 
  fuego.hide();
  fuego.loop();
  fuego.elt.muted = true;
  
  agua = createVideo('visual/agua.mp4', aguaLoaded);
  agua.size(tam);
  agua.hide();
  agua.loop();
  agua.elt.mutes = true;
  
  aire = createVideo('visual/aire.mp4', aireLoaded);
  aire.size(tam);
  aire.hide();
  aire.loop();
  aire.elt.muted = true;
  
  tierra = createVideo('visual/tierra.mp4', tierraLoaded);
  tierra.size(tam);
  tierra.hide();
  tierra.loop();
  tierra.elt.muted = true;
  
  texturaActual1 = fuego;
  texturaActual2 = agua;
  texturaActual3 = aire;
  texturaActual4 = tierra;
  // ---------------------------------------------------------------------------------
  
  // se loopea el audio de fondo.
  audio.play();
  audio.loop();
  
}

function fuegoLoaded() {
  fuego.play()
  fuego.loop();
}

function aguaLoaded() {
  agua.play();
  agua.loop();
}

function aireLoaded() {
  aire.play();
  aire.loop();
}

function tierraLoaded() {
  tierra.play();
  tierra.loop();
}

function draw() {
  
  
  //dibuja los planes de fondo
  push();
  noStroke();
  texture(cielo);
  translate(-10, -150, 0);
  plane(600, 300);
  pop();
  
  push();
  noStroke();
  texture(pasto);
  translate(-10, 150, 0)
  plane(600, 300)
  pop();
  
  //dibuja las figuras

  push();
  noStroke();
  texture(texturaActual1);
  translate(70, -90, 220);
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.008);
  cylinder(tam);
  pop();
  
  push();
  noStroke();
  texture(texturaActual2);
  translate(70, 90, 220);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.006);
  ellipsoid(tam);
  pop();
  
  push();
  noStroke();
  texture(texturaActual3);
  translate(-70, -90, 250);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);
  cone(tam);
  pop();
  
  push();
  noStroke();
  texture(texturaActual4);
  translate(-70, 90, 250);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  box(tam * 1.2);
  pop();
  
  //condición if si clickea el mouse para los cuadrados negros y blancos de fondo.
  
       if (mouseIsPressed){
  image(negro, 0, 0, -600, 600);
  image(negro,  0, 0, 600, -600);
  image(blanco, 0, 0, 300, 300);    
  image(blanco, 0, 0, -300, -300);  
 }
  
 }

//función click de mouse para que cambie el audio y cambien las texturas de las figuras entre ellas. 

function mousePressed() {
  audio1.play(); 
  audio.stop();
  
  texturaActual1 = tierra;
  texturaActual2 = fuego;
  texturaActual3 = agua;
  texturaActual4 = aire;
   
}

//función para cuando suelta el click del mouse vuelve al primer audio y retomen sus texturas originales las figuras.

function mouseReleased() { 
      audio1.stop();
      audio.play();
      audio.loop();
  
  texturaActual1 = fuego;
  texturaActual2 = agua;
  texturaActual3 = aire;
  texturaActual4 = tierra;
}

