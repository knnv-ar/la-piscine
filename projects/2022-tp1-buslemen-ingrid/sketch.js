/* 

"Variaciones entre el movimiento y la quietud"

Presionar los numeros 1-2-3-4 para ver las obras

*/

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(30);

  push();

  background(30);
  for (i = 50; i < 400; i += 10) {
    noFill();
    stroke(170);
    bezier(100, i, i, 500, i, 20, 500, 350);
  }

  pop();
}
function draw() {
  //Variacion 1
  push();
  if (key == "1") {
    background(30);
    for (i = 50; i < 400; i += 10) {
      noFill();
      stroke(170);
      bezier(100, i, i, 500, i, 20, 500, 350);
    }
  }
  pop();
  //variacion 2
  push();
  if (key == "2") {
    background(30);
    push();
    for (let i = 53; i < 300; i += 4) {
      noFill();
      stroke(200);
      bezier(i, i, 255, i, 100, i, 500, 400);
    }

    for (i = 100; i < 500; i += 20) {
      noFill();
      stroke(210);
      bezier(35, 25, i, i, 40, i, i, 480);
    }
    for (i = 30; i < 300; i += 15) {
      noFill();
      stroke(250);
      bezier(35, 6, i, i, 500, 0, i, 5);
    }
  }
  pop();

  //variacion 3
  push();
  if (key == "3") {
    background(30);
    for (i = 10; i < 250; i += 5) {
      noFill();
      stroke(150);
      square(i, i, i, i, 500, 20, i);
    }
    for (i = 0; i < 300; i += 30) {
      noFill();
      stroke(65);
      square(30, 30, 450, i, i, i, i);
    }
  }
  pop();

  //variacion 4

  push();
  if (key == "4") {
    background(30);

    for (i = 10; i < 250; i += 9) {
      noFill();
      stroke(60);
      triangle(6, i, i, 500, 400, 160);
    }
    for (i = 0; i < 510; i += 25) {
      noFill();
      stroke(255);
      triangle(i, 30, 500, i, i, i);
    }
  }
  pop();
}
