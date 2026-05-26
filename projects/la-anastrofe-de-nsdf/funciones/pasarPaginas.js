//__________________-PASAR PAGINAS Y AUDIO_____________________________




function keyPressed () {
   
  if (key === 'a' && pasarPaginas<10) {
    
    
      pasarPaginas++; 
    
          if (pasarPaginas === 1) {audioParte1.play ()}
          if (pasarPaginas===10) {
            
            audioParte1.setVolume(0, 5)
            audioParte3.setVolume(1, 10)
            audioParte3.play();
            setTimeout( () => audioParte1.stop(), 40000)
            presentacionNSDF ();
          }   

  } else if (key === 'a' && pasarPaginas>9 && pasarPaginas < 14)  {
    
    fill (0, 0, 0, 255);
    rect (0, 0, 900, 80); 
    
          
  
  } 
   
  
}

let timer1 = null;


function presentacionNSDF () {
    if (timer1 === null) { 
        
        timer1 = setInterval( () => {
            
            pasarPaginas++;
            if (pasarPaginas == 11) {opacidadBorrador = 255}
          
            if (pasarPaginas == 13) {opacidadBorradorChico = 255}


            if (pasarPaginas >= 14) {
              
    
            if (pasarPaginas == 14) {opacidadBorrador = 255}

                clearInterval(timer1); 
                
                timer1 = null;         
             
               

            }

        }, 10000); 
    }
}

let movimientoImagen = 0;



function pasajeGaleria () {
  
  if (pasarPaginas >= 1 && pasarPaginas < 14) {   movimientoImagen = random (1, 5);} else {movimientoImagen = 0} 
  
  
    push ();
    imageMode (CENTER);
    
          if (pasarPaginas <9) {tint (255, galeria[pasarPaginas].opacidad)
          } else { opacidad+=2;   tint (255, opacidad)}
    
    scale (galeria[pasarPaginas].escala);
    image(galeria[pasarPaginas].imagen, galeria[pasarPaginas].posicionXimagen-movimientoImagen,             galeria[pasarPaginas].posicionYimagen-movimientoImagen);
    
            if (pasarPaginas > 10) {

            movimientoXSolar = 1360;
            movimientoYSolar = 380;


            push();
            scale(0.40);
            image(comunismosolar, movimientoXSolar-movimientoImagen, movimientoYSolar-movimientoImagen);
            pop();


            }
    pop();
    textFont (fuente4);
    textSize (galeria[pasarPaginas].tamanoTexto);
    text(galeria[pasarPaginas].texto, galeria[pasarPaginas].posicionXtexto,                   galeria[pasarPaginas].posicionYtexto, galeria[pasarPaginas].anchoTexto);
    push();
    textSize (30);
    text(galeria[pasarPaginas].tecla, 200, 1000, 300, 300);
    pop(); 
  

  
  
}
