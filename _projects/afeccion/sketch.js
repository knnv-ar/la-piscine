function setup() {
  let canvas = creatCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  background(0);
  
  // volumen de la roncha inicial
  fill(200);
  ellipse(70, 70, 70, 70);
  
  // Primera roncha
  noStroke();
  fill(255);
  ellipse(65, 65, 65, 65);
}

// funcion para dibujar una gradiente radial
function drawRadialGradient(x, y, size) {
  let gradientSteps = 10; // Número de pasos en el gradiente
  let stepSize = size / gradientSteps;
  
  for (let i = gradientSteps; i > 0; i--) {
    let r = map(i, 0, gradientSteps, 100, 255); //valores para el color deseado
    let g = map(i, 0, gradientSteps, 100, 255);
    let b = map(i, 0, gradientSteps, 100, 255);
    let alpha = map(i, 0, gradientSteps, 0, 255); //ajuste de opacidad
    
    fill(r, g, b, alpha);
    ellipse(x, y, stepSize * 2 * i, stepSize * 2 * i);
  }
}

//usando mousePressed para dibujar elipses con sombreado
function mousePressed() {
  let size = random(20, 50); // Tamaño aleatorio para las elipses
  let x = random(width);
  let y = random(height);
  
  // llamar a la función para dibujar la gradiente
  drawRadialGradient(x, y, size);
}