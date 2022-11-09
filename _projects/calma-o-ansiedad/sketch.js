// BASCUAS JULIETA-TP N°2-CAT.LACABANNE-T.M-UNA MULITMEIDALES ////+

//¿CALMA O ASIEDAD?//

//LA IDEA ES SELECCIONAR UNA OPCION BASANDOTE EN TU ESTADO DE ANIMO SEMANAL

//OPCION 1 PARA ANSIEDAD
//OPCION 2 PARA CALMA


let img1;
let img2;
let musiquita1;
let musiquita2;
let letrita;
let angulo = 0.0;

function preload() 
{
  img1 = loadImage("imagenes/caos.jpg");
  img2 = loadImage("imagenes/calma.jpg");
  musiquita1 = loadSound("sonido/lluvia para dormir.mp4");
  musiquita2 = loadSound("sonido/relaxx.mp4");
  letrita = loadFont("tipografia/LEMONMILK-BoldItalic.otf");
}


function setup() 
{
  let canvas=createCanvas(1000, 1000, WEBGL);
  canvas.parent('div-sketch');
}


function draw() 
{
  let valorSeno = sin(angulo);
  let color = map(valorSeno, -1, 1, 0, 255);
  background(color);
  angulo += 0.1;
  noCursor();
  
  
  push();
  textSize(50);
  textFont(letrita);
  textAlign(CENTER);
  fill(255, 210, 207);
  text("¿cual es tu mood?", 10, 0);
  pop();

  push();
  textSize(50);
  textFont(letrita);
  textAlign(CENTER);
  stroke(255, 210, 207);
  fill(144, 150, 255);
  text("calmado o ansioso", 40, 65);
  pop();

  
  if (key == "1") {
    image(img1, -900, -800, 0);
    
   /// ESFERAS ↴
    
    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(-10, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();
    
    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(-22, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();

    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(-220, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();

    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(-118, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();
    
    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(-120, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();

    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(100, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();
    
    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(95, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();

    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(240, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();
    
    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(237, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();

    push();
    strokeWeight(2);
    stroke(0, 35, 130);
    fill(207, 245, 255);
    translate(350, -180, 0);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();

    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(349, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();

    push();
    stroke(255);
    strokeWeight(2);
    fill(0, 35, 130);
    translate(450, -180, 0);
    rotateX(frameCount * 0.2);
    sphere(40);
    pop();
    
///FRASE↴

    push();
    fill(0, 35, 130);
    textSize(50);
    textFont(letrita);
    text("Respira", 180, 300);
    pop();
  }

  
  if (key == "2") {
    image(img2, -900, -800, 0);

    ///FRASE↴
    
    push();
    fill(129, 220, 222);
    textSize(50);
    textFont(letrita);
    text("Todo esta bien", -480, 300);
    pop();
    
///ESFERAS ↴
    
    push();
    stroke(255);
    fill(240, 223, 185);
    translate(-450, -180, 0);
    sphere(40);
    pop();

    push();
    stroke(255);
    fill(240, 223, 185);
    translate(-350, -180, 0);
    sphere(40);
    pop();

    push();
    stroke(255);
    fill(240, 223, 185);
    translate(-250, -180, 0);
    sphere(40);
    pop();
    
    push();
    stroke(255);
    fill(240, 223, 185);
    translate(-150, -180, 0);
    sphere(40);
    pop();

    push();
    stroke(255);
    fill(240, 223, 185);
    translate(-50, -180, 0);
    sphere(40);
    pop();

    push();
    stroke(255);
    fill(240, 223, 185);
    translate(50, -180, 0);
    sphere(40);
    pop();

    push();
    stroke(255);
    fill(240, 223, 185);
    translate(150, -180, 0);
    sphere(40);
    pop();
  }
}

function keyPressed() {
  if (key == "1") {
    image(img1, 90, 80, 0);
    musiquita1.play();
    musiquita2.stop();
  }
  if (key == "2") {
    image(img2, -900, -800, 0);
    musiquita1.stop();
    musiquita2.play();
  }
}
