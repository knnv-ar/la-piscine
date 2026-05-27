let strokeDarkness = 0; 

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0); 
  noFill(); 

  // Si mantengo click, cambia a negro
  if (mouseIsPressed) {
    strokeDarkness = lerp(strokeDarkness, 255, 0.05); 
  } else {
    strokeDarkness = lerp(strokeDarkness, 0, 0.05); 
  }

  // Lineas pasan de plateado a negro
  let r = lerp(192, 0, strokeDarkness / 255);
  let g = lerp(193, 0, strokeDarkness / 255);
  let b = lerp(194, 0, strokeDarkness / 255);
  stroke(r, g, b);

  // Los cuadrados concentricos
  rect(10, 10, 160, 160);
  rect(25, 25, 130, 130);
  rect(40, 40, 100, 100);
  rect(55, 55, 70, 70);
  rect(65, 65, 50, 50);
  rect(75, 75, 30, 30);
  rect(85, 85, 10, 10);

  rect(180, 10, 160, 160);
  rect(195, 25, 130, 130);
  rect(210, 40, 100, 100);
  rect(225, 55, 70, 70);
  rect(235, 65, 50, 50);
  rect(245, 75, 30, 30);
  rect(255, 85, 10, 10); 

  rect(350, 10, 160, 160);
  rect(365, 25, 130, 130);
  rect(380, 40, 100, 100);
  rect(395, 55, 70, 70);
  rect(405, 65, 50, 50);
  rect(415, 75, 30, 30);
  rect(425, 85, 10, 10);

  rect(10, 185, 160, 160);
  rect(25, 200, 130, 130);
  rect(40, 215, 100, 100);
  rect(55, 230, 70, 70);
  rect(65, 240, 50, 50);
  rect(75, 250, 30, 30);
  rect(85, 260, 10, 10);

  rect(180, 185, 160, 160);
  rect(195, 200, 130, 130);
  rect(210, 215, 100, 100);
  rect(225, 230, 70, 70);
  rect(235, 240, 50, 50);
  rect(245, 250, 30, 30);
  rect(255, 260, 10, 10);

  rect(350, 185, 160, 160);
  rect(365, 200, 130, 130);
  rect(380, 215, 100, 100);
  rect(395, 230, 70, 70);
  rect(405, 240, 50, 50);
  rect(415, 250, 30, 30);
  rect(425, 260, 10, 10);

  rect(10, 349, 160, 160);
  rect(25, 365, 130, 130);
  rect(40, 380, 100, 100);
  rect(55, 395, 70, 70);
  rect(65, 405, 50, 50);
  rect(75, 415, 30, 30);
  rect(85, 425, 10, 10);
  
  rect(180, 349, 160, 160);
  rect(195, 365, 130, 130);
  rect(210, 380, 100, 100);
  rect(225, 395, 70, 70);  
  rect(235, 405, 50, 50);  
  rect(245, 415, 30, 30);  
  rect(255, 425, 10, 10);

  rect(350, 349, 160, 160);
  rect(365, 365, 130, 130);
  rect(380, 380, 100, 100);
  rect(395, 395, 70, 70);
  rect(405, 405, 50, 50);
  rect(415, 415, 30, 30);
  rect(425, 425, 10, 10);
}