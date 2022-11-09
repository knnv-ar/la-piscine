//obra: sin sentidos no hay sentimiento

let carita;
let corazon;
let noMiedo;
let imgActual;
let volumen;


function preload() {
  carita = loadImage("CARA.jpg");
  corazon = loadImage("corazon.png");
  noMiedo = loadImage("miedo.jpg");
 
  noEscuchas = createAudio("noEscuchas.m4a");
 
}

function setup() {
  let canvas = createCanvas(2000, 2500, WEBGL);
  canvas.parent('div-sketch');
  noEscuchas.loop();
  noEscuchas.volume(0.035);
  imgActual = corazon;
}

function draw() {
  background(250, 237, 142);

  orbitControl();
  
  cilindritos();
  conitos();
  cara();
  
  caja();
  arosFuego();
}

var z = 20;
var transparencia = 255;
var transparencia1 = 255;

//GORRO

function conitos() {
  push();
  noStroke();
  fill(255, 0, 0);
  translate(0, -300, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * 0.01);
  cone(30, 460); //Parámetros: radio, altura
  pop();

  
  push();
  noStroke();
  fill(186, 67, 67);
  translate(0, -350, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * -0.01);
  cone(30, 390); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(245, 91, 91);
  translate(0, -400, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * 0.01);
  cone(30, 320); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(247, 66, 35);
  translate(0, -450, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * -0.01);
  cone(30, 250); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(247, 66, 35);
  translate(0, -500, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * 0.01);
  cone(30, 180); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(250, 94, 67);
  translate(0, -550, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * -0.01);
  cone(30, 110); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(250, 159, 67);
  translate(0, -600, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * 0.01);
  cone(30, 40); //Parámetros: radio, altura
  pop();

  push();
  noStroke();
  fill(244, 250, 82);
  translate(0, -650, z);
  rotateX(z);
  rotateY(0);
  rotateZ(frameCount * -0.01);
  cone(30, 1); //Parámetros: radio, altura
  pop();
}

function cilindritos() {
  push();
  noStroke();
  fill(51, 120, 49);
  translate(0, -300, z);
  rotateX(z);
  rotateZ(frameCount * -0.025);
  torus(250, 20);
  pop();

  push();
  noStroke();
  fill(67, 150, 65);
  translate(0, -350, z);
  rotateX(z);
  rotateZ(frameCount * 0.022);
  torus(215, 20);
  pop();

  push();
  noStroke();
  fill(77, 173, 75);
  translate(0, -400, z);
  rotateX(z);
  rotateZ(frameCount * -0.018);
  torus(180, 20);
  pop();

  push();
  noStroke();
  fill(86, 191, 84);
  translate(0, -450, z);
  rotateX(z);
  rotateZ(frameCount * 0.01);
  torus(145, 20);
  pop();

  push();
  noStroke();
  fill(94, 209, 92);
  translate(0, -500, z);
  rotateX(z);
  rotateZ(frameCount * -0.005);
  torus(110, 20);
  pop();

  push();
  noStroke();
  fill(100, 227, 98);
  translate(0, -550, z);
  rotateX(z);
  rotateZ(frameCount * 0.025);
  torus(85, 20);
  pop();

  push();
  noStroke();
  fill(107, 245, 105);
  translate(0, -600, z);
  rotateX(z);
  rotateZ(frameCount * -0.022);
  torus(50, 20);
  pop();

  push();
  noStroke();
  fill(121, 247, 119);
  translate(0, -650, z);
  rotateX(z);
  rotateZ(frameCount * 0.04);
  torus(15, 20);
  pop();
}

//CARA
function cara() {
  push();
  noStroke();
  texture(carita);
  //fill(252, 169, 237);
  translate(0, -50, 3);
  //rotateX(3);
  //rotateY(frameCount * 0.01);
  sphere(280); //Parámetros: radio
  
  pop();
  
  //cuello
  push();
  noStroke();
  translate(0, 250, 3);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  sphere(75); //Parámetros: radio
  pop();

  //cuerpo
  push();
  noStroke();
  texture(imgActual);
  tint(250, 237, 142);
  translate(0, 700, 3);
  rotateY(frameCount * -0.1);
  sphere(385); //Parámetros: radio
  pop();
 
 
  //ojo
  push();
  noStroke();
  fill(255, 161, 46);
  translate(0, -50,-260);
  rotateX(frameCount * 0.04)
  sphere(40); //Parámetros: radio
  pop();
  
  //pupila
  push();
  noStroke();
  fill(0);
  translate(0, -50,-290);
  rotateX(frameCount * 0.04)
  sphere(20); //Parámetros: radio
  pop();

  
 
  //collar
  push();
  noStroke();
  fill(99, 9, 9);
  translate(0, 265, 0);
  rotateX(1.53);
  rotateZ(frameCount * -0.025);
  torus(100, 10);
  pop();
}


function caja(){
    push();
    noStroke();
    fill(0, 0, 0,0);
    translate(0,200,transparencia);
    
    pop();
  
    push();
    noStroke();
    fill(255, 255, 0,transparencia1);
    translate(0,200,0);
    pop();
  
}

function arosFuego(){
  //rojo
  push();
  noStroke();
  fill(158, 2, 2);
  translate(0, 250, 0);
  rotateY(frameCount * 0.1);
  torus(1245, 30);
  pop();
  

  
  //bordo
  push();
  noStroke();
  fill(99, 9, 9);
  translate(0, 250, 0);
  rotateY(frameCount * -0.08);
  torus(1130, 30);
  pop();
  
  
  //rojo
  push();
  noStroke();
  fill(122, 1, 1);
  translate(0, 250, 0);
  rotateX(frameCount * 0.05);
  torus(1015, 20);
  pop();
  
}


function keyPressed(){
   if (key == 't' || key == 'T') {
   imgActual = noMiedo;
   }
    
  }

function keyReleased(){
   if (key == 't' || key == 'T') {
   imgActual = corazon;
  
   }

  if (key == 's' || key == 'S') {
   noEscuchas.loop();
  
   }

    
  }
