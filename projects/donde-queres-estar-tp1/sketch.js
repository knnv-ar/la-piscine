//Maylen Santoro-T.P.1-A.Multimediales1-Lacabanne-T.Noche

//Variables 

var angulo = 0.0;
var desplazamiento = 20;
var escalar = 5;
var velocidad = 1;
var paused = false;

function setup() {
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(200);
  frameRate(50);

    //lineas left
    stroke(100)
    line(15, 100, 200, 500);
    line(25, 100, 200, 500);
    line(35, 100, 200, 500);
    line(45, 100, 200, 500);
    line(55, 100, 200, 500);
    line(65, 100, 200, 500);
    line(75, 100, 200, 500);
    line(85, 100, 200, 500);
    line(95, 100, 200, 500)
    line(105, 100, 200, 500);
    line(115, 100, 200, 500);
    line(125, 100, 200, 500);
    line(135, 100, 200, 500);

    // Líneas right
    line(305, 400, 500, 112);
    line(315, 400, 500, 112);
    line(325, 400, 500, 112);
    line(335, 400, 500, 112);
    line(345, 400, 500, 112);
    line(355, 400, 500, 112);
    line(365, 400, 500, 112);
    line(375, 400, 500, 112);
    line(385, 400, 500, 112);
    line(395, 400, 500, 112);
    line(405, 400, 500, 112);
    line(415, 400, 500, 112);
    line(425, 400, 500, 112);

    // Líneas middle
    line(295, 47, 205, 311);
    line(295, 47, 215, 311);
    line(295, 47, 225, 311);
    line(295, 47, 235, 311);
    line(295, 47, 245, 311);
    line(295, 47, 255, 311);
    line(295, 47, 265, 311);
    line(295, 47, 275, 311);
    line(295, 47, 285, 311);
    line(295, 47, 295, 311);
    line(295, 47, 305, 311);
    line(295, 47, 315, 311);
    line(295, 47, 325, 311);
    line(295, 47, 335, 311);
    line(295, 47, 345, 311);
}

function draw() {


  if (!paused) {
    var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;
    line(x, y, 295, 46);
    angulo += velocidad;
    escalar += velocidad;

    var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;
    line(x, y, 202, 499);
    angulo += velocidad;
    escalar += velocidad;

    var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;
    line(x, y, 499, 110);
    angulo += velocidad;
    escalar += velocidad;
    
     var x = desplazamiento + cos(angulo) * escalar;
    var y = desplazamiento + sin(angulo) * escalar;
    line(x, y, 499, 110);
    angulo += velocidad;
    escalar += velocidad;
  }
   
}

function mouseClicked() {
 
  if (paused) 
  {
    paused = false;
    loop(); //reunudeishon
  } 
  else
  {
    paused = true;
    noLoop(); // Pauseishhonn
    background(200); // CLICK Y LIMPIA!!!!!
    
    // Otra vez Líneas left
    stroke(100);
    line(15, 100, 200, 500);
    line(25, 100, 200, 500);
    line(35, 100, 200, 500);
    line(45, 100, 200, 500);
    line(55, 100, 200, 500);
    line(65, 100, 200, 500);
    stroke(40);
    line(75, 100, 200, 500);
    line(85, 100, 200, 500);
    line(95, 100, 200, 500)
    line(105, 100, 200, 500);
    line(115, 100, 200, 500);
    line(125, 100, 200, 500);
    line(135, 100, 200, 500);

    // Líneas right
    stroke(50);
    line(305, 400, 500, 112);
    line(315, 400, 500, 112);
    line(325, 400, 500, 112);
    line(335, 400, 500, 112);
    line(345, 400, 500, 112);
    line(355, 400, 500, 112);
    stroke(100);
    line(365, 400, 500, 112);
    line(375, 400, 500, 112);
    line(385, 400, 500, 112);
    line(395, 400, 500, 112);
    line(405, 400, 500, 112);
    line(415, 400, 500, 112);
    line(425, 400, 500, 112);

    // Líneas middle
    stroke(120);
    line(295, 47, 205, 311);
    line(295, 47, 215, 311);
    line(295, 47, 225, 311);
    line(295, 47, 235, 311);
    line(295, 47, 245, 311);
    line(295, 47, 255, 311);
    line(295, 47, 265, 311);
    stroke(20);
    line(295, 47, 275, 311);
    line(295, 47, 285, 311);
    line(295, 47, 295, 311);
    line(295, 47, 305, 311);
    line(295, 47, 315, 311);
    line(295, 47, 325, 311);
    line(295, 47, 335, 311);
    line(295, 47, 345, 311);
  }
}