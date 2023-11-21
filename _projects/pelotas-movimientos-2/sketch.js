//Camila Navarro 2023

let fondo, pelota, sonido, gol, grito;
let posZ;

function preload() {
  fondo = loadImage("cesped.jpeg");
  pelota = loadImage("textura1.png");
  sonido = loadSound("gente.mp3");
  gol = loadImage("gool.png");
  grito = loadSound("gol.mp3");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  sonido.loop();
}

function draw() {
  background(255);

  // Set the ambient light
  ambientLight(255);

  // Display the background image
  image(fondo, -300, -300, width, height);

  posZ = frameCount;

  // Pelota 1
  push();
  translate(1, -50, posZ * 1);
  texture(pelota);
  rotateY(frameCount * 0.1);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 2
  push();
  translate(100, 200, posZ * 0.2);
  rotateY(frameCount * 0.1);
  rotateX(frameCount * 0.01);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

    // Pelota 2
  push();
  translate(100, 200, posZ * 0.2);
  rotateY(frameCount * 0.1);
  rotateX(frameCount * 0.01);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 3
  push();
  translate(-100, 100, posZ * 0.3);
  rotateY(frameCount * 0.1);
  rotateX(frameCount * 0.01);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 4
  push();
  translate(-200, 200, posZ * 0.4);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 5
  push();
  translate(300, 100, posZ * 0.5);
  rotateY(frameCount * 0.0001);
  rotateX(frameCount * 0.02);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 6
  push();
  translate(-100, -100, posZ * 0.5);
  rotateY(frameCount * 0.00001);
  rotateX(frameCount * 0.02);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();

  // Pelota 7
  push();
  translate(-200, -200, posZ * 0.5);
  rotateY(frameCount * 0.1);
  rotateX(frameCount * 0.002);
  texture(pelota);
  if (mouseIsPressed) {
    texture(gol);
  }
  noStroke();
  sphere(60);
  pop();
}

function mousePressed() {
  grito.play();
  sonido.stop();
}

function mouseReleased() {
  grito.stop();
  sonido.play();
}