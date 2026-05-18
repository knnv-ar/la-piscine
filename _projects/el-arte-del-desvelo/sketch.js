//  EL ARTE DEL DESVELO
//  Lucrecia Artusi - AM1. TP2
//  Inspirado en Louise Bourgeois, "The Insomnia Drawings".       1994–95

let tex;
let tela;
let sonido;
let lapiz;
let x1 = 250;
let y1 = 250;
let x2 = 250;
let y2 = 250;
let tamañocanvas = 512;
let aleatorioMax = 40, aleatorioMin = 20;
let reinicioCada = 60 * 60;  // Reinicia cada 60 segundos (60s * 60 FPS)

function preload() {
  tela = loadImage('tela.jpg');
  sonido = loadSound("sonido.mp3");
  lapiz = loadSound("sonido2.mp3");
}

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);

  // GRAFICO TEXTURA
  tex = createGraphics(tamañocanvas, tamañocanvas);
  tex.background(173, 216, 230); // Celeste
  
  // Posicion inicial
  x1 = x2 = tamañocanvas / 2;
  y1 = y2 = tamañocanvas / 2;
  
  // Sonido ambiente
  sonido.play();
  sonido.loop();
  sonido.amp(0.5);
  
  // Sonido lápiz
  lapiz.play();
  lapiz.loop();
  lapiz.amp(0.3);
}


function draw() {
  // Cada 60 segundos
  if (frameCount % reinicioCada === 0) {
    tex.background(173, 216, 230); // Fondo celeste
    x1 = x2 = tamañocanvas / 2; // Posicion inicial
    y1 = y2 = tamañocanvas / 2; // Posicion inicial
  }

  background(0); 
  orbitControl();
  
  // Movimiento aleatorio
  let dx = random(aleatorioMax) - aleatorioMin;
  let dy = random(aleatorioMax) - aleatorioMin;

  // Actualiza posiciones
  x1 = x2;
  y1 = y2;
  
  x2 = constrain(x2 + dx, 0, tamañocanvas);
  y2 = constrain(y2 + dy, 0, tamañocanvas);

  // Línea
  tex.stroke(255, 0, 0); // Rojo
  tex.line(x1, y1, x2, y2);

  // CAMA
  push();
  texture(tex); 
  stroke(255);
  strokeWeight(0.5);
  rotateX(60);
  box(280, 400, 40); 
  pop();
  
  // ALMOHADA 1
  push();
  translate(-60, -95, -100);
  texture(tela);
  stroke(255);
  strokeWeight(0);
  rotateX(60);
  box(110, 60, 15);
  pop();
  
  // ALMOHADA 2
  push();
  translate(60, -95, -100);
  texture(tela);
  stroke(255);
  strokeWeight(0);
  rotateX(60);
  box(110, 60, 15);
  pop(); 
}

