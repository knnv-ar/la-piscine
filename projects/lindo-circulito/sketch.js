
//Trabajo basado en una de las Obras de Joshua Davis, "The V01D"  (2018) 
//link a la pagina https://joshuadavis.com/the-V01D
//---------------------
// variables posiciones
let circlePositionX = 200;
let circlePositionY = 200;

//variables velocidad
let circleSpeedX = 2;
let circleSpeedY = 3;

//variables radio
let circleRadius = 25;
//---------------------
function setup() {
  let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  ellipseMode(RADIUS);
  colorMode(HSB);
}
//---------------------
function draw() {
  background('black');
  {}
//---------------------  
  //linea blanca 
  noFill(0)
  stroke('rgb(243,243,243)');
  strokeWeight(10);
  bezier(0,2,40,100,500,10,512,520); 
  
  // linea gris clara y grande
  noFill(0);
  stroke('grey');
  strokeWeight(110);
  bezier(10,20,100,150,200,10,512,30); 
  
  //circulito que se mueve
  strokeWeight(1)
  stroke("white")
  fill('black');
ellipse(430, 380, 60, 60); 
//---------------------
   circle(circlePositionX, circlePositionY, circleRadius);
  
  //Si se mantiene precionado el mouse, el circulo se desplaza
 if (mouseIsPressed === true) {
    // Darle velocidad al circulo
    circlePositionX = circlePositionX + circleSpeedX;
    circlePositionY = circlePositionY + circleSpeedY;
  }
  // borde izquierdo o derecho
  if (
    circlePositionX < circleRadius ||
    circlePositionX > width - circleRadius
  ) {
    // velocidad (denuevo)
    circleSpeedX = -circleSpeedX;
  }

// borde de arriba o abajo
  if (
    circlePositionY < circleRadius ||
    circlePositionY > height - circleRadius) 
  {
  // mas control de la velocidad
    circleSpeedY = -circleSpeedY;
 }
  
push();
  //circulos negros y blancos  
  strokeWeight(1)
  stroke("white")
  fill('black');
ellipse(150, 340, 120, 120); 
  
  strokeWeight(1)
  stroke("white")
  fill('black');
ellipse(500, 80, 60, 60); 
  

  //circulos bordes grises
  strokeWeight(5);
  stroke("#545454");
  noFill();
ellipse(510, 320, 160, 160); 
  
  //circulo gris
    strokeWeight(5);
  stroke("#545454");
  noFill();
ellipse(120, 80, 160, 160); 


  //linea gris mas oscura
  noFill(0);
  stroke('rgb(36,36,36)')
  strokeWeight(10);
  bezier(-5,110,3,200,70,240,600,55)
  
  //linea gris chiquita
  noFill(0)
  stroke('rgb(36,36,36)')
  strokeWeight(10);
  bezier(-5,300,1,1,70,400,520,440)    
pop();
} 
