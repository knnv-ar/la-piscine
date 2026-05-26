//Sasha Gauna TP1 Artes Multimediales 1 Lacabanne TM

//Basado en Vertical Horizontal number three (1964) de A.Michael Noll

let efecto = 80; //se encarga del radio de efecto de desvanecimiento segun que tan cerca esta el mouse de las lineas

function setup() {
  //createCanvas(512, 512);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);

  noFill();
  strokeWeight(3);

  //lineaAlpha es usado en vez del line comun ya que se necesita declarar como una funcion para que el fade o desvanecimiento funcione
  lineaAlpha(211, 99, 256, 99);
  lineaAlpha(211, 209, 211, 99);
  lineaAlpha(175, 75, 205, 75);
  lineaAlpha(205, 75, 205, 210);
  lineaAlpha(175, 235, 175, 75);
  lineaAlpha(258, 175, 288, 175);
  lineaAlpha(288, 175, 288, 209);
  lineaAlpha(256, 41, 321, 41);
  lineaAlpha(321, 41, 321, 296);
  lineaAlpha(321, 296, 256, 296);
  lineaAlpha(256, 296, 256, 41);
  lineaAlpha(205, 211, 342, 211);
  lineaAlpha(342, 211, 342, 235);
  lineaAlpha(128, 225, 173, 225);
  lineaAlpha(173, 225, 173, 350);
  lineaAlpha(173, 350, 128, 350);
  lineaAlpha(128, 350, 128, 225);
  lineaAlpha(322, 154, 367, 154);
  lineaAlpha(367, 154, 367, 409);
  lineaAlpha(367, 409, 322, 409);
  lineaAlpha(322, 409, 322, 154);
  lineaAlpha(371, 114, 395, 114);
  lineaAlpha(395, 114, 395, 234);
  lineaAlpha(395, 234, 371, 234);
  lineaAlpha(371, 234, 371, 114);
  lineaAlpha(98, 183, 122, 183);
  lineaAlpha(122, 183, 122, 351);
  lineaAlpha(122, 351, 98, 351);
  lineaAlpha(98, 351, 98, 183);
  lineaAlpha(360, 230, 384, 230);
  lineaAlpha(384, 230, 384, 350);
  lineaAlpha(384, 350, 360, 350);
  lineaAlpha(360, 350, 360, 230);
  lineaAlpha(254, 296, 424, 296);
  lineaAlpha(424, 296, 424, 326);
  lineaAlpha(424, 326, 254, 326);
  lineaAlpha(254, 326, 254, 296);
  lineaAlpha(367, 296, 425, 296);
  lineaAlpha(425, 296, 425, 446);
  lineaAlpha(425, 446, 367, 446);
  lineaAlpha(367, 446, 367, 296);
  lineaAlpha(203, 322, 253, 322);
  lineaAlpha(253, 322, 253, 422);
  lineaAlpha(253, 422, 203, 422);
  lineaAlpha(203, 422, 203, 322);
  lineaAlpha(97, 236, 342, 236);
  lineaAlpha(342, 236, 342, 446);
  lineaAlpha(342, 446, 97, 446);
  lineaAlpha(97, 446, 97, 236);
  lineaAlpha(253, 411, 353, 411);
  lineaAlpha(353, 411, 353, 440);
  lineaAlpha(353, 440, 253, 440);
  lineaAlpha(253, 440, 253, 411);
  lineaAlpha(154, 296, 203, 296);
  lineaAlpha(203, 296, 203, 436);
  lineaAlpha(203, 436, 154, 436);
  lineaAlpha(154, 436, 154, 296);
  lineaAlpha(112, 324, 142, 324);
  lineaAlpha(142, 324, 142, 446);
  lineaAlpha(142, 446, 112, 446);
  lineaAlpha(112, 446, 112, 324);
  lineaAlpha(395, 183, 435, 183);
  lineaAlpha(435, 183, 435, 296);
  lineaAlpha(435, 296, 395, 296);
  lineaAlpha(395, 296, 395, 183);
}

//lineaAlpha funciona como un line normal de hecho usa las coordenadas de la funcion line comun para sus coordenadas x e y

//las funciones minXY, maxXY y las distancias X e Y se encargan de calcular la distancia del mouse de las coordenadas x e y de las lineas, dependiendo de estas el efecto de desvanecimiento aumenta o decrece, asi es como en algunas partes del canvas pueden verse los lines y en otras no 
function lineaAlpha(x1, y1, x2, y2) {
  let minX = min(x1, x2) - efecto;
  let maxX = max(x1, x2) + efecto;
  let minY = min(y1, y2) - efecto;
  let maxY = max(y1, y2) + efecto;
  if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
    let distanciaX = min(abs(mouseX - x1), abs(mouseX - x2));
    let distanciaY = min(abs(mouseY - y1), abs(mouseY - y2));
    let distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    let Opacidad = 128; // función con el numero de opacidad

    stroke(255, Opacidad);
    line(x1, y1, x2, y2);
  }
}
