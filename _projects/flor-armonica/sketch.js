
// Declaración de variables 

let t;            // Tiempo(se usa para animar)
let gray;       // Nivel de gris para el trazo
let r1, r2;      // Radios variables que definen el tamaño de la figura
let i, a;        // Contadores para los bucles for
let x, y;        // Coordenadas de los puntos que se van a dibujar


function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');

  background(255); // fondo blanco como un lienzo
  noFill();
  frameRate(30);
}

function draw() {
  translate(width / 2, height / 2);
  
  let t = frameCount * 0.01;

  for (let i = 0; i < 6; i++) {
    push();
    rotate(t + i);

    // Oscilación radial
    let r1 = 80 + sin(t * 2 + i) * 60;
    let r2 = 40 + cos(t * 3 + i * 1.5) * 40;

    // Color en escala de grises dinámico
    let gray = map(sin(t + i), -1, 1, 30, 200);
    stroke(gray, 30); // transparencia para capas

    strokeWeight(1.5 + sin(t + i) * 1.2);
  
   
   // Comienza a dibujar una forma con curvas
    beginShape();
    for (let a = 0; a < TWO_PI; a += PI / 6) { 
      // Recorre un círculo completo en 12 pasos (PI/6 = 30°) 
      
      let x = cos(a) * r1 + sin(t * 1.5 + a * i) * 10;
      // Coordenada x: forma parte de una elipse con movimiento ondulado
      
      let y = sin(a) * r2 + cos(t * 2 + a * i) * 10;
      // Coordenada y: lo mismo pero en vertical
      
      
      curveVertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }

  // Limita duración o regeneración
  if (frameCount > 1000) {
   noLoop();
  }
}
