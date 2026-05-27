let x = 0;
let y = 0;
let espacio = 100;

function setup() {
let canvas = createCanvas(512, 512)  
canvas.parent('div-sketch');
  background(0);
  stroke(255);
  strokeWeight(2);
  frameRate(30);
}

function draw() {
  if (y < height) {
    if (random(1) < 0.25) {
      line(x, y, x + espacio, y + espacio);
    } else {
      line(x, y + espacio, x + espacio, y);
    }

    x += espacio;

    if (x >= width) {
      x = 0;
      y += espacio;
    }
  } else {
    background(0);
    espacio = int(random(40, 160));
    x = 0;
    y = 0;
  }
}
