//Aquí tenemos un simulador de un monitor de frecuencia  cardiaca. Te invito a intervenir en el. 
//Presionado click derecho podras dibujar de color negro y con el click izquierdo con blanco. La idea es terminarlo. Darle continuación.




var anchoPincel = 3;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(25);
}

function draw() {
  strokeCap(ROUND);
  stroke(125);

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      stroke(255); // cambia de color cuando se presiona el botón izquierdo del mouse//
    } else if (mouseButton == RIGHT) {
      stroke(0); //cambia de color cuando se presiona el botón derecho del mouse//
    }

    strokeWeight(anchoPincel);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  // lineas verticales
  strokeWeight(1);

  line(18, 2, 18, 512);
  line(36, 2, 36, 512);
  line(54, 2, 54, 512);
  line(72, 2, 72, 512);
  line(90, 2, 90, 512);
  line(108, 2, 108, 512);
  line(126, 2, 126, 512);
  line(144, 2, 144, 512);
  line(162, 2, 162, 512);
  line(180, 2, 180, 512);
  line(198, 2, 198, 512);
  line(216, 2, 216, 512);
  line(234, 2, 234, 512);
  line(252, 2, 252, 512);
  line(270, 2, 270, 512);
  line(288, 2, 288, 512);
  line(306, 2, 306, 512);
  line(324, 2, 324, 512);
  line(342, 2, 342, 512);
  line(360, 2, 360, 512);
  line(378, 2, 378, 512);
  line(396, 2, 396, 512);
  line(414, 2, 414, 512);
  line(432, 2, 432, 512);
  line(450, 2, 450, 512);
  line(468, 2, 468, 512);
  line(486, 2, 486, 512);
  line(504, 2, 504, 512);

  //lineas horizontales
  line(512, 18, 2, 18);
  line(512, 36, 2, 36);
  line(512, 54, 2, 54);
  line(512, 72, 2, 72);
  line(512, 90, 2, 90);
  line(512, 108, 2, 108);
  line(512, 126, 2, 126);
  line(512, 144, 2, 144);
  line(512, 162, 2, 162);
  line(512, 180, 2, 180);
  line(512, 198, 2, 198);
  line(512, 216, 2, 216);
  line(512, 234, 2, 234);
  line(512, 252, 2, 252);
  line(512, 270, 2, 270);
  line(512, 288, 2, 288);
  line(512, 306, 2, 306);
  line(512, 324, 2, 324);
  line(512, 342, 2, 342);
  line(512, 360, 2, 360);
  line(512, 378, 2, 378);
  line(512, 396, 2, 396);
  line(512, 414, 2, 414);
  line(512, 432, 2, 432);
  line(512, 450, 2, 450);
  line(512, 468, 2, 468);
  line(512, 486, 2, 486);
  line(512, 504, 2, 504);

  strokeWeight(3);
  stroke(255);

  line(0, 263, 110, 262);
  line(120, 111, 110, 262);
  line(120, 111, 130, 312);
  line(130, 312, 140, 263);
  line(140, 263, 180, 263);
}
document.oncontextmenu = function () {
  return false;
};
