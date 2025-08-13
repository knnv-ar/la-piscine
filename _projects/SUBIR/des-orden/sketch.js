function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  background(255);
  noFill();
  frameRate(2);
}

function draw() {
//-----------------------SKETCH INICIAL-----------------------
  strokeWeight(1);
  rect(150, 150, 65, 75);
  rect(225, 154, 65, 75);
  rect(298, 150, 65, 75);
  ////
  rect(154, 215, 65, 75);
  rect(222, 223, 65, 75);
  rect(295, 220, 65, 75);
  ////
  rect(150, 285, 65, 75);
  rect(222, 287, 65, 75);
  rect(295, 286, 65, 75);
  ////
  stroke(220);
  rect(140, 140, 230, 230);
//------------------------------------------------------------

  // WIDTH Y HEIGHT
  let boxW = 65;
  let boxH = 75;

  // LIMITES
  let minX = 140;
  let maxX = 370 - 65;
  let minY = 140;
  let maxY = 370 - 75;

  // POSICIONES
  let x = random(minX, maxX);
  let y = random(minY, maxY);

  // RECTANGULOS
  stroke(0);
  noFill();
  rect(x, y, boxW, boxH);

}
