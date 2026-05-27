var texto = "";
let camera;
var vid;
let Letra;
let musica;
let musica2;





function setup() {
  background(255);
  let canvas = createCanvas(1500, 500, WEBGL);
  canvas.parent('div-sketch');
  camera = createCamera();
  setCamera(camera);

  vid = createVideo("pantallas-2.mp4");
  vid.loop();
  vid.size(120, 240);
  vid.hide();
  vid.play();
 

}

function preload() {

  musica3 = loadSound("am4.mp3")
  img1 = loadImage("montanas-fr/1.webp");
  img2= loadImage("montanas-fr/2.webp");
  img3 = loadImage("montanas-fr/3.webp");
  img4 = loadImage("montanas-fr/4.webp");
  img5 = loadImage("montanas-fr/5.webp");
  img6 = loadImage("montanas-fr/6.webp");
  img7 = loadImage("montanas-fr/7.webp");
  img8 = loadImage("montanas-fr/8.webp");
  img9 = loadImage("sol.webp");
  img10 = loadImage("luna.webp");
}

function draw() {
  
  musica3;
  
   if(mouseIsPressed){
if (mouseButton == LEFT) {
 
  musica3.stop();
  stroke(255);
  noFill();
  
 
 

  tint (140, 0, 0,10);
  
  

    }
    }
  //fill(255,0,0);
  //text("el ciello llora tanto que deberia ser mujer", 300, 180);
  background(0);
  push()
  noStroke();
  
  
  texture(img9);
  translate(-10, -10, -10);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(40);//Parámetros: radio
  pop();
  
  push();
  image(img1, -400, -300);
  image(img2, -500, -300);
  image(img3, -500, -300);
  image(img4, -500, -300);
  image(img5, -500, -300);
  image(img6, -500, -300);
  image(img7, -500, -300);
  image(img8, -500, -300);
  
  image(vid, 500, 0); // dibuja el cuadro del video en el lienzo.
    image(vid, -900, 0); // dibuja el cuadro del video en el lienzo.
   
  

  
  if (keyIsPressed) { 
    if (keyCode == UP_ARROW) {
     
     camera.lookAt(100, 0, 0);
     camera.setPosition(sin(frameCount / 30) * 1000, 10, 550);
    } 
    if (keyCode == DOWN_ARROW) {
     
     camera.lookAt(100, 0, 0);
     camera.setPosition(sin(frameCount / 100) * 100, -10, 500);
    }
    if (keyCode == LEFT_ARROW) {
    camera.lookAt(100, 0, 0);
     camera.setPosition(sin(frameCount / 60) * 100, 10, 550);
    }
    if (keyCode == RIGHT_ARROW) {
    camera.lookAt(100, 0, 0);
     camera.setPosition(sin(frameCount / 60) * 100, 10, 550);
    }
   
    
   }

  camera.lookAt(-20, 0, 0);

 
  
  texture(img10);
  translate(-10, -10, -10);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(40);//Parámetros: radio
  pop();


 
  //como controlo el movimiento de la camara
  //como entender el espacio para poner otras escenas cuando la camara mira al costado
  
}


