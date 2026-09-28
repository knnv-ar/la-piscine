let t = 0;
let bx = 1;
let by = 1;
let n = 255;
let g = 0.5;
let bajando = 0;
let disminuye = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch'); // OBLIGATORIA
  angleMode(RADIANS);
}

function draw() {
  background(0, 40);
  // activar para tener la figura solida
  fill(n, 180);
  noStroke();
  // activar para tener la figura transparente
  // noFill(0)
  // stroke(255)

  // eje de la forma
  let ex = width / 2;
  let ey = height / 2;

  if (bx < 256) {
    ex += random(1, 20);
    ey += random(1, 20);
  }

  // frecuencia a la que se mueven las proyecciones - cantidad de veces que repite el ciclo en x e y
  let frecuenciaX = 6;
  let frecuenciaY = 5;

  // genera la rotacion
  let fase = t;

  // tamaño de la forma
  let ampX = bx;
  let ampY = by;

  // aumenta de tamaño la forma
  if (ampX < 256 && disminuye == 0) {
    bx = bx + 0.5;
  }
  if (ampY < 256 && disminuye == 0) {
    by += 0.5;
  }

  beginShape();
  // 0.5 = 13 ejes dibujados: a va de 0 a TWO_PI y dibuja cada 0.5
  for (let a = 0; a <= TWO_PI; a += g) {
    let x = ex + ampX * sin(frecuenciaX * a + fase);
    let y = ey + ampY * sin(frecuenciaY * a);
    vertex(x, y);
  }
  endShape(CLOSE);

  // cambia la cantidad de vertices que dibuja
  if (ampX >= 256 && g <= 1 && bajando == 0) {
    g = g + 0.001;
  }

  // titila
  if (bajando == 1) {
    if (n == 255) {
      n = 0;
    } else {
      n = 255;
    }
  }

  if (g >= 1 && bajando == 0) {
    bajando = 1;
  }
  if (bajando == 1 && g >= 0.1) {
    g -= 0.001;
  }
  if (g <= 0.1 && disminuye == 0) {
    disminuye = 1;
  }
  if (disminuye == 1 && bx > 0) {
    bx = bx - 1;
    by = by - 1;
  }
  if (disminuye == 1 && bx <= 0) {
    bx = 1;
    by = 1;
    n = 255;
    g = 0.5;
    bajando = 0;
    disminuye = 0;
  }

  t += 0.07;
}
