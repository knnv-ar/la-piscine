//Interferencia

let img1, img2, img3, img4, img5, img6, img7, img8;
let boton = 0;

function preload() {
  img1 = loadImage("imagenes/televintage.png");
  img2 = loadImage("imagenes/tv.gif");
  img3 = loadImage("imagenes/tvcolores.gif");
  img4 = loadImage("imagenes/antiguo.jpg");
  img5 = loadImage("imagenes/actual.jpg");
  img6 = loadImage("imagenes/3.jpg");
  img7 = loadImage("imagenes/1.jpg");
  img8 = loadImage("imagenes/2.jpg");
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  noStroke();

  image(img4, 0, 0); //posición y tamaño

  push();
  tint(255, 100);
  image(img5, 0, 0);
  pop();

  if (boton === 0) {
    image(img2, 50, 150, 320, 280);
  } else if (boton === 1) {
    image(img3, 50, 150, 320, 280);
  } else if (boton === 2) {
    image(img6, 50, 165, 300, 250);
  } else if (boton === 3) {
    image(img7, 50, 150, 320, 280);
  } else if (boton === 4) {
    image(img8, 50, 150, 320, 280);
  }

  image(img1, 25, 0, 450, 450); //posición y tamaño

  noFill();
  stroke(255, 0, 0);
  circle(432, 311, 43);
}

function mousePressed() {
  if (mouseX > 410 && mouseX < 454 && mouseY > 290 && mouseY < 332) {
    boton = (boton + 1) % 5;
    //si estaba en 0 pasa a 1, si estaba en 1 pasa a 2, si estaba en 2 vuelve a 0
  }
}
