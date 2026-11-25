/*
Emilse González Dama
Artes Multimediales 1 | Cátedra Lacabanne | TM
TP2: Oráculo Mineral
*/

let cancion;
let pantalla = 0; // Controla en qué pantalla estamos (0, 1, 2, 3, 4)
let fuenteEspecial;
let volumenMusica = 0.5;

// Variables para el ingreso de nombre
let inputNombre;
let nombreUsuario = "";

// Arrays paralelos para las 6 piedras
let imgs = [];
let nombres = [];
let mensajes = [];
let posX = [];
let posY = [];

// Guarda el número de la piedra elegida (-1 significa que aún no se elegió)
let piedraElegida = -1;

async function setup() {
  let canvas = createCanvas(700, 500);
  canvas.parent('div-sketch');

  // Cargamos la canción de fondo
  cancion = createAudio("sonido/digitalis.mp3");

  // Cargamos la tipografía
  fuenteEspecial = await loadFont("tipografia/Oceanside Typewriter.ttf");

  // Creamos la caja de texto para el nombre (la ocultamos al principio)
  inputNombre = createInput("");
  inputNombre.size(220, 28);
  inputNombre.style("font-family", "monospace");
  inputNombre.style("font-size", "13px");
  inputNombre.style("text-align", "center");
  inputNombre.style("background", "#");
  inputNombre.style("border", "1px solid #202020");
  inputNombre.hide();

  // CARGA DE LAS 6 PIEDRAS
  // Piedra 1
  imgs.push(await loadImage("img/cuarzo.png"));
  nombres.push("Cuarzo cristal");
  mensajes.push(
    "CLARIDAD: Lo que hoy parece confuso pronto mostrará su forma real."
  );
  posX.push(160);
  posY.push(130);

  // Piedra 2
  imgs.push(await loadImage("img/obsidiana.png"));
  nombres.push("Obsidiana");
  mensajes.push(
    "SOMBRA: Mirar hacia adentro requiere aceptar lo que no querés ver."
  );
  posX.push(350);
  posY.push(130);

  // Piedra 3
  imgs.push(await loadImage("img/amatista.png"));
  nombres.push("Amatista");
  mensajes.push(
    "CALMA: Bajá el ritmo del ruido externo para escuchar tu propia voz."
  );
  posX.push(540);
  posY.push(130);

  // Piedra 4
  imgs.push(await loadImage("img/ojo-tigre.png"));
  nombres.push("Ojo de tigre");
  mensajes.push(
    "FOCO: Tenés la fuerza necesaria para sostener tu propio camino."
  );
  posX.push(160);
  posY.push(275);

  // Piedra 5
  imgs.push(await loadImage("img/lapizuli.png"));
  nombres.push("Lapizuli");
  mensajes.push(
    "VERDAD: Expresá lo que sentís sin miedo a romper el silencio."
  );
  posX.push(350);
  posY.push(275);

  // Piedra 6
  imgs.push(await loadImage("img/piedra-luna.png"));
  nombres.push("Piedra de la luna");
  mensajes.push(
    "CICLO: Todo movimiento tiene su pausa; confiá en los tiempos."
  );
  posX.push(540);
  posY.push(275);

  textFont("monospace");
}

function draw() {
  background("#ffdfd7");

  // Decidimos qué pantalla dibujar según el valor de la variable 'pantalla'
  if (pantalla === 0) {
    dibujarPantalla0();
  } else if (pantalla === 1) {
    dibujarPantalla1();
  } else if (pantalla === 2) {
    dibujarPantalla2();
  } else if (pantalla === 3) {
    dibujarPantalla3();
  } else if (pantalla === 4) {
    dibujarPantalla4();
  }
}

// PANTALLA 0: PORTADA
function dibujarPantalla0() {
  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);

  fill(180, 50, 30);
  textFont(fuenteEspecial);
  textSize(55);
  text("Oráculo Mineral", width / 2, 190);

  textSize(15);
  fill(90);
  text("Una pausa para escuchar lo que vibra en silencio", width / 2, 250);

  // Botón INICIAR en el centro (x: 350, y: 320, ancho: 160, alto: 40)
  textFont("monospace");
  dibujarBoton("INICIAR", width / 2, 320, 160, 40);
}

// PANTALLA 1: SOLICITAR NOMBRE
function dibujarPantalla1() {
  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);

  textSize(15);
  text("Antes de comenzar, ¿cómo te llamás?", width / 2, 180);

  // Posicionamos la caja de texto centrada en el lienzo
  inputNombre.show();
  inputNombre.position(235, 225); // AYUDA

  // Botón CONTINUAR
  dibujarBoton("CONTINUAR", width / 2, 310, 160, 40);
}

// PANTALLA 2: SALUDO Y EXPLICACIÓN
function dibujarPantalla2() {
  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);

  textFont(fuenteEspecial);
  textSize(22);
  text("Hola, " + nombreUsuario + ".", width / 2, 150);

  textFont("monospace");
  textSize(15);
  fill(70);
  text(
    "Cada mineral guarda una frecuencia y una pregunta distinta.\n" +
      "Respirá hondo, observá las formas en silencio\n" +
      "y dejá que tu intuición elija cuál necesita hablarte hoy.",
    width / 2,
    225
  );

  // Botón ELEGIR PIEDRA
  dibujarBoton("ELEGIR PIEDRA", width / 2, 330, 180, 40);
}

// PANTALLA 3: EL ORÁCULO (LAS 6 PIEDRAS)
function dibujarPantalla3() {
  // Si ya eligió una piedra, mostramos el botón FINALIZAR
  if (piedraElegida !== -1) {
    dibujarBoton("FINALIZAR", 620, 35, 110, 28);
  }

  for (let i = 0; i < imgs.length; i++) {
    // Si esta es la piedra seleccionada, la marcamos con un círculo editorial
    if (i === piedraElegida) {
      noFill();
      stroke(200, 60, 40);
      strokeWeight(1.5);
      ellipse(posX[i], posY[i], 105, 105);

      fill("#fbedea");
      noStroke();
      ellipse(posX[i], posY[i], 96, 96);
    }

    // Dibujamos la imagen de la piedra
    imageMode(CENTER);
    image(imgs[i], posX[i], posY[i], 75, 75);
    imageMode(CORNER);

    // Nombre pequeño debajo de cada piedra
    textFont(fuenteEspecial);
    fill(40);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    text(nombres[i], posX[i], posY[i] + 62);
  }

  // Ficha editorial inferior para el mensaje
  textFont("monospace");
  dibujarFichaMensaje();
}

// PANTALLA 4: CIERRE DEL RITUAL
function dibujarPantalla4() {
  // Lógica del Fade Out: mientras el volumen sea mayor a 0, baja despacito
  if (volumenMusica > 0) {
    volumenMusica -= 0.004; // Podés hacer este número más chico para que dure más el fade
    if (volumenMusica <= 0) {
      volumenMusica = 0;
      cancion.stop(); // Cuando llega a 0, frena el audio por completo
    }
    cancion.volume(volumenMusica);
  }

  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);

  textFont(fuenteEspecial);
  textSize(18);
  text(
    "Gracias por consultar el oráculo, " + nombreUsuario + ".",
    width / 2,
    160
  );

  // Le recordamos qué piedra lo acompañó hoy
  fill(180, 50, 30);
  textSize(14);
  text("Tu guía de hoy: " + nombres[piedraElegida], width / 2, 210);

  textFont("monospace");
  fill(70);
  textSize(12);
  text("Llevate estas palabras al silencio cotidiano.", width / 2, 250);

  // Botón para reiniciar toda la experiencia
  dibujarBoton("VOLVER A EMPEZAR", width / 2, 340, 180, 40);
}

// FUNCIONES DE USUARIO AUXILIARES
function dibujarFichaMensaje() {
  // Recuadro suave estilo tarjeta editorial en la parte inferior
  fill(255, 255, 255, 180);
  stroke(210);
  strokeWeight(1);
  rectMode(CENTER);
  rect(width / 2, 425, 600, 85, 4); // El último número (4) redondea apenas las esquinas
  rectMode(CORNER);

  noStroke();
  textAlign(CENTER, CENTER);

  if (piedraElegida === -1) {
    fill(110);
    textSize(12);
    text(
      nombreUsuario + ", tocá una piedra para revelar tu mensaje...",
      width / 2,
      425
    );
  } else {
    // Título de la piedra elegida
    fill(180, 50, 30);

    textSize(13);
    text("— " + nombres[piedraElegida] + " —", width / 2, 405);

    // Mensaje del oráculo
    fill(20);
    textSize(13);
    text(mensajes[piedraElegida], width / 2, 435);
  }
}

// Función reutilizable para dibujar cualquier botón con efecto hover
function dibujarBoton(etiqueta, x, y, ancho, alto) {
  rectMode(CENTER);

  // Detectamos si el mouse está encima del botón para cambiarle el color
  let sobreBoton =
    mouseX > x - ancho / 2 &&
    mouseX < x + ancho / 2 &&
    mouseY > y - alto / 2 &&
    mouseY < y + alto / 2;

  if (sobreBoton) {
    fill(50); // Fondo oscuro al pasar el mouse
    stroke(20);
  } else {
    fill("#fbedea");
    stroke(20);
  }

  strokeWeight(1);
  rect(x, y, ancho, alto);

  // Texto del botón
  noStroke();
  if (sobreBoton) {
    fill("#F8F4EB");
  } else {
    fill(20);
  }
  textAlign(CENTER, CENTER);
  textSize(11);
  text(etiqueta, x, y);

  rectMode(CORNER);
}

// Función auxiliar para saber si hicimos clic dentro de un botón
function clicEnBoton(x, y, ancho, alto) {
  return (
    mouseX > x - ancho / 2 &&
    mouseX < x + ancho / 2 &&
    mouseY > y - alto / 2 &&
    mouseY < y + alto / 2
  );
}

// EVENTOS DE MOUSE
function mousePressed() {
  if (pantalla === 0) {
    if (clicEnBoton(width / 2, 320, 160, 40)) {
      cancion.volume(volumenMusica);
      cancion.loop();
      cancion.play();
      pantalla = 1;
    }
  } else if (pantalla === 1) {
    if (clicEnBoton(width / 2, 310, 160, 40)) {
      let textoIngresado = inputNombre.value().trim();
      if (textoIngresado === "") {
        nombreUsuario = "Viajero/a";
      } else {
        nombreUsuario = textoIngresado;
      }
      inputNombre.hide();
      pantalla = 2;
    }
  } else if (pantalla === 2) {
    if (clicEnBoton(width / 2, 330, 180, 40)) {
      pantalla = 3;
    }
  } else if (pantalla === 3) {
    // 1. Revisamos si tocó el botón FINALIZAR (solo si ya eligió una piedra)
    if (piedraElegida !== -1 && clicEnBoton(620, 35, 110, 28)) {
      pantalla = 4;
      return;
    }

    // 2. Revisamos si tocó alguna piedra
    for (let i = 0; i < imgs.length; i++) {
      if (dist(mouseX, mouseY, posX[i], posY[i]) < 42) {
        piedraElegida = i;
        break;
      }
    }
  } else if (pantalla === 4) {
    // Botón VOLVER A EMPEZAR
    if (clicEnBoton(width / 2, 340, 180, 40)) {
      piedraElegida = -1;
      inputNombre.value(""); // Limpiamos el nombre anterior
      pantalla = 0;
    }
  }
}
