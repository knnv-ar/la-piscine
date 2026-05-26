function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}
var angulo = 0.0;
var desplazamiento = 256;
var escalar = 30;
var velocidad = 0.05;
var escalar2 = 2;

function draw() {
  textSize(20);
  textStyle(BOLD);
  stroke(225);
  strokeWeight(0.2);

  for (var i = 0; i < 512; i += 0.1) {
    line(i, 0, i, height);
  }
  //cejas
  fill(0);

  ellipse(160, 190, 180, 20);
  ellipse(350, 190, 180, 20);

  //ojos cerrados
  stroke(100);
  strokeWeight(8);
  noFill();
  ellipse(170, 260, 120, 70);

  ellipse(350, 260, 120, 70);

  push();
  fill(220);
  noStroke();

  rect(70, 200, 380, 60);
  pop();
  strokeJoin(ROUND);
  stroke(160);
  strokeWeight(8);
  fill(160);

  triangle(256, 320, 200, 420, 298, 420);
  fill(170);
  noStroke();
  rect(220, 300, 60, 110);
  fill(170);
  push();
  ellipse(250, 400, 70, 55);
  pop();
  //cara
  stroke(170);
  strokeWeight(5);
  noFill();
  ellipse(256, 260, 420, 500);

  line(193, 450, 296, 450);

  //mira
  push();
  translate(random(480), random(480));
  strokeWeight(random(2));
  stroke(random(255));
  //M
  line(0, 0, 0, 50);
  line(0, 0, 20, 17);
  line(30, 0, 20, 17);
  line(30, 0, 30, 50);

  //I
  line(40, 0, 40, 50);

  //R

  line(50, 0, 50, 50);
  line(50, 0, 60, 17);
  line(50, 30, 60, 17);
  line(50, 30, 60, 50);

  //A
  line(70, 5, 65, 45);
  line(70, 5, 85, 45);
  line(70, 30, 80, 30);
  pop();

  if (mouseIsPressed) {
    background(225);
    //ojos
    push();
    fill(100);
    ellipse(120, 280, 150, 170);
    ellipse(350, 280, 150, 170);

    //ojos negros
    fill(0);

    ellipse(350, 280, 100, 120);
    ellipse(120, 280, 100, 120);
    //pupilas
    fill(random(225));
    ellipse(120, 280, 20, 20);
    ellipse(350, 280, 20, 20);

    pop();

    //cejas

    fill(150);

    ellipse(120, 180, 200, 20);
    ellipse(350, 180, 200, 20);

    stroke(170);
    strokeWeight(5);
    noFill();
    ellipse(256, 260, 512, 600);

    strokeJoin(ROUND);
    stroke(160);
    strokeWeight(8);
    fill(160);

    triangle(230, 320, 170, 450, 280, 450);
    fill(170);
    noStroke();
    rect(200, 300, 60, 110);
    fill(170);
    push();
    ellipse(230, 420, 80, 65);
    pop();
    //cara
    fill(0);

    ellipse(230, 500, 150, 65);

    if (mouseX > 512) {
      text("encuentro", 225, 55);

      background(225);
      fill(random(170));
      stroke(210);
      strokeWeight(40);
      rect(68, 70, 376, 250);

      push();
      //rayas
      stroke(170);
      strokeWeight(1);
      for (var x = 0; x < width; x += 10) {
        var mx = 20;
        var desplazamientoA = random(-mx, mx);
        var desplazamientoB = random(-mx, mx);
        line(x + desplazamientoA, 0, x - desplazamientoB, 512);
      }
      pop();
    }
    if (mouseX < 0) {
      var valorSeno = sin(angulo);
      var gris = map(valorSeno, -1, 1, 0, 225);
      background(0);
      angulo += 0.1;

      push();
      //rayas
      stroke(60);
      strokeWeight(1);
      for (var x = 20; x < width; x += 15) {
        var mx = 10;
        var desplazamientoA = random(-mx, mx);
        var desplazamientoB = random(-mx, mx);
        line(x + desplazamientoA, 0, x - desplazamientoB, 512);
      }
      pop();

      fill(120);
      var y3 = desplazamiento + sin(angulo + 0.8) * escalar;
      ellipse(256, y3, 180, 250);

      fill(225);
      ellipse(256, y3, 160, 200);

      fill(gris);

      ellipse(256, y3, 150, 140);

      fill(0);

      ellipse(256, y3, 40, 40);

      fill(70);

      ellipse(256, 60, 250, 20);
    }
  }
  
   document.oncontextmenu = function() {
  return false;
}
}
