let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  strokeWeight(2);
  noFill();
}

function draw() {
  bkground(0);
  translate(width / 2, height / 2);
  
  // Primera figura
  push();
  // Dibujar líneas rotativas
  for (let i = 1; i < 11; i++) {
    let x = 100 * cos(angle1 * i);
    let y = 100 * sin(angle1 * i);
    
    stroke(255);
    line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento de la primera figura
  angle1 += 0.02;
  pop();
  
  // Segunda figura
  push();
  translate(0, 0);
  // Dibujar líneas rotativas
  for (let i = 1; i < 10; i++) {
    let x = 20 * cos(angle2 * i);
    let y = 60 * sin(angle2 * i);
    
    stroke(255);
    line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento de la segunda figura
  angle2 += 0.01;
  
  pop();
  
  
    // Tercer figura
  push();
  translate(150, 200);
  
  // Dibujar líneas rotativas
  for (let i = 1; i < 8; i++) {
    let x = 20 * cos(angle1 * i);
    let y = 10 * sin(angle1 * i);
    
  stroke(255);
  line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento de la primera figura
  angle2 += 0.0;
  pop();
  
  // Cuarta figura
  push();
  translate(150, 200);
  // Dibujar líneas rotativas
  for (let i = 1; i < 10; i++) {
    let x = 30 * cos(angle2 * i);
    let y = 70 * sin(angle2 * i);
    
    stroke(255);
    line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento de la segunda figura
  angle2 += 0.001;
  pop();
  
  //Quinta figura
    push();
  translate(-150, -130);
  
  // Dibujar líneas rotativas
  for (let i = 1; i < 8; i++) {
    let x = 70 * cos(angle1 * i);
    let y = 50 * sin(angle1 * i);
    
  stroke(255);
  line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento de la primera figura
  angle3 += 0.0;
  pop();
  
  // Sexta figura
  push();
  translate(-150, -130);
  // Dibujar líneas rotativas
  for (let i = 1; i < 6; i++) {
    let x = 30 * cos(angle2 * i);
    let y = 70 * sin(angle2 * i);
    
    stroke(255);
    line(0, 0, x, y);
  }
  
  // Ángulo para generar movimiento
  angle3 += 0.02;
  pop();
  
}