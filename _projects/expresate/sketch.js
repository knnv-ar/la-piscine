/* TP N°2, Vera Pallavicini. Artes Multimediales I (2024)

Nombre de la obra: "Expresate" */

let fft, espectro, mic;
let particulas = [];
let fuente;
let indice;
let paleta = [
  {
    rojo: 4,
    verde: 1,
    azul: 209,
  },
  {
    rojo: 123,
    verde: 0,
    azul: 55,
  },
  {
    rojo: 1,
    verde: 209,
    azul: 178,
  },
  {
    rojo: 195,
    verde: 1,
    azul: 209,
  },
  {
    rojo: 247,
    verde: 19,
    azul: 19,
  },
  {
    rojo: 255,
    verde: 123,
    azul: 0,
  },
  {
    rojo: 247,
    verde: 221,
    azul: 51,
  },
];

const cantidadBandas = 128;

function preload() {
  fuente = loadFont("./assets/montserrat.ttf");
}

function setup() {
  let canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  rectMode(CENTER);

  // input de micrófono!
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, cantidadBandas); // creo el objeto fft, le paso smoothing y cantidad de bandas que quiero obtener

  // -----> creación de partículas
  for (let i = 0; i < cantidadBandas; i++) {
    indice = Math.round(map(i, 0, cantidadBandas, 0, paleta.length - 1)); // mapeo i para obtener el índice del color
    // creo un objeto con las propiedades iniciales
    let propiedades = {
      posicionX: random(-width / 2 + 30, width / 2 - 30),
      posicionY: random(-height / 2 + 30, height / 2 - 30),
      posicionZ: random(0, 100),
      rotacion: {
        x: 0,
        y: 0,
        z: 0,
      },
      tamano: 30,
      opacidad: 150,
      // colores RGB
      relleno: {
        rojo: paleta[indice].rojo,
        verde: paleta[indice].verde,
        azul: paleta[indice].azul,
      },
    };
    particulas.push(propiedades);
  }
}

function draw() {
  background(0);
  fft.setInput(mic); // indico que analice el micrófono
  espectro = fft.analyze(); // obtengo el análisis del espectro

  textFont(fuente);
  text("Expresate.", 0, height / 2 - 30); // dibuja el texto

  for (let i = 0; i < particulas.length; i++) {
      actualizarParticula(i); // actualización de partículas
      dibujarParticula(
        particulas[i].posicionX,
        particulas[i].posicionY,
        particulas[i].posicionZ,
        particulas[i].rotacion.x,
        particulas[i].rotacion.y,
        particulas[i].rotacion.z,
        particulas[i].tamano,
        particulas[i].relleno.rojo,
        particulas[i].relleno.verde,
        particulas[i].relleno.azul,
        particulas[i].opacidad
      ); // dibujo de las partículas
  }
}

// ----------> FUNCIONES DE USUARIO

// dibujo de la partícula
function dibujarParticula(
  x,
  y,
  z,
  rotacionX,
  rotacionY,
  rotacionZ,
  tamano,
  rojo,
  verde,
  azul,
  a
) {
  push();
  fill(rojo, verde, azul, a);
  translate(x, y, z);
  rotateX(rotacionX);
  rotateY(rotacionY);
  rotateZ(rotacionZ);
  box(tamano);
  pop();
}

// actualización de la partícula
function actualizarParticula(i) {
  let propiedades = analizarEspectro(espectro[i]); // mapea los valores del espectro para poder ser utilizados con las partículas (devuelve un objeto)

  // actualizo la rotación de las partículas
  particulas[i].rotacion.x += propiedades.incX;
  particulas[i].rotacion.y += propiedades.incY;
  particulas[i].rotacion.z += propiedades.incZ;
  particulas[i].opacidad = propiedades.opacidad;
  particulas[i].tamano = propiedades.tamano;
}

// mapeo de los valores del espectro
function analizarEspectro(valor) {
  return {
    incX: map(valor, 0, 255, -0.5, 0.5),
    incY: map(valor, 0, 255, -0.5, 0.5),
    incZ: map(valor, 0, 255, -5, 5),
    opacidad: map(valor, 0, 255, 0, 150),
    tamano: map(valor, 0, 255, 5, 30),
  };
}