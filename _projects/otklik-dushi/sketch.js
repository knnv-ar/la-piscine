// Komov Ekaterina - "Отклик души"

let bosque;

let musica;

let lluvia;

let trueno;

let gotas = [];

let velocidad = 0;

function preload() {
  bosque = loadImage("img/forest.jpg");

  musica = loadSound("sonidos/general.mp3");

  lluvia = loadSound("sonidos/lluvia.mp3");

  trueno = loadSound("sonidos/trueno.mp3");
}

function setup() {
  let canvas = createCanvas(800, 460);
  canvas.parent(`div-sketch`);

  musica.loop(); // acompañamiento musical

  musica.setVolume(0.5);

  lluvia.loop(); // sonido de lluvia

  lluvia.setVolume(0.4);
}

function draw() {
  background(220);

  image(bosque, 0, 0);

  for (let i = 0; i < 200; i += 10) {
    stroke(70);

    gotas.push(rect(random(width), random(height), random(2), 8));
  }
}

function mousePressed() {
  trueno.stop();

  trueno.setVolume(0.1);

  trueno.play();
}
