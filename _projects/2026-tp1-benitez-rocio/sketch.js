let columnas = 5;
let tamañoCuadrados;

function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');      
  rectMode(CENTER);
  tamañoCuadrados = 512 / columnas;
}

function draw() {
  background(245);

  for (let x = 0; x < columnas; x++) {
    for (let y = 0; y < columnas; y++) {
      
  let posicionX = x * tamañoCuadrados + tamañoCuadrados / 2;
  let posicionY = y * tamañoCuadrados + tamañoCuadrados / 2;

      noFill();

      for (let i = 0; i < 5; i++) {
        stroke(50 + i * 40);

        let tamaño = 70 - i * 12;

       rect(posicionX + random(-3, 3),
        posicionY + random(-3, 3),
        tamaño, tamaño);
      }
    }
  }
}
