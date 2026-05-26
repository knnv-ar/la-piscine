//Florencia Paula León
// TRABAJO PRACTICO Nª1
// ARTES MULTIMEDIALES 1

//declaraciones de variable de colores en escala de grises
var cielodia = 215;
var colorsol = 220;
var colornoche = 2;
var colorluna = 255;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(cielodia);

  //forma del sol
  fill(colorsol);
  ellipse(300, 100, 100);

  //casa
  rect(120, 200, 240, 155);
  triangle(120, 200, 240, 80, 360, 200);
  rect(200, 240, 50, 50);

  //INTERACCION ,SE HACE DE NOCHE Y PARTES DE LA CASA SE EXTIENDEN

  //CONDICION IF mouseIsPressed
  if (mouseIsPressed)
    if (mouseButton == RIGHT) {
      //acciones a realizar

      fill(colornoche);
      rect(0, 0, height, width);

      // forma luna y estrellas
      fill(colorluna);
      ellipse(300, 100, 100);

      //for para las estrellas
      for (var i = 30; i < 500; i += 50) ellipse(i, 30, 5, 5);
      ellipse(i, 70, 5, 5);

      //extension de la casa
      rect(120, 220, 240, 512);

      //casa
      fill(214);
      rect(120, 200, 240, 155);
      triangle(120, 200, 240, 80, 360, 200);

      //ventana
      fill(colorluna);
      rect(200, 240, 50, 50);

      // estencion de la ventana
      line(200, 300, 400, 300);

      rect(200, 240, 400, 50);
    }

  //PARA QUE NO SALGA EL CARTEN DEL NAVEGADOR
  document.oncontextmenu = function () {
    return false;
  };
}
