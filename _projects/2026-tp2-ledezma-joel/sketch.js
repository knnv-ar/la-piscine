let gauchito;
let manaosLogo;
let vela1 = false;
let vela2 = false;
let vela3 = false;
let vela4 = false;
let vela5 = false;
let vela6 = false;
let vela7 = false;
let vela8 = false;
let vela9 = false;

async function setup() {
  let canvas = createCanvas(510, 530);
  canvas.parent('div-sketch');
  noStroke();
  gauchito = await loadImage("img/pompomgil.png");
  manaosLogo = await loadImage("img/manaos-logo.png");
  fondo();
}
function draw() {
  fondo();    // si lo redibujás cada frame, la imagen no se superpone consigo misma
  mesa(); 
  botella();
  florero(110, 415);
  florero(385, 415);
  chopChicago(60, 413 ,0.90);
  chopBoca(460, 413 ,0.90); 
  manaos(30,450);
  manaos(477,450);
  vela(100, 462, vela1);
  vela(200, 462, vela2);
  vela(300, 462, vela3);
  vela(400, 462, vela4);
  vela(435, 462, vela5);
  vela(335, 462, vela6);
  vela(235, 462, vela7);
  vela(135, 462, vela8);
  vela(75, 462, vela9);
  if (gauchito) {
    imageMode(CENTER);
    image(gauchito, 250, 240, 199, 340); // x, y, ancho, alto
  }
  cigarrillo(170, 418);
  cigarrillo(350, 460);
  rosarioMesa(268, 468, 1.0);
}
function fondo() {
  background(86, 13, 0);
  fill(136, 67, 24);
  circle(250, 250, 450);
  fill(187, 120, 49);
  circle(250, 250, 400);
  fill(237, 174, 73);
  circle(250, 250, 350);
}
function mesa() {
 // piso
  fill("#321111");
  rect(0, 494, width, 110);

  // escalón de abajo (ancho)
  fill("#a32a1c");
  rect(10, 446, 480, 22); // tapa
  fill("#5a130d");
  rect(10, 468, 480, 26); // frente

  // escalón de arriba (angosto)
  fill("#8c2218");
  rect(40, 400, 420, 22); // tapa
  fill("#410f0b");
  rect(40, 422, 420, 24); // frente
}
function botella(){
  push();
  fill("#1c3a1c");
  rect(140, 380, 14, 30, 2); // cuerpo
  rect(144, 368, 6, 12);  // cuello
  fill(235);
  rect(140, 388, 14, 12); // etiqueta
  pop();

  push();
  fill("#2b0f0f");
  rect(335, 380, 14, 30 , 2);
  rect(339, 368, 6, 12);
  fill(235);
  rect(335, 388, 14, 12);
  pop();

  push();
  fill("#1c3a1c");
  rect(420, 380, 14, 30,2);
  rect(424, 368, 6, 12);
  fill(235);
  rect(420, 388, 14, 12);
  pop();
}
function cigarrillo(x, y) {
  // cuerpo
  fill(245);
  rect(x, y - 5, 40, 6);

  // filtro
  fill(220, 150, 60);
  rect(x + 28, y - 5, 12, 6);

  // punta encendida
  fill(255, 90, 30);
  rect(x - 3, y - 5, 4, 6);
}
function florero(x, y) {
  // tallos
  stroke("#2f6b2c");
  strokeWeight(3);
  line(x, y - 30, x - 15, y - 60);
  line(x, y - 30, x, y - 70);
  line(x, y - 30, x + 15, y - 60);
  noStroke();

  // flores
  fill("#d8263a");
  circle(x - 15, y - 60, 18);
  circle(x, y - 70, 18);
  circle(x + 15, y - 60, 18);

  // florero
  fill("#f2f2f2");
  rect(x - 14, y - 30, 28, 30);
}
function manaos(x, y) {
  // botella (cola oscura)
  fill("#3b1a0e");
  rect(x - 15, y - 60, 30, 80,30);   // cuerpo
   rect(x - 15, y - 10, 30, 20,5);   // cuerpo
  rect(x - 6, y - 72, 12, 12);    // cuello

  // tapa
  fill("#d8263a");
  rect(x - 7, y - 80, 14, 8,3);
  rect(x - 7, y - 75, 14, 4);

  // etiqueta
  fill("#d8263a");
  rect(x - 15, y - 42, 30, 22);

  // nombre
   if (manaosLogo) {
    imageMode(CENTER);
    image(manaosLogo, x, y - 31, 50, 30);
  }
}
function vela(x, y, prendida) {
  // cuerpo
  if (prendida == true) {
    fill(225, 35, 30);   // rojo vivo
  } else {
    fill(130, 25, 20);   // rojo oscuro
  }
  rect(x - 5, y - 25, 10, 25);
  // llama (solo si está prendida)
  if (prendida == true) {
    // vaivén de -2 a 2; el "+ x" hace que cada vela parpadee distinto
    let parpadeo = sin(frameCount * 0.2 + x) * 2;

    // resplandor
    fill(255, 210, 74, 50);
    circle(x, y - 33, 30 + parpadeo * 2);

    // llama
    fill(255, 210, 74);
    ellipse(x + parpadeo / 2, y - 33, 8 + parpadeo, 14 + parpadeo * 2);
  }

}
function mousePressed() {
  if (dist(mouseX, mouseY, 100, 442) < 20) {
    vela1 = !vela1;
  }
  if (dist(mouseX, mouseY, 200, 442) < 20) {
    vela2 = !vela2;
  }
  if (dist(mouseX, mouseY, 300, 442) < 20) {
    vela3 = !vela3;
  }
  if (dist(mouseX, mouseY, 400, 442) < 20) {
    vela4 = !vela4;
  }
  if (dist(mouseX, mouseY, 435, 442) < 20) {
    vela5 = !vela5;
  }
  if (dist(mouseX, mouseY, 335, 442) < 20) {
    vela6 = !vela6;
  }
  if (dist(mouseX, mouseY, 235, 442) < 20) {
    vela7 = !vela7;
  }
  if (dist(mouseX, mouseY, 135, 442) < 20) {
    vela8 = !vela8;
  }
  if (dist(mouseX, mouseY, 75, 442) < 20) {
    vela9 = !vela9;
  }
}
function chopChicago(x, y, escala) {
  push();
  translate(x, y);   // (0, 0) es el centro de la base del chop
  scale(escala);     // 1 es el tamaño original

  // asa (a la izquierda; la mitad de adentro la tapa el cuerpo)
  push();
  noFill();
  stroke(25);
  strokeWeight(7);
  ellipse(-20, -36, 26, 34);
  pop();

  // cuerpo negro
  fill(25);
  rect(-18, -60, 36, 48, 3);

  // borde plateado de arriba
  fill(190, 195, 200);
  rect(-20, -62, 40, 5, 2);

  // banda verde y pie negro
  fill(30, 170, 70);
  rect(-20, -12, 40, 5);
  fill(25);
  rect(-20, -7, 40, 7, 2);

  // brillo
  fill(255, 255, 255, 40);
  rect(-14, -56, 3, 40);

  // escudo: borde blanco
  fill(255);
  rect(-11, -49, 22, 26, 2, 2, 11, 11);
  // escudo: fondo negro
  fill(25);
  rect(-9, -47, 18, 22, 1, 1, 9, 9);
  // franjas verdes
  fill(30, 170, 70);
  rect(-5.4, -47, 3.6, 18);
  rect(1.8, -47, 3.6, 18);

  pop();
}
function chopBoca(x, y, escala) {
  push();
  translate(x, y);   // (0, 0) es el centro de la base del chop
  scale(escala);     // 1 es el tamaño original

  // asa (a la derecha; la mitad de adentro la tapa el cuerpo)
  push();
  noFill();
  stroke(10, 35, 90);
  strokeWeight(7);
  ellipse(20, -36, 26, 34);   // antes era -20
  pop();

  // cuerpo azul
  fill(16, 58, 140);
  rect(-18, -60, 36, 48, 3);

  // borde plateado de arriba
  fill(190, 195, 200);
  rect(-20, -62, 40, 5, 2);

  // banda amarilla y pie azul oscuro
  fill(245, 197, 24);
  rect(-20, -12, 40, 5);
  fill(10, 35, 90);
  rect(-20, -7, 40, 7, 2);

  // brillo
  fill(255, 255, 255, 50);
  rect(-14, -56, 3, 40);

  // escudo: borde blanco
  fill(255);
  rect(-11, -49, 22, 26, 2, 2, 11, 11);
  // escudo: fondo azul
  fill(10, 35, 90);
  rect(-9, -47, 18, 22, 1, 1, 9, 9);
  // franja amarilla del medio
  fill(245, 197, 24);
  rect(-9, -41, 18, 7);

  pop();
}
function rosarioMesa(x, y, escala) {
  push();
  translate(x, y);   // (0, 0) es el borde de la mesa, donde termina la tapa
  scale(escala);

  // aro apoyado sobre la mesa (un óvalo aplastado)
  push();
  noFill();
  stroke(150, 130, 110);
  strokeWeight(1);
  ellipse(0, -9, 40, 12);
  pop();

  fill(240, 230, 210);
  for (let i = 0; i < 16; i++) {
    let angulo = TWO_PI * i / 16;
    circle(cos(angulo) * 20, -9 + sin(angulo) * 6, 5);
  }

  // parte que cuelga por el borde
  push();
  stroke(150, 130, 110);
  strokeWeight(1);
  line(0, -3, 0, 40);   // hilo
  noStroke();

  fill(240, 230, 210);
  circle(0, 6, 7);      // cuenta grande
  circle(0, 14, 4);
  circle(0, 20, 4);
  circle(0, 26, 4);

  fill(237, 174, 73);   // cruz dorada
  rect(-1.5, 30, 3, 16);
  rect(-5, 34, 10, 3);
  pop();

  pop();
}