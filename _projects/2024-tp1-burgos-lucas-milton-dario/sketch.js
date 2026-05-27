let anchoLinea = 15; // Ancho de cada línea
let velocidad = 0; // Velocidad de movimiento de las líneas y las curvas


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}


function draw() {
  background(220);
  
  // Dibuja líneas verticales en el lienzo
  for (let i = 0; i < width / anchoLinea + 1; i++) {
    let x = (i * anchoLinea + frameCount * velocidad) % width; // Posición x de la línea, desplazada por el tiempo
    if (i % 2 === 0) {
      stroke(0); // Línea negra
    } else {
      stroke(255); // Línea blanca
    }
    strokeWeight(anchoLinea); // Grosor de las líneas
    line(x, 0, x, height); // Dibuja una línea vertical desde la parte superior hasta la parte inferior del lienzo
  }

  // Dibuja curvas de Bézier en el lienzo
  for (let i = 0; i < 31; i++) {
    let x = (i * anchoLinea + frameCount * velocidad) % 550; // Posición x de la curva, desplazada por el tiempo
    if (i % 2 === 0) {
      stroke(0); // Línea negra
    } else {
      stroke(255); // Línea blanca
    }
    strokeWeight(anchoLinea); // Grosor de las líneas
    noFill(); // No rellena las curvas
    // Dibuja una curva de Bézier con parámetros de control que crean una forma fluida
    bezier(x + 15, -10, 10, 100, 260, 300, x, 520);
  }

  // Control de velocidad de movimiento con el mouse
  if (mouseIsPressed) {
    velocidad = 2; // Aumenta la velocidad cuando el mouse está presionado
  }

  // Control de velocidad con las teclas del teclado
  if (keyIsPressed === true) {
    if (key === 'i') { // Si se presiona la tecla 'i'
      velocidad = 541; // Establece una velocidad alta
    }
    if (key === ' ') { // Si se presiona la barra espaciadora 
      velocidad = 543; // Establece una velocidad específica
    }
    if (key === 'r') { // Si se presiona la tecla 'r'
      velocidad = 35784651; // Establece una velocidad extremadamente alta
    }
    if (key === '0') { // Si se presiona la tecla '0'
      velocidad = 0; // Detiene el movimiento
    }
  }
}

