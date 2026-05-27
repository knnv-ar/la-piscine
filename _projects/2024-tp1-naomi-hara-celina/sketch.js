/*UNA AM1 - TP1
Inspirado en las obras de Vera Molnár "(Des) Ordres", "Hommage à Barbaud" y la obra detrás de su imagen de perfil
Interacciones:
  - Click izquierdo: rotación de las figuras en sentido antihorario
  - Click derecho: rotación de las figuras en sentido horario
  - Tecla a/A: resetea los ángulos de giro (angle)
  - Tecla s/S: tamaño random de las figuras (size)
  - Tecla d/D: resetea el tamaño de las figuras (desize)
  - Tecla w/W: activa y desactiva el cambio de valores (white)
  - Sin ninguna interacción por más de 15 segundos, aparecen polígonos de movimiento random*/

let angle = 0; // Variable para ángulo de giro
let colorAngle = 0; // Variable para cambio de valor
let size = 1; // Variable para cambio de tamaño
let colorShift = true; // Variable para activar o desactivar el cambio de valor
let lastValue1; // Variable para guardar el último valor de fondo
let lastValue2; // Variable para guardar el último valor de figura
let x = 0; // Variables para los movimientos random de los polígonos
let y = 0;
let z = 0;
let velocidadX = 0.2;
let velocidadY = 0.3;
let velocidadZ = 0.4;
let direccionX = 1.1;
let direccionY = 1.2;
let direccionZ = 1.3;
const minVar = 30; // Constante para amplitud de movimiento random
let contador = 0; // Contador para suavisar el cambio de tamaño

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  //Inicialmente el cambio de colores está activado
  if (colorShift == true) {
    //Fondo que fluctúa entre blanco y negro
    let valorCos = cos(colorAngle);
    let valorFondo = map(valorCos, -1, 1, 0, 255);
    lastValue1 = valorFondo;
    background(valorFondo);

    //Color de figura que fluctúa entre blanco y negro
    let valorSeno = sin(colorAngle);
    let valor = map(valorSeno, -1, 1, 0, 255);
    lastValue2 = valor;
    stroke(valor);
    colorAngle += 0.005;
  } else if (colorShift == false) {
    /*Al presionar W mantiene el último valor
      Presionando W otra vez vuelve a cambiar de valor*/
    background(lastValue1);
    stroke(lastValue2);
  }

  strokeWeight(3);
  noFill();

  rectMode(CENTER);

  //Figuras
  for (let y = 98; y <= height - 20; y += 158) {
    for (let x = 98; x <= width - 20; x += 158) {
      push();
      translate(x, y);
      scale(size);
      rotate(angle);
      rect(0, 0, 120, 120);
      scale(size);
      rotate(angle);
      rect(0, 0, 100, 100);
      scale(size);
      rotate(angle);
      rect(0, 0, 80, 80);
      scale(size);
      rotate(angle);
      rect(0, 0, 60, 60);
      scale(size);
      rotate(angle);
      rect(0, 0, 40, 40);
      scale(size);
      rotate(angle);
      rect(0, 0, 20, 20);
      scale(size);
      rotate(angle);
      rect(0, 0, 1, 1);
      pop();
    }
  }

  //Giro de figuras con el mouse presionado
  if (mouseIsPressed) {
    if (mouseButton == RIGHT) {
      angle += 0.01;
      frameCount = 0;
    } else if (mouseButton == LEFT) {
      angle -= 0.01;
      frameCount = 0;
    }
  }

  //Tamaño random con S y resetea con D
  if (keyIsPressed) {
    if (key == "s" || key == "S") {
      size = map(noise(0.02 * contador), 0, 1, -0.1, 2);
      contador++;
      frameCount = 0;
    } else if (key == "d" || key == "D") {
      size = 1;
      frameCount = 0;
    }
  }

  /*Polígonos de movimientos random cuando no hubo interacción por más de 15 segundos*/
  if (frameCount > 1000) {
    //Movimiento aleación x
    x += velocidadX * direccionX;
    if (x > minVar || x < -minVar) {
      direccionX = -direccionX;
    }

    //Movimiento aleación y
    y += velocidadY * direccionY;
    if (y > minVar || y < -minVar) {
      direccionY = -direccionY;
    }

    //Movimiento aleación z
    z += velocidadZ * direccionZ;
    if (z > minVar || z < -minVar) {
      direccionZ = -direccionZ;
    }

    push();
    //Valor de línea distinto
    let valorCos = cos(colorAngle);
    let valorDesorden = map(-valorCos, -1, 1, 0, 255);
    stroke(valorDesorden);
    strokeWeight(4);

    //Polígonos de movimiento random
    quad(37 + x, 37 + x, 37 + y, 160 + y, 160 + z, 160 + z, 160 + y, 37 + x);
    quad(194 + x, 37 - z, 194 + y, 160 + x, 315 + y, 160 + x, 315 + z, 37 - x);
    quad(353 + z, 37 + y, 353 + x, 160 - x, 470 + z, 160 - y, 470 + z, 37 + x);

    quad(37 + y, 195 - x, 37 + z, 315 - z, 160 + x, 315 + z, 160 + x, 195 + x);
    quad(194 + z, 195 - y, 194 + y, 315 - y, 315 - x, 315 + x, 315 - y, 195 + y);
    quad(353 - x, 195 + x, 353 - x, 315 + z, 470 - x, 315 + y, 470 - y, 195 + z);

    quad(37 + y, 352 - z, 37 + y, 472 + y, 160 - z, 472 + x, 160 - x, 352 + z);
    quad(194 - x, 352 - y, 194 - z, 472 - z, 315 - y, 472 - x, 315 - x, 352 - y);
    quad(353 - y, 352 + z, 353 + y, 472 - x, 470 - z, 472 - x, 470 - x, 352 - z);
    pop();
  }
}

//Para evitar que salga el menú con el click derecho
document.oncontextmenu = function () {
  return false;
};

/*Resetea el ángulo de giro con A
  Activa o desactiva el cambio de colores con W*/
function keyPressed() {
  if (key == "a" || key == "A") {
    angle = 0;
    frameCount = 0;
  } else if (key == "w" || key == "W") {
    if (colorShift == false) {
      colorShift = true;
      frameCount = 0;
    } else {
      colorShift = false;
      frameCount = 0;
    }
  }
}