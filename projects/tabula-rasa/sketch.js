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
  fuenteTexto = loadFont("./Montserrat-VariableFont_wght.ttf");

  imgCielo = loadImage("./cielovioleta.png");
  imgNinio = loadImage("./ninio.png");
  IMG_pantallaOjo = loadImage("./maquina.png");

  sndNotif    = loadSound("./notificacion.wav");
  sndAtiendan = loadSound("./atiendan.wav");
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

// maquinaCielo.js
// Máquina de poleas con rueda central + IMG MAQ
// Modo fantasma gris claro-gris oscuro cuando se activa.

let mc_tiempoActivo = 0;   // vida visual de la máquina (memoria temporal)
let MC_texPantalla = null; // textura de brazo+celu
let MC_texCentro   = null; // textura del centro (disco con ruido)

// --- offsets globales para mover la máquina en el cielo ---
const MC_offsetX = -220;   // negativo = hacia la izquierda
const MC_offsetY = 80;     // positivo = más abajo

// ----------------------------------------------------------
// Constantes internas (solo organización)
// ----------------------------------------------------------
const MC_VIDA_MAX = 360;

// Columna zig-zag
const MC_COL_FRACC_Y = [0, 0.18, 0.36, 0.58, 0.8, 0.96];
const MC_COL_DESP_X  = [-25, 35, -32, 38, -26, 14];

// Partículas
let particulasAire = [];
const MC_PART_MAX = 200;

// ----------------------------------------------------------
// INICIALIZAR TEXTURAS
// ----------------------------------------------------------
function initTexturasMaquinaCielo() {
  if (typeof IMG_pantallaOjo !== "undefined" && IMG_pantallaOjo) {
    MC_texPantalla = IMG_pantallaOjo;
  }

  if (!MC_texCentro) {
    MC_texCentro = crearTexturaCentro(256, 256);
  }
}

// ----------------------------------------------------------
// RUEDAS
// ----------------------------------------------------------
function crearMaquinaCielo() {
  const baseZ = -330;
  const offY  = -70;

  const ruedas = [
    // IZQUIERDA
    { cx: -280, cy: -230 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) },
    { cx: -280, cy: -165 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) },
    { cx: -280, cy: -100 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) },

    // CENTRO
    { cx: 0, cy: -175 + offY, cz: baseZ +  8, radio: 85, rot: random(TWO_PI) },

    // rueda principal
    {
      cx: 0,
      cy: -260 + offY,
      cz: baseZ + 15,
      radio: 95,
      rot: random(TWO_PI),
      esRuedaGrande: true
    },

    { cx: 0, cy: -295 + offY, cz: baseZ +  8, radio: 85, rot: random(TWO_PI) },

    // DERECHA
    { cx: 280, cy: -230 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) },
    { cx: 280, cy: -165 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) },
    { cx: 280, cy: -100 + offY, cz: baseZ,     radio: 70, rot: random(TWO_PI) }
  ];

  return { ruedas };
}

// ----------------------------------------------------------
// DIBUJO PRINCIPAL
// ----------------------------------------------------------
function dibujarMaquinaCielo(maquina, aire, t) {
  if (!maquina || !maquina.ruedas) return;

  const ruedas = maquina.ruedas;
  const rMain  = ruedas[4]; // rueda central principal

  // Vida visual según soplido: evita comportamiento binario
  if (aire > 0.02) mc_tiempoActivo = MC_VIDA_MAX;
  else mc_tiempoActivo = max(0, mc_tiempoActivo - 1);

  const vidaNorm = mc_tiempoActivo / MC_VIDA_MAX;

  // Energía instantánea: controla velocidad/intensidad
  const energia  = constrain(map(aire, 0.05, 0.6, 0, 1), 0, 1);

  // Activación final: mezcla memoria + energía actual
  const activ    = max(vidaNorm, energia);

  // Visibilidad: fade suave de la “presencia” del sistema
  const vis      = lerp(0.12, 1.0, easeOutQuart(constrain(vidaNorm, 0, 1)));

  // Drift: micro movimiento para que no quede rígido
  const driftX = sin(t * 0.0015) * 4;
  const driftY = cos(t * 0.0013) * 3;

  // Rotación de ruedas: depende de energía
  for (let r of ruedas) {
    r.rot += 0.004 + energia * 0.035;
  }

  const colFantasma = color(220, 220, 230);
  const colLlena    = color(80, 80, 95);

  push();
  rotateY(sin(t * 0.0003) * 0.04);

  // --- SOPORTE MECÁNICO (columna que llega al suelo) ---
  const xColumna = rMain.cx + driftX + MC_offsetX;
  const yInicioColumna = rMain.cy + driftY + MC_offsetY + rMain.radio * 0.4;

  // Se toma la y del suelo desde ESCENA si existe
  let ySuelo = 300;
  if (typeof ESCENA !== "undefined" && ESCENA.suelo) {
    ySuelo = ESCENA.suelo.y - 15;
  }
  const zColumna = rMain.cz - 8;

  dibujarColumnaMecanica(
    xColumna,
    yInicioColumna,
    zColumna,
    ySuelo,
    vis,
    energia,
    t
  );

  // --- RUEDA CENTRAL + CENTRO ---
  dibujarRuedaAro(rMain, driftX, driftY, colFantasma, colLlena, activ, vis);
  dibujarCentroPlanoTexturizado(rMain, driftX, driftY, activ, vis);

  // --- Brazos con celulares ---
  dibujarBrazosRuedaCentral(ruedas, driftX, driftY, activ, vis);

  pop();
}

// ----------------------------------------------------------
// ARO CENTRAL METÁLICO
// ----------------------------------------------------------
function dibujarRuedaAro(r, dx, dy, colFantasma, colLlena, activ, vis) {
  const cx = r.cx + dx + MC_offsetX;
  const cy = r.cy + dy + MC_offsetY;
  const cz = r.cz;

  const mezcla = lerpColor(colFantasma, colLlena, activ);
  const baseR  = r.radio;

  const Rint = baseR * 0.86;
  const Rext = baseR * 1.18;

  push();
  translate(cx, cy, cz);

  const fr = red(mezcla)   * 0.75;
  const fg = green(mezcla) * 0.75;
  const fb = blue(mezcla)  * 0.75;

  // Aro grueso relleno
  noStroke();
  fill(fr, fg, fb, 235 * vis);

  beginShape(TRIANGLE_STRIP);
  for (let i = 0; i <= 64; i++) {
    const a = TWO_PI * i / 64 + r.rot;
    const c = cos(a);
    const s = sin(a);
    vertex(c * Rext, s * Rext, 0);
    vertex(c * Rint, s * Rint, 0);
  }
  endShape();

  // Bordes para filo metálico
  stroke(fr * 1.1, fg * 1.1, fb * 1.1, 220 * vis);
  strokeWeight(2);
  noFill();
  circle(0, 0, Rext * 2);

  stroke(fr * 0.8, fg * 0.8, fb * 0.8, 170 * vis);
  strokeWeight(1.5);
  circle(0, 0, Rint * 2);

  // Pernos donde se agarran los brazos
  const cantBrazos = 5;
  const offsetAng  = -HALF_PI;
  const radioPerno = (Rext + Rint) * 0.5;

  noStroke();
  for (let i = 0; i < cantBrazos; i++) {
    const ang = offsetAng + TWO_PI * i / cantBrazos + r.rot;
    const px  = cos(ang) * radioPerno;
    const py  = sin(ang) * radioPerno;

    fill(fr * 0.8, fg * 0.8, fb * 0.8, 235 * vis);
    circle(px, py, baseR * 0.18);

    fill(220, 220, 230, 245 * vis);
    circle(px, py, baseR * 0.08);
  }

  pop();
}

// ----------------------------------------------------------
// CENTRO PLANO TEXTURIZADO
// ----------------------------------------------------------
function dibujarCentroPlanoTexturizado(r, dx, dy, activ, vis) {
  if (!MC_texCentro) return;

  const cx = r.cx + dx + MC_offsetX;
  const cy = r.cy + dy + MC_offsetY;
  const cz = r.cz;

  const radioDisco = r.radio * 0.75;
  const size = radioDisco * 2;

  push();
  translate(cx, cy, cz + 5);

  // Se desactiva depth test para evitar artefactos en el plano del centro
  const gl = drawingContext;
  gl.disable(gl.DEPTH_TEST);

  texture(MC_texCentro);
  noStroke();
  plane(size, size);

  gl.enable(gl.DEPTH_TEST);
  pop();
}

// ----------------------------------------------------------
// Textura metálica para el centro
// ----------------------------------------------------------
function crearTexturaCentro(w, h) {
  const pg = createGraphics(w, h);
  pg.pixelDensity(1);
  pg.noiseDetail(3, 0.5);

  pg.clear();
  pg.loadPixels();

  const cx = w / 2;
  const cy = h / 2;
  const maxR = min(w, h) / 2;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const d = sqrt(dx * dx + dy * dy);
      const n = d / maxR;

      if (n <= 1) {
        let g = map(noise(x * 0.04, y * 0.04), 0, 1, 130, 190);
        g = lerp(g, 90, pow(n, 1.5));
        pg.set(x, y, color(g));
      } else {
        pg.set(x, y, color(0, 0, 0, 0));
      }
    }
  }
  pg.updatePixels();

  const rAnillo = maxR * 0.35;
  const rPunto  = maxR * 0.20;

  pg.push();
  pg.noFill();
  pg.stroke(60, 60, 70, 180);
  pg.strokeWeight(w * 0.03);
  pg.circle(cx, cy, maxR * 1.8);

  pg.stroke(80, 80, 90, 220);
  pg.strokeWeight(w * 0.02);
  pg.circle(cx, cy, rAnillo * 2);

  pg.noStroke();
  pg.fill(200, 200, 210, 230);
  pg.circle(cx, cy, rPunto * 2);
  pg.pop();

  return pg;
}

// ----------------------------------------------------------
// BRAZOS (5) – mano grande, anclada al tornillo, más derecha
// ----------------------------------------------------------
function dibujarBrazosRuedaCentral(ruedas, dx, dy, activ, vis) {
  if (!MC_texPantalla) return;

  const rMain = ruedas[4];
  const cx = rMain.cx + dx + MC_offsetX;
  const cy = rMain.cy + dy + MC_offsetY;
  const cz = rMain.cz;

  const imgW = MC_texPantalla.width  || 400;
  const imgH = MC_texPantalla.height || 800;
  const ratio = imgH / imgW;

  const altoMano  = rMain.radio * 2.8;
  const anchoMano = altoMano / ratio;

  const cantidadBrazos = 5;
  const offsetAng      = -HALF_PI;

  const rArticInner = rMain.radio * 0.45;
  const rArticOuter = rMain.radio * 0.90;

  const rTornillo = rMain.radio * 1.18;
  const offsetMano = rMain.radio * 0.12;

  const giroMano = -HALF_PI;

  push();
  translate(cx, cy, cz);
  rotateZ(rMain.rot);

  stroke(80, 80, 95, 230 * vis);
  fill(50, 50, 65, 220 * vis);

  for (let i = 0; i < cantidadBrazos; i++) {
    const ang = offsetAng + TWO_PI * i / cantidadBrazos;

    push();
    rotateZ(ang);

    circle(rArticInner, 0, rMain.radio * 0.18);
    circle(rArticOuter, 0, rMain.radio * 0.18);

    strokeWeight(6);
    line(rArticInner, 0, rArticOuter, 0);

    strokeWeight(5);
    line(rArticOuter, 0, rTornillo, 0);

    circle(rTornillo, 0, rMain.radio * 0.14);

    push();
    translate(rTornillo + offsetMano, 0, 0);
    rotateZ(giroMano);

    noStroke();
    texture(MC_texPantalla);
    tint(255, (120 + 110 * activ) * vis);
    plane(anchoMano, altoMano);
    noTint();

    pop();
    pop();
  }

  pop();
}

// ----------------------------------------------------------
// COLUMNA MECÁNICA EN ZIG-ZAG
// ----------------------------------------------------------
function dibujarColumnaMecanica(xCol, yInicio, zCol, ySuelo, vis, energia, t) {
  const altura = ySuelo - yInicio;
  if (altura <= 0) return;

  push();
  translate(xCol, yInicio, zCol);

  const alfaLinea = 220 * vis;
  stroke(80, 80, 95, alfaLinea);
  strokeWeight(10);
  fill(45, 45, 60, 230 * vis);

  // Tramos: se calculan al vuelo para no crear objetos por frame
  for (let i = 0; i < MC_COL_FRACC_Y.length - 1; i++) {
    const x1 = MC_COL_DESP_X[i];
    const y1 = MC_COL_FRACC_Y[i] * altura;
    const x2 = MC_COL_DESP_X[i + 1];
    const y2 = MC_COL_FRACC_Y[i + 1] * altura;
    line(x1, y1, x2, y2);
  }

  // Poleas
  for (let i = 0; i < MC_COL_FRACC_Y.length; i++) {
    const px = MC_COL_DESP_X[i];
    const py = MC_COL_FRACC_Y[i] * altura;

    // Última polea un poco más chica
    const d = (i === MC_COL_FRACC_Y.length - 1) ? 26 : 40;
    circle(px, py, d);
  }

  // Engranajes
  const anguloEngranaje = t * 0.04 * (0.4 + energia);

  const g1x = MC_COL_DESP_X[1];
  const g1y = MC_COL_FRACC_Y[1] * altura;
  const g2x = MC_COL_DESP_X[3];
  const g2y = MC_COL_FRACC_Y[3] * altura;

  dibujarEngranaje2D(g1x, g1y, 26, anguloEngranaje);
  dibujarEngranaje2D(g2x, g2y, 22, -anguloEngranaje * 1.2);

  // Base de apoyo
  const yBase = altura + 30;
  const pataAncho = 90;
  const pataAlto  = 16;

  push();
  translate(-70, yBase - 5);
  rotate(radians(-13));
  rectMode(CENTER);
  rect(0, 0, pataAncho, pataAlto);
  pop();

  push();
  translate(70, yBase - 5);
  rotate(radians(13));
  rectMode(CENTER);
  rect(0, 0, pataAncho, pataAlto);
  pop();

  push();
  rectMode(CENTER);
  rect(0, yBase - 20, 80, 26);
  pop();

  pop();
}

// ----------------------------------------------------------
// Engranaje 2D (columna)
// ----------------------------------------------------------
function dibujarEngranaje2D(x, y, radio, angulo) {
  push();
  translate(x, y);
  rotate(angulo);

  const dientes = 12;

  beginShape();
  for (let i = 0; i < dientes; i++) {
    const a = TWO_PI * i / dientes;
    const r = (i % 2 === 0) ? radio : radio * 0.7;
    vertex(cos(a) * r, sin(a) * r);
  }
  endShape(CLOSE);

  fill(35, 35, 50);
  circle(0, 0, radio * 0.9);

  pop();
}

// Mantengo esta función por compatibilidad, pero delega al engranaje 2D.
// No cambia nada visual, solo evita duplicación.
function dibujarEngranaje(x, y, radio, angulo) {
  dibujarEngranaje2D(x, y, radio, angulo);
}

// ----------------------------------------------------------
// easing
// ----------------------------------------------------------
function easeOutQuart(x) {
  return 1 - pow(1 - x, 4);
}

// ----------------------------------------------------------
// PARTICULAS ESFÉRICAS EN EL AIRE
// ----------------------------------------------------------
function crearParticulaAire() {
  return {
    x: random(-320, 320),
    y: random(-200, 200),
    z: random(-150, -50),
    vx: random(-0.3, 0.3),
    vy: random(-0.1, -0.6),
    vz: random(-0.1, 0.1),
    vida: 255,
    tam: random(5, 14)
  };
}

function actualizarYdibujarParticulasAire(aire) {
  // Solo se crean partículas cuando hay aire
  if (aire > 0.03) {
    const cant = floor(map(aire, 0, 1, 1, 6));
    for (let i = 0; i < cant; i++) {
      particulasAire.push(crearParticulaAire());
    }
  }

  // Límite para evitar acumulación
  if (particulasAire.length > MC_PART_MAX) {
    particulasAire.splice(0, particulasAire.length - MC_PART_MAX);
  }

  // Update + render
  for (let i = particulasAire.length - 1; i >= 0; i--) {
    const p = particulasAire[i];

    p.x += p.vx + aire * 2.2;
    p.y += p.vy - aire * 0.5;
    p.z += p.vz;
    p.vida -= 2;

    if (p.vida <= 0) {
      particulasAire.splice(i, 1);
      continue;
    }

    push();
    noStroke();
    fill(255, 255, 255, p.vida);
    translate(p.x, p.y, p.z);
    sphere(p.tam * 0.15, 6, 6);
    pop();
  }
}