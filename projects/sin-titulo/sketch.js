var mira = 1
var velocidad = 0
var ruta1 = 0.5
var ruta2 = 5
  

function setup() {
let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');   
}



function draw() {
  background(220, 30);
 
 
  push ()
  strokeWeight (random (ruta1, ruta2))
    for (var e = 20; e < 120; e += 30) {
        push()
  fill (220)
  noStroke ()
  rect (random (0, 512), random (0, 512), 120, 40)
               push()    
  fill (230)
  rect (random (0, 512), random (0, 512), 120, 40)
                pop()
        pop()
  pop()

//FORMAS
 
  
    for (var e = 20; e < 120; e += 30) {
   push ()
      
    translate (-10, 10)
          push ()
      
          noFill ()
          triangle (450, 50, random (410, 510), random (10, 80), random (410, 510), random           (10, 80)) 
          quad (random (450, 510), random (400, 490), random (490, 300), 500,  510, 510,             510, random (510, 389))

          pop ()
      
      fill (random (256))
      rect (20, 490-e, random (350, 20), 20)
      rect (20+e, 20, 10, random (20, 300))
     
     pop ()
          }   
  
//MIRA
  
  push();
      
  strokeWeight (mira)
 translate (mouseX-250, mouseY-250)
  line (1000, 256, -1000, 256)
  line (256, 1000, 256, -1000)
  noFill ()
  rectMode (CENTER)
  rect (256, 256, 70, 40)
  rect (256, 256, 40, 100)
  ellipse (256, 256, 30, 30)
  ellipse (256, 256, 120, 120)
  
  pop();
   
//IDENTIFICACION/IDENTIFICACION/IDENTIFICACION/IDENTIFICACION/IDENTIFICACION/IDENTIFICACION
  
  noFill ()
  rectMode (CENTER)
  
//INICIO DEL PRIMER IF Y PRIMER FOR

  if (mouseIsPressed) { if (mouseButton == LEFT) {
      stroke(0, 0, 0, 230);
    for (var i = 20; i < 50; i += 20) {
      push();
      frameRate (10)
      strokeWeight (1)
      mira = 1
      ruta1 = 0.5
      ruta2 = 5
  
//CUADROS DE INFO

push ();
fill (256)
rect (mouseX+170+random (30), mouseY+60+random (30), 30+random (10), 120+random (40))
rect (mouseX+50+random (30), mouseY+80+random (30), 30+random (10), 60+random (40))
rect (mouseX+110+random (30), mouseY+120+random (30), 10+random (10), 90+random (40))

      
rect (mouseX-170-random (30), mouseY-60-random (30), 30-random (10), 120-random (40))
rect (mouseX-50-random (30), mouseY-80-random (30), 30-random (10), 60-random (40))   
rect (mouseX-110-random (30), mouseY-120-random (30), 10+random (10), 90+random (40))

pop ();

      
//TEXTO ASEMICO
      
      
      //ACA HAY UN PEQUENIO FOR
push ()
      for (var i = 70; i < 140; i += 10) {
  strokeWeight (2+random (0, 4))
  fill (0, 24)
 line (mouseX-150, i+mouseY, mouseX-random (20, 80), i+mouseY);
  line (mouseX+150, mouseY-i, mouseX+random (60, 80), mouseY-i);  
        
   point (i+mouseX, mouseY+25)     
    point (mouseX-i+random (5, 100), mouseY-220)     

      }
  pop()

//FIN DEL PEQUENIO FOR


//CUADRADOS Y LINEAS 

 rect(pmouseX, pmouseY, random (100), random (80));
    
line (mouseX, mouseY, mouseX+random (200), mouseY+random (100))
      
line (mouseX, mouseY, mouseX+random (-200), mouseY+random (-100))
  
      
} 
            //FIN DEL PRIMER FOR

}
            //FIN DEL PRIMER IF
                       
//VOLVER A LA VELOCIDAD INICIAL       
                       
    else if (mouseButton == RIGHT) {
            
      frameRate (90) }     }
  
  
  //Para que no aparezca el menu
  
  document.oncontextmenu = function() {
  return false;}
    }}