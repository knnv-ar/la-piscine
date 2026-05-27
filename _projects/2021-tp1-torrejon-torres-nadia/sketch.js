//Variables fondo
let font,
  fontsize = 32;

let angleRotate = 0.0;
var angulo = 10;
var distancia = 1;
var escala = 50;
var velocidad = 0.05;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  noCursor();
  document.oncontextmenu = function () {
    return false;
    font = loadFont("assets/SourceSansPro-Regular.otf");
    // Set text characteristics
    textFont(font);
  };
}

function draw() {
  /* ~~~ FONDO ~~~ */

  oscilacion = map(800, 100, width, 0.2, 0.1);
  angulo += oscilacion;
  brillo = map(sin(angulo), -1, 1, 0, 100);

  background(brillo, 40);

  //OSCILACIÓN CIRCULOS

  glass = map(sin(angulo), -2, 2, 10, 300);

  //MOVIMIENTO CUBOS FONDO
  xrect = distancia * 15 + cos(angulo + 80) * escala;
  xrectb = distancia * -20 + cos(angulo + 20) * escala;
  punta = distancia * 45 + cos(angulo + 40) * escala;
  angulo += velocidad;

  //CIRCULOS

  stroke(100);
  noFill();
  lini = random(0, 1500);

  push();
  noFill();
  stroke(0);
  circle(xrectb + 200, 330, 70);
  pop();

  push();
  noFill();
  stroke(255);
  circle(xrectb + 200, 180, 70);
  pop();

  //Click & test
  push();

  if (mouseIsPressed == true) {
    fill("white");
    rect(0, width, 100);

    let s = "miraba a su alrededor sin saber a que aferrarse.";
    fill(50);
    text(s, 430, 220, 70, 80);

    //lineas
    stroke(60);
    strokeWeight(1);
    for (var x = 10; x < width; x += 14) {
      var mx = mouseX / 10;
      var desplazamientoA = random(+mx, mx);
      var desplazamientoB = random(+mx, mx);
      line(x + desplazamientoB, 512, x - desplazamientoA, 0);
    }
    pop();
  }
  pop();
  //

  //lapso
  push();
  strokeWeight(1);
  noFill();
  ellipse(300, 300, mouseY);
  ellipse(300, mouseY, mouseX);
  pop();

  push();
  strokeWeight(2);
  noFill();
  ellipse(mouseX, mouseY, 0, mouseY);
  ellipse(mouseX, mouseY, mouseX, 1);
  pop();

  //Ciculo 2

  push();
  let angle2 = radians(1);
  translate(200, 180);
  rotate(radians(angleRotate));
  // Texto
  fill(0);
  text((int(angleRotate) % 50) + "INTERACCIONES HUMANAS ", 0, 0);
  line(0, 0, 150, 0);
  pop();

  push();
  translate(200, 330);
  rotate(radians(angleRotate));
  fill(250);
  text((int(angleRotate) % 100) + " OMNIPRESENCIA DIGITAL ", 0, 0);
  line(0, 0, 150, 0);
  pop();

  angleRotate += 0.35;

  stroke(5, 0, 0);
  strokeWeight(1);
  point(200, 180);
  point(440, 180);

  //BEZIER
  noFill();
  push();
  rotate(radians(angleRotate));

  for (let i = 10; i < 700; i += 20) {
    bezier(
      mouseX - i / 2.0,
      40 + i,
      120,
      40,
      40,
      300,
      40 - i / 6.0,
      240 / 20.0
    );
  }
}
