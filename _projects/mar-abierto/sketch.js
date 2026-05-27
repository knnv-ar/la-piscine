let capa;
let capa2;
let imagenes = [];
let nombresImagenes = [
  "img/animal1.webp", "img/animal2.webp", "img/animal3.webp", "img/animal4.webp",
  "img/pesca1.webp", "img/pesca2.webp", "img/pesca3.webp", "img/pesca4.webp",
  "img/petroleo1.webp", "img/petroleo2.webp", "img/petroleo3.webp", "img/petroleo4.webp",
  "img/plastico1.webp", "img/plastico2.webp", "img/plastico3.webp", "img/plastico4.webp"
];
let indice = 0;
let intervalo = 4000;
let cambio = 0;
let logo;

let indiceAnterior = 0;
let indiceSiguiente = 1;
let opacidad = 0;
let duracionTransicion = 1000;
let enTransicion = false;
let inicioTransicion = 0;
let mensajes = [
  "Las actividades humanas reducen las especies marinas.",
  "El tráfico marítimo afecta a cetáceos y otras especies.",
  "Los corales desaparecen por el cambio climático.",
  "Cientos de miles de animales marinos mueren por plásticos.",
  "La pesca furtiva agota los peces y amenaza la biodiversidad.",
  "La pesca ilegal causa pérdidas millonarias.",
  "Hasta el 30% de la pesca es ilegal.",
  "La pesca furtiva pone en peligro especies y comunidades.",
  "La extracción de petróleo pone en riesgo los ecosistemas .",
  "Los derrames de petróleo causan daños millonarios.",
  "Limpiar un derrame cuesta más de 10.000 millones.",
  "Los derrames afectan la vida y causan pérdidas económicas.",
  "Más de 8 millones de toneladas de plástico anualmente.",
  "La contaminación plástica amenaza a más de 800 especies.",
  "El costo de la contaminación plástica es altisimo",
  "Los microplásticos afectan la fauna marina y los humanos."
];

let posicionActual = 0;
let tiempoCambio = 0;
let duracionCambio = 5000;

function preload() {
  logo = loadImage("img/logo.webp");
  
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage("img/" + nombresImagenes[i]);
  }
}

function setup() {
  let canvas = createCanvas(480, 620);
  canvas.parent('div-sketch');
  capa = createGraphics(width, height);
  capa.background(0, 100);
  capa2 = createGraphics(420, 420);
  capa2.background(0, 100);
  cambio = millis();
}

function draw() {
  background(255);

  if (!enTransicion && millis() - cambio > intervalo) {
    enTransicion = true;
    inicioTransicion = millis();
    indiceAnterior = indice;
    indiceSiguiente = (indice + 1) % imagenes.length;
  }

  if (enTransicion) {
    let tiempoTranscurrido = millis() - inicioTransicion;
    let progreso = constrain(tiempoTranscurrido / duracionTransicion, 0, 1);
    opacidad = progreso * 255;

    tint(255, 255 - opacidad);
    image(imagenes[indiceAnterior], 0, 0, width, height);

    tint(255, opacidad);
    image(imagenes[indiceSiguiente], 0, 0, width, height);

    noTint();

    if (progreso >= 1) {
      enTransicion = false;
      indice = indiceSiguiente;
      cambio = millis();
    }
  } else {
    image(imagenes[indice], 0, 0, width, height);
  }

  capa.clear();
  capa.fill(0, 100);
  capa.rect(27, 87, 426, 423);
  capa.filter(BLUR,3)
  filter(BLUR, 3);
  image(capa, 0, 0);
  
  image(logo, 30, 20, 50, 50);
  fill(255);
  noStroke();
  textFont("Arial");
  textSize(25);
  textStyle(BOLD);
  text("Mar Abierto", 90, 53);
  
  capa2.clear();
  capa2.image(imagenes[indice], 0, 0, capa2.width, height);
  image(capa2, 30, 90);
  
  if (millis() - tiempoCambio > duracionCambio) {
    posicionActual = (posicionActual + 1) % mensajes.length;
    tiempoCambio = millis();
  }
  push()
  textSize(15);
  text(mensajes[posicionActual], 30, 570);
  pop()
}