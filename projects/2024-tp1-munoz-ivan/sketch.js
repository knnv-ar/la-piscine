let movimiento=1
let tamaño=300
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch')
  noStroke();
 
}

function draw() {
  
  let vel=sin(movimiento / 20) * 30 ;

  
  if(frameCount%150==0){
    blendMode(DIFFERENCE)
  }else{blendMode(BLEND)}

  fill(255);
  for (let x1 = 0; x1 <= 512; x1 += 42.66) {
    for (let y1 = 0; y1 <= 512; y1 += 42.66) {
      
       //fill(random(x1-x1/3));
      fill(0)
      quad(  x1,  y1,x1 - 21.33,y1 - 42.66, x1 + 535, y1 + 512, x1 + 512, y1 + 512);
    }
  }
  push()
  
  movimiento+=8;
  if(mouseIsPressed){
     translate(width / vel, height / vel);
  }
    
  push()
  fill(0);
  rect(42.67, 42.9, 426.66, 426.66);
  fill(255);
  for (let x2 = 42.66; x2 < 468; x2 += 42.66) {
  rect(x2, 42.66, 23, 427);}
  
  
  rectMode(CENTER)
  for (let x3 = 300; x3 > 21; x3 -= 42.66) {
   fill(random(x3-x3/4.5));
      rect(257, 256, x3); }
  pop();
  pop()
fill(255)
ellipseMode(CENTER)
  ellipse(257,256,3)
  
  if(frameCount%3==0){
 
  let asd=0
  asd=random(255)
  fill(random(0,255),random(0,255))
  rect(0,0,512)
  
   }
  
    if(frameCount<=300&&frameCount>=60){background(0)}
  
    if (frameCount>=700){
    if(frameCount%2==0){blendMode(DIFFERENCE)
      background(255)}} 
}