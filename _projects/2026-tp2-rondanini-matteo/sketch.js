// TP 2
// THE THINGS WE LEFT BEHIND
// Rondanini Matteo

// todas las variables //
// recursos
let fotoInicio;
let musica;
let fuenteTitulo;
let logoMariposa;

// array
let fotos = [];

let pantalla = 0;
let recuerdoElegido = 0;
let versionRecuerdo = 0;

// animacion
let animacionRebobinado = false;
let contadorRebobinado = 0;

// boton inicio
let botonX = 450;
let botonY = 475;
let botonAncho = 250;
let botonAlto = 55;

// recuerdos
let posicionesX = [110, 337, 563, 790, 225, 450, 675];
let posicionesY = [250, 250, 250, 250, 465, 465, 465];

let inclinaciones = [-0.10, 0.08, -0.07, 0.11, -0.09, 0.07, -0.11];

let anotaciones = [
  "siempre me gusta observar el fin del día...",
  "la belleza de pequeños momentos",
  "se pueden apreciar los rastros de otra época",
  "su maullido",
  "mi musa preferida",
  "los detalles que te caracterizan",
  "un edificio en la ciudad en construcción"
];

let anotacionesAlteradas = [
  "¿y si el día nunca más vuelve a terminarse?",
  "¿cuántas veces se habrá cenado acá?",
  "alguien decidió abandonarlas, pero también alguien decidió conservarlas",
  "ojalá pudiera escuchar su maullido de nuevo",
  "siempre te presto atención, incluso cuando ni vos misma lo hacés",
  "los detalles que quedaron grabados en mi recuerdo",
  "la ciudad todavía no termina, permanece en constante movimiento. ¿yo también?"
];

let tonoRojo = [85, 100, 90, 65, 110, 105, 70];
let tonoVerde = [75, 75, 95, 105, 85, 65, 90];
let tonoAzul = [145, 165, 155, 175, 180, 155, 175];

// carga de material
async function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('div-sketch');

  fotoInicio = await loadImage("imagenes/fondo-inicio.png");
  musica = createAudio("sonidos/toallofyou.mp3");
  musica.hide();

  fuenteTitulo = await loadFont("font/dudu-calligraphy.ttf");
  logoMariposa = await loadImage("imagenes/mariposa.png");

  // cargar recuerdos
  fotos.push(await loadImage("imagenes/atardecer.png"));
  fotos.push(await loadImage("imagenes/comedor.png"));
  fotos.push(await loadImage("imagenes/munecas.png"));
  fotos.push(await loadImage("imagenes/gato.png"));
  fotos.push(await loadImage("imagenes/ella.png"));
  fotos.push(await loadImage("imagenes/ella-rojo.png"));
  fotos.push(await loadImage("imagenes/ciudad.png"));
}

function draw() {
  textFont(fuenteTitulo);

  if (pantalla === 0) {
    dibujarInicio();
  } else if (pantalla === 1) {
    dibujarArchivo();
  } else if (pantalla === 2) {
    dibujarRecuerdo();
  }
}

// fondo pantallas internas
function dibujarFondo() {
  image(fotoInicio, 0, 0, width, height);

  noStroke();
  fill(10, 15, 35, 215);
  rect(0, 0, width, height);
}

// pantalla de inicio
function dibujarInicio() {
  image(fotoInicio, 0, 0, width, height);

  noStroke();
  fill(10, 15, 35, 175);
  rect(0, 0, width, height);

  // texto
  fill(220, 220, 235);
  textSize(20);
  textAlign(CENTER);

  text("archivo de memorias", width / 2, 145);

  // titulo
  fill(245, 240, 250);
  textSize(58);

  text("The things we", width / 2, 235);
  text("left behind", width / 2, 295);

  image(logoMariposa, 410, 320, 100, 100);

  // mouse sobre boton
  let sobreBoton =
    mouseX > botonX - botonAncho / 2 &&
    mouseX < botonX + botonAncho / 2 &&
    mouseY > botonY - botonAlto / 2 &&
    mouseY < botonY + botonAlto / 2;

  // boton
  if (sobreBoton) {
    fill(170, 165, 215);
  } else {
    fill(105, 105, 165);
  }

  rect(
    botonX - botonAncho / 2,
    botonY - botonAlto / 2,
    botonAncho,
    botonAlto
  );

  fill(255);
  textSize(22);
  text("Entrar al archivo", botonX, botonY + 7);
}

// archivo fotografico
function dibujarArchivo() {
  dibujarFondo();

  // encabezado
  fill(245, 240, 250);
  textAlign(CENTER);

  textSize(35);
  text("Mi archivo", width / 2, 55);

  textSize(17);
  fill(205, 205, 225);
  text("Hay cosas que el tiempo no puede borrar", width / 2, 88);

  // volver
  textSize(16);
  textAlign(LEFT);
  text("← volver", 35, 40);

  // fotografias
  for (let i = 0; i < fotos.length; i++) {
    dibujarPolaroid(
      fotos[i],
      posicionesX[i],
      posicionesY[i],
      inclinaciones[i],
      anotaciones[i]
    );
  }
}

// polaroid
function dibujarPolaroid(foto, x, y, inclinacion, anotacion) {
  push();

  // punto de referencia el centro de la polaroid
  translate(x, y);

  // inclinacion
  rotate(inclinacion);

  // marco
  noStroke();
  fill(238, 234, 222);
  rect(-85, -95, 170, 190);

  image(foto, -73, -83, 146, 110);

  // anotacion inferior
  fill(65, 60, 70);
  textAlign(CENTER, CENTER);
  textSize(14);

  text(anotacion, -72.5, 55, 145, 35);

  pop();
}

// recuerdo ampliado
function dibujarRecuerdo() {
  dibujarFondo();

  // volver
  fill(230, 225, 240);
  textAlign(LEFT);
  textSize(18);
  text("← volver al archivo", 35, 40);

  // titulo
  fill(245, 240, 250);
  textAlign(CENTER);
  textSize(24);

  if (versionRecuerdo === 0) {
    text("Un fragmento del archivo", 450, 55);
  } else {
    text("El recuerdo ha cambiado", 450, 55);
  }

  // marco
  fill(238, 234, 222);
  noStroke();
  rect(170, 75, 560, 470);

  // recuerdo og
  image(fotos[recuerdoElegido], 190, 95, 520, 390);

  // alteracion recuerdo
  if (versionRecuerdo === 1) {
    // tonalidad diferente según recuerdo
    fill(
      tonoRojo[recuerdoElegido],
      tonoVerde[recuerdoElegido],
      tonoAzul[recuerdoElegido],
      65
    );

    noStroke();
    rect(190, 95, 520, 390);

    // indicador recuerdo alt
    fill(245, 240, 250);
    textAlign(LEFT);
    textSize(15);
    text("RECUERDO ALTERADO", 205, 120);
  }

  // animacion rebobinado
  if (animacionRebobinado === true) {
    // lineas de interferencia
    for (let i = 0; i < 9; i++) {
      let lineaY = random(95, 485);
      let lineaX = random(190, 650);
      let largo = random(30, 180);

      stroke(220, 225, 255, 170);
      line(lineaX, lineaY, lineaX + largo, lineaY);
    }

    noStroke();
    let opacidad = 220 - contadorRebobinado * 6;

    tint(255, opacidad);
    image(logoMariposa, 365, 230, 170, 170);
    noTint();

    // contar los fps de animación
    contadorRebobinado++;

    if (contadorRebobinado > 30) {
      animacionRebobinado = false;
      contadorRebobinado = 0;
    }
  }

  // anotacion
  fill(65, 60, 70);
  textAlign(CENTER, CENTER);
  textSize(16);
  textLeading(18);

  if (versionRecuerdo === 0) {
    text(anotaciones[recuerdoElegido], 210, 488, 480, 55);
  } else {
    text(anotacionesAlteradas[recuerdoElegido], 210, 488, 480, 55);
  }

  // rebobinar
  let sobreBoton =
    mouseX > 345 &&
    mouseX < 555 &&
    mouseY > 550 &&
    mouseY < 590;

  if (sobreBoton) {
    fill(170, 165, 215);
  } else {
    fill(105, 105, 165);
  }

  rect(345, 550, 210, 40);

  fill(255);
  textAlign(CENTER);
  textSize(18);

  if (versionRecuerdo === 0) {
    text("↶ Rebobinar este recuerdo", 450, 576);
  } else {
    text("↶ Volver al original", 450, 576);
  }
}

// clics del mouse
function mousePressed() {
  // inicio
  if (pantalla === 0) {
    if (
      mouseX > botonX - botonAncho / 2 &&
      mouseX < botonX + botonAncho / 2 &&
      mouseY > botonY - botonAlto / 2 &&
      mouseY < botonY + botonAlto / 2
    ) {
      musica.volume(0.3);
      musica.loop();
      pantalla = 1;
    }
  }

  // archivo
  else if (pantalla === 1) {
    // volver
    if (mouseX < 110 && mouseY < 65) {
      pantalla = 0;
    } else {
      // seleccion fotografias
      for (let i = 0; i < fotos.length; i++) {
        if (
          mouseX > posicionesX[i] - 90 &&
          mouseX < posicionesX[i] + 90 &&
          mouseY > posicionesY[i] - 100 &&
          mouseY < posicionesY[i] + 100
        ) {
          recuerdoElegido = i;
          versionRecuerdo = 0;
          animacionRebobinado = false;
          pantalla = 2;
        }
      }
    }
  }

  // ampliado
  else if (pantalla === 2) {
    // volver
    if (mouseY < 65) {
      pantalla = 1;
      versionRecuerdo = 0;
    }

    // rebobinar recuerdo
    else if (
      mouseX > 345 &&
      mouseX < 555 &&
      mouseY > 550 &&
      mouseY < 590
    ) {
      if (versionRecuerdo === 0) {
        versionRecuerdo = 1;
      } else {
        versionRecuerdo = 0;
      }
      // inicio animacion
      animacionRebobinado = true;
      contadorRebobinado = 0;
    }
  }
}
