// SE MUESTRAN LAS POSIBLES RESPUESTAS_________________________

let intercambioActivo = false;

let respuesta1 = false;
let respuesta2 = false;
let respuesta3 = false;

function intercambio () {
  
  
    push ();
    textSize (25);
    text("La Diosa me había enviado en una misión, pero yo me debatía entre varios pensamientos...", 150, 150, 400, 300);  
  text("Debes elegir alguna de las tres respuestas", 150, 900, 400, 300); 
  pop ();
  push ();
  textSize (20)
    text("Con gusto aceptaré el llamado del Futuro y dedicaré mi vida a su Anástrofe", 50, 500, 200, 300);  
    text("No pondré a la Humanidad en el camino a su perdición", 260, 500, 200, 300);  
    text("Esto sólo es un sueño, una pesadilla de la que pronto despertaré", 470, 500, 200, 300);  
     pop ();
  
  
  if (mouseX >= 50 && mouseX < 250 && mouseY <=800 && mouseY >= 500) {
    
    push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2);
    
    rect (50, 480, 200, 140, 5);
    pop ();
    
  } else if (mouseX >= 260 && mouseX < 470 && mouseY <=800 && mouseY >= 500) {
    
  push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2)   
    rect (260, 480, 200, 140, 5);
  pop ();
    
  } else if (mouseX >= 470 && mouseX < 730 && mouseY <=800 && mouseY >= 500) {
    
  push();
    fill (255, 5);
    stroke (255)
    strokeWeight (2)   
    rect (470, 480, 200, 140, 5);
  pop ();
    
  }
  
  
  
}

//SELECCION DE LAS POSIBLES RESPUESTAS______________________________

function mousePressed () {

if (mouseX >= 50 && mouseX < 250 && mouseY <=800 && mouseY >= 500 && intercambioActivo === true) {
      opacidadBorrador = 255;
      respuesta1 = true;

    pasarPaginas ++

  intercambioActivo = false;
  audioParte3.setVolume(0, 7);  
  setTimeout( () => audioParte3.stop(), 40000)
   
  frase.setVolume (0);
  frase.loop ();
  frase.setVolume (0.3, 15);
  
  angel.play ();
  
     
    
    
  } else if (mouseX >= 260 && mouseX < 470 && mouseY <=800 && mouseY >= 500 && intercambioActivo === true ) {
    
    

        opacidadBorrador = 255;

    pasarPaginas ++
    
   intercambioActivo = false;
          
    setTimeout (() => respuesta2 = true, 10000)
    audioParte3.setVolume(0, 7);   
    setTimeout (() =>   audioParte2.play(), 10000)
    setTimeout( () => audioParte3.stop(), 40000)




    
  } else if (mouseX >= 470 && mouseX < 730 && mouseY <=800 && mouseY >= 500  && intercambioActivo === true) {
       
        opacidadBorrador = 255;
          respuesta3 = true;
    pasarPaginas ++

    intercambioActivo = false;

         
    audioParte3.setVolume(0, 40);   
    misiles.play();
    misiles.setVolume(0, 40);   



    
    
  }
  
}