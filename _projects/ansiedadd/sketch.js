function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
 
  stroke(0);
}

function draw() { 
  background(256);
  for (let i = 0; i < 1000; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    // Dibujar una línea
    line(x1, y1, x2, y2);
  }
}
