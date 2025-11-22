let coso;
let cols, rows;
let densidad = 25;
let w = 1200;
let h = 800;
let velocidadOndulacion = 1;

// variables para el cambio de ángulo
let anguloActual = 1;
let tiempoCambio = 5000; // 5 segundos
let ultimoCambio = 0;

function setup() {
  let canvas = createCanvas(700, 350, WEBGL);
  canvas.parent('div-sketch');

  coso = createGraphics(width, height, WEBGL);

  cols = w / densidad;
  rows = h / densidad;
}

function draw() {
  background(255, 120, 10, 100);

  // cada 5s cambia el ángulo del eje x
  if (millis() - ultimoCambio > tiempoCambio) {
    anguloActual++;
    if (anguloActual > 6) anguloActual = 1;
    ultimoCambio = millis();
  }

  let margen = 10;
  imageMode(CENTER);
  image(coso, 0, 0, width - margen * 2, height - margen * 2);

  dibujarOlas();
}

function dibujarOlas() {
  velocidadOndulacion -= 0.01;
  let yoff = velocidadOndulacion;

  coso.push();
  coso.background(130, 30, 205);

  // cambio de angulo cada 5s
  coso.rotateX(PI / anguloActual);

  // giro y
  coso.rotateY(frameCount * 0.008);

  coso.translate(-w / 2, -h / 2);
  coso.fill(35, 250, 160, 100);

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let z = map(noise(xoff, yoff), 0, 1, -120, 120);

      coso.push();
      coso.translate(x * densidad, y * densidad, -z / 2);
      coso.box(densidad * 0.85, densidad * 0.85, z);
      coso.pop();

      xoff += 0.08;
    }
    yoff += 0.08;
  }

  coso.pop();
}
