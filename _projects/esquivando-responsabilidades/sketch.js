/*
TP2 - Multimedia 1 - Cátedra Raúl Lacabanne. 
Título de la Obra: "Esquivando responsabilidades". 
Autor: Angel Marcelo Jimenez. 
Año: 2025.
*/ 

// Utilizar arriba y abajo (↑ ↓) para controlar al personaje.

// BLOQUE 1: VARIABLES PRINCIPALES
let fondo; // Imagen de fondo principal.
let cara; // Imagen del personaje (jugador).
let elementos = []; // Arreglo que contiene las tres imágenes de "enemigos".
let elementoActual; // Imagen del "enemigo" activo.

let caraX = 100; // Posición horizontal del jugador (fija a la izquierda).
let caraY; // Posición vertical del jugador (controlada con las flechas).
let caraW, caraH; // Ancho y alto escalado del personaje.

let elementoX, elementoY; // Posición del "enemigo".
let elementoW, elementoH; // Tamaño escalado del "enemigo".
let elementoSpeed; // Velocidad del "enemigo" (aumenta la dificultad).

let juegoTerminado = false; // Estado del juego (false = activo, true = Game Over).

// Variables de audio
let musicaFondo; // Música en loop durante el juego.
let sonidoGameOver; // Efecto de sonido que suena al perder.


// BLOQUE 2: PRELOAD
function preload() {
  fondo = loadImage("album1/fondo.webp"); // Carga del fondo.
  cara = loadImage("album1/cara.webp"); // Carga del personaje principal.

  // Carga de los tres enemigos con los que alterna el juego.
  elementos[0] = loadImage("album1/elemento.webp");
  elementos[1] = loadImage("album1/elemento2.webp");
  elementos[2] = loadImage("album1/elemento3.webp");

  // Carga de los archivos de sonido.
  musicaFondo = loadSound("album1/skrillex-theme.mp3");
  sonidoGameOver = loadSound("album1/game-over-fx.mp3");
}


// BLOQUE 3: SETUP
function setup() {
  let canvas = createCanvas(1000, 530);
  canvas.parent('div-sketch');
  imageMode(CORNER); // Las imágenes se dibujan desde su esquina superior izquierda.
  textAlign(CENTER, CENTER); // El texto se centrará en pantalla.

  // ESCALADO Y POSICIÓN DEL PERSONAJE:
  caraW = width * 0.15; // Ocupa el 15% del ancho total del canvas.
  caraH = cara.height * (caraW / cara.width); // Mantiene la proporción original.
  caraY = height / 2 - caraH / 2; // Se posiciona verticalmente al centro.

  reiniciarElemento(); // Se genera el primer enemigo en pantalla.

  // Reproducción de la música en loop continuo al iniciar el juego.
  musicaFondo.loop();
  musicaFondo.setVolume(0.7); // Se ajusta el volumen (opcional).
}


// BLOQUE 4: DRAW
function draw() {
  background(0); // Color base de fondo (negro).
  image(fondo, 0, 0, width, height); // Dibuja el fondo en todo el canvas.

  // BLOQUE 4.1: Si el juego terminó, muestra pantalla de "Game Over".
  if (juegoTerminado) {
    textSize(90);
    drawOutlinedText("💥 ¡GAME OVER! 💥", width / 2, height / 2, color(255), color(0), 4);

    textSize(35);
    drawOutlinedText("Presioná 'R' para reiniciar", width / 2, height / 2 + 60, color(255), color(0), 2);
    return; // Detiene el resto del código para pausar el juego.
  }

  // BLOQUE 4.2: Movimiento del jugador con las flechas ↑ ↓.
  if (keyIsDown(UP_ARROW)) caraY -= 6;
  if (keyIsDown(DOWN_ARROW)) caraY += 6;

  // Restringe el movimiento dentro de los límites del lienzo.
  caraY = constrain(caraY, 0, height - caraH);

  // Dibuja el personaje.
  image(cara, caraX, caraY, caraW, caraH);

  // BLOQUE 4.3: Movimiento del enemigo.
  elementoX -= elementoSpeed; // Se desplaza de derecha a izquierda.
  image(elementoActual, elementoX, elementoY, elementoW, elementoH);

  // Si sale del canvas, reaparece desde la derecha con nueva posición y velocidad.
  if (elementoX + elementoW < 0) {
    reiniciarElemento();
  }

  // BLOQUE 4.4: Detección de colisión entre jugador y enemigo.
  if (
    elementoX < caraX + caraW &&
    elementoX + elementoW > caraX &&
    elementoY < caraY + caraH &&
    elementoY + elementoH > caraY
  ) {
    juegoTerminado = true; // Cambia el estado del juego a “terminado”.
    musicaFondo.stop(); // Detiene la música inmediatamente.
    sonidoGameOver.play(); // Reproduce el sonido del Game Over.
  }
}


// BLOQUE 5: FUNCIÓN PARA REINICIAR ELEMENTOS
// Se ejecuta al iniciar o cuando un "enemigo" sale del lienzo.

function reiniciarElemento() {
  let indice = floor(random(elementos.length)); // Elige un enemigo al azar.
  elementoActual = elementos[indice]; // Asigna la imagen seleccionada.

  // Tamaños personalizados según el tipo de enemigo.
  if (indice === 0) {
    elementoW = width * 0.18; // elemento.png
  } else if (indice === 1) {
    elementoW = width * 0.15; // elemento2.png
  } else if (indice === 2) {
    elementoW = width * 0.18; // elemento3.png
  }

  // Escalado proporcional manteniendo las dimensiones originales.
  elementoH = elementoActual.height * (elementoW / elementoActual.width);

  // Posición inicial (fuera de la pantalla a la derecha).
  elementoX = width + random(100, 400);
  elementoY = random(0, height - elementoH);

  // Velocidad aleatoria (más rápida para aumentar dificultad).
  elementoSpeed = random(8, 13);
}


// BLOQUE 6: FUNCIÓN DE REINICIO DEL JUEGO
// Permite reiniciar la partida presionando la tecla "R".

function keyPressed() {
  if (key === "r" || key === "R") {
    juegoTerminado = false; // Reactiva el juego.
    caraY = height / 2 - caraH / 2; // Reubica al personaje.
    reiniciarElemento(); // Reinicia los enemigos.

    // Reinicia la música desde el principio.
    sonidoGameOver.stop();
    musicaFondo.loop();
  }
}


// BLOQUE 7: FUNCIÓN AUXILIAR PARA TEXTO CON CONTORNO

function drawOutlinedText(txt, x, y, fillColor, strokeColor, strokeWeightVal) {
  push();
  stroke(strokeColor); // Color del contorno.
  strokeWeight(strokeWeightVal); // Grosor del borde.
  fill(fillColor); // Color del texto.
  text(txt, x, y); // Dibuja el texto.
  pop();
}
