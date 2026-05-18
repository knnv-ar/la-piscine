let theta = 1;
let outerSphereSize = 150;
let expanding = false;
let innerPrimitive;

function setup() {
  createCanvas(710, 400, WEBGL);
  let canvas = createCanvas(710, 400,WEBGL);
 canvas.parent('div-sketch');
  // Set a fixed random seed for consistency
  randomSeed(1);
  createInnerPrimitive();
}

function draw() {
  background("black");

  // Directional light to illuminate the scene
  directionalLight(255, 255, 255, 0, 0, -1);

  // Outer sphere following the mouse
  push();
  translate(0, 0, -500);
  background("black");
  ambientLight(0);
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  emissiveMaterial("rgb(99,99,99)");

  // Control the expansion of the outer sphere
  if (expanding && outerSphereSize < 900) {
    outerSphereSize += 5;
  }

  // Draw the outer sphere
  sphere(outerSphereSize);

  // Draw and expand the inner primitive
  innerPrimitive.expand();
  innerPrimitive.display();

  pop();

  // Rotate an additional shape
  translate(440, 0, 0);
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  // Draw an additional shape (you can replace this with any other shape you want)
  innerPrimitive.drawPrimitive();
  theta += 0.01;
}

function mousePressed() {
  expanding = true;
  createInnerPrimitive(mouseX, mouseY);
}

function createInnerPrimitive(x, y) {
  innerPrimitive = new InnerRandomPrimitive(x, y);
}

class InnerPrimitive {
  constructor(x, y) {
    this.size = random(10, 30);
    this.position = createVector(x, y);
  }

  expand() {
    // Control the expansion of the inner primitive
    if (expanding && outerSphereSize >= 900 && this.size < outerSphereSize) {
      this.size += 5;
    }
  }

  display() {
    // Draw the inner primitive
    push();
    translate(this.position.x - width / 2, this.position.y - height / 2, 0);
    ambientMaterial(0, 0, 255); // Color of the inner primitive (blue)
    this.drawPrimitive();
    pop();
  }

  isOutside(outerSphereRadius) {
    // Check if the inner primitive is outside the outer sphere
    let distance = dist(0, 0, 0, this.position.x - width / 2, this.position.y - height / 2, 0);
    return distance > outerSphereRadius;
  }

  // Abstract method for drawing the specific primitive
  drawPrimitive() {
    // To be implemented by subclasses
  }
}

class InnerRandomPrimitive extends InnerPrimitive {
  constructor(x, y) {
    super(x, y);
    this.generateRandomPrimitive();
  }

  generateRandomPrimitive() {
    // Generate a random primitive (you can add more shapes as needed)
    let primitiveType = floor(random(3));
    switch (primitiveType) {
      case 0:
        this.drawPrimitive = () => sphere(this.size);
        break;
      case 1:
        this.drawPrimitive = () => box(this.size);
        break;
      case 2:
        this.drawPrimitive = () => torus(this.size / 2, this.size / 4);
        break;
    }
  }
}
