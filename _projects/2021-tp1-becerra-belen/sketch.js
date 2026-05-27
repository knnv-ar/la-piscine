//Artes Multimediales 1, Cát. Lacabanne - TPn°1
//Título de la obra: 2 minutos 45 segundos de excusa
//Autora: Belén Becerra

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

var angulo = 0.0;
var angulo1 = 0.0;
var desplazamiento1 = 10;
var escalar1 = 100;
var velocidad1 = 0.0009;

var angulo2 = 0.0;
var desplazamiento2 = 200;
var escalar2 = 50;
var velocidad2 = 0.009;

var angulo3 = 0.0;
var angulo4 = 0.0;

function draw() {
  //FADE GRISES
  var valorSeno = sin(angulo);
  var gris = map(valorSeno, -1, 1, 20, 250);

  var valorSeno1 = sin(angulo3);
  var gris1 = map(valorSeno1, -1, 1, 150, 250);

  var valorSeno2 = sin(angulo4);
  var gris2 = map(valorSeno2, -1, 1, 200, 250);

  background(gris);

  //VARIABLES PARA MOVER LOS EJES
  var y1 = desplazamiento1 + sin(angulo1) * escalar1;
  var y2 = desplazamiento1 + sin(angulo1 + 0.1) * escalar1;
  var y3 = desplazamiento1 + sin(angulo1 + 0.3) * escalar1;
  var y4 = desplazamiento1 + sin(angulo1 + 0.5) * escalar1;
  angulo1 += velocidad1;

  var y5 = desplazamiento2 + sin(angulo2 + 0.1) * escalar2;
  var y6 = desplazamiento2 + sin(angulo2 + 0.7) * escalar2;
  var y7 = desplazamiento2 + sin(angulo2 + 1.0) * escalar2;
  var y8 = desplazamiento2 + sin(angulo2 + 1.3) * escalar2;
  var y9 = desplazamiento2 + sin(angulo2 + 1.5) * escalar2;
  angulo2 += velocidad2;

  //BASE BLANCA CUERDAS FONDO
  for (var i = 0; i <= 200; i++) {
    push(); //----------------------CAPA 1

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.1);

    strokeWeight(5);
    stroke(250);
    line(-10, y8, 900, y5);

    pop(); //----------------------FIN CAPA 1
  }

  //RELLENO FADE GRIS CUERDAS FONDO
  for (var i = 0; i <= 200; i++) {
    push(); //----------------------CAPA 2

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.1);

    strokeWeight(0.5);
    stroke(gris1);
    line(-10, y8, 900, y5);

    pop(); //----------------------FIN CAPA 2
  }

  //LÍNEAS BLANCAS FIJAS CAPA INTERMEDIA
  for (var i = 0; i <= 200; i++) {
    push(); //-------------------------CAPA 3

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.1);

    strokeWeight(5);
    stroke(250);
    line(50, -0, 900, 0);

    pop(); //----------------------FIN CAPA 3
  }

  //LÍNEAS FADE GRIS FIJAS CAPA INTERMEDIA
  for (var i = 0; i <= 200; i++) {
    push(); //-------------------------CAPA 4

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.1);

    strokeWeight(0.5);
    stroke(gris2);
    line(50, 0, 900, 0);

    pop(); //----------------------FIN CAPA 4
  }

  for (var i = 0; i <= 40; i++) {
    push(); //-------------------------CAPA 5

    //CUERDAS DERECHA BASE NEGRA
    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(4);
    stroke(0);
    line(0, y5, y1, y2);

    pop(); //----------------------FIN CAPA 5
  }

  //CUERDAS BLANCAS IZQUIERDA INTERMEDIAS
  for (var i = 0; i <= 50; i++) {
    push(); //------------------------CAPA 6

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(2);
    stroke(250);
    line(0, y5, y1, y2);

    pop(); //---------------------FIN CAPA 6
  }

  //CUERDAS RELLENO IZQUIERDO GRUESO
  for (var i = 0; i <= 40; i++) {
    push(); //------------------------CAPA 7

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(4);
    stroke(0);
    line(512, y5, y1, y2);

    pop(); //---------------------FIN CAPA 7
  }

  for (var i = 0; i <= 10; i++) {
    push(); //------------------------CAPA 8

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(2);
    stroke(250);
    line(512, y5, y1, y2);

    pop(); //---------------------FIN CAPA 8
  }

  //CUERDAS BASE NEGRA IZQUIERDA FRENTE
  for (var i = 0; i <= 40; i++) {
    push(); //------------------------CAPA 9

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(4);
    stroke(0);
    line(0, y5, y3, y2);

    pop(); //---------------------FIN CAPA 9
  }

  ////CUERDAS RELLENO BLANCO IZQUIERDA FRENTE
  for (var i = 0; i <= 50; i++) {
    push(); //-----------------------CAPA 10

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(2);
    stroke(250);
    line(0, y5, y3, y2);

    pop(); //--------------------FIN CAPA 10
  }

  //RELLENO BLANCO INTERMEDIO DERECHO ABAJO
  for (var i = 0; i <= 100; i++) {
    push(); //-----------------------CAPA 11

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(2);
    stroke(250);
    line(512, y5, y1, y2);

    pop(); //--------------------FIN CAPA 11
  }

  //BASE NEGRA CUERDAS DERECHA FRENTE
  for (var i = 0; i <= 100; i++) {
    push(); //-----------------------CAPA 13

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(4);
    stroke(10);
    line(512, y5, y3, y2);

    pop(); //--------------------FIN CAPA 13
  }

  //RELLENO BLANCO CUERDAS DERECHA FRENTE
  for (var i = 0; i <= 100; i++) {
    push(); //-----------------------CAPA 14

    translate(i * 2, i * 2);
    rotate(radians(i * 2));
    scale(i * 0.5);

    strokeWeight(3);
    stroke(250);
    line(512, y5, y3, y2);

    pop(); //--------------------FIN CAPA 14
  }

  angulo += 0.001;
  angulo3 += 0.1;
  angulo4 += 0.05;
}
