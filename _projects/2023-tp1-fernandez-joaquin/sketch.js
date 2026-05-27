function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(255); // Fondo blanco
  noLoop(); // Detiene la actualización automática del lienzo
}

function draw() {
  
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      let gray = random(256); // Tono de gris aleatorio

      fill(gray); // Color de relleno basado en tono de gris
      noStroke(); // Sin borde

      // Dibujar un rectángulo en forma de cuadrado con esquinas redondeadas
      rectMode(CENTER);
      rect(x, y, 15, 15, 5);
    }
  }

}
function mouseMoved() {
  // Calcula las coordenadas del cuadrado
  let x = mouseX; // Utiliza directamente la posición del ratón
  let y = mouseY;
  
  // Genera un valor aleatorio para la escala de grises entre 0 y 255
  let grayscale = random(0, 255);
  
  // Establece el color de relleno utilizando la escala de grises
  fill(grayscale);
  
  // Establece el modo de rectángulo en el centro
  rectMode(CENTER);
  
  // Dibuja el cuadrado redondeado
  rect(x, y, 15, 15, 5);
}