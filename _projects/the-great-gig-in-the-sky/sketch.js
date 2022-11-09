//Presione click izquierdo cuando aparezcan las esferas :D

let palabras = [
  "PENSAR",
  "SEGUIR",
  "ANSIEDAD",
  "??",
  "RUTINA",
  "SUPERYÓ",
  "INTRIGA",
  "DIFERENTE",
  "INDIFERENTE",
  "INFERIORIDAD",
  "INFERIORIDAD",
  "INFERIORIDAD",
  "TIEMPO",
  "CONFUSIÓN",
  "AMAR",
  "CAOS",
  "BAILAR",
  "REVOLUCIONARIO",
  "INSATISFECHO",
  "GENUINO",
  "GERMEN",
  "AMBIGUO",
  "PERISFERIA",
  "IGNORANCIA",
  "EXISTENCIA",
  "CALDERO DE PASIONES HIRVIENTES",
  "CONFIANZA",
  "SER",
  "ESTAR",
  "EGOÍSMO",
  "ANGUSTIA",
  "LATINOAMERICA",
  "SENTIDO",
  "ARTE",
  "CONOCIMIENTO",
  "IDEA",
  "PERTENECER",
  "LENGUAJE",
  "INTIMIDAD",
  "CULTIVAR",
  "IRONÍA",
  "IMPULSO EMOCIONAL",
  "SACRIFICIO",
  "SOLO EL ARTE PUEDE COMUNICAR DE FORMA APROPIADA CIERTAS VERDADES",
  "PENSAMIENTO RACIONAL",
  "DISOCIACIÓN",
  "BANALIDAD",
  "ICÓNICO",
  "BILLONES DE ÁTOMOS ERRANTES",
  "EXPERIENCIA GRATIFICANTE A NIVEL ATÓMICO",
  "ESFÉRULAS CÓSMICAS",
  "INQUIETARSE",
  "π",
  "IMÁGENES FANTASMALES",
  "CLOROFLUOCARBONOS",
  "PLOMO",
  "NEUROTÓXICO",
  "ANAFASE",
  "ELECTRONES",
  "ME EXPANDO A DIARIO EN EL CONTORNO FÍSICO. Y MENTAL",
  "LAS SEÑORITAS",
  "ERRÁTICA EVOLUCIÓN",
  "UNA VERDAD INCÓMODA",
  "ADENOSÍN TRIFOSFATO",
  "LÍMITE",
  "CIENCIA",
  "CURIOSIDAD",
  "TRANSHUMANISMO",
  "ESCENCIA",
  "BIOCONSERVACIONISTAS",
  "VACÍO CÓSMICO",
  "RUIDO",
  "(∂ + m) ψ = 0",
  "!!!",
];

let mensaje = ["Inferioridad", "Latinoamerica", "Artistas?"];

let cancion =
  "And I am not frightened of dying, \n\n\nAny time will do, I dont mind, \n\nWhy should I be frightened of dying?,\n\nThere's no reason for it, \n\nyou ve gotta go sometime, \n\nIf you can hear this whispering...\n\n\n          you are dying.";
let fuente;
let musica;
let fondo;
var luces = true;
var posZ = 100;
let imgs = [];
let arte = false;
let img = [];

let numeroIMAGEN;
let numeroIMG;

let y = -340;
let x = 300;

let tamanio = 800;
let tamanion = 50;

let c = 0;
let g = 0;
let gap = 35;

let index = 0;

function preload() {
  musica = loadSound("./assets/multi.mp3");
  fondo = loadImage("./assets/texto.jpg");
  fuente = loadFont("./assets/letra/letra.ttf");

  for (var i = 1; i < 16; i++) {
    imgs[i] = loadImage("./assets/aimagen/" + i + ".png");
  }

  for (var j = 1; j < 24; j++) {
    img[j] = loadImage("./assets/imagen/" + j + ".png");
  }
}

function setup() {
  createCanvas(720, 650, WEBGL);

  musica.loop();
}

function draw() {
  background(50);
  tiempo();
}

function tiempo() {
  if (musica.currentTime() < 30) {
    push();
    x = random(-340, 210);
    y = random(-300, 300);
    fill(255, 234, 0);
    stroke(255);
    textFont(fuente);
    textSize(30);
    text(random(palabras), x, y);
    pop();

    floyd();
  } else if (musica.currentTime() < 40) {
    if (arte) {
      background(0);
      background(30);
      push();
      noStroke();
      rotateY(millis() / 1000);
      texture(imgs[numeroIMG + 1]);
      translate(-50, 120);
      sphere(50);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY(millis() / 2000);
      texture(imgs[numeroIMG]);
      translate(240, -280);
      sphere(80);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY(millis() / -1000);
      texture(imgs[numeroIMG + 1]);
      translate(200, -40);
      sphere(60);
      pop();
      ///////////////////////
      push();
      noStroke();

      rotateY([millis() / 1000] * -2);
      texture(imgs[numeroIMG]);
      translate(-40, -220);
      sphere(30);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY([millis() / 1000] * -1);
      texture(imgs[numeroIMG + 1]);
      translate(-240, -30);
      sphere(40);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateY(millis() * 0.001);
      texture(imgs[numeroIMG]);
      translate(-260, 130);
      sphere(60);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY([millis() / 5000] * 2);
      texture(imgs[numeroIMG + 1]);
      translate(-250, -280);
      sphere(70);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY([millis() / 5000] * -5);
      texture(imgs[numeroIMG + 1]);
      translate(-230, 150);
      sphere(65);
      pop();
      ///////////////////////
      //////////////////////
      push();
      push();
      noStroke();
      rotateY(millis() / -1200);
      texture(img[numeroIMAGEN]);
      translate(-160, 12);
      ellipsoid(20);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY(millis() / -900);
      texture(img[numeroIMAGEN + 1]);
      translate(-40, -150);
      ellipsoid(20);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY(millis() / -1000);
      texture(img[numeroIMAGEN]);
      translate(80, -60);
      ellipsoid(20);
      pop();
      ///////////////////////
      push();
      noStroke();

      rotateY([millis() / -1000] * -6);
      texture(img[numeroIMAGEN]);
      translate(80, 80);
      ellipsoid(20);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY([millis() / 1000] * -1);
      texture(img[numeroIMAGEN + 1]);
      translate(100, 30);
      ellipsoid(20);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateY(millis() * 0.001);
      texture(img[numeroIMAGEN]);
      translate(-180, 8);
      ellipsoid(30);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateY([millis() / 5000] * -2);
      texture(img[numeroIMAGEN + 1]);

      ellipsoid(50);
      translate(-150, -10);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateY(millis() / 1000);
      texture(img[numeroIMAGEN]);
      box(25);
      translate(70, -120);
      pop();
    }
  } else if (musica.currentTime() < 61.5) {
    if (arte) {
      background(0);
      push();
      noStroke();
      rotateX(millis() / 1000);
      texture(imgs[numeroIMG + 1]);
      translate(-50, 120);
      sphere(50);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateZ(millis() / 2000);
      texture(imgs[numeroIMG]);
      translate(240, -280);
      sphere(80);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateX(millis() / -1000);
      texture(imgs[numeroIMG + 1]);
      translate(200, -40);
      sphere(60);
      pop();
      ///////////////////////
      push();
      noStroke();

      rotateZ([millis() / 1000] * -2);
      texture(imgs[numeroIMG]);
      translate(-40, -220);
      sphere(30);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateX([millis() / 1000] * -1);
      texture(imgs[numeroIMG + 1]);
      translate(-240, -30);
      sphere(40);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateZ(millis() * 0.001);
      texture(imgs[numeroIMG]);
      translate(-260, 130);
      sphere(60);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateX([millis() / 5000] * 2);
      texture(imgs[numeroIMG + 1]);
      translate(-250, -280);
      sphere(70);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateZ([millis() / 5000] * -5);
      texture(imgs[numeroIMG + 1]);
      translate(-230, 150);
      sphere(65);
      pop();
      ///////////////////////
      //////////////////////
      push();
      push();
      noStroke();
      rotateX(millis() / -1200);
      texture(img[numeroIMAGEN]);
      translate(-160, 12);
      sphere(20);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateZ(millis() / -900);
      texture(img[numeroIMAGEN + 1]);
      translate(-40, -150);
      sphere(20);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateX(millis() / -1000);
      texture(img[numeroIMAGEN]);
      translate(80, -60);
      sphere(20);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();
      noStroke();

      rotateX([millis() / -1000] * -6);
      texture(img[numeroIMAGEN]);
      translate(80, 80);
      rotateZ(millis() / 1000);
      sphere(20);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateZ([millis() / 1000] * -1);
      texture(img[numeroIMAGEN + 1]);
      translate(100, 30);
      sphere(20);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateX(millis() * 0.001);
      texture(img[numeroIMAGEN]);
      translate(-180, 8);
      sphere(30);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();

      noStroke();
      rotateZ([millis() / 5000] * -2);
      texture(img[numeroIMAGEN + 1]);

      sphere(50);
      translate(-150, -10);
      rotateZ(millis() / 1000);
      pop();
      ///////////////////////
      push();

      noStroke();

      rotateZ(millis() / 1000);
      texture(img[numeroIMAGEN]);
      sphere(25);
      translate(70, -120);
      rotateZ(millis() / 1000);
      pop();
    }
  } else if (musica.currentTime() < 100) {
    if (arte) {
      background(0);
      push();

      noStroke();
      texture(img[numeroIMAGEN + 1]);
      translate(-10, -10);

      plane(tamanio);
      if (mouseIsPressed) {
        tamanio--;
        //  mensajes();
      }
      
      pop();
      
      
       push();

      noStroke();
      texture(imgs[numeroIMG + 1]);
      translate(-10, -10);
      plane(tamanion);
       if (mouseIsPressed) {
        tamanion++;
        //  mensajes();
      }
      pop();
    }
  }
}

function mouseReleased() {
  numeroIMG = int(random(14) + 1);
  numeroIMAGEN = int(random(22) + 1);

  arte = true;
}
function keyPressed() {
  if (key == "p") {
    musica.jump(60);
  }
}

function floyd() {
  for (let i = 0; i < cancion.length; i++) {
    push();
    textFont(fuente);
    textSize(20);
    fill(255, 234, 0);
    translate(-350, -300);
    text(
      cancion[i],
      noise(i + frameCount * 0.01) * width,
      noise(i + frameCount * 0.01 + 100) * height
    );
    pop();
  }
}

function mensajes() {
  push();

  textFont(fuente);
  textSize(15);
  fill(255, 234, 0);
  e = random(-340, 210);
  d = random(-300, 300);
  text(random(mensaje), d, e);
}
