let muerte, sonido, respiracion, img1, img2, img3, img4, font;
let cambio = 0;
let colores = [50, 100, 150, 200, 230];
let inicio1 = -70;
let inicio2 = 25;
let espacio = 10;
let zoom = 600;

function preload() {
  muerte = loadImage("img/muerte.png");
  img1 = loadImage("img/img1.png");
  img2 = loadImage("img/img2.png");
  img3 = loadImage("img/img3.jpg");
  img4 = loadImage("img/img4.jpg");
  sonido = loadSound("mp3/sonido-limbo.mp3");
  respiracion = loadSound("mp3/respiracion.mp3");
  font = loadFont("font.ttf");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  if (!sonido.isPlaying()) {
    sonido.loop();
  }

  if (cambio === 0) {
    primera();
  } else if (cambio === 1) {
    segunda();
  } else if (cambio === 2) {
    tercera();
  } else if (cambio === 3) {
    cuarta();
  } else if (cambio === 4) {
    quinta();
  } else if (cambio === 5) {
    sexta();
  } else if (cambio === 6) {
    septima();
  } else if (cambio === 7) {
    octava();
  }
}

function mousePressed() {
  if (cambio < 7) {
    cambio = cambio + 1;
  } //// Solo cambiar si no es la octava escena
}

function primera() {
  background(240);
  fill(0);
  rect(-10000, -60, 20000, 100);
  image(muerte, -345, -215, 700, 400);

  for (let i = 0; i < colores.length; i++) {
    fill(colores[i]);
    noStroke();
    rect(-10000, inicio1 - i * espacio, 20000, 10); // Arriba
    rect(-10000, inicio2 + i * espacio, 20000, 10); // Abajo
  }

  push();
  fill(230);
  stroke(150);
  strokeWeight(1);
  rect(-70, 90, 110, 20);
  pop();
  fill(0);
  textSize(15);
  textFont(font);
  text("Aceptar destino", -65, 104);
}

function segunda() {
  if (!respiracion.isPlaying()) {
    respiracion.loop();
    respiracion.setVolume(1.2);
    sonido.setVolume(0.5);
  }
  push();
  texture(img1);
  plane(500, 500);
  pop();
}
function tercera() {
  background(0);
}
function cuarta() {
  push();
  texture(img2);
  plane(500, 500);
  pop();
}
function quinta() {
  background(0);
}
function sexta() {
  push();
  texture(img3);
  plane(500, 500);
  pop();
}
function septima() {
  background(0);
}
function octava() {
  if (zoom > 0) {
    zoom -= 1.5; // Zoom out de a poco
  }
  push();
  texture(img4);
  plane(zoom, zoom);
  pop();
}
