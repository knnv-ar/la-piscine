let oscilacion = 0;
let tIris = 0;
let tPupila = 0;

function setup() {
let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

let angulo = 0.0;

function draw() {
  let valorSeno = sin(angulo);
  let gris = map(valorSeno, -1, 1, 10, 255);
  background(gris);
  angulo += 0.02;

  //fondo//
  push();
  for (let i = 0; i < 550; i += 5) {
    let movimientoX = sin(oscilacion + i * 0.05) * 220;
    ellipse(i, 450 + movimientoX, 0, 110);
    ellipse(i, 256 + movimientoX, 10, 425);
  }
  pop();

  // movimiento del iris//
  tIris += 0.005;
  let anguloIris = noise(tIris) * TWO_PI * 2;
  let radioIris = map(noise(tIris + 500), 0, 1, 0, 22);
  let irisBaseX = 256;
  let irisBaseY = 256;
  let cx = irisBaseX + cos(anguloIris) * radioIris;
  let cy = irisBaseY + sin(anguloIris) * radioIris;

  // movimiento pupila//
  tPupila += 0.015;
  let anguloPupila = noise(tPupila) * TWO_PI * 3;
  let radioPupila = map(noise(tPupila + 500), 0, 1, 0, 25);
  let pupilaX = cx + cos(anguloPupila) * radioPupila;
  let pupilaY = cy + sin(anguloPupila) * radioPupila;

  let rPupila = 5;
  let rIris = 40.5;

  // ojo ext //
  fill(220);
  strokeWeight(9);
  circle(240, 280, 250);

  // ojo semi int //
  strokeWeight(7);
  fill(0);
  ellipse(256, 256, 150);

  // iris int //
  strokeWeight(3);
  fill(120);
  ellipse(cx, cy, 100);

  // textura del iris //
  push();
  randomSeed(3);
  for (let a = 0; a < TWO_PI; a += 0.05) {
    let variacion = random(-20, 10);
    let x1 = cx + cos(a) * rPupila;
    let y1 = cy + sin(a) * rPupila;
    let x2 = cx + cos(a) * (rIris + variacion);
    let y2 = cy + sin(a) * (rIris + variacion);

    stroke(30, random(80, 200));
    strokeWeight(random(0.3, 1.2));

    if (random() < 0.3) {
      bezier(
        x1,
        y1,
        x1 - sin(a) * 5,
        y1 + cos(a) * 5,
        x2 - sin(a) * 5,
        y2 + cos(a) * 5,
        x2,
        y2
      );
    } else {
      line(x1, y1, x2, y2);
    }
  }
  pop();

  //pupila//
  noStroke();
  fill(0);
  ellipse(pupilaX, pupilaY, 40);

  noFill();
  stroke(0);

  // venas finas //
  strokeWeight(0.5);
  bezier(286, 400, 210, 388, 256, 366, 242, 380);
  bezier(241, 400, 204, 345, 242, 340, 175, 380);
  bezier(155, 364, 161, 339, 252, 320, 153, 310);
  bezier(355, 305, 350, 270, 270, 340, 305, 315);
  bezier(370, 280, 375, 230, 250, 350, 325, 330);
  bezier(148, 190, 170, 175, 200, 213, 190, 173);
  bezier(178, 230, 158, 210, 210, 207, 120, 228);
  bezier(118, 300, 190, 275, 200, 305, 190, 325);
  bezier(270, 185, 310, 170, 330, 190, 300, 200);
  bezier(300, 200, 340, 180, 325, 195, 335, 235);

  // venas gruesas //
  strokeWeight(2);
  bezier(140, 210, 170, 222, 230, 174, 186, 220);
  bezier(120, 275, 160, 300, 200, 226, 184, 223);
  bezier(242, 402, 192, 376, 213, 384, 240, 330);
  bezier(268, 400, 290, 320, 245, 376, 280, 330);
  bezier(136, 356, 193, 290, 226, 400, 210, 315);
  bezier(276, 370, 320, 280, 320, 360, 330, 370);
  bezier(310, 305, 375, 271, 326, 370, 345, 345);
  bezier(366, 305, 330, 208, 302, 193, 320, 210);
  bezier(340, 205, 324, 200, 308, 174, 308, 204);
  bezier(252, 185, 212, 164, 242, 164, 222, 153);
  bezier(202, 205, 192, 170, 222, 174, 222, 153);
  bezier(272, 186, 286, 184, 252, 171, 276, 156);
  bezier(128, 345, 148, 320, 132, 300, 180, 315);
  bezier(119, 235, 122, 210, 161, 290, 200, 205);
  bezier(160, 310, 145, 275, 195, 255, 184, 223);
  bezier(270, 335, 316, 370, 300, 350, 306, 345);
}