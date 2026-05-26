var col1;
var angulo = 0;
var circuloAlt = {
  x: 0,
  y: 0,
};
let x;
let y;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(150);
}

function draw() {
  background(0);
  // frameRate(1);
  col1 = map(mouseX, 0, 512, 0, 255);

  //   Corazon
  push();
  fill(col1);

  noStroke();
  bezier(256, 220, 340, 155, 380, 245, 256, 330);
  bezier(256, 220, 165, 145, 150, 260, 256, 330);
  pop();

  //   Signo
  push();
  noFill();
  stroke(col1);
  bezier(340, 160, 365, 137, 400, 180, 365, 200);
  bezier(365, 200, 347, 220, 365, 240, 360, 236);
  ellipse(363, 250, 10);
  pop();

  //---------------------------Segunda Parte----------------------------
  if (frameCount > 400) {
    background(0);

    //  Efecto de luz
    push();
    for (var y = 0; y <= mouseY * 2; y += 15) {
      for (var x = 0; x <= mouseX * 2; x += 15) {
        stroke(255, 255, 255, 15);
        line(x, y, 195, 130);
      }
    }
    pop();

    //     Silueta
    push();
    stroke(255);
    noFill();
    bezier(260, 215, 250, 230, 250, 230, 256, 256);
    bezier(260, 215, 230, 185, 230, 210, 260, 215);
    bezier(260, 215, 270, 215, 310, 240, 305, 207);
    bezier(305, 207, 305, 205, 305, 200, 315, 196);
    bezier(315, 196, 322, 187, 305, 190, 315, 180);
    bezier(315, 180, 330, 172, 300, 165, 323, 158);
    bezier(323, 158, 340, 150, 300, 135, 315, 110);
    bezier(315, 110, 325, 75, 250, 20, 217, 66);
    bezier(217, 66, 195, 112, 237, 90, 215, 155);
    bezier(215, 155, 205, 180, 240, 180, 210, 160);
    bezier(210, 160, 130, 133, 160, 100, 193, 125);
    bezier(193, 125, 190, 110, 203, 100, 208, 100);
    pop();

    //       Lineas
    for (var lineas = 0; lineas < 512; lineas += 10) {
      line(256, 256, lineas, 512);
    }
  }
    //--------------------------Tercera Parte-----------------------------
    if (mouseIsPressed) {
      
//       Efecto del Fondo
      var Fondo = sin(angulo);
      var gris = map(Fondo, -1, 1, 0, 255);
      background(gris);

      angulo += 0.4;
      
//       Circulos Aleatorios
      circuloAlt.x = random(0, 512);
      circuloAlt.y = random(0, 512);
      noStroke();
      fill(random(0, 255));
      ellipse(circuloAlt.x, circuloAlt.y, 10, 10);
      
      
      //  Efecto de luz
      push();
      for (var y = 0; y <= mouseY * 2; y += 15) {
        for (var x = 0; x <= mouseX * 2; x += 15) {
          stroke(255, 255, 255, 15);
          line(x, y, 195, 130);
        }
      }
      pop();

      //     Silueta
      push();
      stroke(255);
      noFill();
      bezier(260, 215, 250, 230, 250, 230, 256, 256);
      bezier(260, 215, 230, 185, 230, 210, 260, 215);
      bezier(260, 215, 270, 215, 310, 240, 305, 207);
      bezier(305, 207, 305, 205, 305, 200, 315, 196);
      bezier(315, 196, 322, 187, 305, 190, 315, 180);
      bezier(315, 180, 330, 172, 300, 165, 323, 158);
      bezier(323, 158, 340, 150, 300, 135, 315, 110);
      bezier(315, 110, 325, 75, 250, 20, 217, 66);
      bezier(217, 66, 195, 112, 237, 90, 215, 155);
      bezier(215, 155, 205, 180, 240, 180, 210, 160);
      bezier(210, 160, 130, 133, 160, 100, 193, 125);
      bezier(193, 125, 190, 110, 203, 100, 208, 100);
      pop();
      
       //       Lineas
      push();
      for (var lineas = 0; lineas < 512; lineas += 10) {
        line(256, 256, lineas, 512);
      }
      pop();
    }
  // console.log("X: " + mouseX + " Y:" + mouseY);
}
