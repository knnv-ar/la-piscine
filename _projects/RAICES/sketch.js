// UNA - ARTES MULTIMEDIALES 1 - TP2
// Título de la obra: Raices
// Autor: Avila Micaela
// Año: 2024

// declaró variables
let img;
let minimo = 1;
let maximo = 10;
let sonido;

function preload() {
  img = loadImage("foto1.jpg");
  sonido = loadSound("sonido.mp3");
}

function setup() {
//  createCanvas(800, 902);
let canvas = createCanvas(800, 902);
canvas.parent('div-sketch');
  // background(255);
  //sonido.stop();
  //  sonido.play();
  sonido.loop();
}

function draw() {
  let imagen = img;

  //let lineas = map(mouseX, 0, width, minimo, maximo);

  for (let i = 0; i <= 100; i++) {
    let x = random(img.width);
    let y = random(img.height);
    let angulo = random(-10, 10);
    let pix = img.get(x, y);

    // strokeWeight(lineas);
    stroke(pix);
    line(x, y, x, y + angulo);
  }
}
