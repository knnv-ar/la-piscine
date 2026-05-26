/*
TP 1 Artes Multimediales 1
Catedra Lacabanne
Almuno: Troncozo Jeronimo


*/
  //variables linea de dibujo
  var tam= 150; // largo de linea
  var a=0;// punto 1 de linea
  var b=0;// punto 2 de linea
  var c=a;// punto 3 de linea
  var d=0; // punto 4 de linea

  //variables de movimiento
  var vel=0; // Velocidad vertical
  var pdii=500; //Punto de Inicio
  var pend=180; //rotacion linea 
  var velpen=0; //velocidad oscilacion pendulo
  var direcpen=-1//Direccion de Oscilacion
  var limpender=0 //limite de pendulo derecha
  var limpeniz=0 // limite de pendulo inquierda
  var contador=1 // contador de tiempo
  var ciclo=0 // variante de conexion
  var angulo = 0.0;// variable angulo color
  
   
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0)
}

function draw() { 
 
  if     (pend%180==0){ciclo+=1} //ciclo
//  if     (ciclo>5){ciclo=1} // repeticion de ciclo
   if (mouseIsPressed){ciclo+=1}
     
      if     (ciclo>5){ciclo=1} // repeticion de ciclo
    switch(ciclo){
    case 1:tam=50;
           velpen=1; 
           vel=0.2;
      
           break;             
    case 2:tam=210;
           velpen=0.5; 
           vel=0.1;
           
           break;
    case 3:tam=300;
           vel=0.5;
           velpen= 1; 
      
           break;
     case 4:tam=130;
           vel=0.01;
           velpen= 0.5; 
      
           break;
    case 5:tam=50;
           vel=0.1;
           velpen= 3; 
           
           break;
    default:tam=300;}
   
   if (pdii<=-120){velpen=0; vel=0; tam= 0}
   pend-=velpen; // rotacion de pendulo
   pdii-=vel;    // variable movimiento hacia arriba
   d=b+tam ;     //valor lardo de linea
   // if (pdii<=0){vel=0}
    
  push(); //Inicio linea de dibujo
  
     var valorSeno = sin(angulo);
     var grises = map(valorSeno, -1, 1, 0, 255);

  
    translate(width/2,pdii);
    rotate(radians(pend))
    stroke(grises);
    line(a,b,c,d)
  
   angulo += 0.1
   
  pop();// fin linea de dibujo 
  
}

