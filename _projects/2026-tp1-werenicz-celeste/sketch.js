let estaRoto = false;
let transicionActiva = false;
let radioCirculos = 0;
let maxRadio = 1000;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(220);

  //transición del fondo
  if (transicionActiva) {
    radioCirculos = min(radioCirculos + 1, maxRadio);
  }

  noStroke();
  fill(20);

  if (transicionActiva) {
    radioCirculos = min(radioCirculos + 1, maxRadio);
    for (let x = 0; x <= width + radioCirculos; x += 50) {
      for (let y = 0; y <= height + radioCirculos; y += 50) {
        ellipse(x, y, radioCirculos, radioCirculos);
      }
    }
  } else {
    radioCirculos = 0;
  }

  //personajes
  strokeWeight(3);
  stroke(80);
  line(0, 440, 512, 440);

  strokeWeight(2);
  stroke(120);
  fill(240);

  quad(58, 96, 58, 159, 133, 145, 133, 92);
  quad(454, 96, 454, 159, 379, 145, 379, 92);
  quad(85, 156, 60, 170, 140, 200, 108, 152);
  quad(427, 156, 452, 170, 372, 200, 404, 152);
  quad(60, 170, 80, 320, 125, 320, 140, 200);
  quad(452, 170, 432, 320, 387, 320, 372, 200);
  triangle(65, 214, 14, 277, 70, 240);
  triangle(447, 214, 498, 277, 442, 240);
  triangle(80, 320, 100, 450, 125, 320);
  triangle(432, 320, 412, 450, 387, 320);
  triangle(115, 210, 88, 230, 166, 308);
  triangle(397, 210, 424, 230, 346, 308);
  triangle(94, 415, 58, 452, 100, 452);
  triangle(418, 415, 454, 452, 412, 452);

  stroke(50);
  noFill();
  //hilo central
  if (!estaRoto) {
    //Si NO esta roto
    bezier(166, 308, mouseX, mouseY, mouseX, mouseY, 346, 308);
  } else {
    // Si está roto
    bezier(166, 308, 140, 438, 170, 438, 214, 438);
    bezier(346, 308, 372, 438, 342, 438, 298, 438);
  }

}

function mousePressed() {
  estaRoto = true;
  transicionActiva = true;
}

function keyPressed() {
  if (key === "r" || key === "R") {
    estaRoto = false;
    transicionActiva = false;
  }
}
