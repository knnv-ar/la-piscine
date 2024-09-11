/////////////////////////////////////////////////////////////////////////////////////////////////
/*      

TECLAS:         -TECLA W CAMBIAS EL VALOR DE X
                -TECLA A CAMBIAS EL VALOR DE Y
                -TECLA S CAMBIAS EL VALOR DE X2
                -TECLA D CAMBIAS EL VALOR DE Y2
                -TECLA R/r SE RESETEA LA FIGURA A SUS VALORES ORIGINALES
                -TECLA B/b SE CAMBIA EL COLOR DE FONDO A BLANCO Y EL TRAZO A NEGRO
                -TECLA N/n SE CAMBIA EL COLOR DE FONDO A NEGRO Y EL TRAZO A BLANCO
                
*/

///////////////////////////////////////VARIABLES/////////////////////////////////////////////////

let velocidad = 0;
let tamanioFigura = 200;
let division1 = 1;
let division2 = 1;
let division3 = 1;
let division4 = 1;
let colorDeFondo = 0;
let colorDelTrazo = 255; 

/////////////////////////////////////// SETUP ///////////////////////////////////////////////////

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  strokeWeight(5);
  background(colorDeFondo);
}

/////////////////////////////////////// DRAW ////////////////////////////////////////////////////

function draw() {
  
  //COLOR DE FONDO Y LA OPACIDAD PARA QUE DEJE UN RASTRO.
  background(colorDeFondo,20); 
  
  //TRASLADO LA FIGURA AL CENTRO DEL CANVAS
  translate(width / 2, height / 2);

  //UBICACION DEL PUNTO X
  let x = tamanioFigura * sin(velocidad / division1) * sin(velocidad / 2);
  
  //UBICACION DEL PUNTO Y
  let y = tamanioFigura * cos(velocidad / division2);
  
  //UBICACION DEL PUNTO X2
  let x2 = tamanioFigura * cos(velocidad / division3) * sin(velocidad) * 0.6;
  
  //UBICACION DEL PUNTO Y2
  let y2 = tamanioFigura * sin(velocidad / division4) * 0.6;

  //COLOR DE LA LINEA Y SU OPACIDAD
  stroke(colorDelTrazo, 200); 

  //LA LINEA
  line(x, y, x2, y2);
  
  //PARA INCREMENTAR LA VELOCIDAD DE LA ANIMACION
  velocidad += 0.07; 
}

/////////////////////////////////////// KEY PRESSED /////////////////////////////////////////////

function keyPressed() {
  if (key === 'W'|| key === 'w') {
    division1 += 1; 
  } else if (key === 'A'|| key === 'a' ) {
    division2 += 1; 
  } else if (key === 'S'|| key === 's'  ) {
    division3 += 1; 
  } else if (key === 'D' || key === 'd' ) {
    division4 += 1;  
  } else if (key === 'r' || key === 'R') {
    division1 = 1;
    division2 = 1;
    division3 = 1;
    division4 = 1;
  } else if (key === 'b' || key === 'B') {
    colorDeFondo = 255; // Blanco
    colorDelTrazo = 0; // Negro
  } else if (key === 'n' || key === 'N') {
    colorDeFondo = 0;
    colorDelTrazo = 255;
  }
}