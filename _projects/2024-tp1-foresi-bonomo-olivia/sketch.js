function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(240);
  frameRate(10);

  stroke(100);
  noFill();

  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(20, 50);
    let h = random(20, 50);
    let rotacion = random(TWO_PI);

    push();
    translate(x, y);
    rotate(rotacion);
    rect(0, 0, w, h);
    pop();
  }
}

function draw() {
  for (let i = 0; i < 10; i++) {
    stroke(0, random(100, 200));
    beginShape();
    vertex(random(width), random(height));
    bezierVertex(
      random(width),
      random(height),
      random(width),
      random(height),
      random(width),
      random(height)
    );
    endShape();
  }
}
