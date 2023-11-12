//Salazar Bocos Luana.
//Obra inspirada en Georg Nees.

// Variable para line en velocidad.
let x = 0; 

//Variables para rects en velocidad.
let velocidad = 0.5;
let radioMayor = 15;
let y = radioMayor;





function setup() { createCanvas(512, 512);}

function draw() {
  background(10);

  //marco "puerta".
  push();
  fill(255);
  stroke(255);
  strokeWeight(3);
  line(220, 239, 330, 229);
  line(223, 300, 330, 300);
  line(218, 240, 223, 299);
  line(330, 230, 330, 300);
  pop();

  //PISO BAJO
  //rayas diagonales.
  fill(250);
  stroke(250);
  strokeWeight(1);
  line(215, 315, 90, 510);
  line(324, 320, 375, 507);
  line(244, 319, 162, 507);
  line(272, 320, 237, 512);
  line(297, 321, 304, 509);

  //rayas horizontales.
  line(209, 322, 327, 328);
  line(202, 332, 330, 342);
  line(192, 347, 337, 361);
  line(176, 370, 345, 395);
  line(154, 405, 354, 440);
  line(125, 450, 377, 508);

  
  //marco lienzo.
  push();
  fill(0);
  stroke(0);
  strokeWeight(40);
  line(0, 0, 0, 512);
  line(0, 512, 512, 512);
  line(512, 512, 512, 0);
  line(0, 0, 512, 0);
  pop();

  push();
  fill(250);
  stroke(250);
  strokeWeight(2);
  line(10, 9, 502, 10);
  line(502, 10, 502, 500);
  line(500, 500, 10, 502);
  line(10, 502, 10, 9);
  pop();

  
  //persona 1.
  push();
  fill(0);
  stroke(255);
  ellipse(294, 226, 6, 3);
  ellipse(304, 212, 20, 15);
  line(292, 223, 291, 212);
  line(290, 210, 299, 197);
  bezier(288, 210, 283, 207, 281, 199, 276, 191);
  bezier(274, 190, 276, 178, 284, 184, 289, 181);
  line(273, 190, 260, 177);
  ellipse(301, 195, 6, 3);
  ellipse(292, 180, 6, 3);
  ellipse(260, 178, 6, 3);
  bezier(305, 208, 305, 207, 304, 210, 305, 210);
  bezier(305, 213, 305, 214, 304, 214, 305, 216);
  bezier(300, 208, 297, 209, 298, 209, 300, 214);
  pop();
  
  
  //Si el mouse se presiona: superpone "puerta".
  push();
  if (mouseIsPressed) 
  {
  
    rectMode(CENTER);
    fill(10);
    stroke(10);
    rect(265, 196, 100, 63);

    fill(255);
    stroke(255);
    line(218, 240, 223, 299);
  }
  pop();

  
  //Si el mouse se presiona: Rects con velocidad
  push();
  y += velocidad;
  if (mouseIsPressed) 
  {
    // rects
    translate(y, height / 4);
    fill(10);
    stroke(255);
    rect(200, 0, radioMayor, radioMayor);
    rect(60, 40, radioMayor / 2, radioMayor - 2);
    rect(70, 40, radioMayor - 10, radioMayor - 40);
    rect(40, 20, radioMayor - 10, radioMayor - 50);
    rect(100, 30, radioMayor - 25, radioMayor - 50);
    rect(40, 30, radioMayor - 5, radioMayor - 10);
    rect(50, 10, radioMayor, radioMayor);
    rect(0, 10, radioMayor - 10, radioMayor);
  }
  if (y > width - 250) 
  {
    y = 10 ; // Mueve la figura al borde izquierdo
  }
  pop();


  //"ONDA SONORA"
  translate(221, 264);
  scale(0.2);
  for (let i = 0; i < width; i += 7) //espaciado horizontal
  {
    let y = 30 * cos(0.5 * x); //velocidad con la que se desplaza
    strokeWeight(10);
    line(i, y, i , y);
    x++; // Incrementar la posición horizontal para cambiar la posición 
  }
  
  
  push();
  //si el mouse se presiona:
  if (mouseIsPressed) 
  {
    
    //superpone personaje 1
    rectMode(CENTER);
    fill(10);
    stroke(10);
    rect(300, 20, 520, 520);
    rect(100,20,520,520);

    //personaje 2
    fill(10);
    stroke(255);
    strokeWeight(5);
    ellipse(80, 220, 100, 90);
    bezier(90, 260, 90, 500, 90, 300, 250, 350);
    line(100, 390, 250, 390);
    point(60, 220);
    point(90, 200);
    bezier(90, 285, 200, 350, 200, 350, 150, 270);
    ellipse(140, 250, 30, 20);
    bezier(70, 240, 90, 250, 90, 250, 110, 220);
    ellipse(270, 350, 30, 20);
    ellipse(270, 390, 30, 20);
  }
  pop();
  
}
