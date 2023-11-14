var x;
var y;
var z;
var img;
var img2;
var mp3;
var r;
var g;
var b;
var angle = 0;
var audioContextStarted = false;

function preload() {
  img = loadImage("eye1.jpg");
 // img2 = loadImage("background.jpg");
 mp3 = loadSound("clip.mp3");
}
function setup() {
  let canvas = createCanvas(400, 300, WEBGL);
  canvas.parent('div-sketch');
  // Agrega un evento de clic para iniciar el contexto de audio
  document.body.addEventListener('click', function() {
    if (!audioContextStarted) {
      mp3.loop();
      audioContextStarted = true;
    }
  });
}

function draw() {
  y = random(-300, 300);
  x = random(-400, 400);
  z = random(-400, 400);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  background(0);
  ambientLight(180);
  //console.log("frameCount: " + frameCount);
    //esfera central
  push();
  noStroke();
  texture(img);
  translate(0, 0, z);
  sphere(80); //Parámetros: radio
  pop();
  directionalLight(255, 255, 255, x/2, y/2, z/2);
   //esfera alta izq
  push();
  noStroke();
  texture(img);
  translate(-130-x/90, -100-y/90, z);
  rotateX(angle/2);
  rotateY(angle);
  sphere(40); //Parámetros: radio
  angle += 0.2;
  pop();
      //esfera alta der
  push();
  noStroke();
  texture(img);
  translate(130-x/90, -100-y/90, z);
  rotateX(angle);
  rotateY(angle/2);
  sphere(40); //Parámetros: radio
  angle += 0.1;
  pop();
        //esfera baja der
  push();
  noStroke();
  texture(img);
  translate(130-x/90, 100-y/90, z);
  rotateX(angle);
  rotateY(angle/2);
  sphere(40); //Parámetros: radio
  angle += 0.1;
  pop();
     //esfera baja izq
  push();
  noStroke();
  texture(img);
  translate(-130-x/90, 100-y/90, z);
  rotateX(angle/2);
  rotateY(angle);
  sphere(40); //Parámetros: radio
  angle += 0.2;
  pop();
  for (var i = 0; i < 150; i += 10) {
    noStroke();
    fill(r, g, b);
    ellipse(x, y, z, i);
  }
}

