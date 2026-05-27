/*
TP1 de AM1 - Cátedra Lacabanne
Alumno: Michael Lema
Tema-Autor Referente: herbert W. franke / Ben F. Laposky
*/

var i = 0;
let angle = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(250);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(i + 1 / 2);
  noFill();
  noStroke();
  

  translate(width / 2, height / 2);

  for (var i = 0; i < 180; i++) {
    push();

    rotate(cos(frameCount + i / 2) * 120);
    stroke(0);
    rotate(sin(frameCount + i / 5) * 50);
    ellipse(25, 25, 105 - i * 3, 100 - i * 3);

    pop();
  }

  /*
  //dibujo con el mouse
  push()
  fill(0);  
  strokeWeight(0)
  ellipse(mouseX, mouseY,anchoPincel,anchoPincel);
  pop()*/

  /* //Elipse central
  stroke(250,250,250,150);
  strokeWeight(0)
  fill(150)
  ellipse(250,250,100,100)
  
  stroke(250,250,250,5);
    for (var y = 0; y <= height - 0; y += 6) {
    
    for (var x = 0; x <= width - 0; x += 6) {
     
  fill(x,250);
  ellipse(x, y, 1, 1);}}
  
  
  //circulo centro gris
  if (mouseIsPressed) 
    if (mouseButton ==LEFT)
  strokeWeight(1000);
  stroke(250,250,250,150)
  fill(250,250,250,150)
  ellipse(250, 250, 100,100)
  
  
  //circulo centro gris1
  strokeWeight(350);
  stroke(250,250,250,10)
  noFill()
  ellipse(250,250,30)
  
  //circulo centro gris2
  strokeWeight(300);
  stroke(250,250,250,50)
  noFill()
  ellipse(250, 250, 20)
  
  //circulo centro gris3
  strokeWeight(250);
  stroke(250,250,250,50)
  noFill()
  ellipse(250, 250, 5)
  
  //circulo centro gris4
  strokeWeight(200);
  stroke(250,250,250,50)
  noFill()
  ellipse(250, 250, 40)
  
  //circulo centro gris5
  push()
  translate(width/2, height/2);
  rotate(angle);
  
  fill(0,0,0,230)
  noStroke()  
  rectMode(CENTER)
  
  ellipse(100, 100, 100,100)
  
  pop()
  
  angle += radians(4)*/
}
