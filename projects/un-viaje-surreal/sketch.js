let estrella=[];
let torre=[];
var nochestrellada;
let cancion;
var x1 = 0;
var x2= 0;
let value = 0;
var edificio;
var edificio1;
var reloj;



function preload() {
  
  nochestrellada = loadImage("img/nochestrellada.jpg");
   
  for (let i=1 ;i < 7; i++) { 
  estrella[i]=loadImage("img/estrella"+i+".png");
  }
  
  for (let i=0 ;i < 5; i++) { 
  torre[i]=loadImage("img/t"+i+".png");
  }
  edificio=loadImage("img/edificio0.png");
   edificio1=loadImage("img/edificio1.png");
  
  cancion = loadSound('musica/si-tu-vois-ma-mere-midnight-in-paris-2011.mp3');

  reloj=loadImage("img/reloj.png");
 
  
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent('div-sketch');
  cursor(HAND);
}

function draw() {
  background(nochestrellada);
  image(edificio,0,50,800,600);

  if (value==0){ 
   push()
  imageMode(CENTER);
  x1+= 0.03;
  translate (565,90);
  rotate(x1);
  image(estrella[1],0,0 );
  pop()
  
   
  push()
  imageMode(CENTER);
  translate (270,275);
  rotate(x2);
  image(estrella[2],0,0 );
  pop()
  
  push()
  imageMode(CENTER);
  translate (250,145);
  rotate(x1);
  image(estrella[3],0,0 );
  pop()
  
   
  push()
  imageMode(CENTER);
  x2+=-0.05;
  translate (175,40);
  rotate(x2);
  image(estrella[4],0,0,120,120 );
  pop()
  
  push()
  imageMode(CENTER);
  translate (90,240);
  rotate(x2);
  image(estrella[5],0,0 );
  pop()
  
  push()
  imageMode(CENTER);
  translate (30,220);
  rotate(x1);
  image(estrella[6],0,0,50,100 );
  pop()
  
  }
  else if(value==5){
    background(nochestrellada); 
     push()
  imageMode(CENTER);
  x1+= 0.03;
  translate (565,85);
  rotate(x1);
  image(reloj,0,0,90,90);
  pop()
  
   
  push()
  imageMode(CENTER);
  translate (270,275);
  rotate(x2);
  image(reloj,0,0,140,140 );
  pop()
  
  push()
  imageMode(CENTER);
  translate (250,145);
  rotate(x1);
  image(reloj,0,0,70,70 );
  pop()
  
   
  push()
  imageMode(CENTER);
  x2+=-0.05;
  translate (180,40);
  rotate(x2);
  image(reloj,0,0,70,70 );
  pop()
  
  push()
  imageMode(CENTER);
  translate (90,240);
  rotate(x2);
  image(reloj,0,0,70,70);
  pop()
  
  push()
  imageMode(CENTER);
  translate (30,220);
  rotate(x1);
  image(reloj,0,0,50,50 );
  pop()
    image(torre[4],50,0);
    image(edificio1,0,50,800,600);
   
   }
}
function mouseClicked() {
  noLoop();
  background(nochestrellada);
  image(edificio1,0,50,800,600);
  if (value === 0) {
    value = +1;
    image(torre[0],50,0);
     image(edificio1,0,50,800,600);
    
  } else if (value === 1) {
    value = +2;
    image(torre[1],50,0);
image(edificio1,0,50,800,600);
  
  }  else if (value === 2) {
    value = +3;
    image(torre[2],50,0);
image(edificio1,0,50,800,600);
  
  }else if (value ===3){
    value=+4;
    image(torre[3],50,0);
    image(edificio1,0,50,800,600);
     
  }else if (value<=4){
    value=+5;
    image(torre[4],50,0);
    image(edificio1,0,50,800,600);
    cancion.play();
    loop();
   }


}

