function setup() {
  let canvas = createCanvas(520, 520);
  canvas.parent('div-sketch');
}

function draw() {
  background(0, 3);

  translate(width / 2, height / 2);

  stroke(210);
  strokeWeight(15);
  noFill();

  // Estructura de repetición
  for (let i = 0; i < 8; i++) {

    // Cálculos trigonométricos
    let angulo1 = TWO_PI / 8 * i;
    let angulo2 = TWO_PI / 8 * ((i + 1) % 8);

    // Creo dos radios
    let radio1;

    if (i % 2 === 0) {
      radio1 = 180 + sin(frameCount * 0.05) * 50;
    } else {
      radio1 = 50 + sin(frameCount * 0.08) * 20;
    }

    let radio2;

    if ((i + 1) % 2 === 0) {
      radio2 = 180 + sin(frameCount * 0.05) * 50;
    } else {
      radio2 = 50 + sin(frameCount * 0.08) * 20;
    }

    let x1 = cos(angulo1) * radio1;
    let y1 = sin(angulo1) * radio1;

    let x2 = cos(angulo2) * radio2;
    let y2 = sin(angulo2) * radio2;

    line(x1, y1, x2, y2);
  }
}

