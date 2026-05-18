 // TRABAJO PRACTICO 2
 // VOLUME 2
// BARBARA SAEZ

var luces = true;
var posZ = 5;
let Whistle;
let img2;

function preload() {
  Whistle = loadSound("./archivos/Whistle.mp3");
}
function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  Whistle.loop();
  Whistle.setVolume(0.3);
  img2 = loadImage("./archivos/yokoo.jpg");
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
