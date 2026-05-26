/* LA FUERZA DE LA IMAGINACIÓN LIBRE
"fuerzas de la fantasía y de la imaginacion artística" 
- Marchán Fiz, Simon. Ambientes y espacios lúdicos */

var fondo;
var gente;
var globo;
var robot;
var musica;
var brilloBurbuja = 255;
var transparencia = 0;
var oscurecer = 255;

function preload(){
  fondo = loadImage('img/fondo_cielo.jpg');
  gente = loadImage('img/gente.png');
  globo = loadImage('img/globo_ideas.png');
  robot = loadImage('img/robot2.png');
  musica = loadSound('musica/yo_robot.mpeg');
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  musica.loop();
}

function draw() {
  background(220);
  
  push();
  tint(255, 255, 255, oscurecer);
  image(fondo,0,0,700,500);
  pop();
  
  push();
  tint(255, 255, 255, transparencia);
  image(gente,-30,300);
  image(gente,200,300);
  pop();
  
  image(robot,250,270,250,250);
  push();
  if(oscurecer >= 1 && brilloBurbuja < 51){
    brilloBurbuja = 50;
  }
  brilloBurbuja--;
  tint(brilloBurbuja);
  image(globo,250,20,450,250);
  pop();
  
  push();
  noFill();
  ellipse(444,300,20,20);
  ellipse(470,280,30,30);
  pop();
  
  transparencia++;
  if(transparencia > 255) {
   transparencia = 0;
  }
  
  oscurecer--;
  if(oscurecer < 1){
    oscurecer = 255;
    brilloBurbuja = 255;
  }
}