function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() { 
  background(255);
  fill(255, 255, 255, 0);
  strokeWeight(2);
  stroke(0);
  frameRate(10);

  //rectangulos
  rect(20, 35, 350, 400);

  if (frameCount > 10) {
    rect(30, 45, 350, 400);
  }
  if (frameCount > 20) {
    rect(39, 180, 200, 300);
  }

  if (frameCount > 30) {
    rect(60, 150, 20, 200);
  }

  if (frameCount > 40) {
    rect(280, 300, 200, 57);
  }

  if (frameCount > 50) {
    rect(230, 150, 75, 50);
  }

  if (frameCount > 60) {
    rect(200, 20, 30, 400);
  }

  if (frameCount > 70) {
    rect(225, 300, 60, 200);
  }

  if (frameCount > 80) {
    rect(5, 252, 400, 10);
  }

  if (frameCount > 90) {
    rect(30, 400, 200, 100);
  }

  if (frameCount > 100) {
    rect(70, 28, 50, 470);
  }

  if (frameCount > 110) {
    rect(200, 300, 50, 50);
  }

  //presionando el mouse se invierte todo

  if (mouseIsPressed && frameCount > 120) {
    background(0);
    fill(255, 255, 255, 0);
    strokeWeight(2);
    stroke(255);

    rect(200, 300, 50, 50);

    if (frameCount > 10) {
      rect(70, 28, 50, 470);
    }

    if (frameCount > 20) {
      rect(30, 400, 200, 100);
    }

    if (frameCount > 30) {
      rect(5, 252, 400, 10);
    }

    if (frameCount > 40) {
      rect(225, 300, 60, 200);
    }

    if (frameCount > 50) {
      rect(200, 20, 30, 400);
    }

    if (frameCount > 60) {
      rect(230, 150, 75, 50);
    }

    if (frameCount > 70) {
      rect(280, 300, 200, 57);
    }

    if (frameCount > 80) {
      rect(60, 150, 20, 200);
    }

    if (frameCount > 90) {
      rect(39, 180, 200, 300);
    }

    if (frameCount > 100) {
      rect(30, 45, 350, 400);
    }

    if (frameCount > 110) {
      rect(20, 35, 350, 400);
    }

    
    /////////////////////////////////////
    document.oncontextmenu = function () {
      return false;
    };
  }
}
