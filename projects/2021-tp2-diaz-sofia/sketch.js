//TP 2 Escenarios de Teletacto
//Sofía Diaz


var video;
var caricia;
var pixeles;
var pasos;
var doll;
var txt;


function preload() {
  ruido = loadSound("cuarto.mp3");
  tacos = loadSound("tacos.mp3");
  muniecas = loadSound("muniecas.mp3")
  txt= loadImage("texto.webp");
}

function setup() {
  let canvas = createCanvas(640, 640, WEBGL);
  canvas.parent('div-sketch');
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  
  caricia = createVideo("caricia.mp4");
  caricia.loop();
  caricia.size(400,400);
  caricia.speed(0.5);
  caricia.hide();
  
  pasos = createVideo("pasos.mp4");
  pasos.loop();
  pasos.size(400,400);
  pasos.hide();
  
  doll = createVideo("doll.mp4");
  doll.loop();
  doll.size(400,400);
  doll.hide();
  
  pixeles = createVideo("pixeles.mp4");
  pixeles.loop();
  pixeles.size(640,640);
  pixeles.hide();
    
}



function draw() {
  background(0);
  
  specularMaterial(255);
  lights();
 
  
  push();
  texture(video);
  translate(-0, -0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  box(200, 200);
  pop();
  
  if (keyCode === LEFT_ARROW) {
  push();
  texture(pixeles);
  tint(255, 255, 255, 50);
  plane(640,640);
  pop();
  
  push();
  texture(pasos);
  tint(255, 255, 255, 100);
  translate(-0, -0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  box(200, 200);
  pop();
  noStroke();
  } else if (keyCode === RIGHT_ARROW) {
  push();
  texture(doll);
  tint(255, 0, 100, 100);
  plane(640,640);
  pop();
   
  push();
  texture(doll);
  tint(255, 0, 100, 100);
  translate(-0, -0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  box(200, 200);
  pop();
  noStroke();
  } else if (keyCode === UP_ARROW) {
  push();
  texture(video);
  tint(255, 255, 255, 255);
  plane(640,640);
  pop();
  
  push();
  texture(caricia);
  tint(255, 255, 255, 150);
  translate(-0, -0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  box(200, 200);
  pop();
  noStroke();
  } else {
  push();
  fill(255,255,255,50);
  translate(-0, -0, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  box(200, 200);
  pop();
  noStroke();
    
  push();
  texture(txt);
  rotateY(frameCount * -0.01);
  translate(200, 100, 100);
  plane(120,120);
  pop();
  }   
  }
function keyPressed(){
    
  if (keyCode == UP_ARROW) {
  ruido.loop();
  tacos.stop();
  muniecas.stop();
  }else if (keyCode == LEFT_ARROW) {
  tacos.loop();
  ruido.stop();
  muniecas.stop();
  }else if (keyCode == RIGHT_ARROW) {
  muniecas.loop();
  ruido.stop();
  tacos.stop();
  }else{    
  ruido.stop();
  tacos.stop();
  muniecas.stop();
  }
 }






