/*
OSCILOSCOPIOS: AGUJEROS NEGROS Y NUEVAS POÉTICAS.
(Trabajo inspirado en las obras de Ben Laposky y Herbert Franke, década de 50/60)

Instrucciones.

Estado de reposo: El productor se encuentra en su lugar de trabajo. Cuando la cuenta de frames llegue a 40, automáticamente se encenderá el osciloscopio. 

Interacciones con el ratón.

Botón izquierdo: instante previo a la imagen. El osciloscopio recibe las instrucciones del artista y con movimientos caóticos comienza a dibujar figuras.
Botón derecho: El autor acciona la cámara y obtiene una imagen fija.
Botón central: Termina el proceso. Se apaga osciloscopio.

*/

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  frameRate(30);
}
function draw() {
  let brillo = random(200, 250);
  let radio = random(4, 7);
  let oscilacion = random(252, 258);
  let luz = random(80, 250);
  let rotacion = random(-5, 5);

  background(35);

  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      background(random(30, 50));
      translate(0, 0);

      rotate(radians(rotacion));

      //Elipse Superior
      noFill();
      stroke(luz);
      //Borde
      strokeWeight(3);
      ellipse(mouseX, mouseY, random(100, 180), random(30, 40));
      ellipse(mouseX, mouseY, random(150, 165), random(30, 40));
      ellipse(mouseX, mouseY, random(150, 165), random(30, 40));

      //Relleno
      strokeWeight(0.1);
      for (var i = 140; i > 0; i -= 1.5) {
        ellipse(mouseX, mouseY, random(50, 165), random(0, 40));
      }

      //Conector Elipse Sup con Inf
      strokeWeight(0.2);
      for (var i = 100; i < 247; i += 3) {
        bezier(mouseX, mouseY, random(40, 80), 250, 244, i, 225, 340);
        bezier(mouseX, mouseY, random(0, 20), 250, 244, i, 225, 340);
      }

      //Union Elipse 2 con Elipse 3
      strokeWeight(1);
      stroke(luz);
      strokeWeight(0.2);
      for (var i = 278; i < 420; i += 3) {
        bezier(i, mouseY, 300, 380, 200, 320, 150, 356);
      }
      for (var i = 420; i > 280; i -= 2) {
        bezier(
          i,
          mouseY,
          i,
          random(300, 400),
          i,
          random(280, 350),
          random(226, 280),
          376
        );
        bezier(
          276,
          mouseY,
          i,
          (300, 400),
          random(200, 300),
          random(280, 360),
          random(150, 190),
          356
        );
        bezier(
          424,
          mouseY,
          i,
          i,
          i,
          random(320, 390),
          random(200, 256),
          random(346, 380)
        );
      }
      //Elipse centro
      //Borde
      strokeWeight(3);
      ellipse(random(345, 350), mouseY, random(150, 160), random(40, 20));
      strokeWeight(2);
      ellipse(random(345, 355), mouseY, random(135, 125), random(40, 10));
      strokeWeight(3);
      ellipse(random(345, 355), mouseY, 130, 35);

      //Relleno
      strokeWeight(0.2);
      for (var i = 130; i > 0; i -= 3) {
        ellipse(random(345, 355), mouseY, i, random(35, 15));
      }

      //Elipse Inferior
      //Borde
      strokeWeight(1);

      stroke(random(100, 230), random(0, 130));
      strokeWeight(3);
      ellipse(random(205, 230), height / 1.5, random(140, 150), random(30, 40));
      ellipse(random(205, 230), height / 1.5, 145, 35);

      //Relleno
      strokeWeight(0.2);

      for (var i = 140; i > 0; i -= 1.5) {
        ellipse(random(205, 230), height / 1.5, i, 40);
      }

      //Relleno elipse inferior
      strokeWeight(3);
      ellipse(224, height / 1.5, 150, 40);
      strokeWeight(0.2);
      ellipse(random(205, 230), 338, 150, 40);
      for (var i = 338; i < 355; i += 2) {
        ellipse(random(205, 230), i, 150, 40);
      }

      //Elipse inferior
      strokeWeight(3);
      ellipse(random(205, 230), 355, 150, 40);
    }

    if (mouseButton === RIGHT) {
      //Conector Elipse 1, Elipse 3
      strokeWeight(0.2);
      for (var i = 100; i < 247; i += 3) {
        bezier(i, 139, 80, 250, 244, i, 225, 340);
        bezier(100, 139, 80, 250, 244, i, 225, 340);
      }
      //Union Elipse 2 con Elipse 3
      strokeWeight(1);
      stroke(200);
      //bezier(277, 230, 300, 380, 200, 320, 150, 356);
      //bezier(424, 230, 430, 400, 400, 350, 226, 376);
      strokeWeight(0.2);
      for (var i = 278; i < 420; i += 3) {
        bezier(i, 240, 300, 380, 200, 320, 150, 356);
      }
      for (var i = 420; i > 280; i -= 2) {
        bezier(i, 240, i, 400, i, 350, 226, 376);
        bezier(276, 230, i, 380, 200, 320, 150, 356);
        bezier(424, 230, i, i, i, 350, 226, 376);
      }

      //Elipse Superior
      noFill();
      stroke(230);
      //Borde
      strokeWeight(3);
      ellipse(width / 3, height / 4, 165, 40);

      ellipse(width / 3, height / 4, 150, 40);
      ellipse(width / 3, height / 4, 145, 35);

      //Relleno
      strokeWeight(0.1);
      for (var i = 140; i > 0; i -= 1.5) {
        ellipse(width / 3, height / 4, i, 35);
      }

      //Elipse centro
      //Borde
      strokeWeight(3);
      ellipse(350, 230, 150, 40);
      strokeWeight(1);
      ellipse(350, 230, 135, 40);
      strokeWeight(3);
      ellipse(350, 230, 130, 35);

      //Relleno
      strokeWeight(0.1);
      for (var i = 130; i > 0; i -= 3) {
        ellipse(350, 230, i, 35);
      }

      //Elipse inferior
      //Borde
      strokeWeight(1);

      stroke(230);
      strokeWeight(3);
      ellipse(224, height / 1.5, 150, 40);
      ellipse(224, height / 1.5, 145, 35);

      strokeWeight(3);
      ellipse(224, 355, 150, 40);

      //Relleno
      strokeWeight(0.2);

      for (var i = 140; i > 0; i -= 1.5) {
        ellipse(224, height / 1.5, i, 40);
      }

      //Relleno elipse inferior
      strokeWeight(3);
      ellipse(224, height / 1.5, 150, 40);
      strokeWeight(0.2);
      ellipse(224, 338, 150, 40);
      for (var i = 338; i < 355; i += 2) {
        ellipse(224, i, 150, 40);
      }
    }

    if (mouseButton === CENTER) {
    }
  } else {
    //Osciloscopio
    if (frameCount >= 40) {
      strokeWeight(0);
      fill(brillo);
      ellipse(oscilacion, oscilacion, radio, radio);
    }
  }
}

document.oncontextmenu = function () {
  return false;
};

