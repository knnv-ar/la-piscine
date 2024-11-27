//variables
let mascara;
let sonido;
let rojo = false;
let azul = false;
let amarillo = false;
let contador = 0;

//cargar imagen y sonido
function preload() {
  mascara = loadImage("rr.png");
  sonido = loadSound("white.wav");
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent("div-sketch");
  mascara.resize(1.1 * width, height);
  sonido.pause();
  sonido.amp(0.1);
}

function draw() {
  background(220);
  //imagen blando y negro
  image(mascara, 0, 0);

  //capa azul
  if (azul) {
    push();
    tint(0, 0, 250, 200);
    image(mascara, -0.5 * (frameCount % 50), 0);
    pop();
  }

  //capa roja
  push();
  tint(255, 0, 0, 100);
  if (rojo) {
    image(mascara, -0.9 * (frameCount % 50), 0);
  }
  pop();
  //capa amarilla
  push();
  tint(255, 255, 0, 50);
  if (amarillo) {
    image(mascara, -1.1 * (frameCount % 50), 0);
  }
  pop();
}

function mouseReleased() {
  contador += 1;
  //console.log(contador);

  if (contador == 1) {
    azul = true;
    sonido.loop();
  } else if (contador == 2) {
    rojo = true;
    sonido.pan(-1);
    sonido.amp(0.3);
  } else if (contador == 3) {
    amarillo = true;
    sonido.pan(1);
    sonido.amp(0.5);
  } else {
    azul = false;
    rojo = false;
    amarillo = false;
    sonido.amp(0.1);
    sonido.pan(0);
    sonido.stop();
    contador = 0;
  }
}
