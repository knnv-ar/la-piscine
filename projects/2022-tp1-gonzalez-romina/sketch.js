//TP.01 ESCRITO.txt
//Título de la Obra: "PEQUEÑO PONSHU"
//Año:2022
//Autor/a: Romina Alejandra González

function setup() {

  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}
function draw() {
  background(200);


  //brazo1
  fill(100);
  ellipse(290, 211, 55, 45);

  //brazo2
  fill(100);
  ellipse(191, 211, 60, 45);

  //pie derecho
  fill(160);
  ellipse(195, 355, 60, 35);

  //pie izquierdo
  fill(160);
  ellipse(282, 355, 60, 35);

  //pierna derecha
  fill(100);
  ellipse(210, 320, 60, 70);

  //pierna izquierda
  fill(100);
  ellipse(267, 320, 55, 70);

  //pie derecho
  fill(160);
  // ellipse(200, 350, 60, 40);

  //torso
  fill(100);
  ellipse(240, 252, 110, 129);
  line(240,195,240,315);
  fill(200)
  ellipse(250,213,10);
  ellipse(250,240,10);
  ellipse(250,266,10)

  //mano derecha
  fill(160);
  ellipse(155, 200, 35, 30);
  ellipse(160, 208, 20, 15);

  //mano izquierda
  fill(160);
  ellipse(320, 200, 35, 30);
  ellipse(315, 206, 20, 15);

  //cabeza
  fill(160);
  ellipse(240, 156, 80, 80);

  //gorro triangulo
  fill(190);
  triangle(237, 63, 270, 116, 206, 116);

  //doblez
  fill(50);
  rect(189, 115, 100, 10);

  //ponpon
  fill(120);
  ellipse(237, 61, 20, 20);

  //ojos
  fill(200);
  ellipse(220, 150, 20, 20);
  ellipse(260, 150, 20, 20);

  //pupila1
  fill(0);
  var ojoX, ojoY;
  ojoX = map(mouseX, 0, width, 216, 224);
  ojoY = map(mouseY, 0, height, 145, 153);
  ellipse(ojoX, ojoY, 8);

  //pupila2
  fill(0);
  ojoX = map(mouseX, 0, width, 255, 265);
  ojoY = map(mouseY, 0, height, 145, 153);
  ellipse(ojoX, ojoY, 8);

  //nariz
  fill(100);
  ellipse(240, 172, 25, 20);
}
