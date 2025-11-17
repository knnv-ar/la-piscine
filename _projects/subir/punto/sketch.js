
let centerX, centerY;
let lineas = [];
let imgOjito;
let sonido;

function preload() {
  
  imgOjito = loadImage("Ojito.png");  
  sonido = loadSound("Ondas.mp3");  
}

function setup() {
  createCanvas(600, 500);
  noStroke();
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(0); 


  imageMode(CENTER);
  let tamañoOjito = 150;
  image(imgOjito, centerX, centerY, tamañoOjito, tamañoOjito);


  stroke(255, 0, 0);
  strokeWeight(2);
  for (let l of lineas) {
    l.x += l.dx;
    l.y += l.dy;
    l.alpha -= 0.2;
    stroke(255, 0, 0, l.alpha);
    line(centerX, centerY, l.x, l.y);
  }

  
  lineas = lineas.filter(l => l.alpha > 0);
}

function mousePressed() {

  let d = dist(mouseX, mouseY, centerX, centerY);
  if (d < 75) {
    generarLineas();

  
    if (!sonido.isPlaying()) {
      sonido.play();
    }
  }
}

function generarLineas() {
  for (let i = 0; i < 12; i++) {
    let ang = random(TWO_PI);
    let speed = random(1, 3);
    lineas.push({
      x: centerX,
      y: centerY,
      dx: cos(ang) * speed,
      dy: sin(ang) * speed,
      alpha: 255
    });
  }
}




