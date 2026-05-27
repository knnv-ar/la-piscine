//MOMENTS = MOMENTOS

function setup() {
  //createCanvas(512, 512,);
  let canvas = createCanvas(512, 512,);
  canvas.parent('div-sketch');
  background(255);
}

function draw() {
  
//CUADRADOS ALEATORIOS CON TONALIDADES GRISES
  let grayscale = random(256); 
//VALOR DE GRISES 
  fill(grayscale);
  noStroke();
  
//TAMAÑOS ALEATORIOS ENTRE 10 Y 50 PIXELES
  let size = random(10, 50);
  
//POSICIÓN ALEATORIA DE LOS CUADRADOS EN EL LIENZO
  let x = random(width - size);
  let y = random(height - size);
  
//DIBUJA LOS CUADRADOS EN LAS POSICIONES Y FORMAS DIFERENTES ALEATORIAMENTE
  rect(x, y, size, size);
}