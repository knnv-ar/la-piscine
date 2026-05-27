//Artes Multimediales 1, Cát. Lacabanne
//Funcion Zeta
//Autora: Luisana Benitez
//Ingresar cursor para iniciar, pausar haciendo click.


// variables
var x = 0;
var easing = 0.05;
let xPos;
let yPos;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  ellipseMode(CENTER);
  background(0);
  noFill();
  strokeWeight(0.5);
  xPos = random(width);
  yPos = random(height);
}

function draw() {
  push();
  stroke(260);
  ellipse(random(width), random(height), mouseX, mouseY);
  ellipse(xPos, yPos, mouseX, mouseY);
  


  pop();
  
  //patron derecho

  stroke(260);
  ellipse(318, 236, 122.11, 110.69);
  ellipse(323, 236, 131, 124);
  ellipse(330, 236, 145.24, 136.74);
  ellipse(337, 236, 158, 150);
  ellipse(345, 236, 175, 170);
  ellipse(355, 236, 196, 197);
  ellipse(369, 236, 224, 224);
  ellipse(387, 236, 263, 263);
  ellipse(413, 236, 315, 315);
  ellipse(452, 236, 393, 393);

  //patron izquierdo

  ellipse(194, 236, 122.11, 110.69);
  ellipse(189, 236, 131, 124);
  ellipse(182, 236, 145.24, 136.74);
  ellipse(176, 236, 158, 150);
  ellipse(168, 236, 175, 170);
  ellipse(158, 236, 196, 197);
  ellipse(144, 233, 224, 224);
  ellipse(126, 236, 263, 263);
  ellipse(100, 236, 315, 315);
  ellipse(61, 236, 393, 393);

  //patron superior

  ellipse(256, 176, 110.69, 122.11);
  ellipse(256, 171, 124, 131);
  ellipse(255, 164, 136.74, 145.24);
  ellipse(255, 158, 150, 158);
  ellipse(255, 150, 170, 175);
  ellipse(255, 140, 197, 196);
  ellipse(255, 126, 224, 224);
  ellipse(255, 108, 263, 263);
  ellipse(255, 82, 315, 315);
  ellipse(255, 43, 393, 393);

  //patron inferior

  ellipse(255, 297, 110.69, 122.11);
  ellipse(255, 302, 124, 131);
  ellipse(255, 309, 136.74, 145.24);
  ellipse(255, 315, 150, 158);
  ellipse(255, 323, 170, 175);
  ellipse(255, 333, 197, 196);
  ellipse(255, 347, 224, 224);
  ellipse(255, 368, 263, 263);
  ellipse(255, 392, 315, 315);
  ellipse(255, 431, 393, 393);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}




