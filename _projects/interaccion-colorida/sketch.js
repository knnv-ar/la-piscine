let colors = [];
let currentColor;
let brushSize = 5;
let img;
let bgMusic;

function preload() {
  img = loadImage("Georges_Seurat_031.jpg");
  bgMusic = loadSound("bugs_puntillismo.mp3"); // Musica de fondo
}

function setup() {
  let canvas = createCanvas(650, 550);
  canvas.parent('div-sketch');
  background(255);
  
  image(img, 0, 0, width, height);
  

  bgMusic.loop();
  
   // Aca define los colores inspirados en "Tarde de domingo en la isla de la Grande Jatte"
  colors = [
    color(130, 185, 145), // Verde claro
    color(80, 104, 50),   // Verde oscuro
    color(255, 228, 196), // Color piel
    color(255, 150, 30),  // Naranja claro
    color(0, 80, 134),    // Azul oscuro
    color(255, 240, 100), // Amarillo suave
    color(200, 50, 50),   // Rojo suave
    color(30, 30, 30)     // Negro
  ];
  
  // Esto selecciona el primer color por defecto
  currentColor = colors[0];
}

function draw() {
  if (mouseIsPressed && mouseX < 650 && mouseY < 550) { 
    fill(currentColor);
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
  
  drawPalette();
}

// Función para generar la paleta de colores
function drawPalette() {
  for (let i = 0; i < colors.length; i++) {
    let x = 620; 
    let y = 50 + i * 40;
    fill(colors[i]);
    rect(x, y, 30, 30);
  }
}

// Cambiar el color actual al hacer clic en uno de los colores de la paleta
function mousePressed() {
  for (let i = 0; i < colors.length; i++) {
    let x = 620; // X position for the palette
    let y = 50 + i * 40; // Y position for the palette
    if (mouseX > x && mouseX < x + 30 && mouseY > y && mouseY < y + 30) {
      currentColor = colors[i];
    }
  }
}
