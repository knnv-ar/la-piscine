let t = 0;
let tDir = 1;
let maxRandom = 10;
let expandiendo = true;
let figConstante = figConstanteInicial = 2;
let r = 40;
let rDir = 1;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noStroke();
  frameRate(10);
}

function draw() {
  background(20, 60);

  //Figura constante
  for (let i = 0; i < 150; i++) {
    let ang = (TWO_PI / 150) * i + t;
    let radio = 100 + r * sin(t + i * figConstante);

    let x = width / 2 + sin(ang) * radio;
    let y = height / 2 + cos(ang) * radio;

    fill(random(200, 255));
    ellipse(x, y, 7, 7);
  }
  
  //Nodos que se propagan
  for (let i = 0; i < 200; i++) {
    let x1 = width / 2 + sin(t + i) * random(5, maxRandom);
    let y1 = height / 2 + cos(t + i) * random(5, maxRandom);

    let diametro = random(3, 8);

    noStroke();
    fill(random(180, 255));
    ellipse(x1, y1, diametro, diametro);
  }

  //Líneas de conexión
  if (expandiendo && maxRandom >= 140 || !expandiendo && maxRandom >= 100) {
    stroke(255, 50);
    let factorLongitud = map(maxRandom, 110, 180, 0.4, 0.95);

    for (var y = 15; y <= height - 15; y += 40) {
      for (var x = 15; x <= width - 15; x += 40) {
        let x2 = lerp(x, width / 2, 1 - factorLongitud);
        let y2 = lerp(y, height / 2, 1 - factorLongitud);

        line(random(x-30, x), random(y-30, y), x2, y2);
      }
    }
  }
  
  // Expansión y contracción de nodos
  if (expandiendo) {
    maxRandom += 2;
    if (maxRandom >= 155) expandiendo = false;
  } else {
    maxRandom -= 2;
    if (maxRandom <= 15) expandiendo = true;
  }

  // Cambio dirección de rotación de figura
  t += 0.02 * tDir;
  if (t > 4) tDir = -1;
  if (t < 0) tDir = 1;

  // Cambio de forma de figura
  if (frameCount % 50 === 0)
    figConstante += 0.2;
  if (figConstante > 3.2) figConstante = figConstanteInicial;

  // Cambio de tamaño de figura
  if (frameCount % 3 === 0)
    r += 4 * rDir;
  if (r > 70) rDir = -1;
  if (r < 20) rDir = 1;
}