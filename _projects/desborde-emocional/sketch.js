//MASCARA DE GAS
let movX = 4;
let movY = 4;
let circuloX = 0;
let circuloY = 0;
let pi = 30;
let pd = 30;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(20);
  push(); //------------FONDO----------------
  for (let x = 20; x < width - 30; x = x + 100) {
    for (let y = 45; y < height - 30; y = y + 100) {
      noFill();
      strokeWeight(0.7);
      stroke(0);
      ellipse(45, 30, random(x), random(y));
      ellipse(45, 475, random(x), random(y));
      ellipse(465, 475, random(x), random(y));
      ellipse(465, 30, random(x), random(y));
    }
  }
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      strokeWeight(random(250));
      stroke(random(60));
      rect(random(width), random(height), random(width), random(height));
      for (let x = 20; x < width - 30; x = x + 100) {
        for (let y = 45; y < height - 30; y = y + 100) {
          strokeWeight(1);
          stroke(random(20));
          //SUP izquierda
          ellipse(45, 30, x, random(y));
          ellipse(45, 30, random(x), y);

          //ABAJO a la izquierda
          ellipse(45, 475, x, random(y));
          ellipse(45, 475, random(x), y);

          //ABAJO a la derecha xd
          ellipse(465, 475, x, random(y));
          ellipse(465, 475, random(x), y);

          //SUP derecho
          ellipse(465, 30, x, random(y));
          ellipse(465, 30, random(x), y);

          //Desorden Mental
          strokeWeight(1);
          stroke(random(10));
          ellipse(256, 256, random(x), random(y));
          ellipse(256, 256, random(x), random(y));
        }
      }
    }
  }

  pop();

  //-----------------------MASCARA---------------------
  push();
  fill(0, 0, 0, 80);
  stroke(70);
  ellipse(256, 256, 280, 360);
  noFill(70); //color de arnes
  rect(220, 70, 60, 15, 10, 10, 3); //arnes SUPERIOR
  rect(105, 230, 15, 60, 10, 3, 3, 10); //arnes IZQUIERDO
  rect(390, 230, 15, 60, 3, 10, 10, 3); //arnes DERECHO
  if (mouseIsPressed)
    if (mouseButton == LEFT) {
      noFill(0, 0, 0, 0);
      stroke(random(70));
      ellipse(256, 256, 280, 360);
      fill(0, 0, 0, 80); //color de arnes
      rect(220, 70, 60, 15, 10, 10, 3); //arnes SUPERIOR
      rect(105, 230, 15, 60, 10, 3, 3, 10); //arnes IZQUIERDO
      rect(390, 230, 15, 60, 3, 10, 10, 3); //arnes DERECHO
    }
  pop();
  //--------------------OJO IZQUIERDO------------------
  push();
  rotate(2.2);
  //color verde ojo de la mascara 34, 61, 17
  translate(-288, -365);
  noFill(random(50));
  stroke(80);
  ellipse(340, 100, 135, 135); //parte gris oscuro
  fill(random(10));
  ellipse(340, 100, 100, 100); //ojo negro
  noFill();
  ellipse(340, 100, 117, 117); //circulo del ojo
  fill(random(255,150)); //color del ojo
  ellipse(335, 90, 40, 40);
  fill(0);
  ellipse(335, 90, 30, 30);
  fill(255);
  ellipse(335, 100, 5, 5);

  if (mouseIsPressed)
    if (mouseButton == LEFT) {
      fill(random(255));
      stroke(0);
      ellipse(335, 90, 40, 40);
      fill(0);
      ellipse(335, 90, 30, 30);
      for (let x = 20; x < width - 450; x = x + 50) {
        stroke(random(100));
        noFill();
        circle(335, 90, random(x));
        stroke(random(80));
        ellipse(340, 100, 135, 135); //parte gris oscuro
        ellipse(340, 100, 117, 117); //contorno central
        ellipse(340, 100, 100, 100); //ojo negro
      }
    }

  pop();
  //---------------------OJO DERECHO-------------------
  push();
  rotate(QUARTER_PI);
  translate(25, -190);
  noFill(50);
  stroke(70);
  ellipse(340, 100, 135, 135);
  fill(random(10));
  ellipse(340, 100, 100, 100);
  noFill();
  ellipse(340, 100, 117, 117);
  fill(random(255,150));
  ellipse(335, 110, 40, 40); //color verde
  fill(0);
  ellipse(335, 110, 30, 30); //pupila negra
  fill(255);
  ellipse(325, 113, 5, 5); //brillo del ojo

  if (mouseIsPressed)
    if (mouseButton == LEFT) {
      fill(random(255));
      stroke(0);
      ellipse(335, 110, 40, 40);
      fill(0);

      ellipse(335, 110, 30, 30);

      for (let x = 20; x < width - 450; x = x + 50) {
        stroke(random(100));
        noFill();
        circle(335, 110, random(x));
        stroke(random(70));
        ellipse(340, 100, 135, 135);
        ellipse(340, 100, 100, 100);
        ellipse(340, 100, 117, 117);
      }
    }

  pop();
  //----------------------"BOCA"--------------------*
  push();
  translate(0, 100);
  fill(0, 0, 0, random(700));
  stroke(70);
  ellipse(256, 256, 180, 180);

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      fill(random(15));
      stroke(random(70));
      ellipse(256, 256, 180, 180);
    }
  }
  pop();
  push();
  //-------------------DIENTES SUPERIORES----------------
  for (let x = 194; x < 300; x = x + 31) {
    noFill(255, 229, 172);
    stroke(70);
    square(x, 282, 30, 80, 80, 4, 4);
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        stroke(random(70));
        square(x, 282, 30, 80, 80, 4, 4);
      }
    }
  }

  //-------------------DIENTES INFERIORES----------------
  for (let x = 195; x < 300; x = x + 31) {
    square(x, 400, 30, 4, 4, 80, 80);
  }

  pop();
  push(); //---------------LABIO--------------------------
  translate(0, 100);
  fill(0, 0, 0, 80);
  strokeWeight(1);
  stroke(70);
  ellipse(256, 256, 220, 220);
  noFill();

  ////----------ESCUPE ELLIPSE----------------*

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      strokeWeight(2);
      noFill();
      stroke(random(100));
      ellipse(256, 256, circuloX, circuloY);
      circuloX = circuloX + 20;
      circuloY = circuloY + 20;

      if (circuloX > width - 35) {
        circuloX = 0;
      }
      if (circuloY > height - 35) {
        circuloY = 0;
      }
    }
    stroke(random(70));
    ellipse(256, 256, 220, 220);
  }

  pop();
}
