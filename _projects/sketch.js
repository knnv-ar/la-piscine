function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  // botón del mouse se mantiene apretado
  if (mouseIsPressed) {
    background(0); // Fondo negro
    stroke(255);   // Líneas blancas
    
    // Efecto cámara estática movimiento -40 40 
    // Sigue al mouse, pero con la resistencia de una lente girando.
    let moverX = map(mouseX, 0, width, -40, 40);
    let moverY = map(mouseY, 0, height, -40, 40);
    
    // El efecto de vibración lineas
    let vibracionX = random(-3, 3);
    let vibracionY = random(-3, 3);
    
    //  movimiento y vibracion
    translate(moverX + vibracionX, moverY + vibracionY); 
  } else {
   
    background(255); // Fondo blanco
    stroke(0);       // Líneas negras
  }

  // Estructura 1
  line(256, 28, 301, 28);   
  line(301, 28, 301, 417);  
  line(301, 417, 256, 417); 
  line(256, 417, 256, 28);  

  // Estructura 2
  line(241, 50, 346, 50);   
  line(346, 50, 346, 409);  
  line(346, 409, 241, 409); 
  line(241, 409, 241, 50);  

  // Estructura 3
  line(263, 65, 297, 65);   
  line(297, 65, 297, 387);  
  line(297, 387, 263, 387); 
  line(263, 387, 263, 65);  

  // Estructura 4
  line(218, 128, 338, 128); 
  line(338, 128, 338, 421); 
  line(338, 421, 218, 421); 
  line(218, 421, 218, 128); 

  // Estructura 5
  line(196, 170, 323, 170); 
  line(323, 170, 323, 380); 
  line(323, 380, 196, 380); 
  line(196, 380, 196, 170); 

  // Estructura 6
  line(226, 188, 308, 188); 
  line(308, 188, 308, 346); 
  line(308, 346, 226, 346); 
  line(226, 346, 226, 188); 

  // Estructura 7
  line(211, 248, 346, 248); 
  line(346, 248, 346, 428); 
  line(346, 428, 211, 428); 
  line(211, 428, 211, 248); 
  
  // Estructura 8
  line(237, 301, 334, 301); 
  line(334, 301, 334, 451); 
  line(334, 451, 237, 451); 
  line(237, 451, 237, 301); 

  // Estructura 9
  line(252, 361, 312, 361); 
  line(312, 361, 312, 458); 
  line(312, 458, 252, 458); 
  line(252, 458, 252, 361); 

  // Estructura 10
  line(218, 98, 278, 98);   
  line(278, 98, 278, 361);  
  line(278, 361, 218, 361); 
  line(218, 361, 218, 98);  

  // líneas sueltas
  line(278, 76, 278, 376);  
  line(181, 218, 271, 218); 
  line(263, 391, 316, 391); 
  line(226, 368, 346, 368); 
  line(203, 151, 203, 331); 
  line(248, 38, 248, 436);  
  line(286, 53, 286, 368);  
  line(304, 83, 304, 353);  
  line(188, 278, 301, 278); 
  line(241, 338, 338, 338); 
  line(211, 383, 278, 383); 
}