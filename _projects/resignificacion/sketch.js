let tActual;
let tM;
let tJ;
let tS;
let estado = true;

function preload() {
  fondo = loadImage("img/estrellas.jpg");
  texturaUrano = loadImage("img/urano.jpg");
  texturaMarte = loadImage("img/marte.jpg");
  texturaJupiter = loadImage("img/jupiter.jpg");
  texturaSol = loadImage("img/sol.jpg");
  texturaAdan = loadImage("img/adan.jpg");
  texturaVenus = loadImage("img/venus.jpg");
  texturaAnunciacion = loadImage("img/anunciacion.jpg");
  texturaAtenas = loadImage("img/atenas.jpg");
  sonido = loadSound("audios/sound.mp3");
  sonidoFondo = loadSound("audios/sonidofondo.mp3");
}

function setup() {
  let canvas = createCanvas(600,600,WEBGL);
  canvas.parent('div-sketch');

  sonido.loop();
  sonidoFondo.loop();

  tActual = texturaUrano;
  tM = texturaMarte;
  tJ = texturaJupiter;
  tS = texturaSol;
}

function draw() {
  image(fondo, -300, -300, width, height);
  posZ = frameCount;
  ambientLight(255);

  //urano
  push();
  translate(-100, 0, posZ * 0.2);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.01);
  texture(tActual);
  noStroke();
  sphere(20);
  pop();

  //marte
  push();
  translate(150, -100, posZ * 0.2);
  rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.008);
  texture(tM);
  noStroke();
  sphere(50);
  pop();

  //jupiter
  push();
  translate(0, 150, posZ * 0.2);
  rotateY(-frameCount * 0.006);
  texture(tJ);
  noStroke();
  sphere(100);
  pop();

  //Sol
  push();
  translate(0, -50, posZ * 0.1);
  texture(tS);
  rotateY(-frameCount * 0.001);
  noStroke();
  sphere(50);
  pop();
}
function mousePressed() {
  if (estado) {
    tActual = texturaAnunciacion;
    tJ = texturaVenus;
    tS = texturaAdan;
    tM = texturaAtenas;
  } else {
    tActual = texturaUrano;
    tJ = texturaJupiter;
    tS = texturaSol;
    tM = texturaMarte;
  }
  estado = !estado;
}
