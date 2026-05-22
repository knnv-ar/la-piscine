/*
127.0.0.1
2021
AGUSTÍN NICOLÁS GUTIÉRREZ
*/

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

var desp = 0;
var resp = 0;
function draw() {
  //Toma posición en eje y convierte en valor de fondo
  var cursorX = map(mouseX, 0, width, 0, height);
  var cursorY = map(mouseY, 0, width, 0, height);
  var fondoX = map(cursorX, 50, 255, 0, 128);
  var fondoY = map(cursorY, 50, 255, 0, 128);
  var fondo = fondoX + fondoY;
  background(fondo);

  //Respiración  izquierda
  var valorDesp = sin(desp);
  var mov = map(valorDesp, -1, 1, 0, width);
  desp += 0.01;

  //Red soporte izq
  for (var i = 0; i < 1024; i += 8) {
    noFill();
    bezier(0 + i, 256, mov, 256, 256, mov, 0, /*(mouseY+i)*2*/ (0 + i) * 2);
  }

  //Respiración derecha
  var valorResp = sin(resp);
  var movI = map(valorResp, 1, -1, 0, width);
  resp += 0.011;

  //Red soporte der
  for (var i = 0; i < 1024; i += 16) {
    noFill();
    bezier(0 + i, 256, 256, movI, movI, 256, 512, (0 + i) * 2);
  }
}
