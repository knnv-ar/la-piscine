function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(200);
}

function draw() {
    
//// RECTÁNGULOS
  
  rectMode(CENTER)
  stroke (255,10)
  strokeWeight(random(1,512));
  fill(95,1)
  rect(width/2, height/2, 1, 1)
  
  rectMode(CENTER)
  stroke (0,1)
  strokeWeight(random(1, 512));
  fill(160,1)
  rect(width/2, height/2, 512, 512)
  
//// LINEAS
  
  push()
    translate (-11,-11)
  
  for (let x = 0; x < width +10; x++) {
    stroke(25);
    strokeWeight(3);
    line(mouseX, x, mouseX, x);
  }
  for (let y = 0; y < height +10; y++) {
    stroke(25);
    strokeWeight(3);
    line(y, mouseY, y, mouseY);
  }
  pop()
  
}
