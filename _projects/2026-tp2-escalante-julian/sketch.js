let imgs = [];
let actual = 0;
let pg;
const ANCHO = 400;

let sonido;
let audioIniciado = false;

let nivelGlitch = 0;
let brilloEsfera = 200;

const CONFIG_GLITCH = [
  { cortes: 0,  despMax: 0 },
  { cortes: 8,  despMax: 15 },
  { cortes: 22, despMax: 40 },
  { cortes: 45, despMax: 80 }
];

async function setup() {
let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('div-sketch');

  imgs = await Promise.all([
    loadImage('imagenes/imgtp2-2.webp'),
    loadImage('imagenes/imgtp2-3.webp'),
    loadImage('imagenes/imgtp2.webp')
  ]);

  sonido = createAudio('audio/sade-hang-reco.mp3');
  sonido.volume(1.0);
  sonido.elt.loop = true;
  sonido.elt.play()
    .then(() => { audioIniciado = true; })
    .catch(() => {});

  pg = createGraphics(600, 400);
  ajustarTextura();
  alterarImagen();
}

function draw() {
  background(10);
  orbitControl();

  if (nivelGlitch > 0 && frameCount % 4 === 0) {
    alterarImagen();
  }

  dibujarFondoImagen();

  let img = imgs[actual];
  let alto = ANCHO * img.height / img.width;
  let flote = sin(frameCount * 0.03) * 15;

  noStroke();
  push();
  translate(0, flote, 0);

  //marco
  fill(30);
  box(ANCHO + 30, alto + 30, 8);

  //frontal
  push();
  translate(0, 0, 4.5);
  texture(pg);
  plane(ANCHO, alto);
  pop();

  //atras
  push();
  translate(0, 0, -4.5);
  rotateY(PI);
  texture(pg);
  plane(ANCHO, alto);
  pop();

  pop();
}

function dibujarFondoImagen() {
  push();
  scale(-1, 1, 1);
  tint(brilloEsfera);
  texture(pg);
  noStroke();
  sphere(2500, 24, 16);
  pop();
  noTint();
}

function ajustarTextura() {
  let img = imgs[actual];
  let w = 550;
  let h = floor(w * img.height / img.width);
  pg.resizeCanvas(w, h);
}

function alterarImagen() {
  let img = imgs[actual];
  pg.image(img, 0, 0, pg.width, pg.height);

  if (nivelGlitch === 0) return;

  let { cortes, despMax } = CONFIG_GLITCH[nivelGlitch];
  for (let i = 0; i < cortes; i++) {
    let y = floor(random(pg.height));
    let h = floor(random(2, 30));
    let desp = floor(random(-despMax, despMax));
    pg.copy(pg, 0, y, pg.width, h, desp, y, pg.width, h);
  }
}

//antibloqueo navegador
function activarAudioPorInteraccion() {
  if (sonido && !audioIniciado) {
    sonido.elt.loop = true;
    sonido.elt.play()
      .then(() => { audioIniciado = true; })
      .catch(() => {});
  }
}

function mousePressed() {
  activarAudioPorInteraccion();
}

function keyPressed() {
  activarAudioPorInteraccion();

  if (key === '1') cambiarImagen(0);
  if (key === '2') cambiarImagen(1);
  if (key === '3') cambiarImagen(2);
  if (key === '4') {
    nivelGlitch = (nivelGlitch + 1) % 4;
    alterarImagen();
  }
}

function cambiarImagen(i) {
  if (i === actual) return;
  actual = i;
  ajustarTextura();
  alterarImagen();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}