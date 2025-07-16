let x1 = 100;
let y1 = 100;
let x2 = 200;
let y2 = 200;
let x3 = 150;
let y3 = 150;
let x4 = 250;
let y4 = 250;
let x5 = 300;
let y5 = 100;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(255);
  
  // Dibuja líneas inspiradas en la imagen
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x4, y4);
  line(x4, y4, x5, y5);
  line(x5, y5, x1, y1);
  
  // Dibuja triángulos
  line(x1, y1, x3, y3);
  line(x3, y3, x5, y5);
  line(x5, y5, x1, y1);
  
  // Cambia las posiciones al hacer clic
  if (mouseIsPressed) {
    x1 = random(0, width);
    y1 = random(0, height);
    x2 = random(0, width);
    y2 = random(0, height);
    x3 = random(0, width);
    y3 = random(0, height);
    x4 = random(0, width);
    y4 = random(0, height);
    x5 = random(0, width);
    y5 = random(0, height);
  }
}