// Encierro Tello Pilar

const objects = [];
let eyeZ;
var persona;

function preload() {

  persona=loadModel('running-woman.obj', true);
}

function setup() {
  let canvas = createCanvas(710, 400, WEBGL);
  canvas.parent('div-sketch');

  eyeZ = height / 2 / tan((30 * PI) / 180); 

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); 
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); 
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); 
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); 
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); 

  noStroke();
  ambientMaterial(230);
}

function draw() {
  cuarto()
  
    
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  
  push()

  translate(1,30,150 );
   scale(0.4);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.0);
  rotateZ(3.1);
 //normalMaterial( );
  fill(120, 0, 124)
  noStroke()
  model(persona)
  pop()
  mujer()
}

function mujer(){
 
}
function cuarto(){
   background(0);

  // Lights
  pointLight(150, 0, 24, 100, 20, 100);
  ambientLight(203, 50, 52, 30 );
  // Left wall
  push();
  translate(-100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(1100, 200);
  pop();

  // Right wall
  push();
  translate(100, 0, 200);
  rotateY((90 * PI) / 180);
  plane(1100, 200);
  pop();

  // Bottom wall
  push();
  translate(0, 100, 200);
  rotateX((90 * PI) / 180);
  plane(200, 1100);
  pop();

  // Top wall
  push();
  translate(0, -100, 200);
  rotateX((90 * PI) / 180);
  plane(200, 1100);
  pop();

  plane(100, 100); 

 
  
}
// Class for a plane that extends to infinity.
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); 
    this.point = createVector(p1, p2, p3); 
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
  }
}
