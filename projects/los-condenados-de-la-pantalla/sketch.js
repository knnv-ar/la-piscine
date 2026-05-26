let img0;
let cantidad = 2500; //cantidad de palabras
let frasesPorFrame = 2;
let tamano = 13; //Tamaño letra
let contador = 0; // Contador global para ambas funciones
let modoActual = 0; // 0 = palabras, 1 = nombres
let funcionesDibujo = [dibujarTandaDePalabras, dibujarTandaDeNombres];

function preload() {
    img0 = loadImage("juanito-laguna1.png");
}

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('div-sketch');

  textAlign(CENTER, CENTER);
  textFont("monospace");
  noStroke();
  textSize(tamano);
  background(0); // El fondo se dibuja solo una vez al inicio
  frameRate(30);
  strokeWeight(1);
}

function draw() {
  if (contador < cantidad) {
    funcionesDibujo[modoActual]();
  }
}

// --- FUNCIÓN PARA TECLADO -----
function keyPressed() {
  if (key === " ") {
    // Cambiamos el modo: (0 + 1) % 2 = 1. (1 + 1) % 2 = 0.
    modoActual = (modoActual + 1) % 2;

    background(0);
    contador = 0;
  }
}

// --- Declaraciones de Funciones ---
// ----- FUNCIÓN DE USUARIO 1: DIBUJAR PALABRAS -----
function dibujarTandaDePalabras() {
  textSize(tamano);
  stroke(0);
  for (let i = 0; i < frasesPorFrame; i++) {
    if (contador >= cantidad) {
      break; 
    }

    if (frases.length > 0) {
      let indice = int(random(frases.length));
      let oracion = frases[indice].tweet;

      let palabras = oracion.split(" ");
      let palabra = random(palabras);
      let x = random(width);
      let y = random(height);

      let pix = img0.get(int(x), int(y));
      fill(pix);
      text(palabra, x, y);

      contador++; // Incrementamos el contador global
    }
  }
}

// ----- FUNCIÓN 2: DIBUJAR NOMBRES -----
function dibujarTandaDeNombres() {
  textSize(9);

  for (let i = 0; i < frasesPorFrame; i++) {
    if (contador >= cantidad) {
      break;
    }

    let indice = int(random(frases.length));
    let item = frases[indice];
    let usuario = item.usuario;
    let esAnonimo = item.anonimo === "si";

    let x, y;
    x = random(width);
    y = random(height);

    if (esAnonimo) {
      stroke(0);
    } else {
      stroke("#666666");
    }

    let pix = img0.get(int(x), int(y));
    fill(pix);
    text(usuario, x, y);

    contador++; // Incrementamos el contador global
  }
}

// --- Array de Frases ---
let frases = [
  {
    usuario: "@12ladyanne",
    tweet:
      "ES NEGRA BOLIVIANA Y NACIÓ POBRE SOLO QUE VIAJABA CON PLATA AJENA PLATA QUE EL PADRE LE ROBÓ A LOS NIÑOS POBRES Y POR ESO LA JUSTICIA LO PROCESÓ\nNACIÓ Y MORIRÁ MARRÓN Y TURBIA",
    anonimo: "no",
  },
  {
    usuario: "@IvanRuiz23",
    tweet:
      "como rompen la pija, voten a quien voten mientras existan los negros de mierda el pais sigue siendo la misma poronga.",
    anonimo: "si",
  },
  {
    usuario: "@osunnaaaaaaa",
    tweet: "negros de mierda se tienen q morir",
    anonimo: "no",
  },
  {
    usuario: "@gatozepam",
    tweet:
      "Porque los villeros son así. Gastan la guita en viajar, en un reloj, en un coche. Jamás los vas a ver arreglarse los dientes, bajar de peso, vestirse bien o formarse academicamente. Son la pirámide más baja del consumismo. Su realización está en tener y no en hacer",
    anonimo: "si",
  },
  {
    usuario: "@ArgentinaNostra",
    tweet:
      "Estoy harto de fingir que los villeros no son delincuentes y un estorbo para la sociedad. Desde el momento en que viven en villas, ya son delincuentes porque están habitando en asentamientos ilegales donde no pagan los servicios básicos.",
    anonimo: "si",
  },
];
