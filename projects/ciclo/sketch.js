let cantidad = 7; // cantidad cuadrados
let tamañoBase = 80; // tamaño cuadrados
let separación = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(30);  // Mas suavidad
  noStroke();
}

function draw() {
  background(100, 15);

  // Circulo 
  let tiempoCirculo = frameCount * 0.10;
  let radio = sin(tiempoCirculo) * 50 + 300; 
  fill(255, 20); 
  ellipse(width/2, height/2, radio, radio);

  //Tiempo para el zoom de los cuadrados
   for (let i = 0; i < cantidad; i++) {
    let t = frameCount * 0.1 + i;
    let tamañoZoom = sin(t) * 40 + tamañoBase; // Más grande y más lento

    // Movimiento lento del color
    let gris = map(sin(t * 0.5), -1, 1, 50, 200); 

    // Posición fija con compensación para que el centro no se mueva
    let x = i * (tamañoBase + separación);
    let y = i * (tamañoBase + separación);
    let offset = (tamañoZoom - tamañoBase) / 2;

    fill(gris);
    rect(x - offset, y - offset, tamañoZoom, tamañoZoom);
  }
}