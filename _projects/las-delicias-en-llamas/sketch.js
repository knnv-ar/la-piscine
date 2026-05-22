//Universidad Nacional de las Artes.
//Área Transdepartamental de Artes Multimediales.
// Entrega Final- Artes Multimediales I 
// Candela Graziano

var img1;
var img2;
var img3;
var moveX=0;
var moveY=0;
let img;
let capture;
let song;


function preload() {
  img = 
    loadImage("img/jardin.jpg");
  img1=
    loadImage("img/persona.png");
  img2=
    loadImage("img/tierrafuego.gif");
  img3 = 
    loadImage("img/jardin2.jpg");
  song=loadSound('img/fuego.mp3');
  }

function setup() {
  let canvas = createCanvas(375, 442);
  canvas.parent('div-sketch');
  noCursor();
  capture = createCapture(VIDEO);
  capture.size(50, 50);
  capture.hide();
  song.loop();
  
}

function draw() {
image(img, 0, 0);
noTint();
   if(moveX,moveY)  {
     image(img3, 0, 0);
     tint(255, 126);
     image(img2, 110, 250);
     noTint();
     }
  
image(capture,mouseX, mouseY, 50, 50);
  noTint();
  

//image(img1, mouseX, mouseY);
  
     }
function mouseMoved() {
  moveX = mouseX;
  moveY = mouseY;
  }
function mouseisNotMoving() {
  moveX = mouseX;
  moveY = mouseY;
   if (song.isPaused()) {
    song.stop();
  } else {
    song.play();
  }
//function mouseisNotMoving() {
//  moveX = mouseX;
//  moveY = mouseY;
//   if (song.isPaused()) {
//    song.stop();
//  }
//   }

   }
