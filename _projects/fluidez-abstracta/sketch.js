/*        Fluidez Abstracta
        Sol Estefania Gayarin
                2023                */


var vari=0;
var devari=1;
let millisecond;
let parcial1=0;
let parcial2=0;
let parcial3=0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}


function draw() {
  background(0, 0, 0, 10);
  frameRate(20);
  stroke(255);
  strokeWeight(0.5); //.........................TODO.........................
  noFill();
  millisecond= millis();

  // Actualizar las coordenadas del punto de control-----------------------------------

    vari+=devari;

  // Invertir la dirección si se alcanzan los límites----------------------------------
  
  if (vari>100 || vari<-10) {
    devari*=-1;
  }

  
//FIGURAS INSPIRADAS EN Ben F. Laposky ..........................................

  push();//Figura ppal de arriba----------------------------------

                              beginShape();
                              bezier(256, 12, 300+vari, 100+vari, 200, 256, 100, 300);
                              endShape();
  pop();
  
  push();
    if(millisecond-parcial1>4000){ 
  
                              beginShape();
                              bezier(256, 12, 300+vari, 100+vari, 200, 256, 200, 400);
                              endShape();                
  }
  pop();
    
  push();
    if(millisecond-parcial2>6000){ 
                              beginShape();
                              bezier(256, 12, 300+vari, 100+vari, 200, 256, 350, 350);
                              endShape();      
  }
  pop();
  
  push();//Figura ppal de abajo--------------------------------------------------------------
                              beginShape();
                              bezier(200, 200, 200-vari, 300+vari, 300, 456, 300, 500); 
                              endShape();
  pop();
  
  push();
   if(millisecond-parcial1>2000){ 
                              beginShape();
                              bezier(100, 300, 200-vari, 300+vari, 300, 456, 300, 500); 
                              endShape();                             
   }
  pop();
  
 push();
  if(millisecond-parcial2>4000){ 
                              beginShape();
                              bezier(50, 400, 200-vari, 300+vari, 300, 456, 300, 500); 
                              endShape();                            
  }
  pop();
  
  push();
   if(millisecond-parcial3>6000){ 
                              beginShape();
                              bezier(75, 500, 200-vari, 300+vari, 300, 456, 300, 500); 
                              endShape();                              
   }
  pop();

  //Reiniciar la aparición------------------------------------------------------------
  
  if(millisecond-parcial2>15000){ 
    parcial1=millisecond;
    parcial2=millisecond;
    parcial3=millisecond;
  }
  
}