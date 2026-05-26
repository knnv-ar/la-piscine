//declarar variables
var img;
var glitch;
var cara;
var ambiente;
var mar;
var songplay = false;
var hy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var mars;
var onda;
var radioMayor = 40;
var y = radioMayor;
var velocidad = 70;
var direccion = 1;
var anguloRotacion = 150;


//cargar archivos
function preload() {
  img = loadImage('marshal.jpg');
  glitch = loadImage('ttv.gif');
  cara = loadImage('face.png');
  ambiente = loadSound('ambiente.wav');
  mar = loadSound('tres.mp3');
  mars = loadImage('marshald.jpg');
  onda = loadImage('fq.png');

}

function setup() {
  let canvas = createCanvas(670, 500);
  canvas.parent('div-sketch');
  ambiente.loop();
  mar.stop();

}

function audio() {
  mar.loop();


}

function draw() {
  background(220);
  y += velocidad;
  push();
  tint(255);
  image(img, 0, 0);

  pop();
  mousePressed();
}

function mousePressed() {


  //acciones al clickear
  if (mouseIsPressed) {
    if (songplay == false) {
      //tarda un poco en empezar el audio
      audio();
      songplay = true;
    }
    tint(255);
    image(mars, 0, 0);




    for (var i = 0; i < hy.length; i++) {
      translate(y, height / 2);
      rotate(radians(anguloRotacion));



      tint(255, 90, 60)
      image(cara, i * 100, hy[i], 200, 200);
    }
    for (var j = 0; j < hy.length; j++) {
      translate(y, width / 2);
      rotate(radians(anguloRotacion));
      image(onda, 500, 300, 150, 150);
    }

  } else {
    mar.stop();
    tint(180);
    image(glitch, 50, 120, 200, 200);
    tint(255, 30, 60)
    image(cara, pmouseX - 150, pmouseY - 150, 300, 300);
  }

}
