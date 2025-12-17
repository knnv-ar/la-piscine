// TABULA RASA — escena “máquina cielo”
// Tecla M/m: enciende y apaga el micrófono
// Soplar / Flechas simulan aire

let imgCielo, imgNinio;
let IMG_pantallaOjo;

let micro, amp;
let aire = 0;
let audioListo = false;
let microEncendido = false;

let t = 0;
let texSuelo;
let ESCENA;

let maquinaCielo = [];

// ---- Texto inicial ----
let tiempoTexto = 700;
let fuenteTexto;

// ---- Sonidos ----
let sndNotif = null;
let sndAtiendan = null;

let timerAtiendan = 0;
let atiendanPendientes = 0;
let estabaActiva = false;

// ---- Sensibilidad ----
const SOPLIDO_UMBRAL = 0.12;
const SOPLIDO_SUAVIZ = 0.20;

function preload() {
  fuenteTexto = loadFont("fuentes/Montserrat-VariableFont_wght.ttf");

  imgCielo = loadImage("imagenes/cielovioleta.png");
  imgNinio = loadImage("imagenes/ninio.png");
  IMG_pantallaOjo = loadImage("imagenes/maquina.png");

  sndNotif    = loadSound("sonidos/notificacion.wav");
  sndAtiendan = loadSound("sonidos/atiendan.wav");
}

function setup() {
  let canvas=createCanvas(640, 640, WEBGL);
  canvas.parent('div-sketch');
  noStroke();
  perspective(PI / 3, width / height, 0.1, 2000);

  const zCam = (height / 2) / tan(PI * 30 / 180);
  camera(0, 0, zCam * 1.4, 0, 0, 0, 0, 1, 0);

  ESCENA = {
    cielo: { z: -420, escala: 2.6 },
    suelo: { y: 300, z: -200, rotX: HALF_PI - 0.03, ancho: 2600, fondo: 1600 },
    ninio: { x: 90, y: 185, z: 40, escala: 0.52 }
  };

  micro = new p5.AudioIn();
  amp   = new p5.Amplitude();
  amp.smooth(0.85);

  texSuelo = crearTexturaSuelo(1024, 512);

  // TEXTO
  textFont(fuenteTexto);
  textAlign(CENTER, CENTER);

  initTexturasMaquinaCielo();
  maquinaCielo = crearMaquinaCielo();
}

function draw() {
  background(0);
  t++;

  // ----- AIRE -----
  // Entrada principal del sistema.
  // Se transforma la amplitud del micrófono en una variable continua (aire),
  // aplicando umbral y suavizado para evitar respuestas bruscas.
  updateAire();

  // ----- SONIDO -----
  // Feedback sonoro dependiente del nivel de aire.
  // El sonido acompaña la activación visual de la máquina.
  updateSonidos();

  // ----- LUCES -----
  // La iluminación responde al aire para reforzar visualmente la activación.
  setupLuces();

  // ----- CIELO -----
  // Fondo estático, funciona como plano lejano.
  renderCielo();

  // ----- SUELO -----
  // Plano base de la escena, aporta profundidad.
  renderSuelo();

  // ----- MÁQUINA -----
  // Núcleo visual del sistema.
  // Su animación y visibilidad dependen del aire.
  dibujarMaquinaCielo(maquinaCielo, aire, t);

  // ----- PARTÍCULAS -----
  // Representación visual del aire en movimiento.
  // Solo aparecen cuando el sistema está activo.
  actualizarYdibujarParticulasAire(aire);

  // ----- NIÑO -----
  // Referencia humana en la escena.
  // Ayuda a dar escala y contexto.
  renderNinio();

  // ----- TEXTO INICIAL -----
  // Instrucciones iniciales.
  // Se muestran solo durante los primeros segundos.
  renderTextoInicial();
}
// ------------------------------------------------------
function energiaDeAire(a) {
  return constrain(map(a, 0.05, 0.6, 0, 1), 0, 1);
}

// ------------------------------------------------------
function updateAire() {
  // Si el micrófono está activo, se toma la amplitud del sonido
  // y se convierte en una señal normalizada.
  if (audioListo && microEncendido) {
    let lvl = amp.getLevel();
    if (lvl < 0.03) lvl = 0;

    // Mapeo del nivel crudo (a un rango 0–1)
    const aireCrudo = constrain(map(lvl, 0, 0.35, 0, 1), 0, 1);

    //ajuste de umbral para evitar activaciones accidentales
    const aireUmbral = aireCrudo > SOPLIDO_UMBRAL
      ? (aireCrudo - SOPLIDO_UMBRAL) / (1 - SOPLIDO_UMBRAL)
      : 0;

    // Suavizado temporal para que la respuesta no sea instantánea
    aire = lerp(aire, aireUmbral, SOPLIDO_SUAVIZ);
  } else {
    // Si no hay micrófono activo, el sistema vuelve gradualmente al reposo
    aire = lerp(aire, 0, 0.15);
  }
}

// ------------------------------------------------------
function updateSonidos() {
  // La energía es una versión controlada del aire
  // que se reutiliza para sonido y animación.
  const energia = energiaDeAire(aire);

  // Sonido continuo que acompaña la actividad de la máquina
  if (sndNotif && sndNotif.isPlaying()) {
    sndNotif.setVolume(energia * 0.9);
    sndNotif.rate(1 + energia * 0.25);
  }

  // Detección de activación para disparar sonidos puntuales
  const activaAhora = aire > 0.18;

  if (activaAhora && !estabaActiva) {
    atiendanPendientes = 2;
    timerAtiendan = 0;
  }

  // Reproducción controlada para evitar superposición
  if (atiendanPendientes > 0 && sndAtiendan.isLoaded()) {
    timerAtiendan++;
    if (timerAtiendan > 25) {
      sndAtiendan.play();
      atiendanPendientes--;
      timerAtiendan = 0;
    }
  }

  estabaActiva = activaAhora;
}


// ------------------------------------------------------
function setupLuces() {
  ambientLight(100 + aire * 50);
  directionalLight(255, 255, 255, 0, 0, -1);
}

// ------------------------------------------------------
function renderCielo() {
  push();
  translate(0, 0, ESCENA.cielo.z);
  texture(imgCielo);
  plane(width * ESCENA.cielo.escala, height * ESCENA.cielo.escala);
  pop();
}

// ------------------------------------------------------
function renderSuelo() {
  push();
  translate(0, ESCENA.suelo.y, ESCENA.suelo.z);
  rotateX(ESCENA.suelo.rotX);
  texture(texSuelo);
  plane(ESCENA.suelo.ancho, ESCENA.suelo.fondo);
  pop();
}

// ------------------------------------------------------
function renderNinio() {
  push();
  translate(ESCENA.ninio.x, ESCENA.ninio.y, ESCENA.ninio.z);
  texture(imgNinio);
  plane(imgNinio.width * ESCENA.ninio.escala, imgNinio.height * ESCENA.ninio.escala);
  pop();
}

// ------------------------------------------------------
function renderTextoInicial() {
  if (tiempoTexto <= 0) return;
  tiempoTexto--;

  push();
  resetMatrix();
  translate(-width / 2, -height / 2);

  const alpha = map(tiempoTexto, 600, 0, 255, 0);

  const boxW = width * 0.55;
  const boxH = 130;
  const centerX = width * 0.74;
  const boxX = centerX - boxW / 2;
  const boxY = height * 0.32;

  // FONDO
  noStroke();
  fill(255, 250, 250, alpha * 0.92);
  rect(boxX, boxY, boxW, boxH, 18);

  // TEXTO
  const msg =
    "Pulsa M para encender el micrófono y sopla para activar la máquina.\n" +
    "Si dejas de soplar, se apagará.\n" +
    "Cuanto más fuerte soples, más rápido girará.";

  fill(20, 20, 20, alpha);
  textSize(15);
  text(msg, boxX, boxY, boxW, boxH);

  pop();
}

// ------------------------------------------------------
function crearTexturaSuelo(w, h) {
  const pg = createGraphics(w, h);
  pg.pixelDensity(1);
  for (let y = 0; y < h; y++) {
    const t = y / (h - 1);
    pg.stroke(lerp(35, 60, t), lerp(32, 55, t), lerp(45, 75, t));
    pg.line(0, y, w, y);
  }
  return pg;
}

// ------------------------------------------------------
function keyPressed() {
  if (key === 'M' || key === 'm') {
    if (!microEncendido) {
      userStartAudio()
        .then(() => {
          micro.start(() => amp.setInput(micro));
          audioListo = true;
          microEncendido = true;

          if (!sndNotif.isPlaying()) {
            sndNotif.loop();
            sndNotif.setVolume(0);
          }

          timerAtiendan = 0;
          atiendanPendientes = 0;
          estabaActiva = false;
        });
    } else {
      micro.stop();
      microEncendido = false;
      sndNotif.setVolume(0);
      atiendanPendientes = 0;
    }
  }
}
