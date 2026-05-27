//variables
var angulo = 0.0;
let x, y;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noStroke();
  x = width / 2;
  y = height;
}

function draw() {
  background(31);
  textSize(20);
  textStyle(ITALIC);

  var valorSeno = sin(angulo);
  var gris = map(valorSeno, -1, 1, 0, 255);
  angulo += 0.1;
  if (mouseIsPressed) {
    if (mouseButton == RIGHT) {
      text("Esta no es una cara", 160, 55);
      text("Esta no es una cara", 160, 470);
      //primera fila de cuadrados
      fill("#c1c1c1");
      square(75, 75, 60);
      fill("#5d5d5d");
      square(135, 75, 60);
      square(195, 75, 60);
      fill("#858585");
      square(255, 75, 60);
      fill("#494949");
      square(315, 75, 60);
      square(375, 75, 60);

      //segunda fila de cuadrados
      fill("#e9e9e9");
      square(75, 135, 60);
      fill("#ffffff");
      square(135, 135, 60);
      fill("#494949");
      square(195, 135, 60);
      fill("#717171");
      square(255, 135, 60);
      fill("#5d5d5d");
      square(315, 135, 60);
      fill("#e9e9e9");
      square(375, 135, 60);

      //tercera fila de cuadrados
      fill("#ffffff");
      square(75, 195, 60);
      fill(gris);
      square(135, 195, 60);
      fill("#ffffff");
      square(195, 195, 60);
      fill("#e9e9e9");
      square(255, 195, 60);
      fill(gris);
      square(315, 195, 60);
      fill("#717171");
      square(375, 195, 60);

      //cuarta fila de cuadrados
      fill("#c1c1c1");
      square(75, 255, 60);
      fill("#ffffff");
      square(135, 255, 60);
      fill("#e9e9e9");
      square(195, 255, 60);
      fill(gris);
      square(255, 255, 60);
      fill("#e9e9e9");
      square(315, 255, 60);
      fill("#ffffff");
      square(375, 255, 60);

      //quinta fila de cuadrados
      fill("#5d5d5d");
      square(75, 315, 60);
      fill(gris);
      square(135, 315, 60);
      square(195, 315, 60);
      square(255, 315, 60);
      fill(gris);
      square(315, 315, 60);
      fill("#494949");
      square(375, 315, 60);

      //sexta fila de cuadrados
      fill("#717171");
      square(75, 375, 60);
      fill("#858585");
      square(135, 375, 60);
      fill("#5d5d5d");
      square(195, 375, 60);
      fill("#494949");
      square(255, 375, 60);
      fill("#c1c1c1");
      square(315, 375, 60);
      square(375, 375, 60);
    } else {
      for (var i = 20; i < 150; i += 15) {
        valorSeno = sin(angulo);
        gris = map(valorSeno, -1, 1, 0, 255);
        angulo += 0.1;
        fill(gris);
        square(x, y, 40);
        square(y, x, 40);
        x = x + random(-1, 1);
        y = y - 2;

        if (y < 0) {
          y = height;
        }
      }
    }
  } else {
    //primera fila de cuadrados
    fill("#c1c1c1");
    square(75, 75, 60);
    fill("#5d5d5d");
    square(135, 75, 60);
    square(195, 75, 60);
    fill("#858585");
    square(255, 75, 60);
    fill("#494949");
    square(315, 75, 60);
    square(375, 75, 60);

    //segunda fila de cuadrados
    fill("#e9e9e9");
    square(75, 135, 60);
    fill("#ffffff");
    square(135, 135, 60);
    fill("#494949");
    square(195, 135, 60);
    fill("#717171");
    square(255, 135, 60);
    fill("#5d5d5d");
    square(315, 135, 60);
    fill("#e9e9e9");
    square(375, 135, 60);

    //tercera fila de cuadrados
    fill("#ffffff");
    square(75, 195, 60);
    fill("#e9e9e9");
    square(135, 195, 60);
    fill("#ffffff");
    square(195, 195, 60);
    fill("#e9e9e9");
    square(255, 195, 60);
    fill("#494949");
    square(315, 195, 60);
    fill("#717171");
    square(375, 195, 60);

    //cuarta fila de cuadrados
    fill("#c1c1c1");
    square(75, 255, 60);
    fill("#ffffff");
    square(135, 255, 60);
    fill("#e9e9e9");
    square(195, 255, 60);
    fill("#717171");
    square(255, 255, 60);
    fill("#e9e9e9");
    square(315, 255, 60);
    fill("#ffffff");
    square(375, 255, 60);

    //quinta fila de cuadrados
    fill("#5d5d5d");
    square(75, 315, 60);
    fill("#494949");
    square(135, 315, 60);
    square(195, 315, 60);
    square(255, 315, 60);
    fill("#858585");
    square(315, 315, 60);
    fill("#494949");
    square(375, 315, 60);

    //sexta fila de cuadrados
    fill("#717171");
    square(75, 375, 60);
    fill("#858585");
    square(135, 375, 60);
    fill("#5d5d5d");
    square(195, 375, 60);
    fill("#494949");
    square(255, 375, 60);
    fill("#c1c1c1");
    square(315, 375, 60);
    square(375, 375, 60);
  }
  document.oncontextmenu = function () {
    return false;
  };
}
