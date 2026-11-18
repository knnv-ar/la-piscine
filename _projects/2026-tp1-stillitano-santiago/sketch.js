//                /\
//   _            \/            _
//  (___________/\/\/\___________)
//
//      genesis - luz - mala
//   santiago stillitano am1 tp1
//   ___________      ___________
//  (_          \/\/\/          _)
//                /\
//                \/

let espacio = 8;
let separacion = 6;

let anguloCuadrado = 0.0;
let anguloCirc1 = 0.0;
let anguloCirc2 = 0.0;

let semillaColor;

let velocidadMovimiento = 0.1;

let semillaLuz1;
let semillaLuz2;

function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch'); 
  frameRate(30);
  semillaColor = random(1000);
  semillaLuz1 = random(0, 111);
  semillaLuz2 = random(400, 512);

  //ruido
  strokeWeight(1);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    stroke(random(255), 25);
    line(x, y, x + random(1, 4), y);
  }
}

function draw() {
  background(10);

  // fondo profundidad
  push();
  translate(0, 250);
  strokeWeight(1);
  stroke(255, 100);
  for (let i = 30; i <= 250; i += 5) {
    line(120, i, 250, i);
  }
  noFill();

  for (let i = 30; i <= 250; i += 5) {
    let medio = 140;
    let distancia = medio - i;
    let desv = distancia * 0.4;

    bezier(250, i, 300, i + desv, 350, i + desv, 400, i);
  }
  for (let i = 30; i <= 250; i += 5) {
    line(400, i, 500, i);
  }

  pop();

  // motorcito del movimiento //
  // --- torres cuadrados --- //
  if (frameCount % 90 == 0) {
    if (random(1) < 0.5) {
      velocidadMovimiento += 0.01;
    } else {
      velocidadMovimiento -= 0.01;
    }
  }
  if (velocidadMovimiento < 0.01) {
    velocidadMovimiento = 0.01;
  }
  if (velocidadMovimiento > 0.06) {
    velocidadMovimiento = 0.06;
  }

  anguloCuadrado += velocidadMovimiento;

  noStroke();
  //  fill(255, 123);

  //torre derecha 1
  let inicioX1 = 403;
  for (let x = 0; x < 4; x++) {
    let desfasajeX = sin(anguloCuadrado + x * 0.4) * 25;
    let cuentaX = x * 13.1 + semillaColor * 15.3;

    for (let y = 40; y < 512; y += 20) {
      let caos = sin(cuentaX + y * 0.7);

      let aleatorioFijo = (caos + 1) / 0.5;
      let grisAleatorio = map(aleatorioFijo, 0, 1, 160, 215);
      fill(grisAleatorio, 123);

      rect(inicioX1 + x * 20 + desfasajeX, y, 16, 16);
    }
  }
  //torre derecha 2
  let inicioX2 = 360;
  for (let x = 0; x < 4; x++) {
    let desfasajeX = sin(-anguloCuadrado + x * 0.4) * 25;

    let cuentaX = x * 27.4 + semillaColor * 42.1;

    for (let y = 55; y < 512; y += 20) {
      let caos = sin(cuentaX + y * 0.9);
      let aleatorioFijo = (caos + 1) / 0.5;
      let grisAleatorio = map(aleatorioFijo, 0, 1, 150, 210);
      fill(grisAleatorio, 150);

      rect(inicioX2 + x * 20 + desfasajeX, y, 16, 16);
    }
  }

  // fin movimiento s s s s //

  stroke(255);
  strokeWeight(1.5);
  noFill();

  //torre derecha 3 cuadrados
  rectMode(CENTER);
  let centroX = 390;
  let centroY = 320;
  for (let i = 20; i < 110; i += separacion * 2) {
    rect(centroX, centroY, i, i);
  }
  rectMode(CORNER);

  //torre 3 lineas
  for (let i = 172; i <= 275; i += separacion) {
    line(338, i, 444, i);
  }
  for (let i = 342; i <= 512; i += separacion) {
    line(338, i, 444, i);
  }

  //puentes lineas
  for (let i = 214; i <= 274; i += separacion) {
    line(122, i, 338, i);
  }
  for (let i = 342; i <= 402; i += separacion) {
    line(122, i, 338, i);
  }

  strokeWeight(0.7);
  //torre cruces
  // fill(255);
  for (let y = 160; y <= 512; y += espacio) {
    for (let x = 30; x <= 118; x += espacio) {
      line(x - 3, y - 3, x + 3, y + 3);
      line(x + 3, y - 3, x - 3, y + 3);
    }
  }
  strokeWeight(1.5);

  // torre central lineas
  for (let i = 190; i <= 260; i += 5) {
    line(i, 110, i, 512);
  }

  // CIRCULO ---------

  let intensidadTemblor = 6; // + alto mas locotron

  //variables randomizando temblores intensos
  let temblorX = random(-intensidadTemblor, intensidadTemblor);
  let temblorY = random(-intensidadTemblor, intensidadTemblor);
  let flotarX = sin(anguloCirc1) * 60;
  let flotarY = cos(anguloCirc1 * 0.7) * 60;
  anguloCirc1 += 0.02;

  fill(255, 20);
  stroke(220);
  strokeWeight(2);
  circle(100 + flotarX + temblorX, 150 + flotarY + temblorY, 100);

  // CIRCULO 2 ---------

  //variables randomizando temblores intensos
  let temblor2X = random(-intensidadTemblor, intensidadTemblor);
  let temblor2Y = random(-intensidadTemblor, intensidadTemblor);
  let flotar2X = sin(anguloCirc2 * 0.8) * 40;
  let flotar2Y = cos(anguloCirc2) * 40;
  anguloCirc2 += 0.05;

  noFill();
  stroke(200);
  strokeWeight(2);
  circle(
    width - 100 + flotar2X + temblor2X,
    height - 200 + flotar2Y + temblor2Y,
    80
  );
  // QUIZAS LA LUZ MALA
  stroke(255);
  strokeWeight(1);
  for (let i = semillaLuz1; i <= semillaLuz2; i += 6) {
    line(120, 214, 214, i);
  }
  //inter
 /* strokeWeight(2);
  for (let i = 0; i < 400; i++) {
    let x = random(width);
    let y = random(height);
    let opacidad = random(10, 40);
    stroke(random(255), 35);
    point(x, y);
  } */
  /*strokeWeight(1);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    stroke(random(255), 25);
    line(x, y, x + random(1, 4), y);
  } */
}
