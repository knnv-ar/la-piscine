var mensajes = ["CUIDÁ EL MEDIO AMBIENTE", "NO MANTENGAS APRETADO", "LO ESTÁS DAÑANDO", "PARA YA!","¿Por qué?"];
var y=200;
var x=300;
var vid;
var musica, musicac,musicaa;

function preload() {
  musica = loadSound("musica.mp3");
  musicaa2=loadSound("musicaa2.mp3");
  musicac =loadSound("musicac.mp3");
  musicaA = loadSound("musica-a.mp3");
}
function setup() {
  let canvas = createCanvas(640, 302);
  canvas.parent('div-sketch');
  
  vid = createVideo("video.mp4");
  vid.loop();
  musicaA.loop();
  musica.loop();
  vid.hide();
  
}

function draw() {
  image(vid, 0, 0);
tint (255,255,255,50);

  if(mouseIsPressed==true){
 
 x = random(0,width);
  y= random(0,height);
  textFont("arial");
  stroke(255);
  noFill();
  
 
  text(random(mensajes),x,y);

  tint (140, 0, 0,10);
    }

}


function mousePressed(){

  if (mouseIsPressed == true){
      
      musicac.play();
      musicaA.stop();
      musicaa2.stop();
      musica.stop();
      musicaa2.loop();
    } 
}
   function mouseReleased(){
     if (mouseIsPressed==false){
      musicac.stop();
      musica.stop();
      musicaA.stop();
      musicaa2.stop();
      musicaA.loop();
      musica.loop();

     }

    
    
}

document.oncontextmenu = function() {
  return false;
}
