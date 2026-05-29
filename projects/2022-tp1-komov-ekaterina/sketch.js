// Komov Ekaterina, "Perdiendo la cabeza"

var a = 27; // tamaño cuad negros
var b = 20; // tamaño cuad grises
var c = 13; // tamaño cuad blancos

var z = 0; // relleno negro
var go = 150; // relleno gris oscuro
var gc = 210; // relleno gris claro
var l = 255; // relleno blanco

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
  background(255);
}

function draw() {
  background(l);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      //background(z);
      stroke(z);
      z = 255;
      go = 220;
      gc = 150;
      l = 0;
      //background(l);
    }
  } else {
    z = 0;
    go = 150;
    gc = 220;
    l = 255;
    //background(l);
    stroke(z);
  }
  push();
  noFill();
  bezier(42, 323, 45, 300, 55, 230, 150, 240); // ------ frente

  bezier(25, 385, -25, 365, 50, 370, 42, 323); // ------ nariz

  bezier(29, 398, 30, 379, 25, 388, 26, 385); // ------- surco

  bezier(32, 412, 5, 407, 30, 401, 29, 398); // -------- labio superior

  bezier(34, 433, 4, 423, 25, 417, 32, 413); // -------- labio inferior

  bezier(85, 460, 30, 475, 20, 467, 34, 433); // ------- mentón

  bezier(80, 461, 190, 455, -30, 590, 400, 590); // ---- linea cuello
  pop();

  push(); // ----------------------------- 1er capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(-20);
  push(); // ---------- negro
  fill(z);
  rect(110, 140, a, a);
  rect(40, 165, a, a);
  rect(70, 210, a, a);
  pop();
  push(); // ---------- gris oscuro
  fill(go);
  rect(155, 150, b, b);
  pop();
  push(); // ----------- gris claro
  fill(gc);
  rect(220, 250, b, b);
  pop();
  push(); // ------------------ blanco
  fill(l);
  rect(180, 0, c, c);
  rect(350, 160, c, c);
  pop();
  pop(); // ------------------------------ fin 1er capa cuadrados

  push(); // ------------------------------ 2da capa cuadrados
  push(); // ----------- negro
  fill(z);
  rect(160, 205, a, a);
  rect(275, 245, a, a);
  pop();
  push(); // ----------- gris oscuro
  fill(go);
  rect(230, 140, b, b);
  rect(335, 235, b, b);
  pop();
  push(); // ------------------ blanco
  fill(l);
  rect(508, -4, c, c);
  rect(400, 140, c, c);
  rect(505, 220, c, c);
  pop();
  pop(); // ------------------------------ fin 2da capa cuadrados

  push(); // ---------------------------- 3er capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(20);
  push(); // --------- negro
  fill(z);
  rect(135, 50, a, a);
  rect(160, 130, a, a);
  rect(235, 115, a, a);
  pop();
  push(); // --------- gris claro
  fill(gc);
  rect(135, -70, b, b);
  rect(340, -20, b, b);
  pop();
  push(); // ----------------- blanco
  fill(l);
  rect(180, -180, c, c);
  rect(320, -170, c, c);
  rect(195, -80, c, c);
  pop();
  pop(); // ------------------------------ fin 3er capa cuadrados

  push(); // ------------------------------ 4ta capa cuadrados
  angleMode(DEGREES);
  translate(100, 100);
  rotate(40);
  push(); // ---------- negro
  fill(z);
  rect(110, -20, a, a);
  rect(190, 0, a, a);
  rect(240, 65, a, a);
  pop();
  push(); // ----------- gris oscuro
  fill(go);
  rect(300, -10, b, b);
  pop();
  push(); // ---------- gris claro
  fill(gc);
  rect(180, -110, b, b);
  rect(255, -115, b, b);
  pop();
  push(); // ----------------- blanco
  fill(l);
  rect(170, -295, c, c);
  rect(190, -215, c, c);
  pop();
  pop(); // ----------------------------- fin 4ta capa cuadrados

}