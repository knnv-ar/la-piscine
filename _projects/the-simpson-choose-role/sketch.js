let b = false;

var btnX = 210;

var btnY = 200;
var btnW = 100;
var btnH = 180;
var mode = 0;
var btnX2 = 80;
var btnY2 = 290;
var btnW2 = 120;
var btnH2 = 40;
var btnX3 = 360;
var btnY3 = 290;
var btnW3 = 120;
var btnH3 = 40;

var btnX4 = 100;
var btnY4 = 200;
var btnW4 = 140;
var btnH4 = 40;

var btnX5 = 300;
var btnY5 = 200;
var btnW5 = 140;
var btnH5 = 40;

var btnXa = 280;
var btnYa = 40;
var btnWa = 140;
var btnHa = 60;

var btnX7 = 260;
var btnY7 = 300;
var btnW7 = 80;
var btnH7 = 40;

var btnX8 = 360;
var btnY8 = 300;
var btnW8 = 80;
var btnH8 = 40;

var btnX9 = 260;
var btnY9 = 300;
var btnW9 = 80;
var btnH9 = 40;

var btnX10 = 360;
var btnY10 = 300;
var btnW10 = 80;
var btnH10 = 40;

var btnX11 = 20;
var btnY11 = 300;
var btnW11 = 80;
var btnH11 = 40;
var btnX12 = 495;
var btnY12 = 46;
var btnW12 = 55;
var btnH12 = 55;

var btnX13 = 380;
var btnY13 = 280;
var btnW13 = 140;
var btnH13 = 40;
var mode = 0;

var m;

function setup() {
  let canvas = createCanvas(540, 350);
  canvas.parent('div-sketch');
}
function preload() {
  t = loadImage("estrellas.gif");
  tr = loadImage("estrella1.gif");
  mjt = loadImage("lisa.png");
  ht = loadImage("h.png");
  ah = loadImage("barthp.png");
  am = loadImage("lisaart.png");
  ojo = loadImage("ojo.png");
  ojo2 = loadImage("ojo-c.png");
  edificio = loadImage("paisaje.png");
  puerta = loadImage("puerta.jpeg");
  graf = loadImage("graff.jpeg");
  graf1 = loadImage("graff2.png");
  ojoro = loadImage("ojo-ro.png");

  fon = loadImage("2.jpg");
  ojor = loadImage("ojor.png");

  p = loadImage("play.png");
  n = loadImage("sp.jpg");
  ali = loadImage("al.png");
  per = loadImage("per.png");
  d = loadImage("d-e-n-t-r-o.jpg");
  ar = loadImage("armario.png");
  mu1 = loadImage("lisai.png");
  ho = loadImage("barthi.png");
  c = loadImage("cc.png");
  fn = loadImage("fn.jpg");

  alc = loadImage("sali.png");
  ter = loadImage("traje1.png");
  tern = loadImage("traje2.png");
  ternm = loadImage("lisa.png");
  piz = loadImage("e-s-c-o-g-e.jpg");
  cua = loadImage("cua.png");
  art = loadImage("barthp.png");
  artm = loadImage("lisaart.png");
  g = loadImage("fin.gif");
  m = loadSound("musica.mp3");
  mu = loadImage("musica1.png");

  hym = loadImage("hym.jpg");
}
function draw() {
  m.setVolume(0.1);

  if (mode == 0) {
    //inicio
    mus();

    strokeWeight(10);
    strokeJoin(ROUND);
    //----BOTON

    // image(tr, 250, 0, 0, 0);
    noStroke();

    image(ojo2, random(-20), random(-10), 200, 200);

    image(edificio, 300, 140, 120, 90);

    stroke(50, 5, 0);
    rect(btnX, btnY, btnW, btnH);
    image(puerta, 210, 200, 100, 180);
    ojos();

    fill(220);
    textSize(20);
    textFont("Impact");
    text("PLAY ", 240, 250);

    image(p, 240, 260, 40, 30);

    if (
      mouseX > btnX &&
      mouseX < btnX + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      if (mouseIsPressed) {
        mode = 1;
      }
    }
  } else if (mode == 1) {
    //escoger

    stroke(0, 50, 90);
    fill(0, 50, 100);

    strokeJoin(ROUND);

    image(piz, 0, 0, 0, 0);

    //botones
    rect(btnX2, btnY2, btnW2, btnH2);
    rect(btnX3, btnY3, btnW3, btnH3);

    push();

    fill(220);

    textSize(20);
    textFont("Arial Black");
    text("HUMANO ", 80, 320);
    text("ALIEN ", 380, 320);
    image(ojo, 120, random(-75, -80), 300, 400);

    pop();

    if (
      mouseX > btnX2 &&
      mouseX < btnX2 + btnW2 &&
      mouseY > btnY2 &&
      mouseY < btnY2 + btnH2
    ) {
      if (mouseIsPressed) {
        mode = 2;
      }
    }

    if (
      mouseX > btnX3 &&
      mouseX < btnX3 + btnW3 &&
      mouseY > btnY3 &&
      mouseY < btnY3 + btnH3
    ) {
      if (mouseIsPressed) {
        mode = 3;
      }
    }

    mus();
    text(" ¿Quien eres? ", random(540), random(350));
  }

  if (mode == 2) {
    //humanoopciones
    image(hym, 0, 0, 0, 0);
    image(graf, 200, 10, 120, 100);
    image(graf1, 320, 250, 200, 80);

    push();
    stroke(0, 0, 250);
    fill(0, 0, 0);
    rect(btnX4, btnY4, btnW4, btnH4);
    pop();
    push();
    stroke(250, 0, 0);
    fill(0, 0, 0);
    rect(btnX5, btnY5, btnW5, btnH5);
    pop();
    push();
    fill(220);
    noStroke();
    textSize(20);
    textFont("Impact");
    text("HOMBRE ", 130, 230);
    text("MUJER ", 340, 230);

    pop();
    ojos();

    if (
      mouseX > btnX4 &&
      mouseX < btnX4 + btnW4 &&
      mouseY > btnY4 &&
      mouseY < btnY4 + btnH4
    ) {
      if (mouseIsPressed) {
        mode = 4;
      }
    }

    if (
      mouseX > btnX5 &&
      mouseX < btnX5 + btnW5 &&
      mouseY > btnY5 &&
      mouseY < btnY5 + btnH5
    ) {
      if (mouseIsPressed) {
        mode = 5;
      }
    }
    mus();
  } else if (mode == 3) {
    //alien
    stroke(0);
    fill(0);
    fondo();
    image(alc, 20, 40, 200, 300);
    image(ali, 300, 100, 80, 200);
    rect(btnXa, btnYa, btnWa, btnHa);

    fill(225);
    textSize(10);
    noStroke();
    textFont("Impact");
    text("                    elite", 270, 80);
    text("           llegue a lo más alto", 270, 70);
    ojos();

    if (
      mouseX > btnXa &&
      mouseX < btnXa + btnWa &&
      mouseY > btnYa &&
      mouseY < btnYa + btnHa
    ) {
      if (mouseIsPressed) {
        mode = 10;
      }
    }

    mus();
  }
  if (mode == 4) {
    //hombre ropa y cuarto

    fondo();
    image(ho, 20, 40, 200, 300);

    image(tern, 220, 90, 180, 250);
    image(art, 380, 120, 120, 180);
    stroke(0);
    fill(0);
    rect(btnX7, btnY7, btnW7, btnH7);
    fill(220);
    textSize(10);
    noStroke();
    stroke(220);
    fill(220);
    rect(btnX8, btnY8, btnW8, btnH8);

    texto();
    ojos();

    if (
      mouseX > btnX7 &&
      mouseX < btnX7 + btnW7 &&
      mouseY > btnY7 &&
      mouseY < btnY7 + btnH7
    ) {
      if (mouseIsPressed) {
        mode = 6;
      }
    }

    if (
      mouseX > btnX8 &&
      mouseX < btnX8 + btnW8 &&
      mouseY > btnY8 &&
      mouseY < btnY8 + btnH8
    ) {
      if (mouseIsPressed) {
        mode = 7;
      }
    }

    mus();
  } else if (mode == 5) {
    //mujer ropa y terno
    fondo();
    image(ar, 200, 40, 300, 300);

    image(mu1, 40, 40, 150, 300);

    image(artm, 350, 110, 80, 180);
    image(ternm, 250, 110, 90, 200);
    stroke(0);
    fill(0);
    rect(btnX9, btnY9, btnW9, btnH9);
    stroke(220);
    fill(220);
    rect(btnX10, btnY10, btnW10, btnH10);

    textSize(10);
    noStroke();

    texto();
    ojos();

    if (
      mouseX > btnX9 &&
      mouseX < btnX9 + btnW9 &&
      mouseY > btnY9 &&
      mouseY < btnY9 + btnH9
    ) {
      if (mouseIsPressed) {
        mode = 8;
      }
    }

    if (
      mouseX > btnX10 &&
      mouseX < btnX10 + btnW10 &&
      mouseY > btnY10 &&
      mouseY < btnY10 + btnH10
    ) {
      if (mouseIsPressed) {
        mode = 9;
      }
    }
    mus();
  }
  if (mode == 6) {
    //hombre trabajo
    fondo2();

    image(tern, -350, -150, 800, 900);
    fin();
    fill(200, 0, 0);
    textSize(20);
    noStroke();
    textFont("Segoe script");

    text("      Vive de privilegiar a la elite", 160, 90);
    text("      o puede amar de servir  ", 160, 115);
    text("     a la sociedad  ", 160, 140);
    text("  es esencial el dinero ", 160, 165);
    text(" puede servi de el para compartir  .", 160, 190);
    text(" O satisfacer fines propios  .", 160, 210);

    mus();
    ojos();
  }

  if (mode == 7) {
    fondo2();
    // artista hombre

    image(ah, 0, 20, 600, 500);
    fin();
    mus();

    fill(200, 0, 0);
    textSize(20);
    noStroke();
    textFont("Segoe script");
    text("         Busca crear ", 160, 75);
    text("     una conciente masa", 160, 90);
    text("       o solo querer dinero ", 160, 115);
    text("     se preocupa por  ", 160, 140);
    text(" el bien común , o talvez no ", 160, 165);
    text("      trabajar para el o para alguien mas ", 160, 190);

    ojos();
  }

  if (mode == 8) {
    fondo2();

    //mujer trabajo
    image(mjt, -100, 65, 300, 500);
    fin();

    fill(200, 0, 0);
    textSize(20);
    noStroke();
    textFont("Segoe script");

    text("      Vive de privilegiar a la elite", 160, 90);
    text("      o puede amar de servir  ", 160, 115);
    text("     a la sociedad  ", 160, 140);
    text("  es esencial el dinero ", 160, 165);
    text(" puede servi de el para compartir  .", 160, 190);
    text(" O satisfacer fines propios  .", 160, 210);
    text("  es posible que se le reste merito  .", 160, 230);

    mus();
  }

  if (mode == 9) {
    //artista mujer
    fondo2();

    image(am, 0, 0, 300, 500);
    fin();
    fill(200, 0, 0);
    textSize(20);
    noStroke();
    textFont("Segoe script");
    text("         Busca crear ", 160, 75);
    text("     una conciente masa", 160, 90);
    text("       o solo querer dinero ", 160, 115);
    text("     se preocupa por  ", 160, 140);
    text(" el bien común , o talvez no ", 160, 165);
    text("      trabajar para el o para alguien  ", 160, 190);
    text("       más ; pero es probable", 160, 215);
    text("          nadie la escuche .", 160, 230);

    mus();

    ojos();
  }

  if (mode == 10) {
    //alien  unica opcion

    fondo2();
    image(ali, -20, -20, 300, 400);
    //   image(ter, -30, 180, 350, 600);
    mus();
    fill(200, 0, 0);
    textSize(20);
    noStroke();
    textFont("Segoe script");

    text("       Logro ser el mejor", 160, 90);
    text("       esforzandose o no, ", 160, 115);
    text("      hace uso de su poder, nadie ", 160, 140);
    text("        puede contra él , aunque  ", 160, 165);
    text("          es posible servir de el, ", 160, 190);
    text("              crea nuevos limites ", 160, 215);
    text("          pero sabe lo fragil que son    ", 160, 230);
    fin();
    ojos();
  }

  if (mode == 11) {
    //gamer over

    image(graf, 0, 0, 540, 500);

    fill(220);
    textFont("Segoe Script");
    text("EL FIN ES EL COMIENZO ", 120, 150);
    text("   UN BUCLE INFINITO ", 120, 200);

    fill(10);
    stroke(0);

    rect(btnX13, btnY13, btnW13, btnH13);
    fill(220);
    textFont("Impact");

    text("INICIO ", 420, 310);
    if (
      mouseX > btnX13 &&
      mouseX < btnX13 + btnW13 &&
      mouseY > btnY13 &&
      mouseY < btnY13 + btnH13
    ) {
      if (mouseIsPressed) {
        mode = 0;
      }
    }
  }
  document.oncontextmenu = function () {
    return false;
  };

  ojos();
}

function fin() {
  stroke(0);
  fill(40);
  rect(btnX11, btnY11, btnW11, btnH11);
  textSize(20);
  noStroke();
  fill(240);

  textFont("Impact");
  text("AVANZAR ", 20, 330);

  if (
    mouseX > btnX11 &&
    mouseX < btnX11 + btnW11 &&
    mouseY > btnY11 &&
    mouseY < btnY11 + btnH11
  ) {
    if (mouseIsPressed) {
      mode = 11;
    }
  }
}

function texto() {
  textSize(10);
  noStroke();

  textFont("Impact");
  text("          persona   ", 252, 320);
  text("          común ", 252, 330);

  fill(0);
  textFont("Impact");
  text("               ser un ", 350, 320);
  text("             artista  ", 350, 330);
}

function mus() {
  noStroke();
  fill(225);
  ellipse(btnX12, btnY12, btnW12, btnH12);
  image(mu, 480, 40, 30, 20);
}

function fondo2() {
  image(fn, 0, 0, 0, 0);

  image(ojoro, 220, 250, 200, 100);

  image(ojoro, 270, 70, 400, 400);
}

function fondo() {
  background(10);

  image(ojor, 0, 0, 0, 0);
  // image(d, 0, 0, 0, 0);

  image(ar, 200, 40, 300, 300);
}

function ojos() {
  noStroke();
  fill(210);

  fill(225);
  ellipse(btnX12, btnY12, btnW12, btnH12);
  image(mu, 480, 40, 30, 20);
  image(ojo, random(1000), random(1000), 150, 75);
}

function mousePressed() {
  if (
    mouseX > btnX12 &&
    mouseX < btnX12 + btnW12 &&
    mouseY > btnY12 &&
    mouseY < btnY12 + btnH12
  ) {
    if (b == false && mouseButton == LEFT) {
      m.loop();
      b = true;
    } else if (mouseButton == LEFT && b == true) {
      m.pause();
      b = false;
    }
  }
}
