let panadero1x = 256;
let panadero1y = -150;
  


let panadero2x = -400;
let panadero2y = 256;
  


let panadero3x = 900;
let panadero3y = 256;


let panadero4x = 256;
let panadero4y = 900;
 

let panadero5x = 256;
let panadero5y = -400;
//se crean objetos: panaderos 1,2,3,4,5.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent("div-sketch");
  frameRate(15); 
//velocidad de la animacion.
}

function draw() {
  background(0, 35);
  
  if (panadero1y < 256){
   panadero1y += 1;  
  }
//si esta condicion es verdadera, indica el movimiento hacia el centro de cada panadero.
 
  push();
  translate(panadero1x, panadero1y);
// Mueve el origen de coordenadas a la posición actual del   panadero.
  rotate(-0.16 * frameCount);
//Rota las coordenadas con un ángulo basado en frameCount, da un efecto de rotación continua.
  scale(noise(frameCount * 0.01) + 1);
//cambia el tamaño de la línea que varía suavemente con el tiempo.
  stroke(random (50, 255));
  line(-60, -30, 70, 90);
  pop();
  
  if (panadero2x < 256){
   panadero2x += 1;  
  }
 
  push();
  translate(panadero2x, panadero2y);
  rotate(0.1 * frameCount);
  scale(noise(frameCount * 0.01) + 0.5);
  stroke(random (50, 255));
  line(-60, -30, 70, 90);
  pop();
  
  if (panadero3x > 256){
   panadero3x -= 1;  
  }

  push();
  translate(panadero3x, panadero3y);
  rotate(0.19 * frameCount);
  scale(noise(frameCount * 0.01) + 0.5);
  stroke(random (50, 255));
  line(-60, -30, 70, 90);
  pop();
  
  
  if (panadero4y > 256){
   panadero4y -= 1;  
  }
 
  push();
  translate(panadero4x, panadero4y);
  rotate(-0.13 * frameCount);
  scale(noise(frameCount * 0.01) + 0.5);
  stroke(random (50, 255));
  line(-60, -30, 70, 90);
  pop();
  
  if (panadero5y < 256){
   panadero5y += 1;  
  }
 
  push();
  translate(panadero5x, panadero5y);
  rotate(-0.16 * frameCount);
  scale(noise(frameCount * 0.01) + 0.5);
  stroke(random (50, 255));
  line(-60, -30, 70, 90);
  pop();
}

function mousePressed() {
  console.log(mouseX, mouseY);
}
