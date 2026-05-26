/*
TP2 - Artes Multimediales 1
Cátedra Lacabanne.
Lara Petrosino

Se puede interactuar con el click del mouse y con la barra espaciadora.
*/

var gr, ry, yr, rg; //gifs
var calle, glitch; //sonidos
var mask, error; //imágenes
var audioActivo = false;
var tecla = false;
var ancho, alto;
var x0, y0;
var click = 0;
var contador = 0;
var anchoMax = 10;
var cantCortes = 50;

document.oncontextmenu = function () {
  return false;
};

function preload() {
  glitch = loadSound("snd/glitch.mp3");
  calle = loadSound("snd/calle.mp3");
  error = loadImage("img/error.png");
  mask = loadImage("img/mask.png");
  gr = loadImage("gif/gr.gif");
  ry = loadImage("gif/ry.gif");
  yr = loadImage("gif/yr.gif");
  rg = loadImage("gif/rg.gif");
}

function setup() {
  let canvas = createCanvas(516, 688);
  canvas.parent('div-sketch');
  frameRate(15);
  calle.setVolume(0, 30);
  calle.loop();
  glitch.loop();
  glitch.pause();
}

function draw() {
  switch (contador % 6) {
    case 0:
      image(gr, 0, 0);
      break;
    case 1:
      image(yr, 0, 0);
      break;
    case 2:
      image(ry, 0, 0);
      break;
    case 3:
      image(rg, 0, 0);
      break;
    case 4:
      image(ry, 0, 0);
      break;
    case 5:
      image(yr, 0, 0);
      break;
  }

  image(mask, 0, 0);

  if (tecla) { 
    if (audioActivo) {
      glitch.pause();
      audioActivo = false;
    } else {
      glitch.play();
      audioActivo = true;
    }

    ancho = error.width;
    alto = error.height / cantCortes;

    for (var i = 0; i <= cantCortes; i++) {
      x0 = random(-6, 6);
      y0 = i * alto;

      pix = error.get(0, i * alto, error.width, alto - 1);
      image(pix, x0, y0);
    }
  } else {
    glitch.pause();
    audioActivo = false;
  }
} //draw

function mousePressed() {
  contador++;
}

function keyPressed() {
  tecla = true;
}
