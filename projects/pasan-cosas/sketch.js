//TP2 FLORENCIA LEON

var img1;
var img2;
var img3;
var img4;
var img5;
var fotofondo;
var over;
var numerobase = 600;

function preload() {
  img1 = loadImage("fotos/r1.jpg");
  img2 = loadImage("fotos/r2.jpg");
  img3 = loadImage("fotos/r3.jpg");
  img4 = loadImage("fotos/r4.jpg");
  img5 = loadImage("fotos/r5.jpg");
  over = loadImage("fotos/o-v-e-r2.jpg");
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');

  fotofondo = int(random(1, 5));

  if (fotofondo == 5) {
    image(img5, 0, 0, width, height);
  } else if (fotofondo == 4) {
    image(img4, 0, 0, width, height);
  } else if (fotofondo == 3) {
    image(img3, 0, 0, width, height);
  } else if (fotofondo == 2) {
    image(img2, 0, 0, width, height);
  } else if (fotofondo == 1) {
    image(img1, 0, 0, width, height);
  }
}

function draw() {
  // background(220);
  if (mouseIsPressed) {
    strokeWeight(15);
    stroke(get(mouseX, mouseY));
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (frameCount > numerobase * 2) {
    image(over, 0, 0, width, height);
  }
}

//PARA QUE NO SALGA EL CARTEN DEL NAVEGADOR
document.oncontextmenu = function () {
  return false;
};
