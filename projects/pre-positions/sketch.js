// variables para las lineas chicas
let x1_8 = 255,
  y1_8 = 375,
  x2_8 = 229,
  y2_8 = 349;
let x1_9 = 375,
  y1_9 = 255,
  x2_9 = 349,
  y2_9 = 229;

let speedX8_1 = 2,
  speedY8_1 = 2;
let speedX8_2 = 2,
  speedY8_2 = 2;
let speedX9_1 = 2,
  speedY9_1 = 2;
let speedX9_2 = 2,
  speedY9_2 = 2;

// limites de movimiento
const minX = 45;
const minY = 45;
const maxX = 457;
const maxY = 457;

// variables colores
let blanco3 = 255;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(65);
  strokeWeight(4);
  stroke(blanco3);

  // movimiento de la primera linea chiquita y que rebote dentro de los limites
  if (x1_8 <= minX || x1_8 >= maxX) speedX8_1 *= -1;
  if (y1_8 <= minY || y1_8 >= maxY) speedY8_1 *= -1;
  if (x2_8 <= minX || x2_8 >= maxX) speedX8_2 *= -1;
  if (y2_8 <= minY || y2_8 >= maxY) speedY8_2 *= -1;

  x1_8 += speedX8_1;
  y1_8 += speedY8_1;
  x2_8 += speedX8_2;
  y2_8 += speedY8_2;

  // movimiento de la segunda linea chica y que rebote dentro de los limites
  if (x1_9 <= minX || x1_9 >= maxX) speedX9_1 *= -1;
  if (y1_9 <= minY || y1_9 >= maxY) speedY9_1 *= -1;
  if (x2_9 <= minX || x2_9 >= maxX) speedX9_2 *= -1;
  if (y2_9 <= minY || y2_9 >= maxY) speedY9_2 *= -1;

  x1_9 += speedX9_1;
  y1_9 += speedY9_1;
  x2_9 += speedX9_2;
  y2_9 += speedY9_2;

  // lineas blancas del fondo que no se mueven

  line(255, 165, 376, 286); // linea mas chica del lado derecho
  line(165, 105, 400, 343);
  line(105, 75, 425, 400);
  line(45, 45, 457, 457); // linea principal
  line(75, 105, 400, 425);
  line(105, 165, 343, 400);
  line(165, 255, 286, 376); // linea mas chica del lado izquierdo

  // lineas chicas que rebotan
  line(x1_8, y1_8, x2_8, y2_8);
  stroke(30);
  line(x1_9, y1_9, x2_9, y2_9);

  // lineas de distintos colores sobre las blancas del fondo
  stroke(120); // gris del final mas oscuro
  line(400, 165, 165, 400);
  stroke(100);
  line(425, 105, 105, 425);
  stroke(30); // negra principal
  line(457, 45, 45, 457); //linea principal
  stroke(200);
  line(400, 75, 75, 400);
  stroke(155); // gris del final mas claro
  line(343, 105, 105, 343);

  // apretando v o V se invierten los colores de las lineas del fondo con las superpuestas
  if (keyIsPressed) {
    if (key == "v" || key == "V") {
      // lineas del fondo
      stroke(120);
      line(165, 105, 400, 343);
      stroke(100);
      line(105, 75, 425, 400);
      stroke(15);
      line(45, 45, 457, 457); // linea principal
      stroke(200);
      line(75, 105, 400, 425);
      stroke(155);
      line(105, 165, 343, 400);

      // lineas de arriba
      stroke(blanco3);
      line(400, 165, 165, 400);
      line(425, 105, 105, 425);
      line(457, 45, 45, 457); // linea principal
      line(400, 75, 75, 400);
      line(343, 105, 105, 343);

      // lineas chicas
      stroke(30);
      line(x1_8, y1_8, x2_8, y2_8);
      stroke(blanco3);
      line(x1_9, y1_9, x2_9, y2_9);
    }
  }

  // cuadrado blanco grande
  noFill();
  stroke(blanco3);
  quad(45, 45, 457, 45, 457, 457, 45, 457);
}
