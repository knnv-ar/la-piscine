let videoFondo;
let musica;

let isLoaded = false;

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 480;

// Variables simples para la opacidad de cada círculo
let op0 = 100;
let op1 = 100;
let op2 = 100;

async function setup() {
  pixelDensity(1);
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.parent('div-sketch');
  imageMode(CENTER);

  musica = await loadSound('audio.mp3');

  videoFondo = createVideo('videofondo.mp4');
  videoFondo.volume(0);
  videoFondo.loop();
  videoFondo.hide();

  isLoaded = true;
}

function draw() {
  if (!isLoaded) return;

  background(0);

  // VIDEO DE FONDO
  if (videoFondo) {
    image(videoFondo, width / 2, height / 2, width, height);
  }

  // Variación de opacidad de los círculos
  if (random(1) < 0.15) {
    op0 = random(5, 100);
  }
  if (random(1) < 0.8) {
    op1 = random(5, 75);
  }
  if (random(1) < 0.3) {
    op2 = random(5, 50);
  }

  // DIBUJAR LOS 3 CÍRCULOS DE AFUERA HACIA ADENTRO
  noStroke();
  let cx = width / 2;
  let cy = height / 2;

  // Círculo 3 (exterior)
  fill(0, op0);
  circle(cx, cy, 800);

  // Círculo 2 (medio)
  fill(0, op1);
  circle(cx, cy, 550);

  // Círculo 1 (centro)
  fill(0, op2);
  circle(cx, cy, 200);

  // Texto de instrucción
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(13);
  textFont('Syne');
  text("USA LA BARRA ESPACIADORA PARA ACTIVAR / PAUSAR SONIDO", width / 2, height - 25);
}

// Play música con barra espaciadora
function keyPressed() {
  if (key === ' ' || keyCode === 32) {
    userStartAudio();

    if (musica) {
      if (!musica.isPlaying()) {
        musica.loop(true);
        musica.play();
      } else {
        musica.pause();
      }
    }
    return false;
  }
}