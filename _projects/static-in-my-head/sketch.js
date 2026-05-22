/*
  
  "Static In My Head"
   Lorena Garzon
   2020
   Artes Multtimediales 1 - UNA
   
   Para su carga, usé un local server que es una extensión de     chrome
  
  
*/
 

/*Aclaro variables de imagenes, tenia otra cosa en la cabeza y en el proceso encontré representar con menos imagenes

static*/


let y = 0;

var img1,img2, img3;

var Ancho, Alto;



function preload() {
  img = loadImage("imge/cero.jpg");
  img1 = loadImage("imge/uno.png");
  img2 = loadImage("imge/dos.png");
  img3 = loadImage("imge/tres.png");
  
  
  

} 

 function setup() {
  
   
   img = loadImage("imge/cero.jpg");
   let canvas = createCanvas(600, 600, WEBGL);
   canvas.parent('div-sketch');
 
   
   
  camera(300, 100, 100, 100, 10,10, 10, 1, 0);
  normalMaterial();
  debugMode();
   
  Ancho = width / 2;
  Alto = height / 2;
   
  mic = new p5.AudioIn();
  mic.start();
   }

   function draw(){  
     
  background(0);
     
      

  stroke(random(200),random(150),random(255));
  line(0, y, width, y);
  

  y++;
  if (y > height) {
    y = 0;
  }
  //use debugMode() que encontré en la pagina, tambipen jugué con otros modos pero este fue el que me gustó más para mi trabajo
     
      orbitControl();
  box(15, 30);
  // Press the spacebar to turn debugMode off!
  if (keyIsDown(10)) {
    noDebugMode();
  }
    
     //cON LAS FLECHAS PUEDES MOVER EL OTRO PLANETA/ESFERA
     
     if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
     Alto-=15;
    } 
    if (keyCode == DOWN_ARROW) {
     Alto+=15;
    }
    if (keyCode == LEFT_ARROW) {
     Ancho-=15;
    }
    if (keyCode == RIGHT_ARROW) {
     Ancho+=15;
    }
  }  
     
   push();   
    /* rectangulo */ 
     
   rect(-120,-200,250,300);
   stroke(random(200),random(150),random(255));
   rect(-130,-205,270,300);
     
  //esfera
  translate(0, -100, 0);
  texture(img3);  /*esfera espacial */
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(45); //Parámetros: radio
       

     
  pop();
     
   push();
  translate(150,Alto, Ancho);
  texture(img1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
 /*image(img1, -38, 60,80, 80); */
  sphere(60) 
     
  pop(); 
   
  image(img,-120,-200,250,300); /* backgraund     rectangulo */
  image(img2, -50, -50, 150, 150 ); /*Astronauta*/
       
  fill(0);
  push();
     
 //let para que interactividad CON VOZ, CON EL MOUSE PUEDES MOVER LA ORBITA, ENCONTRAR AL ASTRONAUTA POR EJEMPLO Y VER DONDE SE ENCUENTRA TU VOZ.
     
     let volumen = mic.getLevel();
  let radio = map(volumen, 0, 0.1, 200, 1000);

  strokeWeight(4+(mouseY/height*2));
    
  stroke("#ffffff");
  ellipse(width/1,height/1,radio,radio);
  stroke("#ffffff");
  ellipse(width/2,height/2,radio,radio);
  stroke("#ffffff");
  ellipse(width/3,height/3,radio,radio);
  stroke("#ffffff");
  ellipse(width/4,height/4,radio,radio);
  stroke("#ffffff");
  ellipse(width/5,height/5,radio,radio);
     
     pop();
     
   
     
     
 /* Con estos valores lo hice en un principio pero luego encontre la manera de hacer lo que quería
  let volumen = mic.getLevel();
     
  let radio = map(volumen, 0, 1, 15, 100);
     print(volumen);
   
    

 strokeWeight(50+(mouseY/height*100));
 stroke(255);
 
 ellipse(5 + width/50,height/-50,radio,radio);
 stroke(255);
 ellipse(width/50,height/4.5,radio,radio);    
 stroke(255);
 ellipse(width/300,height/6,radio,radio);
 ellipse(width/100,height/3,radio,radio);
 ellipse(width/200,height/2,radio,radio);
 ellipse(width/20,height/3.5,radio,radio);
 
 
 
     
     */
     
  
  
     
  
   
    
  document.oncontextmenu = function() {
  return false;}
  
  
  }

   
 
