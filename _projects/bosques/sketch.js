function setup() {
  
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  background(20);

  for (var x = 0; x < width; x += 10) { // Dibuja las líneas verticales oscuras.
    stroke(random(0, 20))
    line(x, random(30, 175), x, height);
  }

  for (var l = -5; l < width; l += 10) { // Dibuja las líneas verticales claras.
    stroke(random(50, 90))
    line(l, random(30, 175), l, height);
  }

  for (var q = -3; q < width; q += 2.3) { // Dibuja las líneas verticales oscuras y con valor alpha de 100.
    stroke(random(0, 40), 100);
    line(q, random(30, 175), q, height);
  }

  for (var q = -3; q < width; q += 2.3) {
    stroke(200, 20);
    line(q, random(30, 175), q, height);
  }

  let i = 50; // las variables "j" e "i" juntas crean el punto de unión entre las líneas diagonales. 
  let j = 260;

  for (i = 50; i < width; i += 100) { // Dibuja las diagonales 5 veces seguidas disminuyendo el height de sus coordenadas.
    stroke(random(55, 100));
    line(i, j, (i + 15), (j - 35));
    stroke(random(30, 70));
    line(i, j, (i - 15), (j - 35));
    j += 30;
  }

  /* Dibujo las Ramas con ayuda de push, pop y translate para que ocupen diferentes posiciones del canvas */

  push();
  translate(350, 200);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  stroke(random(30, 70));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(-20, 100);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(40, -40);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  stroke(random(30, 70));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(440, 0);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(320, -40);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(180, 200);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  line(50, 250, 35, 215);
  pop();

  push();
  translate(0, 230);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  stroke(random(30, 70));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(80, 200);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  stroke(random(30, 70));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(265, 160);
  stroke(random(55, 100));
  line(50, 250, 65, 215);
  stroke(random(30, 70));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(130, 140);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(185, -20);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(375, 30);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(260, 20);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(100, -86);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(250, -70);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(390, -60);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();

  push();
  translate(50, 120);
  stroke(random(30, 70));
  line(50, 250, 65, 215);
  stroke(random(55, 100));
  line(50, 250, 35, 215);
  pop();
}
