/* Título de Obra: La Danza de las Sombras */

let fondo;
let corazón;
let feliz;
let triste;
let doscaras;
let escapar;
let pesadez;
let consuelo;
let sufrimiento;
let manos;
let fondoc;
let caras;
let manosPared;
let luces;
let columna; 
let luz;
let niebla;
let tormenta;
let rayos;
let rayos2;
let nubesn;

let imagenActual; // Imagen actual que se muestra
let planoSize = 300; // Tamaño del plano rotante

let musicaC, musicaCF, musicaT, musicaDC; // Variables para las canciones
let volumenMusica = 0.5; // Ajusta el volumen

function preload() {
  fondo = loadImage("img/fondopared.webp");
  corazón = loadImage("img/corazon.webp");
  feliz = loadImage("img/cara-feliz.webp");
  triste = loadImage("img/cara-consuelo.webp");
  doscaras = loadImage("img/dos-caras.webp");
  escapar = loadImage("img/cara-escapar.webp");
  pesadez = loadImage("img/cara-pesadez.webp");
  consuelo = loadImage("img/cara-consuelo.webp");
  sufrimiento = loadImage("img/cara-sufrimiento.webp");
  manos = loadImage("img/manos.webp");
  fondoc = loadImage("img/fondoc.webp");
  caras = loadImage("img/caras.webp");
  manosPared = loadImage("img/manos-pared.webp");
  luces = loadImage("img/luces.webp");
  columna = loadImage("img/columna.webp");
  luz = loadImage("img/luz.webp");
  niebla = loadImage("img/fondoniebla.webp");
  
  //cargar gifs
  tormenta = loadImage("img/tormenta.webp")
  rayos = loadImage("img/rayos-rojos.webp")
  rayos2 = loadImage("img/rayos2.webp")
  nubesn = loadImage("img/nubesnegras.webp")

  imagenActual = corazón;
  // cargar música
  musicaC = loadSound("musica_corazón.mp3");
  musicaCF = loadSound("musica_carafeliz.mp3");
  musicaT = loadSound("musica_triste.mp3");
  musicaDC = loadSound("musica_doscaras.mp3");
  musicaE = loadSound("musica_escapar.mp3");
  
  musicaC.setVolume(volumenMusica);
  musicaCF.setVolume(volumenMusica);
  musicaT.setVolume(volumenMusica);
  musicaDC.setVolume(volumenMusica);
  musicaE.setVolume(volumenMusica);
}

function setup() {
  createCanvas(600, 500, WEBGL);
  musicaC.play();
}

function draw() {
  background(0);

  // Fondo estático
  image(fondo, -300, -250, 600, 500);
  
  push();
  tint(250, 20);
  image(luces, -300, -250, 600, 500);
  pop();

  push();
  tint(200, 200);
  image(fondoc, -155, -128, 310, 258);
  pop();
  
  push();
  tint(255, 200);
  image(caras, -400, -200, 250, 250);
  pop();
  
  push();
  tint(255, 200);
  image(manosPared, 90, -128, 280, 280);
  pop();
    
  push();
  tint(200, 300);
  image(manos, -155, -128, 310, 258);
  pop();
  
  push();
  tint(255, 150);
  image(niebla,-300,-250,600,500);
  pop();
  
  
  push();
  tint(100,150);
  image(tormenta, -300, -250, 600,500);
  pop();
  
  push();
  tint(200,200);
  image(columna, -195, 110, 400, 358);
  pop();

  // //luz
  // push();
  // image(luz, -190,-250, 400, 358);
  // pop()

  // Corazón rotando como textura en un plano
  push();
  noStroke();
  texture(imagenActual);
  tint(250, 600); //entre 150 y 100
  translate(0, 0, 100);
  rotateY(frameCount * 0.01); // Rotación suave
  plane(planoSize, planoSize); // Plano de 300x300
  pop();
}

function mousePressed() {
  // Detener toda la música antes de iniciar la siguiente
  detenerMusica();

  // Secuencia de cambio de imágenes y reproducción de música instantánea con loop
  if (imagenActual === corazón) {
    imagenActual = feliz;
    musicaCF.play(); // Reproduce de inmediato
    musicaCF.loop(); // Asegura que siga en bucle
    musicaCF.setVolume(volumenMusica);
  } else if (imagenActual === feliz) {
    imagenActual = triste;
    musicaT.play();
    musicaT.loop();
    musicaT.setVolume(volumenMusica);
  } else if (imagenActual === triste) {
    imagenActual = doscaras;
    musicaDC.play();
    musicaDC.loop();
    musicaDC.setVolume(volumenMusica);
  } else if (imagenActual === doscaras) {
    imagenActual = escapar;
    musicaE.play();
    musicaE.loop();
    musicaE.setVolume(volumenMusica);
  } else {
    imagenActual = corazón; // Volver al principio
    musicaC.play();
    musicaC.loop();
    musicaC.setVolume(volumenMusica);
  }
}

function detenerMusica() {
  musicaC.stop();
  musicaCF.stop();
  musicaT.stop();
  musicaDC.stop();
  musicaE.stop();
}