//am
//amparo perez
//2021



var radioMayor = 0;
var x = radioMayor;
var velocidad = 1;
var y=10;
var velocidadX = 2; // velocidad de mov. en eje X
var velocidadY = 4; // velocidad de mov. en eje Y
var direccionX = 1; // dirección de mov. en eje X
var direccionY = 1; // dirección de mov. en eje Y
var temp = 0; 

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  frameRate(20);
}

function draw() {
     temp ++;
  if (temp == 180) {
    temp=0;
    background(0);
  }
  
  // cambio direcciónX
  x += velocidadX * direccionX;
  if ((x > width - radioMayor) ||(x < radioMayor)) {
    direccionX = -direccionX;
  }
  // cambio direcciónY
  y += velocidadY * direccionY;
  
  if ((y > height - radioMayor) ||(y < radioMayor)) {
    direccionY = -direccionY;
  }
  
  x += velocidad;
  if (x > width + radioMayor) {
    x = -radioMayor; // Mueve la figura al borde izquierdo
  }

  noStroke();
  fill(100);
  textAlign (CENTER);
  stroke(150);
  textSize (10);
  translate(x, y);
  rotate(radians(x));
  
text("functionsetupcreateCanvas512512background0functiondrawtextstroke30forvari60i300i10linei7i,500;forvarv60;v300;v10linei,7,i,500quad80,207,i,193,169,i,90,273fill30stroke200translate7,9;quad80,207,120i,169,263,90,273",x,300);
  

  /*push();
 for (var i = 60; i < 300; i += 10) {
    line(i, 7, i, 500);}
   for (var v = 60; v < 300; v += 10) {
    line(i, 7, i, 500);
    quad(80,207,i,193,169,i,90,273);
   fill(30);
   stroke(200);
   translate(7,9);
   quad(80,207,120,i,169,263,90,273);
  }
  pop();*/
}