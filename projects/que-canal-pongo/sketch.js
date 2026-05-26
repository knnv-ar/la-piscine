let cabeza;
let tentaculo;
let fuente;
let randon;
let textureImg;
let textureImgConfusion;
let textureTextConfusion;
let textureCenterConfusion;
let textGraphic;
let textScale = 0.5;
let textScaleSpeed = 0.005;
let contador = 0;
let arte1,arte2,arte3,arte4,arte5,arte6;
let sound;

function preload() {
  sound = loadSound("sound.mp3");
  textureImg = loadImage("telep5js.jpg");
  textureImgConfusion = loadImage("confusion.jpg");
  textureCenterConfusion = loadImage ("confusion.png");
  cabeza = loadImage ("cabeza.jpg");
  randon = loadImage ("random1.jpg");
  tentaculo = loadImage ("tentaculo.jpg");
  arte1 = loadImage ("arte1.png");
  arte2 = loadImage ("arte2.png");
  arte3 = loadImage ("arte3.png");
  arte4 = loadImage ("arte4.png");
  arte5 = loadImage ("arte5.png");
  arte6 = loadImage ("arte6.png");
  fuente = loadFont("Permanent.ttf");
}

function setup() {
  let canvas = createCanvas(500, 600, WEBGL);
  canvas.parent('div-sketch');
  noStroke();
  sound.loop();
}

function draw() {
  background(220);
  texture(textureImg);
  plane(500, 600);

  push();
  translate(0, -240, 0);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(cabeza);
  sphere(25);
  pop();

  push();
  translate(34, -126, 100);
  texture(randon);
  plane(59, 46);
  pop();

  push();
  translate(-120, -86, 100);
  texture(tentaculo);
  plane(67, 46);
  pop();

  push();
  translate(-5, -50, 100);
  texture(textureImgConfusion);
  plane(95, 70);
  pop(); 
  
  // createGraphics para el texto
  push();
  textGraphic = createGraphics(400, 90);
  textGraphic.textSize(50);
  textGraphic.textFont(fuente);
  textGraphic.fill(215);
  textGraphic.text("LA CONFUSION", 10, 40);
  translate(5, -70, 100);
  texture(textGraphic);
  scale(textScale);
  plane(60, 10);
  
  pop();
  
  push();
  textGraphic2 = createGraphics(400, 90);
  textGraphic2.textSize(20);

  textGraphic2.fill(215);
  textGraphic2.text("ES UN BUEN PUNTO DE PARTIDA", 10, 60);
  translate(5, -30, 100);
  texture(textGraphic2);
  scale(textScale);
  plane(100, 40);
  
  pop();
  
  push();
  translate(0, -50, 100);
  scale(textScale);
  texture(textureCenterConfusion);
  plane(55, 35);
  
  // Actualizar la escala del texto para hacerlo achicar y agrandar
  textScale += textScaleSpeed;
  if (textScale > 1.1 || textScale < 0.5) {
    textScaleSpeed *= -1.3;
    if(textScaleSpeed >= 400){
      textScaleSpeed = 0.005;
      textScale = 0.5;
    }
  }
  pop();

  push();
  if (contador < 100) {
  translate(-160, 155);
  texture(arte1);
  plane(90, 110);
  }
  if (contador < 150) {
  translate(-160, 155);
  texture(arte2);
  plane(90, 110);
  }
  if (contador < 200) {
  translate(-160, 155);
  texture(arte3);
  plane(90, 110);
  }
    if (contador < 300) {
  translate(-160, 155);
  texture(arte4);
  plane(90, 110);
  }
    if (contador < 350) {
  translate(-160, 155);
  texture(arte5);
  plane(90, 110);
  }
    if (contador < 400) {
  translate(-160, 155);
  texture(arte6);
  plane(90, 110);
  }
  contador ++;
  if(contador == 400)
    {
      contador = 0;
      contador++;
    }
  pop();
}
