function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  for (let i = 0; i < 1000; i++) {
    let x1 = random(0, width);
    let y1 = random(0, height);

    fill(random(0, 255));
    ellipse(x1, y1, 60);
  }
}

function draw() {
  strokeWeight(2);

  textFont("Helvetica");
  textSize(30);
  text("un comienzo posible", 190, 132);

  for (var i = 20; i < 150; i += 5) {
    line(i, 20, i, 512);
  }
  for (var i = 20; i < 480; i += 5) {
    line(i, 20, i, 100);
  }
  strokeWeight(2);
  fill(180);

  line(500, 20, 420, 100);
  line(490, 20, 410, 100);
  line(480, 20, 400, 100);
  line(470, 20, 390, 100);
  line(460, 20, 380, 100);
  line(450, 20, 370, 100);
  line(440, 20, 360, 100);
  line(430, 20, 350, 100);

  fill(125, 211, 31);
  triangle(480, 153, 190, 480, 190, 153);

  noStroke();
  fill(mouseY);
  ellipse(mouseX, 200, 60, 60);
}
