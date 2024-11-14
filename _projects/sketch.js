var cancion; 

  function preload() {
  cancion = loadSound("sound");
  }

  function mouseClicked() {
    if (cancion) {
    cancion.loop();
  }
}

function setup() {
  createCanvas(500,500, WEBGL);
  background(0);
}


function draw() {
  
  orbitControl();
  
  
  //box
  push();
  translate(0, 0, 0);
  rotateX(frameCount * -0.005);
  rotateY(frameCount * -0.005);
  //rotateZ(frameCount * 0.01);  torus(150,40);
    push();
    stroke(20,0,30);
    torus(150,40);
    pop();
  noStroke();
  fill(20,0,30);
  box(800,800);//Parámetros: radio exterior, radio interior
  pop();
  
  stroke(20,0,30);
  //dona 1
  push();
  translate(0, 0, 0);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  torus(800,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 2
  push();
  translate(0, 0, 0);
  rotateX(frameCount * -0.001);
  //rotateY(frameCount * 0.01);
  rotateZ(frameCount * -0.001);
  torus(700,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 3
  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  //rotateZ(frameCount * -0.005);
  torus(600,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 4
  push();
  translate(0, 0, 0);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * -0.005);
  rotateZ(frameCount * -0.005);
  torus(500,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 5
  push();
  translate(0, 0, 0);
  rotateX(frameCount * 0.005);
  //rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.005);
  torus(400,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 6
  push();
  translate(0, 0, 0);
  rotateX(frameCount * -0.005);
  rotateY(frameCount * -0.005);
  //rotateZ(frameCount * 0.01);
  torus(300,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 7
  push();
  translate(0, 0, 0);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(200,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //dona 8
  push();
  translate(0, 0, 0);
  rotateX(frameCount * -0.01);
  //rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  torus(100,40);//Parámetros: radio exterior, radio interior
  pop();
  
  //esfera
  push();
  translate(0, 0, 0);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  //sphere(40);//Parámetros: radio
  sphere(20);//Parámetros: radio
  sphere(5);
  pop();
  
  sphere(20);
  sphere(5);
  
}