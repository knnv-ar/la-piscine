// Alumno : Yofrel Rojas
// Artes multimediales TN

var imageIndex = 0;
var instalacion = [];
var inicio = [];
var constelacion = [];
var escenario = [];
var ubicuidad = [];
var ropa = [];
var profundidad = 0;
var numero = 0;
var numero1 = 0;
var cancion, cancion2, cancion3, r, g, b, r1, g1, b1, pelota, pelota1;
var song = false;
var song1 = false;
var x = [0, 0, 0];
var s = [10, 10, 10];


function preload() {
  for (i = 1; i < 7; i++) {
    inicio[i] = loadImage("inicio/dados" + i + ".png");
  }
  for (j = 0; j < 8; j++) {
    escenario[j] = loadImage("escenario/escenario" + j + ".jpg");
  }
  for (k = 0; k < 9; k++) {
    instalacion[k] = loadImage("instalacion/instalacion" + k + ".png");
  }
  for (l = 0; l < 3; l++) {
    constelacion[l] = loadImage("constelacion/constelacion" + l + ".jpg");
  }
  for (m = 0; m < 6; m++) {
    ubicuidad[m] = loadImage("ubicuidad/iconos" + m + ".jpg");
  }
  for (n = 0; n < 8; n++) {
    ropa[n] = loadImage("ropa/ropa" + n + ".jpg");
  }

  suelo = loadImage("escenario8.jpg");
  tras = loadImage("escenario9-1.jpg");
  cancion = loadSound("musica/cancion1.mp3");
  cancion2 = loadSound("musica/cancion2.mp3");
  cancion3 = loadSound("musica/cancion3.mp3");


}

function setup() {

  let canvas = createCanvas(1000, 1000, WEBGL);
  canvas.parent('div-sketch');

}

function draw() {

  push();
  background(0);

  push();
  translate(-800, 20, profundidad);
  x[0] = x[0] - s[0];
  translate(-x[0], -390);
  texture(inicio[3]);
  box(220, 110, 100);

  translate(-260, 0, profundidad);
  texture(inicio[2]);
  box(220, 110, 100);

  translate(-260, 0, profundidad);
  texture(inicio[1]);
  box(220, 110, 100);

  translate(270, 650, profundidad);
  texture(inicio[6]);
  box(320, 210, 200);

  if (x[0] == -1050) {
    s[0] = 0;
  }

  pop();

  push();
  translate(-1000, 0, profundidad);
  x[1] = x[1] - s[1];
  translate(x[1], -390);

  translate(1710, 350, profundidad);
  texture(inicio[4]);
  box(280, 180, 100);

  translate(410, 0, profundidad);
  texture(inicio[5]);
  box(280, 180, 100);

  if (x[1] == -920) {
    s[1] = 0;
  }
  pop();

  if ((x[0] == -1050) && (x[1] == -920)) {
    if (mouseX > 102 && mouseX < 329 && mouseY > 53 && mouseY < 165 && mouseIsPressed) {
      profundidad = -5000;
      escenariof();
      if (song == false) {
        cancion.play();
        song = true;
      }
    } else {
      profundidad = 0;
      numero = 0;
      if (song == true) {
        cancion.stop();
        song = false;
      }
    }
    if (mouseX > 378 && mouseX < 600 && mouseY > 53 && mouseY < 165 && mouseIsPressed) {
      profundidad = -5000;
      instalacionf();
    }
    if (mouseX > 650 && mouseX < 876 && mouseY > 53 && mouseY < 165 && mouseIsPressed) {
      profundidad = -15000;
      constelacionf();
    }
    if (mouseX > 137 && mouseX < 422 && mouseY > 372 && mouseY < 550 && mouseIsPressed) {
      profundidad = -5000;
      if (song1 == false) {
        cancion2.play();
        song1 = true;
      }
      ubicuidadf();
    } else {
      if (song1 == true) {
        cancion2.stop();
        song1 = false;
      }
    }
    if (mouseX > 566 && mouseX < 852 && mouseY > 372 && mouseY < 550 && mouseIsPressed) {
      profundidad = -5000;
      azarf();
    }
    if (mouseX > 330 && mouseX < 665 && mouseY > 705 && mouseY < 930 && mouseIsPressed) {
      profundidad = -5000;
      ultimof();
    }
  }
  pop();

}

function publico(dato1, dato2) {

  push();
  noStroke();
  translate(dato1, 40, dato2);

  texture(escenario[3]);
  translate(0, 130);
  sphere(40);

  translate(0, 45);
  texture(ropa[6]);
  cylinder(15, 50);

  translate(0, 45);
  cylinder(35, 90);

  translate(-15, 90);
  cylinder(14, 90);

  translate(35, 0);
  cylinder(14, 90);

  translate(-55, -93, 30);
  rotateX(-12);
  cylinder(10, 90);

  translate(105, -40, 20);
  rotateY(23);
  rotateX(-11);
  cylinder(10, 90);
  pop();
}

function esferas(dato1, dato2) {

  push();
  translate(dato1, 0, dato2);
  texture(ropa[7]);
  ellipsoid(90, 90, 90);
  pop();
}

function escenariof() {

  frameRate(30);
  r = random(250);
  g = random(250);
  b = random(250);

  numero++;

  if (numero > 60) {
    rotateY(millis() / 900);
    background(r, g, b);
    saltar = 0;
  } else {
    background(0);
    saltar = random(-50, 50);
  }
  if (numero > 120) {
    rotateY(millis() / -900);
    saltar = random(-50, 50);
    background(r, g, b);

  }

  translate(0, -150, 950);

  //bafles principales

  push();
  texture(escenario[4]);
  translate(-406, 185, -100); //1
  box(125, 150, 100);

  translate(125, 0);
  box(125, 150, 100); //2

  translate(113, -75);
  box(100, 300, 100) //3

  translate(340, 0);
  box(100, 300, 100); //4

  translate(113, 75);
  box(125, 150, 100); //5

  translate(125, 0);
  box(125, 150, 100); //6

  translate(-410, -275);
  box(450, 100, 100);
  pop();

  //bafles grandes 

  push();
  translate(-350, -140, -100);
  texture(escenario[7]);
  box(250, 500, 100);

  translate(705, 0, 0);
  box(250, 500, 100);

  translate(-360, 400, -200);
  texture(escenario[1]);
  box(1350, 30, 1500);
  pop();

  //Cantante
  push();
  noStroke();
  translate(-50, -110, -400);

  texture(escenario[3]);
  translate(0, 130);
  sphere(40);


  translate(0, 45);
  texture(escenario[3]);
  cylinder(15, 50);

  texture(escenario[2]);
  translate(0, 45);
  cylinder(35, 90);

  translate(-15, 90);
  cylinder(14, 90);

  translate(35, 0);
  cylinder(14, 90);

  translate(-55, -93, 30);
  rotateX(-12);
  cylinder(10, 90);

  translate(105, -40, 20);
  rotateY(23);
  rotateX(-11);
  cylinder(10, 90);
  pop();
  push();
  //ublico

  translate(0, saltar, 0);
  for (i = -2600; i < 2600; i += 200) {
    for (j = -1250; j > -7500; j -= 530) {
      publico(i, j);
    }
  }
  pop();
  //esferas del techo 
  push();
  translate(-1000, -1000, 1120);
  for (i = -3600; i < 6600; i += 200) {
    for (j = -1250; j > -9500; j -= 400) {
      esferas(i, j);
    }
  }
  pop();

  push();
  translate(0, 400, -1500);
  texture(suelo);
  box(15800, 10, 6000);
  pop();

  push();
  translate(0, 400, 0);
  texture(tras);
  box(2500, 3000, 20);
  pop();

}

function instalacionf() {

  push();
  translate(-500, -500);
  background(0);
  frameRate(10);
  image(instalacion[imageIndex], 0, 0);
  imageIndex = (imageIndex + 1) % 8;
  pop();

}

function constelacionf() {

  push();
  numero1++;
  if(numero1>216){
    cancion3.play();
    numero1=0;
  }
  translate(-100, -120, -6000);
  texture(escenario[3]);
  box(8000, 8000, 10);
  pop()
  push();
  noStroke();
  translate(-500, -500);
  frameRate(60);
  shininess(90);
  ambientLight(60);
  pointLight(36, 20, 246, 120, 100, 50);
  specularColor(0, 255, 0);
  pointLight(254, 255, 0, 0, 50, 50);
  specularMaterial(255);
  sphere(180);
  var t = 50;
  translate(0, 0, -1500);
  x[2] = x[2] - s[2];
  translate(0, 0, -x[2]);
  if (x[2] < -2200) {
    x[2] = 0;
    x[2] = x[2] - s[2];
    translate(0, 0, x[2]);
  }

  for (d = 0; d < 10; d++) {
    t += 50;

    translate(500, 500, 0);
    rotateY(frameCount * 0.03);
    rotateX(frameCount * 0.03);
    rotateZ(frameCount * 0.03);

    texture(constelacion[0]);
    box(t, t, 100);
    translate(100, 100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
    translate(100, 100, -100)
    texture(constelacion[2]);
    box(t, t, 100);
    translate(100, 100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
    translate(-100, 100, -100)
    texture(constelacion[0]);
    box(t, t, 100);
    translate(-100, 100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
    translate(-100, 100, -100)
    texture(constelacion[2]);
    box(t, t, 100);
    translate(-100, -100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
    translate(-100, -100, -100)
    texture(constelacion[0]);
    box(t, t, 100);
    translate(-100, -100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
    translate(100, -100, -100)
    texture(constelacion[2]);
    box(t, t, 100);
    translate(150, -100, -100)
    texture(constelacion[1]);
    box(t, t, 100);
  }

  pop();

}

function ubicuidadf() {

  push();
  r = random(10, 50);
  g = random(10, 50);
  b = random(10, 50);
  frameRate(40);
  background(r, g, b);
  pelota = 25;
  translate(-30, 0, 200);
  push();

  for (e = 0; e < 10; e++) {

    pelota += 10;

    noStroke();

    rotateZ(millis() / 1000);

    texture(ubicuidad[0]);
    box(70, 70, 70);

    translate(-100, -100, -100);
    texture(ubicuidad[1]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[2]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[3]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[4]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[5]);
    sphere(pelota);
  }
  pop();
  push();
  pelota = 25;
  for (e = 0; e < 10; e++) {

    pelota += 10;

    noStroke();

    rotateZ(millis() / -1000);

    texture(ubicuidad[0]);
    box(70, 70, 70);

    translate(-100, -200, -100);
    texture(ubicuidad[1]);
    sphere(pelota);

    translate(-100, -200, -100);
    texture(ubicuidad[2]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[3]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[4]);
    sphere(pelota);

    translate(-100, -100, -100);
    texture(ubicuidad[5]);
    sphere(pelota);
  }
  pop();

  pop();
}

function azarf() {
  ubicuidadf();
  constelacionf();
}

function ultimof() {
  r = random(250);
  g = random(250);
  b = random(250);
  r1 = random(50);
  g1 = random(50);
  b1 = random(50);
  background(r, g, b);
  frameRate(50)
  translate(-500, -500)
  for (f = random(100); f < 10000; f += 20) {
    var grosor = random(20);
    strokeWeight(grosor);
    stroke(r1, g1, b1);
    line(f, random(1000), f, random(1000));
    line(random(1000), f, random(1000), f);
  }
}

document.oncontextmenu = function() {
  return false;
}
