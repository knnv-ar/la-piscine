function setup() {
    let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  }
  
  
  y = 256;
  velocidad = 8;
  op = 100
  
  
  function draw() { 
    background(0, op);
  
  
    stroke(255);
    
    
    line(random(50, 100), random(256, y),random(50, 100), random(256, y));
    
    
    line(random(155, 205), random(256, y),random(155, 205), random(256, y));
    
    
    line(random(295, 345), random(256, y),random(295, 345), random(256, y));
    
  
    line(random(410, 460), random(256, y),random(410, 460), random(256, y));
  
    
    y += velocidad;
  
    if (y > 512) {
      velocidad = -5;
      op = 12
    }
  
    if (y < 0) {
      velocidad = 8;
      op = 100
    }
    
  
  
  }
  