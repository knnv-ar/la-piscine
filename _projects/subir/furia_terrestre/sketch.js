let treeX = 6; // posición X inicial del árbol
let treeY = 6; // posición Y inicial del árbol
let treeSize = 1.0; // factor de escala inicial
let growthRate = 0.005; // tasa de crecimiento
let maxSize = 3.0; // tamaño máximo del árbol

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

}

function draw() {
  background(0);

  translate(256, 256);

  //Luna blanca
  //Líneas delgadas de la luna
  noFill();
  stroke(255);
  strokeWeight(0.6);
  circle(20, -170, 96);
  circle(20, -170, 105);
  circle(20, -170, 106);

  noFill();
  stroke(135);
  circle(20, -170, 133);
  circle(20, -170, 140);

  //Líneas circulares gruesas de la luna
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(20, -170, 100);
  circle(20, -170, 100);
  circle(20, -170, 108);
  circle(20, -170, 108);
  circle(20, -170, 118);
  circle(20, -170, 118);

  //Líneas delgadas del cielo
  noFill();
  stroke(100);
  strokeWeight(0.9);
  line(300, -200, -300, -204);
  line(300, -200, -300, -135);
  line(300, -200, -300, -100);
  line(300, -180, -300, -180);
  line(300, -110, -300, -180);
  line(300, -240, -300, -130);
  line(300, -125, -300, -250);
  line(300, -125, -300, -255);


  //Líneas gruesas del cielo
  noFill();
  stroke(239);
  strokeWeight(1);
  line(300, -170, -300, -170);
  line(300, -176, -300, -176);
  line(300, -179, -300, -179);
  line(300, -180, -300, -180);
  line(300, -170, -300, -170);
  line(300, -160, -300, -160);
  line(300, -200, -300, -200);
  line(300, -190, -300, -190);
  line(300, -150, -300, -150);

  //Edificios lejano izq
  stroke(30);
  strokeWeight(2);
  line(-85, -6, -85, 60);
  line(-82, -6, -82, 60);
  line(-79, -6, -79, 60);
  line(-76, -6, -76, 60);
  line(-73, -6, -73, 60);
  //Tercer edificio lejano pequeño izq
  line(-60, 15, -60, 60);
  line(-57, 15, -57, 60);
  line(-54, 15, -54, 60);
  //Cuarto edificio lejano derecho
  line(50, -30, 50, 60);
  line(53, -30, 53, 60);
  line(56, -30, 56, 60);
  line(59, -30, 59, 60);
  line(62, -30, 62, 60);
  line(65, -30, 65, 60);

  //Segundo edificio del fondo
  stroke(130);
  strokeWeight(0.7);
  line(-100, -70, -100, 75);
  line(-105, -70, -105, 75);
  line(-110, -70, -110, 75);
  line(-115, -70, -115, 75);
  line(-120, -70, -120, 75);
  line(-125, -70, -125, 75);
  line(-130, -70, -130, 75);
  line(-135, -70, -135, 75);
  line(-140, -70, -140, 75);

  //Líneas horizontales
  line(-100, 70, -140, 70);
  line(-100, 55, -140, 55);
  line(-100, 40, -140, 40);
  line(-100, 25, -140, 25);
  line(-100, 10, -140, 10);
  line(-100, -5, -140, -5);
  line(-100, -20, -140, -20);
  line(-100, -35, -140, -35);
  line(-100, -50, -140, -50);
  line(-100, -65, -140, -65);

  //Segundo edificio derecho del fondo
  fill(100);
  strokeWeight(0.9);
  line(140, -51, 80, -50);
  line(140, -50, 80, -40);
  line(140, -45, 80, -30);
  line(140, -40, 80, -20);
  line(140, -35, 80, -10);
  line(140, -30, 80, -1);
  line(140, -25, 80, 5);
  line(140, -20, 80, 10);
  line(140, -15, 80, 15);
  line(140, -10, 80, 20);
  line(140, -5, 80, 25);
  line(140, 1, 80, 30);
  line(140, 5, 80, 35);
  line(140, 10, 80, 40);
  line(140, 15, 80, 45);
  line(140, 20, 80, 50);
  line(140, 25, 80, 55);
  line(140, 30, 80, 60);
  line(140, 35, 80, 65);
  line(140, 40, 80, 70);
  line(140, 45, 98, 66);
  line(140, 50, 110, 66);
  line(140, 55, 120, 65);

  //Edificio del fondo al costado izq
  stroke(150);
  strokeWeight(1.5);
  line(-350, -120, -200, -120);
  line(-350, -95, -200, -95);
  line(-350, -70, -200, -70);
  line(-350, -45, -200, -45);
  line(-350, -20, -200, -20);
  line(-350, 5, -200, 5);
  line(-350, 30, -200, 30);
  line(-350, 55, -200, 55);
  line(-350, 80, -200, 80);
  line(-350, 110, -200, 110);

  //Edificio más adelante izq
  stroke(250);
  strokeWeight(3);
  line(-129, -200, -191, -200);
  //Líneas verticales
  stroke(250);
  strokeWeight(1);
  line(-130, -200, -130, 145);
  line(-140, -200, -140, 145);
  line(-150, -200, -150, 145);
  line(-160, -200, -160, 145);
  line(-170, -200, -170, 145);
  line(-180, -200, -180, 145);
  line(-190, -200, -190, 145);

  //Edificio MÁS adelante izq
  stroke(250);
  strokeWeight(1);
  line(-175, -23, -129, 12);
  line(-171, -23, -215, 12);
  line(-130, -23, -215, 50);
  line(-130, 50, -215, -23);
  line(-130, 130, -215, 50);
  line(-130, 50, -215, 130);
  line(-130, 215, -215, 130);
  line(-130, 130, -215, 213);
  line(-130, 295, -215, 213);
  line(-130, 215, -215, 296);

  stroke(250);
  strokeWeight(1);
  line(-130, 10, -215, 90);
  line(-130, 175, -215, 90);
  line(-130, 175, -215, 257);

  //Tercera fila de líneas paralelas
  stroke(250);
  strokeWeight(1);
  line(-130, 90, -215, 10);
  line(-130, 90, -215, 175);
  line(-130, 260, -215, 175);

  //Edificio abajo izq
  stroke(250);
  strokeWeight(1);
  line(-150, 195, -150, 300);
  line(-146, 195, -146, 300);
  line(-142, 195, -142, 300);
  line(-138, 195, -138, 300);
  line(-134, 195, -134, 300);
  line(-130, 195, -130, 300);
  line(-126, 195, -126, 300);
  line(-122, 195, -122, 300);
  line(-118, 195, -118, 300);
  line(-114, 195, -114, 300);
  line(-110, 195, -110, 300);
  line(-106, 195, -106, 300);
  line(-102, 195, -102, 300);

  //Segundo edificio del fondo derecha
  stroke(165);
  strokeWeight(0.8);
  line(110, -100, 110, 145);
  line(115, -100, 115, 145);
  line(120, -100, 120, 145);
  line(125, -100, 125, 145);
  line(130, -100, 130, 145);
  line(135, -100, 135, 145);
  line(140, -100, 140, 145);

  //Tercer edificio del fondo costado derecha
  stroke(165);
  strokeWeight(1);
  line(195, -100, 400, -100);
  line(195, -30, 400, -30);
  line(195, 35, 400, 35);
  line(2002, 100, 195, 100);

  //Edificio adelante de todo derecha
  //Líneas verticales
  stroke(165);
  strokeWeight(2);
  line(130, -150, 130, 300);
  line(145, -150, 145, 300);
  line(160, -150, 160, 300);
  line(175, -150, 175, 300);
  line(190, -150, 190, 300);
  line(205, -150, 205, 300);

  //Líneas horizontales
  stroke(165);
  strokeWeight(2);
  line(130, -40, 205, -40);
  line(130, 65, 205, 65);
  line(130, 170, 205, 170);

  //líneas paralelas
  line(130, 270, 205, 170);
  line(130, 170, 205, 270);
  line(130, 65, 205, 170);
  line(130, 170, 205, 65);
  line(130, 65, 205, -40);
  line(205, 65, 130, -40);
  line(130, -150, 205, -40);
  line(130, -40, 205, -150);

  //Líneas rectas medio
  stroke(165);
  strokeWeight(2);
  line(130, -95, 205, -95);
  line(130, 12, 205, 12);
  line(130, 119, 205, 119);
  line(130, 220, 205, 220);

  //Edificio derecho abajo
  stroke(165);
  strokeWeight(4); // Techo
  line(30, 205, 120, 205);
  //Líneas verticales
  stroke(165);
  strokeWeight(2);
  line(30, 205, 30, 300);
  line(120, 205, 120, 300);
  line(40, 205, 40, 300);
  line(50, 205, 50, 300);
  line(60, 205, 60, 300);
  line(70, 205, 70, 300);
  line(80, 205, 80, 300);
  line(90, 205, 90, 300);
  line(100, 205, 100, 300);
  line(110, 205, 110, 300);

  //arbol
  //Incrementa el tamaño del árbol solo si no ha alcanzado el máximo
  if (treeSize < maxSize) {
    treeSize += growthRate;
  }

  // Calcular la vibración basada en el tamaño
  let vibrationScale = map(treeSize, 1, maxSize, 1, 5); // Escala la vibración de 1 a 5
  let vibrationX = random(-vibrationScale, vibrationScale);
  let vibrationY = random(-vibrationScale, vibrationScale);
  stroke(165);
  strokeWeight(1);

  push();
  translate(treeX + vibrationX, treeY - treeSize * 90); //El arbol crece hacia arriba
  scale(treeSize);

  //Árbol
  stroke(165);
  strokeWeight(1);

  line(1, 150, 1, 60);

  //Ramas
  line(-25, 118, 1, 135);
  line(25, 118, 1, 135);

  line(-25, 118, 1, 128);
  line(25, 118, 1, 128);

  line(-22, 108, 1, 124);
  line(22, 108, 1, 124);

  line(-22, 108, 1, 118);
  line(22, 108, 1, 118);

  line(-18, 100, 1, 112);
  line(18, 100, 1, 112);

  line(-18, 100, 1, 108);
  line(18, 100, 1, 108);

  line(-14, 90, 1, 100);
  line(14, 90, 1, 100);

  line(-14, 90, 1, 104);
  line(14, 90, 1, 104);

  line(-10, 79, 1, 90);
  line(10, 79, 1, 90);

  line(-10, 79, 1, 85);
  line(10, 79, 1, 85);

  line(-5, 70, 1, 80);
  line(5, 70, 1, 80);

  pop();
}
