//Todas las imagenes y sonido son libres de copyright

var img1, img2, img3, img4, img5;
let angulo = 0;

function preload() {
  img1 = loadImage("fondo3.jpeg");
  img2 = loadImage("fondo5.jpg");
  img3 = loadImage("foto.jpeg");
  img4 = loadImage("fotosi.jpg");
  img5 = loadImage("planeta.jpg");
  img6 = loadImage("ballena.png");
  canto = loadSound("canto.mp3");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
  background(0);
  canto.loop();
}

function draw() {
  push();
  imageMode(CENTER);
  image(img2, 0, 0);
  pop();

  texture(img1);
  push();
  translate(0, -10, 0);
  rotate(angulo);
  noStroke();
  imageMode(CENTER);
  sphere(100);
  pop();

  angulo += radians(1);

  image(img6, -250, 10, 160, 150);

  blue();

  function blue() {
    if (mouseIsPressed) {
      push();
      imageMode(CENTER);
      image(img3, 0, 0);
      pop();

      texture(img4);
      push();
      translate(0, -10, 0);
      rotate(angulo);
      noStroke();
      imageMode(CENTER);
      sphere(100);
      pop();

      for (let a = 0; a < radians(360); a += radians(30)) {
        texture(img5);
        push();
        translate(0, -10, 0);
        rotate(a);
        noStroke();
        translate(0, 200);
        rotate(angulo);
        sphere(25);
        pop();
      }
    }
  }
}
