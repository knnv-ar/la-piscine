let fondo;
let nota1,
  nota2,
  nota3,
  nota4,
  nota5,
  nota6,
  nota7,
  nota8,
  nota9,
  nota10,
  nota11,
  nota12;
let sonido = false;
let pintura = 0;
let xA = 185;
let yA = 159;
let xB = 482;
let yB = 368;
let intro = true;
///////////////////////PRELOAD////////////////////////////////
function preload() {
  fondo = loadImage("imagenes/fondo.jpg");

  nota1 = loadSound("sonidos/do.mp3");
  nota2 = loadSound("sonidos/do#.mp3");
  nota3 = loadSound("sonidos/re.mp3");
  nota4 = loadSound("sonidos/re#.mp3");
  nota5 = loadSound("sonidos/mi.mp3");
  nota6 = loadSound("sonidos/fa.mp3");
  nota7 = loadSound("sonidos/fa#.mp3");
  nota8 = loadSound("sonidos/sol.mp3");
  nota9 = loadSound("sonidos/sol#.mp3");
  nota10 = loadSound("sonidos/la.mp3");
  nota11 = loadSound("sonidos/la#.mp3");
  nota12 = loadSound("sonidos/si.mp3");
}
///////////////////////SETUP//////////////////////////////////
function setup() {
  let canvas = createCanvas(602, 800);
  canvas.parent('div-sketch');
  background(fondo);
  if (intro) {
    paleta();
    fill(0, 0, 0, 200);
    rect(0, 0, width, height);

    push();
    strokeWeight(4);
    stroke(255);
    textSize(25);
    textFont("Helvetica");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Con las teclas elegí el color que quieras", 301, 355);
    text("y dejá volar tu imaginación dentro de las hojas,", 301, 385);
    text("cualquier cosa si te equivocas,", 301, 415);
    text("sólo tenes que apretar borrar", 301, 445);
    pop();

    push();
    strokeWeight(4);
    stroke(255);
    textSize(15);
    textFont("Helvetica");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Enter", 301, 475);
    pop();
  }
}
///////////////////////DRAW///////////////////////////////////
function draw() {
  if (!intro) {
    if (
      mouseIsPressed &&
      mouseX > xA &&
      mouseX < xB &&
      mouseY > yA &&
      mouseY < yB
    ) {
      dibujar();
      sonido = true;
    } else {
      paleta();
    }
  }
}
///////////////////////PALETA////////////////////////////////
function paleta() {
  ///////////////////////COLORES///////////////////////////////
  push();
  strokeWeight(10);
  stroke("#201F1F");

  fill("#000000");
  rect(290, 20, 45, 45);

  fill("#7B7979 ");
  rect(340, 20, 45, 45);

  fill("#FF0000");
  rect(390, 20, 45, 45);

  fill("#FFFF00");
  rect(440, 20, 45, 45);

  fill("#00AEFF");
  rect(490, 20, 45, 45);

  fill("#7C00FF");
  rect(540, 20, 45, 45);

  fill("#FFFFFF");
  rect(290, 70, 45, 45);

  fill("#3F2403");
  rect(340, 70, 45, 45);

  fill("#FF8300");
  rect(390, 70, 45, 45);

  fill("#06C100");
  rect(440, 70, 45, 45);

  fill("#000FFF");
  rect(490, 70, 45, 45);

  fill("#FF00B9");
  rect(540, 70, 45, 45);
  pop();
  ///////////////////////LETRAS////////////////////////////////
  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(290, 20);
  text("A", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(340, 20);
  text("S", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(390, 20);
  text("D", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(440, 20);
  text("F", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(490, 20);
  text("G", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(540, 20);
  text("H", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(290, 70);
  text("Z", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(340, 70);
  text("X", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(390, 70);
  text("C", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(440, 70);
  text("V", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(490, 70);
  text("B", 17, 27);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  textSize(15);
  textFont("Arial");
  textStyle(BOLD);
  translate(540, 70);
  text("N", 17, 27);
  pop();
}
///////////////////TECLA PRESIONADA///////////////////////////
function keyPressed() {
  if (keyCode === ENTER) {
    intro = false;
    background(fondo);
  } else {
    cambiarColor();
  }
}
///////////////////////DIBUJO/////////////////////////////////
function dibujar() {
  push();
  stroke(pintura);
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  pop();
}
///////////////////////PINTURA////////////////////////////////
///////////////////TECLA PRESIONADA///////////////////////////
function cambiarColor() {
  if (key === "a" || key === "A") {
    pintura = color("#000000");
    if (sonido) {
      nota1.loop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "z" || key === "Z") {
    pintura = color("#FFFFFF");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.loop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "s" || key === "S") {
    pintura = color("#7B7979");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.loop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "x" || key === "X") {
    pintura = color("#3F2403");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.loop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "d" || key === "D") {
    pintura = color("#FF0000");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.loop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "c" || key === "C") {
    pintura = color("#FF8300");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.loop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "f" || key === "F") {
    pintura = color("#FFFF00");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.loop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "v" || key === "V") {
    pintura = color("#06C100");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.loop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "g" || key === "G") {
    pintura = color("#00AEFF");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.loop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "b" || key === "B") {
    pintura = color("#000FFF");
    if (sonido) {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.loop();
      nota11.stop();
      nota12.stop();
    }
  } else if (key === "h" || key === "H") {
    pintura = color("#7C00FF");
    if (sonido) {
      if (sonido) {
        nota1.stop();
        nota2.stop();
        nota3.stop();
        nota4.stop();
        nota5.stop();
        nota6.stop();
        nota7.stop();
        nota8.stop();
        nota9.stop();
        nota10.stop();
        nota11.loop();
        nota12.stop();
      }
    } else if (key === "n" || key === "N") {
      pintura = color("#FF00B9");
      if (sonido) {
        nota1.stop();
        nota2.stop();
        nota3.stop();
        nota4.stop();
        nota5.stop();
        nota6.stop();
        nota7.stop();
        nota8.stop();
        nota9.stop();
        nota10.stop();
        nota11.stop();
        nota12.loop();
      }
    } else if (keyCode == BACKSPACE) {
      background(fondo);
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    } else {
      nota1.stop();
      nota2.stop();
      nota3.stop();
      nota4.stop();
      nota5.stop();
      nota6.stop();
      nota7.stop();
      nota8.stop();
      nota9.stop();
      nota10.stop();
      nota11.stop();
      nota12.stop();
    }
  }
}
