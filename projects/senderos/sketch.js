let yo;
let ringa;
let preciosa;
let cuadro;
let cuadro2;
let tu;
let recorrido;
let efecto1;
let efecto2;
let efecto3;
let texto;
let mostrarRecorrido = false;
let mostrarYo = false;
let efecto4;
let mostrarRinga = false;
let instrumental;



function preload() {
  cuadro = loadImage("img/cuadro.png");
  cuadro2 = loadImage("img/cuadro2.png");
  preciosa = loadImage("img/preciosa.jpeg");
  yo = loadImage("img/yo.jpg");
  ringa = loadSound("sound/ringa.mp3");
  recorrido = loadSound("sound/recorrido.mp3");
  tu = loadSound("sound/tu.mp3");
  efecto1 = loadImage("gif/efecto1.gif");
  efecto2 = loadImage("gif/efecto2.gif");
  efecto3 = loadImage("gif/efecto3.gif");
  efecto4 = loadImage("gif/efecto4.gif");
  instrumental = loadSound("sound/instrumental.mp3");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('div-sketch');
  background(60);
  instrumental.play();
}

function draw() {
  image(efecto3, 0, 0);

  push();
  textSize(45);
  fill(255);
  texto = `BIENVENIDOS A '"SENDEROS"`;
  text(texto, 80, 105, 1100);
  pop();

  push();
  textSize(30);
  fill(255);
  texto = `Este trabajo práctico invita al espectador a reflexionar o recordar momentos importantes de su vida, como estudiante, de su niñez o de su vida junto a sus seres queridos, a través de mis discursos en audio como "protagonista" del proyecto. Sin embargo, en "SENDEROS" los protagonistas somos todos.`;
  text(texto, 95, 205, 650);

  pop();

  push();
  textSize(30);
  fill(255);
  texto = `Presiona la flecha izquierda (LEFT) la flecha derecha (RIGHT) o la de arriba (UP) para poder ingresar a cualquiera de los senderos`;
  text(texto, 95, 555, 650);

  pop();

  if (mostrarRecorrido) {
    image(efecto1, 0, 0);
    image(cuadro, 60, 250, 300, 300);
    image(cuadro2, 440, 250, 300, 300);
  
  }

  if (mostrarYo) {
    image(efecto4, 0, 0);
    image(yo, 100, 100, 600, 600);
  }

  if (mostrarRinga) {
    image(efecto2, 0, 0);

    image(preciosa, 150, 150, 500, 500);
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    mostrarRecorrido = true;
    mostrarYo = false;
    mostrarRinga = false;
    instrumental.stop();

    if (!recorrido.isPlaying()) {
      recorrido.play();
    }
    tu.stop();
    ringa.stop();
  } else if (keyCode == RIGHT_ARROW) {
    recorrido.stop();
    mostrarRecorrido = false;
    mostrarYo = true;
    ringa.stop();
    mostrarRinga = false;

    if (!tu.isPlaying()) {
      tu.play();
    }
    ringa.stop();
    instrumental.stop();
  } else if (keyCode === UP_ARROW) {
    recorrido.stop();
    tu.stop();
    mostrarRinga = true;
    mostrarRecorrido = false;
    mostrarYo = false;

    if (!ringa.isPlaying()) {
      ringa.play();
    }
    instrumental.stop();
  }
}

