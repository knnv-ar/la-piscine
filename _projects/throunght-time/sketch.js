let img1;
let img2;
let texto = "¡¡¡Toca el lienzo para cambia de ÉPOCA!!!";
let sonido1;
let sonido2;
let isShowingImg1 = true;

function preload() {

  img1 = loadImage('epoca1.jpg');
  img2 = loadImage('epoca2.jpg');


  //WHEN DOVES CRY
  sonido1 = loadSound('sonido1.mp3');
  //GTA.MP3
  sonido2 = loadSound('sonido2.mp3');
}

function setup() {
  //createCanvas(500, 500);
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');


  textSize(18);
  fill(255);
  textAlign(CENTER, CENTER);

  // Mostrar el texto en el lienzo
  text(texto, width / 2, height - 20);
}

// Función clic en el lienzo

function mousePressed() {
  
  // Cambiar la imagen y la música al hacer clic
  
  if (mouseX < width / 2) {
    // Cambiar a la primera imagen y reproducir música de la primera época
    
    image(img1, 0, 0, width, height);
    sonido1.play();
    sonido2.stop();
  } else {
    
    // Cambiar a la segunda imagen y reproducir música de la segunda época
    
    image(img2, 0, 0, width, height);
    sonido2.play();
    sonido1.stop();
  }

  // Volver a dibujar el texto en el lienzo
  text(texto, width / 2, height - 20);
  }
  document.oncontextmenu = function () {
    return false;
  };