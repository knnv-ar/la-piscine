
// ¿Quién fue Vera Molnár? :https://creacionhibrida.net/vera-molnar-una-pionera-del-arte-generativo-del-algoritmo-a-la-nft/

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(200)
  
  
  //cuadrado grande gris
  push();
  noStroke()
   fill(130)
  rect(20, 30, 480, 450)
  pop();

  //primer cuadrado negro
    push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(50, 52, 80, 75);

  pop();
  
  
push();
  
 noFill(0)
  strokeWeight(5)

  rect(61, 64, 57, 53)
  
  
pop();

  push()
  
  fill(1)
  strokeWeight(5)
  rect(76, 78, 26, 25)
  
  pop()
  
//fin de 1er cuadrado negro 
  
   

  // 2do cuadrado blanco
    push();

  noFill()
  strokeWeight(5);
  
  rect(50, 135, 80, 75);

  pop();
  
  
push();
  
 noFill()
  strokeWeight(5)

  rect(61, 146, 57, 53)
  
  
pop();

  push();
  
 noFill()
  strokeWeight(5)

  rect(75, 160, 27, 26)
  
  
pop();

  //fin 2do cuadrado blanco


  
  //inicio 3r cuadrado blanco
    push();

  noFill(0);
  strokeWeight(5);
  stroke(255);
  rect(50, 217, 80, 75);

  pop();
  
  
push();
  translate(61,228)
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(0, 0, 57, 53)
  
  
pop();

  push()
  translate(79, 238)
  noFill()
  rotate(radians(19))
  strokeWeight(5)
  stroke(255)
  rect(0, 0, 27, 26)
  
  pop()
 // fin 3r cuadrado blanco 
  
  
  //inicio 4to cuadrado blanco
 push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(50,300, 80, 75);

  pop();
  
  
push();
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(61, 310, 57, 53)
  
  
pop();

  push()
  
  noFill()
  strokeWeight(5)
  stroke(255)
  rect(73, 321, 32, 31)
  
  pop()

  push()
  
  fill(255)
  
  strokeWeight(5)
  stroke(255)
  rect(82, 330, 13, 12)
  
  pop()
// fin 4to cuadrado blanco
  
  
  
//inicio 5to cuadrado negro  
   push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(50,382, 80, 75);

  pop();
  
  
push();
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(61, 392, 57, 53)
  
  
pop();

  push()
  
  noFill()
  strokeWeight(5)
  stroke(1)
  rect(73, 403, 32, 31)
  
  pop()

  push()
  
  noFill()
  
  strokeWeight(4)
  stroke(1)
  rect(82, 412, 13, 12)
  
  pop()
// fin 5to cuadrado negro
  
  
// inicio 6to cuadrado blanco
   push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(136,382, 80, 75);

  pop();
  
  
push();
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(147, 393, 57, 53)
  
  
pop();

  push()
  
  translate(157, 407)
  rotate(radians(-10))
  noFill()
  strokeWeight(5)
  stroke(255)
  rect(0, 0, 32, 31)
  
  pop()

  push()
  translate(167,415)
  rotate(radians(-10))
  noFill()
  
  strokeWeight(4)
  stroke(255)
  rect(0, 0, 13, 12)
  
  pop()
  
//fin 6to cuadrado blanco

  
  
  //inicion 7mo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(223,382, 80, 75);

  pop();
  
  
push();
  translate(242,392)
  rotate(radians(8))
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(0, 0, 49, 46)
  
  
pop();

  push()
  
  translate(254, 405)
  rotate(radians(10))
  noFill()
  strokeWeight(5)
  stroke(255)
  rect(0, 0, 22, 21)
  
  pop()

  push()
  translate(167,415)
  rotate(radians(-10))
  noFill()
  
  strokeWeight(4)
  stroke(255)
  rect(0, 0, 13, 12)
  
  pop()
  
  //fin 7mo cuadrado blanco

  
  
  // inicio 8vo cuadrado negro
push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(310,382, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(325, 396, 49, 46)
  
  
pop();

  
  
  
  push()
  
 
  noFill()
  fill(1)
  strokeWeight(5)
  stroke(1)
  rect(338,408, 22, 21)
  pop()
  // fin 8vo cuadrado negro
  
  
  
// inicio 9no cuadrado blanco
  
  

push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(397,382, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(412, 396, 49, 46)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(425,408, 22, 21)
  
  
//fin 9no cuadrado blanco
  
  
  // inicio 10mo cuadrado negro
  
push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(397,299, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(411, 313, 52, 47)
  
  
pop();

  push()
  
 
  noFill()
  translate(423, 329)
  rotate(radians (-15))
  strokeWeight(5)
  stroke(1)
  rect(0,0, 22, 21)
  
  
  pop()
// fin 10mo cuadrado negro  
  
  

//inicio 11vo cuadrado negro
 push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(397,217, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(411, 230, 52, 47)
  
  
pop();

  push()
  
 
  noFill()
  
  fill(1)
  strokeWeight(11)
  stroke(1)
  rect(426,244, 22, 21)
  
  
  pop()
// fin 11vo cuadrado negro
  
  
// inicio 12vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(397,135, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(411, 149, 52, 47)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(426,162, 22, 21)
  
  
  pop()
  
  
 push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(434,170, 6, 5)
  
  
  pop()

  //fin 12vo cuadrado blanco
  
  
  //inicio 13vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(397,52, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(411, 66, 52, 47)
  
  
pop();

  push()
  
 
  noFill()
  translate(423, 81)
  rotate(radians(-15))
  strokeWeight(5)
  stroke(255)
  rect(0,0, 22, 21)
  
  
  pop()
//fin 13vo cuadrado blanco
  
  
//inicio 14vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(309,52, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(318, 61, 62, 57)
  
  
pop();

  push()
  
 
  noFill()
 
 
  strokeWeight(5)
  stroke(255)
  rect(328,69, 42, 41)
  
  
  pop()
  
  push()
  
 
  noFill()
 
 
  strokeWeight(5)
  stroke(255)
  rect(338,79, 22, 21)
  
  
  pop()
// fin 14vo cuadrado blanco
  
  
// inicio 15vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(309,52, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(318, 61, 62, 57)
  
  
pop();

  push()
  
 
  noFill()
 
 
  strokeWeight(5)
  stroke(255)
  rect(328,69, 42, 41)
  
  
  pop()
  
  push()
  
 
  noFill()
 
 
  strokeWeight(5)
  stroke(255)
  rect(338,79, 22, 21)
  
  
  pop()  


 // fin 15vo cuadrado blanco

  
// inicio 16vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(222,52, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(231, 61, 62, 57)
  
  
pop();

  push()
  
 
  noFill()
 
 
  strokeWeight(5)
  stroke(255)
  rect(243,73, 37, 34)
  
  
  pop()
  
  push()
  
 
  noFill()
 
 translate(256, 81)
rotate(radians (21))
  strokeWeight(5)
  stroke(255)
  rect(0,0, 13,13)
  
  
  pop()  

// fin 16vo cuadrado blanco
  
//inicio 17vo cuadrado blanco
push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(136,52, 80, 75);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(148, 63, 54, 52)
  
  
pop();

  push()
  
 
  noFill()
 
 translate(163, 78)
rotate(radians (0))
  strokeWeight(5)
  stroke(1)
  rect(0,0, 23,23)
  
  
  pop()  
//fin 17vo cuadrado blanco
 
//////////////////////////////////////////////////////////////////////////// 
   push ()
  fill(255)
rect (135, 134, 60, 60)
  pop()
  
  
   push ()
  noStroke()
  fill(1)
rect (133, 197, 64, 60)
  pop()
  
  

   push ()
  fill(255)
rect (135, 261, 60, 60)
  pop()

push ()
  noStroke()
  fill(1)
rect (133, 315, 68, 66)
  pop()

  push ()
  fill(255)
rect (199, 318, 60, 60)
  pop()

 push ()
  noStroke()
  fill(1)
rect (262, 316, 68, 64)
  pop()
  
push ()
  fill(255)
rect (333, 318, 60, 60)
  pop()

  
 push ()
  noStroke()
  fill(1)
rect (329, 254, 68, 64)
  pop()
  
push ()
  fill(255)
rect (332, 191, 60, 60)
  pop()

  
   push ()
  noStroke()
  fill(1)
rect (329, 131, 66, 64)
  pop()
  
  
push ()
  fill(255)
rect (266, 133, 60, 60)
  pop()
  
   push ()
  noStroke()
  fill(1)
rect (198, 131, 66, 64)
  pop() 
  
push ()
  fill(255)
rect (200, 198, 62, 60)
  pop()
  
push ()
  fill(255)
rect (265, 254, 62, 60)
  pop()

  //CUADRADOS NEGROS/BLANCOS
  
push ()
  noStroke()
  fill(1)
rect (196, 253, 66, 64)
  pop() 
  
push ()
  noStroke()
  fill(1)
rect (262, 193, 66, 64)
  pop() 
////////////////////////////////////////////////////////////////////////////
  
  // primer ficha negra
 push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(145,145,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(153, 153, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(1)
  rect(160,161, 8, 8)
  
  
  pop()
  
  
  
//segunda ficha blanca
 push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(144,207,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(152, 215, 23, 23)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(159,222, 8, 8)
 
  
// tercera ficha negra
  
 push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(143,267,42, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(151, 275, 26, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(1)
  rect(160,283, 8, 8)
  
  
  pop()
  
  
//cuarta ficha blanca
  
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(145,328,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(153, 336, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(161,344, 8, 8)
  
  
  pop()
  
//quinta ficha blanca
  
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(342,143,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(350, 151, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(358,159, 8, 8)
  
  
  pop()
  
// sexta ficha negra
  
push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(342,205,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(350, 213, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(1)
  rect(358,221, 8, 8)
  
  
  pop()
  
// séptima ficha blanca
  
push();

  noFill()
  strokeWeight(5);
  stroke(255);
  rect(343,266,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(255)
  rect(351, 274, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(255)
  rect(359,282, 8, 8)
  
  
  pop()
  
push();

  noFill()
  strokeWeight(5);
  stroke(1);
  rect(343,328,40, 40);

  pop();
  
  
push();
  
  
 noFill(0)
  strokeWeight(5)
stroke(1)
  rect(351, 336, 24, 24)
  
  
pop();

  push()
  
 
  noFill()
  
  strokeWeight(5)
  stroke(1)
  rect(359,344, 8, 8)
  
  
  pop()
  
}
