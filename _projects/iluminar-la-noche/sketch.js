let covid, jeringa;
var angulo = 0.0;
var gloriaSound, horrorSound;

function preload() {
  gloriaSound = loadSound("gloria.mp3");
  horrorSound = loadSound("horror.mp3");
}


function setup() {

  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  covid = new Covid();
  jeringa = new Jeringa();
 
}

function draw() {
  
  var bgR = map(mouseY, 100, height / 2 + 50, 235, 0);
  var bgG = map(mouseY, 100, height / 2 + 50, 235, 0);
  var bgB = map(mouseY, 100, height / 2 + 50, 0, 0);
  background(bgR, bgG, bgB);

  covid.draw();
  covid.move();
  jeringa.draw();

}

function mouseMoved() {

  if (mouseY <= height / 2) {
    gloriaSound.play();
    horrorSound.stop();
  } else if (mouseY >= height / 2) {
    gloriaSound.stop();
    horrorSound.play();
  }

}


// === Fusión de archivo: covid.js ===
class Covid {
  
  constructor() {
  
    this.x = width / 2;
    this.y = height / 2;

  }

  draw() {

    var valorSeno = sin(angulo);
    var radio = map(valorSeno, -1, 1, 50, 57);
    angulo += 0.1;
    
    //antenas
    stroke('#63F522');
    strokeWeight(7);

    //antena1
    line(this.x - (radio), this.y - (radio + 5), this.x + (radio + 5), this.y + (radio + 7));
    line(this.x - (radio + 5), this.y - (radio), this.x - (radio - 5), this.y - (radio + 10));
    line(this.x + (radio), this.y + (radio + 12), this.x + (radio + 10), this.y + (radio + 2));

    //antena2
    line(this.x - (radio - 15), this.y + (radio + 5), this.x + (radio - 15), this.y - (radio + 15));
    line(this.x - (radio - 8), this.y + (radio + 6), this.x - (radio - 18), this.y + (radio + 12));
    line(this.x + (radio - 20), this.y - (radio + 19), this.x + (radio - 9), this.y - (radio + 12));

    //antena3
    line(this.x - (radio + 17), this.y + (radio - 50), this.x + (radio + 17), this.y - (radio - 50));
    line(this.x - (radio + 18), this.y + (radio - 56), this.x - (radio + 17), this.y + (radio - 44));
    line(this.x + (radio + 17), this.y - (radio - 55), this.x + (radio + 17), this.y - (radio - 45));

    //cuerpo  
    fill('#63F522');
    noStroke();
    ellipse(this.x, this.y, radio * 2, radio * 2);

  }
  
  move() {
  
    covid.y = mouseY - 200;

  }
}

// === Fusión de archivo: jeringa.js ===
class Jeringa {

  constructor() {
    this.x = 0;
    this.y = 0;


  }

  draw() {

    //aguja
    fill(0);
    noStroke();
    rect(width / 2, mouseY + 200, 2, 50);
    //tubo
    fill(0, 255, 255);
    rectMode(CENTER);
    stroke(0);
    strokeWeight(2);
    rect(width / 2, mouseY + 260, 50, 90);
    //pulsor
    fill(255);
    rect(width / 2, mouseY + 310, 70, 20);
    noCursor();




  }

}