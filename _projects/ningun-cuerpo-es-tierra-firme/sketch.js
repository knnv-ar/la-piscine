/* 
¿Ningún cuerpo es tierra firme?
Florencia Pennella
AM1 - TN - 2024
*/

let fotos = []; // Fotos de fondo
let fotosT = []; // Fotos con transparencias
let imagenActual = 0; // Control de imágenes del array
let duracionPorImagen = 1500;  
let tiempoDeCambio = 0;
let fondoDibujado = false;  
let sonRuido;
let sonDistorsion;

function preload() {
  fotos[0] = loadImage("foto/foto0.png");
  fotosT[0] = loadImage("foto/foto0t.png");
  fotos[1] = loadImage("foto/foto1.png");
  fotosT[1] = loadImage("foto/foto1t.png");
  fotos[2] = loadImage("foto/foto2.png");
  fotosT[2] = loadImage("foto/foto2t.png");
  sonRuido = loadSound("sonido/ruido.mp3");
  sonDistorsion = loadSound("sonido/distorsion.mp3");
}

function setup() {
  //createCanvas(400, 400);
  let canvas= createCanvas (400,400);
  canvas.parent('div-sketch');
  tiempoDeCambio = frameCount + duracionPorImagen; // Inicializa el primer cambio
    sonDistorsion.loop();
}

function draw() {
  // Cambio de imágenes
  if (frameCount >= tiempoDeCambio) {
    imagenActual = (imagenActual + 1) % 3;  // Cambiar a la siguiente imagen 
    tiempoDeCambio = frameCount + duracionPorImagen;  // Preparar el próximo cambio
    background(0); 
    fondoDibujado = false; // Redibujar el fondo e imágenes
  }

  // Fondo una vez por ciclo
  if (!fondoDibujado) {
    image(fotos[imagenActual], 0, 0, width, height);  // Dibujar la imagen de fondo
    fondoDibujado = true;  // Evitar que se dibuje de nuevo en el siguiente frame
  }

  // Polígonos y sonido al hacer clic
  if (mouseIsPressed) {
    fill(fotos[imagenActual].get(mouseX, mouseY));
    stroke(200, 100);
    strokeWeight(2);
    poligonos(mouseX, mouseY, 25, mouseY / 10);
    
    // Pausa distorsión y reproduce ruido
    if (!sonRuido.isPlaying()) {
      sonDistorsion.pause();
      sonRuido.loop();
    }
  } else {
    // Al soltar el clic, pausa ruido y reproduce distorsión
    if (sonRuido.isPlaying()) {
      sonRuido.pause();
      if (!sonDistorsion.isPlaying()) {
        sonDistorsion.loop();
      }
    }
  }
  
  // Fotos con transparencias
  image(fotosT[imagenActual], 0, 0, width, height);
}

function poligonos(x, y, d, amp) {
  blendMode(OVERLAY); 
  
  beginShape();
  vertex(x-d/2 + random(-amp, amp), y-d/2 + random(-amp, amp));  
  vertex(x+d/2 + random(-amp, amp), y-d/2 + random(-amp, amp));  
  vertex(x+d/2 + random(-amp, amp), y+d/2 + random(-amp, amp));  
  vertex(x-d/2 + random(-amp, amp), y+d/2 + random(-amp, amp));
  endShape(CLOSE);
  
  blendMode(BLEND);
}