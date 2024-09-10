///Definición de variables

//Variables de posición inicial de los cuadrados.
let desplazamientoX1 = 0;
let desplazamientoY1 = -221;
let desplazamientoX2 = -221;
let desplazamientoY2 = 0;
let desplazamientoX3 = 0;
let desplazamientoY3 = 211;
let desplazamientoX4 = 211;
let desplazamientoY4 = 0;

//Variables para movimiento circular.
let escalar = 90;
let escalarX2 = 120;
let escalarY2 = 60;

let angulo = 0;
let velocidad = 0.02;

//Variables para posicionar el centro del canvas.
let puntoX = 256;
let puntoY = 256;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  //Mido la distancia entre el centro y el mouse.
  cercaniaX = abs(puntoX - mouseX);
  cercaniaY = abs(puntoY - mouseY);

  let cercaniaTotal = cercaniaX + cercaniaY;

  //Defino los colores del fondo y lineas
  background(
    map(cercaniaTotal, 156, 50, 245, 0, true),
    map(cercaniaTotal, 156, 50, 100, 10, true)
  );
  stroke(map(cercaniaTotal, 156, 50, 0, 255, true));
  strokeWeight(map(cercaniaTotal, 156, 30, 1, 3, true));

  //Genero los movimientos circulares de los cuadrados en caso de que el mouse se acerque al centro.

  let x1 = desplazamientoX1 + cos(angulo) * escalar;
  let y1 = desplazamientoY1 + sin(angulo) * escalar;

  let x2 = desplazamientoX2 + cos(angulo) * escalarX2;
  let y2 = desplazamientoY2 + sin(angulo) * escalarY2;

  let x3 = desplazamientoX3 + cos(angulo) * escalar;
  let y3 = desplazamientoY3 + sin(angulo) * escalar;

  let x4 = desplazamientoX4 + cos(angulo) * escalarX2;
  let y4 = desplazamientoY4 + sin(angulo) * escalarY2;

  noFill();
  translate(256, 256);

  if (cercaniaTotal < 100) {
    rotate(angulo);
  }

  //Definición de los cuadrados. Si el mouse esta en el centro la imagen se acerca a las obras de Ben F. Laposky. Si el mouse se aleja del centro, se acerca a las obras de A. Michael Noll.

  quad(
    map(cercaniaTotal, 156, 10, random(-161, 161), -x1, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), -y1, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), -x2, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), -y2, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), -x3, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), -y3, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), -x4, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), -y4, true)
  );

  quad(
    map(cercaniaTotal, 156, 10, random(-161, 161), x1, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), y1, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), x2, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), y2, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), x3, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), y3, true),
    map(cercaniaTotal, 156, 10, random(-161, 161), x4, true),
    map(cercaniaTotal, 156, 10, random(-261, 261), y4, true)
  );

  //Incremento la variable angulo para el movimiento circular de los cuadrados.
  angulo += velocidad;
}
