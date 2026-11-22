let imgInterface;
let fondo = [];             // las 3 imgs de fondo
let imagenesListas = false; // evita errores si se hace click antes de que carguen las imagenes, pasa automaticamente a true

let altoBanda = 240;         // capea el alto de las imagenes asi entran todas
let pasoDesplazamiento = 60; // cantidad de pixeles que se mueven al hacer click
let facilidad = 0.12;        // fracción del recorrido que avanza en cada cuadro

// todo esto es para cuando haga click se haga una copia de la img y la siguiente salga mas grande

let copias = [];         // cada copia cambia x eso se guarda como un array porque hay varias copias de la misma cosa
let escalaInicial = 0.3; // tamaño de la primera copia segun el canvas
let escalaNueva = 0.3;   // tamaño de la próxima copia
let crecimiento = 1.15;  // determina cuanto crece cada copia

async function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');

  // esto es para que dentro del canvas si haces click der. no te abra ese menu contextual
  canvas.elt.oncontextmenu = function () {
    return false;
  };

  await cargarImagenes();
}

function draw() {
  background(10);
  actualizarFondo();
  dibujarFondo();
  dibujarCopias();
}

function mousePressed() {
  if (imagenesListas == false) // esto determina si cargaron o no las imagenes, si cargaron lo ignora y sigue
  {
    return;
  }

  // Esto hace que si haces click afuera del lienzo lo ignore
  if (mouseEnLienzo() == false) 
  {
    return;
  }

  // todo esto es para cuando apretes el click izq. ejecute lo de agrandar etc.
  if (mouseButton.left) 
  {
    crearCopia();
    agrandarProximaCopia();
    desplazarFondo();

  // esto pega el reset si tocas el click der.
  } else if (mouseButton.right) 
  {
    reiniciar();
  }
}

async function cargarImagenes() {
  imgInterface = await loadImage('fotos/div-mac-interface.jpg');

  let imgEyes = await loadImage('fotos/div-mac-eyes.jpg');
  let imgWires = await loadImage('fotos/div-mac-wires-man.jpg');
  let imgBlue = await loadImage('fotos/div-mac-blue-screen.jpg');

  // esto determina y guarda la posicion actual de cada fondo uno x uno y despues se lo pasa a "dibujarBanda()" que lo actualiza
  fondo = [
    { img: imgEyes, y: 0, actual: 0, objetivo: 0, dir: 1 },
    { img: imgWires, y: 180, actual: 0, objetivo: 0, dir: -1 },
    { img: imgBlue, y: 360, actual: 0, objetivo: 0, dir: 1 },
  ];

  imagenesListas = true;
}

// ---------- funciones (antes en functions.js) ----------

// Dibuja las tres bandas del fondo, de arriba hacia abajo
function dibujarFondo() 
{
  for (let i = 0; i < fondo.length; i++) 
  {
    dibujarBanda(fondo[i].img, fondo[i].y, fondo[i].actual); // cada ciclo manda a laburar a "dibujarBanda" con la imagen, la posicion y, y el estado actual de cada imagen en especifico
  }
}

// Llena una banda horizontal repitiendo la imagen a lo ancho, el desplazamiento mueve la imagen, con el módulo (%) lo que sale por un lado vuelve a entrar por el otro, así nunca quedan huecos.
function dibujarBanda(img, y, desplazamiento) {
  let anchoImagen = altoBanda * (img.width / img.height);
  let desfase = ((desplazamiento % anchoImagen) + anchoImagen) % anchoImagen;

  for (let x = desfase - anchoImagen; x < width; x += anchoImagen) 
  {
    image(img, x, y, anchoImagen, altoBanda);
  }
}

function dibujarCopias() {
  for (let i = 0; i < copias.length; i++) 
  {
    dibujarInterface(copias[i].x, copias[i].y, copias[i].ancho);
  }
}

// Dibuja interface centrada en (x, y), manteniendo la proporción
function dibujarInterface(x, y, ancho) {
  let alto = ancho * (imgInterface.height / imgInterface.width);
  image(imgInterface, x - ancho / 2, y - alto / 2, ancho, alto);
}

// esto es para que cree la copia cuando haces click y que agrande la siguiente
function crearCopia() {
  // cuando haces click las coordenadas del cursor quedan guardadas, se lo manda a copias y deja ahi la imagen
  copias.push
  ({
    x: mouseX,
    y: mouseY,
    ancho: width * escalaNueva,
  });
}

function agrandarProximaCopia() {
  escalaNueva = escalaNueva * crecimiento;

  // Tope: nunca más grande que el lienzo
  if (escalaNueva > escalaMaxima()) 
  {
    escalaNueva = escalaMaxima();
  }
}

// Devuelve la escala con la que interface ocupa justo el lienzo (ancho y alto)
function escalaMaxima() {
  let proporcion = imgInterface.height / imgInterface.width;
  let maxima = (height / width) / proporcion;

  if (maxima > 1) {
    maxima = 1;
  }
  return maxima;
}

function desplazarFondo() {
  for (let i = 0; i < fondo.length; i++) {
    fondo[i].objetivo += pasoDesplazamiento * fondo[i].dir;
  }
}

// reinicia todo
function reiniciar() {
  copias = [];
  escalaNueva = escalaInicial;

  for (let i = 0; i < fondo.length; i++) {
    fondo[i].actual = 0;
    fondo[i].objetivo = 0;
  }
}

// Esto es para que si le falta un toquesito avance un poco mas asi no queda cortada la animacion
function actualizarFondo() {
  for (let i = 0; i < fondo.length; i++) {
    fondo[i].actual += (fondo[i].objetivo - fondo[i].actual) * facilidad;
  }
}

// Devuelve true si el mouse está dentro del lienzo, si no, no hace nada
function mouseEnLienzo() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    return true;
  }
  return false;
}