var vid;
var img1;
var texto="";
var img2;
var x=[];
var y=[];
var velocidad =30;
function preload(){

img1 = loadImage('imagenes/allank.webp');
img2 = loadImage('imagenes/manzana.webp');
}

function setup() {
  let canvas = createCanvas(800, 360);
  canvas.parent('div-sketch');
  vid = createVideo("video/eat.mp4");
  vid.loop();
  vid.hide();
}
function draw() {

tint(244,209,11);
image(vid,0,0);
  
  tint(244,230,50);
  image(img1,10,10,mouseX,height);

//texto
  stroke(0);
  fill(236,18,4);
  textSize(80);
  textFont("Architects Daughter");
   text("Eat,Eat",550,240);
  

//al clickear caen manzanas
  noStroke();
  imageMode(CORNER);
  fill(10,120);
  for (var i = 0; i < y.length; i++) // noprotect
  {
    image(img2,x[i], y[i],500,400);
    y[i] += velocidad;   
  }
}
function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);    
}
