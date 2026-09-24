//Declaración de uso de IA

// true = pantalla de monitor cardíaco, false = corazón
let modoMonitor = false;

function setup() {}

// Método de entrada: al presionar cualquier tecla, alterno entre las dos pantallas
function keyPressed() {
  modoMonitor = !modoMonitor;
}

function draw() {
  createCanvas(512, 512);

  if (modoMonitor) {
    dibujarMonitor();
  } else {
    dibujarCorazon();
  }
}

// ---------------------------------------------------------------
// MONITOR CARDÍACO (sin sonido, blanco y negro, sin arrays,
// misma frecuencia y duración que el latido del corazón)
// ---------------------------------------------------------------
function dibujarMonitor() {
  background(0);

  // Mismo período que el latido del corazón: sin(frameCount * 0.03)
  let periodo = TWO_PI / 0.03;
  let anchoPico = periodo * 0.08; // qué tan angosto es el pico
  let base = height / 2;

  // --- SOMBRA (inspirada en las exposiciones múltiples de Ben F. Laposky) ---
  // Dibujo varias capas del mismo trazo, cada una más oscura y desplazada,
  // para simular el efecto de estela/profundidad de sus osciloscopios.
  for (let capa = 4; capa >= 1; capa--) {
    let desplazamiento = capa * 3;
    let gris = 255 - capa * 45; // cada capa un poco más oscura
    stroke(gris);
    strokeWeight(2);

    for (let x = 0; x < width; x++) {
      let fase = (x + frameCount) % periodo;
      let y;

      if (fase < anchoPico) {
        y = base - 40; // pico
      } else {
        y = base; // línea base
      }

      point(x + desplazamiento, y + desplazamiento);
    }
  }

  // --- TRAZO PRINCIPAL, blanco, al frente ---
  stroke(255);
  strokeWeight(2);
  for (let x = 0; x < width; x++) {
    let fase = (x + frameCount) % periodo;
    let y;

    if (fase < anchoPico) {
      y = base - 40;
    } else {
      y = base;
    }

    point(x, y);
  }
}

// ---------------------------------------------------------------
// CORAZÓN (código original, sin cambios en el dibujo)
// ---------------------------------------------------------------
function dibujarCorazon() {
  // Declaro la variable fondo y le asigno un map, se lo aplico al background
  let fondo = map(sin(frameCount * 0.03), -1, 1, 0, 255);
  background(fondo);

  /*push();
  stroke(70);
  // Hago la cuadrícula con lineas
  for (let i = 5; i < 510; i += 5) {
    line(i, 10, i, 500);
  }
  
  for (let i = 5; i < 510; i += 5) {
    line(10, i, 500, i);
  }
  pop();*/

  // Latido
  let escala = 1.2 + sin(frameCount * 0.03) * 0.2;
  push();
  translate(256, 155);
  scale(escala);
  translate(-256, -175);

  // Le aplico otro map al corazón
  let cora = map(sin(frameCount * 0.03), -1, 1, 0, 255);

  push();
  fill(0);
  noStroke();
  ellipse(250, 250, 150, 300); //base
  ellipse(245, 250, 210, 150); //centro horizontal
  ellipse(200, 250, 100, 200); //lateral izq
  ellipse(210, 300, 80, 120); //lateral izq inf
  ellipse(270, 350, 80, 120); //lateral der inf 1
  ellipse(280, 340, 80, 100); //lateral der inf 2
  ellipse(288, 340, 80, 150); //lateral der inf 3
  ellipse(295, 250, 100, 200); //lateral der

  ellipse(194, 150, 35, 100); //horizontal
  //ellipse(170, 150, 30, 12); //2
  //ellipse(170, 130, 30, 12); //1

  push();
  rotate(PI / 16); //diagonal chica
  translate(90, 10);
  ellipse(110, 75, 30, 10); //1
  pop();

  ellipse(245, 103, 15, 45); //centro chica
  ellipse(225, 100, 15, 45); //centro izq
  ellipse(265, 105, 15, 45); //centro der

  ellipse(225, 138, 80, 30); //completa forma

  ellipse(300, 150, 90, 30); //derecha grande
  ellipse(320, 185, 60, 15); //1
  ellipse(320, 200, 60, 15); //2

  fill(20);
  bezier(209, 180, 350, 40, 245, 150, 202, 230);
  bezier(215, 120, 389, 120, 230, 150, 202, 230);
  bezier(295, 130, 265, 66, 175, 135, 200, 130);

  push();
  noStroke();
  bezier(255, 160, 230, 210, 155, 165, 205, 120);
  pop();
  fill(20);
  bezier(200, 230, 455, 130, 230, 150, 200, 230);
  fill(20);
  noStroke();
  bezier(199, 230, 450, 135, 237, 155, 210, 190);
  fill(30);
  triangle(322, 168, 270, 200, 342, 220);

  fill(200); //agujeros
  ellipse(194, 105, 13, 3);
  //ellipse(173,110,8,3);
  ellipse(225, 80, 8, 3);
  ellipse(245, 83, 7, 3);
  ellipse(265, 85, 7, 3);
  ellipse(339, 150, 5, 10);
  ellipse(345, 185, 7, 3);
  ellipse(345, 200, 7, 3);

  push(); // sombra
  fill(10);
  rotate(PI / -4.5);
  translate(-260, 40);
  ellipse(210, 360, 50, 170);
  pop();

  push(); // sombra
  fill(10);
  rotate(PI / 20);
  // translate(-260, 40);
  ellipse(365, 220, 15, 100);
  pop();

  // --------------- VENAS ---------------------------------------
  // Le aplico otro map a las venas
  let vena = map(sin(frameCount * 0.03), -1, 1, 100, 255);

  stroke(vena); // puntos blancos
  strokeWeight(3);

  // Vena principal
  for (let i = 0; i < 85; i++) {
    let x = 230 + i * 0.5;
    let y = 290 - i * 1.1 + sin(i * 0.25) * 3;

    point(x, y);
  }

  strokeWeight(2);
  // Rama derecha 1
  for (let i = 0; i < 55; i++) {
    let x = 295 - i * 0.8;
    let y = 305 - i * 1.1 + sin(i * 0.3) * 2;

    point(x, y);
  }

  // Rama izquierda 1
  for (let i = 0; i < 40; i++) {
    let x = 220 + i * 0.9;
    let y = 265 - i * 0.8 + sin(i * 0.4) * 2;

    point(x, y);
  }

  // Rama derecha 2
  for (let i = 0; i < 10; i++) {
    let x = 242 - i * 0.8;
    let y = 295 - i * 1.1 + sin(i * 0.3) * 2;

    point(x, y);
  }

  // Rama izquierda 2
  for (let i = 0; i < 30; i++) {
    let x = 260 + i * 0.8;
    let y = 320 - i * 1.1 + sin(i * 0.4) * 2;

    point(x, y);
  }

  // Rama izquierda 3
  for (let i = 0; i < 10; i++) {
    let x = 280 + i * 0.8;
    let y = 260 - i * 1.1 + sin(i * 0.4) * 2;

    point(x, y);
  }

  strokeWeight(3);
  // Rama derecha 3
  for (let i = 0; i < 35; i++) {
    let x = 293 - i * 0.8;
    let y = 250 - i * 1.1 + sin(i * 0.3) * 4;

    point(x, y);
  }

  strokeWeight(3);
  // Rama derecha 4 (izquierda)
  for (let i = 0; i < 55; i++) {
    let x = 245 - i * 0.9;
    let y = 399 - i * 1.2 + sin(i * 0.3) * 3;

    point(x, y);
  }

  // Rama derecha 4
  for (let i = 0; i < 15; i++) {
    let x = 200 + i * 0.9;
    let y = 340 - i * 1.1 + sin(i * 0.4) * 3;

    point(x, y);
  }

  // Rama derecha 2
  for (let i = 0; i < 10; i++) {
    let x = 195 - i * 0.8;
    let y = 331 - i * 1.1 + sin(i * 0.3) * 2;

    point(x, y);
  }

  noStroke();
  fill(30);
  bezier(142, 260, 170, 80, 230, 150, 200, 230);

  pop();
  pop();
}
