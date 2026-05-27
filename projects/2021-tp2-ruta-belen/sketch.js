//  [↑] lluvia
//  [↓] nubes
//  MouseY Día/Noche
//El cuadro se lo robe a Magritte (Le soir qui tombe, 1964 : René Magritte)
var fadein;
var fadeout;
var fadeamount;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let opacity = 0;
let opacity2;
var Lluvia;
let musica;

var fadeIn;
var fadeOut;
var fadeAmount = -5;

function preload() {
  clima1 = loadImage("clima/cielo.webp");
  clima2 = loadImage("clima/nubes.webp");
  clima3 = loadImage("clima/cielo-lluvia.webp");

  img1 = loadImage("assets/ventana.webp");
  img2 = loadImage("assets/cielo.webp");
  img3 = loadImage("assets/sol.webp");
  img4 = loadImage("assets/luna.webp");
  img5 = loadImage("assets/cielo-noche.webp");
  img6 = loadImage("assets/estrellas.webp");
  musica = loadSound("assets/ofrenda.mp3");
}

function setup() {
  let canvas = createCanvas(450, 550);
  canvas.parent('div-sketch');
  fadeOut = 255;
  fadeIn = 0;
  Lluvia = createVideo("clima/lluvia.mp4");
  Lluvia.hide();
  //musica.loop()
}

function draw() {
  push();
  image(img2, -25, -23); //CIELO
  pop();
  push();
  tint(255, opacity);
  image(img5, -25, -23); //CIELONOCHE
  image(img6, -25, -23); //Estrellas
  pop();
  push();
  image(img3, 25, mouseY - 30); //SOL

  image(img4, 25, mouseY - 840); //LUNA
  pop();
  push();
  image(img1, -25, -23); //VENTANA
  pop();

  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      push();
      tint(255, fadeIn);
      fadeIn -= fadeAmount;
      image(Lluvia, -25, -23);
      Lluvia.hide();
      pop();
      push();
      fill(0, opacity2);
      rect(0, 0, 450, 550);
      pop();
    } else if (keyCode == DOWN_ARROW) {
      push();
      tint(255, fadeIn);
      fadeIn -= fadeAmount;
      image(clima2, -25, -23);
      pop();
    }
    push();
    image(img1, -25, -23); //VENTANA
    pop();
  }
}
function mouseMoved() {
  opacity = map(mouseY, 0, 450, -300, 300);
  opacity2 = map(-mouseY + 300, 0, 550, -100, -300);
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    image(Lluvia, -25, -23);
    Lluvia.loop();
    image(img1, -25, -23); //VENTANA
  }
}
function keyReleased() {
     fadeIn=0
}