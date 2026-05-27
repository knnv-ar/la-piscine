//Univerdidad Nacional de las Artes
//Parcial N°2 - Artes Multimediales I
//Autora: Juliana Belén Marenzi
//Cátedra: Lacabanne
//Turno Mañana

var song;
var value = 0;
var col = {
  r : 255,
  g : 0,
  b : 0
}
var sonidoR = false;

function preload(){
  song = loadSound("after-dark.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('div-sketch');
  rectMode(CENTER);
  
  song.setVolume(0.4);
  amp = new p5.Amplitude();
}

function mousePressed(){
  if(sonidoR == false){
    sonidoR = true;
    song.play();
  }
}

function draw() {
  background(0);
  
  //Volumen del sonido
  let volume = map(mouseY, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);
  
  //Paneo del sonido
  let panning = map(mouseX, 0, width, -1.0, 1.0);
  song.pan(panning);
  
  //Transformación de la figura al ritmo de la música
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.4, 10, 200);
  
  //Color random 
  col.r = random (0,255);
  col.g = random (0,255);
  col.b = random (0,255);
  
  noFill();
  translate(width/2, height/2);
  
  let m = millis();
  
  //Elipse y rectangulo
  for(x = 600; x >= diam; x = x/1.08){
    rotate (radians(frameCount/4))
    
    fill(255,80);
    if(m >= 16000){
      fill(col.r,col.g,col.b);
    }
    if(m >= 71000){
      noStroke();
      fill(255,80);   
    }
    if(m >= 111000){
      
      stroke(0);
      fill(col.r,col.g,col.b);
    }

    if(mouseIsPressed){
      rect(0,0,diam,x);
    }else{
      ellipse(0,0,diam,x);
    }
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.oncontextmenu = function() {
  return false;
}
