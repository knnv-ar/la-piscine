// TRABAJO OBLIGATORIO N*1 :"LOOP" by IARA VELAZQUEZ ALVAREZ//
var angulo = 0.0;
var desplazamiento = 20;
var escalar = 240;
var velocidad = 0.03;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  
  background(255);
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  angulo += velocidad;

  /*if(frameCount){
  background(0);
  }*/

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(x, y, 80, 100, 40);
  pop();

  fondo();

  if (x > width + 200) {
    x = 200; // Mueve la figura al borde izquierdo
  }

  push();
  //auto
  //Rueda de atrás
  fill(212);
  quad(140, 290, 150, 300, 150, 280, 140, 270);
  fill(238);
  quad(140, 270, 150, 280, 155, 275, 145, 265);
  fill(172);
  quad(150, 280, 150, 300, 155, 295, 155, 275);

  //Auto
  fill(212);
  quad(20, 230, 120, 300, 120, 250, 20, 180);
  fill(238);
  quad(20, 180, 120, 250, 145, 240, 45, 170);
  fill(172);
  quad(120, 250, 120, 300, 145, 290, 145, 240);

  //RUEDAS
  fill(212);
  quad(15, 235, 25, 245, 25, 225, 15, 215);
  fill(238);
  quad(15, 215, 25, 225, 30, 220, 20, 210);
  fill(172);
  quad(25, 225, 25, 245, 30, 240, 30, 220);

  fill(212);
  quad(105, 305, 115, 315, 115, 295, 105, 285);
  fill(238);
  quad(105, 285, 115, 295, 120, 290, 110, 280);
  fill(172);
  quad(115, 295, 115, 315, 120, 310, 120, 290);
  pop();
}

function fondo() {
  //VACIO

  /* lado A EDIFICIO*/
  noStroke();
  fill(212);
  quad(86, -4, 239, 29, 240, 290, 86, 198);

  /* Lado B*/
  noStroke();
  fill(172);
  quad(399, -6, 239, 29, 240, 290, 399, 198);

  /*techo*/
  noStroke();
  fill(238);
  triangle(86, -4, 399, -6, 240, 29);

  /* C A L L E */
  noStroke();
  fill(29);
  quad(560, 550, 231, 550, 20, 522, 560, 215);
  quad(238, 550, 1, 550, -10, 222, 238, 399);

  /* ventanas*/
  /*  BLOQUE DE V E N T A N A S :01 (izquierda) */
  /* ventana a*/
  fill(200);
  quad(148, 39, 100, 19, 100, 60, 149, 80);
  fill(181);
  quad(148, 39, 100, 60, 100, 60, 149, 80);

  /* ventana num b*/
  fill(200);
  quad(148, 140, 100, 120, 100, 80, 148, 100);
  fill(180);
  quad(148, 140, 100, 120, 100, 120, 148, 100);

  /*ventana num c */
  fill(200);
  quad(148, 200, 100, 177, 100, 137, 148, 160);
  fill(180);
  quad(148, 200, 100, 177, 100, 177, 148, 160);

  /* ventana num D , rec*/
  fill(200);
  quad(220, 240, 160, 210, 160, 40, 220, 60);
  fill(180);
  quad(220, 240, 160, 210, 160, 210, 220, 180);

  /*  BLOQUE DE V E N T A N A S :02 (derecha) */
  /* ventana pequeña a*/
  fill(200);
  quad(310, 80, 260, 100, 260, 60, 310, 40);
  fill(180);
  quad(310, 80, 260, 100, 260, 60, 310, 80);
  //ventana pequeña  b/
  fill(200);
  quad(380, 55, 330, 75, 330, 35, 380, 15);
  fill(180);
  quad(380, 55, 330, 75, 330, 35, 380, 55);

  /* ventanal Horizontal*/
  fill(200);
  quad(380, 120, 260, 180, 260, 130, 380, 80);
  fill(180);
  quad(380, 120, 260, 180, 260, 130, 380, 80);
  /* puerta*/
  fill(200);
  quad(350, 225, 290, 260, 290, 190, 350, 160);
  fill(180);
  quad(350, 225, 290, 260, 290, 190, 350, 220);
}
