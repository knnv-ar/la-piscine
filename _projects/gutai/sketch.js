/*
Artes Multimediales 1
Catedra Lacabanne - Turno noche
Trabajo Práctico Nro 2
Año 2021

"GUTAI"
Vanesa Ines Juan
2021. 2 minutos 30 segundos.

Las imagenes utilizadas son cortesia del Ashiya City Museum of Art & History y Amagasaki Cultural Center.

.
.
.

¡¡¡¡¡PRECAUCION!!!!! ¡¡¡¡¡RUIDO!!!!!
*/

var luces = false;
var img1, img2;

function preload() {
  //imagenes y audio que uso
  sound = loadSound("sonidos/vox_finis.mp3");
  img1 = loadImage("imagenes/gutai1.jpg");
  img2 = loadImage("imagenes/gutai2.jpg");
  img3 = loadImage("imagenes/texto1.png");
}

function setup() {
  let canvas = createCanvas(515, 515, WEBGL);
  canvas.parent('div-sketch');

  sound.loop();
  //console.log(sound.duration()); //Duracion total del audio
}

function draw() {
  background(0);
  noStroke();

  //console.log(sound.currentTime()); //Segundos exactos del audio

  if (luces) {
    lights();
  } else {
    noLights();
  }

   //Cuerpo 
  if (sound.currentTime() > 122.23562358276644) {
    push();
    texture(img2);
    translate(0, 0, 0);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    box(1250, 1250);
    pop();

    push();
    texture(img3);
    plane(390, 390);
    noStroke();
    pop();
  } else {
    push();
    texture(img1);
    translate(0, 0, 0);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    box(1250, 1250);
    pop();
  }

   //Para desactivar el boton derecho del mousse.
  document.oncontextmenu = function () {
    return false;
  };
}
