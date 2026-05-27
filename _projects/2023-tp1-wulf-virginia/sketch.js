function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
}


function draw() {
  background(255, 255, 255, 32* sin(frameCount / 15));

  // Bloque 1
  push();
  fill(0);
  //ellipse(mouseX, 40, 40, 40);
  pop();
   push();
   //fila 1
  fill(0) 
   rect(0, 0, 100, 100);
   fill(0, 0, 0, 128) 
   rect(0, 0, 100, 100* sin(frameCount / 15));
  fill(0, 0, 0, 128) 
   rect(0, 0, 100, 100* sin(frameCount / 15));
  
  fill(0, 0, 0, 128* sin(frameCount / 15));
  rect(100, 0, 100, 100);
  
  fill(0, 0, 0, 32* sin(frameCount / 15));
  rect(200,0, 100, 100);
  
  fill(0, 0, 0, 32* sin(frameCount / 15));
  rect(299,0, 100, 100);
  
  fill(0, 0, 0, 128);
  rect(399,0, 120, 100);
   fill(0, 0, 0, 64 * sin(frameCount / 15))
  rect(399,0, 120, 100* sin(frameCount / 15));
  
    pop();

  
  // Bloque 3
  push();
  fill(255,255,255,100);
  let angle = frameCount / 15;
  let x = 100 + 50 * cos(angle);
  let y = 100 + 50 * sin(angle);
  ellipse(x, y, 400, 400);
  pop();

  // Bloque 4
  push();
  fill(100);
  
  pop();

  // Bloque 5
  push();
  fill(188, 188, 188, 188);
  ellipse(200, 200, 125, 125* sin(frameCount / 15));
   ellipse(200, 200, 125, 125 * sin(frameCount / 15));
  pop();

  // Bloque 6
  push();
  fill(0, 0, 0, 128);
  ellipse (250, 250, 150, 150* sin(frameCount / 15));
  pop();

  // Bloque 7
  push();
  fill(255, 255, 255, 128); // blanco semitransparente
  rect(0, 0, 100, 100);
    rect(28, 485, 28,485 );

  pop();

  // Bloque 8
  push();
  x= 100 
  Y= 10
  fill (255, 255, 255, 128) // blanco semitransparente 
  rect(100, 100, 299, 380);
  pop();
  
  push();
  fill(0, 0, 0, 68);//  semitransparente 
  rect(100,100, 300, x);
  x= x + 10
  rect(100,100, 300, x);
  x= x + 10
  rect(100,100, 300, x);
  x= x + 10
  rect(100,100, 300, x);
  x= x + 10
  rect(100,100, 300, x);
  x= x + 10
  rect(100,100, 300, x);
  x= x + 20
   rect(100,100, 300, x);
  x= x + 20
   rect(100,100, 300, x);
  x= x + 30
   
   rect(100,100, 300, x);
  x= x + 30 
  rect(100,100, 300, x);
  x= x + 30
  rect(100,100, 300, x );
  x= x + 30
   rect(100,100, 300, x);
  x= x + 40
  rect(100,100, 300, x * sin(frameCount / 15))
  x= x + 40
  
  
  pop();
  push();
  fill(188, 188, 188, 188);
  ellipse(200, 200, 125, 125 * sin(frameCount / 15));
   ellipse(200, 200, 125, 125 * sin(frameCount / 15));
  pop();
  
// Bloque 2
  push();
  //ill(255, 255, 255, 64* sin(frameCount / 15));
  //ellipse(31, 480 * sin(frameCount / 15), 50, 50 );
  //ellipse(40, mouseX, 40, 40 * sin(frameCount / 15));
  //ellipse(471, 477 , 50, mouseY)
  //ellipse(30, mouseY, 30, 50 * sin(frameCount / 15));
  pop();
  //interactivo
  push();
  fill(255, 255, 255, 128* sin(frameCount / 15));
  ellipse(43, 477 , 50, mouseX)
  ellipse(471, 477 , 50, mouseY)
  pop();
  

  // Visualización de las coordenadas del ratón
 // push();
  //textSize(16);
  //fill(0);
  //text("x: " + mouseX + ", y: " + mouseY, mouseX + 10, mouseY + 10);
 // pop();
}

