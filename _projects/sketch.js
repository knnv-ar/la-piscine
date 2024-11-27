//Antes de empezar, apretá la tecla "m" y las veces que sean necesarias para limpiar el canvas de las miradas, podes interactuar haciendo click para que caigan las lágrimas y al mover el mouse vas dibujando ojos.

let lagrimas = [];
let cancion;


function preload() {
  cancion = loadSound("emocional.mp3");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('div-sketch');
  cancion.loop();
}

  // Crear nuevas lágrimas
  function mousePressed() {
  lagrimas.push({ x: 100, y: 100 });  // Lagrima en el ojo lateral izquierdo
  lagrimas.push({ x: 600, y: 600 });  // Lagrima en el ojo lateral derecho
  }

function draw() {
    
  // Animación de las lágrimas
  for (let i = 0; i < lagrimas.length; i++) {
    fill(65, 157, 238); // Color de la lágrima
    ellipse(lagrimas[i].x, lagrimas[i].y, 20, 50); // Dibuja la lágrima
    lagrimas[i].y += 2; // Hace que la lágrima caiga
  }
  
  //Ojo Grande centro
  rectMode(CENTER);
  fill(255, 255, 255);
  stroke(151, 0, 83);
  strokeWeight(6);
  ellipse(350, 350, 250, 120);

  //Ojo Pequeño centro
  rectMode(CENTER);
  fill(random(255));
  stroke(151, 0, 83);
  strokeWeight(2);
  circle(350, 350, 120, 120);
  ellipse(350, 350, 20, 50);

  //Ojo Grande lateral izq
  rectMode(CORNERS);
  fill(255, 255, 255);
  stroke(98, 0, 255);
  strokeWeight(4);
  ellipse(100, 100, 180, 100);

  //Ojo Pequeño lateral izq
  rectMode(CORNERS);
  fill(random(255));
  stroke(98, 0, 255);
  strokeWeight(2);
  circle(100, 100, 100, 100);
  ellipse(100, 100, 20, 50);

  //Ojo Grande lateral derecha
  rectMode(CORNERS);
  fill(255, 255, 255);
  stroke(0);
  strokeWeight(10);
  ellipse(600, 600, 200, 100);

  //Ojo Pequeño lateral derecha
  rectMode(CORNERS);
  fill(random(255));
  stroke(0);
  strokeWeight(4);
  circle(600, 600, 100, 100);
  ellipse(600, 600, 20, 50);

  // Circulo negro con blanco que se mueve con el cursor
  fill(255, 255, 255, 5);
  stroke(0);
  strokeWeight(5);
  circle(600, 600, 100, 100);
  strokeWeight(2);
  ellipse(mouseX, mouseY, random(300), random(200));
}

  function keyPressed() {
  if (key == "s") {
    cancion.stop();
  }
  if (key == "p") {
    cancion.pause();
  }
  if (key == " ") {
    cancion.loop();
  }
  if (key == "m") {
    background(0);
  }
}
