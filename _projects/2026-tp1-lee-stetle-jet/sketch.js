function setup() {
  let canvas = createCanvas(512, 512);
  noFill();
  canvas.parent('div-sketch');
}

function draw() {
  background(250);
  
  let steps = int(map(mouseX, 0, width, 3, 12));
  let maxDispersion = map(mouseY, 0, height, 0, 15);

  for (let i = 0; i < steps; i++) {
    push();
    
    let xPos = map(i, 0, steps - 1, 50, 450);
    let yPos = height / 2 + sin(frameCount * 0.05 + i) * 30;
    
    translate(xPos, yPos);
    
    let scaleFactor = map(i, 0, steps - 1, 0.6, 2.0);
    scale(scaleFactor);
    
    if (i < steps / 2) {
      stroke(80);
      strokeWeight(1);
    } else {
      stroke(20);
      strokeWeight(0.5);
    }
    
    let currentDispersion = i * maxDispersion * 0.2;
    dibujarFigura(currentDispersion);
    
    pop();
  }
}

function dibujarFigura(disp) {
  beginShape();
  vertex(-20 + random(-disp, disp), -5 + random(-disp, disp));
  vertex(-10 + random(-disp, disp), 0 + random(-disp, disp));
  vertex(-5 + random(-disp, disp), -15 + random(-disp, disp));
  vertex(10 + random(-disp, disp), -25 + random(-disp, disp));
  vertex(5 + random(-disp, disp), -10 + random(-disp, disp));
  vertex(15 + random(-disp, disp), 5 + random(-disp, disp));
  vertex(25 + random(-disp, disp), 15 + random(-disp, disp));
  vertex(10 + random(-disp, disp), 10 + random(-disp, disp));
  vertex(0 + random(-disp, disp), 20 + random(-disp, disp));
  vertex(-5 + random(-disp, disp), 10 + random(-disp, disp));
  vertex(-15 + random(-disp, disp), 5 + random(-disp, disp));
  endShape(CLOSE);
  
  beginShape(LINES);
  vertex(-10, 0); vertex(5 + random(-disp, disp), 5);
  vertex(5, -10); vertex(15 + random(-disp, disp), 0);
  endShape();
}