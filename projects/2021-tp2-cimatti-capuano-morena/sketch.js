var img, img2;
var sonido1;

function preload() {
  //cargar imagenes

  //cargar sonido
  sonido1 = loadSound("sonidos/sonido1.mp3");
}

function setup() {
  let canvas = createCanvas(600, 550, WEBGL);
  canvas.parent('div-sketch');
  sonido1.loop();
}

function draw() {
  background(0);

  //dibujar esfera
  push();
  ambientLight(150);
  specularMaterial(0, 255, 127);
  translate(-40, 150);
  rotateX(frameCount * 0.06);
  // rotateX(frameCount * 0.03);
  sphere(40);
  pop();

  //box
  push();
  ambientLight(200);
  specularMaterial(255, 70, 0);
  translate(-200, -100);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  box(100);
  pop();
  //cilindro
  push();
  ambientLight(100);
  specularMaterial(128, 0, 128);
  translate(200, -150);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0.004);
  cone(300, 70);
  pop();

  push();
  ambientLight(200);
  specularMaterial(255, 255, 0);
  translate(-100, 100);
  rotateY(frameCount * 0.006);
  torus(450);

  pop();
  push();
  ambientLight(200);
  specularMaterial(255, 255, 0);
  translate(-100, 100);
  rotateX(frameCount * 0.006);
  torus(450);

  pop();
  function mousePressed() {
  
   sonido1.loop();
  
}

}
