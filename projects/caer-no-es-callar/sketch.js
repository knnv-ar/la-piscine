let fondo;
let fondo2;
let recortes = [];
let recortesActivos = [];
let sonido1;
let volumen = 0.05;
let transparencia = 255;
let caida = false;
let autoGenerar = false;
let intervalo;
let aPresionada = false;

function preload() {

  fondo = loadImage("imagenes/fondo.jpg");
  fondo2 = loadImage("imagenes/fondo2.jpg");

  recortes[0] = loadImage("imagenes/imagen1.png");
  recortes[1] = loadImage("imagenes/imagen2.png");
  recortes[2] = loadImage("imagenes/imagen3.png");
  recortes[3] = loadImage("imagenes/imagen4.png");
  recortes[4] = loadImage("imagenes/imagen5.png");
  recortes[5] = loadImage("imagenes/imagen6.jpg");
  recortes[6] = loadImage("imagenes/imagen7.png");
  recortes[7] = loadImage("imagenes/imagen8.jpg");
  recortes[8] = loadImage("imagenes/imagen9.jpg");
  recortes[9] = loadImage("imagenes/imagen10.jpg");
  recortes[10] = loadImage("imagenes/imagen11.png");
  recortes[11] = loadImage("imagenes/imagen12.png");
  recortes[12] = loadImage("imagenes/imagen13.png");
  recortes[13] = loadImage("imagenes/imagen14.png");
  recortes[14] = loadImage("imagenes/imagen15.png");

  sonido1 = loadSound("sonidos/sonido1.mp3");
}

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent('div-sketch');
  imageMode(CENTER);
}

function draw() {

  image(fondo, width / 2, height / 2, width, height);

  fill(0, map(transparencia, 255, 50, 0, 200));
  noStroke();
  rect(0, 0, width, height);

  if (caida) {
    image(fondo2, width / 2, height / 2, width, height);
  }

  for (let r of recortesActivos) {

    if (caida) {
      r.y += r.vel;
      r.vel += 0.7;
    }

    push();
    translate(r.x, r.y);
    rotate(r.angle);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = 255;
    image(r.img, 0, 0, r.w, r.h);
    pop();
  }
}

function crearRecorte() {

  sonido1.setVolume(volumen);
  sonido1.play();

  let img = random(recortes);
  let w = random(120, 260);
  let h = random(50, 110);

  // aparece en TODO el canvas
  let x = random(w / 2, width - w / 2);
  let y = random(h / 2, height - h / 2);

  recortesActivos.push({
    img: img,
    x: x,
    y: y,
    originalY: y,
    w: w,
    h: h,
    angle: radians(random(-10, 10)),
    vel: 0
  });

  transparencia = max(transparencia - 10, 50);
  volumen = min(volumen * 1.15, 1.0);
}

function mousePressed() {
  if (!autoGenerar) {
    autoGenerar = true;
    intervalo = setInterval(crearRecorte, 1000);
  }
}

function keyPressed() {

  if (key === "a" || key === "A") {

    if (!aPresionada) {
      aPresionada = true;
      caida = true;

      // detener aparición de recortes
      clearInterval(intervalo);

      // detener sonido1 (no suena nada en caída)
      if (sonido1.isPlaying()) sonido1.stop();

      // activar caída
      for (let r of recortesActivos) {
        r.vel = random(2, 5);
      }
    }
  }
}

function keyReleased() {

  if (key === "a" || key === "A") {

    aPresionada = false;
    caida = false;

    // restaurar posiciones
    for (let r of recortesActivos) {
      r.y = r.originalY;
      r.vel = 0;
    }

    // reanudar aparición de recortes + sonido1
    intervalo = setInterval(crearRecorte, 1000);
  }
}
