
let mostrarObra = false;
let alturaOnda = 20; // Altura de las ondas
let espacioOnda = 10; // Espacio entre cada onda
let frecuenciaOnda = 0.05; // Frecuencia de la onda (valor ajustado)
let cQB = 227;
let cQN = 15;
let cQG = 90;
let cLB = 247;
let cLN = 10;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noCursor();
}

function draw() { 
  background(105, 5);
  
  push();
  noFill();
  stroke(0);
  strokeWeight(2);
  
  if(keyIsPressed){
    if(keyCode === 32){
      alturaOnda += 0.1
      espacioOnda +=0.01
      frecuenciaOnda -=0.0001
    }
    if (keyCode === 8){
      alturaOnda -= 0.01
      espacioOnda -=0.01
      frecuenciaOnda +=0.00001
    }
    if (keyCode === ESCAPE){
      alturaOnda = 20
      espacioOnda = 10
      frecuenciaOnda = 0.05
    }
  }
  
  // Dibujar las ondas
  for (let y = height; y > 0; y -= espacioOnda) {
    beginShape();
    for (let x = 0; x <= width; x += 5) { // Reducir este valor hace que los puntos estén más cerca entre sí
      let variacion = map(y, 0, height, 0, PI * 2);
      let onda = sin((x * frecuenciaOnda) + variacion) * alturaOnda;
      vertex(x, y + onda);
    }
    endShape();
  }
  
  pop();

  push();
  fill(162);
  noStroke();
  rect(0, 0, 512, 256);
  pop();

  push();
  for (let j = 0; j < 512; j += 5) {
    strokeWeight(1);
    stroke(44);
    line(j, 0, 256, 256);
  }
  for (let c = 0; c < 72; c += 5) {
    line(0, c , 256, 256);
    line(512, c + 3 , 256, 255);
  }
  pop();

  push();
  noStroke();
  
  // Quad blanco 
  
  fill(cQB);
  quad(98, 140, 256, 99, 256, 325, 98, 365);
  
  // Quad negro
  
  push();
  
  fill(cQN);
  strokeWeight(1);
  //stroke(255);
  quad(256, 99, 413, 140, 413, 365, 256, 325);
  
  pop();
  
  // Quad gris abajo
  
  push();
  
  fill(cQG);
  quad(100, 365, 256, 325, 412, 365, 256, 400);
  
  pop();

  
  push();
 
  stroke(cLN)
  strokeWeight(1.5);
  // Líneas quad blanco 
  
  // Líneas verticales
  
  line(249, 101, 249, 321);
  line(230, 106, 230, 327);
  line(220, 108, 220, 329);
  line(195, 115, 195, 334);
  line(180, 119, 180, 339);
  line(150, 127, 150, 347);
  line(110, 137, 110, 357);

  // Líneas horizontales
  line(150, 193, 249, 168);
  line(180, 226, 249, 210);
  line(110, 250, 249, 220);
  line(110, 260, 249, 230);
  line(110, 275, 230, 247);
  line(110, 290, 150, 280);
  line(110, 300, 195, 280);
  line(110, 320, 249, 288);
  line(195, 310, 230, 302);
  line(110, 214, 98, 216);
  line(110, 357, 249, 322);

  
  pop();
  
  // Líneas quad negro
  push();
  strokeWeight(1)
  stroke(cLB);
  line(256, 120, 413, 160);
  line(256, 167, 413, 202);
  line(256, 186, 413, 220);
  line(256, 220, 412, 255);
  line(256, 290, 412, 328);

  // Líneas horizontales cortas
  line(352, 150, 384, 158);
  line(352, 158, 384, 166);
  line(352, 170, 384, 177);

  // Líneas horizontales largas
  line(309, 213, 411, 235);
  line(301, 250, 411, 275);
  line(352, 272, 411, 285);
  line(352, 290, 400, 302);
  line(278, 314, 411, 347);

  // Líneas verticales
  line(279, 330, 280, 107);
  line(308, 338, 310, 113);
  line(350, 348, 352, 125);
  line(390, 359, 393, 135);

  // Líneas juntas
  line(300, 335, 303, 111);
  line(382, 356, 385, 134);

  // Muchas líneas juntas
  push();
  strokeWeight(0.5);
  line(356.5, 145, 356, 188);
  line(360, 146, 359.5, 189);
  line(364, 147, 363, 190);
  line(369, 148, 368, 192);
  line(375, 150, 378, 195);
  
  pop();
  pop();

  if (!mostrarObra) {
    push();
    fill(0);
    rect(0, 0, 512, 512);
    pop();
  }

}

function keyPressed() {
  if (key === "q"||"s"||"e"||"f"||"t"||"h"||"u"||"k"||"i"||"l"||"p"||"z"||"c"||"b"||"m") {
    mostrarObra = true;
  }
     if (keyCode === DOWN_ARROW){
       cQB = 0;
     }else {
       cQB = 227;
     }
     if (keyCode === UP_ARROW){
       cQN = 255;
     }else {
       cQN = 15
     }
     if(keyCode === LEFT_ARROW){
       cLN = 240;
     }else{
       cLN = 10
     }
     if(keyCode === RIGHT_ARROW){
       cLB = 0; 
     }else{
       cLB = 247
     }
     if(keyCode === ENTER){
       saveCanvas();
     }
}
