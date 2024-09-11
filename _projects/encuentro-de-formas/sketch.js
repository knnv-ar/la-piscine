//Frieder Nake-Achsenparalleler Polygonzug 1965.  

// ETAPA1
let puntoX = 445;
let puntoY = 445;
let velocidad = 1.50;
let circulo = true;

// ETAPA2
let derechaM = 512; // <--
let izquierdaB = 0; //-->
let izquierdaZ = 0;
let puntox28 = 0; // arriba a abajo
let puntox24 = 0;
let puntoy25 = 0;
let puntoy1 = 0;
let puntoy30 = 512; // de abajo a arriba
let velocidad2 = 0.01;
let lineas = false; 

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background("grey");
  fill(0);
  stroke(0, 0, 0);
  strokeWeight(2);

  // ETAPA1 - Movimiento del círculo
  fill("black");
  ellipse(puntoX, puntoY, 6, 6);
  
  if (circulo) {
    
  if (keyCode === LEFT_ARROW) {
      puntoX -= velocidad; // 
    } 
    if (keyCode === RIGHT_ARROW) {
      puntoX += velocidad; 
    } 
    if (keyCode === UP_ARROW) {
      puntoY -= velocidad; 
    } 
    if (keyCode === DOWN_ARROW) {
      puntoY += velocidad; 
    }
  }

  // ETAPA2 - Movimiento de las líneas
  if (lineas) {
    let movimiento1 = 440 - puntoy30;
    puntoy30 += movimiento1 * velocidad2;
    let movimiento4 = 230 - puntoy25;
    puntoy25 += movimiento4 * velocidad2;
    let movimiento7 = 80 - puntoy1;
    puntoy1 += movimiento7 * velocidad2;
    let movimiento2 = 390 - puntox28;
    puntox28 += movimiento2 * velocidad2;
    let movimiento3 = 200 - puntox24;
    puntox24 += movimiento3 * velocidad2;
    let movimiento5 = 207 - derechaM;
    derechaM  += movimiento5 * velocidad2;
    let movimiento6 = 200 - izquierdaB;
    izquierdaB += movimiento6 * velocidad2;
    let movimiento8 = 355 - izquierdaZ;
    izquierdaZ += movimiento8 * velocidad2;
  }
  
  
  //verticales | 
  fill("black");
  line(180, 80, 180, 270);   // A
  fill("black");
  line(izquierdaB, 80, izquierdaB, 330);   // B
  fill("black");
  line(180, 330, 200, 330);  // AB
  fill("black");
  line(160, 330, 160, 390);  // C
  fill("black");
  line(185, 370, 185, 455);  // D
  fill("black");
  line(140, 370, 140, 415);  // E
  fill("black");
  line(180, 310, 180, 370);  // F
  fill("black");
  line(220, 370, 220, 435);  // G
  fill("black");
  line(225, 415, 225, 445);  // H
  fill("black");
  line(205, 440, 205, 455);  // I
  fill("black");
  line(198, 435, 198, 445);  // J
  fill("black");
  line(220, 270, 220, 370);  // K
  fill("black");
  line(215, 265, 215, 350);  // L
  fill("black");
  line(derechaM,100,derechaM,270);  // M
  fill("black");
  line(233, 250, 233, 330);  // N
  fill("black");
  line(247, 330, 247, 395);  // O
  fill("black");
  line(260, 200, 260, 355);  // P
  fill("black");
  line(233, 70, 233, 240);   // Q
  fill("black");
  line(267, 395, 267, 440);  // R
  fill("black");
  line(230, 440, 230, 450);  // S
  fill("black");
  line(300, 70, 300, 230);   // T
  fill("black");
  line(280, 200, 280, 345);  // U
  fill("black");
  line(270, 100, 270, 290);  // V
  fill("black");
  line(320, 290, 320, 390);  // W
  fill("black");
  line(275, 390, 275, 450);  // X
  fill("black");
  line(300, 350, 300, 410);  // Y
  fill("black");
  line(izquierdaZ, 347, izquierdaZ, 440);  // Z
  fill("black");
  line(340, 410, 340, 445);  // AA
  fill("black");
  line(272, 440, 272, 443);  // BB
  
  // Horizontales -
  fill("black");
  line(180,puntoy1,200,puntoy1);    // 1
  fill("black");
  line(160, 330, 200, 330);  // 2
  fill("black");
  line(160, 390, 185, 390);  // 3
  fill("black");
  line(140, 370, 180, 370);  // 4
  fill("black");
  line(180, 310, 260, 310);  // 5
  fill("black");
  line(140, 415, 225, 415);  // 6
  fill("black");
  line(185, 370, 220, 370);  // 7
  fill("black");
  line(198, 435, 220, 435);  // 8
  fill("black");
  line(198, 445, 225, 445);  // 9
  fill("black");
  line(185, 455, 205, 455);  // 10
  fill("black");
  line(185, 440, 205, 440);  // 11
  fill("black");
  line(180, 270, 220, 270);  // 12
  fill("black");
  line(207, 265, 215, 265);  // 13
  fill("black");
  line(207, 100, 270, 100);  // 14
  fill("black");
  line(200, 240, 232, 240);  // 15 +
  fill("black");
  line(200, 250, 232, 250);  // 16
  fill("black");
  line(215, 350, 300, 350);  // 17
  fill("black");
  line(233, 330, 247, 330);  // 18
  fill("black");
  line(220, 355, 260, 355);  // 19
  fill("black");
  line(247, 395, 267, 395);  // 20
  fill("black");
  line(230, 440, 267, 440);  // 21
  fill("black");
  line(230, 450, 273, 450);  // 22
  fill("black");
  line(233, 70, 300, 70);    // 23
  fill("black");
  line(260,puntox24,280,puntox24);  // 24
  fill("black");
  line(260,puntoy25,300,puntoy25);  // 25
  fill("black");
  line(280, 345, 355, 345);  // 26
  fill("black");
  line(270, 290, 320, 290);  // 27
  fill("black");
  line(275,puntox28,320,puntox28);  // 28
  fill("black");
  line(340, 445, 430, 445);  // 29
  fill("black");
  line(272,puntoy30,355,puntoy30);  // 30
  fill("black");
  line(300, 410, 340, 410);  // 31

 }

  //ETAPA1
  function keyPressed() {
  if (key === 'F' || key === 'f') {
    circulo = circulo;
  }
  //ETAPA2
  if (key === 'N' || key === 'n') {
    lineas = true;
  }
}