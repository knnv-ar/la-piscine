/* Trabajo Práctico N°2 - Artes Multimediales 1, cát. Lacabanne.

--- AÑO 2022.

--- Nombre de la obra: Chill, el gato cúbico.
--- Autor/a: Sol Mariel Sánchez.


>CLICK/MANTENER PRESIONADO BOTÓN IZQUIERDO DEL MOUSE PARA PONER DE PIE AL GATO.
>PRESIONAR LAS TECLAS M/N/G PARA REPRODUCIR AUDIO.
>PRESIONAR LAS TECLAS A/S/D/Z/X PARA DISTORSIONAR LA OBRA. */

//Imágenes
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;

// Audio
let maullido1;
let maullido2;
let auugh;
let fallo;
let musica;

function preload() {
  // Cargar imagenes

  img1 = loadImage("imagenes/gatito-sentado.gif");

  img2 = loadImage("imagenes/gatito-parado.gif");

  img3 = loadImage("imagenes/flor.gif");

  img4 = loadImage("imagenes/dialogo.png");

  img5 = loadImage("imagenes/dialogo2.png");

  img6 = loadImage("imagenes/cielo-nubes.gif");

  img8 = loadImage("imagenes/suelo.png");

  img9 = loadImage("imagenes/gatito_parado_glitch1.gif");

  img10 = loadImage("imagenes/gatito_parado_glitch2.gif");

  img11 = loadImage("imagenes/gatito_parado_glitch3.gif");

  img12 = loadImage("imagenes/gatito_sentado_glitch1.gif");

  img13 = loadImage("imagenes/gatito_sentado_glitch2.gif");

  img14 = loadImage("imagenes/sol_glitch.gif");

  img15 = loadImage("imagenes/flor_glitch.gif");

  img16 = loadImage("imagenes/cielo_glitch.gif");

  img17 = loadImage("imagenes/suelo_glitch.gif");

  // Cargar audio

  maullido1 = loadSound("sonidos/maullido1.mp3");
  maullido2 = loadSound("sonidos/maullido2.mp3");
  auugh = loadSound("sonidos/auugh.mp3");
  fallo = loadSound("sonidos/glitch_sound.wav");
  musica = loadSound("sonidos/musica_fondo.ogg");
  
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  
  musica.loop();
}

function draw() {
  background(255);

  push();
  translate(0, 250);
  image(img1, 0, 0);
  pop();

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      push();
      translate(0, 250);
      image(img2, 0, 0);
      pop();
    }
  }

  if (keyIsPressed) {
    if (key === "m" || key === "M") {
      push();
      translate(55, 100);
      maullido2.play();
      image(img4, 15, height / 4, img4.width / 4, img4.height / 4);
      pop();
    } else if (key === "n" || key === "N") {
      push();
      translate(55, 100);
      maullido1.play();
      image(img4, 15, height / 4, img4.width / 4, img4.height / 4);
      pop();
    } else if (key === "g" || key === "G") {
      push();
      translate(15, 80);
      auugh.play();
      image(img5, 15, height / 4, img5.width / 2, img5.height / 2);
      pop();
    }
  }

  push();
  image(img6, 0, -125);
  pop();

  push();
  translate(55, 300);
  image(img3, 0, height / 4, img3.width / 4, img3.height / 4);
  pop();

  push();
  translate(0, 220);
  image(img8, 0, 0);
  pop();

  if (keyIsPressed) {
    if (key === "a" || key === "A") {
      glitch();
      translate(0, 260);
      image(img9, 0, 0);
    } else if (key === "d" || key === "D") {
      glitch();
      translate(0, 260);
      image(img10, 0, 0);
    } else if (key === "s" || key === "S") {
      glitch();
      translate(0, 260);
      image(img11, 0, 0);
    } else if (key === "z" || key === "Z") {
      glitch();
      translate(0, 260);
      image(img12, 0, 0);
    } else if (key === "x" || key === "X") {
      glitch();
      translate(0, 260);
      image(img13, 0, 0);
    }
  }
}


function glitch() {
  push();
  translate(55, 300);
  image(img15, 0, height / 4, img3.width / 4, img3.height / 4);
  pop();

  push();
  image(img16, 0, -125);
  pop();

  push();
  translate(0, 280);
  image(img17, 0, 0);
  pop();
}


function keyPressed() {
  if (key === "a" || key === "s" || key === "d" || key === "z" || key === "x" || key === "m" || key === "n" || key === "g") {
    musica.pause();
    fallo.play();  
  }
}

function keyReleased() {
  fallo.stop();
  musica.play();
}

