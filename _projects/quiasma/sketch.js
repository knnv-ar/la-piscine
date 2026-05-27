/*Universidad Nacional de las Artes- Artes multimediales
Multimediales I
Cátedra:Lacabanne
Alumna: Camila Maibel Romero
Trabajo final 
"Quiasma"
*/
let cabeza = [];
let torso = [];
let pelvis = [];
var cont1 = 1;
var cont2 = 4;
var cont3 = 2;
var tripas;
var orgia;
var mic;

function preload(){
  for (i=0; i<7; i++){
    cabeza[i]= loadImage('img/cabeza'+ i + '.jpg');
  }
  for (i=0; i<8; i++){
    torso[i]= loadImage('img/torso'+ i + '.jpg');
  }
  for (i=0; i<3; i++){
    pelvis[i]= loadImage('img/pelvis'+ i + '.jpg');
  }
  tripas= loadImage('img/tripas0.webp');
  orgia = loadImage('img/orgiass.webp');
}

function setup() {
  let canvas = createCanvas(800, 540);
  canvas.parent('div-sketch');
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(255)
  vol = mic.getLevel();
  y = int(map(vol,0,0.5,200,255));
  
  if (y>205){
    tint(y,50,50)
  }else{
    tint(255);
  }
  image(orgia,0,0);
  push()
  imageMode(CENTER);
  tint(255);
  image(cabeza[cont1],width/2,100,150,150);
  image(torso[cont2],width/2,300,180,260);
  image(pelvis[cont3],width/2,450,160,140);
  pop();
  
  
  if(mouseIsPressed){
    cont1= int(random(cabeza.length));
    cont2= int(random(torso.length));
    cont3= int(random(pelvis.length));
  }
  
}
