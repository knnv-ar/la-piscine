function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0, 18);

  let cols = 15;
  let rows = 18;

  let espacioX = width / cols;
  let espacioY = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let cx = x * espacioX;
      let cy = y * espacioY;

      let angulo = frameCount * 0.005 + (x + y) * 0.2;

      let centroX = x * espacioX + espacioX / 2;
      let centroY = y * espacioY + espacioY / 2;
      
      push();        
      translate(centroX, centroY); 
       rotate(angulo); 

      stroke(118);
      line(10, -5, -10, 5); 

      pop();    
    }
  }
}


