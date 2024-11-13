/*
Resvistas
apretta click para leer
Escrito=
link-> https://docs.google.com/document/d/1HqzYwPZ763UzxRni9wO6a-6oTB3voqONPcnAiIRYMGs/edit?usp=sharing
Drive con los archivos=
Link-> https://drive.google.com/drive/folders/1Hs-rDk1IqANNjHbpCLlW5M8NJGVojQx0?usp=sharing
*/

//Imagenes
let mesaCompleta;
let revistaPagHilde1;
let revistaPagHilde2;
let revistaPag3Helelil1;
let revistaPag3Helelil2;
//Audio
let aspen1023
//Cambio de escenas
let escenas = 0;

function preload() {
//Imagenes
  mesaCompleta = loadImage("Imagenes/Escena1_mesa_completa.png");
  revistaPagHilde1 = loadImage("Imagenes/paginaHilde1.png");
  revistaPagHilde2 = loadImage("Imagenes/paginaHilde2.png");
  revistaPag3Helelil1 = loadImage("Imagenes/paginaHellelil1.png")
  revistaPag3Helelil2 = loadImage("Imagenes/paginaHellelil2.png")
//sonido
  aspen1023 = loadSound ("./Musica/audioAspen.mp3")
}

function setup() {

  let canvas = createCanvas(700, 400); 
  canvas.parent('div-sketch');

  //audio de fondo
  aspen1023.loop();
}

function draw() {
//Funcion para cambio de escenas
  if (escenas === 0) {
    escena1();
  } else if (escenas === 1) {
    escena2();
  } else if (escenas === 2) {
    escena3();
  }
  else if (escenas === 3) {
    escena4();
  }
  else if (escenas === 4) {
    escena5();
  }
}

function mousePressed() {
  escenas = (escenas + 1) % 5;
}
function escena1() {
  //Imagen
  image(mesaCompleta, 0, 0);
 }
function escena2() {
  //imagen
  image(revistaPagHilde1, 0, 0);
 }
function escena3() {
  //imagen
  image(revistaPagHilde2, 0, 0);
  }
function escena4() {
  //imagen
  image(revistaPag3Helelil1, 0, 0);
  }
function escena5() {
  //imagen
  image(revistaPag3Helelil2, 0, 0);
  }