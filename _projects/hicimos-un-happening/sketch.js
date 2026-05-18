let timer = 0;
let img;
let audio;
let altoPared = 340;
let anchoPared = 400;

let camaras;
let altoPantalla = 350;
let anchoPantalla = 300;

var snapshots = [];
var contador = 0;
var total;

function preload() {
  img = loadImage("brillo-01.jpg");
  audio = loadSound("audio.mp3");
}

function setup() {
  
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('div-sketch');
  frameRate(10);
  camaras = createCapture(VIDEO);
  camaras.hide();
}

function draw() {
  background(0);
  orbitControl();
  
  if (timer ==100)
    {
      audio.play();
    }
  else if (timer == 700 )
  {timer = 0;}
  
  cubo();
  pantallas();
  
timer ++;
}


function cubo() {
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();

  //-----------------Cubo interior  ---------------------
  translate(140,0,0);
  rotateY(50);
  
  
  push();
  texture(img);
  //pared izq
  push();
  translate(-250, 0, -150);
  rotateY(90);
  rect(0, 0, anchoPared, altoPared);
  pop();

  //pared derecha
  push();
  translate(250, 0, -150);
  rotateY(-90);
  rect(0, 0, anchoPared, altoPared);
  pop();

  //fondo
  push();
  translate(0, 0, -350);
  rect(0, 0, anchoPared + 100, altoPared);
  pop();

  //piso
  push();
  translate(0, 170, -150);
  rotateX(90);
  rect(0, 0, anchoPared + 100, anchoPared);
  pop();

  //techo
  push();
  translate(0, -170, -150);
  rotateX(90);
  rect(0, 0, anchoPared + 100, anchoPared);
  pop();

  //frente
  push();
  translate(0, 0, 50);
  rect(0, 0, anchoPared + 100, altoPared);
  pop();

  pop(); //fin cubo interior

}

function pantallas() {
  //pantalla izq
  push();
  translate(-240, -100, -20);
  rotateY(90);
  matrix(anchoPantalla -40, altoPantalla );
  pop();

  //pantalla fondo 
  push();
  translate(0, 0, -340);
  image(camaras,0,0,anchoPantalla +150,altoPantalla -20);
  pop();

  // pantalla der ubicacion para lo que tomo de la cam
  push();
  translate(240, -100, -280);
  rotateY(-90);
  matrix(anchoPantalla-40, altoPantalla);
  pop();
}

function matrix(ancho, alto) {
  var w = 65;
  var h = 60;
  var x = 0;
  var y = 0;

  total = floor(ancho / w) * floor(alto / h);
  snapshots[contador] = camaras.get();
  contador++;

  if (contador == total) {
    contador = 0;
  }


  for (var i = 0; i < snapshots.length; i++) {
    var index = (i + contador) % snapshots.length;
    
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= ancho + 50) {
      x = 0;
      y = y + h;
    }
  }
}



document.oncontextmenu = function () {
  return false;
};
