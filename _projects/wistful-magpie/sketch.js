let x = 28;
let angle = 0;
let pasoss = 0.02;
let tamañoX = 200;
let tamañoY = 50;
let colores = 250;
let alfa = 250;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(250);
  frameRate(50);
}

function draw() {
  background(0, 5);

  push();
 for (let i = 0; i < 900; i++) {
    let poc = random(0, 512);
    let poc2 = random(0, 512);
    noFill();
    stroke(250, 250, 250, random(200, 250));
    strokeWeight(1);
    blendMode(OVERLAY);
    point(poc, poc2);
  }
  pop();
  
  let a = frameCount;
  let b = 100 * cos(x * 0.1);
  let c = 80 * sin(frameCount * 0.02);

  let d = 50 * cos(x * 0.1);
  let e = 190 * sin(frameCount * 0.02);

  angle += pasoss;

  push();
  translate(230, height / 2);
  rotate(angle);
  noFill();
  stroke(colores,colores,colores,alfa);
  strokeWeight(3);
  blendMode(OVERLAY);
  ellipse(mouseX + b, mouseY + c, tamañoX, tamañoY);
  pop();

  push();
  translate(width / 2, 200);
  rotate(-angle);
  noFill();
  stroke(colores,colores,colores,alfa);
  strokeWeight(2);
  blendMode(OVERLAY);
  ellipse(mouseX + d, mouseY + e, tamañoX, tamañoY);
  pop();

  if (mouseIsPressed) {
    tamañoX = 1;
    tamañoY = 300;
  } else {
    tamañoX = 200;
    tamañoY = 50;
  }
}

function mousePressed()  {
   tamañoX = 1;
    tamañoY = 300;
}

function keyPressed() {
  if (key === 'a') {
    alfa = 0; 
  }
}

function keyReleased() {
  if (key === 'a') {
   alfa = 250; 
  }
}
  
