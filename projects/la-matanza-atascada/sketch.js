
var go1;
var go2;
var manifestacion;
var y2=0;
var velocidad2=5
var boleta;
var inst;
var click;
var opcion=0;
var vidas= 4;
var puntos= 0;
var angulo = 0.0;
var desplazamiento = 60;
var escalar = 300;
var velocidad = 0.05;
var mira;
var y=0;
var f=0;
var img= [];
var img2= [];
var info;
var intro;
function preload(){
img[0] = loadImage ("kiosco.webp");
  img[1]= loadImage ("g-c.webp");
  img[2]= loadImage("s-j.webp");
  img[3]= loadImage ("v-p.webp");
img2[0]= loadImage("f-e.webp");
  img2[1]= loadImage ("s-b.webp");
  info= loadImage ("info.webp");
  intro = loadImage ("intro.webp");
  inst= loadImage("inst.webp")
  Cumbia= loadSound("cumbia.mp3");
  Dolor= loadSound("dolor.mp3");
  Risa= loadSound("risa.mp3");
  boleta=  loadImage ("boleta.webp");
  manifestacion= loadSound("manifestacion.mp3");
  go1= loadImage("go1.webp");
  go2= loadImage ("go2.webp");
}

function juego(){var xp = desplazamiento + sin(angulo) * escalar;

  if (y>3){
    y=0;
  }
  if (y<0){
    y=3;
  }
   if (f<0){
    f=1;
  }
   if (f>1){
    f=0;
  }
  y2+=velocidad2;
  image (img[y],0,0);
  image (img2[f],xp+210,315)
angulo += velocidad;
  
  textStyle(BOLD);
  fill(0,250,50);
  textSize(20);
  text("Puntos:",0,20);
  text(puntos, 85,21);
  text("Vidas:",560,20);
  text(vidas, 630,20);
  click=xp                 
  image (boleta, mouseX, y2);
  if(mouseX>click+228 && mouseX<click+315 && y2>318 && y2<427){
    
    puntos++;
  }
  if(mouseX>click+228 && mouseX<click+315 && y2>318 && y2<427 || y2>500){
    y2=-20
  }
  if (y2>499){
    vidas--;
  }
  
if(puntos>9){
  opcion=4
  background(0)
  Cumbia.stop();
  manifestacion.stop();
  
}
if(vidas<0){
  opcion=5
  background(250);
  Cumbia.stop();
  manifestacion.stop();
}
}

function mousePressed(){
  if(opcion==0){
  if( mouseY>235 && mouseY<265 && mouseX>250 && mouseX<400){
    opcion=1
    manifestacion.loop();
    manifestacion.setVolume(0.06)
  }
   if(mouseY>308 && mouseY<338 && mouseX>275 && mouseX<375){
    opcion=2;
  }
  if(mouseY>382 && mouseY<412 && mouseX>155 && mouseX<495){
    opcion=3;
  }
  } 
}
function setup() {
  let canvas = createCanvas(650, 500);
  canvas.parent('div-sketch');
  
 Cumbia.loop();
  Cumbia.setVolume(0.1);
  
}

function draw() {
  background(220);
  if (opcion==0){
  image(intro,0,0);
  }
  if (opcion==1){
    juego();
    
  }
  if (opcion==2){
    image(info,0,0);
    textSize(20)
    textFont("Verdana");
    textStyle(BOLD);
    fill(250);
    text("Presionar return para regresar...",270,490)
  }
  if(opcion==3){
    image(inst,0,0);
    textSize(20)
    textFont("Verdana");
    textStyle(BOLD);
    fill(250);
    text("Presionar return para regresar...",270,490)
  }
  if (opcion==4){
    image(go2,0,0);
  }
  if (opcion==5){
    image(go1,0,0);
  }
 
  
}

function keyPressed (){
  if (keyCode == 37){
    y--
  }
  if (keyCode == 39){
    y++
  }
  if (keyCode == 38){
    f++
  }
  if (keyCode == 40){
   f--
  }
  if(keyCode== 49 ){
    opcion=1;
  }
  if (opcion==0 || opcion==2 || opcion ==3){
  if(keyCode== 8){
    opcion=0
  }
  }
}

