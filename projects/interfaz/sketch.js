//Interfaz
/*Fuentes audio-visuales:
Dos imagenes de Ben Laposky
Obra audio-visual de Ryoji Ikeda - data-verse (2015)
Video de Ryoji Ikeda - data.path (2006)
Videoarte y sonido producción propia */

var img, img1;
var cancion, cancion2;

function preload() {
  img = loadImage("ben1.webp");
  img1 = loadImage("ben2.webp");
  cancion = loadSound("dataikeda.mp3");
  cancion2 = loadSound("tvson.mp3");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');

  vid = createVideo("ikeda1.mp4");
  vid.size(320, 240);
  vid.hide();
  vid.loop();
  vid.elt.muted = true;

  vid1 = createVideo("datos1.mp4");
  vid1.size(320, 240);
  vid1.hide();
  vid1.loop();
  vid1.elt.muted = true;

  vid2 = createVideo("tv.mp4");
  vid2.size(320, 240);
  vid2.hide();
  vid2.loop();
  vid2.elt.muted = true;

  cancion.loop();
  cancion.setVolume(0.1);

  cancion2.loop();
  cancion2.setVolume(0.1);
}

function draw() {
  background(0);

  noStroke();

  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  push(); //video tv (apretar una tecla + mouse)

  if (keyIsPressed) {
    texture(vid2);
    plane(500, 500);
    cancion.stop();
  } else {
    pop();

    push(); //plano derecho

    pointLight(100, 0, 0, locX, locY, 0);

    if (mouseY > 250) {
      pointLight(100, 0, 0, locX, locY, 0);
      camera(mouseX, 0, 0, 0, 0, 0, 0, 1, 0);
      texture(vid1);
      translate(0, 200, -200);
      plane(600, 1300);
    }
    pop();

    var dirX = (mouseX / width - 0.5) * 2;
    var dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);

    push(); //plano inferior

    texture(vid);
    translate(0, 200);
    rotateX(HALF_PI);
    plane(300, 900);

    pop();

    push(); //esfera

    specularMaterial(20);
    //ambientLight(50);

    camera(mouseX, 0, mouseY, 0, 0, 0, 0, 1, 0);

    if (mouseIsPressed) {
      rotateX(frameCount * 0.005);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.005);
      translate(0, 0, mouseX - 250);
      texture(img);
      box(150, 150, 150);
    } else {
      texture(img1);
      sphere(100, 100);
    }

    pop();

    if (mouseIsPressed) {
      //interferencia
      translate(-200, 200, 300);
      plane(600, 1300);
    }
  }
}

function mousePressed() {
  cancion.play();
}

function keyPressed() {
  if (key == "s") {
    cancion2.stop();
  }
  if (key == "p") {
    cancion2.pause();
  }
  if (key == " ") {
    cancion2.loop();
  } 

}
