// Inspirado en Cuadrados no Concentricos de Vera Molnár (1974)
//Nombre de la obra: Entropía
//Autora: Nahiara Aylen Sosto

function setup() {
  
    let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noFill();
  stroke(50);
  background(220);
  rectMode(CENTER)
}

function draw() {
  // Vacío
}

//Aclaracíon: la magnitud del desorden cambia dependiendo de en que parte del lienzo se haga click

function mousePressed() {
  background(220);

  for (let tamaño = 400; tamaño > 2; tamaño -= 20){
    
  let posicionX = mouseX;
  let posicionY = mouseY;
  
  let X = random(-posicionX, posicionX);
  let Y = random(-posicionY, posicionY);

    push();

    translate(256 + X, 256 + Y);
    rect(0, 0, tamaño, tamaño);
    
    pop(); 
  }
}