let img;
let frame = 0;

var x01 = 540;
var x02 = 540;
var x03 = 540;
var x04 = 540;
var x05 = 540;
var x06 = 540;
var x07 = 540;
var x08 = 540;
var x09 = 540;
var x10 = 540;
var x11 = 540;
var x12 = 540;
var x13 = 540;
var x14 = 540;
var x15 = 540;
var x16 = 540;
var y01 = 540;
var y02 = 540;
var y03 = 540;
var y04 = 540;
var y05 = 540;
var y06 = 540;
var y07 = 540;
var y08 = 540;
var y09 = 540;
var y10 = 540;
var y11 = 540;
var y12 = 540;
var y13 = 540;
var y14 = 540;
var y15 = 540;
var y16 = 540;
var destx01 = 540;
var destx02 = 540;
var destx03 = 540;
var destx04 = 540;
var destx05 = 540;
var destx06 = 540;
var destx07 = 540;
var destx08 = 540;
var destx09 = 540;
var destx10 = 540;
var destx11 = 540;
var destx12 = 540;
var destx13 = 540;
var destx14 = 540;
var destx15 = 540;
var destx16 = 540;
var desty01 = 540;
var desty02 = 540;
var desty03 = 540;
var desty04 = 540;
var desty05 = 540;
var desty06 = 540;
var desty07 = 540;
var desty08 = 540;
var desty09 = 540;
var desty10 = 540;
var desty11 = 540;
var desty12 = 540;
var desty13 = 540;
var desty14 = 540;
var desty15 = 540;
var desty16 = 540;
var easing = 0.1;
var orden = 1;
var angulo = 0;

function preload() {
  img = loadImage('images/03.jpg');
}

function setup() {
  let canvas = createCanvas(1080, 1080);
  canvas.parent('div-sketch');
  background(0);
  noStroke();
}

function draw() {
  frameRate(30);
  intro();

  if (frame >= 250) {
    interactividad();
  }

  
  
  


//////////////////////////////////////////////////////////////////////
//                              CICLOS
//  console.log(frame);
  frame += 1;  
}

//////////////////////////////////////////////////////////////////////
//                              PIEZAS

  function imagen () {
    image(img, 0, 0);
  }

  function triCaballo () {
    triangle(520,315,377,1080,-200,1080);
  }

  function triSombrero () {
    triangle(734,141,997,270,569,379);
  }

  function triCapa () {
    triangle(-2,33,218,604,1082,412);
  }

  function triHocico () {
    triangle(172,376,80,418,147,454);
  }

  function triCuello () {
    triangle(616,422,734,432,626,540);
  }

  function triPierna () {
    triangle(584,844,543,1080,236,1080);
  }

  function triMano () {
    triangle(547,652,699,667,671,815);
  }

  function cirCapa () {
    ellipse(832,815,324,324);
  }

  function cirMano1 () {
    ellipse(456,115,34,34);
  }

  function cirMano2 () {
    ellipse(439,76,28,28);
  }

  function cirSombrero () {
    ellipse(813,200,80,80);
  }

  function cirCaballo1 () {
    ellipse(349,311,42,42);
  }

  function cirCaballo2 () {
    ellipse(115,303,42,42);
  }

  function cirOjo () {
    fill(3, 23, 22);
    arc(766,324,42,42,0,27.78, CHORD);
    fill(232, 215, 199);
    arc(766,324,42,42,27.78,31.39, CHORD);
  }

  function cuaSombrero () {
    quad(797,189,792,273,820,278,824,192);
  }

  function cuaBrazo () {
    quad(699,667,681,762,861,790,904,688);
  }

  function fondo () {
    background(99,99,87);
  }

  function triFondo () {
    fill(118,114,102);
    triangle(0,0,1380,0,0,411);
  }

  function linCaballo () {
    line(349,311,115,303);
  }


  function intro () {
//////////////////////////////////////////////////////////////////////
//                         INTRO ANIMADA
  
    //// COLORES
  let crema = color(232, 215, 199);
  let rojo = color(193, 55, 29);
  let azul = color(15, 74, 88);
  let amarillo = color(205, 149, 62);
  let gris = color(3, 23, 22);
  let negro = color(0);
  let blanco = color(255);
    
    if (frame < 33) {
    imagen();
  }
  
  if (frame >= 33 && frame <= 34) {
    imagen();
    fill(crema);
    triCaballo();
  }
  
  if (frame == 35) {
    imagen();
    fill(gris);
    triCuello();
  }

  if (frame == 36 || frame == 37) {
    imagen();
    fill(gris);
    triCuello();
    fill(rojo);
    cirCapa();
  }

  if (frame == 38) {
    imagen();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
  }

  if (frame == 39) {
    imagen();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }

  if (frame == 40) {
    imagen();
    fill(azul);
    triSombrero();
    fill(amarillo);
    cirMano2();
  }

  if (frame == 41) {
    imagen();
    fill(amarillo);
    cirMano2();
  }

  if (frame == 42  || frame == 43  || frame == 44) {
    imagen();
    fill(amarillo);
    triMano();
    triPierna();
  }

  if (frame == 45) {
    imagen();
    fill(amarillo);
    cirMano2();
  }

  if (frame == 46) {
    imagen();
    fill(amarillo);
    cirMano2();
    fill(crema);
    triCaballo();
  }

  if (frame == 47) {
    imagen();
    fill(crema);
    triCaballo();
  }

  if (frame == 48 || frame == 49) {
    imagen();
    fill(crema);
    triCaballo();
    fill(gris);
    triCuello();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
  }

  if (frame == 50) {
    imagen();
    fill(crema);
    triCaballo();
    fill(gris);
    triCuello();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(rojo);
    cirCapa();
  }

  if (frame == 51) {
    imagen();
    fill(gris);
    triCuello();
    triHocico();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
  }

  if (frame == 52) {
    imagen();
    fill(gris);
    triCuello();
    triHocico();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }

  if (frame == 53) {
    imagen();
    fill(amarillo);
    cirMano2();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }
  
  if (frame == 54 || frame == 55) {
    imagen();
    fill(amarillo);
    cirMano2();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }
  
  
  if (frame == 56) {
    imagen();
    fill(amarillo);
    triPierna();
    triMano();
    cirMano2();
    fill(azul);
    triSombrero();
  }

  if (frame == 57) {
    imagen();
    fill(amarillo);
    triPierna();
    triMano();
    cirMano2();
  }

  if (frame == 58) {
    imagen();
    triFondo();
    fill(amarillo);
    triPierna();
    triMano();
    cirMano1();
  }

  if (frame == 59) {
    imagen();
    triFondo();
    fill(rojo);
    triCapa();
    fill(gris);
    cirCaballo2();
    fill(amarillo);
    triPierna();
    triMano();
    cirMano1();
  }

  if (frame == 60 || frame == 61) {
    imagen();
    triFondo();
    fill(rojo);
    triCapa();
    fill(gris);
    cirCaballo2();
    fill(amarillo);
    cirMano1();
    fill(crema);
    triCaballo();
  }

  if (frame == 62) {
    imagen();
    triFondo();
    fill(amarillo);
    cirMano1();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
  }

  if (frame == 63) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    triCuello();
  }

  if (frame == 64) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    triCuello();
    triHocico();
    fill(rojo);
    cirCapa();
  }

  if (frame == 65) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    fill(gris);
    triCuello();
    cirCaballo1();
    triHocico();
  }

  if (frame == 66 || frame == 67) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(gris);
    triCuello();
    cirCaballo1();
    triHocico();
  }

  if (frame == 68) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(gris);
    triCuello();
    triHocico();
    fill(amarillo);
    cirMano2();
  }

  if (frame == 69) {
    imagen();
    triFondo();
    fill(crema);
    triCaballo();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(gris);
    triCuello();
    fill(amarillo);
    cirMano2();
  }

  if (frame == 72 || frame == 73) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(crema);
    triCaballo();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(gris);
    triCuello();
    cirCaballo2();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
  }
  
  if (frame == 74 || frame == 75) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(gris);
    triCuello();
    cirCaballo2();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
  }
  
  if (frame == 76) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo2();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
  }
  
  if (frame == 77) {
    fondo();
    triFondo();
    fill(azul);
    cuaBrazo();
    triSombrero();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
  }
  
  if (frame == 78 || frame  == 79) {
    fondo();
    triFondo();
    fill(azul);
    triSombrero();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2;
  }

  if (frame == 80) {
    fondo();
    triFondo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2;
    fill(rojo);
    cirCapa();
  }

  if (frame == 81) {
    fondo();
    triFondo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2;
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
  }

  if (frame == 82) {
    fondo();
    triFondo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2;
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }

  if (frame == 83 || frame == 84 || frame == 85) {
    fondo();
    triFondo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(amarillo);
    cirMano1();
    cirMano2();
    fill(gris);
    triHocico();
    triCuello();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }
  
  if (frame == 86) {
    fondo();
    triFondo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(gris);
    triHocico();
    triCuello();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano2();
    triPierna();
    triMano();
  }

  if (frame == 87) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(crema);
    triCaballo();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2();
  }

  if (frame == 88) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2();
  }

  if (frame == 89) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    triCuello();
    cirCaballo2();
  }

  if (frame == 90 || frame == 91) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    triHocico();
    cirCaballo2();
    fill(crema);
    triCaballo();
  }

  if (frame == 92) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    cirCaballo2();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
  }

  if (frame == 93) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    fill(azul);
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triCuello();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
  }

  if (frame == 94) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    cirCapa();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triCuello();
    triHocico();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
  }

  if (frame == 95) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    cirCapa();
    fill(amarillo);
    cirMano1();
    triPierna();
    triMano();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triCuello();
    triHocico();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(azul);
    cuaBrazo();
  }

  if (frame == 96 || frame == 97) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    cirCapa();
    fill(amarillo);
    cirMano1();
    triPierna();
    triMano();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triCuello();
    triHocico();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }
  
  if (frame == 98 || frame == 99) {
    fondo();
    triFondo();
    fill(rojo);
    triCapa();
    cirCapa();
    fill(amarillo);
    cirMano1();
    cirMano2();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triCuello();
    triHocico();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(azul);
    cuaBrazo();
    triSombrero();
  }

  if (frame == 100 || frame == 101) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    fill(gris);
    cirCaballo1();
    triCuello();
    triHocico();
    fill(crema);
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano2();
    triPierna();
    triMano();
  }

  if (frame == 102 || frame == 103) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    triHocico();
    cirCaballo1();
    cirCaballo2();
    triCuello();
    fill(crema);
    triCaballo();
  }
  
  if (frame == 104 || frame == 105) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    fill(gris);
    triHocico();
    cirCaballo1();
    cirCaballo2();
    triCuello();
    fill(crema);
    triCaballo();
  }  

  if (frame == 106 || frame == 107) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo2();
    triCuello();
    fill(crema);
    triCaballo();
  }
  
  if (frame >= 108 && frame <= 113) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();
  }
  
  if (frame >= 114 && frame <= 116) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();
  }

  if (frame >= 114 && frame <= 121) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();
  }

  if (frame == 122) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    noStroke();
  }

  if (frame == 123) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    noStroke();
  }

  if (frame == 124) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCuello();
    noStroke();
  }

  if (frame == 125) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCuello();
    cirCapa();
    noStroke();
  }

  if (frame == 126 || frame == 127) {
    background(0);

    stroke(blanco);
    strokeWeight(2);
    noFill();
    cirCapa();
    cuaBrazo();
    noStroke();
  }

  if (frame == 128) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triSombrero();
    cuaBrazo();
    noStroke();
  }
  
  if (frame == 129) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triSombrero();
    cirMano2();
    noStroke();
  }
  
  if (frame == 130) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    cirMano2();
    noStroke();
  }
  
  if (frame == 131 || frame == 133) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    noStroke();
  }
  
  if (frame == 134) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    cirMano1();
    noStroke();
  }
  
  if (frame == 135) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    cirMano1();
    triCaballo();
    noStroke();
  }
  
  if (frame == 137) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    noStroke();
  }
  
  if (frame == 138) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    noStroke();
  }
  
  if (frame == 139) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    cirCapa();
    noStroke();
  }
  
  if (frame == 140) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triHocico();
    triCuello();
    cuaBrazo();
    cirCapa();
    noStroke();
  }
  
  if (frame == 141) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triHocico();
    triCuello();
    cuaBrazo();
    cirCapa();
    triSombrero();
    noStroke();
  }
  
  if (frame == 142) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triSombrero();
    cirMano2();
    cirCapa();
    cuaBrazo();
    noStroke();
  }
  
  if (frame == 143) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triSombrero();
    cirMano2();
    cuaBrazo();
    noStroke();
  }
  
  if (frame == 144 || frame == 145) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triSombrero();
    triPierna();
    triMano();
    cirMano2();
    noStroke();
  }
  
  if (frame == 146) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano2();
    noStroke();
  }
  
  if (frame == 147) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano2();
    noStroke();
  }
  
  if (frame == 148) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirCaballo2();
    triCapa();
    noStroke();
  }
  
  if (frame == 149) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    cirMano1();
    cirCaballo2();
    triCapa();
    noStroke();
  }
  
  if (frame == 150 || frame == 151) {
    fondo();
    triFondo();
    fill(rojo);
    cirCapa();
    triCapa();
    fill(azul);
    cuaBrazo();
    triSombrero();
    fill(amarillo);
    cirMano1();
    cirMano2();
    triPierna();
    triMano();
    triCaballo();
    strokeWeight(10);
    stroke(crema);
    linCaballo();
    noStroke();
    fill(gris);
    cirCaballo1();
    cirCaballo2();
    triHocico();
    triCuello();
    fill(crema);
    triCaballo();

    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    cirMano1();
    noStroke();
  }
  
  if (frame == 152) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    linCaballo();
    noStroke();
  }
  
  if (frame == 153) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    linCaballo();
    triHocico();
    cirCapa();
    noStroke();
  }
  
  if (frame == 154) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    linCaballo();
    triHocico();
    cirCapa();
    cuaBrazo();
    cirCaballo1();
    noStroke();
  }
  
  if (frame == 155) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    triHocico();
    cirCapa();
    cuaBrazo();
    cirCaballo1();
    triSombrero();
    noStroke();
  }
  
  if (frame == 156 || frame == 157) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    triHocico();
    cirCapa();
    cuaBrazo();
    cirMano2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 158) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    cirCapa();
    cuaBrazo();
    cirMano2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 159 || frame == 160) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    triPierna();
    triMano();
    cirCapa();
    cuaBrazo();
    cirMano2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 161) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    triCuello();
    triPierna();
    triMano();
    cirCapa();
    cuaBrazo();
    cirMano1();
    cirMano2();
    triCapa();
    cirCaballo2();
    triSombrero();
    noStroke();
  }
  
  if (frame >= 162 && frame <= 164) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCuello();
    triPierna();
    triMano();
    cirCapa();
    cuaBrazo();
    cirMano1();
    cirMano2();
    triCapa();
    cirCaballo2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 165) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirCapa();
    cuaBrazo();
    cirMano1();
    cirMano2();
    triCapa();
    cirCaballo2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 166) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cuaBrazo();
    cirMano1();
    cirMano2();
    triSombrero();
    noStroke();
  }
  
  if (frame == 167) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    triCuello();
    triHocico();
    cirCaballo1();
    noStroke();
  }
  
  if (frame == 168 || frame == 169) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    cirCapa();
    triCuello();
    triHocico();
    cirCaballo1();
    noStroke();
  }
  
  if (frame == 170) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    cuaBrazo();
    cirCapa();
    triCuello();
    triHocico();
    cirCaballo1();
    noStroke();
  }
  
  if (frame == 171) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triCuello();
    triHocico();
    cirCaballo1();
    noStroke();
  }
  
  if (frame == 172 || frame == 173) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triCuello();
    triHocico();
    noStroke();
  }
  
  if (frame == 174 || frame == 175) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triMano();
    triPierna();
    triCuello();
    triHocico();
    noStroke();
  }
  
  if (frame == 176) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triCaballo();
    linCaballo();
    triPierna();
    triMano();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triMano();
    triPierna();
    triCuello();
    triHocico();
    triCapa();
    cirCaballo2();
    noStroke();
  }
  
  if (frame == 177) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    linCaballo();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triMano();
    triPierna();
    triCuello();
    triHocico();
    triCapa();
    cirCaballo2();
    noStroke();
  }
  
  if (frame == 178) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triMano();
    triPierna();
    triCuello();
    triHocico();
    triCapa();
    cirCaballo2();
    noStroke();
  }

  if (frame == 179) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    cuaBrazo();
    cirCapa();
    triMano();
    triPierna();
    triHocico();
    triCapa();
    cirCaballo2();
    noStroke();
  }

  if (frame == 180 || frame == 181) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    cuaBrazo();
    triMano();
    triPierna();
    triCapa();
    cirCaballo2();
    linCaballo();
    noStroke();
  }

  if (frame == 182) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triSombrero();
    triMano();
    triPierna();
    triCapa();
    cirCaballo1();
    cirCaballo2();
    linCaballo();
    noStroke();
  }

  if (frame == 183) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    cirMano2();
    triHocico();
    triMano();
    triPierna();
    triCapa();
    cirCaballo1();
    cirCaballo2();
    linCaballo();
    noStroke();
  }

  if (frame == 184 || frame == 185) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triPierna();
    triMano();
    cirMano1();
    triHocico();
    triMano();
    triPierna();
    triCapa();
    cirCaballo1();
    cirCaballo2();
    linCaballo();
    noStroke();
  }

  if (frame >= 186 && frame <= 188) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    cirMano1();
    triHocico();
    triCapa();
    cirCaballo1();
    cirCaballo2();
    linCaballo();
    noStroke();
  }

  if (frame >= 189 && frame <= 191) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triHocico();
    cirCaballo1();
    linCaballo();
    noStroke();
  }

  if (frame >= 192 && frame <= 194) {
    background(0);
    stroke(blanco);
    strokeWeight(2);
    noFill();
    triHocico();
    cirCaballo1();
    noStroke();
  }

  if (frame == 195) {
    background(0);
  }
   
}

function mouseClicked() {
  orden++;
}

  function interactividad () {
      if (orden == 1) {
        destx01 = 540;
        destx02 = 540;
        destx03 = 540;
        destx04 = 540;
        destx05 = 540;
        destx06 = 540;
        destx07 = 540;
        destx08 = 540;
        destx09 = 540;
        destx10 = 540;
        destx11 = 540;
        destx12 = 540;
        destx13 = 540;
        destx14 = 540;
        destx15 = 540;
        destx16 = 540;
        
        desty01 = 540;
        desty02 = 540;
        desty03 = 540;
        desty04 = 540;
        desty05 = 540;
        desty06 = 540;
        desty07 = 540;
        desty08 = 540;
        desty09 = 540;
        desty10 = 540;
        desty11 = 540;
        desty12 = 540;
        desty13 = 540;
        desty14 = 540;
        desty15 = 540;
        desty16 = 540;
      }
      else if (orden == 2) {
        destx01 = 180;
        destx02 = 228;
        destx03 = 276;
        destx04 = 324;
        destx05 = 372;
        destx06 = 420;
        destx07 = 468;
        destx08 = 516;
        destx09 = 564;
        destx10 = 612;
        destx11 = 660;
        destx12 = 756;
        destx13 = 708;
        destx14 = 804;
        destx15 = 852;
        destx16 = 900;
        
        desty01 = 540;
        desty02 = 540;
        desty03 = 540;
        desty04 = 540;
        desty05 = 540;
        desty06 = 540;
        desty07 = 540;
        desty08 = 540;
        desty09 = 540;
        desty10 = 540;
        desty11 = 540;
        desty12 = 540;
        desty13 = 540;
        desty14 = 540;
        desty15 = 540;
        desty16 = 540;
      }
      else if (orden == 3) {
        destx01 = 430;
        destx02 = 503;
        destx03 = 577;
        destx04 = 650;
        destx05 = 430;
        destx06 = 503;
        destx07 = 577;
        destx08 = 650;
        destx09 = 430;
        destx10 = 503;
        destx11 = 577;
        destx12 = 650;
        destx13 = 430;
        destx14 = 503;
        destx15 = 577;
        destx16 = 650;
        
        desty01 = 430;
        desty02 = 430;
        desty03 = 430;
        desty04 = 430;
        desty05 = 503;
        desty06 = 503;
        desty07 = 503;
        desty08 = 503;
        desty09 = 577;
        desty10 = 577;
        desty11 = 577;
        desty12 = 577;
        desty13 = 650;
        desty14 = 650;
        desty15 = 650;
        desty16 = 650;
      }
      else if (orden == 4) {
        destx01 = random(30, 1050);
        destx02 = random(30, 1050);
        destx03 = random(30, 1050);
        destx04 = random(30, 1050);
        destx05 = random(30, 1050);
        destx06 = random(30, 1050);
        destx07 = random(30, 1050);
        destx08 = random(30, 1050);
        destx09 = random(30, 1050);
        destx10 = random(30, 1050);
        destx11 = random(30, 1050);
        destx12 = random(30, 1050);
        destx13 = random(30, 1050);
        destx14 = random(30, 1050);
        destx15 = random(30, 1050);
        destx16 = random(30, 1050);
        
        desty01 = random(30, 1050);
        desty02 = random(30, 1050);
        desty03 = random(30, 1050);
        desty04 = random(30, 1050);
        desty05 = random(30, 1050);
        desty06 = random(30, 1050);
        desty07 = random(30, 1050);
        desty08 = random(30, 1050);
        desty09 = random(30, 1050);
        desty10 = random(30, 1050);
        desty11 = random(30, 1050);
        desty12 = random(30, 1050);
        desty13 = random(30, 1050);
        desty14 = random(30, 1050);
        desty15 = random(30, 1050);
        desty16 = random(30, 1050);
      }
      else if (orden >= 5) {
        orden = 1;
        destx01 = 540;
        destx02 = 540;
        destx03 = 540;
        destx04 = 540;
        destx05 = 540;
        destx06 = 540;
        destx07 = 540;
        destx08 = 540;
        destx09 = 540;
        destx10 = 540;
        destx11 = 540;
        destx12 = 540;
        destx13 = 540;
        destx14 = 540;
        destx15 = 540;
        destx16 = 540;
        
        desty01 = 540;
        desty02 = 540;
        desty03 = 540;
        desty04 = 540;
        desty05 = 540;
        desty06 = 540;
        desty07 = 540;
        desty08 = 540;
        desty09 = 540;
        desty10 = 540;
        desty11 = 540;
        desty12 = 540;
        desty13 = 540;
        desty14 = 540;
        desty15 = 540;
        desty16 = 540;
      }
      
      x01 += (destx01 - x01) * easing;
      x02 += (destx02 - x02) * easing;
      x03 += (destx03 - x03) * easing;
      x04 += (destx04 - x04) * easing;
      x05 += (destx05 - x05) * easing;
      x06 += (destx06 - x06) * easing;
      x07 += (destx07 - x07) * easing;
      x08 += (destx08 - x08) * easing;
      x09 += (destx09 - x09) * easing;
      x10 += (destx10 - x10) * easing;
      x11 += (destx11 - x11) * easing;
      x12 += (destx12 - x12) * easing;
      x13 += (destx13 - x13) * easing;
      x14 += (destx14 - x14) * easing;
      x15 += (destx15 - x15) * easing;
      x16 += (destx16 - x16) * easing;
    
      y01 += (desty01 - y01) * easing;
      y02 += (desty02 - y02) * easing;
      y03 += (desty03 - y03) * easing;
      y04 += (desty04 - y04) * easing;
      y05 += (desty05 - y05) * easing;
      y06 += (desty06 - y06) * easing;
      y07 += (desty07 - y07) * easing;
      y08 += (desty08 - y08) * easing;
      y09 += (desty09 - y09) * easing;
      y10 += (desty10 - y10) * easing;
      y11 += (desty11 - y11) * easing;
      y12 += (desty12 - y12) * easing;
      y13 += (desty13 - y13) * easing;
      y14 += (desty14 - y14) * easing;
      y15 += (desty15 - y15) * easing;
      y16 += (desty16 - y16) * easing;
    
      background(0);
      fill(255);
      noStroke();
      ellipse(x01, y01, 40, 40);
      ellipse(x02, y02, 40, 40);
      ellipse(x03, y03, 40, 40);
      ellipse(x04, y04, 40, 40);
      ellipse(x05, y05, 40, 40);
      ellipse(x06, y06, 40, 40);
      ellipse(x07, y07, 40, 40);
      ellipse(x08, y08, 40, 40);
      ellipse(x09, y09, 40, 40);
      ellipse(x10, y10, 40, 40);
      ellipse(x11, y11, 40, 40);
      ellipse(x12, y12, 40, 40);
      ellipse(x13, y13, 40, 40);
      ellipse(x14, y14, 40, 40);
      ellipse(x15, y15, 40, 40);
      ellipse(x16, y16, 40, 40);

  }



