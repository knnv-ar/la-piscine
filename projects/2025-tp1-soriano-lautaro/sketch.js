/*________________________________________________________________________________
------------------------TP N°1 : Artes Multimediales.-----------------------------
------------------------Alumno: Lautaro Soriano-----------------------------------
------------------------Año : 2025 -----------------------------------------------
------------------------Titulo: Simple y complejo --------------------------------
_________________________________________________________________________________*/
let fondo=255;
let cambio=false;
let cambio1=false;
let cambio2=false;
let cambio3=false;
let cambio4=false;
let lineCol=0;
let corte = 190;
let angulo1 = 0.01;
let angulo = 0.01;
let tamaño = 0;
let delay = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(70);
}

function draw() {
    let mitad = width/2;
  
    background(fondo,15);
    if(fondo>1 && cambio==false){
      fondo-=10;
      lineCol+=8;
    }else{
      cambio=true;
    }
    if(fondo<255 && cambio==true){
      fondo+=10;
      lineCol-=8;
    }else{
      cambio=false;
    }
    
    push();
      rectMode(CENTER);
      translate(mitad,mitad);
      if(!cambio2){
        angulo1+=0.5;
      }else{angulo1-=0.2;}

      rotate(angulo1);
      stroke(fondo);
      strokeWeight(random(2,5));
      fill(lineCol,70)
      for(let i=0;i<=20;i++){
        rect(0,0,i*tamaño);
      }
  
    if (tamaño<5 && cambio2==false) {
      tamaño +=0.3;
    }else if(tamaño >5 && tamaño<15 && cambio2==false) {
      tamaño +=0.25;
    }else if(tamaño >15 && tamaño<35 && cambio2==false) {
      tamaño +=0.2;
    }else{
      cambio2=true;
    }
    if (tamaño>35 && cambio2==true) {
      tamaño -=0.35;
    }else if(tamaño <35 && tamaño>15 && cambio2==true) {
      tamaño -=0.3;
    }else if(tamaño <15 && tamaño>5 && cambio2==true) {
      tamaño -=0.2;
    }else if(tamaño <4 && tamaño==0 && cambio2==true){
      tamaño=0.01;
    }
  else{
      if(delay<=300){
        delay++;
      }
      else{
        delay=0;
        cambio2=false;
      }
    }
    pop();
  
    push();
      translate(mitad,mitad);
      rotate(angulo);
  
      if(angulo>0 && cambio4==false){
        angulo-=0.5;
      }else{cambio4=true;}
      if(angulo<50 && cambio4==true){
        angulo+=0.5;
      }else{cambio4=false;}

      strokeWeight(random(5,10));
      stroke(lineCol);
      line(width/2-mitad,0-mitad,width/2-mitad,corte-mitad);//Linea medio vertical
      line(width/2-mitad,height-mitad,width/2-mitad,height-corte-mitad)  //linea medio
      line(0-mitad,0-mitad,corte-mitad,corte-mitad);        //Linea diagonal directa
      line(width-mitad,height-mitad,height-corte-mitad,width-corte-mitad);  //linea diagonal directa
      line(width-mitad,0-mitad,width-corte-mitad,corte-mitad);//linea diagonal contraria
      line(0-mitad,height-mitad,corte-mitad,height-corte-mitad);//linea diagonal contraria
      line(0-mitad,height/2-mitad,corte-mitad,height/2-mitad);//linea medio horizontal
      line(width-mitad,height/2-mitad,width-corte-mitad,height/2-mitad);//linea medio horizontal
    pop();
  
  
}