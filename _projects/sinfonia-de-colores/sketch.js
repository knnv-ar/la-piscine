let fondo;
let personaje;
let elefante;
let burbuja;
let sonido;
let corazones = [];
let mostrarA = false;
let mostrarR = false;
let mostrarZ = false;
let mostrarL = false;
let mostrarN = false;
let mostrarV = false;
let mostrarT = false;
let mostrarC = false;
let mostrarS = false;

function preload() {
  fondo = loadImage("img/fondo.jpeg");
  personaje = loadImage("img/personaje.png")
  elefante = loadImage("img/elefante.png")
  sonido = loadSound("sonido/audioA.mp3")
  burbuja = loadImage("gif/gifburbuja.gif")
  corazones[1] = loadImage("img/amarillo.png");
  corazones[2] = loadImage("img/rojo.png");
  corazones[3] = loadImage("img/azul.png");
  corazones[4] = loadImage("img/lima.png");
  corazones[5] = loadImage("img/naranja.png");
  corazones[6] = loadImage("img/verde.png");
  corazones[7] = loadImage("img/violeta.png");
  corazones[8] = loadImage("img/celeste.png");
  corazones[9] = loadImage("img/rosa.png");
}
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  tint(200,200);
  image(fondo,0,0,500,400);
  
  //Mostrar Corazones
  noTint();
  if (mostrarA) {
    image(corazones[1],90,60,200,200);
  }  
  if (mostrarR) {
    image(corazones[2],90,60,200,200);
  }
  if (mostrarZ) {
    image(corazones[3],90,60,200,200);
  }
  if (mostrarL) {
    image(corazones[4],90,60,200,200);
  }
    if (mostrarN) {
    image(corazones[5],90,60,200,200);
  }
    if (mostrarV) {
    image(corazones[6],90,60,200,200);
  }
    if (mostrarT) {
    image(corazones[7],90,60,200,200);
  }
    if (mostrarC) {
    image(corazones[8],90,60,200,200);
  }
    if (mostrarS) {
    image(corazones[9],90,60,200,200);
  }
  //Mostrar personaje
  noTint();
  image(personaje,100,200,200,200);
  
  //Mostrar elefante
  noTint();
  image(elefante,220,180,230,230);
  
  //Mostrar burbuja
  if (mouseIsPressed) {
    image(burbuja,220,180,100,100);
 }
}
  function keyPressed() {
  if (key === 'n' || key === 'N') {
  if (!sonido.isPlaying()) { //Empieza
    sonido.play();
 }
}
  if (key === 'm' || key === 'M') {
  if (sonido.isPlaying()) { // Para
    sonido.stop();
 }
}
  if (key === "1" ) {
  mostrarA = true;
  }
    if (key === "2" ) {
  mostrarR = true;
  }
    if (key === "3" ) {
  mostrarZ = true;
  }
    if (key === "4" ) {
  mostrarL = true;
  }
    if (key === "5" ) {
  mostrarN = true;
  }
    if (key === "6" ) {
  mostrarV = true;
  }
    if (key === "7" ) {
  mostrarT = true;
  }
    if (key === "8" ) {
  mostrarC = true;
  }
    if (key === "9" ) {
  mostrarS = true;
  }
}