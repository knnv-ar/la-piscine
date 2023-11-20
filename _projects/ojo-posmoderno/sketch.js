let angulo = 0;
let totalesferasexterior1 = 10;
let totalesferasexterior2 = 16;
let totalesferasexterior3 = 22;
let totalesferasexterior4 = 28;
let radioesferainterior = 80;
let radioesferaexterior1 = 150;
let radioesferaexterior2 = 250;
let radioesferaexterior3 = 350;
let radioesferaexterior4 = 450;

var cam_x = 0;
var cam_y = 0;
var cam_z = 0;

function preload() {
  img = loadImage("img/ojo.png");
  video = createCapture(VIDEO);
  video.hide();
  sonido = loadSound("sonido/sonido.mp3");
}

function setup() {
  let canvas = createCanvas(600, 800, WEBGL);
  canvas.parent('div-sketch');
}

function mousePressed() {
  cam_x = random(-1000, 1000);
  cam_y = random(-1000, 1000);
  cam_z = random(-5000, 5000);

  camera(cam_x, cam_y, cam_z);

  mouseDragged();
  sonido.pan(random(-1, 1));
  sonido.loop();
}

function mouseReleased() {
  camera(0, 0, 700);
  sonido.stop();
}

function mouseDragged() {
  let deltaX = pmouseX * 5;
  let deltaY = pmouseY * 5;
  camera(deltaX, deltaY, cam_z);
}

function draw() {
  background(0);
  ambientLight(30);
  directionalLight(255, 255, 255, 15, 10, -100);

  // Luz amarilla en el centro
  pointLight(255, 255, 0, 0, 0, 0);

  // Esfera interior
  push();
  translate(0, 0, 0);
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * -0.05);
  fill(138, 43, 226); // Violeta
  textureMode(NORMAL);
  texture(video);
  noStroke();
  sphere(55);
  pop();

  // Calcular posiciones para las esferas exteriores
  for (let i = 0; i < totalesferasexterior1; i++) {
    let anguloexterior1 = (TWO_PI / totalesferasexterior1) * i;
    let x_1 = radioesferaexterior1 * cos(angulo - anguloexterior1);
    let y_1 = radioesferaexterior1 * sin(angulo - anguloexterior1);
    let z_1 = 0;

    push();
    translate(x_1, y_1, z_1);
    rotateY(frameCount * 0.02);
    fill(138, 43, 226); // Violeta
    //textureMode(NORMAL);
    // texture(img);
    noStroke();
    sphere(55);
    pop();
  }

  // Calcular posiciones para el grupo de esferas más alejadas (grupo medio)
  for (let i = 0; i < totalesferasexterior2; i++) {
    let anguloexterior2 = (TWO_PI / totalesferasexterior2) * i;
    let x_2 = radioesferaexterior2 * cos(angulo + anguloexterior2);
    let y_2 = radioesferaexterior2 * sin(angulo + anguloexterior2);
    let z_2 = 0;

    push();
    specularMaterial(35);
    translate(x_2, y_2, z_2);
    rotateY(frameCount * -0.01);
    fill(138, 43, 226); // Violeta
    //textureMode(NORMAL);
    // texture(img);
    noStroke();
    sphere(55);
    pop();
  }

  // Calcular posiciones para el grupo de esferas más alejadas (grupo lejano)
  for (let i = 0; i < totalesferasexterior3; i++) {
    let anguloexterior3 = (TWO_PI / totalesferasexterior3) * i;
    let x_3 = radioesferaexterior3 * cos(angulo + anguloexterior3);
    let y_3 = radioesferaexterior3 * sin(angulo + anguloexterior3);
    let z_3 = 0;

    push();
    translate(x_3, y_3, z_3);
    rotateZ(frameCount * 0.01);
    fill(138, 43, 226); // Violeta
    noStroke();
    sphere(55);
    pop();
  }

  // Calcular posiciones para el grupo de esferas más alejadas (grupo más lejano)
  for (let i = 0; i < totalesferasexterior4; i++) {
    let anguloexterior4 = (TWO_PI / totalesferasexterior4) * i;
    let x_4 = radioesferaexterior4 * cos(angulo + anguloexterior4);
    let y_4 = radioesferaexterior4 * sin(angulo + anguloexterior4);
    let z_4 = 0;

    push();
    specularMaterial(50);
    translate(x_4, y_4, z_4);
    rotateZ(frameCount * -0.01);
    fill(138, 43, 226); // Violeta
    noStroke();
    sphere(55);
    pop();
  }

  angulo += 0.01; // Velocidad de rotación del círculo
}
