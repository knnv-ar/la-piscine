//Sofia Tomasello
// Me ispire en Vera Molnar

let movimiento = 0;
let velocidad = 0.5; 
let limite = 125; // Ajusto el límite del movimiento para que los rectángulos no se salgan de la obra

function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
}

function draw() {
  background(20); 

  // Incremento el valor del movimiento
  movimiento += velocidad;
  
  // Cambio el movimiento entre -limite y limite
  if (movimiento > limite || movimiento < -limite) {
    velocidad *= -1; // Sii alcanzo el limite,se invierte la dirección de velocidad, el movimiento cambia de dirección.
  }

  // 1 
  stroke(10);
  strokeWeight(40);
  rect(5 + movimiento,5 + movimiento, 490 - movimiento * 2, 490 - movimiento * 2);//Esto hace que el rectángulo se mueva a lo largo del eje x y del eje y. el 490...va hacer que el ancho y la alto del rectángulo  vaya disminuyendo a medida que aumenta el valor de movimiento.
  // 2
  stroke(50);
  strokeWeight(35);
  rect(50 + movimiento, 50 + movimiento, 400 - movimiento * 2, 400 - movimiento * 2);
  
  // 3
  stroke(100);
  strokeWeight(30); 
  rect(100 + movimiento, 100 + movimiento, 300 - movimiento * 2, 300 - movimiento * 2);
  
  // 4 
  stroke(150);
  strokeWeight(25); 
  rect(140 + movimiento, 140 + movimiento, 220 - movimiento * 2, 220 - movimiento * 2);
  
  // 5 
  stroke(190);
  strokeWeight(20); 
  rect(175 + movimiento, 175 + movimiento, 150 - movimiento * 2, 150 - movimiento * 2);
  
  // 6 
  stroke(220);
  strokeWeight(15); 
  rect(200 + movimiento, 200 + movimiento, 100 - movimiento * 2, 100 - movimiento * 2);
  
  // 7 
  stroke(240);
  strokeWeight(10); 
  rect(225 + movimiento, 225 + movimiento, 50 - movimiento * 2, 50 - movimiento * 2);
}