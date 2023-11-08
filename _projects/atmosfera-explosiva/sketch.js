let gify;
let textToWrite = "DESLIZATE CON EL MOUSE Y ELIGE TU SONIDO FAVORITO.";
let typedText = "";
let typingSpeed = 3; // Velocidad de escritura (cuadros por letra)

let canciones = []; // Almacena las pistas de audio
let pistaActual = 0; // Pista de audio actual
let volumen = 1; // Inicialmente, el volumen es 1
let reproduciendo = true; // Estado de reproducción

function preload() {
  gify = loadImage('3c.gif');
  canciones.push(loadSound("ab1.wav"));
  canciones.push(loadSound("ab2.wav"));
  canciones.push(loadSound("ab3.wav"));
  canciones.push(loadSound("ab4.wav"));
  
}

function setup() {
  createCanvas(488, 600);
  textSize(16);
  textFont('Pixelify Sans');
  canciones[pistaActual].loop();
}

function draw() {
  background(120);
  displayText();
  typeText();

  // Calcular el centro y el radio del círculo de enmascaramiento
  let centerX = width / 2;
  let centerY = height / 2;
  let circleRadius = 230; 

  // Dibuja un círculo de enmascaramiento
  fill(255,0,0);
  ellipse(centerX, centerY, circleRadius * 1.5);

  // Establece el modo de mezcla para que la imagen solo se muestre dentro del círculo
  blendMode(DARKEST);

  // Muestra la imagen enmascarada
  image(gify, centerX - circleRadius, centerY - circleRadius, circleRadius * 4, circleRadius * 2);

  // Restaura el modo de mezcla a su valor predeterminado
  blendMode(BLEND);

  document.oncontextmenu = function () {
    return false;
  };

  // Actualiza la velocidad de reproducción y el volumen solo si se está reproduciendo y el mouse está dentro del canvas
  if (reproduciendo && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let cancion = canciones[pistaActual];
    cancion.setVolume(volumen);
    cancionRate = map(mouseX, 0, width, 2, -1);
    cancion.rate(cancionRate);
  }
}

function displayText() {
  fill(0);
  textSize(18);
  textStyle(BOLD);

  text(typedText, 20, 20);
  text("+ deten la reproducción o reinicia con la tecla p", 50, height - 30);
  text("+ cambia de pista con las teclas 1, 2, 3 y 4", 50, height - 50);
  
}

function typeText() {
  if (frameCount % typingSpeed === 0 && typedText.length < textToWrite.length) {
    typedText += textToWrite[typedText.length];
  }
}

function keyPressed() {
  var tiempo;

  if (keyCode == LEFT_ARROW && canciones[pistaActual].currentTime() > 1) {
    tiempo = canciones[pistaActual].currentTime() - 1;
  }

  if (keyCode == RIGHT_ARROW && canciones[pistaActual].currentTime() < canciones[pistaActual].duration() - 1) {
    tiempo = canciones[pistaActual].currentTime() + 1;
  }

  canciones[pistaActual].jump(tiempo);

  // Pausa o reproduce el sonido con la tecla 4
  if (key == 'p') {
    let cancion = canciones[pistaActual];
    if (reproduciendo) {
      cancion.pause();
    } else {
      cancion.play();
    }
    reproduciendo = !reproduciendo; // Cambia el estado de reproducción
  }

  // Cambia de pista con las teclas 1, 2 y 3
  if (key == '1' && pistaActual !== 0) {
    cambiarPista(0);
  } else if (key == '2' && pistaActual !== 1) {
    cambiarPista(1);
  } else if (key == '3' && pistaActual !== 2) {
    cambiarPista(2);
  } else if (key == '4' && pistaActual !== 3) {
    cambiarPista(3);
  }
}

function cambiarPista(nuevaPista) {
  let cancionActual = canciones[pistaActual];
  cancionActual.stop();
  pistaActual = nuevaPista;
  let nuevaCancion = canciones[pistaActual];
  nuevaCancion.play();
  reproduciendo = true;
}
