let tam = 70;
let ojosX = [];
let ojosY = [];
let velocidadX = [];
let velocidadY = [];
let explocion = false;
let video;
let fondo;
let opacidad = 0;
let sonido;
let criatura;
let conejoX = [70, 320, 10, 380, 180, 480];
let conejoY = [150, 260, 390, 250, 260, 50];
let tamConejo = [90, 40, 70, 80, 50, 60];
let verConejo = 0;
let cajaX = [50, 270, 50, 280, 200, 280];
let cajaY = [50, 200, 300, 70, 330, 50];
let mostrarCaja = false;
let mostrarTexto = false;
let textoActual = "";
let textos = [
  "una mariposa nocturna...",
  "...o una polilla?",
  "La sombras se estremecen",
  "Hay que seguir buscando",
  "¿Qué poesías lee la muerte?",
    "para que sirve TU arte?",
];

async function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent('div-sketch');
 
  video = createVideo("ojos/ojos.mov");
  video.loop();
  video.speed(0.5);
  video.hide();

  fondo = await loadImage("fondo/fondo.jpeg");
  criatura = await loadImage("ayudante/conejo.png");
  caja = await loadImage("caja/caja.jpeg");

  sonido = await loadSound("sonido/shine.mp3");
  appear = await loadSound("sonido/appear.mp3");
}

function draw() {
  background(0);

  //aparecer ojos
  if (!explocion && frameCount % 5 == 0) {
    let x = random(width / tam) * tam;
    let y = random(height / tam) * tam;

    ojosX.push(x);
    ojosY.push(y);

    velocidadX.push(0);
    velocidadY.push(0);
  }

  //ojos
  for (let i = 0; i < ojosX.length; i++) {
    if (explocion) {
      ojosX[i] += velocidadX[i];
      ojosY[i] += velocidadY[i];

      velocidadY[i] += 0.2;
    }

    image(video, ojosX[i], ojosY[i], tam, tam);
  }

  //fade in
  if (explocion && opacidad < 255) {
    opacidad = opacidad + 2;
  }

  tint(255, opacidad);
  image(fondo, 0, 0, width, height);
  noTint();

  //conejo
  if (opacidad >= 255) {
    flotarConejo();
  }

  //imagen caja
  if (mostrarCaja) {
    image(caja, cajaX[cajaActual], cajaY[cajaActual], 270, 150);
  }
  //textos
  if (mostrarTexto) {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    textFont("cursive");
    text(textoActual, cajaX[cajaActual] + 125, cajaY[cajaActual] + 80);
  }
}

function flotarConejo() {
  let i = verConejo;
  let dim = tamConejo[i] + sin(frameCount * 0.05) * 5;

  image(criatura, conejoX[i], conejoY[i], dim, dim);
}

function mousePressed() {
  //ojos
  if (!explocion) {
    explocion = true;

    for (let i = 0; i < ojosX.length; i++) {
      let distanciaX = ojosX[i] - width / 2;
      let distanciaY = ojosY[i] - height / 2;

      let velocidad = random(4, 8);

      velocidadX[i] = (distanciaX / 200) * velocidad;
      velocidadY[i] = (distanciaY / 200) * velocidad - 3;
    }
  }
  //flotar conejo
  if (opacidad >= 255) {
    let i = verConejo;

    let dim = tamConejo[i] + sin(frameCount * 0.5) * 5;
    
    //conejo
    if (
      mouseX > conejoX[i] &&
      mouseX < conejoX[i] + dim &&
      mouseY > conejoY[i] &&
      mouseY < conejoY[i] + dim
    ) {
      //textos
      textoActual = textos[i];
      mostrarTexto = true;

      //cajas
      cajaActual = i;
      mostrarCaja = true;

      verConejo++;

      //sonido caja
      appear.amp(0.4);
      appear.play();
      appear.jump(0.5);

      //conejos
      if (verConejo == 6) {
        verConejo = 0;
      }
    }
  }

  //sonidos
  if (!sonido.isPlaying()) {
    sonido.play(true);
    sonido.jump(3);
  }
}
