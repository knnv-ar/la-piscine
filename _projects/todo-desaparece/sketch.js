let musica;
let gif;

function preload() {
  musica = loadSound("undertale.mp3");
  gif = loadImage("inter.gif");
  
}

function setup() {
  let canvas = createCanvas(500,500,WEBGL);
  canvas.parent('div-sketch');

  vid = createVideo("ojo.mp4"); //cargo video del ojo
  musica.loop(); //reproduco la musica

  vid.loop();
  vid.size(200, 240);
  vid.hide();
  
}

function draw() {
  background(0);
  //rotación basada x posicion de mouse
  let angleX = map(mouseX, 0, width, -PI, PI);
  let angleY = map(mouseY, 0, height, -PI, PI);

  // Aplica la rotación al lienzo
  rotateY(angleX);
  rotateX(angleY);
  push();
  texture(gif); //aplico el gif como textura del canva
  plane(700, 700);
  pop();

  push();

  noStroke();
  texture(vid); //coloco el video

  translate(0, 0, 0);
  rotateX(frameCount * 0.0); // rotacion esfera
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(150);
  pop();
}
