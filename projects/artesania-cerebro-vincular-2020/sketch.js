/*
2020
Universidad Nacional de las Artes
Área Transdepartamental de Artes Multimediales
Cátedra Lacabanne
Alumna: Malena Florencia Anaya
Parcial N°2
Referencias: AGAMBEN, Giorgio. “Arqueología de la obra de arte” 
AIRA, César. “Sobre el arte contemporáneo”  
ARNS, Inke. “El código como acto de habla performativo.” 
MARCHÁN FIZ, Simón. “El principio collage y el arte objetual.” 
MILLER, Margaret. ”Exposición Collage “ 
Miguel Angel Buonarroti - Sandro Botticelli - Período Renacentista - Collage -
*/

var img1, img2, img3, img4, img5, img6,img7, img8, img9, img10, img11, img12,img13,img14; //imagenes
var A1=0;//variables de movimiento con flechas
var A2=0;
var A3=0;
var A4=0;
var A5=0;
let tex1, text2, tex3; //textos
let angulo = 0.0; //variables de movimiento
let jitter = -0.01;
var angulo2 = 0.0
var desplazamiento = 150;
var escalar = 200;
var velocidad = 0.01;
let song1;//canción 1
let song2;//canción 2
var s1=false; //variable para que solo se reproduzca una vez
var s2=false; //variable para que solo se reproduzca una vez



function preload() {
  img0 = loadImage("img/05.png");
  img1 = loadImage("img/01.png");
  img2 = loadImage("img/02.png");
  img3 = loadImage("img/03.png");
  img4 = loadImage("img/04.png");
  img5 = loadImage("img/05.gif");
  img6 = loadImage("img/invfondo.png");
  img7 = loadImage("img/fibonacci.gif");
  img8 = loadImage("img/spiral.png");
  img9 = loadImage("img/fondo.png");
  img10 = loadImage("img/brain.gif");
  img11 = loadImage("img/mano1.png");
  img12 = loadImage("img/mano2.png");
  img13 = loadImage("img/ojos.png");
  img14 = loadImage("img/math.gif");  

  tex1 = loadStrings('data/agamben.txt')
  tex2 = loadStrings('data/aira.txt')
  tex3 = loadStrings('data/miguelangel.txt')
  
  song1 = loadSound('music/song1.mp3')
  song2 = loadSound('music/song2.mp3')
}

function setup() {
  let canvas = createCanvas(1000, 600);
  canvas.parent('div-sketch');

}

function draw() {
  background(200);
    noStroke();
    image(img9,0,0,1000,600);
  
  //reproducción de música de acuerdo a la posición del mouse

   if (mouseX>500){
    if(s2==false)
    song2.play();
    song1.pause();
    image(img10,0,0,1000,600);
    s2=true;
    s1=false;
   }else{
     if(s1==false){
    song1.play();
    song2.pause();
    s1=true;
    s2=false;
     }
  }
  
  //desplazamiento de los textos e imágenes

   var x1 = desplazamiento + sin(angulo2) * escalar;
   var x2 = desplazamiento - sin(angulo2) * escalar;

  fill(255)
  textSize(12);
  textFont("Courier New");
  text(tex1, 10, 10+x1, 400, 300);
  text(tex2, 10, 300+x2, 400, 300);
  text(tex3, 680 , 220,300,500)
  
    image(img11,-50+x1,0);
    image(img12,550+x2,0);
   angulo2 += velocidad;
  
  push()

  //movimiento de la sucesión de Fibonacci
  imageMode(CENTER)
  
  angulo = angulo + jitter;

  let c = (angulo+0.1);
  translate(500,300);
  rotate(c);
  image(img8,300,200);

  pop()
  
  image(img14,10,10)
  
  //variables de movimiento para las flechas del teclado
    if (keyIsPressed) {

    if (keyCode == RIGHT_ARROW) {
     A1+=1;
     A2+=2;
     A3+=3;
     A4+=4;
     A5+=5;
    }
    if (keyCode == LEFT_ARROW) {
     A1+=-1;
     A2+=-2;
     A3+=-3;
     A4+=-4;
     A5+=-5;
    }
  }
    image(img1,400 + A1,0)
    image(img2,400 + A2,0+A2)
    image(img3,400 + A3,0+A3)
    image(img4,400 + A4,0+A4)
    image(img0,400 + A5,0+A5)
    image(img5,400 + A5,0+A5)
    image(img13, 670,360,300,100);
 
  //variable de click para la reproducción de imagenes 
  if(mouseIsPressed){
    image(img7,0,0,1000,600);
    }
}
//variable para el funcionamiento del mouse
document.oncontextmenu = function() {
  return false;
}
