let mostrarSol = true;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(0);

  // Líneas del fondo
  stroke(80);
  for (let y = 0; y < height; y += 5) {
    let movimiento = sin(frameCount * 0.01 + y * 0.5) * 750;
    line(0, y + movimiento, width, y - movimiento);
  }

  
  // Árboles
  stroke(255);
  for (let i = 0.3; i < 10; i++) {
    let centro = 40 + i * 45;
    let base = 320;
    let alto = 180;
    let ramas = 25;

    // Movimiento suave que cambia con el tiempo (viento)
    let inclinacion = sin(frameCount * 0.04) * 2;

    for (let j = 0; j < ramas; j++) {
      let y = base + j * (alto / ramas);
      let x1 = centro - j * inclinacion;
      let x2 = centro + j * inclinacion;
      line(centro, y, x1, y - 5);
      line(centro, y, x2, y - 5);
    }
  }

  // Sol/luna
  if (mostrarSol) {
    stroke(180);
    let cx = width - 70;
    let cy = 70;
    for (let r = 20; r <= 50; r += 5) {
      for (let a = 0; a < 360; a += 15) {
        let x1 = cx + cos(radians(a)) * r;
        let y1 = cy + sin(radians(a)) * r;
        let x2 = cx + cos(radians(a + 10)) * r;
        let y2 = cy + sin(radians(a + 10)) * r;
        line(x1, y1, x2, y2);
      }
    }
  }
}
