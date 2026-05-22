//Artes Multimediales 1 - Cát. Lacabanne
//Parcial N°2
//"Contener"
//Angeles Van Rafelghem
//2020


var song;

let bubbles = [];

let gunter;
let gb = [];

function preload() {
  gunter = loadImage('gb/gunter.png');
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('div-sketch');
  song = loadSound("otto/anatur.mp3", loaded);
  song.setVolume(0.5);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function loaded() {
  song.play();
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(random(255));
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }
  
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  
  show() {
    image(gunter,this.x,this.y);
    //stroke(255);
   // strokeWeight(4);
   // fill(this.brightness, 125);
    //ellipse(this.x, this.y, this.r * 2);
  }
}
