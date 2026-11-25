let filas = 20;
let columnas = 20;
let tam = 29;
let espacio = 30;
let margen = 1;
let tiempo = 255;

let semillaRandom;

let mostrarTriangulo = false; 
let ultimoX = 0;
let ultimoY = 0;


function setup() {   
  
 let canvas = createCanvas(512, 512); 
 canvas.parent('div-sketch'); 

 
  stroke(0);
  strokeWeight(2);
  
  semillaRandom = random(10000);
}

function draw() {
  tiempo = max(tiempo - 0.8, 0);
  background(tiempo);
  
  fill(255);
  rectMode(CENTER);

  // mantiene la semilla para congelar el desorden
  randomSeed(semillaRandom);

  
  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {

      let x = margen + columna * espacio;
      let y = height - margen - fila * espacio;

      let nuevoX = x;
      let nuevoY = y;
      let nuevoAngulo = 0;

      if (fila >= 3 && fila < 6) {
        let filasDesordenadas = fila - 2;
        let desencaje = filasDesordenadas * 1;
        let angulo = filasDesordenadas * 1;

        nuevoX = x + random(-desencaje, desencaje);
        nuevoY = y + random(-desencaje, desencaje);
        nuevoAngulo = radians(random(-angulo, angulo));
      } 
      else if (fila >= 6 && fila < 16) {
        let filasDesordenadas = fila - 2;
        let desencaje = filasDesordenadas * 1.6;
        let angulo = filasDesordenadas * 1.5;

        nuevoX = x + random(-desencaje, desencaje);
        nuevoY = y + random(-desencaje, desencaje);
        nuevoAngulo = radians(random(-angulo, angulo));
      } 
      else if (fila >= 16) {
        let filasDesordenadas = fila - 2;
        let desencaje = filasDesordenadas * 2;
        let angulo = filasDesordenadas * 2;

        nuevoX = x + random(-desencaje, desencaje);
        nuevoY = y + random(-desencaje, desencaje);
        nuevoAngulo = radians(random(-angulo, angulo));
      }

      // Interacción con el mouse
      let distancia = dist(nuevoX, nuevoY, mouseX, mouseY);

      if (fila >= 3 && distancia < 80) {
        let fuerza = (80 - distancia) / 80;

        if (fila >= 4 && fila <= 7) {
          fuerza = fuerza * 0.2;
        }

        nuevoX += (nuevoX - mouseX) * fuerza * 0.5;
        nuevoY += (nuevoY - mouseY) * fuerza * 0.5;
        nuevoAngulo += fuerza * 0.5;
      }

      push();
      translate(nuevoX, nuevoY);
      rotate(nuevoAngulo);
      square(0, 0, tam);
      pop();
    }
  }

  // Triángulo
  if (mostrarTriangulo) {
    push();
    fill( 250);
    triangle(
      ultimoX, ultimoY - 15,
      ultimoX - 15, ultimoY + 15,
      ultimoX + 15, ultimoY + 15
    );
    pop();
  }
}
function mousePressed() {
  if (mouseY <= 350) {
  ultimoX = mouseX;
  ultimoY = mouseY;
  mostrarTriangulo = true;
} } 

