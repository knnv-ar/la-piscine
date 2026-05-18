// PARA VER EL OJO ARRASTRAR EL MOUSE MUY DESPACIO DESDE EL CENTRO HASTA ARRIBA
// SI MANTENEMOS APRETADO EL MOUSE PODEMOS MODIFICAR EL OJO CON DIFERENTES GRISES
// SI MOVEMOS EL MOUSE SIN PRESIONAR POR TODO EL LIENZO SE VA A MOVER NUESTRA FIGURA ESCALANDOSE
let hoja;

function setup() {

 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
  stroke(255);
  hoja = createGraphics(512, 512); // la funcion creategraphis es la que genera el movimiento de la pantalla junto a el for.
  frameRate(80);
}

function draw() {
  background(0);
     // DIBUJO DE LA ELIPSE INICIAL 

  for (x = 0; x < width; x += 30) {
    for (y = 0; y < height; y += 30) {
      ellipse(256, 256, 30, 30);
      fill(0);

      // INTERACCION CON ANGULOS 
      angleMode(DEGREES);
      let a = atan2(mouseY - height, mouseX - width);
     translate(200, 200);
      
      angleMode(RADIANS);
      rotate(a);
      rect(-40, -5, 20, 10);
    }
    
    // DIBUJAR CON EL MOUSE EN ESCALA DE GRISES DENTRO DE LA ELIPSE
    push();
    if (mouseIsPressed === true) {
      hoja.stroke(random(0, 255));
      hoja.strokeWeight(10);
      hoja.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    image(hoja, 0, 0);
    pop();
  }
}

  