let x, y, z, espacio, filas, colum, dentro;
let ancho, alto, profundidad;
let rotacionX, rotacionY;
let camX, camY, camZ;

// variables para las texturas
let fondo, codigo2;

function preload() {
  fondo = loadImage("fondo.png");
  codigo2 = loadImage("codigoo.png");
  synth = loadSound("synth.mp3");
}

function setup() {
  createCanvas(500, 500, WEBGL);
  synth.loop();
  // Tamaño de los cuadrados
  let cube = 300;

  x = cube;
  y = cube;
  z = cube;

  espacio = 210;

  filas = 3;
  colum = 4;
  dentro = 4;

  rotacionX = 0;
  rotacionY = 0;
  camX = 0;
  camY = 0;
  camZ = 1000;

  ancho = x * (colum - 1);
  alto = y * (filas - 1);
  profundidad = z * (dentro - 1);
}

function draw() {
  background(0);

  // dibuja la esfera con la textura de "fondo"
  push();
  rotateY(frameCount * 0.005);
  translate(0, 0, -width / 2);
  texture(fondo);
  sphere(width * 4);
  pop();

  orbitControl();

  // cubo del centro
  push();
  translate(0, 0, -z / 2 + espacio);
  texture(codigo2);
  box(150);
  pop();

  // configuración de la cámara
  camera(camX, camY, camZ, 0, 0, 0, 0, 3, 0);

  // rotación y traslación de la escena
  rotateX(rotacionX);
  rotateY(rotacionY);
  translate(-ancho / 2, -alto / 2, profundidad / 2);

  // configuración de luces y dibujo de cubos
  fill(255);
  noStroke();

  directionalLight(255, 0, 0, width, -height, 0.05);
  directionalLight(255, 255, 0, -width, height, 0.05);
  directionalLight(255, 0, 255, -width, -height, 0.05);
  directionalLight(128, 128, 0, width, height, 0.05);

  // proceso de dibujo de cubos
  for (let i = 0; i < colum; i++) {
    // columnas
    push();
    translate(x * i, 0, 0);

    for (let j = 0; j < filas; j++) {
      // filas
      push();
      translate(0, y * j, 0);

      for (let k = 0; k < dentro; k++) {
        // cubos del interior
        push();
        translate(0, 0, z * k - profundidad);
        specularMaterial(255);
        box(x - espacio, y - espacio, z - espacio);
        pop();
      }
      pop();
    }
    pop();
  }

  // incremento de la rotación para la animación
  rotacionX += 0.005;
  rotacionY += 0.005;
}

// ruedita para hacer zoom in-zoom out
function mouseWheel(event) {
  let factor = event.delta * 0.01;
  let deltaX = factor * cos(rotacionY);
  let deltaY = factor * sin(rotacionY);
  camX += deltaX;
  camY += deltaY;
  camZ += event.delta;
}

function mouseDragged() {
  // controla la rotación de la escena con el mouse
  rotacionX -= (pmouseY - mouseY) * 0.01;
  rotacionY += (pmouseX - mouseX) * 0.01;

  // controla la posición de la cámara con el mouse
  camX += (pmouseX - mouseX) * 2;
  camY += (pmouseY - mouseY) * 2;
}

// zoom in zoom out con teclas + y - 
function keyPressed() {
  if (key === "+") {
    camZ -= 100;
  } else if (key === "-") {
    camZ += 100;
  }
}
