//Click derecho: Mente
//Click izquierdo: RESET

/*
AM1 Cátedra Lacabanne
Trabajo Práctico N°1 "Mente"
Llamosas Juan Pedro
2022
*/

var radiomayor = 45;
var x = radiomayor;
var y = radiomayor;
var z = radiomayor;
var c = radiomayor;

var velocidadX = 1;
var velocidadY = 0;
var velocidadZ = 0;
var velocidadC = 0;

var q = radiomayor;
var w = radiomayor;
var e = radiomayor;
var r = radiomayor;

var velocidadQ = 0;
var velocidadW = 0;
var velocidadE = 0;
var velocidadR = 0;

var velocidadA = 2; // velocidad de mov. en eje X
var velocidadS = 8; // velocidad de mov. en eje Y
var direccionA = 1; // dirección de mov. en eje X
var direccionS = 1; // dirección de mov. en eje Y

var a = radiomayor;
var s = radiomayor;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(255);

  //BORDE
  strokeWeight(5);
  stroke(0);
  rect(2, 2, 508, 508);

  strokeWeight(4);
  rect(12, 12, 488, 488);

  //CORAZON
  push();
  fill(0);
  stroke(0);
  //bezier(256, 300, 398, 170, 280, 130, 256, 180);
  //bezier(256, 300, 114, 170, 232, 130, 256, 180);
  
  bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(100); 
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(0);
      circle(250,240, 40)
      line(235, 220, 220, 200);
      line(265, 220, 280, 200);
  pop();

  //////////////////////////////////////////////////////////////////////
  //DIBUJO NORMAL 10
  strokeWeight(10);
  noFill();

  //bezier(x1, y1, x2, y2, x3, y3, x4, y4)
  push();
  stroke(225);
  bezier(100, 100, 800, 200, 0, 300, 412, 412);
  pop();

  push();
  stroke(220);
  bezier(100, 412, 200, 500, 300, 0, 412, 100);
  pop();

  push();
  stroke(215);
  bezier(125, 170, 80, 200, 80, 30, 305, 200);
  pop();

  push();
  stroke(210);
  bezier(110, 150, 400, 800, 600, 70, 250, 250);
  pop();

  push();
  stroke(205);
  bezier(145, 130, 500, 20, 350, 0, 225, 145);
  pop();

  push();
  stroke(200);
  bezier(412, 300, 255, 225, 90, 0, 400, 145);
  pop();

  push();
  stroke(195);
  bezier(245, 280, 600, 700, 60, 80, 225, 145);
  pop();

  push();
  stroke(190);
  bezier(412, 300, 500, 700, 90, 0, 400, 145);
  pop();

  push();
  stroke(185);
  bezier(255, 290, 610, 710, 70, 90, 235, 155);
  pop();

  push();
  stroke(180);
  bezier(400, 145, 0, 90, 700, 500, 412, 300);
  pop();

  push();
  stroke(175);
  bezier(110, 215, 610, 710, 70, 90, 335, 412);
  pop();

  push();
  stroke(170);
  bezier(100, 345, 0, 90, 700, 500, 412, 200);
  pop();

  push();
  stroke(165);
  bezier(90, 335, 100, 700, 750, 90, 205, 412);
  pop();

  push();
  stroke(160);
  bezier(150, 365, 100, 600, 500, 200, 180, 195);
  pop();

  push();
  stroke(155);
  bezier(140, 300, 100, 100, 750, 90, 50, 190);
  pop();

  push();
  stroke(150);
  bezier(120, 330, 100, 300, 500, 200, 150, 170);
  pop();

  push();
  stroke(145);
  bezier(160, 340, 100, 150, 750, 900, 180, 90);
  pop();

  push();
  stroke(140);
  bezier(210, 370, 150, 250, 400, 300, 345, 190);
  pop();

  push();
  stroke(135);
  bezier(200, 230, 100, 150, 750, 100, 120, 370);
  pop();

  push();
  stroke(130);
  bezier(140, 340, 100, 0, 100, 200, 335, 200);
  pop();

  push();
  stroke(125);
  bezier(110, 110, 810, 210, 10, 310, 402, 402);
  pop();

  push();
  stroke(120);
  bezier(110, 402, 210, 520, 350, 90, 315, 150);
  pop();

  push();
  stroke(115);
  bezier(135, 185, 185, 405, 180, 300, 80, 420);
  pop();

  push();
  stroke(110);
  bezier(180, 240, 300, 500, 200, 500, 200, 80);
  pop();

  push();
  stroke(105);
  bezier(165, 135, 505, 205, 355, 55, 125, 345);
  pop();

  push();
  stroke(100);
  bezier(440, 170, 250, 220, 90, 0, 50, 140);
  pop();

  push();
  stroke(95);
  bezier(75, 215, 505, 605, 605, 85, 220, 140);
  pop();

  push();
  stroke(90);
  bezier(90, 300, 355, 455, 95, 55, 405, 140);
  pop();

  push();
  stroke(85);
  bezier(80, 245, 635, 695, 85, 105, 270, 350);
  pop();

  push();
  stroke(80);
  bezier(355, 170, 50, 150, 405, 405, 405, 405);
  pop();

  push();
  stroke(75);
  bezier(125, 245, 645, 665, 95, 320, 65, 395);
  pop();

  push();
  stroke(70);
  bezier(205, 240, 5, 95, 605, 405, 210, 405);
  pop();

  push();
  stroke(65);
  bezier(55, 185, 115, 765, 655, 55, 405, 400);
  pop();

  push();
  stroke(60);
  bezier(205, 225, 75, 555, 755, 185, 165, 180);
  pop();

  push();
  stroke(55);
  bezier(125, 255, 85, 85, 675, 75, 35, 175);
  pop();

  push();
  stroke(50);
  bezier(155, 355, 125, 325, 525, 225, 175, 195);
  pop();

  push();
  stroke(45);
  bezier(195, 305, 5, 5, 75, 95, 185, 95);
  pop();

  push();
  stroke(40);
  bezier(60, 60, 150, 250, 400, 300, 320, 195);
  pop();

  push();
  stroke(35);
  bezier(185, 205, 185, 135, 655, 100, 105, 305);
  pop();

  push();
  stroke(30);
  bezier(280, 60, 280, 60, 280, 400, 380, 400);
  pop();

  //////////////////////////////////////////////////////////////////////
  //DIBUJO NORMAL 3
  strokeWeight(3);
  noFill();

  push();
  stroke(30);
  bezier(100, 100, 800, 200, 0, 300, 412, 412);
  pop();

  push();
  stroke(35);
  bezier(100, 412, 200, 500, 300, 0, 412, 100);
  pop();

  push();
  stroke(40);
  bezier(125, 170, 80, 200, 80, 30, 305, 200);
  pop();

  push();
  stroke(45);
  bezier(110, 150, 400, 800, 600, 70, 250, 250);
  pop();

  push();
  stroke(50);
  bezier(145, 130, 500, 20, 350, 0, 225, 145);
  pop();

  push();
  stroke(55);
  bezier(412, 300, 255, 225, 90, 0, 400, 145);
  pop();

  push();
  stroke(60);
  bezier(245, 280, 600, 700, 60, 80, 225, 145);
  pop();

  push();
  stroke(65);
  bezier(412, 300, 500, 700, 90, 0, 400, 145);
  pop();

  push();
  stroke(70);
  bezier(255, 290, 610, 710, 70, 90, 235, 155);
  pop();

  push();
  stroke(75);
  bezier(400, 145, 0, 90, 700, 500, 412, 300);
  pop();

  push();
  stroke(80);
  bezier(110, 215, 610, 710, 70, 90, 335, 412);
  pop();

  push();
  stroke(85);
  bezier(100, 345, 0, 90, 700, 500, 412, 200);
  pop();

  push();
  stroke(90);
  bezier(90, 335, 100, 700, 750, 90, 205, 412);
  pop();

  push();
  stroke(95);
  bezier(150, 365, 100, 600, 500, 200, 180, 195);
  pop();

  push();
  stroke(100);
  bezier(140, 300, 100, 100, 750, 90, 50, 190);
  pop();

  push();
  stroke(105);
  bezier(120, 330, 100, 300, 500, 200, 150, 170);
  pop();

  push();
  stroke(110);
  bezier(160, 340, 100, 150, 750, 900, 180, 90);
  pop();

  push();
  stroke(115);
  bezier(210, 370, 150, 250, 400, 300, 345, 190);
  pop();

  push();
  stroke(120);
  bezier(200, 230, 100, 150, 750, 100, 120, 370);
  pop();

  push();
  stroke(125);
  bezier(140, 340, 100, 0, 100, 200, 335, 200);
  pop();

  push();
  stroke(130);
  bezier(110, 110, 810, 210, 10, 310, 402, 402);
  pop();

  push();
  stroke(135);
  bezier(110, 402, 210, 520, 350, 90, 315, 150);
  pop();

  push();
  stroke(140);
  bezier(135, 185, 185, 405, 180, 300, 80, 420);
  pop();

  push();
  stroke(145);
  bezier(180, 240, 300, 500, 200, 500, 200, 80);
  pop();

  push();
  stroke(150);
  bezier(165, 135, 505, 205, 355, 55, 125, 345);
  pop();

  push();
  stroke(155);
  bezier(440, 170, 250, 220, 90, 0, 50, 140);
  pop();

  push();
  stroke(160);
  bezier(75, 215, 505, 605, 605, 85, 220, 140);
  pop();

  push();
  stroke(165);
  bezier(90, 300, 355, 455, 95, 55, 405, 140);
  pop();

  push();
  stroke(170);
  bezier(80, 245, 635, 695, 85, 105, 270, 350);
  pop();

  push();
  stroke(175);
  bezier(355, 170, 50, 150, 405, 405, 405, 405);
  pop();

  push();
  stroke(180);
  bezier(125, 245, 645, 665, 95, 320, 65, 395);
  pop();

  push();
  stroke(185);
  bezier(205, 240, 5, 95, 605, 405, 210, 405);
  pop();

  push();
  stroke(190);
  bezier(55, 185, 115, 765, 655, 55, 405, 400);
  pop();

  push();
  stroke(195);
  bezier(205, 225, 75, 555, 755, 185, 165, 180);
  pop();

  push();
  stroke(200);
  bezier(125, 255, 85, 85, 675, 75, 35, 175);
  pop();

  push();
  stroke(205);
  bezier(155, 355, 125, 325, 525, 225, 175, 195);
  pop();

  push();
  stroke(210);
  bezier(195, 305, 5, 5, 75, 95, 185, 95);
  pop();

  push();
  stroke(215);
  bezier(60, 60, 150, 250, 400, 300, 320, 195);
  pop();

  push();
  stroke(220);
  bezier(185, 205, 185, 135, 655, 100, 105, 305);
  pop();

  push();
  stroke(225);
  bezier(280, 60, 280, 60, 280, 400, 380, 400);
  pop();
}

//////////////////////////////////////////////////////////////////////

function draw() {
  //  noStroke()

  if (mouseIsPressed) {
    //RESET
    if (mouseButton == LEFT) {
      background(255);

      strokeWeight(5);
      stroke(0);
      rect(2, 2, 508, 508);

      strokeWeight(4);
      rect(12, 12, 488, 488);

      push();
      fill(0);
      stroke(0);
      //bezier(256, 300, 398, 170, 280, 130, 256, 180); //derecha
      //bezier(256, 300, 114, 170, 232, 130, 256, 180); //izquierda
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(100); 
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(0);
      circle(250,240, 40)
      line(235, 220, 220, 200);
      line(265, 220, 280, 200);
      pop();
      
      //////////////////////////////////////////////////////////////////////
      //DIBUJO NORMAL 10
      strokeWeight(10);
      noFill();

      push();
      stroke(225);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(220);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(215);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(210);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(205);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(200);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(195);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(190);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(185);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(180);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();

      push();
      stroke(175);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(170);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(165);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(160);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(155);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(150);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(145);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(140);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(135);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(130);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();

      push();
      stroke(125);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(120);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(115);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(110);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(105);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(100);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(95);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(90);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(85);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(80);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();

      push();
      stroke(75);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(70);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(65);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(60);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(55);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(50);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(45);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(40);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(35);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(30);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();

      //////////////////////////////////////////////////////////////////////
      //DIBUJO NORMAL 3
      strokeWeight(3);
      noFill();

      push();
      stroke(30);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(35);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(40);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(45);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(50);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(55);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(60);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(65);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(70);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(75);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();

      push();
      stroke(80);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(85);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(90);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(95);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(100);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(105);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(110);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(115);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(120);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(125);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();

      push();
      stroke(130);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(135);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(140);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(145);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(150);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(155);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(160);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(165);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(170);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(175);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();

      push();
      stroke(180);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(185);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(190);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(195);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(200);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(205);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(210);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(215);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(220);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(225);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();
    }
  }
  if (mouseButton == RIGHT) {
    fondo();
    x += velocidadX;
    y += velocidadY;
    z += velocidadZ;
    c += velocidadC;

    q += velocidadQ;
    w += velocidadW;
    e += velocidadE;
    r += velocidadR;

    ellipseMode(RADIUS);
    //Transformaciones ------------------------
    translate(250, 230);

    rotatex();
    function rotatex() {
      rotate(radians(x));

      strokeWeight(10);
      noFill();

      push();
      stroke(225);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(220);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(215);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(210);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(205);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(200);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(195);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(190);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(185);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(180);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();

      strokeWeight(3);
      noFill();
      push();
      stroke(30);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(35);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(40);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(45);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(50);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(55);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(60);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(65);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(70);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(75);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();
    }

    rotatey();
    function rotatey() {
      rotate(radians(y));
      strokeWeight(10);
      push();
      stroke(175);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(170);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(165);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(160);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(155);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(150);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(145);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(140);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(135);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(130);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();

      push();
      stroke(125);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      strokeWeight(3);
      push();
      stroke(80);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(85);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(90);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(95);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(100);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(105);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(110);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(115);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(120);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(125);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();
    }

    rotatec();
    function rotatec() {
      rotate(radians(c));

      strokeWeight(10);
      push();
      stroke(75);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(70);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(65);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(60);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(55);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(50);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(45);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(40);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(35);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(30);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();

      strokeWeight(3);
      push();
      stroke(180);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(185);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(190);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(195);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(200);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(205);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(210);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(215);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(220);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(225);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();
    }

    rotatez();
    function rotatez() {
      rotate(radians(z));

      strokeWeight(10);
      push();
      stroke(125);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(120);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(115);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(110);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(105);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(100);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(95);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(90);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(85);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(80);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();

      strokeWeight(3);
      push();
      stroke(130);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(135);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(140);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(145);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(150);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(155);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(160);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(165);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(170);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(175);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();
    }

    rotater();
    function rotater() {
      rotate(radians(r));

      strokeWeight(10);
      noFill();

      push();
      stroke(225);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(220);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(215);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(210);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(205);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(200);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(195);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(190);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(185);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(180);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();

      strokeWeight(3);
      noFill();
      push();
      stroke(30);
      bezier(100, 100, 800, 200, 0, 300, 412, 412);
      pop();

      push();
      stroke(35);
      bezier(100, 412, 200, 500, 300, 0, 412, 100);
      pop();

      push();
      stroke(40);
      bezier(125, 170, 80, 200, 80, 30, 305, 200);
      pop();

      push();
      stroke(45);
      bezier(110, 150, 400, 800, 600, 70, 250, 250);
      pop();

      push();
      stroke(50);
      bezier(145, 130, 500, 20, 350, 0, 225, 145);
      pop();

      push();
      stroke(55);
      bezier(412, 300, 255, 225, 90, 0, 400, 145);
      pop();

      push();
      stroke(60);
      bezier(245, 280, 600, 700, 60, 80, 225, 145);
      pop();

      push();
      stroke(65);
      bezier(412, 300, 500, 700, 90, 0, 400, 145);
      pop();

      push();
      stroke(70);
      bezier(255, 290, 610, 710, 70, 90, 235, 155);
      pop();

      push();
      stroke(75);
      bezier(400, 145, 0, 90, 700, 500, 412, 300);
      pop();
    }

    rotatee();
    function rotatee() {
      rotate(radians(e));
      strokeWeight(10);
      push();
      stroke(175);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(170);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(165);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(160);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(155);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(150);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(145);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(140);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(135);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(130);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();

      push();
      stroke(125);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      strokeWeight(3);
      push();
      stroke(80);
      bezier(110, 215, 610, 710, 70, 90, 335, 412);
      pop();

      push();
      stroke(85);
      bezier(100, 345, 0, 90, 700, 500, 412, 200);
      pop();

      push();
      stroke(90);
      bezier(90, 335, 100, 700, 750, 90, 205, 412);
      pop();

      push();
      stroke(95);
      bezier(150, 365, 100, 600, 500, 200, 180, 195);
      pop();

      push();
      stroke(100);
      bezier(140, 300, 100, 100, 750, 90, 50, 190);
      pop();

      push();
      stroke(105);
      bezier(120, 330, 100, 300, 500, 200, 150, 170);
      pop();

      push();
      stroke(110);
      bezier(160, 340, 100, 150, 750, 900, 180, 90);
      pop();

      push();
      stroke(115);
      bezier(210, 370, 150, 250, 400, 300, 345, 190);
      pop();

      push();
      stroke(120);
      bezier(200, 230, 100, 150, 750, 100, 120, 370);
      pop();

      push();
      stroke(125);
      bezier(140, 340, 100, 0, 100, 200, 335, 200);
      pop();
    }

    rotateq();
    function rotateq() {
      rotate(radians(q));

      strokeWeight(10);
      push();
      stroke(75);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(70);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(65);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(60);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(55);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(50);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(45);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(40);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(35);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(30);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();

      strokeWeight(3);
      push();
      stroke(180);
      bezier(125, 245, 645, 665, 95, 320, 65, 395);
      pop();

      push();
      stroke(185);
      bezier(205, 240, 5, 95, 605, 405, 210, 405);
      pop();

      push();
      stroke(190);
      bezier(55, 185, 115, 765, 655, 55, 405, 400);
      pop();

      push();
      stroke(195);
      bezier(205, 225, 75, 555, 755, 185, 165, 180);
      pop();

      push();
      stroke(200);
      bezier(125, 255, 85, 85, 675, 75, 35, 175);
      pop();

      push();
      stroke(205);
      bezier(155, 355, 125, 325, 525, 225, 175, 195);
      pop();

      push();
      stroke(210);
      bezier(195, 305, 5, 5, 75, 95, 185, 95);
      pop();

      push();
      stroke(215);
      bezier(60, 60, 150, 250, 400, 300, 320, 195);
      pop();

      push();
      stroke(220);
      bezier(185, 205, 185, 135, 655, 100, 105, 305);
      pop();

      push();
      stroke(225);
      bezier(280, 60, 280, 60, 280, 400, 380, 400);
      pop();
    }

    rotatew();
    function rotatew() {
      rotate(radians(w));

      strokeWeight(10);
      push();
      stroke(125);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(120);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(115);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(110);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(105);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(100);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(95);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(90);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(85);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(80);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();

      strokeWeight(3);
      push();
      stroke(130);
      bezier(110, 110, 810, 210, 10, 310, 402, 402);
      pop();

      push();
      stroke(135);
      bezier(110, 402, 210, 520, 350, 90, 315, 150);
      pop();

      push();
      stroke(140);
      bezier(135, 185, 185, 405, 180, 300, 80, 420);
      pop();

      push();
      stroke(145);
      bezier(180, 240, 300, 500, 200, 500, 200, 80);
      pop();

      push();
      stroke(150);
      bezier(165, 135, 505, 205, 355, 55, 125, 345);
      pop();

      push();
      stroke(155);
      bezier(440, 170, 250, 220, 90, 0, 50, 140);
      pop();

      push();
      stroke(160);
      bezier(75, 215, 505, 605, 605, 85, 220, 140);
      pop();

      push();
      stroke(165);
      bezier(90, 300, 355, 455, 95, 55, 405, 140);
      pop();

      push();
      stroke(170);
      bezier(80, 245, 635, 695, 85, 105, 270, 350);
      pop();

      push();
      stroke(175);
      bezier(355, 170, 50, 150, 405, 405, 405, 405);
      pop();
    }

    function fondo() {
      background(255);

      //BORDE
      strokeWeight(5);
      stroke(0);
      rect(2, 2, 508, 508);

      strokeWeight(4);
      rect(12, 12, 488, 488);

      //CORAZON
      push();
      fill(0);
      stroke(0);
      //bezier(256, 300, 398, 170, 280, 130, 256, 180); //derecha
      //bezier(256, 300, 114, 170, 232, 130, 256, 180); //izquierda
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(100); 
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240); 
      stroke(0);
      circle(250,240, 40)
      line(235, 220, 220, 200);
      line(265, 220, 280, 200); 
      
         
      pop();

      tashom();
      function tashom() {
        noFill();
        stroke(0);
  
        a += velocidadA * direccionA;

        if (a > width - radiomayor || a < radiomayor) {
          direccionA = -direccionA;
        }
  
        s += velocidadS * direccionS;

        if (s > height - radiomayor || s < radiomayor) {
          direccionS = -direccionS;

          push();
      stroke(0);   
      bezier(250, 400, 225, 450 , 175, 360 , 250, 240);
      bezier(250, 340, 200, 300, 100, 200 ,250, 240); 
      bezier(250, 400, 275, 450 , 325, 360 , 250, 240);
      bezier(250, 340, 300, 300, 400, 200 ,250, 240);  
      circle(250, 240, 40)         
          
      bezier(250-10, 400-10, 225-10, 450+10, 175+10, 360+10, 250+10, 240+10);
      bezier(250-10, 340-10, 200-10, 300+10, 100+10, 200+10, 250+10, 240+10); 
      bezier(250-10, 400-10, 275-10, 450+10, 325+10, 360+10, 250+10, 240+10);
      bezier(250-10, 340-10, 300-10, 300+10, 400+10, 200+10, 250+10, 240+10);  
      circle(250, 240, 40+10)
          
      bezier(250-20, 400-20, 225-20, 450+20, 175+20, 360+20, 250+20, 240+20);
      bezier(250-20, 340-20, 200-20, 300+20, 100+20, 200+20, 250+20, 240+20); 
      bezier(250-20, 400-20, 275-20, 450+20, 325+20, 360+20, 250+20, 240+20);
      bezier(250-20, 340-20, 300-20, 300+20, 400+20, 200+20, 250+20, 240+20);  
      circle(250, 240, 40+20)
      pop();
        }
      }
    }
  }
}
document.oncontextmenu = function () {
  return false;
};