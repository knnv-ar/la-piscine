let opacidadBorrador = 255;
let opacidadBorradorChico = 255;



function borrador () { 
  
                          push();
                              fill(0, opacidadBorrador);
                              strokeWeight (0);
                              rectMode(CENTER); 
                              rect (350, 600, 2000, 2000);
                            pop ();
  
     
           if (opacidadBorrador > 0) {

        opacidadBorrador -= 2;} 
      
     
}

function borradorChico () { 
                          push();
                              fill(0, opacidadBorradorChico);
                              strokeWeight (0);
                              rectMode(CENTER); 
                              rect (350, 1080, 600, 70);
                            pop ();
  
     
           if (opacidadBorradorChico > 0) {

        opacidadBorradorChico -= 2;} 
  
    
  
  
  
}