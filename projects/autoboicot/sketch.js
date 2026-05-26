let camara;

let filas = 8;
let columnas = 8;
let espacio = 50;

let tamaño_max = 60;

let fondo = true;

let cambio = 0;
let escena = 0;

function setup() {
  
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  noFill();
  rectMode(CENTER);

  camara = createCapture(VIDEO);
  camara.hide();
}

function draw() {
  // 1min= 60.000 milis - cambiar de escena cada 10 segundos
  if (millis() - cambio > 10000) {
    escena = (escena + 1) % 3;
    cambio = millis(); // actualizar
  }

  if (escena === 0) {
    escena1();
  } else if (escena === 1) {
    escena2();
  } else if (escena === 2) {
    escena3();
  }
}

function calcular_oscuridad() {
  camara.loadPixels();
  let nivel_oscuridad = 0;
  let contador = 0;

  // calcular la oscuridad de cada píxel
  for (let i = 0; i < camara.pixels.length; i += 4) {
    let rojo = camara.pixels[i];
    let verde = camara.pixels[i + 1];
    let azul = camara.pixels[i + 2];
    let brillo = (rojo + verde + azul) / 3;

    if (brillo < 80) nivel_oscuridad++;
    contador++;
  }

  // calcular la escala en función de la oscuridad

  let escala = map(nivel_oscuridad / contador, 0, 1, 20, tamaño_max);
  return escala;
}

function escena1() {
  background(0);
  fill(255);
  let escala = calcular_oscuridad();
  let grilla_x = width / 2;
  let grilla_y = height / 2;

  push();
  translate(grilla_x, grilla_y); // centrar
  noStroke();

  // grilla círculos blancos

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = (i - (columnas - 1) / 2) * espacio;
      let y = (j - (filas - 1) / 2) * espacio;
      ellipse(x, y, escala, escala);
    }
  }
  pop();
}

function escena2() {
  background(255);
  fill(0);
  let escala = calcular_oscuridad();
  let grilla_x = width / 2;
  let grilla_y = height / 2;
  push();
  translate(grilla_x, grilla_y);
  noStroke();

  // grilla de círculos negros
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = (i - (columnas - 1) / 2) * espacio;
      let y = (j - (filas - 1) / 2) * espacio;
      ellipse(x, y, escala, escala);
    }
  }
  pop();
}

function escena3() {
  
  background(0);  

  let escala = calcular_oscuridad();
  let grilla_x = width / 2;
  let grilla_y = height / 2;

  push();
  translate(grilla_x, grilla_y);


  let baseColor = sin(frameCount * 0.03);
  // violeta
  let colorR = map(baseColor, -1, 1, 100, 200);  
  let colorG = map(baseColor, -1, 1, 50, 100);  
  let colorB = map(baseColor, -1, 1, 150, 255);  

  // violeta
  stroke(colorR, colorG, colorB);
  strokeWeight(3);
  noFill();

  // grilla de círculos con trazo violeta
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = (i - (columnas - 1) / 2) * espacio;
      let y = (j - (filas - 1) / 2) * espacio;
      ellipse(x, y, escala, escala);
    }
  }

  pop();
}

