let cols = 10;
let rows = 10;
let espaciado = 51;

function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  noFill();
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  background(255);
  stroke(100);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let baseX = x * espaciado + espaciado / 2;
      let baseY = y * espaciado + espaciado / 2;

      let offsetX = random(-2, 2);
      let offsetY = random(-2, 2);
      let s = noise(x * 1, y * 1, frameCount * 0.02) * 50 + 5;

      let cx = baseX + offsetX;
      let cy = baseY + offsetY;


      beginShape();
      vertex(cx - s/2 + random(-1, 1), cy - s/2 + random(-1, 1));
      vertex(cx + s/2 + random(-1, 1), cy - s/2 + random(-1, 1));
      vertex(cx + s/2 + random(-1, 1), cy + s/2 + random(-1, 1));
      vertex(cx - s/2 + random(-1, 1), cy + s/2 + random(-1, 1));
      endShape(CLOSE);


      beginShape();
      vertex(cx - s/2 + random(-4, 4), cy - s/2 + random(-4, 4));
      vertex(cx + s/2 + random(-4, 4), cy - s/2 + random(-4, 4));
      vertex(cx + s/2 + random(-4, 4), cy + s/2 + random(-4, 4));
      vertex(cx - s/2 + random(-4, 4), cy + s/2 + random(-4, 4));
      endShape(CLOSE);
    }
  }
}

