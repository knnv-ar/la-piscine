let velocidad = 3;
let x = 1;
let y = 1;
let lado = "arriba";

let velocidad2 = 5;
let x2 = 2;
let y2 = 2;
let lado2 = "arriba";

let velocidad3 = 8;
let x3 = 3;
let y3 = 3;
let lado3 = "arriba";

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(25);
}

function draw() {
  // lineas rectas
  background(0, 75);
  stroke(255);
  strokeWeight(1);
  for (let y = 10; y < height; y += 10) {
    line(10, y, 230, y);
  } // lineas rectas

  // lineas random
  for (let y = 10; y < height; y += 10) {
    let xx = 230;
    let yy = y;
    while (xx < 502) {
      let nuevaX = xx + 12;
      let nuevaY = yy + random(-5, 5);
      line(xx, yy, nuevaX, nuevaY);
      xx = nuevaX;
      yy = nuevaY;
    }
  }
  // lineas random

  // cuadrado 1
  noFill();
  strokeWeight(2);
  square(x, y, 100);
  if (lado === "arriba") {
    x = x + velocidad;
    if (x >= 130) {
      x = 130;
      lado = "derecha";
    }
  } else if (lado === "derecha") {
    y = y + velocidad;
    if (y >= 410) {
      y = 410;
      lado = "abajo";
    }
  } else if (lado === "abajo") {
    x = x - velocidad;
    if (x <= 10) {
      x = 10;
      lado = "izquierda";
    }
  } else if (lado === "izquierda") {
    y = y - velocidad;
    if (y <= 10) {
      y = 10;
      lado = "arriba";
    }
  }
  // cuadrado 1

  // cuadrado 2
  noFill();
  strokeWeight(2);
  square(x2, y2, 70);
  if (lado2 === "arriba") {
    x2 = x2 + velocidad2;
    if (x2 >= 230) {
      x2 = 230;
      lado2 = "derecha";
    }
  } else if (lado2 === "derecha") {
    y2 = y2 + velocidad2;
    if (y2 >= 210) {
      y2 = 210;
      lado2 = "abajo";
    }
  } else if (lado2 === "abajo") {
    x2 = x2 - velocidad2;
    if (x2 <= 50) {
      x2 = 50;
      lado2 = "izquierda";
    }
  } else if (lado2 === "izquierda") {
    y2 = y2 - velocidad2;
    if (y2 <= 60) {
      y2 = 60;
      lado2 = "arriba";
    }
  }
  // cuadrado 2

  // cuadrado 3

  noFill();
  strokeWeight(2);
  square(x3, y3, 30);
  if (lado3 === "arriba") {
    x3 = x3 + velocidad3;
    if (x3 >= 400) {
      x3 = 400;
      lado3 = "derecha";
    }
  } else if (lado3 === "derecha") {
    y3 = y3 + velocidad3;
    if (y3 >= 300) {
      y3 = 300;
      lado3 = "abajo";
    }
  } else if (lado3 === "abajo") {
    x3 = x3 - velocidad2;
    if (x3 <= 280) {
      x3 = 280;
      lado3 = "izquierda";
    }
  } else if (lado3 === "izquierda") {
    y3 = y3 - velocidad3;
    if (y3 <= 100) {
      y3 = 100;
      lado3 = "arriba";
    }
  }
  // cuadrado 3

  // cuadrados fijos
  strokeWeight(2);
  square(420, 230, 30);
  square(50, 50, 100);
  square(256, 256, 150);
  square(400, 400, 80);
  square(100, 400, 120);
  square(450, 50, 60);
   // cuadrados fijos
}
