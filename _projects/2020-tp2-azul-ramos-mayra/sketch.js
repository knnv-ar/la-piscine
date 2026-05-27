//ARTES MULTIMEDIALES 1 - 2do Parcial
//"lxgar" - Mayra Ramos (2020)

//Variable palabras danzantes 
let dancingWords = [];
//variables sonido 
var ruido
var metal
// variables de movimiento persona y fondo 
var dragX = 0;
var dragY = 0;
var moveX = 0;
var moveY = 0;

var radioMayor = 70;
var y = 70;
var velocidadX = 1; // velocidad de mov. en eje X
var velocidadY = 1; // velocidad de mov. en eje Y
var direccionX = 0; // dirección de mov. en eje X
var direccionY = 1; // dirección de mov. en eje Y
var x = 70;

function preload() {

  img1 = loadImage("imagenes/ima1.webp");
  img2 = loadImage("imagenes/ima2.webp");
  img3 = loadImage("imagenes/ima3.webp");
  img4 = loadImage("imagenes/ima4.webp");
  img5 = loadImage("imagenes/ima5.webp");
  img6 = loadImage("imagenes/ima6.webp");
  img8 = loadImage("per2.webp");
  ruido = loadSound("ruido.mp3");
  golpe = loadSound("golpe.mp3");

}

function setup() {

  Palabras()
  let canvas = createCanvas(900, 800);
  canvas.parent('div-sketch');
  ruido.loop()

  image(img5, -100, -150); //POSICION por MARGEN imagen estatica1
  image(img6, -350, -100); // imagen estatica2




}

function draw() {

  fondo() //todo menos persona 

  figura(moveX, moveY, 0, 0); //Parametros:(x, y, radio, angulo) persona

  figura(dragX, dragY, 0, 0); //parametros persona 

  //repeticion y valores de palabras 
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }

}


function mousePressed() { //movimiento persona
  dragX = mouseX;
  dragY = mouseY;

  golpe.play()
}

function figura(x, y, radioMayor, anguloRotacion) { // funcion movimiento persona


  push();


  translate(x, y);
  rotate(radians(anguloRotacion));
  image(img8, 0, 0);



  pop()

}

function fondo() {

  push()


  image(img4, mouseX, mouseY); //DIBUJA y mueve IMAGEN MOUSE


  // CAPA ESPIRAL IMAGENES FONDO 

  x += 20; //cada vez se suman 20 en x //separacion entre repeticion de imagen

  if ((x > width - radioMayor) || (x < radioMayor)) { //movimiento
    direccionX = -direccionX;
  }


  // cambia direcciónY
  y += 5; // SUMA 5 EN Y

  translate(x, y);
  rotate(radians(x)); //rotacion 


  image(img2, 0, 0); //usando esta imagen

  image(img3, 0, 0); // y esta


  pop() // FIN CAPA ESPIRAL



}


//datos del movimietno palabras 
class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian() {
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}
//palabras
function hola() {
  createP(
    'hola, como estas? '
  ).addClass('text').hide();
  const texts = selectAll('.text');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
       const dw = new DanceSpan(spannedWord, random(500), random(500));
      dancingWords.push(dw);
    }
  }
}

function bien() {
  createP(
    'bien'
  ).addClass('text1').hide();
  const texts = selectAll('.text1');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
        const dw = new DanceSpan(spannedWord, random(600), random(600));
        dancingWords.push(dw);
    }
  }
}

function elmundo() {
  createP(
    'el mundo'
  ).addClass('text2').hide();
  const texts = selectAll('.text2');


  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
           const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function elplaneta() {
  createP(
    'el planeta'
  ).addClass('text3').hide();
  const texts = selectAll('.text3');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
         const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function loslugares() {
  createP(
    'los lugares'
  ).addClass('text4').hide();
  const texts = selectAll('.text4');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
  const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function googlemaps() {
  createP(
    'google maps'
  ).addClass('text5').hide();
  const texts = selectAll('.text5');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
           const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function caminos() {
  createP(
    'caminos'
  ).addClass('text6').hide();
  const texts = selectAll('.text6');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
          const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function espacios() {
  createP(
    'espacios'
  ).addClass('text7').hide();
  const texts = selectAll('.text7');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
         const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function conlluvia() {
  createP(
    'con lluvia '
  ).addClass('text8').hide();
  const texts = selectAll('.text8');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
       const dw = new DanceSpan(spannedWord, random(600), random(600));
       dancingWords.push(dw);
    }
  }
}

function personas() {
  createP(
    'personas que no conocemos '
  ).addClass('text9').hide();
  const texts = selectAll('.text9');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
           const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}

function nosotres() {
  createP(
    'nosotres mismes'
  ).addClass('text10').hide();
  const texts = selectAll('.text10');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
         const dw = new DanceSpan(spannedWord, random(600), random(600));
      dancingWords.push(dw);
    }
  }
}


function Palabras() { //fucnion que almacena todas las palabras con movimiento y les da un tiempo de aparicion 
  setTimeout(hola, 1000)
  setTimeout(bien, 5000)
  setTimeout(elmundo, 7000)
  setTimeout(elplaneta, 10000)
  setTimeout(loslugares, 15000)
  setTimeout(googlemaps, 17000)
  setTimeout(caminos, 20000)
  setTimeout(espacios, 25000)
  setTimeout(conlluvia, 27000)
  setTimeout(personas, 31000)
  setTimeout(nosotres, 35000)

}
