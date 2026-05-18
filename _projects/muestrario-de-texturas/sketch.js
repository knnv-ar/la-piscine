// tomando como referencia estetica CITY PAINTING de Grace C. Hertlein
// al hacer click se crea una nueva secuencia de lineas

let lineCount = 0; // contador de líneas
let lineSpacing = 1.25; // espaciado entre líneas
let waveAmplitude = 500; // amplitud de la onda
let waveFrequency = 0.05; // frecuencia de la onda

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(220);

  // crea una nueva linea
  if (frameCount % 1 === 0) {
    let x = width - lineSpacing; // posición x inicial
    let y = height; // posición y inicial 
    for (let i = 0; i <= lineCount; i++) {
      let currentX = x - i * lineSpacing;
      let currentLineY = y;
      let waveOffset = i * lineSpacing * 206; // desplazamiento
      let waveHeight = sin(frameCount * waveFrequency + waveOffset) * waveAmplitude; // altura de la onda

      stroke(0); 
      strokeWeight(5);
      line(currentX, height, currentX, height - waveHeight);
    }
    lineCount++;
  }
// cambia la frecuencia al hacer click
  if (mouseIsPressed) {
    waveFrequency = random(0.05, 1);
    lineSpacing = random(0.5, 2.5);
    waveAmplitude = random(206, 718);
  }
}

