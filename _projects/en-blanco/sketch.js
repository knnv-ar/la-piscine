/* ******************** "EN BLANCO" ********************

ÚNICA INTERACCIÓN: Click izquierdo y derecho

------------- */

let fondo = 200; // establezco color del fondo
let angulo = 0; //establezco el angulo que luego va a rotar
let tamanioLienzo = 512; // tamaño del lienzo


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  
  background(fondo, 20);
  
  //PARPADEO
  
   fondo = (random(0, 100), random(0, 150), random(0, 100));

  //INTERACCIÓN DEL MOUSE

  
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255);
    } else if (mouseButton == RIGHT) {
      stroke(fondo);
    } 
    
    else {
      stroke(0);
    }
  }

// LINEA QUE SIGUE AL CURSOR  
  
push();
  
  let lineas = 2;
  let largoFigura = 512; // largo del circulo
  let espacioLinea = TWO_PI / lineas; // espacio e. cda linea. TWO_PI rep. un circulo entero, que son 360°

  translate(mouseX-30, mouseY-30); // mueve la figura al cursor
  rotate(angulo); // inicio de rotacion

  for (let i = 0; i < lineas; i++) {
    // el coseno da la coordenada X de un circulo
    let x = cos(i * espacioLinea) * largoFigura; 
    // el seno da la coordenada Y
    let y = sin(i * espacioLinea) * largoFigura; 

    line(0, 0, x, y);
    
  }
    angulo += 0.09; // incrementa el angulo -> rota
  
pop();
  
  
 // LÍNEAS DEL FONDO
  
 for (let i = 0; i < 512; i +=2) {
    stroke(0);
    line(i, 0, i, height);
   }
  

  /* Controles q||w

  if (keyIsPressed) {
    if (key == "q" || key == "Q") {
      background(100, 20); //fondo torna gris
    }
    if (key == "w" || key == "W") {
      background(255, 20); //fondo torna blanco
    }
  }
  */
}

// para que el click derecho no moleste
document.oncontextmenu = function () {
  return false;
};



