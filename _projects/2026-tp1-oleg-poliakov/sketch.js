function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  colorMode(RGB);
  noLoop();
}

function draw() {
  background(245);
  let grid = 5;
  let cellSize = width / grid;
  let nested = 12;

  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let x = i * cellSize + cellSize / 2;
      let y = j * cellSize + cellSize / 2;

      push();
      translate(x, y);
      noFill();
      stroke(50);

      let hasError = random(1) < 0.15;
      for (let k = 1; k <= nested; k++) {
        let tam = (cellSize / (nested + 2)) * k;
        if (hasError) {
          rotate(random(-0.02, 0.02));
          let offset = random(-2, 2);
          rect(-tam / 2 + offset, -tam / 2 + offset, tam, tam);
        } else {
          rect(-tam / 2, -tam / 2, tam, tam);
        }
      }
      pop();
    }
  }