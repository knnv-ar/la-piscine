/*TP N°1 Arte Multimedial
"Ojos" de Maitena Achigar
Escrito -> https://docs.google.com/document/d/1DbyJDGfUqFHxvkC7yMLYZnJMfFPHW9MuoDBcCQHuJpw/edit?usp=sharing
*/
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent ('div-skecht')
  background(220);
}

function draw() {
//--------------------------- PERSONA -------------------------------------
  
  //cabeza
  push();
  noStroke();
  fill(90);
  ellipse(100, 320, 180, 210);
  pop();
  
  //cuello
  push();
  noStroke();
  fill(90);
  rect(70, 400, 60, 100, 15, 15, 15, 15);
  pop();
  
  //Cuerpo
  push();
  noStroke();
  fill(90);
  ellipse(100, 520, 210, 110);
  pop();

  //ojo
  push();
  noStroke();
  fill(250);
  ellipse(50, 320, 60, 30);
  pop();

  //iris
  push();
  noStroke();
  fill(0);
  rotate(20);
  rect(303, 75, 20, 20);
  pop();
  /*PersonaFin*/

//----------------------------- CORONA ------------------------------------
  //cuadrado 1
  push();
  noFill();
  strokeWeight(4);
  rotate(45);
  square(284, 110, 30);
  pop();
  //cuadrdo 2
  push();
  noFill();
  strokeWeight(6);
  rotate(45);
  square(275, 101, 45);
  pop();
  //cuadrado 3
  push();
  noFill();
  strokeWeight(6);
  rotate(45);
  square(269, 94, 59);
  pop();
  //cuadrado 4
  push();
  noFill();
  strokeWeight(4);
  rotate(45);
  square(260, 94, 69);
  pop();
  //cuadrado 5
  push();
  noFill();
  strokeWeight(4);
  rotate(45);
  square(260, 94, 69);
  pop();
  //cuadrdado 6
  push();
  noFill();
  strokeWeight(9);
  rotate(45);
  square(250, 85, 87);
  pop();
  //cuadrado 7
  push();
  strokeWeight(5);
  noFill();
  rotate(6);
  square(-105, 256, 120);
  pop();
  //cuadrado 8
  push();
  strokeWeight(9);
  noFill();
  rotate(6);
  square(-115, 245, 140);
  pop();
  //cuadrado 9
  push();
  strokeWeight(5);
  noFill();
  rotate(6);
  square(-118, 235, 160);
  pop();
  
//------------------------ CUADRADO FLOTANTE 1-----------------------------
  push ();
  strokeWeight(8);
  noFill();
  rotate (45)
  //cuadrado 1
  rect (80, -50, 20, 20);
  //cuadrado 2
  rect (80, -50, 35, 35);
   //cuadrado 3
  rect (80, -50, 50, 50);
  //cuadrado 4
  rect (80, -50, 65, 65);
  //cuadrado 5
  rect (80, -50, 80, 80);
  //cuadrado 6
  rect (80, -50, 95, 95);
  pop ();
  
//------------------------ CUADRADO FLOTANTE 2 ----------------------------
  //cuadrdo 1
  push ();
  rotate (50)
  fill (0)
  rect (200, 200, 20, 20)
  pop ();
  //cuadrado 2
  push ();
  rotate (50)
  noFill ();
  strokeWeight(5);
  //cuadrado 1
  rect (193, 193, 35, 35)
  //cuadrado 2
  rect (193, 193, 40, 40)
  //cuadrado 3
  rect (193, 193, 50, 50)
  //cuadrado 4
  rect (185, 185, 65, 65)
  //cuadrado 5
  rect (180, 180, 70, 70)
  //cuadrado 6
  rect (180, 180, 75, 75)
  //cuadrado 6
  rect (170, 170, 95, 95)
  pop ();
  
//------------------------ CUADRADO FLOTANTE 3 ----------------------------
  push ();
  noFill ();
  strokeWeight(5);
  //cuadrado 1
  rect(400, 60, 20, 20);
  //cuadrado 2 negro
  push ();
  noFill ()
  rect (420, 80, 60,60)
  pop ();
  //cuadrado 3
  rect (427, 88, 45,45)
  //cuadrado 4
  rect (434, 95, 30,30)
  //cuadrado 5
  rect (441, 102, 15,15)
  //cuadrado 6 
  rect(400, 60, 80, 80);
  //cuadrado 7
  rect(392, 53, 95, 95);
  //cuadrado 8
  rect(385, 45, 110, 110);
  pop ();
  
//------------------------ CUADRADO FLOTANTE 4 ----------------------------
  push();
  strokeWeight(5);
  noFill();
  rotate(7);
  //cuadrado 1
  square(380,10, 100);
  //cuadrado 2
  square(390,20, 80);
  //cuadrado 3
  square(400,30, 60);
   //cuadrado 3
  square(410,40, 40);
  //cuadrado 3
  push ();
  fill (0)
  square(420,50, 20);
  pop ();
  pop()
}
