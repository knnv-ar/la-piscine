//TP N2: Final "Mi área de trabajo, es mi mente…”" BY: 0LIVIA (iara velazquez)//
// instrucciones: Hace click una vez que descifres el acertijo y NO dejes  a la mente volar…
var texto = "";
var img1;
var img2;
var radioMayor = 60;
var x = 0; // Distancia actual en x
var y = 0; // Distancia actual en y
var destinoX = 0;
var destinoY = 0;
var easing = 0.05; // rapidez de movimiento
let arreglo = false;
let audio, reverb, video, dryWet;

function preload() {
  video = createVideo("video.mp4");
  audio = loadSound("INTRO.mp3");
  img1 = loadImage("img1/cabeza.png");
  img2 = loadImage("cuerpo.png");
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  // cnv.mousePressed(playSound);
  video.loop();
  video.hide();
  reverb = new p5.Reverb();
  audio.disconnect();
  reverb.process(audio, 3, 2);
}

function draw() {
  background(255);
  dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  reverb.drywet(dryWet);

  image(video, 0, 0);
  // background(video);
  fill(255);

  image(img2, 0, 290, 0, 0);

  if (mouseIsPressed) {
    destinoX = mouseX;
    destinoY = mouseY;
  }

  x += (destinoX - x) * easing;
  y += (destinoY - y) * easing;

  push();

  ellipseMode(RADIUS);

  translate(x, y);
  rotate(radians(x));
  image(img1, 150, 0, 0, 0);

  pop();
  textSize(30);
  text("Atrapa esa melodia que habita en tu mente...", 50, 60);

  textFont("Times New Roman");
  text(texto, 400, 400);
}

function mouseClicked() {
  if (!arreglo) {
    audio.play();
    arreglo = true;
  }
}
