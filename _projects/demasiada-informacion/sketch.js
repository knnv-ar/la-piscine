//UNA - Artes Multimediales 1 (Cát. Lacabanne - TN)
//Trabajo Práctico Nro. 1 (IO 2)
//Título: “Demasiada Información.”
//2021
//Autora: Sofía Diaz
//Para interactuar con el mouse

var a = 1;
var y = 256;
var agite = 100;
var velocidad = 0.5;
var x=256;

function setup() {
   let canvas = createCanvas(512, 512);
   canvas.parent('div-sketch');
}
function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  line(0,150,x,150);
  line(0,455,x,455);
  line(0,256,x,256);
  line(0,100,x,100);
  line(0,10,x,10);
  line(0,320,x,320);
  line(0,410,x,410);
  line(0,25,x,25);
  line(0,500,x,500);
  line(0,10,x,10);
  line(0,310,x,310);
  line(0,156,x,156);
  line(0,150,x*2,150);
  line(0,455,x*2,455);
  line(0,25,x*2,25);
  line(0,500,x*2,500);
  line(0,10,x*2,10);
  line(0,310,x*2,310);
  line(0,156,x*2,156);
  line(0,256,x*2,256);
  line(0,100,x*2,100);
  line(0,10,x*2,10);
  line(0,320,x*2,320);
  line(0,410,x*2,410);

  
  if (mouseIsPressed){
  stroke(0);
  strokeWeight(2);
  line(0,150,512,150);
  line(0,455,512,455);
  line(0,256,512,256);
  line(0,100,512,100);
  line(0,10,512,10);
  line(0,320,512,320);
  line(0,410,512,410);
  line(0,25,512,25);
  line(0,500,512,500);
  line(0,10,512,10);
  line(0,310,512,310);
  line(0,156,512,156);
     var y1 = y + sin(a) * agite;
     var y2 = y + sin(a + 1) * agite;
     var y3 = y + sin(a + 0.5) * agite;
  stroke(255);
  strokeWeight(2);
  line(0,150,x,y3);
  line(0,455,x,y1);
  line(0,256,x,y2);
  line(0,100,x,y3);
  line(0,10,x,y2);
  line(0,320,x,y3);
  line(0,410,x,y2);
  line(0,25,x,y3);
  line(0,500,x,y2);
  line(0,10,x,y3);
  line(0,310,x,y2);
  line(0,156,x,y3);
  
  line(x*2,150,x,y3);
  line(x*2,455,x,y1);
  line(x*2,256,x,y2);
  line(x*2,100,x,y3);
  line(x*2,10,x,y2);
  line(x*2,320,x,y3);
  line(x*2,410,x,y2);
  line(x*2,25,x,y3);
  line(x*2,500,x,y2);
  line(x*2,10,x,y3);
  line(x*2,310,x,y2);
  line(x*2,156,x,y3);
  a += velocidad;

   }
}