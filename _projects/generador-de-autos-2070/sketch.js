let largoVehiculo; //(120,200 espejado) Z

let pressCar = 1;
let pressEscenario = 1;

let botonE,botonA;

let reverb = new p5.Reverb();

let movimientoY=0;

let tintOn = true;

let font;
let humo2;
let sky;

let altoVehiculoTecho;  //(60,160) Y
let altoVehiculoPiso;   //(4,20)

let difAltoAtras;
let d;

let reboteB=true;

let rebote=0;


let anchoAdelante; //(60,90 espejado) X z
let ruedaAdelante; //(10%-25% anchoAdelante)

let anchoAtras;    //(80,120 espejado); X -z
let ruedaAtras;    //(20%,35% anchoAtras)

let music;
let humo;
let pisovich;

let arrancon;

function preload(){
  font=loadFont('PressStart2P-Regular.ttf')
  music=loadSound('beat marciano 1.wav')
  music2=loadSound('code.mp3')
  humo=loadImage('scr/planetas1.gif');
  humo2=loadImage('scr/fx1.gif');
  sky=loadImage('scr/sky1.gif')
  pisovich=loadImage('scr/piso.gif')
  arrancon=loadSound('arranque.mp3')
  botonE=loadImage('scr/botonE.png')
  botonA=loadImage('scr/botonA.png')
}


function setup() {
  
  let canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('div-sketch');
  
  textFont(font);
  textAlign(CENTER,CENTER)
  textSize(10);
  
  music.loop();
  music.setVolume(0.6)
  
  music2.loop();
  music2.setVolume(0);
  
  arrancon.setVolume(0.3)
  

  
  angleMode(DEGREES)
  
  largoVehiculo=random(120,200);
  
  anchoAdelante=random(30,50);
 // ruedaAdelante=(anchoAdelante/random(10,25));
  
  anchoAtras=random(100,200);
  
  altoVehiculoTecho=random(40,60);
  altoVehiculoPiso=random(4,10);
  
  difAltoAtras=random(2,10);
  ruedaAdelante=altoVehiculoTecho;
  ruedaAtras=altoVehiculoTecho;
  
}
let cs=0;
function draw() {
  if(pressCar<1){
    pressCar+=0.05
  }
  if(pressEscenario<1){
    pressEscenario+=0.05;
  }
  
  push()
  
   background(10);
  pointLight(120, 120, 120,100,100,200)
  ambientLight(60)
 
  
  cs+=0.4;
  translate(0,100,-250)
  //rotateZ(10)
  //rotateZ(5)
  //rotateX(-cs/8)
  rotateY(cs)
  
 d=20;
  
  push()
  
  rotateX(cs)
  rotateZ(cs/4)
  if(tintOn){
  tint(20,250,200)
  }
  texture(humo2)
  translate(800,0,0)
  sphere(300)
  
  if(tintOn){
  tint(200,20,20)}
  translate(-1800,0,0)
  sphere(300)
  
  pop()
  reboteF();
  push()
  
  
  //generador de humo
  
  translate(0,50,30)
  for(let i = 0; i < 300; i++){
    if(tintOn){
    tint(20,150,200)}
    translate(random(-3,3),0,random(-3.6,3))
    humear(80);
  }
  for(let i = 0; i < 300; i++){
    if(tintOn){
    tint(20,150,200)}
    translate(random(-10,10),0,random(-10,9))
    humear(20);
  }
  
  
  pop()
  fill(200)
  push()
  beginShape();
  
  ////////////////
  push();
  rotateX(rebote)
  translate(0,movimientoY,0)
    /////////////////////////////////////////
  //cosoatras
  push()
  translate(0,-altoVehiculoTecho/2-altoVehiculoPiso/2,-largoVehiculo)
  box((anchoAtras/3)*2,altoVehiculoTecho,10)
  pop()
  
  specularMaterial(1000)
  shininess(200)
  if(tintOn){
  ambientMaterial(255, 0, 255); // magenta
  }else{
  ambientMaterial(255, 255, 255); // magenta
  }
  //techo
  vertex(anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  vertex(-anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  vertex(-anchoAtras,-altoVehiculoTecho-d,-largoVehiculo)
  vertex(anchoAtras,-altoVehiculoTecho-d,-largoVehiculo) //va con -d
  endShape();
  
  beginShape();
  
  //piso
  vertex(anchoAdelante,altoVehiculoPiso,largoVehiculo)
  vertex(-anchoAdelante,altoVehiculoPiso,largoVehiculo)
  vertex(-anchoAtras,altoVehiculoPiso,-largoVehiculo)
  vertex(anchoAtras,altoVehiculoPiso,-largoVehiculo)
  endShape();
  
  
  beginShape();
  
  
  //bordeAdelante
  vertex(-anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  vertex(-anchoAdelante,altoVehiculoPiso,largoVehiculo)
  vertex(anchoAdelante,altoVehiculoPiso,largoVehiculo)
  vertex(anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  endShape();
  
  beginShape();
  
  //bordeDerecha
  vertex(anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  vertex(anchoAtras,-altoVehiculoTecho-d,-largoVehiculo)
  vertex(anchoAtras,altoVehiculoPiso,-largoVehiculo)
  vertex(anchoAdelante,altoVehiculoPiso,largoVehiculo)
  endShape();
  
  beginShape();
  
  //bordeIzq
  vertex(-anchoAdelante,-altoVehiculoTecho,largoVehiculo)
  vertex(-anchoAtras,-altoVehiculoTecho-d,-largoVehiculo)
  vertex(-anchoAtras,altoVehiculoPiso,-largoVehiculo)
  vertex(-anchoAdelante,altoVehiculoPiso,largoVehiculo)
  endShape();
  
  beginShape();
  
  //bordeAtras
  vertex(-anchoAtras,-altoVehiculoTecho-d,-largoVehiculo)
  vertex(-anchoAtras,altoVehiculoPiso,-largoVehiculo)
  vertex(anchoAtras,altoVehiculoPiso,-largoVehiculo)
  vertex(anchoAtras,-altoVehiculoTecho-d,-largoVehiculo)
  endShape();
  
  pop();
  
  ////////////////////////////////////
  ///////////////////////////////////
  //////////////////////////////////
  //ruedas
  noStroke();
  
  //0X,altoY,largoZ
  //adelante
  push()
  translate(0,-altoVehiculoTecho/2,largoVehiculo)
  if(tintOn){
  ambientMaterial(-50)
  }else ambientMaterial(500);
  specularMaterial(2)
  shininess(3)
  sphere(altoVehiculoTecho+altoVehiculoPiso)
  pop()
  
  //atras
  //1
  push()
  translate(anchoAtras,-altoVehiculoTecho/2,-largoVehiculo)
  if(tintOn){
  ambientMaterial(-50)
  }else ambientMaterial(500);
  specularMaterial(2)
  shininess(3)
  sphere(altoVehiculoTecho*1.5)
  pop()
  
  //2
  push()
  translate(-anchoAtras,-altoVehiculoTecho/2,-largoVehiculo)
  if(tintOn){
  ambientMaterial(-50)
  }else ambientMaterial(500);
  specularMaterial(2)
  shininess(3)
  sphere(altoVehiculoTecho*1.5)
  pop()
  
  
  ////////////////////////////////////////
  //cupula
  push()
  if(tintOn){
  emissiveMaterial(130, 230, 0)
  }else{
     emissiveMaterial(200,200,200)
  }
  shininess(1000)
  translate(0,-50,0)
  ellipsoid(50,50,100)
  pop()
  
  

  
  
  
    
   push()
  rotateY(cs*-2)
  if(tintOn){
  tint(200,255,200)}
  texture(sky)
  box(2200,2200,2200);
  pop()
  
  
  
  
  
  
  ///////////////////////////////////////////
  //piso
  push();
  texture(pisovich)
  translate(0,40,0)
  rotateX(90)
  plane(700,5000)
  pop();
  ////////////////////////////////////////////
  ///////////////////////////////////////////  
  
  
  pop();
////////////////////////////////////
////////CODIGO VISUAL//////////////
//////////////////////////////////
  push();
  fill(20,200,20)
  //rotateY(-cs)
  push()
  //rotateY(-cs)
  translate(0,0,200)
  rotateY(-cs)
  text ('ruedaAdelante.setRadio(' +int(altoVehiculoTecho+altoVehiculoPiso/1000000000000000)+ ')',0,-130)
  translate(0,10,0)
  text('ruedaAdelante.setCoordenadas('+0+','+int(altoVehiculoTecho)+','+int(largoVehiculo) +')',0,-130)
  pop()
  strokeWeight(10)
  stroke(20,200,20,100)
  noFill();
  
  push()
  //rueda adelante
  translate(0,-altoVehiculoTecho/2,largoVehiculo)
  rotateY(-cs)
  box((altoVehiculoTecho+altoVehiculoPiso)*2,      (altoVehiculoTecho+altoVehiculoPiso)*2,  (altoVehiculoTecho+altoVehiculoPiso)*2)
  pop()
  //sphere(altoVehiculoTecho+altoVehiculoPiso)
  //translate(0,-altoVehiculoTecho/2,largoVehiculo)
  
  
  pop();
  
  //botoneras
  //textura
  pop()
  push()
  translate(225,-160,0)
  
  scale(pressEscenario)
  texture(botonE)
  plane(100,25)
  pop()
   push()
  
  translate(-160,118,100)
  scale(0.8)
  scale(pressCar)
  texture(botonA)
  plane(90,20)
  pop()
  
}

function mousePressed(){
  if(mouseX>25 && mouseX<125 && mouseY>350 && mouseY<375){
    pressCar=0.8;
  //arrancon.
  arrancon.play()
  largoVehiculo=random(120,200);
  
  anchoAdelante=random(30,50);
 // ruedaAdelante=(anchoAdelante/random(10,25));
  
  anchoAtras=random(100,200);
  
  altoVehiculoTecho=random(40,60);
  altoVehiculoPiso=random(4,10);
  
  difAltoAtras=random(2,10);
  ruedaAdelante=altoVehiculoTecho;
  ruedaAtras=altoVehiculoTecho;
  

  }
  
  if(mouseX>475 && mouseX<575 && mouseY>25 && mouseY<50){
    pressEscenario=0.8;
  
  //music=loadSound('beat marciano 1.wav')
  //en esta cambio el volumen una por otra.
   if(tintOn) {
     arrancon.setVolume(0.15)
  humo=loadImage('scr/code.png');
  humo2=loadImage('scr/code.png');
  sky=loadImage('scr/grilla2d.png')
  pisovich=loadImage('scr/grilla2d.png')
       music.setVolume(0)
  music2.setVolume(0.3);
    
    tintOn=false;
   }else{
     arrancon.setVolume(0.3)
       humo=loadImage('scr/planetas1.gif');
  humo2=loadImage('scr/fx1.gif');
  sky=loadImage('scr/sky1.gif')
  pisovich=loadImage('scr/piso.gif')
       music.setVolume(0.6)
  music2.setVolume(0);
     
     tintOn=true;
   }
  }
}

function reboteF(){
  if(rebote<5 && reboteB){
    rebote+=0.05;
     movimientoY-=0.05
    
  }else{
    reboteB=false;
  }
if(rebote>-3 && !reboteB){
 movimientoY+=0.03
   rebote-=0.03
   }else reboteB=true;

}

function humear(h){
  noStroke()
  texture(humo)
  sphere(random(h/4,h))
}