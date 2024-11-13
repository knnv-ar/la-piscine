let colorStroke = 19;
let incremento = true;

let colorStroke2 = 0;
let incremento2 = true;

let colorStroke3 = 112;
let incremento3 = true;

let colorStroke4 = 20;
let incremento4 = true;

let colorStroke5 = 25;
let incremento5 = true;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);

  ///////////////////////////////////////////// CUADRADOS GRANDES
  push();

  stroke(colorStroke);
  strokeWeight(2);
  noFill();

  rect(306, 19, 165, 165, 4);
  rect(18, 285, 165, 165, 4);
  rect(328, 327, 165, 165, 4);

  if (incremento) {
    colorStroke += 0.5;
    if (colorStroke >= 40) {
      incremento = false;
    }
  } else {
    colorStroke -= 0.5;
    if (colorStroke <= 0) {
      incremento = true;
    }
  }

  pop();

  //////////////////////////////////////////CUADRADOS MEDIANOS 4
  push();

  stroke(colorStroke4);
  strokeWeight(2);
  noFill();

  rect(204, 81, 83, 83, 2);
  rect(246, 143, 83, 83, 2);
  rect(61, 204, 83, 83, 2);
  rect(266, 204, 83, 83, 2);
  rect(368, 204, 83, 83, 2);
  rect(61, 369, 83, 83, 2);
  rect(246, 388, 83, 83, 2);

  if (incremento4) {
    colorStroke4 += 0.1;
    if (colorStroke4 >= 51) {
      incremento4 = false;
    }
  } else {
    colorStroke4 -= 0.1;
    if (colorStroke4 <= 0) {
      incremento4 = true;
    }
  }

  pop();
  ///////////////////////////////////////////// CUADRADOS CHICOS 1
  push();

  stroke(colorStroke5);
  strokeWeight(2);
  noFill();

  rect(204, 20, 83, 83, 2);
  rect(102, 102, 83, 83, 2);
  rect(328, 102, 83, 83, 2);
  rect(204, 184, 83, 83, 2);
  rect(266, 266, 83, 83, 2);
  rect(102, 328, 83, 83, 2);
  rect(369, 369, 83, 83, 2);

  if (incremento5) {
    colorStroke5 += 0.1;
    if (colorStroke5 >= 51) {
      incremento5 = false;
    }
  } else {
    colorStroke5 -= 0.1;
    if (colorStroke5 <= 0) {
      incremento5 = true;
    }
  }

  pop();

  ///////////////////////////////////////////// CUADRADOS CHICOS 2
  push();

  stroke(colorStroke2);
  strokeWeight(2);
  noFill();

  rect(327, 183, 42, 42, 2);
  rect(20, 20, 42, 42, 2);
  rect(20, 226, 42, 42, 2);
  rect(122, 80, 42, 42, 2);
  rect(268, 80, 42, 42, 2);
  rect(203, 123, 42, 42, 2);
  rect(184, 144, 42, 42, 2);
  rect(184, 226, 42, 42, 2);
  rect(268, 164, 42, 42, 2);
  rect(268, 244, 42, 42, 2);
  rect(226, 183, 42, 42, 2);
  rect(226, 286, 42, 42, 2);
  rect(287, 286, 42, 42, 2);
  rect(122, 204, 42, 42, 2);
  rect(205, 204, 42, 42, 2);
  rect(184, 226, 42, 42, 2);
  rect(184, 350, 42, 42, 2);

  if (incremento2) {
    colorStroke2 += 1;
    if (colorStroke2 >= 225) {
      incremento2 = false;
    }
  } else {
    colorStroke2 -= 1;
    if (colorStroke2 <= 0) {
      incremento2 = true;
    }
  }

  pop();

  ///////////////////////////////////////////// CUADRADOS CHICOS 3
  push();

  stroke(colorStroke3);
  strokeWeight(2);
  noFill();

  rect(287, 19, 42, 42, 2);
  rect(245, 61, 42, 42, 2);
  rect(327, 61, 42, 42, 2);
  rect(307, 123, 42, 42, 2);
  rect(225, 163, 42, 42, 2);
  rect(287, 163, 42, 42, 2);
  rect(369, 163, 42, 42, 2);
  rect(245, 184, 42, 42, 2);
  rect(102, 184, 42, 42, 2);
  rect(410, 224, 42, 42, 2);
  rect(348, 246, 42, 42, 2);
  rect(102, 287, 42, 42, 2);
  rect(327, 368, 42, 42, 2);
  rect(225, 429, 42, 42, 2);

  if (incremento3) {
    colorStroke3 += 1;
    if (colorStroke3 >= 225) {
      incremento3 = false;
    }
  } else {
    colorStroke3 -= 1;
    if (colorStroke3 <= 0) {
      incremento3 = true;
    }
  }

  pop();
}
