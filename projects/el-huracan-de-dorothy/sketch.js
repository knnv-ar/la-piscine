/* 
  -Pulsa P para pausar, R para resumir.
  -Mantén 1 y mueve el mouse para mover el lienzo.
  -Pulsa + para agregar elementos, - para restarlos.
  -Pulsa 9 para agregar velocidad positiva, 8 para negativa.
  -Pulsa S para usar el modo espectral, N para el modo normal.
  -Pulsa B para quitar el trazo, T para activarlo.
  -Pulsa 0 para restablecer.
*/


let height=512,width=512;
let posX=width/2, posY=height/2;

let colorS=0,colorF=255, transparencia=50;
let fps=60, vel=0.01;

let trazo=true, pausa=false, espectral=false;

//Cuadrados
let xA=-232,yA=-232,xB=232,yB=-232,xC=-232,yC=232,xD=232,yD=232;
let xRectSize=36,yRectSize=36;
let cantRect=10;


function setup() {
 let canvas = createCanvas(width,height);
 canvas.parent('div-sketch');
 background(255);
 frameRate(fps);
}

function draw() {
  if(keyIsPressed){
    if(key=="B" || key=="b") trazo=false;
    if(key=="T"||key=="t") trazo=true;
    if(key=="P"||key=="p") pausa=true;
    if(key=="R"||key=="r") pausa=false;
    if(key=="S"||key=="s") espectral=true;
    if(key=="N"||key=="n") espectral=false;

    if(key=="9"){
      vel+=0.0005;
    }
    if(key=="8"){
      vel-=0.0005;
    }
    if(key=="+"){ 
      cantRect++;
    }
    if(key=="-"){ 
      if(cantRect>1) cantRect--;
    }

    if(key=="1"){
      posX+=mouseX-pmouseX;
      posY+=mouseY-pmouseY;
    }

    if(key=="0"){
      background(255);
      cantRect=10;
      vel=0.01;
      trazo=true;
      pausa=false;
      espectral=false;
      posX=width/2, posY=height/2 //centra lienzo
    }
  }

  translate(posX, posY); //lienzo

  if(!pausa){
    if(!trazo) background(255);

    if(espectral){ 
      transparencia=50;
      stroke(colorS,15);
    }
    else{ 
      stroke(colorS,150)
      transparencia=50;
    }

    frameRate(fps);
    

    //push general
    push();
    rectMode(CENTER);
      rotate(frameCount * vel);
      fill(colorF,transparencia);
      
      //cuadrado A
      rect(xA,yA,xRectSize,yRectSize);
      for(let i=0;i<cantRect;i++){
        push();
        fill(colorF-(i*10),transparencia-(i*5));
        rotate(frameCount * -((vel*0.9)-(i*(0.02*vel))));
        let spacing = xA/cantRect;
        let resizing = xRectSize/cantRect;
        rect(xA-(spacing*(i+1)),yA-(spacing*(i+1)),
        xRectSize-(resizing*(i+1)),yRectSize-(resizing*(i+1)));
        pop();
      }

      //cuadrado B
      rect(xB,yB,xRectSize,yRectSize);
      for(let i=0;i<cantRect;i++){
        push();
        rotate(frameCount * -((vel*0.9)-(i*(0.02*vel))));
        let spacing = xB/cantRect;
        let resizing = xRectSize/cantRect;
        rect(xB-(spacing*(i+1)),yB+(spacing*(i+1)),
        xRectSize-(resizing*(i+1)),yRectSize-(resizing*(i+1)));
        pop();
      }

      //cuadrado C
      rect(xC,yC,xRectSize,yRectSize);
      for(let i=0;i<cantRect;i++){
        push();
        fill(colorF-(i*10),transparencia-(i*5));
        rotate(frameCount * -((vel*0.9)-(i*(0.02*vel))));
        let spacing = xC/cantRect;
        let resizing = xRectSize/cantRect;
        rect(xC-(spacing*(i+1)),yC+(spacing*(i+1)),
        xRectSize-(resizing*(i+1)),yRectSize-(resizing*(i+1)));
        pop();
      }

      //cuadrado D
      rect(xD,yD,xRectSize,yRectSize);
      for(let i=0;i<cantRect;i++){
        push();
        rotate(frameCount * -((vel*0.9)-(i*(0.02*vel))));
        let spacing = xD/cantRect;
        let resizing = xRectSize/cantRect;
        rect(xD-(spacing*(i+1)),yD-(spacing*(i+1)),
        xRectSize-(resizing*(i+1)),yRectSize-(resizing*(i+1)));
        pop();
      }
    pop();
  }
}
