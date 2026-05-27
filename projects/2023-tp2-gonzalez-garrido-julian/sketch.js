let radioInicial = 99; // Radio inicial de la esfera
let amplitud = 1; // Amplitud de la oscilación
let velocidad = 2; // Velocidad de la oscilación
let radio; // Radio actual de la esfera

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);

  rotateY(frameCount * 0.01);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      radio = radioInicial + amplitud * sin(frameCount * 0.01);
      let locX = mouseX - height / 2;
      let locY = mouseY - width / 2;

      directionalLight(0, 0, 0, 0.25, 0.25, 0);
      pointLight(0, 0, 0, locX, locY, 255);

      rotateY(frameCount * 0.01);
      push();

      specularMaterial(200);
      sphere(radio, 64, 64);
      pop();

      normalMaterial();
      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.03);
      rotateY(frameCount * 0.02);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.03);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.03);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.03);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.03);
      rotateX(frameCount * 0.03);
      rotateY(frameCount * 0.03);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.02);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.02);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.01);
      torus(80, 20, 64, 64);
      pop();
      push();
      rotateZ(frameCount * 0.02);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.02);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.03);
      torus(80, 20, 64, 64);
      pop();

      push();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.01);
      torus(80, 20, 64, 64);
      pop();
      push();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.03);
      rotateY(frameCount * 0.01);
      torus(80, 20, 64, 64);
      pop();
    }
  }
}
