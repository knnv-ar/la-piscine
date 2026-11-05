function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch'); 
}

function draw() {
  background(255,30); 

  // Cantidad de líneas
  let numLines = 60;

  for (let i = 0; i < numLines; i++) {
    // Posición inicial
    let x1 = 0;
    let y1 = i * 12;

    // Posición final 
    let x2 = width;
    let y2 = height - i * 8;

    // Color en escala de grises (de negro a gris claro)
    let col = map(i, 0, numLines, 0, 220);
    stroke(col);

    // Transición de rectas a curvas 
    let controlX = map(i, 0, numLines, x1, x2);
    let controlY = map(i, 0, numLines, y1, y2) + noise(frameCount * 0.005 + i) * 100;

    // Al principio se ven más rectas, luego más curvas
    if (i < numLines / 2) {
      line(x1, y1, x2, y2);
    } else {
      bezier(x1, y1, controlX, controlY, controlX, controlY, x2, y2);
    }
  }
}
