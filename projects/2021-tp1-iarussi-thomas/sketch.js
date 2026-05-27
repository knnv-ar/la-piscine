var lineas = 20;
var t = 0;
var i = 0;
var luz = 255;
var luzb = 0;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(2);
  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < lineas; i++) {
    line(x1(t + i), y1(t) + i, x2(t + i), y2(t + i));
  }
  stroke(150);
  strokeWeight(4);
  for (var i = 0; i < lineas; i++) {
    line(-x1(t + i), -y1(t) + i, -x2(t + i), -y2(t + i));
  }

  t += 0.4;
  pop();

  push();
  fill(0);
  triangle(0, 0, 256, 0, 0, 512);
  triangle(512, 0, 256, 0, 512, 512);
  pop();

  if (mouseButton == RIGHT) {
    fill(luz - 1);
    triangle(256, 0, 512, 512, 0, 512);
    i = 0;
    luz = luz - 10;
    luzb = 0;
  } else if (mouseButton == LEFT) {
    luz = 255;
    fill(luzb + 1);
    triangle(256, 0, 512, 512, 0, 512);
    luzb = luzb + 10;

    push();
    translate(width / 2, height / 2);
    for (var i = 0; i < lineas; i++) {
      line(x1(t + i), y1(t) + i, x2(t + i), y2(t + i));
    }
    stroke(150);
    strokeWeight(4);

    for (var i = 0; i < lineas; i++) {
      line(-x1(t + i), -y1(t) + i, -x2(t + i), -y2(t + i));
    }

    pop();
    push();
    fill(0);
    triangle(0, 0, 256, 0, 0, 512);
    triangle(512, 0, 256, 0, 512, 512);
    pop();
  }
}
function x1(t) {
  return sin(t / 10) * 100 + sin(t / 5) * 2;
}

function y1(t) {
  return cos(t / 50) * 100;
  +sin(t / 5) * 50;
}
function x2(t) {
  return sin(t / 20) * 200 + sin(t) * 2;
}
function y2(t) {
  return cos(t / 30) * 200 + cos(t / 12) * 20;
}
document.oncontextmenu = function () {
  return false;
};
