let temblor = 0.8;

let numPetalos = 12;
let longitudPetaloBase = 100;
let faseAnimacion = 0;
let grosorLinea = 2;

function setup() {
  createCanvas(512, 512);
  background(0);
  frameRate(30);
  colorMode(RGB);
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  push();
  translate(random(-temblor, temblor), random(-temblor, temblor));

  translate(width / 2, height / 2);

  stroke(255);
  strokeWeight(grosorLinea);
  noFill();

  for (let i = 0; i < numPetalos; i++) {
    push();
    
    rotate(i * (TWO_PI / numPetalos) + faseAnimacion * 0.05);

    beginShape();
    vertex(0, 0);

    let x1 = longitudPetaloBase * 0.5;
    let y1 = sin(frameCount * 0.02 + i * 0.5) * 10 + random(-5, 5);
    vertex(x1, y1);

    let x2 = longitudPetaloBase;
    let y2 = sin(frameCount * 0.03 + i * 0.7) * 15 + random(-8, 8);
    vertex(x2, y2);

    let x3 = longitudPetaloBase * 0.8 + sin(frameCount * 0.04 + i * 0.9) * 5 + random(-3, 3);
    let y3 = longitudPetaloBase * 0.2 + cos(frameCount * 0.04 + i * 0.9) * 5 + random(-3, 3);
    vertex(x3, y3);

    endShape();

    strokeWeight(grosorLinea * 0.5);
    line(x1, y1, x1 + random(-10, 10), y1 + random(-10, 10));
    line(x2, y2, x2 + random(-15, 15), y2 + random(-15, 15));

    pop();
  }

  faseAnimacion += 0.01;

  pop();
}