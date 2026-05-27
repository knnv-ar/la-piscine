// AM1 cátedra Lacabanne
// TP-N1
// Sinek
// Yiğit Ç
// 2024


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(random(200, 255));
  frameRate(25);
  r = 150; // distancia max desde el mouse inicial
}

function draw() {
  let x, y; // los variables de "translate"

  // SI MOUSE ESTA DENTRO DE LA PANTALLA - EXCEPTO CERCANO A LOS BORDES
  // /* LOS BORDES*/ noFill();  rect(42,42,428,428);

  if (mouseX >= 42 && mouseX <= 470 && mouseY >= 42 && mouseY <= 470) {
    x = mouseX + random(-r, +r);
    y = mouseY + random(-r, +r);
    r--; // distancia random sobre el mouse diminuindo

    if (r <= -50) {
      r = 50; // resetar distancia max sobre el mouse
    }
  }

  // SI MOUSE ESTA FUERA DE LA PANTALLA o CERCA A LOS BORDES
  else {
    x = random(width);
    y = random(height);
  }

  // LA UBICACION, TAMAÑO y DIRECCION DE LA MOSCA
  translate(x, y);
  var scaleY = random([0.05, 0.1]); // 2 tamaños: P y G
  var rotateO = random([QUARTER_PI, -QUARTER_PI]); // 2 direcciones: I y D

  push();
  scale(scaleY); // escalando pq el dibujo original es grande
  rotate(rotateO); //  dibujo original mira arriba

  // DIBUJO DE UNA MOSCA

  strokeWeight(5);
  line(80, 155, 80, 360); // linea vertical izquierda
  line(120, 155, 120, 360); // linea vertical derecha
  line(50, 195, 150, 195); // linea horizontal

  /*   push(); // ala izquierda fondo - sin transparencia
  translate(70,275);
  rotate(QUARTER_PI/2);
  ellipse(0, 0, 60, 225);
  pop();*/

  push(); // ALA DERECHA
  noFill(); // con transparencia
  translate(130, 275);
  rotate(-QUARTER_PI / 2);
  ellipse(0, 0, 60, 225);
  pop();

  push(); // ALA IZQUIERDA dibujo transparente
  noFill();
  translate(70, 275);
  rotate(QUARTER_PI / 2);
  ellipse(0, 0, 60, 225);
  pop();
  pop();

  // LIMPIAR SI CLICAR
  if (mouseIsPressed) {
    background(random(200, 255)); // limpiar el fondo
    r = 150; // y resetar la distancia max sobre mouse
  }
  // SI SE MUEVE EL MOUSE
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    r = 150; // resetar distancia r
  }
}

// Imitando la obra de:
// Charles Csuri - Feeding Time (1966)
// https://csuriproject.osu.edu/Detail/objects/541
