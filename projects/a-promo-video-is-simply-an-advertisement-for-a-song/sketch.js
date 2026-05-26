var estado = 0;
var x = 0; 
var y = 0; 
var destinoX=0;
var destinoY=0;
var easing = 0.01;
var radioMayor=60;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('div-sketch');

//sonidos en setup para un buen procesamiento
  sonidochapa.stop();
  sonido1.stop();
  sonido2.stop();
  sonido3.stop();
  sonido4.stop();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();

}

function preload() {
  
  //IMAGENES Y GIFS
  
  //fondos
  fond0= loadImage ("archivos/ruidotvgif.gif");
  texturaclimax= loadImage ("archivos/fondoclimax.gif");
  fondococacola= loadImage ("archivos/cambiocolor.gif");
  fondo1= loadImage ("archivos/textures.gif");
  climaxgif= loadImage("archivos/textures-2.gif");
  fondopunchline= loadImage("archivos/pinktexture.gif");
  tvcolor= loadImage("archivos/tv-color.gif");  
  chapa= loadImage("archivos/chapasinicio.jpg");


  //placas
  placa1= loadImage ("archivos/apromovideo.png");
  placa2= loadImage("archivos/theme.png");
  placa3= loadImage("archivos/chorus.png");
  placa4= loadImage("archivos/lipsync.png");
  placa5=loadImage("archivos/punchline.png");
  placa6= loadImage("archivos/climax.png");
  placa7= loadImage ("archivos/placa7.png");
  placa8= loadImage("archivos/apromovideo-2.png");
  cocacola= loadImage("archivos/cocacola.gif");

  //teles
  tele= loadImage ("archivos/tele-png.png");
  todasteles= loadImage ("archivos/teles.png");
  tele1= loadImage ("archivos/suede2.gif");
  tele2= loadImage ("archivos/suede3.gif");
  tele3= loadImage("archivos/bowie1.gif");
  tele6medio = loadImage ("archivos/suede1.gif");
  tele4= loadImage ("archivos/madonna.gif");
  tele5= loadImage ("archivos/suede6.gif");
  tele6medio = loadImage ("archivos/suede1.gif");
  periodico1= loadImage("archivos/periodico1.gif");
  periodico2= loadImage("archivos/periodico2.gif");
  justine= loadImage("archivos/justine.gif");
  madonna= loadImage("archivos/madonna2.gif");
    
  //SONIDOS
  sonidochapa= loadSound("audio/sonidochapas.mp3");
  sonido1= loadSound("audio/sonido1.mp3");
  sonido2= loadSound("audio/sonido2.mp3");
  sonido3= loadSound("audio/sonido3.mp3");
  sonido4= loadSound("audio/sonido4.mp3");
  sonido5= loadSound("audio/sonido5.mp3");
  sonido6= loadSound("audio/sonidoseis.mp3");
  sonido7= loadSound("audio/sonido7.mp3");
  sonido8= loadSound("audio/sonido8.mp3");

}
 function keyPressed() {

//cambios de estado e introduccion de sonidos por actividad en números del teclado
   
  if (key == "1") {
    estado = 1
    
  sonidochapa.setVolume(0);
  sonido1.play();
  sonido2.stop();
  sonido3.stop();
  sonido4.loop();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();
    
  }
  if (key == "2") {
    estado = 2;
    
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.play();
  sonido3.stop();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();
    
  }
  if (key == "3") {
    estado = 3;
    
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.stop();
  sonido3.play();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();
    
  }
  if (key == "4") {
    estado = 4;
    
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido3.stop();
  sonido2.play();
  sonido3.stop();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();
  
  }
  if (key == "5") {
    estado = 5;
    
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.stop();
  sonido3.stop();
  sonido5.play();
  sonido6.stop();
  sonido7.stop();
  sonido8.stop();
    
  } 
   if (key == "6") {
    estado = 6
  
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.stop();
  sonido3.stop();
  sonido4.stop();
  sonido5.stop();
  sonido6.loop();
  sonido7.stop();
  sonido8.stop();
   
  } 
   if (key == "7") {
    estado = 7
  
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.stop();
  sonido3.stop();
  sonido4.stop();
  sonido5.stop();
  sonido6.stop();
  sonido7.loop();
  sonido8.stop();
   
  }
   if (key == " ") {
     estado = 8
     
  sonidochapa.setVolume(0);
  sonido1.stop();
  sonido2.stop();
  sonido3.stop();
  sonido4.stop();
  sonido5.stop();
  sonido6.stop();
  sonido7.stop();
  sonido8.play();
    
  }
}

function draw() {   
  
//fondo base [ruido y TV1]
   image(fond0,0,0,0,0);
   image(tvcolor,150,0,500,400);
 

//cambios en placas de tv grande y todas las imagenes de las tvs por actividad en números del teclado

    if (estado == 1) {
    
    image(placa1,150,0,500,400);
      
  } else if (estado == 2) {
   
    image(placa2,150,0,500,400);
    
    //teles
    image(tele1,0,0,150,110);
    image(tele2,655,0,140,115);
    
  } else if (estado == 3) {
 
    image(placa3,150,0,500,400);
    
    //teles
    image(tele1,0,0,150,110);
    image(tele2,655,0,140,115);
    image(tele3,10,274,140,110);
    image(tele3,655,274,140,110);
    
  } else if (estado == 4) {
    
    image(placa4,150,0,500,400);
    
    //teles
    image(justine,0,0,150,110);
    image(justine,655,0,140,110);
    image(tele4,10,274,140,110);
    image(tele4,655,274,140,110);
    image(tele5,170,400,140,120);
    image(tele5,490,400,140,120);
    
    
  } else if (estado == 5) {
    
    image(fondopunchline,0,0,800,600);
   
    image(tele6medio,330,415,140,120);
    image(fondo1,0,0,800,600);
   
    image(madonna,0,0,150,125);
    image(madonna,655,0,140,125);
   
   
    image(placa5,150,0,500,400);
    
  } else if (estado == 6) {
    
    image(texturaclimax,0,0,800,600);
    
    image(placa7,150,0,500,400);
    image(tele1,0,0,150,110);
    image(tele2,655,0,140,115);
    image(tele6medio,330,415,140,120);
    image(climaxgif,-50,-20,1000,800);
    image(tele5,170,400,140,120);
    image(tele5,490,400,140,120);

    
  } else if (estado == 7) {
    
    image(fondococacola,0,0,800,600)
    image(cocacola,150,0,500,400);
    image(placa8,150,0,500,400)
    image(periodico1,0,0,150,110);
    image(periodico2,655,274,140,110);
    
  } 

  //marcos de las teles [base]

  image(tele,150,0,0,0);
  image(todasteles,0,0,800,600)
  
  //apertura de chapa-tapa inicial
  
  if (mouseIsPressed){
   sonidochapa.play();
   destinoX=0;
   destinoY=600;
  }
  
  x += (destinoX - x) * easing;
  y += (destinoY - y) * easing;
    
  push(); 
  image(chapa,x,y,800,600);
   
  translate(x, y);
  rotate(radians(x));

  pop()
  
 //última chapa
  
  if (estado == 8) {
   
    image(chapa,0,0,800,600);
  }

}
