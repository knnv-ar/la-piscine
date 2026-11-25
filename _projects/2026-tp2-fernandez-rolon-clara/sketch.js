//'PROHIBIDO FALLAR' (2026). Clara Fernandez Rolon.
//creo variables para imágenes del personaje
let imgParado, imgCorrer1, imgCorrer2;

//variables de jugar y perder
let jugando = false;
let perder = false;

//variables de posicion del personaje
let jugadorX = 80;
let posY = 300;
let sueloY = 300;
let anchoJugador = 40;
let altoJugador = 60;
let velocidadY = 0;
let gravedad = 0.8;
let fuerzaSalto = -15;

//variables de obstáculos (ahora son palabras)
let obstaculoX = 600;
let obstaculoY = 318;
let anchoObs = 145;
let altoObs = 42;
let velocidadObs = 6;
let palabraActual = "Equivocarme";

//palabras para obstáculos
let listaPalabras = [ //Sugerencia de Ia: Agregar \n para establecer obstáculos cuyo texto ocupe 2 líneas
  "Equivocarme",
  "Incumplir",
  "Arruinarlo",
  "Hacer todo mal",
  "No ser\nsuficiente",
  "Quedar en\nridículo",
  "Decepcionar\na todos",
  "No estar\na la altura",
  "No cumplir\nexpectativas"
];

//variables para el color del fondo
//la IA me sugirió guardar los valores RGB en variables para optimizar mi código de transición de etapa
let fondoR = 110;
let fondoG = 195;
let fondoB = 255;

//variables para el color del suelo
let sueloR = 75;
let sueloG = 165;
let sueloB = 65;

let etapa = 1;
//etapas: 1, día a noche; 2, noche a rojo; 3, fallar

//posiciones de la audiencia en orden para iterar
let audienciaX = [165, 365, 545, 65, 265, 460];
let audienciaY = [180, 175, 185, 225, 220, 225];

async function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('div-sketch');
  textFont('Verdana');

  //cargo imágenes del personaje
  imgParado = await loadImage('media/parado.png');
  imgCorrer1 = await loadImage('media/corriendo1.png');
  imgCorrer2 = await loadImage('media/corriendo2.png');
}

function draw() {
  //fondo (va cambiando según la etapa)
  background(fondoR, fondoG, fondoB);

  dibujarAudiencia();
  dibujarSuelo();

  //verifico variables de jugar y no perder (juego en curso)
  if (jugando && !perder) {
    saltar();
    actualizarAmbiente();

    //movimiento del obstáculo
    obstaculoX -= velocidadObs;
    if (obstaculoX < -anchoObs) {
      cambiarObstaculo();
      if (etapa === 3) {
        obstaculoX = width + random(50, 125);
      } else {
        obstaculoX = width + random(90, 220);
      }
    }

    //ejecuto función choque dentro de condicional para verificar colisión
    if (chocar(jugadorX, posY, anchoJugador, altoJugador, obstaculoX, obstaculoY, anchoObs, altoObs)) {
      perder = true;
      jugando = false;
    }
  }

  dibujarObstaculo();
  mostrarPersonaje(jugadorX, posY, anchoJugador, altoJugador);

  //carteles para iniciar o reiniciar
  noStroke();
  if (etapa === 1 && fondoB > 130) {
    fill(15);
  } else {
    fill(255);
  }
  textAlign(CENTER, CENTER);
  textSize(17);
  if (!jugando && !perder) {
    textSize(20);
    text("Presioná ESPACIO para comenzar.", width / 2, 65);
  } else if (perder) {
    textSize(25);
    textStyle(BOLD);
    fill(82, 0, 0)
    text("FALLASTE...", width / 2, 50);
    textSize(17);
    textStyle(NORMAL);
    fill(0);
    text("¡Pero siempre podés volver a empezar!", width / 2, 75);
    text("Presioná R para reiniciar.", width / 2, 97);
  }
}

//utilizo funciones para casi todas las utilidades de mi obra, para optimizar mi código
function dibujarSuelo() {
  let lineaPiso = sueloY + altoJugador;

  noStroke();
  fill(sueloR, sueloG, sueloB); //usa las variables que van pasando de verde a negro
  rect(0, lineaPiso, width, height - lineaPiso);

  stroke(0);
  strokeWeight(2);
  line(0, lineaPiso, width, lineaPiso);
}

function actualizarAmbiente() {
  //sube la velocidad de los obstáculos periódicamente
  if (velocidadObs < 13) {
    velocidadObs += 0.006;
  }

  //etapa 1, el cielo cambia de celeste a negro (anochece)
  if (etapa === 1) {
    fondoR -= 0.20;
    fondoG -= 0.36;
    fondoB -= 0.47;

    //el pasto empieza a cambiar a negro casi al final de la etapa 1
    if (fondoB < 150) {
      if (sueloR > 15) {
        sueloR -= 0.24;
      }
      if (sueloG > 15) {
        sueloG -= 0.58;
      }
      if (sueloB > 20) {
        sueloB -= 0.18;
      }
    }

    if (fondoB <= 30) {
      etapa = 2;
    }
  }
  //etapa 2, el cielo pasa de negro a rojo intenso
  else if (etapa === 2) {
    fondoR += 0.45;
    if (fondoR >= 185) {
      fondoR = 185;
      etapa = 3;//en la etapa 3, comienzan los obstáculos de FALLAR
    }
  }
}

function dibujarAudiencia() {
  let mirarY = 2;
  //si el personaje está en el aire, sube la mirada
    if (posY < 260) {
      mirarY = -1;
    }

  //utilizo un for para no repetir código 6 veces
  for (let i = 0; i < audienciaX.length; i++) {
    let x = audienciaX[i];
    let y = audienciaY[i];

  //diferencio entre audiencia de detrás y audencia de adelante
    if (i < 3) {
      fill(28, 30, 38);
      stroke(15, 15, 20);
    } else {
      fill(16, 18, 24);
      stroke(8, 8, 12);
    }
    strokeWeight(2);

    ellipse(x, y + 115, 185, 160);
    ellipse(x, y + 10, 95, 105);

    noStroke();
    fill(245);
    ellipse(x - 19, y, 24, 16);
    ellipse(x + 19, y, 24, 16);

    //condicional para que el miembro de la audiencia de la izquierda mire para la derecha
    let mirarX = -3;
    if (x < jugadorX) {
      mirarX = 3;
    }

    fill(10);
    ellipse(x - 19 + mirarX, y + mirarY, 10, 10);
    ellipse(x + 19 + mirarX, y + mirarY, 10, 10);
  }
}

function cambiarObstaculo() {
  if (etapa === 3) {
    palabraActual = "FALLAR";
    anchoObs = 115;
    altoObs = 42;
  } else {
    let nuevaPalabra = random(listaPalabras);
    //while para que no se repitan las palabras
    while (nuevaPalabra === palabraActual) {
      nuevaPalabra = random(listaPalabras);
    }
    palabraActual = nuevaPalabra;

    //condicional para ajustar los obstáculos según si la frase se divide o no
    if (palabraActual.includes("\n")) {
      anchoObs = 145;
      altoObs = 72;
    } else {
      anchoObs = 145;
      altoObs = 42;
    }
  }

  obstaculoY = (sueloY + altoJugador) - altoObs;
}

function dibujarObstaculo() {
  fill(22, 22, 28);
  stroke(235);
  strokeWeight(2);
  rect(obstaculoX, obstaculoY, anchoObs, altoObs, 5);

  noStroke();
  textStyle(NORMAL);
  //si es etapa 3, el texto es más grande y rojo
  if (etapa === 3) {
    fill(255, 80, 80);
    textSize(20);
  } else {
    fill(245);
    textSize(16);
  }
  textAlign(CENTER, CENTER);
  textLeading(22);

  text(palabraActual, obstaculoX + anchoObs / 2, obstaculoY + altoObs / 2);
}

function mostrarPersonaje(x, y, ancho, alto) {
  //si no está jugando, el personaje está parado
  if (!jugando) {
    image(imgParado, x, y, ancho, alto);
  } else {
    //utilizo framecount para intercalar entre las dos imágenes de movimiento (sugerencia de IA)
    if (frameCount % 16 < 8) {
      image(imgCorrer1, x, y, ancho, alto);
    } else {
      image(imgCorrer2, x, y, ancho, alto);
    }
  }
}

function saltar() {
  //función que controla la física del salto
  posY += velocidadY;
  //utilizo variable gravedad para que el movimiento del salto se vea más natural
  velocidadY += gravedad;

  //al llegar al suelo, la velocidad es 0 (así no sigue de largo)
  if (posY >= sueloY) {
    posY = sueloY;
    velocidadY = 0;
  }
}

function keyPressed() {
  //con espacio salta
  if (key === ' ') {
    if (!jugando && !perder) {
    jugando = true;
    }
  }

  //solo puede saltar si está jugando y está tocando el suelo
  if (posY === sueloY && !perder) {
    velocidadY = fuerzaSalto;
  }

  //con R se reinician el juego y todas las variables
  if ((key === 'r' || key === 'R') && perder) {
    perder = false;
    jugando = true;
    fondoR = 110;
    fondoG = 195;
    fondoB = 255;
    sueloR = 75;
    sueloG = 165;
    sueloB = 65;
    etapa = 1;
    velocidadObs = 6;
    palabraActual = "Equivocarme";
    anchoObs = 145;
    altoObs = 42;
    obstaculoY = (sueloY + altoJugador) - altoObs;
    obstaculoX = width;
    posY = sueloY;
    velocidadY = 0;
  }
}
  
//Sugerencia de IA, utilizar AABB collision para mi función chocar
function chocar(pX, pY, pAncho, pAlto, obsX, obsY, obsAncho, obsAlto) {
  let margen = 8;
  return (
    //AABB verifica si hay superposición entre dos cajas, ya sea horizontal o verticalmente
    pX + margen < obsX + obsAncho &&
    pX + pAncho - margen > obsX &&
    pY + margen < obsY + obsAlto &&
    pY + pAlto - margen > obsY);
}