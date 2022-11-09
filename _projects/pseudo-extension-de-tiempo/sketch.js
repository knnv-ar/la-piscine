function preload(){
  cancion = loadSound("cancion.mp3");
  fuente = loadFont("dogica.ttf");
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');
  }

function draw() {
  background(mouseX,mouseY);
  
  //lineasMouse();
  textoInicio();
  escena1();
  escena2();
  escena3();
  escena4();
  }

function keyReleased(){
  if (key == "x"){
    cancion.play()
  }
   
}