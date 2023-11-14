var posX, posY, velX, velY, vosX, vosY;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(150);
  posX = (50, width / 2);
  posY = (50, height - 50);

  vosX = (50, width / 2);
vosY = (50, height - 50);

//velocidades
  velX = 9; 
  velY = 3;
}

function draw() {
  background(150, 5);

  push();
  noFill();
  rect(posX, posY, 40, 40);

  posX = posX + velX;
  posY = posY + velY;

  if (posX > width || posX < 0) {
    velX *= -1;
  } //no sale en lo alto

  if (posY > height || posY < 0) {
    velY *= -1;
  } //no sale en el ancho

  pop();

 push();
  rect(vosX, vosY, 40, 40);

  vosX = vosX + velX;
  vosY = vosY + velY;

  if (vosX > width || vosX < 0) {
    velX *= -1;
  }

  if (vosY > height || vosY < 0) {
    velY *= -1;
  }
  pop();
  
}
