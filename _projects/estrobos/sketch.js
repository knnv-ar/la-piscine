// Estrobos


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(10) // velocidad 10 cuadros por segundo
}

function draw() {
  background(250);
  
  strokeWeight(30);
  stroke(80, 40);
  
  var rectSize = 80;
  var spacing = 100;
  
  for (var y = 15; y < height; y += spacing) {   // iteración
    for (var x = 15; x < width; x += spacing) {
      rect(x, y, rectSize, rectSize);
           
      var gray = random(200);  
      fill(gray);
      
    }
  }
}
