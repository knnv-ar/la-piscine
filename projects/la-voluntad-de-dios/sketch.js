/*
LA VOLUNTAD DE DIOS.
Music: Eric Skiff - Song Name - Underclocked - Available at http://EricSkiff.com/music */

var angulo = 0.0;
var angulo1 = 0.0;
var velocidadcuerpo = 0.04;
var velocidadmf = 0.03;
var puntos = 0;
var puntosprevios = 0;
var salida, tiempo, largo, transparencia, valorSeno, valorSeno1, mousepresionado;
var dejopasar = 0;
var mfarray = [0];
var mfrandom = 0;
var error = 3;

function preload() {
    fondo = loadImage('img/habitacion.jpg');
    cuerpo = loadImage('img/cuerpo.png');
    diarios = loadImage('img/diarios.jpg');
    inodoro = loadImage('img/inodoro.png');
    mfarray[0] = loadImage('img/pera.png');
    mfarray[1] = loadImage('img/manzana.png');
    mfarray[2] = loadImage('img/naranja.png');
    musica = loadSound('musica.mp3');
  }

function setup() {
  let canvas = createCanvas(599, 449);
  canvas.parent('div-sketch');
  noCursor();
}

function draw() {
  if(error<=0){
      valorSeno = sin(angulo);
      transparencia = map(valorSeno, -1, 1, 0, 255);
      image(diarios, 0, 0, 599, 449);
      textSize(40);
      fill(255, 255, 255, transparencia);
      text ("Clickee para volver a jugar", 61, 432);
      angulo += 0.07;
  }else{  
  
  if(!musica.isPlaying()){
    musica.play();
    musica.setVolume(0.5);
    }
  
  mf = mfarray [mfrandom];
  valorSeno = sin(angulo);
  valorSeno1 = sin(angulo1);
  largo = map(valorSeno, -1, 1, 200, 499);
  tiempo = map(valorSeno1, -1, 1, 0, 400);
  background(220);
  image(fondo, 0, 0);

  salida = tiempo+140;
  image(mf, salida, largo, 35, 35);
    
  if(mousepresionado==1){
    image(fondo, 0, 0);
  }
    
  image(cuerpo, tiempo, 20, 225, 371);
  
  image(inodoro, mouseX-150, mouseY-150, 300, 300);
  
  angulo += random(velocidadmf);
  angulo1 += random(velocidadcuerpo);
  if(valorSeno>0.9){
    angulo=-1;
    mfrandom = int(random(3));
  }
  textSize(30)
  stroke(0);
  fill(255);
  text ("Puntaje: "+str(puntos), 5, 440);
  text ("Vidas: "+str(error), 485, 440);

  if(!mouseIsPressed && angulo <= -1 && puntos>=1){
      dejopasar++;
  }
  if(dejopasar==4){
      error--;
      dejopasar=0;
  }
    if(mousepresionado==1 && angulo==-1){
      mousepresionado=0;
    }
}}

function mousePressed() {
    if(mouseY>largo && mouseY<largo+45 && mouseX>salida && mouseX<salida+80){
    puntos++;
    mousepresionado=1;
    }else{
    error--;
    }
    velocidadcuerpo+=0.002;
    velocidadmf+=0.001;
    dejopasar=0;
  if(error==-1){
  window.location.reload();
  }
}

document.oncontextmenu = function() {
  return false;
}