let angulo = 0.0;
let desplazamiento = 256;
let escalar = 40;
let velocidad = 1;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(40)
}

function draw() {
  background(126, 1);

  push(); //"círculo mediano"
  let x = desplazamiento + cos(angulo) * escalar;
  let y = desplazamiento + sin(angulo) * escalar;
  fill(random(255));
  stroke(random(255));
  circle(x, y, random(30));
  angulo += velocidad;

  fill(random(255)); //círculo chico
  stroke(random(255));
  circle(256, 256, random(15));
  pop();

  push(); //líneas parte 1
  strokeWeight(1);
  line(random(192), random(height), 50, 460);
  stroke(255);
  line(random(320, 512), random(height), 460, 50);
  pop();
  
  push(); // líneas parte 2
  strokeWeight(1);
  line(random(0, 319), random(320, 512), 50, 460); //negras
  stroke(255);
  line(random(193, 512), random(0, 192), 460, 50); //blancas
  pop();
  
}