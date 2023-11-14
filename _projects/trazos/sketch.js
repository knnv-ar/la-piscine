//Referencia https://www.mumok.at/de/herbert-w-franke
//Referenciahttps://digitalartarchive.siggraph.org/artwork/herbert-w-franke-grafik-i/

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(155, 151, 156);
}

function draw() {
  //Estructura de repetición
  stroke(250);
  for (var i = 100; i < 500; i += 25) line(i, mouseX, 250, mouseY);
  stroke(70);

  //Elipses
  noFill(0);
  stroke(110);
  ellipse(190, 300, 300, 70);
  stroke(0);
  ellipse(200, 400, 300, 70);
  stroke(0);
  rotate(7);
  ellipse(400, 150, 70, 400);
  noFill(84, 82, 84);
  ellipse(300, 150, 80, 400);
  noFill(255);
  ellipse(350, 150, 90, 400);
  noFill(0);
  ellipse(400, 150, 90, 400);
  stroke(0);
  ellipse(400, 150, 90, 480);
  stroke(255);
  ellipse(400, 100, 90, 480);
  ellipse(100, 200, 100, 490);
}
