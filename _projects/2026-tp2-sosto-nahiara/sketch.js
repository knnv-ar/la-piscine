// Inspirado en You Are An Idiot, virus de broma de los años 2000
// Nombre de la obra: IDIOT
// Autora: Nahiara Aylen Sosto
// Año: 2026
// Hace click para recibir una sorpresa :D

// Imágenes y audios
let windows;
let msjError;
let imgPopupBlanco;
let imgPopupNegro;
let audioMusica;
let audioError;
let msjInicio;

// Configuración para los popups
const maxPopups = 150;
const popupsPorClick = 5;
let velocidad = 5;
let popups = [];

async function setup() {
  let canvas = createCanvas(496, 374);
  canvas.parent('div-sketch');

  windows = await loadImage("imagenes/desktop.webp");
  msjInicio = await loadImage("imagenes/mensaje-inicio.webp")
  msjError = await loadImage("imagenes/error.webp");
  imgPopupBlanco = await loadImage("imagenes/popup-blanco.webp");
  imgPopupNegro = await loadImage("imagenes/popup-negro.webp");
  audioMusica = await loadSound("audios/you-are-an-idiot.mp3");
  audioError = await loadSound("audios/error-windows.mp3");
}

function draw() {
  // Fondo del desktop
  image(windows, 0, 0, width, height);

  // Mensaje inicial
  if (popups.length === 0) {
    image(msjInicio, 0, 0, width, height);
  }

  // Movimiento y demás de los popups
  for (let i = 0; i < popups.length; i++) {
    let popupActual = popups[i];

    // Velocidad
    popupActual.x += popupActual.velocidadX;
    popupActual.y += popupActual.velocidadY;

    // Rebote en x
    if (popupActual.x > 450 || popupActual.x < -450) {
      popupActual.velocidadX *= -1;
    }

    // Rebote en y
    if (popupActual.y > 330 || popupActual.y < -330) {
      popupActual.velocidadY *= -1;
    }

    // Popups
    image(popupActual.imagen, popupActual.x, popupActual.y);
  }

  // Imagen de error
  if (popups.length >= maxPopups) {
  image(msjError, 0, 0, width, height);
  }
}

function mousePressed() {

  // Música del virus
  if (!audioMusica.isPlaying() && popups.length < maxPopups) {
    audioMusica.loop();
    audioMusica.play();
  }

  for (let i = 0; i < popupsPorClick; i++) {
    let imagenAsignada = random([imgPopupBlanco, imgPopupNegro]);

    popups.push({
      x: random(-450, 330),
      y: random(-450, 330),
      velocidadX: random([-velocidad, velocidad]),
      velocidadY: random([-velocidad, velocidad]),
      imagen: imagenAsignada,
    });

    velocidad++;
  }

  // Audio de error
  if (popups.length === maxPopups) {
    audioMusica.stop();
    audioError.play();
  }
  
  // Reinicio
  if (popups.length === 160) {
    popups = [];
    velocidad = 5;
    audioError.stop();
  }
}