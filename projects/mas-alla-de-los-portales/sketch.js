//Declaracioes de Variables
var angulo = 0.0;
var desplazamiento = 256;
var escalar = 2;
var velocidad = 0.2;

 function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
 background(220);
}

function draw() {
    
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  
  stroke(2);
  strokeWeight(2);

  
  rect (x, y, 2, 2); 
  rect (x, y, 4, 4);
  rect (x, y, 6, 6);
  rect (x, y, 8, 8);
  
 
  angulo += velocidad;
  escalar += velocidad;
  

if (x > width & y > height) 
 {velocidad = 0}  

  strokeWeight(2);
  
  //
  line(20, 110, 20, height);
  line(30, 100, 30, height);
  line(40, 90, 40, height);
  line(50, 80, 50, height);
  line(60, 70, 60, height);
  line(70, 60, 70, height);
  line(80, 50, 80, height);
  line(90, 40, 90, height);
  line(100, 30, 100, height);
  line(110, 20, 110, height);
  line(120, 10, 120, height);
  line(130, 0, 130, height);
  
//diagonales del lado izquierdo  
  line (80, 50, 20, height); 
  line (90, 40, 30, height);
  line (100, 30, 40, height);
  line (110, 20, 50, height);
  line (120, 10, 60, height);
  line (130, 0, 70, height);
  

  line(380, 0, 380, height);
  line(390, 10, 390, height);
  line(400, 20, 400, height);
  line(410, 30, 410, height);
  line(420, 40, 420, height);
  line(430, 50, 430, height);
  line(440, 60, 440, height);
  line(450, 70, 450, height);
  line(460, 80, 460, height);
  line(470, 90, 470, height);
  line(480, 100, 480, height);
  line(490, 110, 490, height);
  
  //diagonales del lado derecho
  line(380, 0, 440, height);
  line(390, 10, 450, height);
  line(400, 20, 460, height);
  line(410, 30, 470, height);
  line(420, 40, 480, height);
  line(430, 50, 490, height);

  
}
