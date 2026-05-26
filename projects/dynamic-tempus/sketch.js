var angulo = 0;
var desplazamiento = 256;
var escalar = 2;
var velocidad = 0.5;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  push();
  fill(256,256,256,5);
  strokeWeight(5)
  for (let d = 720; d > 0; d -= 12) {
  circle(256, 256, d);}
  pop();
}

function draw() {
  let a = (-10,10); let b = (-10,10);
  
  let x = a * noise(5 * frameCount);
  let y = b * noise(5 * frameCount*0.5);
  let z = a * noise(5 * frameCount);
  let v = b * noise(5 * frameCount);
   
  push();
  if (mouseIsPressed) {
  translate (z,v);
  fill(256,256,256,5);
  strokeWeight(5)
  for (let d = 720; d > 0; d -= 12) {
  circle(256, 256, d);}
  }
  pop();
      
  push();
  translate(x, y);
  fill(256);
  strokeWeight(9);
  for (let d = 100; d > 0; d -= 20) {
    circle(256, 256, d);
  }
  pop();
  
 
  
  push();
  noFill();
  strokeWeight(0.1)
  stroke(256);
  var d = desplazamiento + cos(y) * escalar;
  var c = desplazamiento + sin(x) * escalar;
  circle(d, c,100);
  angulo += velocidad;
  escalar += velocidad;
  pop();
  
  
    
}
