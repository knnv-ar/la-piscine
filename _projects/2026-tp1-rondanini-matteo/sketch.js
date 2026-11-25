// TP 1 - Vortice de estrella
// Inspiraciones: Ben F. Laposky con "el rastro fantasma" del  fondo de mi estrella recreando el brillo que deja una estela de luz gris parecida a los tubos de rayos catódicos que usaba Laposky

let anguloEstrella = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(10);
}

function draw() {
  background(10, 15);

  push();
  translate(width / 2, height / 2);
  rotate(anguloEstrella);

  let respiracion = sin(frameCount * 0.03) * 30;
  let radioExterior = 120 + respiracion;
  let radioInterior = 50 + sin(frameCount * 0.05) * 15;

  stroke(180);
  strokeWeight(1.5);
  noFill();

  beginShape();
  for (let i = 0; i < 10; i++) {
  
    let vueltaCompleta = 2 * 3.1415;
    let anguloVertice = (vueltaCompleta / 10) * i;

    let radioActual = (i % 2 === 0) ? radioExterior : radioInterior;

    let x = cos(anguloVertice) * radioActual;
    let y = sin(anguloVertice) * radioActual;

    vertex(x, y);
  }
  endShape(CLOSE);

  for (let i = 0; i < 10; i += 2) {
    let vueltaCompleta = 2 * 3.1415;
    let anguloVertice = (vueltaCompleta / 10) * i;

    let x = cos(anguloVertice) * radioExterior;
    let y = sin(anguloVertice) * radioExterior;

    stroke(80);
    line(0, 0, x, y);
  }
  pop();

  anguloEstrella += 0.01;
}