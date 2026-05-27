var a = 0.0;     // Angulo
var desp = 256;  // Desplazamiento
var esc = 80;    // Escala
var vel = 0.8;   // Velocidad

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
   background(128);
}


function draw() {
  
  if(mouseIsPressed) {
         if(mouseButton==LEFT) { //lineas blancas
    
                        var x = desp + cos(a) * esc;
                        var y = desp + sin(a) * esc;
                        stroke(256);
                        line(x, y, 256, 256);
                        a += vel;
                        esc += vel;
                                    }

        else if (mouseButton==RIGHT){ // Lineas negras
                      
                       var x = desp - cos(a) * esc;
                       var y = desp + sin(a) * esc;
                       stroke(0)
                       line(x, y, 256, 256);
                       a += vel;
                       esc += vel;
                                   }


                    }


document.oncontextmenu = function() {
  return false;}
}