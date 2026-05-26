//Instrucciones: Clickear en los círculos blancos para navegar por el espacio. 

//Declaro variables
//x,y reemplazarán la posición de las elipses
var x=0;
var y=0;
// d afectará el diámetro de las elipses
var d=0;
// imagen de fondo
var img;
//r, g, b definidas con valor de azul para el click
var r=20;
var g=118;
var b=200;
// Variables que reemplazan a x,y,d con cada click en las esferas de navegación
var circcentro=circX=circY=0;
// valor del alfa de las elipses
var col=50;
//Giro Extras
var p =0;
var q =0;
var angulo = 0.05;
var desplazamiento = 65;
var escalar = 30;
var velocidad = 0.03;
// CARGAR SONIDOS y videos
var cancion;

function preload() {
  img = loadImage('assets/night-sky.jpeg');
 cancion= loadSound('assets/capitan-beto.mp3');
 
}
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('div-sketch');
  cancion.loop();//cancion en loop

}

function draw() {
  background(0);
  image(img,0,0);


//Detallo las funciones para ordenar el draw
  
  radar();
  condiciones();
  cargador();
  noFill();
  stroke(255);
  push()
  tablero();
  pop()

//Detallo los elipses fijos
  ellipse(width/2,height/2,30);
  ellipse(50,50,20);
  ellipse(550,50,20);
  ellipse(50,350,20);
  ellipse(550,350,20);
  }

//Funciones

function tablero(){
  //Tablero de control. Se define la formula de movimiento y se crean las figuras geometricas.
   var p = desplazamiento + cos(angulo) * escalar;
   var q = desplazamiento + sin(angulo) * escalar;
  
  fill(255);
  line(240,50,370,50);
  line(230,40,230,60);
  line(380,40,380,60);
  noStroke();
  translate(220,0)
  ellipse(p,q,10);
  stroke(252,54,b);
  line(p,p,p,70);
  translate(20,-15)
  line(p,p,p,80);
  translate(20,-15)
  line(p,q,p,100);
  angulo += velocidad;

}
 
  

//Función que actua como radar onclick
function radar (){
  noFill();
  strokeWeight(3);
  stroke(r,g,b);
  circle (mouseX,mouseY,d);
 if(mouseIsPressed){
   d+=50;
 }else{
   d=0;
}}



function turbo (){
  
fill(255);
  ellipse(width/2,height/2,600,20);
  ellipse(width/2,height/2,500,50);
  ellipse(width/2,height/2,400,80);
  ellipse(width/2,height/2,300,90);
  ellipse(width/2,height/2,200,100);
  
  col=50;
 fill(r*0.9,g*0.5,b,col/2);
  rect(width/2-100,height-100,width/2-100, 50);
  textSize(15);
     fill(255,col);
     text('TURBO',width/2-30,width/2+30);
  circcentro=0;
  velocidad=0.03;
}



//Funcion boton turbo
function cargador(){
//boton sin uso
  fill(r*0.9,g*0.5,b,col/2);
  rect(width/2-100,height-100,width/2-100, 50);
  textSize(15);
     fill(255,col);
     text('TURBO',width/2-30,width/2+30);
//boton cargado
  if(col>600){
    fill(252,54,b,col*3);
    rect(width/2-100,height-100,width/2-100, 50);
    fill(251,255,16);
    textSize(20);
     text('TURBO',width/2-37,width/2+30);
  }
  // console.log(mouseY);
  if(col>600&&mouseIsPressed&&mouseX>200&&mouseX<400&&mouseY>300&&mouseY<350){
    turbo();
  }
  

}

//Función para definir y ubicar las figuras
function figuras(x,y,d){
  noStroke();
  fill(r,g,b,col)
  ellipse(x+100,y+140,d+10);
  ellipse(x+300,y+100,d/4);
  ellipse(x+1,y+1,d+1);
  ellipse(x+1,y+100,d/8);
  ellipse(x+200,y+300,d/5);
  ellipse(x+500,y+50,d/4);
  ellipse(x+400,y+200,d/8);
  ellipse(x+550,y+300,d/4);
 
}

//Función con las estructuras condicionales para la interactividad y modificación de las figuras

function condiciones(){
 figuras(circX,circY,circcentro);
 

    
//1er Cuadrante
  if(mouseIsPressed&&mouseX>40&&mouseX<60&&mouseY>40&&mouseY<60){
  circX++;
  circY++;}

 //2do Cuadrante        
   if(mouseIsPressed&&mouseX>40&&mouseX<60&&mouseY>340&&mouseY<360){
  circX++;
  circY--;
  }       
 //3er Cuadrante 
  if(mouseIsPressed&&mouseX>540&&mouseX<560&&mouseY>40&&mouseY<60){
    circX--;
    circY++;
    } 
//4to Cuadrante 
  if(mouseIsPressed&&mouseX>540&&mouseX<560&&mouseY>340&&mouseY<360){
   circX--;
   circY--;
  }
if (mouseIsPressed&&mouseX>290&&mouseX<310&&mouseY>190&&mouseY<210){
    circcentro++;
    col++;
    
    }
   if(circcentro>500){
    velocidad = 0.08;
    textSize(22);
     fill(255);
     text('Alerta de proximidad   ||    Altere su curso',74,206);
     if(circcentro>600||circX>width||circY>height){
       velocidad=0.03;
       circcentro=0;
       textSize(0);
       figuras();
       
     }
  }
}


 

