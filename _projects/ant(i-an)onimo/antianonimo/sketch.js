function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(100);
  //------------------------------------------------------------- el fondo
  let angulo = 0;
  let radio = 0;
  let centerX = width / 2;
  let centerY = height / 2;
  let colorcito = 255;
  let puntitos = 0;

  while (radio < 362) {
    stroke(colorcito);
    let x = centerX + radio * cos(angulo);
    let y = centerY + radio * sin(angulo);
    strokeWeight(4);
    point(x, y);
    angulo += 0.02;
    radio += 0.01;
    puntitos++;
    if (puntitos % 100 == 0) {
      colorcito -= 1;
    }
  }
}

function draw() {
  //------------------------- Dibuja siguiendo el mouse y sus direcciones opuestas
  let oppositeX = width - pmouseX;
  let oppositeY = height - pmouseY;
  stroke(255);
  strokeWeight(3);
  point(oppositeX, pmouseY);
  point(pmouseX, oppositeY);
  point(pmouseX, pmouseY);
  point(oppositeX, oppositeY);
}
