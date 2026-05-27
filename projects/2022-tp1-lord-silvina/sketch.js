//let fc = frameCount;

function setup() {
 let canvas = createCanvas(512, 512);

 canvas.parent('div-sketch');
 
  background(250);
//  frameRate(60);
}

function draw() {
  // background(240);
  
 // console.log (fc);

  push();
  for (var a = 80; a <= height; a += 15) {
    let rot = frameCount * 0.0005;
    rotate(-rot);
    line(35, a, 50, a);
  }

  pop();

  push();
  var angulo = 0.1;

 // console.log(" eje x" + mouseX, "eje y" + mouseY);

  var valorSeno = sin(angulo);
  var gris = map(valorSeno, -1, 1, 30, 230);
  //  background (gris);
  angulo += 0.3;

  pop();

  push();

  strokeWeight(0.6);

  for (var i = 20; i < width - 10; i += 45) {
    line(i + 30, 20, i, 80);
  }
  pop();

  push();

  for (var i = 80; i < width - 10; i += 90) {
    line(i - 20, 120, i + 30, 100);
  }

  pop();

  push();

  for (var a = 80; a <= height; a += 15) {
    if (a % 20 == 0) {
      line(35, a, 50, a);
    } else if (a % 10 == 0) {
      line(250, a - 15, 180, a + 25);
    }
  }
  pop();
  push();
  // rotacion ------------------------------

  //strokeWeight(0.8);
  translate(width / 2, height / 2);
  scale(0.7);

  for (var i = 20; i < width - 10; i += 45) {
    let rot = frameCount * 0.002;
    rotate(rot);
    line(i + 30, 20, i, 80);

    for (var i = 20; i < width - 10; i += 45) {
      let rot = frameCount * 0.002;
      rotate(-rot);
      line(i + 30, 20, i, 80);
    }
  }

  pop();

  push();
  for (var a = 80; a <= height; a += 15) {
    let rot = frameCount * 0.0005;
    rotate(-rot);
    line(35, a, 50, a);
  }
  // rotacion ---------------------
  pop();
  push();
  for (var b = 10; b <= width - 25; b += 45) {
    line(b, 150, b + 20, 240);
  }

  for (var b = 10; b <= width - 25; b += 45) {
    line(b, 150, b + 20, 240);
  }

  pop();

  push();

  for (var c = 10; c <= width - 25; c += 45) {
    line(c + 40, 270, c + 20, 300);
  }

  for (var c = 10; c <= width - 25; c += 45) {
    translate(width / 2, height / 2);
    let rot = frameCount * 0.000005;
    rotate(-rot);
    line(c + 40, 270, c + 20, 300);
  }

  pop();
  strokeWeight(0.5);
  line(128, 369, 435, 381);
  line(303, 442, 484, 329);
  line(125, 404, 460, 444);
  line(424, 337, 506, 337);
  line(428, 353, 452, 358);
  line(357, 364, 371, 383);
  line(288, 34, 365, 71);
  line(351, 34, 365, 71);
  line(76, 24, 135, 60);
  line(331, 483, 492, 387); 
 
  push();
  /* // revisar
  for (var b = 10; b <= width - 25; b += 45) {
    translate(width / 2, height / 2);
    let rot = frameCount * 0.0005;
    rotate(rot);
    line(b, 150, b + 20, 240);
  }
*/
  pop();

  push();
  for (var f = 20; f <= 80; f += 5) {
    if (f % 20 == 0) {
      translate(width / 2, height / 2);
      let rot = frameCount * 0.0005;
      rotate(rot);

      line(20, f, 50, f);
    }
  }
  pop();

  push();

  for (e = 200; e < width - 45; e += 50) {
    translate(width / 4, height / 4);
    let rot = frameCount * 0.000005;
    rotate(-rot);

    line(200, e, 100, e + 30);
  }

  pop();
}
