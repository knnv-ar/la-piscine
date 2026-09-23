let tiempo= 0
function setup() {
  let canvas = createCanvas(512, 512); // Reemplazá con tus dimensiones
  canvas.parent('div-sketch'); // ESTA LÍNEA ES OBLIGATORIA
  background(0);
}
function draw() {
 background(0, 0, 0,10);
  fill(0)
  stroke(250)
  push()
  for (let i = 0; i < 550; i += 5) {
  let movimientoX = sin(tiempo + i * 0.02) * 50;
  ellipse(i,250 + movimientoX, 0, 250);
}
  pop()
  
  push()
  
  for (let i = 0; i < 550; i += 5) {
let movimientoX = sin(tiempo - i * 0.02) * 50;
let movimientoy = sin(tiempo - i * 0.02) * 50;    
    ellipse(250 + movimientoX,i, 250, 30);
}
  pop()
  
tiempo += 0.05;
}