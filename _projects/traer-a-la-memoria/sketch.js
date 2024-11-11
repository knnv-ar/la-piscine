// Variables
let photo;
let lullaby;
let tvEffect;

let brushSize = 3;

// Carga de media
function preload() {
  photo = loadImage("aa_main_img.jpg");
  lullaby = loadSound("bb_humming_woman.mp3");
  tvEffect = createVideo("cc_old_tv.mp4");
}

function setup() {
  
  let canvas = createCanvas(720, 540); // Tamanio original de imagen
  canvas.parent('div-sketch');

  lullaby.loop();
  tvEffect.loop();
  tvEffect.hide();
}

function draw() {
  image(photo, 0, 0);

  push();

  scale(1.5);
  blendMode(DARKEST);
  image(tvEffect, -100, -50, 730, 540);

  pop();

  tint(200, 4); // Seg. parametro -- opacidad.

  // Interaccion

  if (mouseIsPressed) {
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// para que el click derecho no moleste
document.oncontextmenu = function () {
  return false;
};
