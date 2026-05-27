let particles = [];
let cols;
let rows;
let flowfield = [];
let zoff = 0;

let flag = true;
let subdivision = 10;
let magnitude = 0.3;
let maxSpeed = 2;
let multiplier;
let particleColor;
let zInc = 0.0005;

document.oncontextmenu = function () {
  return false;
};

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("div-sketch");

  multiplier = TWO_PI * 4;
  particleColor = color(random(10, 170), random(10));
  cols = width / subdivision;
  rows = height / subdivision;

  for (let i = 0; i < 3000; i++) {
    particles.push(new Particle());
  }

  background(240);
}

function draw() {
  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
      angle = noise(xoff, yoff, zoff) * multiplier;
      let v = p5.Vector.fromAngle(angle, magnitude);
      let index = x + y * cols;
      flowfield[index] = v;
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  zoff += zInc;

  for (let particle of particles) {
    particle.follow(flowfield);
    particle.show(particleColor);
    particle.update(maxSpeed);
  }

  if (!flag) background(230, random(5));
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  limits() {
    if (this.position.x < 0) this.position.x = width;
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
  }

  show(color) {
    strokeWeight(4);
    stroke(color);
    point(this.position.x, this.position.y);
  }

  follow(flowfield) {
    let x = floor(this.position.x / subdivision);
    let y = floor(this.position.y / subdivision);
    let index = x + y * cols;
    let force = flowfield[index];
    this.acceleration.add(force);
  }

  update(speed) {
    this.limits();
    this.position.add(this.velocity);
    this.velocity.limit(speed);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }
}

function mousePressed() {
  flag ? (flag = false) : (flag = true);
  if (!flag) {
    subdivision = 20;
    zInc = 0.00001;
    multiplier = TWO_PI;
    magnitude = 2;
    maxSpeed = 1;
    particleColor = color(0, random(200, 255));
  } else {
    background(240, 20);
    zInc = 0.0005;
    subdivision = 10;
    multiplier = TWO_PI * 4;
    magnitude = 0.3;
    maxSpeed = 2;
    particleColor = color(random(10, 170), random(10));
  }
}
