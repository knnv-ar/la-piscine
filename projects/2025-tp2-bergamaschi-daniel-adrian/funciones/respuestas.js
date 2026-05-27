 //_______________________________RESPUESTA BUENA______________________________________


function respuestaBuena () {

    //MAQUINA DE ALETEO
    if (aleteoPrueba <= 255 && bandera1 === true) 
      {aleteoPrueba += 20} 
    else if (aleteoPrueba >= 255 && bandera1 === true) 
      {bandera1 = false}
    else if (aleteoPrueba > 0 && bandera1 === false)
      {aleteoPrueba -= 20}
    else if (aleteoPrueba == 0 && bandera1 === false) {bandera1 = true}
   
   
    
    //MAQUINA DE ROTACION
    if (rotacion <= 360 && bandera2 === true) 
      {rotacion += 1} 
    else if (rotacion >= 360 && bandera2 === true) 
      {bandera2 = false}
    else if (rotacion > 0 && bandera2 === false)
      {rotacion -= 1}
    else if (rotacion == 0 && bandera2 === false) {bandera2 = true}
    
   
//_________________________ALA ARRIBA____________________________________________
push();
translate (350, 600);
rotate (radians(220));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop ();    
  
//_________________________ALA ABAJO____________________________________________
    
    push();
translate (350, 600);
rotate (radians(40));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
    
//_________________________ALA DERECHA____________________________________________
    
    push();
translate (350, 600);
rotate (radians(-40));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
    
//_________________________ALA IZQUIERDA____________________________________________
    
     push();
translate (350, 600);
rotate (radians(150));
   rotate (radians (rotacion))    

for (var i = 0; i < 30; i += 1) { 
    
  
  push();
  noFill ();
  stroke (255, 255, 255, 10);
  strokeWeight (random (1, 15));
  bezier(0+i, 0+i, random (420, 150), random (100, 150)+aleteoPrueba, random (300, 400)-aleteoPrueba, random   (20, 100)+aleteoPrueba, random (200, 240)+i+aleteoPrueba, random (400, 450)+i-aleteoPrueba*2);//arriba
  bezier(0+i, 0+i, random (20), random (420, 150), random (20, 100)+aleteoPrueba, random   (300, 400)-aleteoPrueba, random (200, 240)+i-aleteoPrueba, random (400, 450)+i+aleteoPrueba/2);//abajo
  pop();
      
   }
pop (); 
    
  
 //_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)  
    
    
}


//______________________________RESPUESTA MALA 1_________________________________________

function respuestaMala () {
  
   movimientoXNSDF = random (0, 20);  
    movimientoYNSDF = random (-100, 100);  
  
    movimientoXSolar = random (1050, 1120);
    movimientoYSolar = random (30, 70);
  
     background(0, 10);
      frameRate (10);
  
    push();

    scale (random (0.65, 0.67));
    image (NSDF1opaca1,movimientoXNSDF, movimientoYNSDF);

  
    pop ();
  
    push ();
  
    tint (255, 230)
    scale (0.25);
    image (comunismosolar, movimientoXSolar, movimientoYSolar);

  
    pop (); 
    
    //__________________TRAZOS BEZIER ALAS FUERZAS_____________________________
    
    ondaX = random (350, 360);
    ondaY = random (500, 600);
  
    let trazoBezier = random (2, 10);
  

          for (i = 0; i < 1200; i += 20) {

          noFill ();
          stroke (255, 255, 255, 30);
          strokeWeight(trazoBezier);
          bezier (100, 0, ondaX, ondaY, ondaX, ondaY, 0, random (0, 1200)-i);
          bezier (600, 0, ondaX, ondaY, ondaX, ondaY, 700, random (0, 1200)-i);

           }
    
    //__________________TEXTO_____________________________

      
    stroke (255, 255, 255, 255);
    strokeWeight (1);
    textAlign(CENTER)
  
  
    text ("Nuestra Señora del Futuro, la que cabalga sobre los ardientes vientos del Sahel", random (-100,           700), random (1050, 1200), 520, 200);
    
    
    //_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)
  
  
}

let opacidadRespuestaMala2 = 255; 
let opacidadBorrador2 = 0;


//______________________________RESPUESTA MALA 2_________________________________________


function respuestaMala2 () {
  
   
push();  
textSize (22);
text ('Despierta amor, ven a mirar las extrañas luces en el cielo', 150, 200, 400, 300);
pop ();
  
push();
rectMode (CENTER);
fill (0, opacidadBorrador2+=0.3);
strokeWeight (0);
rect (300, 200, 500, 100, )
pop();  
  
tint (255, opacidadRespuestaMala2-=0.3)
scale (0.70)
imageMode (CENTER);
image (luces, 510, 800)
  
  
//_________________REINICIO____________________
    
      setTimeout( () => location.reload(), 40000)
  
  

}

