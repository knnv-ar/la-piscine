function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
  background(240); 

  strokeWeight(1);
  noFill();
  
  for (let i = 0; i < 60; i++) {
    stroke(random(0, 200)); 

    beginShape();
    let x = random(width);
    let y = random(height);
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    let x3 = random(width);
    let y3 = random(height);

    bezier(x, y, x1, y1, x2, y2, x3, y3);
    endShape();
  }

  for (let i = 0; i < 100; i++) {
    let lineaX = random(width);
    let lineaY = random(height);
    let lineaX1 = random(width);
    let lineaY1 = random(height);
    stroke(random(0, 255), random(50, 200)); 
    line(lineaX, lineaY, lineaX1, lineaY1);
  }
}

function draw() {
  for (let i = 0; i < 20; i++) {
    let puntoX = random(width);
    let puntoY = random(height);
    stroke(random(0, 150)); 
    point(puntoX, puntoY); 
  }
}
