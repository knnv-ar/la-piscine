// A cada click aparece un video nuevo sobre la imagen, también cambia la frase.
// ESPACIO mutea la música..
 
let fondo;
let musica;
let videos = [];
 
// nombres de los 6 videos (en el orden en que aparecen)
let archivosVideo = [
  "archivos/recuerdo1.mp4",
  "archivos/recuerdo2.mp4",
  "archivos/recuerdo3.mp4",
  "archivos/recuerdo4.mp4",
  "archivos/recuerdo5.mp4",
  "archivos/recuerdo6.mp4",
];
let cantidad = 0; // cuántos videos se están mostrando
let musicaIniciada = false;
let muteado = false;
 
// posiciones de los 6 videos
let posX = [0.5, 0.14, 0.86, 0.2, 0.5, 0.8];
let posY = [0.46, 0.2, 0.2, 0.82, 0.84, 0.82];
 
let frases = [
  "te extraño en verano",
  "¿te acordas de mi?",
  "hicimos un monton de cosas juntos",
  "siempre te espero",
  "espero que estes bien",
];
let fraseActual = 0;
let xFrase;
 
async function setup() {
  fondo = await loadImage("archivos/subte.jpg");
  musica = await loadSound("archivos/endofthesummer.mp3");
 
  // el lienzo mantiene la proporción de la imagen y entra en la ventana
  let ancho = min(windowWidth, (windowHeight * fondo.width) / fondo.height);
  createCanvas(ancho, (ancho * fondo.height) / fondo.width);
  canvas.parent('div-sketch');
 
  for (let i = 0; i < archivosVideo.length; i++) {
    videos[i] = createVideo(archivosVideo[i]);
    videos[i].volume(0);
    videos[i].hide();
  }
 
  textFont("Arial");
  textStyle(NORMAL);
  textSize(width * 0.03);
  xFrase = width;
}
 
function draw() {
  image(fondo, 0, 0, width, height);
 
  mostrarVideos();
  mostrarFrase();
}
 
function mostrarVideos() {
  let lado = width * 0.14;
  for (let i = 0; i < cantidad; i++) {
    let x = posX[i] * width - lado / 2;
    let y = posY[i] * height - lado / 2;
    image(videos[i], x, y, lado, lado);
    noFill();
    stroke(255);
    rect(x, y, lado, lado);
  }
}
 
function mostrarFrase() {
  xFrase = xFrase - 1;
  if (xFrase < -textWidth(frases[fraseActual])) {
    xFrase = width;
  }
  noStroke();
  fill(255);
  text(frases[fraseActual], xFrase, height * 0.64 + sin(frameCount * 0.05) * 10);
}
 
function mousePressed() {
  if (!musicaIniciada) {
    musica.loop(true);
    musica.play();
    musicaIniciada = true;
  }
 
  if (cantidad < videos.length) {
    videos[cantidad].loop();
    cantidad++;
  } else {
    cantidad = 0; // después del último, vuelve a empezar
  }
 
  fraseActual = (fraseActual + 1) % frases.length;
  xFrase = width;
}
 
function keyPressed() {
  if (key === " ") {
    muteado = !muteado;
    musica.amp(muteado ? 0 : 1);
    return false; // evita el scroll con la barra espaciadora
  }
}
 
