//"La vida del tiempo"
//Artes Multimediales - Valentina Ferreira
//Parcial N°2
//PRESIONAR BARRA ESPACIADORA


var x = 0;
var img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,imgx,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20;
var tik;

function preload(){
  img1 = loadImage ("imgs/a.webp");
  img2 = loadImage ("imgs/b.webp");
  tik = loadSound("tik.mp3");
  img3 = loadImage("imgs/3.webp");
  img4 = loadImage("imgs/4.webp");
  img5 = loadImage("imgs/5.webp");
  img6 = loadImage("imgs/6.webp");
  img7 = loadImage("imgs/7.webp");
  img8 = loadImage("imgs/8.webp");
  imgx = loadImage("imgs/1.webp");
  img9 = loadImage("imgs/9.webp");
  img10 = loadImage("imgs/10.webp");
  img11 = loadImage("imgs/11.webp");
  img12 = loadImage("imgs/12.webp");
  img13 = loadImage("imgs/13.webp");
  img14 = loadImage("imgs/14.webp");
  img15 = loadImage("imgs/15.webp");
  img16 = loadImage("imgs/16.webp");
  img17 = loadImage("imgs/17.webp");
  img18 = loadImage("imgs/18.webp");
  img19 = loadImage("imgs/19.webp");
  img20 = loadImage("imgs/20.webp");
  
  
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
 tik.loop ()
  
}

function draw() {
  background(220);
  fondo();
  push();
  agujas();
  pop(); 
  tint(200,160,120);
  image(img2,190,190,199,200);
   frases();

}

function frases() {
     if (keyIsPressed) {
       if(keyIsPressed==""){}
 
      noTint();
      image(img3,10,20,130,30);
       image(img4,300,490,100,40);
       image(img5,100,510,120,30);
       image(img6,460,300,100,20);
       image(img7,20,230,100,51);
        image(img8,300,10,100,40);
       image(img9,200,60,120,30);    
        image(imgx,480,160,100,30); 
        image(img10,400,560,120,30);
       image(img11,40,430,80,40);
        image(img12,400,560,120,30);
        image(img13,500,360,60,30);
        image(img14,10,560,120,30);
       image(img15,90,70,70,30);
       image(img16,500,10,100,30);
       image(img17,10,180,90,20);
       image(img18,490,460,100,30);
       image(img19,400,90,100,30);
       image(img20,8,360,80,30);
       
    }

}

function agujas(){
   
  	x+=0.4;
  translate (width/2, height/2);
  rotate(x);
  noStroke();
  fill(10);
 
    ellipse(156,10,30,30);
  ellipse(100,10,30,30);
  ellipse(128,10,30,30);
  

}

function fondo(){
  
  tint(200,160,120); 
  image(img1, 0,0,300,400);
  image(img1, 140,140,300,300);
  image(img1,300,300,500,500);
  image(img1,0,400,200,200);
  image(img1,500,0,100,100);
  image(img1,260,60,100,100);
  image(img1,190,480,300,400); 
  image(img1,170,270,222,222);
  image(img1,300,-120,300,300);
  image(img1,400,100,400,300);
 
}

document.oncontextmenu = function() {
  return false;
  }




