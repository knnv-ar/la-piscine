let dentroCanvas = false;
function setup() {
 let canvas=createCanvas(512, 512);
  canvas.parent('div-sketch');
}
function draw() {
                 //horizonal
  dentroCanvas = mouseX >= 0 && mouseX <= width 
                 && 
                 mouseY >= 0 && mouseY <= height;
                //vertical  
  background(0);
if (keyIsPressed && (key === 'a' || key === 'A')) {
  //// conjunto figura 3
  push();
  translate(256, 256);
  stroke(181, 181, 181);
  strokeWeight(2);
  noFill();
  rectMode(CENTER);
  
  const cantidadCuadrados = 10;
  const radioInicial3 = 20;
  const separacion3 = 20;
    
  //aumenta la velocidad desde el centro
  for (let f = 0; f < cantidadCuadrados; f++) {
    const radio = radioInicial3 + f * separacion3;
    push();
    rotate(frameCount * 0.01 * (f + 1));
    rect(0, 0, radio * 2, radio * 2);
    pop();
  }
  pop();
  //// fin conjunto figura 3
    
  } else if (keyIsPressed && (key === 's' || key === 'S')) {
    
  //// conjunto figura 4
  push();
  translate(256, 256);
  rotate(-frameCount * 0.01);
  stroke(181, 181, 181);
  strokeWeight(2);
  noFill();
  line(-200, 0, 200, 0);
  
  const cantidadArcos = 20;
  const radioInicial4 = 10;
  const separacion4 = 10;
  
  for (let f = 0; f < cantidadArcos; f++) {
    const radio = radioInicial4 + f * separacion4;
    arc(0, 0, radio * 2, radio * 2, 0, PI);
  }
  pop();
  //// fin conjunto figura 4

  } else if (keyIsPressed && (key === 'd' || key === 'D')) {

// conjunto figura 5 
    // X izquierdo
    const cantidadX = 16;
    const tamanio = 100;
    const separacion = 0.06;
    const offset = PI/6; 
    //define en qué posición arranca, para lograr intersección  
  
    // X izquierdo
    push();
    translate(150, 256);
    stroke(255);
    strokeWeight(2);
    noFill();
    for (let f = 0; f < cantidadX; f++) {
      push();
      rotate(frameCount * 0.02 + f * separacion);
      line(-tamanio, -tamanio, tamanio, tamanio); 
      line(-tamanio, tamanio, tamanio, -tamanio); 
      pop();
    }
    pop();
  
  //X derecho 
    push();
    translate(350, 256);
    stroke(255);
    strokeWeight(2);
    noFill(); 
    for (let f = 0; f < cantidadX; f++) {
      push();
      rotate(-frameCount * 0.02 + f * separacion + offset);
      line(-tamanio, -tamanio, tamanio, tamanio); 
      line(-tamanio, tamanio, tamanio, -tamanio); 
      pop();
    }
    pop();

  // fin conjunto figura 5
    
  } else {
    
  ///conjunto figura 2
  push();
  translate(256, 256);
  stroke(250);
  strokeWeight(2);
  noFill();
  
  const cantidadCirculos = 20;
  const radioInicial = 10;
  const separacion2 = 10;
  //f guarda en qué vuelta va el bugle,(0 a 19) ese número se usa para       calcular el radio d c/u.
  for (let f = 0; f < cantidadCirculos; f++) {
    const radio = radioInicial + f * separacion2;
    ellipse(0, 0, radio * 2, radio * 2);
  }
  pop();
  /// fin conjunto figura 2
  }
  //// conjunto figura 1
  push();
  translate(256, 256);
  stroke(120);
  strokeWeight(1);
  noFill();
  //altura 
  const cy = 250;
  const cantidadFiguras = 23;
  const cxInicial = 200;
  const separacion = 20;
  let factorX, factorY, freqA, freqB, phi;
  if (dentroCanvas) {
    // "animacion"
    const anguloY = map(mouseX, 0, width, -PI, PI);
    //achatar x
    factorX = cos(anguloY);
    const anguloX = map(mouseY, 0, height, -PI, PI);
    //achatar y 
    factorY = cos(anguloX);
    //tiempo 
    freqA = 3 + 3 * sin(frameCount * 0.005);
    freqB = 2 + 2 * sin(frameCount * 0.008 + 1);
    //constante de mov 
    phi = frameCount * 0.01;
  } else {
    //curva de Lissajous || versión fija
    factorX = 1;
    factorY = 1;
    freqA = 6;
    freqB = 2;
    phi = HALF_PI;
  }
  for (let f = 0; f < cantidadFiguras; f++) {
    push();
    const cx = (cxInicial - f * separacion) * factorX;
    const cyEscalado = cy * factorY;
    beginShape();
    for (let i = 0; i <= 300; i++) {
      const t = (i / 300) * TWO_PI;
      const x = cx * sin(freqA * t);
      const y = cyEscalado * sin(freqB * t + phi);
      vertex(x, y);
    }
    endShape();
    pop();
  }
  pop();
  //// fin de conjunto figura 1
  
}//cierre draw