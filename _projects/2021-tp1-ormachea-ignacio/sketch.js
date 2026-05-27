//Ignacio Ormachea AM1 turno mañana
//rellena el fondo




function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
} 

function draw() {
  background (256,0,0,0);
  
    // cuadrado 1 
  stroke (0);
  fill(60);
  rect(200,60,300,100);
  
  //cuadrado 2
  stroke (230);
  fill(86);
  rect (50,0,90,100);
  
  // cuadrado 3
  stroke(240);
  fill(20);
  rect(123,120,90,170);
  
  
  //cuadrado 4
  stroke(212);
  fill(120);
  rect(1,168,90,300);
  
// rectangulo 5
  stroke(24);
  fill (230,230,230);
  rect(110,310,200,90);
  
  
  //rectangulo 6
   strokeWeight(4)
  stroke(60);
  fill(95);
  rect(206,370,150,150);
  
  
  // rectangulo 7
   strokeWeight(10)
  stroke(250);
  fill(120);
  rect(450,370,80,60);
  
  //circulo
  strokeWeight(20)
  stroke (0)
  ellipse(100, 500, 120, 120);
  fill (55)
   
  //circulo 2
  strokeWeight(14)
  stroke (8)
  ellipse(290, 400, 79, 79);
  fill (22)
  
  //mov
  strokeWeight(6)
  stroke (1)
  fill (190)
  ellipse (mouseX,mouseY,26,26)
  
 
  
}