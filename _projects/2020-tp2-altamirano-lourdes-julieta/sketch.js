//Universidad Nacional de las Artes
//Artes Multimediales
//Cátedra Lacabanne
//2020
//Altamirano Lourdes
//rose the sky

let florImg;
let skyImg;
let flors = [];
let florNum = 10;

function preload() {
skyImg = loadImage('sky.webp');
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');
  florImg = loadImage('flor.webp');
  angleMode(DEGREES);
  for (let i = 0; i < florNum; i++) {
    flors.push(new flor(random(width), random(height)));
  }
}


function draw() {
  background(skyImg, 0, 0);
  
  for(let i = 0; i < flors.length; i++) {
    flors[i].move();
    flors[i].show();
  }
}
//Interacciones ! presione el mouse y aparecerán más flores.
function mousePressed(){
  flors.push(new flor(mouseX, mouseY));
}
  
//flores
class flor {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.r = random(-20, 20);
    this.s = random(20, 80);
  }
  move() {
    this.x = random(-1, 1) + this.x;
    this.y = random(-1, 1) + this.y;
  }
  show() {
    push();
    translate(this.x, this.y);
    let angle = map(mouseX, 0, width, 10, -10);
    rotate(angle);
    imageMode(CENTER);
    image(florImg, 0, 0, this.s, this.s);
    pop();
  }
}
