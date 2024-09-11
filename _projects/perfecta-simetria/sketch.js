//TP1- AM1 - "Perfecta simetría" - Florencia Pennella

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  frameRate(25);
}

function draw() {
  background(255);
 
  let columnas = 10;
  let filas = 10;
  
  let tamaño = 40; 
  let espacio = 10;  
  
  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      let xDesp = map(sin(frameCount * 0.1 + x), -1, 1, -5, 5);
      let yDesp = map(sin(frameCount * 0.1 + y), -1, 1, -5, 5);
      let xPos = x * (tamaño + espacio) + xDesp;
      let yPos = y * (tamaño + espacio) + yDesp;
      fill(0, 210);  
      noStroke();
      rect(xPos, yPos, tamaño, tamaño);
    }
  }

  let tamañoA = 30; 
  let espacioA = 20; 
  
  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      let xDesp = map(sin(frameCount * 0.1 + x + 100), -1, 1, -2, 2);
      let yDesp = map(sin(frameCount * 0.1 + y + 100), -1, 1, -2, 2);
      let xPos = x * (tamañoA + espacioA) + xDesp;
      let yPos = y * (tamañoA + espacioA) + yDesp;
      noFill();
      stroke(255);
      strokeWeight(2);
      rect(xPos, yPos, tamañoA, tamañoA);
    }
  }
  
  let tamañoB = 25;  
  let espacioB = 25;  
  
  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < columnas; x++) {
      let xDesp = map(sin(frameCount * 0.1 + x + y + 200), -1, 1, -2, 2);
      let yDesp = map(sin(frameCount * 0.1 + y + x + 200), -1, 1, -2, 2);
      let xPos = x * (tamañoB + espacioB) + xDesp;
      let yPos = y * (tamañoB + espacioB) + yDesp;
      fill(0, 200);  
      noStroke();
      rect(xPos, yPos, tamañoB, tamañoB);
    }
  }
}
