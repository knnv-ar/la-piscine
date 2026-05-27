// TP2 - Artes Multimediales 1 - Cátedra Lacabanne 2021
// Autor: Michael Lema
// Obra: Recuerdos

//instrucciones: con el cursor del mouse se puede navegar por el espacio de las esferas y manteniendo el click izquierdo presionado se puede arrastrar para mover la perspectiva en el espacio ----------------------

var atardecer1;
var atardecer2;
var atardecer3;
var atardecer4;
var nubes1;
var nubes2;
var nubes3;
var nubes4;
var nubes5;
var nubes6;
var paisaje1;
var paisaje2;
var musicambiente;
var sueños1;
var sueños2;
var sueños3;
var sueños4;
var sueños5;
var sueños6;
var audio2;

function preload() {
  
  fondo=loadImage("imagenes/fondo.webp");
  atardecer1 = createVideo("videos/atardecer1.mp4");
  atardecer1.loop();
  atardecer1.hide();
  
  atardecer2 = createVideo("videos/atardecer2.mp4");
  atardecer2.loop();
  atardecer2.hide();
  
  atardecer3 = createVideo("videos/atardecer3.mp4");
  atardecer3.loop();
  atardecer3.hide();
  
  atardecer4 = createVideo("videos/atardecer4.mp4");
  atardecer4.loop();
  atardecer4.hide();
  
  nubes1 = createVideo("videos/nubes1.mp4");
  nubes1.loop();
  nubes1.hide();
  
  nubes2 = createVideo("videos/nubes2.mp4");
  nubes2.loop();
  nubes2.hide();
  
  nubes3 = createVideo("videos/nubes3.mp4");
  nubes3.loop();
  nubes3.hide();
  
  nubes4 = createVideo("videos/nubes4.mp4");
  nubes4.loop();
  nubes4.hide();
  
  nubes5 = createVideo("videos/nubes5.mp4");
  nubes5.loop();
  nubes5.hide();
  
  nubes6 = createVideo("videos/nubes6.mp4");
  nubes6.loop();
  nubes6.hide();
  
  paisaje1 = createVideo("videos/paisaje1.mp4");
  paisaje1.loop();
  paisaje1.hide();
  
  paisaje3 = createVideo("videos/paisaje3.mp4");
  paisaje3.loop();
  paisaje3.hide();
  
  sueños1 = createVideo("videos/sue-os1.mp4");
  sueños1.loop();
  sueños1.hide();
  
  sueños2 = createVideo("videos/sue-os2.mp4");
  sueños2.loop();
  sueños2.hide();
  
  sueños3 = createVideo("videos/sue-os3.mp4");
  sueños3.loop();
  sueños3.hide();
  
  sueños4 = createVideo("videos/sue-os4.mp4");
  sueños4.loop();
  sueños4.hide();
  
  sueños5 = createVideo("videos/sue-os5.mp4");
  sueños5.loop();
  sueños5.hide();

  musicambiente =loadSound("musica/musicambiente.mp3");
  audio2 =loadSound("musica/audio2.mp3");

}

function setup() {
  let canvas = createCanvas(850, 750, WEBGL);
  canvas.parent('div-sketch');
  
  musicambiente.setVolume(0.2);
  musicambiente.loop();
  audio2.setVolume(0.1);
  audio2.loop();
  cam = createCamera();
  
  
}

function draw() {
  
  //lejania y cercania camara--------------------------
  let fov = map(mouseX,1, mouseY,1,PI/4);
  let cameraZ = height /0.5 / tan(PI / 3);
  perspective(fov, width / height, cameraZ / 10.0, cameraZ * 8);
  
  noStroke();
  orbitControl(3);
   
  //fondo de estrellas----------------------------------
  push();
  background(10);
  fill('white');
  ellipse(random(0,2500),random(0,2500),random(15,5));
  pop();
  
  noStroke();
  //noCursor();
  ambientLight(150);
  pointLight( 255,255,255,-280,-280,0);
  pointLight( 255,255,255,0,100,0);
  
  
  //las esferas con los videos--------------------------
  push();
  texture(atardecer1);
  translate(160, 150, 250);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(paisaje1);
  translate(-100, 150, 50);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(90);
  pop();
  
  push();
  texture(atardecer3);
  translate(-400, 150, -250);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(atardecer4);
  translate(-400, -150, 250);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(nubes1);
  translate(-110, -150,-250);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(nubes2);
  translate(150, -150,50);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(nubes3);
  translate(400, -150,250);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(nubes4);
  translate(400, 150,50);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  
  push();
  texture(nubes5);
  translate(400, -400,250);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(nubes6);
  translate(-400, -400,50);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(atardecer2);
  translate(-110, -400,450);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(paisaje3);
  translate(150, -400,50);
  rotateX(frameCount * 0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(sueños2);
  translate(170, 400, 50);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(sueños3);
  translate(-100, 400, 250);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
   push();
  texture(sueños4);
  translate(-400, 400, 50);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(sueños5);
  translate(400, 400, 250);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(80);
  pop();
  
  push();
  texture(sueños1);
  translate(0, 0, -600);
  rotateX(frameCount * 0.0);
  rotateY(frameCount * 0.002);
  rotateZ(frameCount * 0);
  sphere(150);
  pop();
  

  document.oncontextmenu = function () {
    return false;
  };
  
}