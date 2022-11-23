//Laila Fernandez - "Hellfire" - TP-2 - AM1 - UNA 2022

let fuego;
let pareja;
let fire;
let sonido;
var heartfire = [];

function preload() {
  pareja = loadImage("Picsart_22-11-07_08-45-03-553.png");
  fuego = loadImage("Picsart_22-11-07_09-04-51-638.png");
  fire = loadImage("fire.png");
  sonido = loadSound("Fuego de infierno Karaoke (Latino)(MP3_128K).mp3");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  for (var i = 0; i < 100; i++);
}

function keyPressed() {
  if (key == "f" || key == "f") {
    sonido.loop();
  }

  if (key == "l" || key == "l") {
    sonido.pause();
  }
}

function draw() {
  background(fuego);
  let alpha = map(mouseX, 0, 400, 0, 255);
  tint(255, alpha);

  image(pareja, 0, 0, width, height);
  noTint();
  if (alpha > 185) {
    for (var i = 0; i < 25; i++) {}
  }
}

function heartfire() {
  this.x = random(-width, width);
  this.y = random(0, -height);

  this.show = function () {
    image(heartfire, this.x, this.y, 30, 30);
  };
}
this.update = function () {
  this.speed = random(1, 5);
  this.gravity = 1;
  this.y = this.y + this.speed * this.gravity;
  if (this.y > height) {
    this.y = random(0, -height);
    this.gravity = 4;
  }
};
