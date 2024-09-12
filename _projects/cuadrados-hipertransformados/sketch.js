
let grande1;
let grande2;
let grande3;
let grande4;
let grande5;
let grande6;
let mediano1;
let mediano2;
let mediano3;
let mediano4;
let chico1;
let chico2;
let chico3;
let chico4;
let chico5;
let chico6;
let chico7;

let chico1Speed = -6;
let chico2Speed = -5;
let chico3Speed = 7;
let chico4Speed = 4;
let chico5Speed = 3;
let chico6Speed = 2;
let chico7Speed = -2;
let mediano1Speed = -2;
let mediano2Speed = -8;
let mediano3Speed = -7;
let mediano4Speed = -6;
let grande1Speed = 2;
let grande2Speed = 1;
let grande3Speed = 3;
let grande4Speed = 3;
let grande5Speed = 2;
let grande6Speed = 2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  grande1 = 30;
  grande2 = 40;
  grande3 = 50;
  grande4 = 10;
  grande5 = 25;
  grande6 = 20;
  mediano1 = 100;
  mediano2 = 100;
  mediano3 = 85;
  mediano4 = 90;
  chico1 = 123;
  chico2 = 120;
  chico3 = 110;
  chico4 = 170;
  chico5 = 165;
  chico6 = 150;
  chico7 = 180;
}

function draw() {
  background(0);

  // Rectángulos chicos
  rect(chico1, 125, 200, 230);
  chico1 += chico1Speed;
  if (chico1 < 0 || chico1 > width - 200) chico1Speed *= -1;

  rect(chico2, 120, 200, 250);
  chico2 += chico2Speed;
  if (chico2 < 0 || chico2 > width - 200) chico2Speed *= -1;

  rect(chico3, 130, 250, 200);
  chico3 += chico3Speed;
  if (chico3 < 0 || chico3 > width - 250) chico3Speed *= -1;

  rect(chico4, 200, 90, 80);
  chico4 += chico4Speed;
  if (chico4 < 0 || chico4 > width - 90) chico4Speed *= -1;

  rect(chico5, 180, 100, 120);
  chico5 += chico5Speed;
  if (chico5 < 0 || chico5 > width - 100) chico5Speed *= -1;

  rect(chico6, 210, 100, 100);
  chico6 += chico6Speed;
  if (chico6 < 0 || chico6 > width - 100) chico6Speed *= -1;

  rect(chico7, 160, 60, 160);
  chico7 += chico7Speed;
  if (chico7 < 0 || chico7 > width - 60) chico7Speed *= -1;

  // Rectángulos medianos
  rect(mediano1, 95, 300, 300);
  mediano1 += mediano1Speed;
  if (mediano1 < 0 || mediano1 > width - 300) mediano1Speed *= -1;

  rect(mediano2, 100, 320);
  mediano2 += mediano2Speed;
  if (mediano2 < 0 || mediano2 > width - 320) mediano2Speed *= -1;

  rect(mediano3, 110, 300, 300);
  mediano3 += mediano3Speed;
  if (mediano3 < 0 || mediano3 > width - 300) mediano3Speed *= -1;

  rect(mediano4, 90, 320, 310);
  mediano4 += mediano4Speed;
  if (mediano4 < 0 || mediano4 > width - 320) mediano4Speed *= -1;

  // Rectángulos grandes
  rect(grande1, 40, 420, 420);
  grande1 += grande1Speed;
  if (grande1 < 0 || grande1 > width - 420) grande1Speed *= -1;

  rect(grande2, 35, 420, 430);
  grande2 += grande2Speed;
  if (grande2 < 0 || grande2 > width - 420) grande2Speed *= -1;

  rect(grande3, 60, 400, 400);
  grande3 += grande3Speed;
  if (grande3 < 0 || grande3 > width - 400) grande3Speed *= -1;

  rect(grande4, 15, 420, 420);
  grande4 += grande4Speed;
  if (grande4 < 0 || grande4 > width - 420) grande4Speed *= -1;

  rect(grande5, 25, 450, 450);
  grande5 += grande5Speed;
  if (grande5 < 0 || grande5 > width - 450) grande5Speed *= -1;

  rect(grande6, 20, 480, 480);
  grande6 += grande6Speed;
  if (grande6 < 0 || grande6 > width - 480) grande6Speed *= -1;

  stroke(250);
  noFill();
}

function mousePressed() {
  grande1 = 30;
  grande2 = 40;
  grande3 = 50;
  grande4 = 10;
  grande5 = 25;
  grande6 = 20;
  mediano1 = 100;
  mediano2 = 100;
  mediano3 = 85;
  mediano4 = 90;
  chico1 = 123;
  chico2 = 120;
  chico3 = 110;
  chico4 = 170;
  chico5 = 165;
  chico6 = 150;
  chico7 = 180;
}
