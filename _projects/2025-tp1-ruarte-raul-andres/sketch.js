// Obra inspirada en "Night Scene" (1975) de Lillian Schwartz.
//// Link de la obra: https://www.atariarchives.org/artist/sec31.php

//// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 
/// /// /// ///  Pulsar click izquierdo   /// /// /// /// /// /// /// //
///////// /// /// /// /// /// /// /// /// /// /// /// /// /// //

let vibracion = 0;
let rayos = 0;
let sol = false;


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  noStroke();
  fill(255);

  
  //////// Primera fila ////////
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 27; i++) {
      circle(25 + i * 5, 160 + j * 5, 2);
    }
  }

  ////////  Fila 4  /////
  for (let i = 0; i < 5; i++) {
    circle(40 + i * 5, 175, 2);
  }
  for (let i = 0; i < 18; i++) {
    circle(70 + i * 5, 175, 2);
  }

  //////// Fila 6: coordenada [y = 180] //////
  for (let i = 0; i < 22; i++) {
    circle(45 + i * 5, 180, 2);
  }

  ////// Filas 5 al 9 de 28 círculos, coordenada [y = 185 - 200] //////
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 28; i++) {
      circle(15 + i * 5, 185 + j * 5, 2);
    }
  }

  //////// Filas 10 - 21 círculos, coordenada [y = 205] //////
  for (let i = 0; i < 21; i++) {
    circle(15 + i * 5, 205, 2);
  }
  for (let i = 0; i < 3; i++) {
    circle(140 + i * 5, 205, 2);
  }

  //////// Filas 10 - 15 círculos, coordenada [y = 210] //////
  for (let i = 0; i < 15; i++) { 
    circle(50 + i * 5, 210, 2);
  }

  ////// Filas 11 - coordenada [y = 210] ////
  for (let i = 0; i < 4; i++) {
    circle(140 + i * 5, 210, 4);
  }
  for (let i = 0; i < 3; i++) {
    circle(162 + i * 5, 210, 2);
  }

  // Filas 12 - coordenada [y = 215]
  for (let i = 0; i < 28; i++) {
    circle(122 + i * 5, 215, 2);
  }

  //////// Filas 13 - coordenada [y = 220] //////
  for (let i = 0; i < 8; i++) {
    circle(122 + i * 5, 220, 2);
  }
  for (let i = 0; i < 5; i++) {
    circle(163 + i * 5, 220, 4);
  }
  for (let i = 0; i < 12; i++) {
    circle(205 + i * 5, 220, 2);
  }

  //////// Filas 14,15,16,17,18,19 - x7 - coordenada [y = 225] //////
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 7; i++) {
      circle(210 + i * 5, 225 + j * 5, 3);
    }
  }

  // Filas 14,15,16,17,18,19 - x3 - coordenada [y = 225]
  for (let j = 0; j < 5; j++) {
    
    for (let i = 0; i < 3; i++) {
      circle(190 + i * 5, 225 + j * 5, 2);
    }
  }

  ////////// Filas 15,16 - x18 - coordenada [y = 230] //////
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 18; i++) {
      circle(100 + i * 5, 230 + j * 5, 2);
    }
  }

  //////// Fila 17 - coordenada [y = 240] //////
  for (let i = 0; i < 13; i++) {
    circle(130 + i * 5, 240, 2);
  }
  for (let i = 0; i < 4; i++) {
    circle(100 + i * 5, 240, 2);
  }

  //////// Fila 18 - coordenada [y = 245] //////
  for (let i = 0; i < 4; i++) {
    circle(130 + i * 5, 245, 2);
  }
  for (let i = 0; i < 6; i++) {
    circle(160 + i * 5, 245, 2);
  }

  //////// Fila 19 - coordenada [y = 250] //////
  for (let i = 0; i < 7; i++) {
    circle(130 + i * 5, 250, 4);
  }
  for (let i = 0; i < 7; i++) {
    circle(160 + i * 5, 250, 2);
  }

  //////// Fila 20 - coordenada [y = 255] //////
  for (let i = 0; i < 13; i++) { 
    circle(122 + i * 5, 255, 2);
  }
  for (let i = 0; i < 13; i++) {
    circle(20 + i * 5, 255, 2);
  }

  //////// Fila 21 - coordenada [y = 260] //////
  for (let i = 0; i < 30; i++) {
    circle(20 + i * 5, 260, 2);
  }

  // ////// Fila 23 - coordenada [y = 265] //////
  for (let i = 0; i < 23; i++) {
    circle(20 + i * 5, 265, 2);
  }
  for (let i = 0; i < 5; i++) {
    circle(145 + i * 5, 265, 2);
  }

  // //// Filas 24 hasta la última [y = 270] ////
  for (let j = 0; j < 37; j++) {
    for (let i = 0; i < 29; i++) {
      circle(20 + i * 5, 270 + j * 5, 2);
    }
    
  
   // //// Filas de puntos derecha ////
  for (let j = 0; j < 57; j++) {
   for (let i = 0; i < 17; i++) {
    circle(410 + i * 5, 222 + j * 5, 2);
    }
  }
}
  
  
  //if (mouseIsPressed) {
   //vibracion = random(-3, 3); 
   // }
  
  //////// Rectángulos negros izq//////
  fill(0);
  rect(15, 270, 32, 5);
  rect(15, 282, 25, 5);
  rect(15, 295, 70, 5);
  rect(15, 300, 29, 5);
  rect(15, 360, 29, 10);
  rect(15, 370, 35, 5);
  rect(35, 375, 115, 5);
  rect(15, 380, 29, 10);
  rect(59, 380, 85, 5);
  rect(120, 360, 42, 35);
  rect(120, 360, 42, 15); 
  rect(60, 395, 105, 5);
  rect(15, 405, 39, 10);
  rect(15, 415, 25, 15);
  rect(15, 425, 15, 15);
  rect(85, 440, 15, 15);
  rect(135, 440, 30, 15);
  
    //////// Rectángulos negros edificio derecha //////
  fill(0);
  rect(435, 327, 25, 15);
  rect(435, 382, 25, 5);
  rect(455, 415, 40, 5);
  rect(470, 485, 15, 25); 
  rect(475, 215, 10, 25);
  rect(409, 245, 15, 25);
  rect(420, 260, 25, 10);
  rect(460, 410, 35, 10);
  rect(475, 400, 15, 25);
  

  ////// Faro? ////
  fill(255);
  rect(194, 170, 5, 12);
  rect(205, 170, 5, 12);
  stroke(255);
  strokeWeight(1);
  line(200, 500, 200, 170);
  line(205, 500, 205, 170);
  
  
    ////// Faro 2 ////
  fill(255);
  rect(355, 170, 15, 5);
  stroke(255);
  strokeWeight(1);
  line(371, 500, 371, 140);
  line(374, 500, 374, 140);
  line(369, 190, 360, 170);
 
  
  ////////////// Líneas verticales  //////////////////
  stroke(255);
  strokeWeight(1);
  for (let x = 120; x <= 280; x += 5) {
  line(x, 310, x, 500); 
  
  }
  
  
 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


function draw() {
  noStroke();
  angleMode(DEGREES);
 
  
  ////// ///////// ///////// ///
  ////// /// --- if --- ///// ////
   if (mouseIsPressed)  {
    vibracion = random(-7, 8); 
    rayos = random(-50,10); 
    sol = true; 
 
  ////// ///////// ///////// ///////// ///////// ///  

  push();
  ////////  limpia rayos del sol //////// 
  fill(0);
  rect(10, 0, 515, 130);

  
  ////////  sol negro (ver como mejorar la estetica del sol con unos vertex) /////// 
  
     
  noFill();
  fill(0); 
  stroke(255); 
  strokeWeight(1); 
   

    
    // rayos izq //
     
  line (160 + rayos,20,250,20);
  line (120 + rayos,30,250,30);
  line (110 + rayos,40,250,40);
  line (120 + rayos,50,250,50);
  line (150 + rayos,60,250,60);
  line (110 + rayos,70,250,70);
  line (200 + rayos,80,250,80);
  line (150 + rayos,90,250,90);

  // rayos derecha//
  
  line (340 + rayos, 20,250,20);
  line (370 + rayos, 30,250,30);
  line (360 + rayos, 40,250,40);
  line (380 + rayos, 50,250,50);
  line (400 + rayos, 60,250,60);
  line (390 + rayos, 70,250,70);
  line (410 + rayos, 80,250,80);
  line (410 + rayos, 90,250,90);
  

  
  /////////////////////////
  push();
  fill (0);
  noStroke();
  circle(255, 55, 81);
  pop();
  //////////////////////////
  noFill ();
  circle(255, 56, vibracion * 2);
  circle(255, 56, vibracion * 3);
  circle(255, 56, vibracion * 2);
  circle(255, 56, vibracion * 2);
  pop();

    
  push();
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(255 + random(-22, 12), 15 + random(-2,4));  // 1 
  vertex(290 + random(-35, 11), 30 + random(-5,5));  // 2  
  vertex(300 + random(-32, 12), 50 + random(-4,1));  // 3 
  vertex(290 + random(-10, 12), 90 + random(-3,5));  // 4 
  vertex(250 + random(-12, 12), 100 + random(-2,5)); // 5 
  vertex(220 + random(-12, 12), 80 + random(-1,1));  // 6   
  vertex(210 + random(-12, 12), 70 + random(-1,1));  // 7 
  vertex(220 + random(-12, 12), 30 + random(-1,1));  // 8 
  endShape(CLOSE);
  
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(255 + random(-12, 2), 15 + random(-1,1));  // 1 
  vertex(295 + random(-14, 2), 45 + random(-2,1));  // 2  
  vertex(305 + random(-12, 2), 55 + random(-1,1));  // 3 
  vertex(290 + random(-14, 2), 75 + random(-1,3));  // 4 
  vertex(250 + random(-12, 2), 95 + random(-2,1));  // 5 
  vertex(220 + random(-14, 2), 80 + random(-1,1));  // 6   
  vertex(210 + random(-12, 2), 65 + random(-1,1));  // 7 
  vertex(225 + random(-12, 2), 35 + random(-1,1));  // 8 
  endShape(CLOSE);
  
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(250 + random(-5, 3), 20 + random(-2,2));  // 1 
  vertex(290 + random(-5, 3), 35 + random(-2,3));  // 2  
  vertex(295 + random(-3, 3), 50 + random(-2,4));  // 3 
  vertex(280 + random(-6, 3), 90 + random(-2,3));  // 4 
  vertex(230 + random(-7, 3), 95 + random(-2,4));  // 5 
  vertex(220 + random(-8, 3), 85 + random(-2,2));  // 6   
  vertex(210 + random(-4, 3), 71 + random(-2,5));  // 7 
  vertex(220 + random(-5, 3), 35 + random(-2,3));  // 8 
  endShape(CLOSE);

  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(280 + random(-5, 2), 15 + random(-2,1));  // 1 
  vertex(285 + random(-15, 2),35 + random(-5,1));  // 2  
  vertex(295 + random(-6, 2), 50 + random(-5,1));  // 3 
  vertex(280 + random(-7, 2), 90 + random(-5,1));  // 4 
  vertex(230 + random(-8, 2), 95 + random(-5,1));  // 5 
  vertex(220 + random(-9, 2), 85 + random(-2,1));  // 6   
  vertex(210 + random(-4, 2), 71 + random(-2,1));  // 7 
  vertex(220 + random(-4, 2), 25 + random(-2,1));  // 8 
  endShape(CLOSE);
   
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(250 + random(-15, 15), 25 + random(-2,1));  // 1 
  vertex(135 + random(-15, 3), 45 + random(-5,5));  // 2  
  vertex(195 + random(-6, 2), 60 + random(-2,1));  // 3 
  vertex(250 + random(-7, 2), 90 + random(-5,1));  // 4 
  vertex(350 + random(-4, 2), 65 + random(-2,1));  // 5 
  endShape(CLOSE);

  
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(250 + random(-15, 15), 25 + random(-6,6));  // 1 
  vertex(135 + random(-15, 3), 45 + random(-5,5));  // 2  
  vertex(195 + random(-6, 2), 50 + random(-4,4));  // 3 
  vertex(250 + random(-7, 2), 90 + random(-5,6));  // 4 
  vertex(350 + random(-4, 2), 51 + random(-4,4));  // 5 
  endShape(CLOSE);
 
 
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  vertex(210 + random(-15, 15), 25 + random(-6,6));  // 1 
  vertex(145 + random(-15, 3), 45 + random(-5,5));  // 2  
  vertex(165 + random(-6, 2), 50 + random(-4,4));  // 3 
  vertex(270 + random(-7, 2), 90 + random(-5,6));  // 4 
  vertex(350 + random(-4, 2), 45 + random(-4,4));  // 5 
  endShape(CLOSE);
  pop();   
   
   

   
   } 

 
  
  


///////////////////////////////////////////////
///////////////////////////////////
  
   /////// ///// ///// ///  fondo draw edificio // ///// ///// ///// ///// ///// /// 
  fill(0);
  rect(206, 341, 235);   

  fill(0);
  rect(291, 280, 75);
   
  
  ///// Edificio? ///////   
 
 
 push ();
 fill (255, 255, 255) 
 for (let i = 0; i < 5; i++) {
 rect(233, 350 + i * 28 , 125, 13, 2);
 translate (vibracion, vibracion * 0.001);   
 }
 pop();
  
 
  
  ///// Texturas del edificio /////// 
  
  fill(0); 
 
  
  ///// circulos "transparentes" para textura /////// 
  push ();
  translate (vibracion, vibracion * 0.001);
  for (let j = 0; j < 7; j++) {
  for (let i = 0; i < 8; i++) {
  circle(242 + i * 15, 335 + j * 28, 7);
     
  }

  fill(0); 
  //// circulos transparentes x2 /////// 
  for (let j = 0; j < 6; j++) {
  for (let i = 0; i < 8; i++) {
  circle(242 + i * 15, 322 + j * 28, 7);
    
       }
    }
  
    fill(0); 
  //// circulos transparentes x2 /////// 2777quede aca
  for (let j = 0; j < 2; j++) {
  for (let i = 0; i < 3; i++) {
  circle(52 + i * 25, 322 + j * 18, 3);
      }
    }  
 }
  pop();  

  
  
  
  ///// rect transparente del fondo del edificio /////// 
  push();
  translate (vibracion, vibracion * 0.0001);
  fill (255, 255, 255, 95);
  stroke(140)
  strokeWeight(3);
  rect(210, 350, 150, 150);
  pop();
  
  
/////////////////////////////////////////////////////////////////  
  
/////// Lineas verticales 4x textura //////////////
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  strokeWeight(2);
  for (let x = 213; x <= 359; x += 3) {
  line(x, 365, x, 375); 
  }
  
  stroke(255);
  strokeWeight(2);
  for (let x = 212; x <= 359; x += 3) {
  line(x, 403, x, 393); 
  
  }
  
  
  stroke(255);
  strokeWeight(2); 
  for (let x = 212; x <= 359; x += 3) {
  line(x, 432, x, 423);
   
  }
  
  
  
  stroke(255);
  strokeWeight(2);
  for (let x = 212; x <= 359; x += 3) {
  line(x, 452, x, 460); 
  
  }
  pop();
 
  //// Lineas inclinadas escaleras tarkov ////
  push();
  translate (vibracion, vibracion * 0.001);
  stroke(255);
  rotate(16);             
  for (let x = 325; x <= 345; x += 4) {
  line(x, 365, x, 363); 
  }
  pop();
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(16); 
  for (let x = 315; x <= 335; x += 4) {
  line(x, 335, x, 333); 
  }
  pop(); 
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(16); 
  for (let x = 308; x <= 330; x += 4) {
  line(x, 306, x, 309); 
  }
  pop(); 
 
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(16); 
  for (let x = 308; x <= 330; x += 4) {
  line(x, 306, x, 309); 
  }
  pop(); 
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-16); 
  for (let x = 105; x <= 127; x += 4) {
  line(x, 405, x, 402); 
  }
  pop(); 
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-16); 
  for (let x = 105; x <= 127; x += 4) {
  line(x, 405, x, 402); 
  }
  pop()
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-16); 
  for (let x = 73; x <= 95; x += 4) {
  line(x, 513, x, 509); 
  }
  pop()
  
  
  
  
////////////////////////////////////////////////////////////////////////////////////////////////////////  

  
  //////////////    Piso/escalera en forma de trapecio del edificio    /////////////////// 
  
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255, 255, 255);
  for (let y = 480; y <= 495; y += 3) {
  line(210, y, 359, y);  
  } 
      
  fill (0);
  noStroke();
  triangle(245, 477, 209, 495, 207, 477);
  fill (0);
  triangle(360, 475, 360, 495, 330, 477);
  pop();
 
  
////////////// triangulo casa ///////////////    
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-90);             
  for (let x = -346; x <= -339; x += 4) {
  line(x, 305, x, 358); 
  }
  pop();
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-50);             
  for (let x = -65; x <= -32; x += 4) {
  line(x, 461, x, 495); 
  }
  pop();
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-50);             
  for (let x = -65; x <= -25; x += 4) {
  line(x, 453, x, 458); 
  }
  pop();
  
  
   

  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  rotate(-50);             
  for (let x = -28; x <= -22; x += 4) {
  line(x, 453, x, 495); 
  }
  pop();
  
  
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255);
  strokeWeight(1);
  for (let x = 227; x <= 235; x += 4) {
  line(x, 351, x, 475); 
  }
  pop();
  
  
  
  ////// edificio pequeño derecha  //////////
  
  push();
  translate (vibracion, vibracion * 0.0001);
  stroke(255, 255, 255, 190);
  strokeWeight(1);
  for (let x = 365; x <= 435; x += 3) {
  line(x, 505, x, 342); 
  }
  

  
  fill(0, 0, 0, 165);
  for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
  rect(370 + j * 30, 350 + i * 22, 15, 15);
  }
}
  
  translate (vibracion, vibracion * 0.0001);
  stroke(255, 255, 255);
  for (let y = 469; y <= 500; y += 3) {
  line(390, y, 370, y);  
  } 
  pop();
 
//////// DESTROY ///////////////////
  
  //// Rectángulos negro izq //////
  push(); 
  
  translate (vibracion, vibracion * 20);
  fill(0);
  rect(15, 270, 32, 5);
  rect(15, 282, 25, 5);
  rect(15, 295, 70, 5);
  rect(15, 300, 29, 5);
  rect(15, 360, 29, 10);
  rect(15, 370, 35, 5);
  rect(15, 380, 29, 10);
  rect(15, 405, 39, 10);
  rect(15, 415, 25, 15);
  rect(15, 425, 15, 15);
  rect(85, 440, 15, 15);
  rect(135, 209, 15, 15);
  rect(100, 219, 15, 15);
  rect(165, 275, 25, 25);
  rect(95, 455, 15, 35);
  rect(95, 455, 15, 35);
  rect(128, 509, 35, 35);
    //////// Rectángulos negros edificio derecha //////
  fill(0);
  rect(435, 327, 25, 15);
  rect(435, 382, 25, 5);
  rect(455, 415, 40, 5);
  rect(470, 485, 15, 25); 
  rect(475, 215, 10, 25);
  rect(409, 245, 15, 25);
  rect(420, 260, 25, 10);
  rect(460, 410, 35, 10);
  rect(475, 400, 15, 25);
  
  pop();


   
} 
