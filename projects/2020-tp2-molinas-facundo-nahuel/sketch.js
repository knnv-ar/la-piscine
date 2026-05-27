//UTILIZAR WEBCAM


var video;
var piano; 
let palabra;


///TEXTO
var x=40;
var y=40;
var velocidadX=0.5;
var velocidadY=0.7;
var direccionX=1;
var direccionY=1;

///CAMARA

var angle=0;
var angu=0.0;
var despla=60;
var velo=0.04;
var escalar=180;







function preload(){
  piano=loadSound("audio/piano.mp3");
  
}






function setup() {
  let canvas = createCanvas(900, 500, WEBGL);
  canvas.parent('div-sketch');
  video = createCapture(VIDEO);
  video.size(400,300);
  video.hide();
  piano.loop();
 

}

function draw() {
  
  ///LUZ
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  var posZ=150;
  
 
  specularMaterial(255);
 pointLight(255,255,255, locX, locY, posZ);
  ////
  
  
  let sc=second();
  
  ///TEXTO MOVIMIENTO
   palabra=createGraphics(100,100);
  palabra.background(255);
 palabra.textFont("Courier");
palabra.textSize(12);
  palabra.textAlign(CENTER);
 x+=(direccionX * velocidadX);
     y+=(direccionY * velocidadY);
  
 if(x>100 -25 || x<20 )
         {direccionX = -direccionX;}
  /////
     if(y>100-3|| y<5 )
      { direccionY = -direccionY;}
  

    palabra.translate(x,y);
    
    if(sc<15)
    {
      palabra.text('quien soy?',0,0);
      
      
   }
  else if(sc>15)
  {
    palabra.text('que soy?',0,0);
      
  }
  
  
  
  
  
  
  
 
  
  var y1= despla +sin(angu)*escalar;
angu+=velo;
  background(0);
  
  var paneo = sin(angu);
  piano.pan(paneo);
  piano.setVolume(0.3);
  
  
 
  
  
    camera(y1,0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1,0);


  noStroke();
  rectMode(CENTER);
 
  
var col=sin(angu)*255;

  if(sc<30){
    ////////CUBO 1
  push();
  tint(col,147,218);
  texture(palabra);
     translate(-100,-100,0);
  rotateX(-angle*0.5);
  rotateY(-angle*0.4);
  rotateZ(-angle*0.8);
  box(100);
  angle+=0.007;
  pop();
  
 ////////CUBO 2
  push();
  tint(238,col,52);
  texture(palabra);
     translate(100,-100,0);
  rotateX(-angle*0.5);
  rotateY(-angle*0.4);
  rotateZ(-angle*0.8);
  box(100);
  angle+=0.007;
  pop();
  
  ///////CUBO 3
  push();
  tint(236,66,col);
  texture(palabra);
     translate(100,100,0);
  rotateX(-angle*0.8);
  rotateY(angle*0.03);
  rotateZ(angle*0.2);
  box(100);
  angle+=0.007;
  pop();
  
  ///////CUBO 4
  push();
  tint(col,196,col);
  texture(palabra);
     translate(-100,100,0);
 rotateX(angle*0.5);
  rotateY(angle*0.8);
  rotateZ(angle*0.8);
  box(100);
  angle+=0.007;
  pop();
  }
  else if(sc>30){
  push();
  tint(col,147,218);
  texture(video);
     translate(-100,-100,0);
  rotateX(angle*0.7);
  rotateY(angle*0.3);
  rotateZ(angle*0.2);
  box(100);
  angle+=0.007;
  pop();
  
 ////////CUBO 2
  push();
  tint(238,col,52);
  texture(video);
     translate(100,-100,0);
  rotateX(-angle*0.5);
  rotateY(-angle*0.4);
  rotateZ(-angle*0.8);
  box(100);
  angle+=0.007;
  pop();
  
  ///////CUBO 3
  push();
  tint(236,66,col);
  texture(video);
     translate(100,100,0);
  rotateX(-angle*0.8);
  rotateY(angle*0.03);
  rotateZ(angle*0.2);
  box(100);
  angle+=0.007;
  pop();
  
  ///////CUBO 4
  push();
  tint(col,196,col);
  texture(video);
     translate(-100,100,0);
  rotateX(angle*0.5);
  rotateY(angle*0.8);
  rotateZ(angle*0.8);
  box(100);
  angle+=0.007;
  pop();
  } 
  
  
  push();
  translate(0,200);
  rotateX(HALF_PI);
 
  fill(120);
 
  plane(1500,1500);
  pop();





}

  function keyPressed() {
  if (key == "s") {
    piano.stop();
  }
  if (key == "p") {
    piano.pause();
  }
  if (key == " ") {
    piano.loop();
  }
  }

document.oncontextmenu = function() {
  return false;
}






