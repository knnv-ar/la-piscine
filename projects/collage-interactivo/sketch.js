var img;
var img2;
var img3;
var img4;
var img5;

var x = 0;

function preload(){
  
  img = loadImage ('el-grito.png');

  img2 = loadImage ('munch.jpg');
  
  img3 = loadImage ('atardecer-en-el-paseo.jpg');

  img4 = loadImage ('august.jpeg');
  
  img5 = loadImage('anxiety.jpg');
  
}

function setup() {
  let canvas = createCanvas(1080, 720);
  canvas.parent('div-sketch');
  rectMode (CENTER);
}

function draw() {
  background(0,100,600);
    
  
  image(img, 0,0);


  x+=0.01;
  translate (width/2, height/2);
  rotate(x);
  image(img2,0,0,100,80);
  
  
  
  
   x+=0.01;
  translate (width/10, height/4);
  rotate(x);
  image(img3,0,0,100,80);
  
  
   x+=0.001;
  translate (width/4, height/4);
  rotate(x);
  image(img4,0,0,100,80);
  
  
   x+=0.001;
  translate (width/4, height/4);
    rotate(x);
  image(img5,0,0,100,80);


}
