//Barra espaciadora para escuchar música
var luces = false;
var posZ = 50;
var img

function preload() {
  musica = loadSound("musicamay.mp3");
  img = loadImage("plaquetas.jpg");
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  musica.loop();
}

function draw() {
  background(80, 10, 50);

  noStroke();
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  ambientLight(30);
  pointLight(130, 80, 40, locX, locY, posZ);

  push();
  translate(0, -200, 0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.1);
  rotateZ(frameCount * 0.01);
  sphere(40); 
  pop();

  push();
  translate(0, -200, 0);
  fill(100, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(40);
  pop();

  push();
  translate(0, 200, 0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.1);
  rotateZ(frameCount * 0.01);
  translate(0, -30, 0);
  sphere(40); //Parámetros: ancho y alto
  pop();

  push();
  translate(0, 100, 0);
  fill(100, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(40); //Parámetros: radio
  pop();
  
 push();
  translate(0, 50, 0);
  fill(90, 0, 0);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(img);
  beginShape();
  vertex(-500, -300, -500, -300);
  vertex(100, -200, -100, -200);
  vertex(100, 300, 100, 300)
  endShape();
  pop();
  
  
  
}


function keyPressed() {
  if (key == "s") {
   musica.stop();
  }
  if (key == "p") {
    musica.pause();
  }


  if (key == "a") {
   musica.play();
  }
}

