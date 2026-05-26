let rep = {
  x: 50,
  y: 50,
};

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
 background(300);
frameRate (30)
}

function draw() {
 if (mouseIsPressed) {
  rep.x = random(425, 50);
  rep.y = random(50, 425);
  noStroke();
  fill (0);

 rect(rep.y, rep.x, random (1,24),random(1,24));


}
}