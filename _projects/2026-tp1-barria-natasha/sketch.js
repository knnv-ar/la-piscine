/*
------------------- Corazones en Contraste -------------------
  Barria Cuella Natasha
____________________
Trabajo Práctico N°1
Artes Multimediales 1 - Cátedra Lacabanne

____________________
Una obra sobre lo distantes y difuminados que se volvieron nuestros vínculos,
en epocas dónde nos conectamos a todo menos entre nosotros mismos.

</3
____________________
Una vez completado el primer ciclo de estados, se recomienda explorar la posibilidad de movimiento.
Utilizar W A S D para cambiar la posición de los corazones

*/




let a1=0;
let b1=0;
let a2=0;
let b2=0;
let i=0;
let Rx=0;
let Ry=0;
let angulo = 0.1;
let validador = 0; 
let mx1=0;
let mx2m=0;
let my1=0;
let mx2=0;
let eCorazon=0;
let contador=0;


function setup() {
let canvas = createCanvas(512, 512); // Reemplazá con tus dimensiones
  canvas.parent('div-sketch'); // ESTA LÍNEA ES OBLIGATORIA

frameRate (60);
}

function draw() {
//////////// noise
  noiseSeed(5)
  let noiseLevel = 3.5;
  let noiseScale = 2;
  let nx = noiseScale * frameCount;
  let nv = noiseLevel * noise(nx);

///////// movimiento latente
  let S= map(sin(frameCount * 0.04), -1,1,0.8,1);
  let C= map(cos(frameCount * 0.04), -1,1,0.8,1);
  

////// CAMBIOS DE ESTADO
  contador++; 

  if (contador===500){
    eCorazon=1;
    background(30);
    validador=0;
  }
  if (contador===1100){
    eCorazon=2;
    background(220)
    validador=0;
  
  }
  if (contador===1700){
    eCorazon=0
    background(30)
    validador=0;
    contador=0;
  
  }


    
  ////////////////// VERSION 1 

  if(eCorazon==0){

beginShape(); //////// LINEAS DE PULSO 
  stroke(255);
  strokeWeight(3);
  noFill();
  vertex(128+a1,256+b1);
  vertex(128+a1+30,256+b1+40);
  vertex(128+a1+61,256+b1-10);
  vertex(128+a1+100,256+b1+70);
  vertex(384+a2-130,256+b2-50)
  vertex(384+a2-100,256+b2+30)
  vertex(384+a2-70,256+b2-30)
  vertex(384+a2-40,256+b2+25);
  vertex(384+a2,256+b2);
endShape();
 
strokeWeight(1);    
 stroke(0);
 fill(255);
    push(); ////// CORAZON IZQ
    translate(128+nv,256-nv)
    scale(1.15*S)
    beginShape();
    vertex(a1,b1);
    vertex(a1-20,b1-20);
    vertex(a1-40,b1+5);
    vertex(a1,b1+45);
    vertex(a1+40,b1+5);
    vertex(a1+20,b1-20);
    vertex(a1,b1);
    endShape();
  pop();

    
  push(); //////// CORAZON DER
    translate(384-nv,256+nv)
    scale(1.15*C)
    beginShape();
    vertex(a2,b2);
    vertex(a2-20,b2-20);
    vertex(a2-40,b2+5);
    vertex(a2,b2+45);
    vertex(a2+40,b2+5);
    vertex(a2+20,b2-20);
    vertex(a2,b2);
    endShape();
  pop();



    
/////////////// VERSION 2 
  } else if (eCorazon==1){
  beginShape();//////// LINEAS DE PULSO
  stroke(255);
  strokeWeight(3);
  noFill();
  vertex(128+a1,256+b1);
  vertex(128+a1+30,256+b1-40);
  vertex(128+45,256+b1-15);
  vertex(128+40,256+b1-12);
  vertex(128+a1+61,256+b1+10);
  vertex(128+a1+61,256+b1+14);
  vertex(128+a1+100,256+b1-70);
  vertex(128+a1+90,256+b1-70);
  vertex(238,256);
  vertex(270,254);
  vertex(210,260)
  vertex(240,264);
  vertex(384+a2-133,256+b2+48)
  vertex(384+a2-100,256+b2+50)
  vertex(384+a2-130,256+b2+54)
  vertex(384+a2-100,256+b2-30)
  vertex(384+a2-105,256+b2-38)
  vertex(384+a2-85,256+b2)
  vertex(384+a2-89,256+b2+2)
  vertex(384+a2-70,256+b2+30)
  vertex(384+a2-40,256+b2-25);
  vertex(384+a2,256+b2);
endShape();
    
strokeWeight(1);
 stroke(0);
 fill(255); 
    
push(); //////// CORAZON IZQ
    translate(128+nv,256-nv)
    scale(1.15*S)
    beginShape();
    vertex(a1,b1);
    vertex (a1-5, b1-5);
    vertex(a1+20, b1-10)
    vertex (a1-13,b1-11)
    vertex(a1-20,b1-20);
    vertex(a1-37,b1+3)
    vertex(a1+15,b1+1)  
    vertex(a1-40,b1+5);
    vertex(a1-37,b1+10)
    vertex(a1+29,b1+13);
    vertex(a1-36, b1+18)
    vertex(a1,b1+45);
    vertex(a1+22,b1+27)
    vertex(a1-15,b1+30)
    vertex(a1+24,b1+20)
    vertex(a1+40,b1+5);
    vertex(a1+20,b1-20);
    vertex(a1,b1);
    endShape();
  pop();

  
  push(); //////// CORAZON DER
    translate(384-nv,256+nv)
    scale(1.15*C)
    beginShape();
    vertex(a2,b2);
    vertex(a2-20,b2-20);
    vertex(a2-32,b2-7);
    vertex(a2+30,b2+20)
    vertex(a2-35,b2)
    vertex(a2-40,b2+5);
    vertex(a2,b2+45);
    vertex(a2+6,b2+39);
    vertex(a2-50,b2+5)
    vertex(a2+10,b2+35);
    vertex(a2+40,b2+5);
  vertex(a2+36,b2+4);
    vertex(a2-25,b2-10);
    vertex(a2+35,b2-7)
    vertex(a2+20,b2-20);
    vertex(a2,b2);
    endShape();
  pop();
  
  }
  
///////// VERSION 3
  
  if(eCorazon==2){
beginShape(); //////// LINEAS DE PULSO 
  stroke(0);
  strokeWeight(3);
  noFill();
  vertex(132+a1,272+b1);
  vertex(370+a2,272+b2);
endShape();
 
    
  strokeWeight(2);
 stroke(255);
 fill(10);
    push(); ////// CORAZON IZQ
    translate(128,256)
    scale(1.15*S)
    beginShape();
    vertex(a1,b1+45);
    vertex(a1-11,b1+28);
    vertex(a1-3,b1+23)
    vertex(a1-13,b1+10);
    vertex(a1-2,b1+5);
    vertex(a1-25,b1-20);
    vertex(a1-45,b1+5);
    vertex(a1,b1+45);
    vertex(a1+45,b1+5);
    vertex(a1+25,b1-20);
    vertex(a1+2,b1-1);
    vertex(a1+10,b1+6)
    vertex(a1-3,b1+13)
    vertex(a1+7,b1+25);
    vertex(a1-2,b1+30);   
    vertex(a1+1,b1+45);
    endShape();
  pop();

    
  push(); //////// CORAZON DER
    translate(384-nv,256+nv)
    scale(1.15*C)
    beginShape();
    vertex(a2,b2+45);
    vertex(a2-8,b2+25);
    vertex(a2,b2+20);
    vertex(a2-12,b2+12);
    vertex(a2+3,b2+6)
    //vertex(a2,b2);
    vertex(a2-25,b2-20);
    vertex(a2-45,b2+5);
    vertex(a2,b2+45);
    vertex(a2+45,b2+5);
    vertex(a2+25,b2-20);
    vertex(a2+3,b2-3);
    vertex(a2+14,b2+5);
    vertex(a2,b2+12);
    vertex(a2+13,b2+20);
    vertex(a2-2,b2+29);
    vertex(a2+5,b2+32)
    vertex(a2,b2+45)
    endShape();
  pop();
}


  
//////////////////////////////////////////////////////////////////////////  FONDO
  noStroke(); 
  let grisC = map(cos(frameCount * 0.04),-1, 1, 128, 255)
  let grisS = map(sin(frameCount * 0.04), -1, 1, 0, 128);
  
  if(validador<1000){
    for(i=0;i<5;i++) {
  push();
    fill(grisS,[7*i])
      Rx= random(0,512);
      Ry= random(0,512);
      translate(Rx,Ry);
      scale(0.9); 
      beginShape();
      vertex(a1,b1);
      vertex(a1-20,b1-20);
      vertex(a1-40,b1+5);
      vertex(a1,b1+45);
      vertex(a1+40,b1+5);
      vertex(a1+20,b1-20);
      vertex(a1,b1);
      endShape();
    pop();

   push();
      fill(grisC,[2*i])
      Rx= random(0,512);
      Ry= random(0,512);
      translate(Rx,Ry);
      scale(-1*0.9);
      beginShape();
      vertex(a1,b1);
      vertex(a1-20,b1-20);
      vertex(a1-40,b1+5);
      vertex(a1,b1+45);
      vertex(a1+40,b1+5);
      vertex(a1+20,b1-20);
      vertex(a1,b1);
      endShape();
      validador++;
    pop();
    }
 }
  
    if (keyIsPressed){
      if(key=='W'|| key=='w'){
        b1--;
        b2++;
      }
      if(key=='A'|| key=='a'){
        a1--;
        a2++;
      }
      if(key=='S'|| key=='s'){
        b1++;
        b2--;
      }
      if(key=='D'|| key=='d'){
        a1++;
        a2--;
      }
    }

  }



   