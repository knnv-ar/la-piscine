var estatica;
var modem;


function preload (){
estatica = loadSound ("./sonido/estatica.wav");
modem = loadSound ("./sonido/modem.wav");  
  
}


function setup() {

  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');


  background(240);
  
  estatica.loop();
  modem.loop();
  let luces = true;
  
  
  
  
}

function draw() {
  
  push();
  
  strokeWeight(3);
  stroke(50);
  rect(-250,-250,500,500);
  
  pop();
 
  
  
  
  
  push();
  
  fill(210);
  rect(-240,-240, 480, 480);
  
  pop();
  
  
  push();
  
  translate (0,0,0);
  rotateX ( frameCount *0.11);
  rotateY (frameCount - 1);
  rotateZ(frameCount *0.001 );
  
  lights ();
  ambientLight(60);
  directionalLight(255,0,0, 0, 0, 0);
  specularMaterial(120);
  
  fill(180);
  noStroke();
  box ( width/ 2 -10 , height/2 -10);
  
  pop();


}



