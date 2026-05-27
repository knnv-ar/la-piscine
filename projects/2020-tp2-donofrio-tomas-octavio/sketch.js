let tipos = [];
let neumáticos = [];

function preload() {
  fondo = loadImage("imagenes/fondo.webp");
  yard = loadImage("imagenes/yard.webp");
  
  for (let i = 0; i < 7; i++) {
    tipos[i] = loadImage("imagenes/neumatico" + i + ".png");
  }
}
      
function setup() {
  noCursor();
  
  let canvas = createCanvas(720, 478);
  canvas.parent('div-sketch');
}

function mousePressed() {
  let r = random(50, 150);
  let tipo = random(tipos);
  let b = new Neumático(mouseX, mouseY, r, tipo);
  neumáticos.push(b);
}

function draw() { 
  imageMode(CORNERS);
  image(fondo, 0, 0);
  imageMode(CENTER);
  for (let i = 0; i < neumáticos.length; i++) {
    neumáticos[i].move();
    neumáticos[i].show();
  }
  image(yard, mouseX, mouseY);
}

class Neumático {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.tipo = img;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    image(this.tipo, this.x, this.y, this.r, this.r);
  }
}
