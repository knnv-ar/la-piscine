/*"FUNCIONARTE" 
  2020
  BORIOLO AGUSTINA*/

//imagenes
let img1;
let img2;
let img3;

function preload() 
{img1 = loadImage('imagenes/interchange.webp');
 img2 = loadImage('imagenes/nafeafaaipoipo.webp');
 img3 = loadImage('imagenes/losjugadoresdecartas.webp');}

//lienzo
function setup() 
{
  let canvas = createCanvas(700, 600);
  canvas.parent('div-sketch');
}

//fondo
function draw()
{background(255);
 
//pantalla
strokeWeight(20);
noFill();
rect(130,160,450,300);
strokeWeight(15);
fill(0)
rect(330,470,30,100); 
 
//img1 
if (keyCode === LEFT_ARROW) {image(img1, 140, 170, 200, 280);
//textos img1
let obra1 = 'INTERCHANGE';
textSize(30);
fill(255,0,0);
text(obra1,346,210);
 
let signo = '$$$';
textSize(80);
fill(0,150,0);
text(signo,385,320);
 
let precio1 = '300.000.000 US$';
textSize(20);
fill(0);
text(precio1,375,390);  

let nombre1 = 'WILLEM DE KOONING';
textSize(14);
fill(255,0,0);
text(nombre1,380,440);}

//img2
if (keyCode === UP_ARROW) {image(img2, 140, 170, 200, 280);
 
//textos img2
let obra2 = 'NAFEA FAA IPOIPO';
textSize(25);
fill(255,0,0);
text(obra2,342,210);
 
let signo = '$$$';
textSize(80);
fill(0,150,0);
text(signo,385,320);
 
let precio2 = '300.000.000 US$';
textSize(20);
fill(0);
text(precio2,375,390);  

let nombre2 = 'PAUL GAUGIN';
textSize(14);
fill(255,0,0);
text(nombre2,405,440);}                           
                           
//img3 
if (keyCode === RIGHT_ARROW) {image(img3, 140, 170, 200, 280);
                              
//textos img3
let obra3 = 'LOS JUGADORES DE CARTAS';
textSize(15);
fill(255,0,0);
text(obra3,347,210);
                              
let signo = '$$$';
textSize(80);
fill(0,150,0);
text(signo,385,320);
let precio3 = '250.000.000 US$';
textSize(20);
fill(0);
text(precio3,375,390);  

let nombre3 = 'PAUL CÉZANNE';
textSize(14);
fill(255,0,0);
text(nombre3,400,440);}                               
}
