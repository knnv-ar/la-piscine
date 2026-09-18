
let expandir = false;
let circuloX = 0;
let circuloY = 0;
let diametro = 0;

function setup() {
  
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

}

function draw() {

  
  
  if (expandir) {

      if (!mouseIsPressed){
      expandir = false; 
    }
    
    background(0, 44); 
    
    fill(255);
    noStroke();
    ellipse(circuloX, circuloY, diametro);
    
    diametro += 10;
    
    let radio = diametro / 2;
    
    // Si el circulo toca los bordes del canva, se destruye el sistema
    if (circuloX - radio <= 0 || circuloX + radio >= width || 
        circuloY - radio <= 0 || circuloY + radio >= height) {
      background(0); 
      noLoop(); 
    }

  } else {
    
    // Circulos (explosiones) random en el lienzo
    background(100); 
    // Velocidad con la que aparecen los circulos
    frameRate(3); 
    
    let tonoGris = random(50, 255);
    fill(tonoGris);
    noStroke();

    //tamaño y color random para los circulos (explosiones)
    
    let x = random(0, width);
    let y = random(0, height);
    let tamano = random(20, 150);
    
    ellipse(x, y, tamano);
  }
}

// La ultima explosion

function mousePressed() {
  expandir = true;
  circuloX = mouseX;
  circuloY = mouseY;
  diametro = 0;
  //Velocidad de crecimiento de la ultima explosion
  frameRate(25); 
} 




