let cancion;
let rot = 0;
var posZ = 0;
var video;
function preload() {
  cancion = loadSound("chill.mp3");
}
function setup() {
  let canvas = createCanvas(800, 600, WEBGL);
  canvas.parent('div-sketch');
  video = createCapture(VIDEO);
  video.hide();
  cancion.loop();
}

function draw() {
  var mousex = mouseX - width / 2;
  var mousey = mouseY - height / 2;
  //color de la dona
  pointLight(255, 100, 100, mousex, mousey, posZ);

  background(255, 250, 200);
  noStroke();
  //rotacion de la dona
  rotateX(rot);
  rotateY(rot);
  rotateZ(rot);
  //mov del mouse

  //figura dona

  torus(50, 25);

  rot += 0.01;
  //pos de la webcam
  image(video, 0, 0);
}
//para que no se despliegue el menú del navegador//
document.oncontextmenu = function () {
  return false;
};
