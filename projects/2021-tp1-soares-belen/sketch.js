function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

var w = 45;
var h = 45;

function draw() {
  background(255);

  //1era  FILA
  for (var x = 6; x < 500; x += 50) {
    var m = mouseY / 450;
    var temblorA = random(-m, m);
    var temblorB = random(-m, m);
    rect(x + temblorA, 6, w - temblorB, h);
  }
  //2da  FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 400;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 62, w - temblorB, h);
  }

  //3era FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 350;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 118, w - temblorB, h);
  }

  //4ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 300;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 174, w - temblorB, h);
  }

  //5ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 250;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 230, w - temblorB, h);
  }

  //6ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 200;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 286, w - temblorB, h);
  }
  //7ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 150;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 342, w - temblorB, h);
  }

  //8ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 100;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 398, w - temblorB, h);
  }

  //9ta FILA
  for (x = 6; x < 500; x += 50) {
    var m = mouseY / 50;
    temblorA = random(-m, m);
    temblorB = random(-m, m);
    rect(x + temblorA, 454, w - temblorB, h);
  }
  if (mouseIsPressed) {
    fill(frameCount);
  }


}
