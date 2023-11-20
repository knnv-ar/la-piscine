  let cam;
  let carton;
  let lamp;
  let ventana;
  let cortina;
  let cama;
  let textcama;
  let enchufe;
  let poster;
  let pizarra;
  let velador;
  let portalapiz;
  let proPos;
  let pjPos;
  let sillaPos;
  let sillaPos2;
  let camaPos;
  let sillaDist;
  let sillaDist2;
  let camaDist;
  let distancia;
  let direccion;
  let esperar;
  let mira;
  let sentadoSilla;
  let sentadoCama;
  let pjParado;
  let pjSentado1;
  let pjSentado2;
  let pjCaminando;

function preload() {
  //HABITACIÓN
  carton = loadImage("carton.jpg");
  //OBJETOS
  lamp = loadImage("lampara.png");
  ventana = loadImage("ventana.png");
  cortina = loadImage("cortinas.png");
  cama = loadImage("cama.png");
  textcama = loadImage("textcama.jpg");
  poster = loadImage("poster.png");
  enchufe = loadImage("enchufe.png");
  pizarra = loadImage("pizarra.png");
  velador = loadImage("velador.png");
  portalapiz = loadImage("portalapiz.png");
  //PERSONAJE
  pjParado = loadImage("pjp.png");
  pjCaminando = loadImage("pjwalk.gif");
  pjSentado1 = loadImage("pjsit.png");
  pjSentado2 = loadImage("laburando.gif");
}

function setup() {
  randomSeed(6);
  let canvas = createCanvas(800, 600, WEBGL);
  canvas.parent('div-sketch');
  frameRate(60);
  cam = createCamera();
  pjPos = createVector(0, 0);
  proPos = createVector(0, 0);
  sillaPos = createVector(-90, -90);
  sillaPos2 = createVector(-140, -90);
  camaPos = createVector(55, -80);
  mira = 0;
  esperar = 50;
  sentadoSilla = false;
  sentadoCama = false;
  sillaDist = 30;
  sillaDist2 = 30;
  camaDist = 30;
}

function draw() {
  background(20);
  noCursor();
  //CAMARA
  if (!mouseIsPressed) {
    camera(0, 0, 500, 0, 0, 0);
  }
  document.oncontextmenu = function () {
    return false;
  };
  //CAJA---------------------------------
  mesa();
  caja();
  caminar();
  personaje();
}

function mouseDragged() {
  orbitControl();
}

function caja() {
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
  //CAJA  ---------------------
  push();
  if (pjPos == proPos && sentadoCama) {
  } else if (pjPos == proPos && sentadoSilla) {
  }
  //tint(250,250,0);
  texture(carton);
  //pared izq
  push();
  translate(-250, 0, -100);
  rotateY(90);
  rect(0, 0, 400, 340);
  pop();
  //pared derecha
  push();
  translate(250, 0, -100);
  rotateY(-90);
  rect(0, 0, 400, 340);
  pop();
  //fondo
  push();
  translate(0, 0, -300);
  rect(0, 0, 500, 340);
  pop();
  //piso
  push();
  translate(0, 170, -100);
  rotateX(90);
  rect(0, 0, 500, 400);
  pop();
  //techo
  push();
  translate(0, -170, -100);
  rotateX(90);
  rect(0, 0, 500, 400);
  pop();
  pop();
  //OBJETOS  --------------------
  //ventana
  push();
  translate(-249, 0, -80);
  rotateY(90);
  image(ventana, 0, 0);
  pop();
  push();
  translate(-248, 0, -80);
  rotateY(90);
  image(cortina, 0, 0);
  pop();
  //cama
  push();
  translate(150, 120, -125);
  texture(textcama);
  box(115, 30, 248);
  pop();
  push();
  translate(150, 110, -250);
  image(cama, 0, 0);
  pop();
  //patasdecama
  push();
  texture(textcama);
  translate(100, 140, -5);
  rect(0, 0, 10, 60);
  pop();
  push();
  texture(textcama);
  translate(203, 140, -5);
  rect(0, 0, 10, 60);
  pop();
  //poster y enchufe
  push();
  translate(249, -30, -120);
  rotateY(-90);
  image(poster, 0, 0);
  pop();
  push();
  translate(249, 100, 10);
  rotateY(-90);
  image(enchufe, 0, 0);
  pop();
  //pizarra
  push();
  translate(-120, -60, -299);
  image(pizarra, 0, 0);
  pop();
  //velador y portalapiz
  push();
  translate(-200, 25, -239);
  rotateY(200);
  image(velador, 0, 0, 50, 70);
  pop();
  push();
  translate(-40, 35, -230);
  rotateY(-30);
  image(portalapiz, 0, 0, 40, 60);
  pop();
  //silla
  push();
  texture(textcama);
  translate(-135, 70, -130);
  box(100, 90, 10);
  pop();
  push();
  texture(textcama);
  translate(-135, 120, -155);
  box(100, 10, 60);
  pop();
  push();
  texture(textcama);
  translate(-180, 140, -130);
  rect(0, 0, 10, 70);
  pop();
  push();
  texture(textcama);
  translate(-90, 140, -130);
  rect(0, 0, 10, 70);
  pop();
  push();
  texture(textcama);
  translate(-180, 150, -180);
  rect(0, 0, 10, 60);
  pop();
  push();
  texture(textcama);
  translate(-90, 150, -180);
  rect(0, 0, 10, 60);
  pop();
  //lampara
  push();
  translate(0, -132, -50);
  image(lamp, 0, 0);
  pop();
}

function mesa() {
  push();
  texture(textcama);
  translate(-240, 120, -200);
  rect(0, 0, 10, 110);
  pop();
  push();
  texture(textcama);
  translate(-30, 120, -200);
  rect(0, 0, 10, 110);
  pop();
  push();
  texture(textcama);
  translate(-240, 120, -299);
  rect(0, 0, 10, 110);
  pop();
  push();
  texture(textcama);
  translate(-30, 120, -299);
  rect(0, 0, 10, 110);
  pop();
  push();
  texture(textcama);
  translate(-135, 70, -250);
  box(220, 20, 99);
  pop();
}

function personaje() {
  //sentadolaburando-------------------------
  if (pjPos == proPos && sentadoSilla) {
    push();
    translate(-130, 0, -140);
    image(pjSentado2, 0, 0);
    pop();
  }
  // //sentadocama----------------------
  if (pjPos == proPos && sentadoCama) {
    push();
    translate(90, 50, -80);
    image(pjSentado1, 0, 0);
    pop();
  }
  //PERSONAJE  -------------------------
  push();
  if ((pjPos == proPos && sentadoCama) || (pjPos == proPos && sentadoSilla)) {
    tint(255, 0);
  }
  translate(pjPos.x, 60, pjPos.y);
  if (mira == 1) {
    rotateY(180);
  }
  if (esperar >= 50) {
    image(pjCaminando, 0, 0);
  } else {
    image(pjParado, 0, 0);
  }
  pop();
}

function destino() {
  let x = random(-200, 60);
  let y = random(-100, 80);
  return createVector(x, y);
}

function caminar() {
  // distancia de pj con destino
  distancia = dist(pjPos.x, pjPos.y, proPos.x, proPos.y);
  if (distancia < 1) {
    // esperar antes de continuar
    if (esperar > 0) {
      pjPos = proPos;
      esperar--;
    } else {
      // nuevo destino
      proPos = destino();
      if (proPos.x > pjPos.x) {
        mira = 1;
      } else {
        mira = 0;
      }
      //distancia a la silla y cama
      sillaDist = dist(proPos.x, proPos.y, sillaPos.x, sillaPos.y);
      sillaDist2 = dist(proPos.x, proPos.y, sillaPos2.x, sillaPos2.y);
      camaDist = dist(proPos.x, proPos.y, camaPos.x, camaPos.y);
      if (sillaDist < 30 || sillaDist2 < 30) {
        esperar = 600;
        sentadoSilla = true;
        sentadoCama = false;
      } else if (camaDist < 30) {
        esperar = 600;
        sentadoCama = true;
        sentadoSilla = false;
      } else {
        sentadoSilla = false;
        sentadoCama = false;
        esperar = 50;
      }
    }
  }
  // camino de pj a destino
  direccion = createVector(proPos.x - pjPos.x, proPos.y - pjPos.y);
  direccion.normalize();
  pjPos.add(direccion);
}
