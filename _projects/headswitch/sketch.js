let imgOff, imgOn, imgCadena;
let modelo;
let luzEncendida = false;
let cadenaInicio = 0;
let cadenaFinal = 0;
let velocidadLerp = 0.3;
let bajando = false;
let sonido;

function preload() {
  imgOff = loadImage("noface.gif");
  imgOn = loadImage("face.gif");
  imgCadena = loadImage("cadena.png");
  modelo = loadModel("face3d.obj", true);
  modeloCadena = loadModel("cadena.obj", true);
  sonido = loadSound("lamp.mp3");
}

function setup() {
let canvas = createCanvas(550, 550, WEBGL);
canvas.parent('div-sketch');
noStroke();
}

function draw() {
  background(0);

  ambientLight(50);
  if (luzEncendida) {
    pointLight(70, 70, 70, 0, -2500, 1600);
    texture(imgOn);
  } else {
    texture(imgOff);
  }
  push();
  specularMaterial(255);
  translate(0,10,480);
  model(modelo);
  pop();
  
  cadenaInicio = lerp(cadenaInicio, cadenaFinal, velocidadLerp);

  if (bajando && abs(cadenaInicio - 55) < 1) {
    bajando = false;
    cadenaFinal = 0;
  }
  push();
  emissiveMaterial(50);
  translate(115, -120 + cadenaInicio, 350);
  texture(imgCadena);
  model(modeloCadena);
  pop();
}

function mousePressed() {
  luzEncendida = !luzEncendida;

  if (sonido.isPlaying()) sonido.stop();
  sonido.play();

  bajando = true;
  cadenaFinal = 55;
}