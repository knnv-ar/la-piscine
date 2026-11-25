let pantalla = 1;
let epoca = 0;

let epocas = [
  "AÑO 2061",
  "AÑO 10.000",
  "AÑO 1.000.000",
  "AÑO 10.000.000",
  "AÑO 100.000.000",
  "AÑO: INDETERMINADO...",
];

let tiempoInicio = 0;

let videoLuz;
let videoIniciado = false;

let sonidoInicio;
let inicioSonidoReproducido = false;
let letrasVisibles = 0;

let sonidoGlitch;
let glitchReproducido = false;

let sonidoWindows11;
let windows11Reproducido = false;

let estrellasX = [];
let estrellasY = [];

async function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  textFont("monospace");

  for (let i = 0; i < 80; i++) {
    estrellasX.push(random(width));
    estrellasY.push(random(height));
  }

  sonidoInicio = await loadSound("sonidos/windows95.mp3");
  sonidoGlitch = await loadSound("sonidos/glitch.mp3");
  sonidoWindows11 = await loadSound("sonidos/windows11.mp3");

  videoLuz = createVideo("videos/luz.mp4");
  videoLuz.hide();
  videoLuz.volume(0);

  if (sonidoInicio && !sonidoInicio.isPlaying()) {
    sonidoInicio.play();
    inicioSonidoReproducido = true;
  }
}

function draw() {
  background(0);

  if (frameCount % 3 === 0) {
    letrasVisibles = letrasVisibles + 1;
  }

  fill(255);
  textAlign(LEFT);
  textSize(16);

  // PANTALLA 1: INICIO
  if (pantalla === 1) {
    let texto1 = "SISTEMA INICIALIZADO.\n\n¿DESEA REALIZAR UNA PREGUNTA?";
    fill(0, 255, 100);
    text(texto1.substring(0, letrasVisibles), 50, 100);
    dibujarCursor(texto1, 50, 100);

    if (letrasVisibles >= texto1.length && frameCount % 60 < 30) {
      fill(140);
      textSize(13);
      text("[ PRESIONE ENTER PARA CONTINUAR ]", 50, 530);
    }
  }

  // PANTALLA 2: PREGUNTA
  else if (pantalla === 2) {
    let texto2 =
      "¿PUEDE REVERTIRSE LA ENTROPÍA\nDEL UNIVERSO?\n\n\nRESPUESTA:\nDATOS INSUFICIENTES PARA UNA RESPUESTA ESCLARECEDORA.";
    text(texto2.substring(0, letrasVisibles), 50, 100);
    dibujarCursor(texto2, 50, 100);

    if (letrasVisibles >= texto2.length && frameCount % 60 < 30) {
      fill(140);
      textSize(13);
      text("[ PRESIONE ENTER PARA CONTINUAR ]", 50, 530);
    }
  }

  // PANTALLA 3: PASO DEL TIEMPO
  else if (pantalla === 3) {
    dibujarEstrellasEpoca();

    fill(255);
    textAlign(LEFT);
    textSize(16);

    let respuestaEpoca =
      "DATOS INSUFICIENTES PARA UNA RESPUESTA ESCLARECEDORA.";
    if (epoca === epocas.length - 1) {
      respuestaEpoca = "...";
    }

    let texto3 =
      epocas[epoca] +
      "\n\n\n¿PUEDE REVERTIRSE LA ENTROPÍA?\n\n\nRESPUESTA:\n" +
      respuestaEpoca;
    text(texto3.substring(0, letrasVisibles), 50, 100);
    dibujarCursor(texto3, 50, 100);

    if (epoca === epocas.length - 1) {
      if (millis() - tiempoInicio > 6000) {
        pantalla = 4;
        tiempoInicio = millis();
      }
    } else {
      if (letrasVisibles >= texto3.length && frameCount % 60 < 30) {
        fill(140);
        textSize(13);
        text("[ PRESIONE ENTER PARA CONTINUAR ]", 50, 530);
      }
    }
  }

  // PANTALLA 4: GLITCH
  else if (pantalla === 4) {
    if (sonidoGlitch && !glitchReproducido) {
      sonidoGlitch.play();
      glitchReproducido = true;
    }

    fill(0, 255, 100);
    textSize(13);

    text("01011001 00100000 01000100", random(width), random(height));
    text("01101001 01101111 01110011", random(width), random(height));
    text("01010011 01100101 01100001 00100000", random(width), random(height));

    if (millis() - tiempoInicio > 2000) {
      if (sonidoGlitch && sonidoGlitch.isPlaying()) {
        sonidoGlitch.stop();
      }
      pantalla = 5;
      tiempoInicio = millis();
    }
  }

  // PANTALLA 5: OSCURIDAD
  else if (pantalla === 5) {
    if (millis() - tiempoInicio > 1500) {
      pantalla = 6;
      tiempoInicio = millis();
      videoIniciado = false;
    }
  }

  // PANTALLA 6: VIDEO DE LUZ
  else if (pantalla === 6) {
    if (videoLuz && !videoIniciado) {
      videoLuz.play();
      videoIniciado = true;
    }

    if (videoLuz) {
      image(videoLuz, 0, 0, width, height);
    }

    if (millis() - tiempoInicio > 9000) {
      if (videoLuz) {
        videoLuz.stop();
      }
      pantalla = 7;
      letrasVisibles = 0;
    }
  }

  // PANTALLA 7: FINAL
  else if (pantalla === 7) {
    if (sonidoWindows11 && !windows11Reproducido) {
      sonidoWindows11.play();
      windows11Reproducido = true;
    }
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(25);

    let textoFinal = "¡HÁGASE LA LUZ!";
    text(textoFinal.substring(0, letrasVisibles), width / 2, height / 2);
  }
}

function dibujarCursor(textoCompleto, x, y) {
  if (letrasVisibles < textoCompleto.length && frameCount % 30 < 15) {
    let parteVisible = textoCompleto.substring(0, letrasVisibles);
    let lineas = parteVisible.split("\n");
    let ultimaLinea = lineas[lineas.length - 1];
    let posX = x + textWidth(ultimaLinea);
    let posY = y + (lineas.length - 1) * textLeading();

    text("_", posX, posY);
  }
}

function dibujarEstrellasEpoca() {
  noStroke();
  let cantidadActivas = max(4, 80 - epoca * 15);
  let brillo = max(40, 220 - epoca * 35);

  for (let i = 0; i < cantidadActivas; i++) {
    fill(255, brillo);
    ellipse(estrellasX[i], estrellasY[i], 2.5);
  }
}

// AVANZAR CON ENTER
function keyPressed() {
  if (keyCode === ENTER || key === "Enter") {
    if (pantalla === 1) {
      pantalla = 2;
      letrasVisibles = 0;
    } else if (pantalla === 2) {
      pantalla = 3;
      epoca = 0;
      letrasVisibles = 0;
    } else if (pantalla === 3) {
      if (epoca < epocas.length - 1) {
        epoca = epoca + 1;
        letrasVisibles = 0;

        if (epoca === epocas.length - 1) {
          tiempoInicio = millis();
        }
      }
    }
  }
}