var contadorEscenas;

function preload(){
  chocotextura=loadImage("multimedia/chocolate.jpg");
  cama=loadImage("multimedia/cama.jpeg");
  cassette=loadImage("multimedia/vhs.jpg");
  oro=loadImage("multimedia/oro.jpg");
  fideos=loadImage("multimedia/fideos.jpg");
  intro=createVideo("multimedia/vhs2.mp4");
  
}

function setup(){
  let canvas = createCanvas(700, 400, WEBGL);
  canvas.parent('div-sketch');
  noCursor();
  //no menu desplegable
  document.oncontextmenu = function () {
    return false;
  }
  intro.hide();
  intro.loop();
}

function draw(){
 
      if (keyIsPressed) {
    if (key == "q" || key == "Q") {
      contadorEscenas = 1;
    } else if (key == "t" || key == "T") {
      contadorEscenas = 2;
    } else if (key == "p" || key == "P") {
      contadorEscenas = 3;
    } else if (key == "H" || key == "h") {
      contadorEscenas = 4;
    } else if (key == "b" || key == "B") {
      contadorEscenas = 5;
    }
  } else {
    //translate(0, 0, 500);
    texture(intro);
    plane(700, 400);
    noStroke();
  
  }
  
   if (contadorEscenas == 1) {
   sceneA();
  } else  if (contadorEscenas == 2) {
  sceneB();
  }  else if (contadorEscenas == 3) {
  sceneC();
  } else  if (contadorEscenas == 4) {
  sceneD();
  } else if (contadorEscenas == 5){
    sceneE();
  }
}
function sceneA() {
  background(16);
  bed();
}
function sceneB() {
  background("PINK");
  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  pop();
  choco();
}
function sceneC() {
 background("GREEN");
  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  pop();
  vhs();
}
function sceneD() {
  background("WHITE");
  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  pop();
  lingote();
}
function sceneE() {
 background("RED");
  push();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.001);
  pop();
  tallarines();
}


function bed() {
  push();
  translate(0, 0, 150);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  rotateZ(45);
  noStroke();
  texture(cama);
  box(170, 68, 17); 
  pop();
}
function choco() {
  push();
  translate(0, 0, 150);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  rotateZ(45);
  noStroke();
  texture(chocotextura);
  box(170, 68, 17); 
  pop();
}
function vhs() {
  push();
  translate(0, 0, 150);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  rotateZ(45);
  noStroke();
  texture(cassette);
  box(170, 68, 17); 
  pop();
}
function lingote () {
  push();
  translate(0, 0, 150);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  rotateZ(45);
  noStroke();
  texture(oro);
  box(170, 68, 17); 
  pop();
}
function tallarines () {
  push();
  translate(0, 0, 150);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  rotateZ(45);
  noStroke();
  texture(fideos);
  box(170, 68, 17); 
  pop();
}
