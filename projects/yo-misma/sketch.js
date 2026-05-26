let aro;

function preload() {
  aro = loadModel('modelos/aro.obj');
  ego = loadImage('modelos/ego.gif')
  sombra = loadImage('modelos/shadow.gif')
  animus = loadImage('modelos/animus.gif')
  test = loadImage('modelos/yo.png')
}

function setup() {
  let canvas = createCanvas(700, 700, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  noStroke()
  background(20);
  
  push()
  texture(test)
  rotateX(frameCount * 0.003)
  rotateY(frameCount * 0.003)
  rotateZ(frameCount * 0.003)
  sphere(100)
  pop()
  
  push()
  texture(ego)
  scale(1.25)
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.006);
  model(aro)
  pop()
  
  push()
  texture(sombra)
  scale(1.55)
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  model(aro)
  pop()
  
  push()
  texture(animus)
  scale(1.40)
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.004);
  model(aro)
  pop()
}