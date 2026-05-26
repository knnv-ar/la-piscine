let piel, piel2, imgfondo;
let baile = false;
let danceTime = 0;
let angleOffset = 0;
let rotationAngle = 0;
let cambioFondo = false; // controla si imgfondo debe mostrarse como textura o no

function preload() {
  piel = loadImage("img/skin.jpg");
  piel2 = loadImage("img/skin-2.jpg");
  imgfondo = loadImage("img/brain.jpg");
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
  background(100);
}

function draw() {
  background(100);
  ambientLight(255);

  let roomSize = 400;

  //Dibujar habitación con o sin textura dependiendo de cambioFondo
  
  //Piso
  push();
  fill(230);  
  if (cambioFondo) {
    texture(imgfondo);
  }
  translate(0, roomSize / 2, 0);
  rotateX(HALF_PI);
  plane(roomSize, roomSize);
  pop();
  
  
  // Techo
  push();
  fill(250);
  if (cambioFondo) {
    texture(imgfondo);
  }
  translate(0, -roomSize / 2, 0);
  rotateX(HALF_PI);
  plane(roomSize, roomSize);
  pop();
  
  //Pared Fondo
  push();
  fill(240);
  if (cambioFondo) {
    texture(imgfondo);
  }
  translate(0, 0, -roomSize / 3);
  plane(roomSize, roomSize);
  pop();
  
  //Pared derecha
  push();
  fill(245);
  if (cambioFondo) {
    texture(imgfondo);
  }
  translate(roomSize / 2, 0, 0);
  rotateY(HALF_PI);
  plane(roomSize, roomSize);
  pop();
  
  //Pared izquierda
  push();
  fill(245);
  if (cambioFondo) {
    texture(imgfondo);
  }
  translate(-roomSize / 2, 0, 0);
  rotateY(HALF_PI);
  plane(roomSize, roomSize);
  pop();
  
  noStroke();
  texture(piel);

  //si mouse presionado: titere baila y el habitacion cambia
  if (mouseIsPressed) {
    baile = true;
    danceTime += 0.2;
    cambioFondo = true;
    directionalLight(150, 75, 100, 0, 1, 0); // luz rosa
  } else {
    //si el mouse no esta presionado: no baila ni cambia la habitacion
    baile = false;
    danceTime = 0;
    cambioFondo = false;
    directionalLight(200, 200, 200, 0, 1, 0); // luz blanca
  }

  let danceOffsetX = cos(danceTime) * 5;
  let danceOffsetY = sin(danceTime) * 5;

  rotationAngle += 0.02;

  push();
  translate(danceOffsetX, danceOffsetY, 0);
  rotateY(rotationAngle);
  scale(0.7);

  // CABEZA
  push();
  translate(0, -150, 10);
  sphere(40);
  pop();

  // CUELLO
  push();
  translate(0, -110, 0);
  cylinder(10, 20);
  pop();

  // TORSO
  push();
  translate(0, -40, 0);
  box(60, 120, 40);
  pop();

  // Brazo Derecho
  let rightArmAngle = sin(angleOffset + danceTime) * 0.1;
  push();
  rotateZ(rightArmAngle);

  push();
  texture(piel2);
  translate(-30, -90, 10);
  sphere(12);
  pop();

  push();
  translate(-50, -48, 10);
  rotateZ(HALF_PI / 4);
  cylinder(10, 90);
  pop();
  pop();

  // Brazo izquierdo
  let leftArmAngle = sin(angleOffset + danceTime + PI) * 0.1;
  push();
  rotateZ(leftArmAngle);
  
  push();
  texture(piel2);
  translate(30, -90, 10);
  sphere(12);
  pop();

  push();
  translate(50, -48, 10);
  rotateZ(-HALF_PI / 4);
  cylinder(10, 90);
  pop();
  pop();

  // Pierna Derecha
  let rightLegAngle = sin(danceTime) * 0.2;
  
  push();
  texture(piel2);
  translate(-25, 20, 0);
  rotateX(rightLegAngle);
  sphere(12);
  pop();

  push();
  translate(-25, 80, 10);
  rotateX(HALF_PI / 8 + rightLegAngle);
  cylinder(12, 120);
  pop();

  
  // Pierna Izquierda
  let leftLegAngle = sin(danceTime + PI) * 0.2;
  
  push();
  texture(piel2);
  translate(25, 20, 0);
  rotateX(leftLegAngle);
  sphere(12);
  pop();

  push();
  translate(25, 80, -10);
  rotateX(-HALF_PI / 8 + leftLegAngle);
  cylinder(12, 120);
  pop();
}