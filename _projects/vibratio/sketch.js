let cuadricula = 10;
let cuadriculaGrande = 30;
let gris = 150;
let gris2 = 100;
let gris3 = 50;

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
  frameRate(10);
}

function draw() {
  background(256);

  push();

  for (i = cuadricula; i < width; i += cuadricula) 
    line(0, i, width, i);
  

  for (i = cuadricula; i < width; i += cuadricula)
    line(i, 0, i, height);
  
  pop();

  push();
  
  if (keyIsPressed || mouseIsPressed){
  gris = random(145, 155);
    }
  stroke(20, gris);
  strokeWeight(15);

  for (i = cuadriculaGrande; i < width; i += cuadriculaGrande)
    line(0, i, width, i);
  for (i = cuadriculaGrande; i < width; i += cuadriculaGrande)
    line(i, 0, i, height);

  pop();

  //CUADRADOS OSCUROS---------------------
  push();
  gris = random(145, 155);
  fill(0, gris);
  noStroke();
  //diagonal superior izquierda
  rect(0, 240, 30, 30);
  rect(30, 210, 30, 30);
  rect(60, 180, 30, 30);
  rect(90, 150, 30, 30);
  rect(120, 120, 30, 30);
  rect(150, 90, 30, 30);
  rect(180, 60, 30, 30);
  rect(210, 30, 30, 30);
  rect(240, 0, 30, 30);
  //diagonal inferior derecha
  rect(30, 270, 30, 30);
  rect(60, 300, 30, 30);
  rect(90, 330, 30, 30);
  rect(120, 360, 30, 30);
  rect(150, 390, 30, 30);
  rect(180, 420, 30, 30);
  rect(210, 450, 30, 30);
  rect(240, 480, 30, 35);
  //diagonal inferior derecha
  rect(270, 450, 30, 30);
  rect(300, 420, 30, 30);
  rect(330, 390, 30, 30);
  rect(360, 360, 30, 30);
  rect(390, 330, 30, 30);
  rect(420, 300, 30, 30);
  rect(450, 270, 30, 30);
  rect(480, 240, 35, 30);
  //diagonal superior derecha
  rect(450, 210, 30, 30);
  rect(420, 180, 30, 30);
  rect(390, 150, 30, 30);
  rect(360, 120, 30, 30);
  rect(330, 90, 30, 30);
  rect(300, 60, 30, 30);
  rect(270, 30, 30, 30);
  //horizonal medio
  rect(60, 240, 30, 30);
  rect(120, 240, 30, 30);
  rect(180, 240, 30, 30);
  rect(240, 240, 30, 30);
  rect(300, 240, 30, 30);
  rect(360, 240, 30, 30);
  rect(420, 240, 30, 30);
  //
  rect(90, 210, 30, 30);
  rect(150, 210, 30, 30);
  rect(210, 210, 30, 30);
  rect(270, 210, 30, 30);
  rect(330, 210, 30, 30);
  rect(390, 210, 30, 30);
  //
  rect(120, 180, 30, 30);
  rect(180, 180, 30, 30);
  rect(240, 180, 30, 30);
  rect(300, 180, 30, 30);
  rect(360, 180, 30, 30);
  //
  rect(150, 150, 30, 30);
  rect(210, 150, 30, 30);
  rect(270, 150, 30, 30);
  rect(330, 150, 30, 30);
  //
  rect(180, 120, 30, 30);
  rect(240, 120, 30, 30);
  rect(300, 120, 30, 30);
  //
  rect(210, 90, 30, 30);
  rect(270, 90, 30, 30);
  //
  rect(240, 60, 30, 30);
  //---
  rect(90, 270, 30, 30);
  rect(150, 270, 30, 30);
  rect(210, 270, 30, 30);
  rect(270, 270, 30, 30);
  rect(330, 270, 30, 30);
  rect(390, 270, 30, 30);
  //
  rect(120, 300, 30, 30);
  rect(180, 300, 30, 30);
  rect(240, 300, 30, 30);
  rect(300, 300, 30, 30);
  rect(360, 300, 30, 30);
  //
  rect(150, 330, 30, 30);
  rect(210, 330, 30, 30);
  rect(270, 330, 30, 30);
  rect(330, 330, 30, 30);
  //
  rect(180, 360, 30, 30);
  rect(240, 360, 30, 30);
  rect(300, 360, 30, 30);
  //
  rect(210, 390, 30, 30);
  rect(270, 390, 30, 30);
  //
  rect(240, 420, 30, 30);

  //LateralesInf--------------------------

  //
  rect(0, 270, 30, 30);
  rect(0, 300, 30, 30);
  rect(0, 330, 30, 30);
  rect(0, 360, 30, 30);
  rect(0, 390, 30, 30);
  rect(0, 420, 30, 30);
  rect(0, 450, 30, 30);
  rect(0, 480, 30, 32);
  //
  rect(30, 300, 30, 30);
  rect(30, 330, 30, 30);
  rect(30, 360, 30, 30);
  rect(30, 390, 30, 30);
  rect(30, 420, 30, 30);
  rect(30, 450, 30, 30);
  rect(30, 480, 30, 32);
  //
  rect(60, 330, 30, 30);
  rect(60, 360, 30, 30);
  rect(60, 390, 30, 30);
  rect(60, 420, 30, 30);
  rect(60, 450, 30, 30);
  rect(60, 480, 30, 32);
  //
  rect(90, 360, 30, 30);
  rect(90, 390, 30, 30);
  rect(90, 420, 30, 30);
  rect(90, 450, 30, 30);
  rect(90, 480, 30, 32);
  //
  rect(120, 390, 30, 30);
  rect(120, 420, 30, 30);
  rect(120, 450, 30, 30);
  rect(120, 480, 30, 32);
  //
  rect(150, 420, 30, 30);
  rect(150, 450, 30, 30);
  rect(150, 480, 30, 32);
  //
  rect(180, 450, 30, 30);
  rect(180, 480, 30, 32);
  //
  rect(210, 480, 30, 32);
  //
  //LateralesSup
  rect(270, 0, 30, 30);
  //
  rect(300, 0, 30, 30);
  rect(300, 30, 30, 30);
  //
  rect(330, 0, 30, 30);
  rect(330, 30, 30, 30);
  rect(330, 60, 30, 30);
  //
  rect(360, 0, 30, 30);
  rect(360, 30, 30, 30);
  rect(360, 60, 30, 30);
  rect(360, 90, 30, 30);
  //
  rect(390, 0, 30, 30);
  rect(390, 30, 30, 30);
  rect(390, 60, 30, 30);
  rect(390, 90, 30, 30);
  rect(390, 120, 30, 30);
  //
  rect(420, 0, 30, 30);
  rect(420, 30, 30, 30);
  rect(420, 60, 30, 30);
  rect(420, 90, 30, 30);
  rect(420, 120, 30, 30);
  rect(420, 150, 30, 30);
  //
  rect(450, 0, 30, 30);
  rect(450, 30, 30, 30);
  rect(450, 60, 30, 30);
  rect(450, 90, 30, 30);
  rect(450, 120, 30, 30);
  rect(450, 150, 30, 30);
  rect(450, 180, 30, 30);
  //
  rect(480, 0, 32, 30);
  rect(480, 30, 32, 30);
  rect(480, 60, 32, 30);
  rect(480, 90, 32, 30);
  rect(480, 120, 32, 30);
  rect(480, 150, 32, 30);
  rect(480, 180, 32, 30);
  rect(480, 210, 32, 30);
  pop();
  //---------------------------------------------------------------
  //------------------INFERIOR
  push();
  noStroke();
   if (keyIsPressed || mouseIsPressed){
  gris2 = random(85, 115);
     }
  fill(0, gris2);
  rect(0, 210, 30, 30);
  rect(30, 240, 30, 30);
  rect(60, 270, 30, 30);
  rect(90, 300, 30, 30);
  rect(120, 330, 30, 30);
  rect(150, 360, 30, 30);
  rect(180, 390, 30, 30);
  rect(210, 420, 30, 30);
  rect(240, 450, 30, 30);
  rect(270, 480, 30, 35);
  //
  rect(0, 150, 30, 30);
  rect(30, 180, 30, 30);
  rect(60, 210, 30, 30);
  rect(90, 240, 30, 30);
  rect(120, 270, 30, 30);
  rect(150, 300, 30, 30);
  rect(180, 330, 30, 30);
  rect(210, 360, 30, 30);
  rect(240, 390, 30, 30);
  rect(270, 420, 30, 30);
  rect(300, 450, 30, 30);
  rect(330, 480, 30, 35);

  //---------------SUPERIOR
  rect(480, 270, 35, 30);
  rect(450, 240, 30, 30);
  rect(420, 210, 30, 30);
  rect(390, 180, 30, 30);
  rect(360, 150, 30, 30);
  rect(330, 120, 30, 30);
  rect(300, 90, 30, 30);
  rect(270, 60, 30, 30);
  rect(240, 30, 30, 30);
  rect(210, 0, 30, 30);
  //
  rect(150, 0, 30, 30);
  rect(180, 30, 30, 30);
  rect(210, 60, 30, 30);
  rect(240, 90, 30, 30);
  rect(270, 120, 30, 30);
  rect(300, 150, 30, 30);
  rect(330, 180, 30, 30);
  rect(360, 210, 30, 30);
  rect(390, 240, 30, 30);
  rect(420, 270, 30, 30);
  rect(450, 300, 30, 30);
  rect(480, 330, 35, 30);
  //
  pop();
  //----------------------------------------------------------------
  push();
  noStroke();
      if (keyIsPressed || mouseIsPressed){
  gris3 = random(25, 75);
        }
  fill(0, gris3);
  rect(0, 120, 30, 30);
  rect(30, 150, 30, 30);
  //
  rect(0, 180, 30, 30);
  //
  rect(300, 480, 30, 35);
  //
  rect(330, 450, 30, 30);
  rect(360, 480, 30, 35);

  //
  rect(180, 0, 30, 30);
  //
  rect(120, 0, 30, 30);
  rect(150, 30, 30, 30);
  //
  rect(480, 300, 35, 30);
  rect(450, 330, 30, 30);
  rect(480, 360, 35, 30);
  //
  rect(90, 180, 30, 30);
  rect(120, 210, 30, 30);
  rect(150, 240, 30, 30);
  rect(180, 270, 30, 30);
  rect(210, 300, 30, 30);
  rect(240, 330, 30, 30);
  rect(270, 360, 30, 30);
  rect(300, 390, 30, 30);
  //
  rect(390, 300, 30, 30);
  rect(360, 270, 30, 30);
  rect(330, 240, 30, 30);
  rect(300, 210, 30, 30);
  rect(270, 180, 30, 30);
  rect(240, 150, 30, 30);
  rect(210, 120, 30, 30);
  rect(180, 90, 30, 30);
  //
  rect(120, 150, 30, 30);
  rect(180, 150, 30, 30);
  //
  rect(180, 210, 30, 30);
  rect(240, 210, 30, 30);
  //
  rect(240, 270, 30, 30);
  rect(300, 270, 30, 30);
  //
  rect(300, 330, 30, 30);
  rect(360, 330, 30, 30);

  pop();

  //------------------------------------------------------------
}
