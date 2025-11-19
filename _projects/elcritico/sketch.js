/*
Título: El Crítico
Autora: Mercedes Velazquez
Año: 2025

Presiona la tecla -> para cambiar de obra.
*/

//                VARIABLES
let estado = "viva"; // viva / muriendo

let monitor, enemigo;
let texturamonitor;
let obras = [];

let inicioObra = 0;
let alphaObra = 255;
let obraActual = 0;

let enemigoZ = -1000;

function preload() {
  //  Modelos
  monitor = loadModel("modelos/monitor.obj");
  enemigo = loadModel("modelos/enemigo.obj");

  //  IMG
  texturamonitor = loadImage("img/texturamonitor.PNG");

  obras = [
    loadImage("img/obra0.jpg"),
    loadImage("img/obra1.jpg"),
    loadImage("img/obra2.jpg"),
    loadImage("img/obra3.jpg"),
  ];
}

function setup() {
  let canvas = createCanvas(700, 600, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  orbitControl();
  noStroke();

  // TIEMPO: aparece enemigo a los 10 segundos
  if (frameCount - inicioObra > 600 && estado === "viva") {
    estado = "muriendo";
  }

  // LUCES
  if (estado === "viva") {
    ambientLight(255, 180, 120);
    directionalLight(255, 200, 150, 0, 0, -1);
  } else {
    ambientLight(160, 180, 255);
    directionalLight(120, 140, 255, 0, 0, -1);
  }

  // MONITOR
  push();
  translate(110, 70, 0);
  scale(125);
  rotateY(-HALF_PI);
  rotateX(PI);
  texture(texturamonitor);
  model(monitor);
  pop();

  // DESVANECIMIENTO DE OBRA
  if (estado === "muriendo") {
    alphaObra -= 0.4;
    if (alphaObra < 0) alphaObra = 0;
  }

  // OBRA
  push();
  translate(109, 70, 90);
  scale(4.5);
  tint(255, alphaObra);
  texture(obras[obraActual]);
  plane(60, 45);
  pop();

  // ENEMIGO
  if (estado === "muriendo") {
    enemigoZ += 1.8;
    dibujarEnemigo();
  }
}
function dibujarEnemigo() {
  let levitacion = sin(frameCount * 0.1) * 2;
  let rotacion = sin(frameCount * 0.03) * 0.3;

  push();
  translate(-230, 80 + levitacion, enemigoZ);
  scale(50);
  rotateY(PI + rotacion);
  rotateX(PI);
  model(enemigo);
  pop();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    obraActual++;
    if (obraActual >= obras.length) obraActual = 0;

    estado = "viva";
    alphaObra = 255;
    inicioObra = frameCount;

    enemigoZ = -1000; // Para resetear la cabeza
  }
}
