//declaracion de variables
var angulo = 0.0;
var desplazamiento = 260;
var escalar = 260;
var velocidad = 0.002;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  stroke(255);
 
    var x = desplazamiento + sin(angulo) * escalar;
    var y = desplazamiento + cos(angulo) * escalar;
  
    for (let x = 15; x < width; x += 15) {
      
    //mide la distancia entre la posición actual y la más reciente
    let rapido = mouseX / 50;
    let movimiento = random(-rapido, rapido);
    
    line(x, y, x, x);
    line(y, x, x, x);
      
    //grosor de lineas
    strokeWeight(2);
    stroke(255);
    //velocidad de lineas
    angulo += velocidad / 10;
    
    line(x + movimiento, 512, x - movimiento, 512);
    line(x + movimiento, 475, x - movimiento, 450);
    line(x + movimiento, 425, x - movimiento, 400);
    line(x + movimiento, 375, x - movimiento, 350);
    line(x + movimiento, 325, x - movimiento, 300);
    line(x + movimiento, 275, x - movimiento, 250);
    line(x + movimiento, 225, x - movimiento, 200);
    line(x + movimiento, 175, x - movimiento, 150);
    line(x + movimiento, 125, x - movimiento, 100);  
    line(x + movimiento, 75, x - movimiento, 50);
    line(x + movimiento, 25, x - movimiento, 0);  
      
    line(0 + movimiento, x, 25 - movimiento, x);
    line(50 + movimiento, x, 75 - movimiento, x);
    line(100 + movimiento, x, 125 - movimiento, x);
    line(150 + movimiento, x, 175 - movimiento, x);
    line(200 + movimiento, x, 225 - movimiento, x);
    line(250 + movimiento, x, 275 - movimiento, x);
    line(300 + movimiento, x, 325 - movimiento, x);
    line(350 + movimiento, x, 375 - movimiento, x);
    line(400 + movimiento, x, 425 - movimiento, x);
    line(450 + movimiento, x, 475 - movimiento, x); 
    line(512 + movimiento, x, 512 - movimiento, x);    
  }
}