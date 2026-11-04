/*
2026 - Emilse González Dama
Pre-entrega TP1: PRESENCIAS
AM1 - Cátedra Lacabanne UNA
*/

function setup() {

  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch'); 
  
}

function draw() {
  background(15);

  // Fondo texturizado
  stroke(25);
  strokeWeight(1);

  // Líneas verticales cada 10 píxeles a lo ancho del lienzo
  for (let x = 0; x < width; x += 10) {
    line(x, 0, x, height);
  }

  stroke(255);
  strokeWeight(1);
  noFill();

  // Organismo en estado de reposo
  let velocidad = 0.01;
  let amplitud = 25;

  // Organismo en estado de perturbacion c/mouse
  // aumenta la velocidad y la amplitud de la respiración
  if (mouseX > 100 && mouseX < 450 && mouseY > 100 && mouseY < 450) {
    velocidad = 5;
    amplitud = 70;
  }

  // El seno genera un movimiento oscilatorio - respiracion
  // frameCount hace avanzar la animación
  let radio = sin(frameCount * velocidad) * amplitud;

  // Dibuja 35 circunferencias concéntricas
  for (let i = 0; i < 35; i++) {
    
    //cada círculo es 3 niveles de gris más claro que el anterior
    stroke(150 + i * 3);
    let r = radio + i * 3; // i* 3 distancia entre circulos

    ellipse(256, 256, r * 2, r * 2);
  }
}
