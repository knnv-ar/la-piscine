//  Trazos
//  Am1. Tp1
//  Lucrecia Artusi

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(240);
  frameRate(15);
}

function draw() {
  if (frameCount % 600 === 0) {
    background(240);
  }

  translate(25, 25);
  scale(0.9);

  let tam = 100;
  let limite = 110;

  noFill();
  stroke(0);

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      let x1 = random(x * tam, x * tam + limite);
      let y1 = random(y * tam, y * tam + limite);
      let x2 = random(x * tam, x * tam + limite);
      let y2 = random(y * tam, y * tam + limite);

      line(x1, y1, x2, y2);
    }
  }
}
