
var angulo = 0.0;






function setup() {
   let canvas = createCanvas(512,512);
   canvas.parent('div-sketch');
 
}

function draw() {
  background(220);
  

  //los valores de sin() van a oscilar entre el -1 y 1 a medida que el angulo aunmenta. con la funcion map convierto la variable valorSeno a valores de 0 a 255.
  
  var valorSeno = sin(angulo);
  var gris = map(valorSeno, -1, 1, 0, 255);
  background(gris);
  angulo += 0.1; 
  
  
   //TEXTURAS/ FONDO
 
  fill(0);
  rect(0,300,512,100);
   stroke(1);
  
  fill(50);
   stroke(1);
  strokeWeight(6);
  rect(300,0,130,512);
 
  noStroke();
  fill(150);
  rect(50,60,330,180);
 
  fill(255);
  rect(50,230,110,512);
  //line(50,200,300,200);
   
 
 
  

 
  
  //TORSO
  noStroke();
  strokeWeight(1);
   fill(185);
  ellipse(250, 575, 300, 300);
  
 
  // CUELLO
  noStroke();
   fill(90);
  quad(240,260,210,515,300,515,290,240);
  
   fill(178);
  quad(250,270,220,515,290,515,280,230);
  
  
  
  // CABEZA
   noStroke();
   fill(235); 
   push();
    noStroke();
    fill(0);
    translate(width / 2, height / 2);
    rotate(angulo /4);
    rectMode(RADIUS);
    rect(0, 0, 110, 110);
    pop();

    push();
    noStroke();
    fill(200, 70);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 4);
    rect(0, 0, 100, 100),20,20,20,20;
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo/4);
    rect(0, 0, 90,90);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 4);
    rectMode(RADIUS);
    rect(0, 0, 85, 85);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo / 2);
    rect(0, 0, 75, 75);
    pop();

    push();
    noStroke();
    fill(200,70);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 2);
    rect(0, 0, 65, 65);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 55, 55);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo);
    rect(0, 0, 45, 45);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 35, 35);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 4);
    rect(0, 0, 25, 25);
    pop();

    //para que no se desplegue el menu del botón derecho
    document.oncontextmenu = function () {
      return false;
    };
  
  
  
  // TORSO
  
  push();
   noStroke();
  strokeWeight(2)
   fill(70);
  ellipse(230,520, 100, 100);
  
  
  noStroke();
   fill(220);
  ellipse(230,520, 80, 80);
   
  
  noStroke();
  strokeWeight(2);
   fill(210);
  ellipse(340, 520, 135, 135);
  
   noStroke(0);
  strokeWeight(5);
   fill(70);
  ellipse(150,530, 100, 100);
  pop();
  
    
 
  
  
  
  
  
  
  
   
  
}
