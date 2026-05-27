var img3, img4, img5
var cable, cable1, cable3, cable4
var body
var muro
var murmullo
var sangre
var golpe
var button

function preload() {
  murmullo = loadSound("murmullo.mp3");
  golpe = loadSound("golpe.mp3")
  sangre = loadSound("sangre.mp3");
  img3 = loadImage("animacion.gif");
  img4 = loadImage("ojos.gif");
  img5 = loadImage("ojos1.gif");
  cable = loadImage("cable.webp");
  cable1 = loadImage("cables1.webp");
  cable4 = loadImage("cable4-2.webp");
  cable3 = loadImage("cables3.webp");
  body = loadImage("body3.webp");
  muro = loadImage("muro.webp");
}
function setup() {
  let canvas = createCanvas(700, 600);
  canvas.parent('div-sketch');
  murmullo.loop();
  button = createButton("play");
  button.mousePressed(togglePlaying);
}
function togglePlaying() {
  sangre.play();
  golpe.loop();
  var vol = 0.5
  golpe.setVolume(vol);
  var volum = 1
  sangre.setVolume(volum);
  murmullo.pause();
  var volume = 1 * 5
  murmullo.setVolume(volume);
}
function draw() {
  background(0);

  //image(img2,0,0);
  tint(255, 0, 255);
  image(img4, 200, 0 - 5, 300, 320);
  image(img4, 400, 280, 300, 280);
  image(img3, 200, 300, 300, 300);

  //image(img1,0,0);
  //image(img3,220,30,200,200)
  tint(0, 255, 0);
  image(img4, 0, 200, 200, 300);

  image(img4, 500, 0 - 5, 200, 200);//esquina derecha arriba 
  image(img4, 200, 500, 160, 160);//al ladov
  image(img5, 0, 400, 200, 200);//esquina iquierda abajo
  image(img5, 300, 0, 200, 100);

  image(img4, 0, 0, 200, 200);
  image(img5, 0, 150, 200, 200);
  image(img4, 0, 200, 90, 90);
  image(img4, 500, 0, 100, 100);

  image(img5, 300, 270, 200, 100);
  image(img5, 500, 400, 300, 200);
  image(img5, 500, 150, 200, 150);

  //cable
  tint(255, 0, 0);
  image(cable, 200, 0);
  image(cable3, 300, 60)
  image(cable1, 60, 30);
  image(cable1, 130, 130, 300, 220);
  image(cable3, 180, 300);
  noTint();
  image(body, 150, 0, 650, 640);
  tint(255, 0, 0);

  image(cable1, 280, 290, 240, 240);
  image(cable4, 368, 510, 60, 100);
  image(cable4, 358, 510, 70, 100);
  image(cable4, 362, 135, 90, 60);
  image(cable, 300, 80, 200, 100);
  image(cable4, 268, 180, 230, 175);

  if (mouseButton == LEFT) {
    stroke(255, 0, 0, 225);
    tint(0, 0, 200);
    image(muro, 0, 0, width, height);
    tint(255, 0, 0);
    image(img3, mouseX, mouseY, pmouseX, pmouseY);
  }

  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke(237, 34, 93);
  }
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}
