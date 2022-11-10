//PONÉ PLAY.
//PONÉ PLAY.
//PONÉ PLAY.
//PONÉ PLAY.
//PONÉ PLAY.
//PONÉ PLAY.
//EN LA PRIMERA IMAGEN PODES ARRASTRAR EL MOUSSE Y VER QUÉ PASA.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Declaracion de variables
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let minimo = 8;
let maximo = 18;
let Objs = [];
let velocidad = 4;
let vid;
let letras = [];
let cantidad = 8;
let offset = 30;


function preload() {
  img = loadImage("fotos/img1.jpg");
  img2 = loadImage("imagenes/letra.png");
  img3 = loadImage("fotos/img3.png");
  img4 = loadImage("fotos/img4.png");
  img5 = loadImage("fotos/img5.png");
  img6 = loadImage("fotos/img6.png");
}

function setup() {
  let canvas = createCanvas(500, 548);
  canvas.parent('div-sketch');
  background(0);
  frameRate(30);
  vid = createCapture(VIDEO);
  vid.hide();
  noStroke();

  
  //PALABRA
  for (let i = 0; i <= cantidad; i++) {
    letras.push({
      posx: i * 8,
      posy: 0,
      angulo: i * 5,
      velAngulo: random(2),
      velx: random(4),
      vely: random(2),
    });
  }
}

function draw() {

  if (frameCount < 120) {
    //PUNTOS DE LA IMAGEN
    push();
    background(img);
    let puntos = map(mouseY, 0, width, minimo, maximo);
    for (let i = 0; i <= 1800; i++) {
      let x = random(img.width);
      let y = random(img.height);
      var pix = img.get(x, y);
      strokeWeight(puntos);
      stroke(pix);
      point(x, y);
    }
    // FRASE
    for (var i = 0; i <= cantidad; i++) {
      letter(i);
    }
    pop();
  }
  if (frameCount > 120 && frameCount < 190) {
    background(img3);
  }
  if (frameCount > 190 && frameCount < 260) {
    background(img4);
  }
  if (frameCount > 260 && frameCount < 330) {
    background(img5);
  }
  if (frameCount > 330 && frameCount < 400) {
    background(img6);
  }
  if (frameCount > 420 && frameCount < 460) {
    background(0);
    image(vid, 0, 0, 620, 548);
    filter(GRAY);
  }
  }
  //}

function letter(indice) {
  push();

  letras[indice].posx += letras[indice].velx;
  letras[indice].posy += letras[indice].vely;
  letras[indice].angulo += letras[indice].velAngulo;
  translate(letras[indice].posx, letras[indice].posy);
  rotate(radians(letras[indice].angulo));

  image(img2, 0, 0, 300, 90);

  if (letras[indice].posy > height + offset) {
    letras[indice].posy = -offset;
  }

  if (letras[indice].posx > width + offset) {
    letras[indice].posx = -offset;
  }

  pop();
}

function mousePressed() {
  frameCount = 0;
}
