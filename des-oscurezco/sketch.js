

function setup() {
let canvas = createCanvas(500, 500);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  background(mouseX, mouseY);

  fill(265);
  rect(5, 10, 5);

  fill(255);
  rect(15, 25, 15);

  fill(245);
  rect(25, 35, 25);

  fill(235);
  rect(35, 45, 35);

  fill(225);
  rect(45, 55, 45);

  fill(215);
  rect(55, 65, 55);

  fill(205);
  rect(65, 75, 65);

  fill(195);
  rect(75, 85, 75);

  fill(185);
  rect(85, 95, 85);

  fill(175);
  rect(95, 105, 95);

  fill(165);
  rect(105, 115, 105);

  fill(155);
  rect(115, 125, 115);

  fill(145);
  rect(125, 135, 125);

  fill(135);
  rect(135, 145, 135);

  fill(125);
  rect(145, 155, 145);

  fill(115);
  rect(155, 165, 155);

  fill(105);
  rect(165, 175, 165);

  fill(95);
  rect(175, 185, 175);

  fill(85);
  rect(185, 195, 185);

  fill(75);
  rect(195, 205, 195);

  fill(65);
  rect(205, 215, 205);

  fill(55);
  rect(215, 225, 215);

  fill(45);
  rect(225, 235, 225);

  fill(35);
  rect(235, 245, 235);

  //rects detro de rects

  fill(45);
  rect(245, 255, 105);

  fill(55);
  rect(255, 265, 95);

  fill(65);
  rect(265, 275, 85);

  fill(75);
  rect(275, 285, 75);

  fill(85);
  rect(285, 295, 65);

  fill(95);
  rect(295, 305, 55);

  fill(105);
  rect(305, 315, 45);

  //rects dentro de rects

  fill(25);
  rect(305, 305, 135);

  fill(15);
  rect(315, 315, 125);

  fill(5);
  rect(325, 325, 115);

  fill(5);
  rect(355, 365, 105);

  fill(15);
  rect(365, 365, 95);

  fill(5);
  rect(295, 305, 55);

  fill(105);
  rect(305, 315, 45);
}
