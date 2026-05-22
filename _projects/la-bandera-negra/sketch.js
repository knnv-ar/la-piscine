var x = 20;
var y = 100;
var x2 = x + 120;
var y2 = y + 30;
var x3 = x2 + 120;
var y3 = y;
var x4 = x3 + 120;
var y4 = y2;

var large = 110;
var hauteur = 272;

var negro = 0;
var white = 255;
var strokey = 2;
var rect1 = 0;
var rect2 = 0;
var rect3 = 0;
var rect4 = 0;
var colorfont = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  textFont("Helvetica");
}

function draw() {
  negro = map(mouseX, 0, 512, 0, 255);
  white = map(mouseX, 0, 256, 255, 0);
  background(negro);
  stroke(white);
  strokeWeight(strokey);
  strokey = map(mouseX, 0, 256, 2, 0);

  fill(colorfont);
  textStyle(BOLD);
  textSize(15);
  //text("I WAS", 20, 35);

  fill(0);
  if (mouseIsPressed) {
    background(0);
    fill(255);
    strokeWeight(0);
  }

  fill(rect1);
  rect(x, y, large, hauteur, 5);
  fill(rect2);
  rect(x2, y2, large, hauteur, 5);
  fill(rect3);
  rect(x3, y3, large, hauteur, 5);
  fill(rect4);
  rect(x4, y4, large, hauteur, 5);

  if (mouseX >= x && mouseX <= 130 && mouseY >= y && mouseY <= 372) {
    x += random(-3, 3);
    y += random(-3, 3);
    rect1 = 200;
    rect2 = 0;
    rect3 = 0;
    rect4 = 0;
    //text("I WAS", 20, 35);
    text("A HIPPIE", 20, 55);
  } else if (mouseX >= x2 && mouseX <= 250 && mouseY >= y2 && mouseY <= 402) {
    x2 += random(-3, 3);
    y2 += random(-3, 3);
    rect1 = 0;
    rect2 = 150;
    rect3 = 0;
    rect4 = 0;
    //text("I WAS", 20, 35);
    text("A BURNOUT", 20, 55);
  } else if (mouseX >= x3 && mouseX <= 370 && mouseY >= y3 && mouseY <= 272) {
    x3 += random(-3, 3);
    y3 += random(-3, 3);
    rect2 = 0;
    rect3 = 200;
    rect4 = 0;
    rect1 = 0;
    //text("I WAS", 20, 35);
    text("A DROPOUT", 20, 55);
  } else if (mouseX >= x4 && mouseX <= 490 && mouseY >= y4 && mouseY <= 402) {
    x4 += random(-3, 3);
    y4 += random(-3, 3);
    rect4 = 150;
    rect3 = 0;
    rect2 = 0;
    rect1 = 0;
    //text("I WAS", 20, 35);
    text("OUT OF MY HEAD", 20, 55);
  } else {
    rect1 = 0;
    rect2 = 0;
    rect3 = 0;
    rect4 = 0;
    //text("I WAS", 20, 35);
    //text ("SO WASTED", 20, 55);
  }
  
  fill(colorfont); 
  text("I WAS", 20, 35);


  if (mouseIsPressed) {
    rect1 = 255;
    rect2 = 255;
    rect3 = 255;
    rect4 = 255;
    colorfont = 255; 
  } else {
    colorfont = 0; 
  }
}

function mousePressed() {
  x = 20;
  y = 100;
  x2 = x + 120;
  y2 = y + 30;
  x3 = x2 + 120;
  y3 = y;
  x4 = x3 + 120;
  y4 = y2;
}
