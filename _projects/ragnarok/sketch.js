  /* Los hermanos lucharán, y se darán muerte entre ellos,
  y los hijos de las hermanas mancharán los parentescos;
  Dura será la tierra, con gran adulterio.
  Una era de hachas, una era de espadas, de escudos destruidos
  una era de vientos, una era de lobos, antes de que el mundo se derrumbe;
  Ni los hombres se respetarán entre ellos.
  
  Völuspá, estrofa 45, Edda poética */




  // ----------------------------------------MARCO
  let movimiento = 0;
  let movVelocidad = 0.04;

  // ----------------------------------------NIEVE
  let nieveX1 = 50,  nieveY1 = 0,   nieveDX1 = 0.5;
  let nieveX2 = 150, nieveY2 = -100, nieveDX2 = -0.3;
  let nieveX3 = 250, nieveY3 = -200, nieveDX3 = 0.4;
  let nieveX4 = 350, nieveY4 = -50,  nieveDX4 = -0.2;
  let nieveX5 = 450, nieveY5 = -150, nieveDX5 = 0.3;
  let nieveX6 = 100, nieveY6 = -250, nieveDX6 = -0.5;
  let nieveX7 = 200, nieveY7 = -180, nieveDX7 = 0.2;
  let nieveX8 = 300, nieveY8 = -300, nieveDX8 = -0.4;
  let nieveX9 = 400, nieveY9 = -220, nieveDX9 = 0.4;
  let nieveX10 = 50, nieveY10 = -170, nieveDX10 = 0.1;
  let nieveX11 = 120, nieveY11 = -280, nieveDX11 = -0.1;
  let nieveX12 = 220, nieveY12 = -100, nieveDX12 = 0.2;
  let nieveX13 = 320, nieveY13 = -90,  nieveDX13 = -0.3;
  let nieveX14 = 420, nieveY14 = -60,  nieveDX14 = 0.5;
  let nieveX15 = 480, nieveY15 = -200, nieveDX15 = -0.2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  rectMode(CENTER);
}

function draw() {
  background(30, 20); //Las estrellas desaparecerán de los cielos

  // ----------------------------------------MONTAÑAS
  noStroke();
  fill(0);
  quad(0, 358.4, 102.4, 281.6, 102.4, height, 0, height);
  quad(102.4, 281.6, 204.8, 332.8, 204.8, height, 102.4, height);
  quad(204.8, 332.8, 307.2, 256, 307.2, height, 204.8, height);
  quad(307.2, 256, 409.6, 307.2, 409.6, height, 307.2, height);
  quad(409.6, 307.2, 512, 358.4, 512, height, 409.6, height);
  fill(15);
  quad(0, 384, 76.8, 307.2, 76.8, height, 0, height);
  quad(76.8, 307.2, 153.6, 358.4, 153.6, height, 76.8, height);
  quad(153.6, 358.4, 256, 281.6, 256, height, 153.6, height);
  quad(256, 281.6, 358.4, 332.8, 358.4, height, 256, height);
  quad(358.4, 332.8, 460.8, 256, 460.8, height, 358.4, height);
  quad(460.8, 256, 512, 384, 512, height, 460.8, height);

  // ----------------------------------------MARCO 

  push();
  translate(width / 2, height / 2);
  let pulsacion = sin(movimiento) * 10;
  movimiento += movVelocidad;
  noFill();
  stroke(83);
  rect(0, 0, width - 30 + pulsacion, height - 30 + pulsacion);
  pop();
 

  // ----------------------------------------BOSQUE DE HODMÍMIR (donde Líf y Lífthrasir se    refugiarán) 
  
  // Árbolito 1
  stroke(frameCount % 30 < 18 ? 255 : 83);
  strokeWeight(1);
  line(60, 430, 60, 250);
  for (let j = 0; j < 14; j++) {
  let y = map(j, 0, 14, 430, 250);
  let l = map(j, 0, 14, 30, 8);
  line(60, y, 60 - l, y - 30);
  line(60, y, 60 + l, y - 30);
  }

  // Árbolito 2
  stroke(frameCount % 30 < 20 ? 255 : 83);
  strokeWeight(1);
  line(130, 350, 130, 230);
  for (let j = 0; j < 12; j++) {
  let y = map(j, 0, 12, 350, 230);
  let l = map(j, 0, 12, 30, 8);
  line(130, y, 130 - l, y - 30);
  line(130, y, 130 + l, y - 30);
  }
 
  // Árbolito 3
  stroke(frameCount % 30 < 15 ? 255 : 83);
  
  line(160, 460, 160, 300);
  for (let j = 0; j < 10; j++) {
  let y = map(j, 0, 10, 460, 300);
  let l = map(j, 0, 10, 30, 8);
  line(160, y, 160 - l, y - 30);
  line(160, y, 160 + l, y - 30);
  }

  // Árbolito 4
  stroke(frameCount % 30 < 20 ? 255 : 83);
  line(210, 390, 210, 270);
  for (let j = 0; j < 14; j++) {
  let y = map(j, 0, 14, 390, 270);
  let l = map(j, 0, 14, 30, 8);
  line(210, y, 210 - l, y - 30);
  line(210, y, 210 + l, y - 30);
  }

  // Árbolitoy 5
  stroke(frameCount % 30 < 15 ? 255 : 83);
  line(260, 340, 260, 220);
  for (let j = 0; j < 10; j++) {
  let y = map(j, 0, 10, 340, 220);
  let l = map(j, 0, 10, 30, 8);
  line(260, y, 260 - l, y - 30);
  line(260, y, 260 + l, y - 30);
}

  // Árbolito 6
  stroke(frameCount % 30 < 12 ? 255 : 83);
  line(310, 400, 310, 230);
  for (let j = 0; j < 12; j++) {
  let y = map(j, 0, 12, 400, 230);
  let l = map(j, 0, 12, 30, 8);
  line(310, y, 310 - l, y - 30);
  line(310, y, 310 + l, y - 30);
  }

  // Árbolito 7
  stroke(frameCount % 30 < 15 ? 255 : 83);
  line(360, 470, 360, 290);
  for (let j = 0; j < 14; j++) {
  let y = map(j, 0, 14, 470, 290);
  let l = map(j, 0, 14, 30, 8);
  line(360, y, 360 - l, y - 30);
  line(360, y, 360 + l, y - 30);
  }

  // Árbolito 8p
  stroke(frameCount % 30 < 7 ? 255 : 83);
  line(410, 380, 410, 280);
  for (let j = 0; j < 14; j++) {
  let y = map(j, 0, 14, 380, 280);
  let l = map(j, 0, 14, 30, 8);
  line(410, y, 410 - l, y - 30);
  line(410, y, 410 + l, y - 30);
  }

  // Árbolito 9
  stroke(frameCount % 30 < 10 ? 255 : 83);
  line(460, 400, 460, 300);
  for (let j = 0; j < 10; j++) {
  let y = map(j, 0, 10, 400, 300);
  let l = map(j, 0, 10, 30, 8);
  line(460, y, 460 - l, y - 30);
  line(460, y, 460 + l, y - 30);
  }

  // Árbolito 10
  stroke(frameCount % 30 < 7 ? 255 : 83);
  line(90, 400, 90, 310);
  for (let j = 0; j < 10; j++) {
  let y = map(j, 0, 10, 400, 310);
  let l = map(j, 0, 10, 30, 8);
  line(90, y, 90 - l, y - 30);
  line(90, y, 90 + l, y - 30);
  }

  // ----------------------------------------SÓL Y MÁNI
  push();
  translate(width - 100, 100);
  noFill();
  stroke(200);
  strokeWeight(1);
  for (let i = 0; i < 2; i++) {
    let baseRadio = 60 + i;
    let vibracion = sin(frameCount * 0.05 + i) * 8;
    ellipse(0, 0, (baseRadio + vibracion) * 2);
  }

  let radioLuna = 60;
  fill(255);
  noStroke();
  ellipse(0, 0, radioLuna * 2);

  let fase = map(sin(frameCount * 0.005), -1, 1, -radioLuna, radioLuna);
  fill(0);
  ellipse(fase, 0, radioLuna * 2);
  pop();
  
  // ----------------------------------------LÍNEAS 
  stroke(255);
  line(0, 100, width, 80);
  line(0, 120, width, 130);
  line(0, 200, width, 185);
  line(0, 260, width, 290);
  line(0, 330, width, 320);
  line(0, 420, width, 430);
  // -LINEAS GRISES
  stroke(83)
  line(0, 80, width, 100);
  line(0, 120, width, 100);
  line(0, 150, width, 160);
  line(0, 250, width, 200);
  line(0, 230, width, 260);
  line(0, 400, width, 330);
  line(0, 390, width, 390);
  line(0, 360, width, 420);
  line(0, 440, width, 430);
  
   // ----------------------------------------FIMBULVETR (el gran invierno)
  fill(255);
  noStroke();

  ellipse(nieveX1, nieveY1, 2); nieveY1 += 1.2; nieveX1 += nieveDX1; 
  if (nieveY1 > height) { nieveY1 = random(-200, -50); nieveX1 = random(width); }
  ellipse(nieveX2, nieveY2, 2); nieveY2 += 1.0; nieveX2 += nieveDX2; 
  if (nieveY2 > height) { nieveY2 = random(-200, -50); nieveX2 = random(width); }
  ellipse(nieveX3, nieveY3, 2); nieveY3 += 1.3; nieveX3 += nieveDX3; 
  if (nieveY3 > height) { nieveY3 = random(-200, -50); nieveX3 = random(width); }
  ellipse(nieveX4, nieveY4, 2); nieveY4 += 1.1; nieveX4 += nieveDX4; 
  if (nieveY4 > height) { nieveY4 = random(-200, -50); nieveX4 = random(width); }
  ellipse(nieveX5, nieveY5, 2); nieveY5 += 1.4; nieveX5 += nieveDX5; 
  if (nieveY5 > height) { nieveY5 = random(-200, -50); nieveX5 = random(width); }

  ellipse(nieveX6, nieveY6, 2); nieveY6 += 1.2; nieveX6 += nieveDX6; 
  if (nieveY6 > height) { nieveY6 = random(-200, -50); nieveX6 = random(width); }
  ellipse(nieveX7, nieveY7, 2); nieveY7 += 1.0; nieveX7 += nieveDX7; 
  if (nieveY7 > height) { nieveY7 = random(-200, -50); nieveX7 = random(width); }
  ellipse(nieveX8, nieveY8, 2); nieveY8 += 1.5; nieveX8 += nieveDX8; 
  if (nieveY8 > height) { nieveY8 = random(-200, -50); nieveX8 = random(width); }
  ellipse(nieveX9, nieveY9, 2); nieveY9 += 1.3; nieveX9 += nieveDX9; 
  if (nieveY9 > height) { nieveY9 = random(-200, -50); nieveX9 = random(width); }
  ellipse(nieveX10, nieveY10, 2); nieveY10 += 1.1; nieveX10 += nieveDX10; 
  if (nieveY10 > height) { nieveY10 = random(-200, -50); nieveX10 = random(width); }

  ellipse(nieveX11, nieveY11, 2); nieveY11 += 1.0; nieveX11 += nieveDX11; 
  if (nieveY11 > height) { nieveY11 = random(-200, -50); nieveX11 = random(width); }
  ellipse(nieveX12, nieveY12, 2); nieveY12 += 1.4; nieveX12 += nieveDX12; 
  if (nieveY12 > height) { nieveY12 = random(-200, -50); nieveX12 = random(width); }
  ellipse(nieveX13, nieveY13, 2); nieveY13 += 1.2; nieveX13 += nieveDX13; 
  if (nieveY13 > height) { nieveY13 = random(-200, -50); nieveX13 = random(width); }
  ellipse(nieveX14, nieveY14, 2); nieveY14 += 1.3; nieveX14 += nieveDX14; 
  if (nieveY14 > height) { nieveY14 = random(-200, -50); nieveX14 = random(width); }
  ellipse(nieveX15, nieveY15, 2); nieveY15 += 1.1; nieveX15 += nieveDX15; 
  if (nieveY15 > height) { nieveY15 = random(-200, -50); nieveX15 = random(width); }
  noStroke();
  

}