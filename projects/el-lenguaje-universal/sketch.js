//"El leguaje universal"
//Mateo Holgado
//Artes multimediales
//Tp.2.Reentrega


var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;


function preload() {
  img = loadImage ("tierra.gif");
  img1 = loadImage ("notas-musicales.gif")
  img2 = loadImage ("radio.webp");
  img3= loadImage ("ondas.gif")
  img4= loadImage("notas-musicales.gif")
  img5= loadImage("tierra.gif")
  img6= loadImage ("gif.gif")
    
  cancion = loadSound ("lenguaje-universal.mp3")
}

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent('div-sketch');
  cancion.loop();
}

function draw(){
background(img2);
  image (img,mouseX,mouseY,200,200)
  image (img1,500,0, 100,100);
  
  
  if (mouseIsPressed) {
     image(img3,0,0,600,500) ;
  } else {
    image(img4,0,0,100,100);
  }

  print(mouseIsPressed);
   
}




