//GUIA
//Flecha para ariba invierte los colores (obra 1)
//Flecha para abajo vuelve  a su color original (obra 1)
//Flecha para la derecha invierte los colores (obra 2)
//Flecha para la izquierda  vuelve a su color original(obra 2)
//variables extras
let colorline = 60;
let colorline2 = 156;
//variables del movimiento
let radioMayor = 60;
let x = 0; 
let y = 0; 
let destinoX = 0;
let destinoY = 0;
let easing = 0.03; // Números 0.0 a 1.0
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  //diseño
  background(220);
  //obras fusionadas
  //parte 1
  push();
  strokeWeight(24);
  stroke(60);
  line(20, 60, 210, 60);
  line(210, 460, 210, 60);
  line(20, 460, 210, 460);
  //cuadrado2
  line(20, 120, 160, 120);
  line(20, 400, 160, 400);
  line(160, 120, 160, 400);
  //cuadrado raro
  push();
translate(x, y);
rotate(radians(x));
  noFill();
  strokeWeight(2);
  quad(70, 190, 150, 210, 100, 270, 20, 240);
  quad(70, 190, 70, 260, 30, 310, 20, 240);
  quad(30, 310, 70, 260, 140, 280, 110, 330);
  quad(150, 210, 100, 270, 110, 330, 150, 270);
  quad(50, 290, 40, 250, 100, 270, 95, 310);
  quad(100, 270, 40, 250, 70, 220, 120, 240);
  quad(95, 310, 100, 270, 120, 240, 120, 280);
  line(80, 260, 80, 195);
  line(110, 260, 110, 330);
  pop();
  //movimiento 
  if (mouseIsPressed) {
     destinoX = mouseX;  
     destinoY = mouseY;
  }
  x += (destinoX - x) * easing;
  y += (destinoY - y) * easing;
  //parte 2
  push();
  strokeWeight(24);
  stroke(60);
  //dibujo de lineas
  line(290, 460, 290, 60);
  line(480, 60, 290, 60);
  line(480, 60, 480, 460);
  line(480, 460, 4200, 500);
  line(290, 460, 430, 460);
  line(430, 460, 430, 410);
  line(430, 410, 340, 410);
  line(340, 410, 340, 110);
  line(340, 110, 430, 110);
  line(430, 160, 430, 110);
  line(430, 160, 390, 160);
  line(390, 160, 390, 210);
  //cuadrado raro
  push();
  noFill();
  strokeWeight(2);
  quad(370, 230, 430, 230, 450, 280, 360, 280);
  quad(450, 280, 360, 280, 370, 350, 440, 350);
  quad(370, 350, 440, 350, 420, 300, 380, 300);
  quad(420, 300, 380, 300, 380, 250, 420, 250);
  line(370, 230, 380, 250);
  line(430, 230, 420, 250);
  line(370, 230, 375, 300);
  line(375, 300, 370, 350);
  line(430, 230, 430, 300);
  line(430, 300, 440, 350);
  line(375, 300, 430, 300);
  pop();
  //flechas
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      colorline = 156;
      colorline2 = 60;
      background(220);
      //obra 1
      //parte 1 cuadrado1
      push();
      strokeWeight(24);
      stroke(colorline);
      line(20, 60, 210, 60);
      line(210, 460, 210, 60);
      line(20, 460, 210, 460);
      //cuadrado2
      line(20, 120, 160, 120);
      line(20, 400, 160, 400);
      line(160, 120, 160, 400);
      //cuadrado3
      line(20, 180, 120, 180);
      line(20, 340, 120, 340);
      line(120, 180, 120, 340);
      //cuadrado4
      line(20, 230, 70, 230);
      line(20, 290, 70, 290);
      line(70, 230, 70, 290);
      pop();
      //linea divisoria
      push();
      stroke(colorline2);
      strokeWeight(24);
      line(250, 460, 250, 60);
      pop();
      //parte 2
      push();
      strokeWeight(24);
      stroke(colorline);
      line(290, 460, 290, 60);
      line(480, 60, 290, 60);
      line(480, 60, 480, 460);
      line(480, 460, 4200, 500);
      line(290, 460, 430, 460);
      line(430, 460, 430, 410);
      line(430, 410, 340, 410);
      line(340, 410, 340, 110);
      line(340, 110, 430, 110);
      line(430, 160, 430, 110);
      line(430, 160, 390, 160);
      line(390, 160, 390, 360);
      line(390, 360, 430, 360);
      line(430, 360, 430, 330);
      line(430, 330, 420, 330);
      line(420, 280, 420, 330);
      line(420, 280, 440, 280);
      pop();
    }
    if (keyCode == DOWN_ARROW) {
      colorline = 60;
      colorline2 = 156;
      background(220);
      //obra 1
      //parte 1 cuadrado1
      push();
      strokeWeight(24);
      stroke(colorline);
      line(20, 60, 210, 60);
      line(210, 460, 210, 60);
      line(20, 460, 210, 460);
      //cuadrado2
      line(20, 120, 160, 120);
      line(20, 400, 160, 400);
      line(160, 120, 160, 400);
      //cuadrado3
      line(20, 180, 120, 180);
      line(20, 340, 120, 340);
      line(120, 180, 120, 340);
      //cuadrado4
      line(20, 230, 70, 230);
      line(20, 290, 70, 290);
      line(70, 230, 70, 290);
      pop();
      //linea divisoria
      push();
      stroke(colorline2);
      strokeWeight(24);
      line(250, 460, 250, 60);
      pop();
      //parte 2
      push();
      strokeWeight(24);
      stroke(colorline);
      line(290, 460, 290, 60);
      line(480, 60, 290, 60);
      line(480, 60, 480, 460);
      line(480, 460, 4200, 500);
      line(290, 460, 430, 460);
      line(430, 460, 430, 410);
      line(430, 410, 340, 410);
      line(340, 410, 340, 110);
      line(340, 110, 430, 110);
      line(430, 160, 430, 110);
      line(430, 160, 390, 160);
      line(390, 160, 390, 360);
      line(390, 360, 430, 360);
      line(430, 360, 430, 330);
      line(430, 330, 420, 330);
      line(420, 280, 420, 330);
      line(420, 280, 440, 280);
      pop();
    }
    if (keyCode == LEFT_ARROW) {
      colorline = 156;
      colorline2 = 60;
      background(220);
      //obra 2
      //parte 1
      push();
      noFill();
      stroke(colorline);
      strokeWeight(2);
      quad(70, 50, 150, 70, 100, 120, 20, 90);
      quad(70, 50, 70, 110, 30, 150, 20, 90);
      quad(30, 150, 80, 100, 150, 120, 110, 180);
      quad(150, 120, 110, 180, 100, 120, 150, 70);
      quad(40, 100, 40, 140, 100, 160, 100, 120);
      quad(100, 120, 40, 100, 70, 70, 130, 90);
      quad(100, 120, 100, 160, 130, 120, 130, 90);
      line(80, 75, 80, 100);
      line(110, 180, 110, 110);
      pop();
      //parte 2
      push();
      noFill();
      stroke(colorline);
      strokeWeight(2);
      quad(200, 200, 400, 200, 390, 300, 180, 300);
      quad(180, 300, 390, 300, 380, 400, 200, 400);
      quad(380, 400, 200, 400, 240, 340, 360, 340);
      quad(240, 340, 360, 340, 360, 250, 240, 250);
      line(200, 200, 240, 250);
      line(400, 200, 360, 250);
      line(200, 200, 220, 320);
      line(220, 320, 200, 400);
      line(400, 200, 370, 320);
      line(370, 320, 380, 400);
      line(220, 320, 370, 320);
      pop();
    }
    if (keyCode == RIGHT_ARROW) {
      colorline = 60;
      colorline2 = 156;
      background(220);
      //obra 2
      //parte 1
      push();
      noFill();
      stroke(colorline);
      strokeWeight(2);
      quad(70, 50, 150, 70, 100, 120, 20, 90);
      quad(70, 50, 70, 110, 30, 150, 20, 90);
      quad(30, 150, 80, 100, 150, 120, 110, 180);
      quad(150, 120, 110, 180, 100, 120, 150, 70);
      quad(40, 100, 40, 140, 100, 160, 100, 120);
      quad(100, 120, 40, 100, 70, 70, 130, 90);
      quad(100, 120, 100, 160, 130, 120, 130, 90);
      line(80, 75, 80, 100);
      line(110, 180, 110, 110);
      pop();
      //parte 2
      push();
      noFill();
      stroke(colorline);
      strokeWeight(2);
      quad(200, 200, 400, 200, 390, 300, 180, 300);
      quad(180, 300, 390, 300, 380, 400, 200, 400);
      quad(380, 400, 200, 400, 240, 340, 360, 340);
      quad(240, 340, 360, 340, 360, 250, 240, 250);
      line(200, 200, 240, 250);
      line(400, 200, 360, 250);
      line(200, 200, 220, 320);
      line(220, 320, 200, 400);
      line(400, 200, 370, 320);
      line(370, 320, 380, 400);
      line(220, 320, 370, 320);
      pop();
    }
  }
}
/* 
Obra num1: https://ropac.net/news/1581-parler-a-l-il-vera-molnar-solo-exhibition-at-the-centre-pompidou/
Obra num2: https://youtu.be/0j63uV6O5qE?si=eozgeJ2Mmwb04_4h
*/
