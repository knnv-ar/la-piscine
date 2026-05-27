var r;
var g;
var b;
var lineas;
var ancholineas=10;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  
}
  
function draw() {

  r= random (0,244 );
  g= random (255,255);
  b= random(253,0);
  
  
  function izquierdo () {
    
    background(r,g,b,30);
    noFill();
    strokeWeight(ancholineas/3);
    
   
  ellipse (600, mouseY*2, 500, 600);
  ellipse(150,300, mouseX/5, 400);
  bezier(0,600, 400, mouseY, 400, mouseY, 550, 600);
  beginShape();
  vertex(mouseX/5,300);
  vertex(mouseX/2,200);
  vertex(mouseX/2, 550);
  vertex(mouseX/5, 500);
  vertex(mouseX/2, 400);
  endShape(CLOSE);
    for (lineas = 50; lineas <= 600; lineas +=50) {
    line(mouseX,mouseY, 650, lineas);
  }
    
  }
  
  
function mouseReleased() {
  background(0,0,0);
  fill(255,255,255);
  strokeWeight(ancholineas);
  
  
  ellipse (600, 300, 500, 600);
  for (lineas = 50; lineas <= 600; lineas +=50) {
    line(400, lineas, 650, lineas);
  ellipse(150,300, 200, 400); 
  bezier(0,600, 400, 100, 400, 100, 550, 600);
  beginShape();
  vertex(200,300);
  vertex(350,200);
  vertex(350, 550);
  vertex(200, 500);
  vertex(280, 400);
endShape(CLOSE);
  }
}
   
  if (mouseIsPressed) {
      izquierdo();
    } else {
      mouseReleased();
      push();
      stroke(10,225,90);
      strokeWeight(ancholineas*2);
      point(mouseX, mouseY);
      pop()
      
    }
    
  }

document.oncontextmenu = function() {
  return false;
}
