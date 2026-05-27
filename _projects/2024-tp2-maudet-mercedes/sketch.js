//VIDEOS
let mech;
let deivid;
let scroll;
let pantalla;

let sonido;

let t = 0;

let espejo = 23000; //23 segundos en milis

// PARTICULAS
let t1 = 0;
let t2 = 0;
let t3 = 0;
let t4 = 0;
let t5 = 0;
let t6 = 0;
let velocidad = 0.01;

function preload() {
  mech = createVideo("mech2.mp4");
  mech.hide();

  deivid = createVideo("deivid3.mp4");
  deivid.hide();

  scroll = createVideo("scroll1-1.mp4");
  scroll.hide();

  pantalla = createVideo("pantalla.mp4");
  pantalla.hide();

  sonido = loadSound("sonido-r.mp3");
}

function setup() {
 let canvas = createCanvas(450, 550);
 canvas.parent("div-sketch");
}

function draw() {
  // PANTALLA EN NEGRO
  if (millis() >= espejo) {
    blendMode(BLEND);
    background(0);
    return; // parar el resto del dibujo
  }

  background(0, 90);

  /*
  if (frameCount === 1) {
    // Iniciar sonido y videos
    sonido.play();

    mech.loop();
    deivid.loop();
    scroll.loop();
    pantalla.loop();

  }*/

  // FONDO
  push();
  let colorCentro = color(random(200), random(100), random(200), 80);
  let colorExt = color(random(200), random(200), random(200), 10);

  let centerX = width / 2 + sin(t);
  let centerY = height / 2 + cos(t);

  for (let i = 70; i > 0; i--) {
    let inter = map(i, 0, 80, 1, 0);
    let c = lerpColor(colorExt, colorCentro, inter);
    fill(c);

    let deformX = noise(t * i) * 20;
    let deformY = noise(t * i) * 10;

    ellipse(centerX + deformX, centerY + deformY, i * 4, i * 6);
    blendMode(ADD);
  }
  pop();

  t += 10;

  // RUIDO
  push();

  for (let i = 0; i < 100; i++) {
    let poc = random(0, 450);
    let poc2 = random(0, 550);
    noFill();
    stroke(255, 100);
    strokeWeight(1);
    point(poc, poc2);
  }

  // FOCO

  pop();

  if (frameCount >= 1010) {
    blendMode(DIFFERENCE);
  }

  push();

  // CABLES
  stroke(0, 0, 200, 100);
  strokeWeight(2);
  noFill();
  bezier(120, 550, 130, 420, 150, 420, 150, 420); // Scroll
  bezier(50, 550, 70, 300, 120, 300, 100, 150); // Ojos 1
  bezier(260, 550, 200, 300, 280, 300, 100, 140); // Ojos 2
  bezier(290, 550, 300, 300, 210, 300, 420, 150); // Pantalla 1
  bezier(400, 550, 370, 300, 210, 300, 420, 150); // Pantalla 2
  bezier(350, 550, 300, 300, 400, 300, 400, 390); // Boca

  // movimiento de particulas en cable
  particulas(120, 550, 130, 420, 150, 420, 150, 420, t1);
  particulas(50, 550, 70, 300, 120, 300, 100, 150, t2);
  particulas(260, 550, 200, 300, 280, 300, 100, 140, t3);
  particulas(290, 550, 300, 300, 210, 300, 420, 150, t4);
  particulas(400, 550, 370, 300, 210, 300, 420, 150, t5);
  particulas(350, 550, 300, 300, 400, 300, 400, 390, t6);

  // actualizacion de posiciones particulas
  t1 = (t1 + velocidad) % 1;
  t2 = (t2 + velocidad) % 1;
  t3 = (t3 + velocidad) % 1;
  t4 = (t4 + velocidad) % 1;
  t5 = (t5 + velocidad) % 1;
  t6 = (t6 + velocidad) % 1;

  // fondo videos
  fill(0);
  rect(50, 130, 100, 90);
  rect(320, 330, 100, 90);
  rect(150, 350, 100, 150);
  rect(320, 60, 100, 150);

  pop();

  // videos en canvas
  image(mech, 50, 130);
  image(deivid, 320, 330);
  image(scroll, 150, 350);
  image(pantalla, 320, 60);
}

// funcion para particulas
function particulas(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  let x = bezierPoint(x1, x2, x3, x4, t);
  let y = bezierPoint(y1, y2, y3, y4, t);

  noStroke();
  fill(255, 150);
  ellipse(x, y, 4, 4);
}

function mousePressed() {
  // Reproducir sonido y videos con un click
  if (!sonido.isPlaying()) {
    sonido.play();

    mech.time(0);
    mech.loop();

    deivid.time(0);
    deivid.loop();

    scroll.time(0);
    scroll.loop();

    pantalla.time(0);
    pantalla.loop();
  }
}
