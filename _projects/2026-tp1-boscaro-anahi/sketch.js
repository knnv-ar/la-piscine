function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
background(0); }



function draw() {
   // console.log(mouseX, mouseY);
  background(0);

//Belleza
  //fondo
fill (250)
  rect (0,0,512,256)
  
//VARIABLES
  //inicio mar
  y= 128;
  
  noFill()
  stroke(2)
  strokeWeight (1)


  
  //CURVAS CON MOVIMIENTO
  //sen( framne + velocidad + (desfase)) * amplitud 

  
for (let i = 0; i <= 15; i +=0.6) {
push() 
    rotate(radians(i));
    translate(-60, i );
    beginShape();

// Hay que repetir el primer y el último punto
curveVertex(-50, 155);

curveVertex(50+ sin(frameCount * 0.03) * 8, 
            155+ sin(frameCount * 0.03) * 10);
  
curveVertex(90 + sin(frameCount * 0.03+0.5) *15, 
            135+ sin(frameCount * 0.03+0.5) * 15);
  
curveVertex(210+ sin(frameCount * 0.2 ) * 10, 
            165+ sin(frameCount * 0.03 + 1) * 15);
  
curveVertex(360, 
            140+ sin(frameCount * 0.03 + 1.5) * 15);
  
curveVertex(440,
            140 + sin(frameCount * 0.04 + 2) * 15);
  
curveVertex(592, 
            160+ sin(frameCount * 0.05 + 2.5) * 15);

curveVertex(512, 160);

endShape();
pop()
}

  //------------------------------------------
  for (let i = 0; i <= 10; i +=0.5) {
  push() 
    rotate(radians(i));
 translate(100-i,15+i)
beginShape();

// Hay que repetir el primer y el último punto
curveVertex(50, 155);

curveVertex(-2+ sin(frameCount * 0.03+0.2) *5, 
            155);
    
curveVertex(50, 
            135+ sin(frameCount * 0.05) *8);
    
curveVertex(210, 
            165+ sin(frameCount * 0.05) *15);
    
curveVertex(360, 
            140+ sin(frameCount * 0.03+0.2) *25);
    
curveVertex(450+sin(frameCount * 0.5) *5, 
            140);
    
curveVertex(512,
            130+sin(frameCount * 0.03+0.2) *15);

curveVertex(512, 160);

endShape();
pop()
}

  //--------------------------------------
  for (let i = -1; i <= 10; i +=0.2) {
  push() 
    rotate(radians(i*4));
 translate(0,55)
beginShape();

// Hay que repetir el primer y el último punto
curveVertex(50, 155);

curveVertex(-2, 155);
curveVertex(50, 135);
curveVertex(210, 165);
curveVertex(360, 140);
curveVertex(450, 140);
curveVertex(512, 130);

curveVertex(512, 160);

endShape();
pop()
}

  //-----------------------------------------------
for (let i = -3; i <= 2; i += 0.3) {
  push();

  translate(512, 45+i);   // mueve el origen al borde derecho
  scale(-1, 1);        // invierte horizontalmente

  rotate(radians(i+10));
  translate(25, i);

  beginShape();

  curveVertex(50, 155);

  curveVertex(-10, 155);
  curveVertex(50, 135);
  curveVertex(210, 165+sin(frameCount * 0.05+0.5) *15);
  curveVertex(360, 140+cos(frameCount * 0.05+0.5) *10);
  curveVertex(450, 140)+sin(frameCount * 0.05+0.5) *15;
  curveVertex(550, 73+cos(frameCount * 0.03+0.5)*9);

  curveVertex(500, 160+sin(frameCount * 0.05+0.5) *15);

  endShape();

  pop();
}


  //-----------------------------------------------
for (let i = -3; i <= 2; i += 0.33) {
  push();

  translate(332, 45+i);   // mueve el origen al borde derecho
  scale(-1, 1);        // invierte horizontalmente

  rotate(radians(i+10));
  translate(25, i);

  beginShape();

  curveVertex(50, 155);

  curveVertex(-10, 155);
  curveVertex(50, 135);
  curveVertex(210, 165+cos(frameCount * 0.05+0.5) *15);
  curveVertex(360, 140+sin(frameCount * 0.05+0.5) *10);
  curveVertex(450, 140)+cos(frameCount * 0.05+0.5) *15;
  curveVertex(550, 73+sin(frameCount * 0.03+0.5)*9);

  curveVertex(500, 160+cos(frameCount * 0.05+0.5) *15);

  endShape();

  pop();
}
  
  //-----------------------------------------------
for (let i = -15; i <= 10; i +=1.5) {
  push();

  translate(200, 15);   // mueve el origen al borde derecho
  scale(-1, 1);        // invierte horizontalmente

  rotate(radians(i*sin(frameCount * 0.01)));
  beginShape();

  curveVertex(0, 155);

  curveVertex(0, 155+cos(frameCount * 0.05)*5);
  curveVertex(20, 145);
  curveVertex(70, 155+sin(frameCount * 0.05)*5);
  curveVertex(120, 140+cos(frameCount * 0.05)*5);
  curveVertex(220, 185);

  curveVertex(300, 170+cos(frameCount * 0.05)*5);
   curveVertex(360, 200+cos(frameCount * 0.05)*15);
  curveVertex(480, 220);
  curveVertex(552,150+cos(frameCount * 0.05)*5);

  curveVertex(552, 10);

  endShape(); 

  pop();
}

  //-----------------------------------------------
for (let i = -12; i <= 10; i +=1.3) {
  push();

  translate(200, 15);   // mueve el origen al borde derecho
  scale(1, 1);        // invierte horizontalmente

  rotate(radians(-6-i*sin(frameCount * 0.015)));
  beginShape();

  curveVertex(0, 155);

  curveVertex(0, 155+cos(frameCount * 0.05)*2);
  curveVertex(20, 145);
  curveVertex(70, 155+sin(frameCount * 0.05)*3);
  curveVertex(120, 140+cos(frameCount * 0.05)*2);
  curveVertex(220, 185);

  curveVertex(300, 170+cos(frameCount * 0.05)*5);
   curveVertex(360, 200+cos(frameCount * 0.05));
  curveVertex(480, 220);
  curveVertex(552,150-cos(frameCount * 0.05)*5);

  curveVertex(552, 100);

  endShape();

  pop();
}

//------------------------------------------
for (let i = -4; i <= 10; i += 0.4) {
  push();

  translate(370, 75+(i*5.5));  

  rotate(radians(i*-2.2));
  beginShape();

  curveVertex(0, 165);

 curveVertex(-180 ,  200);
  curveVertex(-20, 145+sin(frameCount * 0.05+0.7) *12);
  curveVertex(70, 155+sin(frameCount * 0.03+1) *5);
  curveVertex(120, 140+sin(frameCount * 0.03+1.5) *10);
  curveVertex(220, 185+sin(frameCount * 0.05+2) *5);

  curveVertex(300, 170+sin(frameCount * 0.03+2.5) );
   curveVertex(360, 200+sin(frameCount * 0.05+3) *2);
  curveVertex(480, 220+sin(frameCount * 0.03+3.5) *5);
  curveVertex(552,15);

  curveVertex(552, 10 );

  endShape();

  pop();
}

  //------------------------------------
for (let i = -1; i <= 3; i +=0.4) {
  push();

  translate(580, i);  
  scale(-1, 1);        // invierte horizontalmente

  rotate(radians(i));
  beginShape();

  curveVertex(10, 145);

  curveVertex(-10 ,
              150+cos(frameCount * 0.02)*8);
  
  curveVertex(10+sin(frameCount * 0.02+10) *5, 
              135);

  curveVertex(50+sin(frameCount * 0.03+10) *5, 
              150);

  curveVertex(90+sin(frameCount * 0.02+10) *5, 
              135+i+cos(frameCount * 0.03+15) *8);
  
  curveVertex(120, 
              145+cos(frameCount * 0.05+25) *5);
  
  rotate(radians(2))
 
  curveVertex(190, 
              135+cos(frameCount * 0.03+10)*10 );

  curveVertex(300, 
              135+cos(frameCount * 0.05)*5 );

    curveVertex(400, 
              155+cos(frameCount * 0.09)*5 );
  
  curveVertex(600, 
              160+cos(frameCount * 0.03+4)*5 );

  curveVertex(600, 130+cos(frameCount * 0.03+4)*5 );
  endShape();
  pop();
}

  
//==================================================

//sol
fill(0)
  ellipse (70,60,85)

//===========================================================
//pajaritos   +cos(frameCount * velocidad ) * amplitud
  //1
   strokeWeight (0.5)
push()
  translate(168,70)
  
 for (let i = -5; i <= 13; i ++) {
  rotate(radians(cos (frameCount *0.03)*i));
  line(-20, -10,25, 0)  
     }
pop()

  //2
push()
  translate(240,85)
  
 for (let i = -5; i <= 10; i ++) {
  rotate(radians(sin (frameCount *0.05)*i));
  line(-18, 10, 15, 10);  }
pop()

//===========================================================
  
  //escalera 
  noStroke()
//6
fill(50)
rect(420,0,30,29)
//5
fill(250)
rect(412,8,30,30)
fill(50)
rect(400,16,35,35)
//4
fill(250)
rect(392,24,35,35)
fill(50)
rect(380,32,40,40)
//3
fill(250)
rect(372,40,40,40)
fill(50)
rect(360,48,45,45)
//2
fill(250)
rect(350,57,45,45)
fill(50)
rect(338,64,50,50)
//1
fill(250)
rect(330,76,45,45)
fill(0)
rect(311,86,54,43)

  
//===============================================
//===========================================================
//===============================================

  
// HOSTILIDAD ================
  
strokeWeight (0.3) 
stroke (256)

//SOL
push()
  translate(512,0)
  fill(250)
  ellipse (-70,316,85)
pop()

//=========================================
  
//BASURA

//botella
push()
translate(400,420)
 strokeWeight (2) 

noFill()
rotate(radians(-10))
ellipse(0,0,10,4)

rotate(radians(10))
  beginShape()
curveVertex(-5,0)
curveVertex(-5,0)
curveVertex(3,10)
curveVertex(0,40)
curveVertex(10,60)
curveVertex(10,60)
  endShape()


  beginShape()
curveVertex(5,0)
curveVertex(5,0)
curveVertex(7,10)
curveVertex(28,40)
curveVertex(30,55)
curveVertex(30,55)
  endShape()


  beginShape()
curveVertex(10,60)
curveVertex(10,60)
curveVertex(20,61)
curveVertex(30,55)
curveVertex(30,55)
  endShape()
  
pop()
  
 //lata
push()
translate (120,420)
   strokeWeight (1.5) 
  
push()
  fill(150)
  rotate(radians(-40))
  ellipse(0,0,15,10)
pop()

line(-7,3,15,25)
line(7,-4,25,13)
  
  beginShape()
curveVertex(15,25)
curveVertex(15,25)
curveVertex(23,22)
curveVertex(25,13)
curveVertex(25,13)
  endShape() 
pop()

  
  
 push()
//triangulo
  fill(150)
  noStroke()
  triangle (28,480,45,460,52,475)
pop()


  
//======================================= 
//AGUA

  //--------------------
for (let i = -1; i <= 5; i +=0.4) {
push();

noFill()
 translate(0, 384);   // mueve el origen al borde izq
  
  rotate(radians(i*1.2));
   strokeWeight (0.3) 
 beginShape();

  /* =========================
  usamos variables para q sea mov brusco.
  (solo 1 y -nº (el mov. es muy amplio si pongo -1))
  ============================
  */
  
let direccionSin;
if (sin(frameCount * 0.1) > 0) {
  direccionSin = 1;}
else { direccionSin = 0.1;}
  
let direccionCos;
if (cos(frameCount * 0.095) > 0) {
  direccionCos = 1;}
else { direccionCos = -0.3;}
  

  vertex(0, 24);
  vertex(50, 40 * direccionSin);
  vertex(75, 24 );
  vertex(220, 43* direccionCos);
  vertex(270, 35);

  endShape();
pop();
}

  //--------------------
  
for (let i = -1; i <= 8; i +=0.5) {
push();

  noFill()
 translate(200, 384);   // mueve el origen al borde izq
 rotate(radians(i*1.2));
   strokeWeight (0.6) 

beginShape();
  
let direccionSin;
if (sin(frameCount * 0.09) > 0) {
  direccionSin = 1;}
else { direccionSin = 0.003;}
  
let direccionCos;
if (cos(frameCount * 0.09) > 0) {
  direccionCos = 1;}
else { direccionCos = -0.03;}
  

  vertex(0, 44);
  vertex(50, 43 * direccionCos);
  vertex(75, 24*direccionSin);
  vertex(150, 43*direccionCos);
  vertex(220, 43*direccionSin);
  vertex(270, 35);
  vertex(320, 43);

endShape();
pop();
}

  
//---------------------

for (let i = -1; i <= 5; i +=0.2) {
push();

  noFill()
 translate(-30, 420);   // mueve el origen al borde izq
   strokeWeight (0.3) 
  rotate(radians(i*1.5));
  
 beginShape();

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = -0.01;}
  
      let direccionCos;
      if (cos(frameCount * 0.1) > 0) {
        direccionCos = 1;}
      else { direccionCos = -0.01;}
  //-----
  
  vertex(0, 46);
  vertex(0 ,  46);
  vertex(30, 14);
  vertex(50, 6 *direccionSin );
  vertex(75, 14 *direccionCos);
  vertex(220, 46* direccionCos);
  vertex(300, 14);
  
  vertex(480, 32* direccionSin);
  vertex(552,15);
  vertex(552, 10 );

  endShape();

pop();
}

  
//---------------------

for (let i = -1; i <= 5; i +=0.4) {
push();
  

  translate(612,254)
  scale(-1,1)
  fill(20,60)
  rotate(radians(i*0.7));
   strokeWeight (0.4) 

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = 0.9;}
  
      let direccionCos;
      if (cos(frameCount * 0.2) > 0) {
        direccionCos = 1;}
      else { direccionCos = 1.2;}
  //-----
  beginShape();

  vertex(0, 145);
  vertex(0 , 150)
  vertex(0, 135);
  vertex(0, 150);
  vertex(90, 135);
  vertex(120, 145);
  //rotate(radians(i))
  vertex(190, 135 );
  vertex(300, 135*direccionCos);
  vertex(400, 155);
  vertex(500, 155*(direccionCos*0.9));
  vertex(600, 160);
  vertex(650, 180);
  
endShape();
pop()
}


//---------------------

for (let i = -1; i <= 3; i +=0.6) {
push();
  

  translate(612,296)
  scale(-1,1)
  noFill()
  rotate(radians(i*0.7));
  strokeWeight (0.8) 

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = 1.22;}
  
      let direccionCos;
      if (cos(frameCount * 0.2) > 0) {
        direccionCos = 1;}
      else { direccionCos = 1.2;}
  //-----
  
  beginShape();

  vertex(0, 145);
  vertex(0 , 150)
  vertex(0, 135);
  vertex(0, 150);
  vertex(90, 135);
  
  vertex(100, 155);
  vertex(120, 145);
  //rotate(radians(i))
  vertex(190, 135 *direccionCos);
  vertex(300, 135*direccionSin);
  vertex(400, 155);
  vertex(500, 155*(direccionCos*0.9));
  vertex(600, 160);
  vertex(650, 180);
  
endShape();
pop()
}

  //-----------

//---------------------

for (let i = -10; i <= 3; i ++) {
push();
  

  translate(612,280)
  scale(-1,1)
  noFill()
  rotate(radians(i*0.5));

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = 1.22;}
  
      let direccionCos;
      if (cos(frameCount * 0.2) > 0) {
        direccionCos = 1;}
      else { direccionCos = 1.2;}
  //-----
  
  beginShape();

  vertex(0, 145);
  vertex(0 , 150)
  vertex(0, 135);
  vertex(0, 150);
  vertex(90, 135);
  
  vertex(100, 155);
  vertex(120, 145);
  //rotate(radians(i))
  vertex(190, 135 );
  vertex(300, 135);
  vertex(400, 155);
  vertex(500, 225);
  vertex(600, 210);
  vertex(650, 280);
  
endShape();
pop()
}

  //-------------------

for (let i = -1; i <= 5; i +=0.3) {
push();

  noFill()
 translate(0, 470);   
      scale(1,1)      // mueve el origen al borde izq
  rotate(radians(i*1.5));
   strokeWeight (0.9) 
  
 beginShape();

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = -0.01;}
  
      let direccionCos;
      if (cos(frameCount * 0.2) > 0) {
        direccionCos = 1;}
      else { direccionCos = -0.01;}
  //-----
  
  vertex(0, 46*direccionCos);
  vertex(0 ,  46*direccionCos);
  vertex(30, 14);
  vertex(40, 10*direccionCos );
  vertex(50, 6*direccionSin );
  vertex(75, 14 *direccionCos);
  vertex(135, 34 *direccionSin);
  vertex(220, 46* direccionCos);
  vertex(300, 24);

  vertex(480, 32* direccionSin);
  vertex(552,15);
  vertex(552, 10 );

  endShape();

pop();
}

  
//-----------------------

  
for (let i = -1; i <= 4; i +=0.3) {
push();

  //noFill()
  fill(20,10)
 translate(580, 450);   
      scale(-1,1)      // mueve el origen al borde izq
  rotate(radians(i*1.5));
  strokeWeight (0.9) 
  
 beginShape();

  //(movimiento)
      let direccionSin;
      if (sin(frameCount * 0.1) > 0) {
        direccionSin = 1;}
      else { direccionSin = -0.01;}
  
      let direccionCos;
      if (cos(frameCount * 0.2) > 0) {
        direccionCos = 1;}
      else { direccionCos = -0.01;}
  //-----
  
  vertex(0, 46);
  vertex(0 ,  46);
  vertex(30, 14);
  vertex(40, 10*direccionCos );
  vertex(50, 6*direccionSin );
  vertex(75, 14 *direccionCos);
  vertex(135, 34 *direccionSin);
  vertex(220, 46* direccionCos);
  vertex(300, 24);
  
  vertex(450, 32* direccionSin);
  vertex(540, 10 * direccionCos);
  vertex(590, 40 )

  endShape();

pop();
}
  
//---------------------


  //-----------
  
//escalera 
  noStroke()
//1
fill(250)
rect(56,255,54,43)
//2
fill(0)
rect(65,263,45,45)
fill(100)
rect(76,272,50,50)
//3
fill(0)
rect(84,281,40,40)
fill(100)
rect(100,290,45,45)
//4
fill(0)
rect(110,302,35,36)
fill(100)
rect(116,308,20,40)
//5
fill(0)
rect(126,322,30,30)
fill(100)
rect(142,332,35,35)
//6
fill(0)
rect(146,342,30,29)
fill(100)
rect(165,358,18,25)



}
