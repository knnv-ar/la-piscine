//F41

let a = 1.4;
let b = -2.3;
let c = 2.4;
let d = -2.1;
let x = 0;
let y = 0;

let totalPoints = 200000; //para que se haga más rápido 

//la animación de los ellipses

let ellipseCount = 0;
let maxEllipses = 300;
let ellipses = [];

function setup() {
  let canvas = createCanvas(512, 512);
   canvas.parent('div-sketch');
  background(20,15);
  stroke(200, 80); 
  strokeWeight(0.3);
  noFill();
  noLoop();
  
 translate(width / 2, height / 2);

  //puntos fractales que hacen la forma del cerebro 
  
    for (let i = 0; i < totalPoints; i++) {
    let newX = sin(a * y) - cos(b * x);
    let newY = sin(c * x) - cos(d * y);

    let px = newX * 100;
    let py = newY * 100;

    point(px, py);
    point(-px, py);

    x = newX;
    y = newY;
  }
  
 //ellipses randoms 
  
  for (let i = 0; i < maxEllipses; i++) {
    let x1 = random(80, 200);
    let y2 = x1 * random(0.6, 1.2);
    ellipses.push({ x1, y2 });
  }
  
  frameRate(15);
  loop()

}

function draw() {
 
  translate(width / 2, height / 2);

  if (ellipseCount < maxEllipses) {
    stroke(10, 255);
    let e = ellipses[ellipseCount];
    ellipse(0, 0, e.x1, e.y2);
    ellipseCount++;
  } else {
    noLoop(); 
  }
}