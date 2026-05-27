//Poner el mouse en la parte derecha
document.oncontextmenu = function() {
  return false;
}


//valores de dibujo 
var anguloD = 12;
var slider;
var slider2;




//OJO QUE GIRA
var anguloCirculo = 0.0;
var desplazamientoCirculo = 250;
var escalarCirculo = 29;
var velocidadCirculo = 0.008;
var velocidadCD = 0.04;




function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(245);
  
  slider = createSlider(100,255,50);
  slider2 = createSlider(20,20,20);
  
  
  //CABEZA------------------------------------------------
  
  
  fill (215);
  noStroke();
  ellipse(258,345, 344,344);
  rect(85.5, 345, 344, 167 );
  
  
  
  //CARA--------------------------------------------------
  
    //ojos
  stroke (0);
  strokeWeight(3);
  ellipse (170, 320, 107, 107);
  ellipse (340, 320, 107, 107);
  noStroke();
  fill(215);
  rect (113, 260, 287, 86);
  
    //Nariz
  fill(190);
  ellipse (258, 402, 38, 38);
  ellipse (258, 436 , 38, 38);
  rect(239, 401.5, 38, 34.5);
}


//*********************************************************************

function draw() {
  
 
   //Lineas negras
 strokeWeight(0.2);
  stroke(0);
  for (var x = 20; x < width; x += 20) {
    var mx = 140 / 7;
    var desplazamientoA = random(-mx, mx);
    var desplazamientoB = random(-mx, mx);
    line(x + desplazamientoA, 0, x - desplazamientoB, 512);
    
  }
  
  
  
//Mandala con mouse
  push();
  colorMode(HSB, 255, 150, 100, 1); // genera el punto blanco
  translate(width / 2, height / 2);
  let sat = slider.value();
  angle = slider2.value(); 
  
  for (let i = 0; i < angle; i++) {
    rotate(angle)
    strokeWeight(15);
    stroke(mouseX, 0, 255, 0.3);
    line(mouseX, mouseY, pmouseX, pmouseY);

    push();
    scale(1, -1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
  pop();
  
  
    //Tercer ojo en DOS CAPAS 
  push()
  
  fill(255);
  stroke (100);
  strokeWeight(3);
  translate(250, 225);
  
  arc(0, 0, 160, 160, 0, PI);
  
  pop()
  
  push()
  
  fill(255);
  stroke (100);
  strokeWeight(3);
  translate(250, 275);
  
  arc(0, 0, 160, 160, PI, 0);
  
  pop()
  
  push();
      //pupilas
  noStroke();
  fill(255); //blanco
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
   ellipse (x,y,50,50);
   anguloCirculo += velocidadCirculo;
  
  fill(200); ///gris
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
  ellipse (x,y,50,50);   
  anguloCirculo += velocidadCirculo;
  
  fill(0);  //negro
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
  ellipse (x,y,35,35);   
  anguloCirculo += velocidadCirculo;
  
  
  pop();
  
  
  
  //Pestañas
  stroke(100);
  strokeWeight(3);
  strokeCap(ROUND);
  line(196, 195 , 206, 207);
  line(227, 180 , 232, 197);
  line(256, 175 , 256, 195);
  line(280, 199 , 286, 180);
  line(303, 211 , 313, 201);
  
  
  if(mouseIsPressed){
      if (mouseButton == LEFT) {
      background (255);
      //Linea de censura 
      strokeWeight(0.5);
      stroke(0);
    for (var x = 20; x < width; x += 20) {
      var mx = 2000 / 10;
      var desplazamientoA = random(-mx, mx);
      var desplazamientoB = random(-mx, mx);
      line(x + desplazamientoA, 0, x - desplazamientoB, 512);

        }
    }  
     
//Tercer ojo en clic ----------------------------------------
  push()
  
  fill(0);
  stroke (100);
  strokeWeight(3);
  translate(250, 225);
  
  arc(0, 0, 200, 200, 0, PI);
  
  pop()
  
  push()
  
  fill(0);
  stroke (100);
  strokeWeight(3);
  translate(250, 275);
  
  arc(0, 0, 200, 200, PI, 0);
  
  pop()
  
  push();
      //pupilas
  noStroke();
  fill(0); //blanco
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
   ellipse (x,y,100,100);
   anguloCirculo += velocidadCD;
  
  fill(200); ///gris
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
  ellipse (x,y,90,90);   
  anguloCirculo += velocidadCD;
  
  fill(255);  //negro
  var x = desplazamientoCirculo + cos(anguloCirculo) * escalarCirculo;
   var y = desplazamientoCirculo + sin(anguloCirculo) * escalarCirculo;
  ellipse (x,y,55,55);   
  anguloCirculo += velocidadCD;
  
    
    
  }
}