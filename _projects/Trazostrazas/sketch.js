// mover el mouse 

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
}

function draw() {
  fill(0, 5); 
  rect(0, 0, width, height); 
  
  
  stroke (256)
  line (0,0, mouseX, mouseY)
  line (120, 0, mouseX, mouseY)
  line (width, 0, mouseX, mouseY)
  line(0, height, mouseX, mouseY)
  line (0, 480, mouseX, mouseY)
  line (width,300, mouseX, mouseY)
  line (width,height, mouseX, mouseY)
  
  fill(256)
  ellipse(mouseX, mouseY,5);
  
}