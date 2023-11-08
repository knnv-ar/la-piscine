let tamano;
let tamanoLinea;

function setup() {
  createCanvas(512, 512);
  background(220);
}

function draw() {
  tamano = random(0, 85);

  tamanoLinea = random(1, 10);

  frameRate(10);
  translate(-40, -40);
  for (let a = 0; a <= 512; a += 85) {
    for (let b = 0; b <= 512; b += 85) {
      rectMode(CENTER);
      strokeWeight(tamanoLinea);
      stroke(map(tamano, 0, 85, 0, 255));
      fill(255);
      rect(a, b, tamano);
    }
  }
}
