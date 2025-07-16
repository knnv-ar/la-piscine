let mitadAncho, mitadAlto;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(255);
  let mx = mouseX / 30;
  let mx2 = mouseX / 100;
  let desplazamientoA = random(-mx, mx);
  let desplazamientoB = random(-mx, mx);
  let desplazamientoC = random(-mx2, mx2);
  let desplazamientoD = random(-mx2, mx2);
  mitadAncho = mouseX;
  mitadAlto = mouseY;
  if(mouseX >= 324) background(50);
  strokeWeight(2);
  //-----------------------------------PERSONA--------------------------------------------------

  noFill();
  stroke(0);
  bezier(350 + desplazamientoC, 150, 320, 160, 330, 200, 320 - desplazamientoD, 200); //frente
  bezier(320 + desplazamientoC, 200, 310, 205, 315, 215, 325 - desplazamientoD, 227);
  bezier(327 + desplazamientoC, 217, 325, 224, 315, 235, 310 - desplazamientoD, 235);
  bezier(310 + desplazamientoC, 235, 304, 240, 310, 245, 315 - desplazamientoD, 250); //nariz
  bezier(315 + desplazamientoC, 250, 318, 242, 315, 242, 312 - desplazamientoD, 247);
  bezier(312 + desplazamientoC, 247, 318, 252, 309, 262, 302 - desplazamientoD, 265); //puente
  bezier(304 + desplazamientoC, 265, 294, 268, 294, 275, 304 - desplazamientoD, 278); //labios
  bezier(304 + desplazamientoC, 265, 310, 260, 325, 270, 330 - desplazamientoD, 280);
  ellipse(315, 285, 30 + desplazamientoC, 12 - desplazamientoD);
  bezier(306 + desplazamientoC, 290, 310, 303, 307, 306, 304 - desplazamientoD, 310);
  bezier(304 + desplazamientoC, 310, 300, 313, 300, 320, 315 - desplazamientoD, 320); //pera
  bezier(315 + desplazamientoC, 320, 400, 330, 340, 390, 335 - desplazamientoD, 400); //cuello
  
  ellipse(310, 210, 40 + desplazamientoC, 50 - desplazamientoD); //lente1
  ellipse(355, 214, 40 + desplazamientoC, 50 - desplazamientoD); //lente2
  
  bezier(330 + desplazamientoC, 220, 345, 205, 360, 200, 375 - desplazamientoD, 214); //ojo
  
  bezier(360 + desplazamientoC, 130, 330, 170, 380, 210, 390 - desplazamientoD, 200); //pelo1
  bezier(390 + desplazamientoC, 200, 420, 170, 380, 130, 375 - desplazamientoD, 165);
  bezier(360 + desplazamientoC, 130, 390, 100, 440, 110, 470 - desplazamientoD, 200);
  bezier(370 + desplazamientoC, 125, 280, 130, 300, 190, 330 - desplazamientoD, 210); //pelo2
  bezier(390 + desplazamientoC, 200, 420, 220, 420, 270, 400 - desplazamientoD, 290); //pelo3
  bezier(400 + desplazamientoC, 290, 390, 300, 385, 290, 390 - desplazamientoD, 280);
  bezier(390 + desplazamientoC, 280, 350, 360, 470, 360, 440 - desplazamientoD, 290);
  bezier(470 + desplazamientoC, 260, 400, 180, 500, 147, 500 - desplazamientoD, 310); //pelo4
  bezier(470 + desplazamientoC, 330, 490, 290, 510, 290, 520 - desplazamientoD, 400); //pelo5
  bezier(400 + desplazamientoC, 340, 380, 500, 430, 500, 470 - desplazamientoD, 420); //pelo6
  
  bezier(340 + desplazamientoC, 390, 325, 390, 310, 390, 300 - desplazamientoD, 450); //hombro
  
  //-----------------------------------PERSONA BLANCO--------------------------------------------------
  
  push();
  scale(1.02);
  stroke(255);

  noFill();
  bezier(350 + desplazamientoA, 150, 320, 160, 330, 200, 320 - desplazamientoB, 200); //frente
  bezier(320 + desplazamientoA, 200, 310, 205, 315, 215, 325 - desplazamientoB, 227);
  bezier(327 + desplazamientoA, 217, 325, 224, 315, 235, 310 - desplazamientoB, 235);
  bezier(310  + desplazamientoA, 235, 304, 240, 310, 245, 315 - desplazamientoB, 250); //nariz
  bezier(315 + desplazamientoA, 250, 318, 242, 315, 242, 312 - desplazamientoB, 247);
  bezier(312 + desplazamientoA, 247, 318, 252, 309, 262, 302 - desplazamientoB, 265); //puente
  bezier(304 + desplazamientoA, 265, 294, 268, 294, 275, 304 - desplazamientoB, 278); //labios
  bezier(304 + desplazamientoA, 265, 310, 260, 325, 270, 330 - desplazamientoB, 280);
  ellipse(315, 285, 30 + desplazamientoA, 12 - desplazamientoB);
  bezier(306 + desplazamientoA, 290, 310, 303, 307, 306, 304 - desplazamientoB, 310);
  bezier(304 + desplazamientoA, 310, 300, 313, 300, 320, 315 - desplazamientoB, 320); //pera
  bezier(315 + desplazamientoA, 320, 400, 330, 340, 390, 335 - desplazamientoB, 400); //cuello
  
  ellipse(310, 210, 40 + desplazamientoA, 50 - desplazamientoB); //lente1
  ellipse(355, 214, 40 + desplazamientoA, 50 - desplazamientoB); //lente2
  
  bezier(330 + desplazamientoA, 220, 345, 205, 360, 200, 375 - desplazamientoB, 214); //ojo
  
  bezier(360 + desplazamientoA, 130, 330, 170, 380, 210, 390 - desplazamientoB, 200); //pelo1
  bezier(390 + desplazamientoA, 200, 420, 170, 380, 130, 375 - desplazamientoB, 165);
  bezier(360 + desplazamientoA, 130, 390, 100, 440, 110, 470 - desplazamientoB, 200);
  bezier(370 + desplazamientoA, 125, 280, 130, 300, 190, 330 - desplazamientoB, 210); //pelo2
  bezier(390 + desplazamientoA, 200, 420, 220, 420, 270, 400 - desplazamientoB, 290); //pelo3
  bezier(400 + desplazamientoA, 290, 390, 300, 385, 290, 390 - desplazamientoB, 280);
  bezier(390 + desplazamientoA, 280, 350, 360, 470, 360, 440 - desplazamientoB, 290);
  bezier(470 + desplazamientoA, 260, 400, 180, 500, 147, 500 - desplazamientoB, 310); //pelo4
  bezier(470 + desplazamientoA, 330, 490, 290, 510, 290, 520 - desplazamientoB, 400); //pelo5
  bezier(400 + desplazamientoA, 340, 380, 500, 430, 500, 470 - desplazamientoB, 420); //pelo6
  
  bezier(340 + desplazamientoA, 390, 325, 390, 310, 390, 300 - desplazamientoB, 450); //hombro
  
  pop();
  
  //-----------------------------------OJOS---------------------------------------------------
  strokeWeight(10);
  stroke(255);
  
  bezier(40 + desplazamientoA, 20, 0, 30, 0, 100, 20 - desplazamientoB, 170); //ojo1
  bezier(40 + desplazamientoA, 20, 80, 40, 90, 130, 20 - desplazamientoB, 170);
  ellipse(45 + desplazamientoA, 100, 40, 40 - desplazamientoB); //pupila 1
  ellipse(48 + desplazamientoA, 101, 10, 10 - desplazamientoB); //pupila 1.5
  
  bezier(120 + desplazamientoA, 60, 150, 0, 260, 0, 280 - desplazamientoB, 60); //ojo2
  bezier(120 + desplazamientoA, 60, 150, 100, 260, 100, 280 - desplazamientoB,60);
  ellipse(230 + desplazamientoA, 60, 40, 40 - desplazamientoB);
  ellipse(231 + desplazamientoA, 61, 10, 10 - desplazamientoB);
  
  bezier(43 + desplazamientoA, 200, -10, 330, 0, 350, 80 - desplazamientoB, 400); //ojo3
  bezier(43 + desplazamientoA, 200, 70, 180, 140, 350, 80 - desplazamientoB, 400);
  ellipse(58 + desplazamientoA, 300, 70, 70 - desplazamientoB);
  ellipse(60 + desplazamientoA, 300, 40, 40 - desplazamientoB);
  ellipse(62 + desplazamientoA, 300, 10, 10 - desplazamientoB);
  
  bezier(200 + desplazamientoA, 250, 175, 280, 30, 480, 85 - desplazamientoB, 500);
  bezier(200 + desplazamientoA, 250, 250, 300, 250,480, 85 - desplazamientoB, 500);
  ellipse(190 + desplazamientoA, 350, 70, 70 - desplazamientoB);
  ellipse(192 + desplazamientoA, 348, 40, 40 - desplazamientoB);
  ellipse(194 + desplazamientoA, 346, 10, 10 - desplazamientoB);
  
  
  
  
  //-----------------------------------OJITO---------------------------------------------------
  push();
  
  translate(mitadAncho, mitadAlto);
  strokeWeight(2);
  stroke(0);
  
  fill(0);
  quad(-5, -20, -2, -2, 0, -2, -3, -20);
  quad(-17, -18, -7, 0, -5, 0, -15, -18);
  quad(-25, -11, -15, 0, -13, 0, -23, -11);
  quad(7, -18, 4, 0, 6, 0, 9, -18);
  quad(18, -13, 10, 0, 12, 0, 20, -13);
  fill(255);
  ellipse(0, 0, 45, 20);
  fill(0);
  ellipse(0, 0, 19, 19);

  pop();
  
}