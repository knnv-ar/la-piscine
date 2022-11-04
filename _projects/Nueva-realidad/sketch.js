function preload() {
  img = loadImage("foto/fondo.jpg");
  cancion = loadSound("audios/Dreamy-mode.mp3")
}
function setup() {
 let canvas = createCanvas(550, 400, WEBGL);
 canvas.parent ('div-sketch');
  cancion.loop()
}

function draw() {
  background(0);
  push();
  var locX = frameCount - width / 2;
  var locY = frameCount - height;

  directionalLight(255, 120, 0, locX, locY, 0);
  translate(0, 0, -800);
  rotateX(frameCount);
  sphere(300);
  pop();
  var locX = frameCount - width;
  var locY = frameCount - height;

  directionalLight(255, 120, 0, locX, locY, 0);

  push();
  rotateX(9);
  translate(260, -150, 200);
  cone(400, 650);
  pop();

  push();
  rotateX(9);
  translate(-300, -240, 200);
  cone(200, 200);
  pop();

  push();
  rotateX(9);
  translate(-450, -240, 200);
  cone(150, 150);
  pop();

  push();
  rotateX(9);
  translate(-150, -240, 200);
  cone(200, 200);
  pop();

  push();
  rotateX(9);
  translate(0, -260, 300);
  cone(140, 120);
  pop();
  if (frameCount > 650) {
      frameCount= 200
    
  }
  if (mouseIsPressed){
     var locX = frameCount - width / 2;
  var locY = frameCount - height;
    tint(locX, locY);
      image(img, -275, -200);
    tint(-locX, -locY);
    image(img, -275, -200);
  }

  
}

