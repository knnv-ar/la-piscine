 // TRABAJO PRACTICO 2
 // VOLUME 2
// BARBARA SAEZ

var luces = true;
var posZ = 5;
let Whistle;
let img, img2, img3 ;

function preload() {
  Whistle = loadSound("Whistle.mp3");
}
function setup() {
  createCanvas(400, 500, WEBGL);
  Whistle.loop();
  Whistle.setVolume(0.3);
  img2 = loadImage("yokoo.jpg");
  img3 = loadImage("yoko.jpg");
}
function draw() {
  ambientLight(255);
  var locX = mouseX - width / 1;
  var locY = mouseY - height / 1;
  pointLight(255, 255, 255, locX, locY, posZ);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  box(200);
  pop();
  texture(img2);
}
function keyPressed() {

  if (key == "s") {

    Whistle.play();

    Whistle.play();

  } }
