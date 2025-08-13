let flash = false;


function setup() {
  createCanvas(512, 512);
  ellipseMode(CENTER);
  noFill();
  stroke(0);
}

function draw() {
  background(255);

  let t = frameCount;

  // FLASH cada 10 segundos aprox
  if (t % 600 < 20) {
    flash = true;
  } else {
    flash = false;
  }

  if (flash) {
    background(0); // Fondo negro
    stroke(255); // Líneas blancas
    translate(random(-2, 2), random(-2, 2)); // Vibración leve
  } else {
    background(255); // Fondo blanco
    stroke(0); // Líneas negras
  }

  //diamantote
  let angle = frameCount * 0.02;
  let scaleX = cos(angle); // Simula el efecto de rotación en eje Y

  push();
  translate(256, 256); // Centro
  scale(scaleX, 1); // Aplasta horizontalmente

  // Dibujo centrado en (0,0)
  strokeWeight(5);
  line(23, 24, 74, 0);
  line(23, -24, 74, 0);
  line(0, -76, -24, -24);
  line(0, -76, 23, -24);
  line(0, 74, -24, 23);
  line(0, 74, 24, 23);
  line(-24, -24, -75, 0);
  line(-24, 24, -75, 0);

  pop();

  push();
  strokeWeight(0.8);
  translate(width / 2, height / 2); // Centro de la pantalla

  // Cálculo del "latido"
  let beat = 1 + 0.04 * sin(frameCount * 0.03);

  // Tamaño base del círculo
  let baseSize = 230 * beat;

  // CÍRCULO PRINCIPAL
  ellipse(0, 0, baseSize);

  // TRAMA HORIZONTAL
  for (let c = 5; c < 230; c += 10) {
    ellipse(0, 0, baseSize, c * beat);
  }

  // TRAMA VERTICAL
  for (let d = 5; d < 230; d += 10) {
    ellipse(0, 0, d * beat, baseSize);
  }

  pop();

  push();

  translate(256, 256); // Centro
  rotate(frameCount * 0.5 * 0.0174533);
  translate(-256, -256); // Volver a sistema original

  // Dibujo del diamante
  strokeWeight(2);
  ellipse(256, 256, 50, 50);
  line(256, 256, 256, 230);
  line(256, 256, 256, 280);
  line(256, 256, 230, 256);
  line(256, 256, 280, 256);
  line(265, 266, 280, 256);
  line(265, 246, 280, 256);
  line(246, 246, 230, 256);
  line(246, 265, 230, 256);
  line(256, 230, 265, 246);
  line(256, 230, 246, 246);
  line(246, 265, 255, 280);
  line(256, 280, 266, 265);

  pop();

  //piso
  strokeWeight(2);
  quad(50, 360, 450, 360, 522, 440, -10, 440);
  quad(160, 512, 220, 330, 290, 330, 360, 512);

  strokeWeight(1.5);
  //LINEAS IZQUIERDA
  line(50, 440, 100, 360);
  line(20, 400, 75, 400);
  line(20, 440, 47, 400);
  line(60, 400, 85, 360);
  line(64, 420, 190, 420);
  line(150, 420, 180, 360);
  line(130, 440, 140, 420);
  //LINEAS DERECHA
  line(425, 360, 490, 440);
  line(395, 360, 450, 440);
  line(325, 360, 350, 410);
  line(335, 410, 350, 440);
  line(320, 410, 430, 410);
  //LINEAS DEL MEDIO
  line(200, 512, 215, 440);
  strokeWeight(2);
  line(230, 512, 235, 440);
  line(215, 512, 225, 440);
  line(320, 512, 300, 440);
  strokeWeight(1);
  line(170, 512, 193, 440);
  line(185, 512, 205, 440);
  line(240, 512, 245, 440);
  line(250, 512, 253, 440);
  line(265, 512, 262, 440);
  line(275, 512, 270, 440);
  line(288, 512, 280, 440);
  line(304, 512, 290, 440);
  line(335, 512, 310, 440);
  line(345, 512, 320, 440);

  //PAREDES Y SUS FORMAS
  push();
  strokeWeight(2);
  quad(110, 170, 135, 170, 135, 330, 110, 340);
  quad(400, 170, 376, 170, 376, 330, 400, 340);
  pop();

  //Techo y sus formas
  push();
  strokeWeight(3);
  quad(110, 170, 400, 170, 520, 0, -5, 0);
  strokeWeight(1);
  quad(120, 160, 390, 160, 510, 0, 2, 0);
  quad(130, 150, 380, 150, 500, 0, 12, 0);
   quad(140, 140, 370, 140, 490, 0, 22, 0);
  pop();

  for (let g = 190; g < 350; g += 20) {
    ellipse(256, 60, g, 130);
  }

  //DETALLITOS DEL OVALO CHICO
  for (let a = 70; a < 170; a += 10) {
    ellipse(256, 60, a, 60);
  }

  //OJO
  strokeWeight(2);
  let centerX = 256;
  let centerY = 60;

  // Factor de parpadeo
  let blink = (1 + sin(frameCount * 0.03)) / 2; // Va de 0 a 1

  // OJO (las partes internas también se escalan)
  for (let b = 30; b < 70; b += 10) {
    ellipse(centerX, centerY, 60, b * blink);
  }

  ellipse(centerX, centerY, 20, 20 * blink);
  ellipse(centerX, centerY, 10, 10 * blink);
  ellipse(centerX, centerY, 5, 5 * blink);

  //Sombra del piso:
  let beat2 = 1 + 0.2 * sin(frameCount * 0.03);

  strokeWeight(0.5);
  for (let c = 10; c < 130; c += 8) {
    ellipse(256, 397, c * beat2, 40 * beat2);
  }

  for (let d = 10; d < 50; d += 8) {
    ellipse(256, 397, 120 * beat2, d * beat2);
  }
}
