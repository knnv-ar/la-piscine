//Oniromancia Digital
//Ignacio Buteler

var w=0;
var z=0;
var w1=0;
var z1=0;
var x=0;
var y=0;
var x1=0;
var y1=0;

var r=0;
var t=0;
var l=0


var bombo=false;
var caja=false;
  
var ejecutar=false;

var fondo;
var t=0 ,a ,b ,c ,d ;

//cargo los sonidos

var kick, snare, track, bienvenida ;

function preload() {
  kick = loadSound("kick.wav");
  snare = loadSound("snare.wav");
  track = loadSound("oniromancia.wav");
  bienvenida = loadSound("bienvenida.wav")
}

//estas dos funciones sirven para ejecutar los samples percusivos //una sola vez a traves de variables bandera o 'flags'

 function mouseClicked() {
     if(mouseButton === LEFT) {
        bombo = true;
     } 
 }
 function mousePressed() {
     if(mouseButton === RIGHT) {
        caja = true;
     } 
    }

// esta funcion activa la animacion
 function keyPressed() {
    if (keyCode==ENTER) {
      ejecutar=true;
    }
    
}

function setup(){
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  frameRate (15);  
  //llamo a la funcion loop para mantener la musica de fondo constantemente
  track.loop(); 
  track.setVolume (0);
  //bloqueo el menu que se abre al hacer click derecho
  document.oncontextmenu = function() { return false; }
 
  //personalizo el texto inicial
  textAlign(CENTER,CENTER);
  textSize(40);
  textFont("Montserrat Subrayada");
  bienvenida.loop();
}

function draw(){
  
  push();
  strokeWeight(4);

  
  fondo = 110 + sin (t/20) * 100
  background(80, 20 , fondo/4+100 , 20);
  t++;

  a = sin(t/5) *100 + cos (t/50) * 300;
  b = sin(t/50) *250;
  c = sin(t/5) *100 + cos (t/80) * 100;
  d = sin(t/5) *250;
  
  translate (300,300)
  fill(150,10);

  ellipse(a , b , c*2 , d);
  ellipse(-a/1.5 + 100 , -b  , c*2, d);
  pop();
  
  stroke(200);
  text ("Oniromancia Digital", 300,300);
 
  
  if (ejecutar==true) {
    
  bienvenida.setVolume(0);
    
 track.setVolume (1);
 
 translate (200,200);
 background (100, 90 , 255);

 stroke(255,100,100);
 strokeWeight(3);
  
  
  //Creo dos 'for' que generan 20 lineas color rosado moviendose por el espacio de manera espejada
  
  //Primer grupo de lineas (color rosado)
    
  for (i=0 ; i<20 ; i++) {
    line (w + i*10 , z + i*10, w1 + i*10 , w1 + i*10) ;
    r+=0.04 ;
  }
  
      
  for (i=0 ; i<20 ; i++) {
    line (-w + i*10, -z + i*10 , -w1 + i*10, -w1 + i*10) ;
    r+=0.04 ;
  }
  
  //Estas funciones determinan el valor de los puntos 'x', 'y' de los extremos de las lineas, al ser funciones trigonometricas generan movimientos elipticos en las mismas
  
w = sin(r/25) * 400 + cos (r/10) *10;

z = sin(r/100) * 320 ;

w1 = sin(r/25) * 400 + cos (r/10) *10 ;

z1 = sin(r/100) * 320 ;
  
    
  
  //Creo dos 'for' mas que generan 20 lineas color verde moviendose por el espacio de manera espejada, detras de las rosas que habia creado antes
  
  //Lineas verdes
  
  stroke(100,230,100);

    
  for (i=0 ; i<20 ; i++) {
    line (w + i*10 , z + i*10, w1 + i*10 , w1 + i*10) ;
    

  }
  
      
  for (i=0 ; i<20 ; i++) {
    line (-w + i*10, -z + i*10 , -w1 + i*10, -w1 + i*10) ;
   
}
  
//Animacion central
  
  //Aqui creo una animacion que se mueve por el centro de la pantalla 
 // La traslado un poco porque quedo descentrada
  translate (50, 50);
  stroke (mouseY/2 + 160,190,100,140);
  strokeWeight(4);
  noFill();

  for (i=0 ; i<20 ; i++) {
  ellipse ( x + 5*i , y +5*i, x1 + 5*i , y1 + 5*i) ;
  t+= 0.1 * mouseX/1000 ;
  }
  
  
  for (i=0 ; i<20 ; i++) {
    ellipse ( -x +10*i , -y +10*i, x1 +10*i , y1) ;
    t+= 0.1 * mouseX/1000 ;
  }

x = sin (t/10) *100 + cos (t/20) *20 ;


y = sin (t/10) * 100 - cos(t/5) *50 ;  


x1 = sin (t/15) *200 + cos(t) * 10  ;


y1 = sin (t/20) * 200 + cos (t) * 20 ;  

//si se cumple la condicion el sample se ejecuta 1 vez   
   if (bombo==true) {
         kick.setVolume(0.8);
         kick.play();
         bombo = false;   
    }
//si se cumple la condicion el sample se ejecuta 1 vez   
    if (caja==true) {
         snare.setVolume(0.8);
         snare.play();
         caja = false;    
    }
  }
  
}
