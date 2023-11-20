let imageH;
let imaR;
let inter;
let posX, posY, velX, velY, vosx, vosy, melX, melY;
let clic;
let fin;

function preload() {
  imageH = loadImage('HUMANOS.png');
  imaR = loadImage('humano.r.png');
  inter = loadImage('inter.png');
  clic = loadImage('clic.png');
  fin = loadImage('fin.png');
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent('div-sketch');
  posX = (50, width / 2);
  posY = (50, height - 90);
  velX = 8;
  velY = 3;
  push();
  vosX = (50, width / 2);
  vosY = (50, 300 - 50);
  melX = 5;
  melY = 0;
  pop();
}

function draw() {
  background(220);

  if (mouseIsPressed === true) {


    image(fin, 0, 0);
  } else {
    push();
    image(clic, posX, posY);

    posX = posX + velX;
    posY = posY + velY;

    if (posX > width || posX < 0) {
      velX *= -1;
    }

    if (posY > height || posY < 0) {
      velY *= -1;
    }
    pop();

    image(imageH, 0, 150);
    image(inter, 550, 150);

    push();
    image(imaR, vosX, vosY);

    vosX = vosX + melX;
    vosY = vosY + melY;

    if (vosX > width || vosX < 0) {
      melX *= -1;
    }

    if (vosY > height || vosY < 0) {
      melY *= -1;
    }
    pop();
  }
}
