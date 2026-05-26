// Obra: du 02 au 05 mars 2017 /// The Armory Show (New York) http://www.veramolnar.com/?p=1795

// Variables

let angulo = 1;
let escalar = 1;
let escalarFondo = 2;
let velocidad = 0.1;
let eleccion = 0;
let eleccion2 = 255;

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
  noStroke();
}

function draw() {
  background(0);

  // Con cada presión del mouse la velocidad del triángulo va aumentando,
  // pero si aprieta Z esta cambia de paleta de colores utilizando random para ello.

  if (mouseIsPressed) {
    escalar += 0.1;
  } else if (keyIsPressed) {
    if (key == "z" || key == "Z") {
      eleccion = random(0, 255);
      eleccion2 = random(255, 0);
    }
  } else {
    if (escalar > 0) {
      escalar -= 0.1;
    }
  }

  fill(eleccion);
  rect(0, 0, 512, 100);
  rect(0, 412, 512, 100);
  
  // los triangulos del fondo se mueven de manera automatica

  let e5 = 412 + sin(frameCount * 1, angulo) * escalarFondo;
  let f6 = 99 + sin(frameCount * 1, angulo) * escalarFondo;

  fill(eleccion2);
  triangle(0, e5, 263, e5, 263, 100);
  triangle(512, f6, 263, f6, 263, 410);

  // agrupa los movimientos

  push();

  // Cálculo de coordenadas oscilantes usando funciones seno para simular respiración

  let a1 = 340 + sin(frameCount * 1, angulo) * escalar;
  let b2 = 178 + sin(frameCount * 1, angulo + 0.1) * escalar;
  let c3 = 340 + sin(frameCount * 1, angulo + 0.2) * escalar;
  let d4 = 178 + sin(frameCount * 1, angulo + 0.3) * escalar;

  // Serie de triángulos que se mueven suavemente imitando un cuerpo que respira

  fill(eleccion);
  triangle(200, a1, 60, a1, 197, b2);
  fill(eleccion2);
  triangle(56, b2, 60, a1, 197, b2);
  fill(eleccion2);
  triangle(455, c3, 320, a1, 455, b2);
  fill(eleccion);
  triangle(316, d4, 318, a1, 455, b2);

  pop();
}
