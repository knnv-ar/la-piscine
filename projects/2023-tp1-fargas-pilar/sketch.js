


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');  
  
 }
   

 function draw() {
   

    if (keyIsPressed){
    background(0)

  }

   //si apreto el mouse se dibujan las figuras en el espacio, y queda un solo color de fondo. Si dejo de apretar se borran. 
   noFill()
   stroke(255, 255, 255)
   strokeWeight(0.5)
  circle(mouseX, mouseY, pmouseX); 
    noFill()
     stroke(255, 255, 255)
    strokeWeight(1)
    rect(mouseX, mouseY, pmouseX, pmouseY);
   noFill()
   stroke(255, 255, 255)
   strokeWeight(0.2)
   ellipse(pmouseX, pmouseY, mouseX, mouseY);  
}

 
function mouseMoved() {
  // Cambia el color de fondo cuando el mouse se mueve
  background(random(100));
 }

