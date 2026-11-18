
let imgInterface;
let fondo = [];            //las 3 imgs de fondo
let imagenesListas = false; // esta para evitar errores si se hace click antes de que carguen las imagenes, pasa automaticamente a true

let altoBanda = 240;       // capea el alto de las imagenes asi entran todas
let pasoDesplazamiento = 60; // cantiadad de pixeles que se mueven al hacer click
let facilidad = 0.12;      // fracción del recorrido que avanza en cada cuadro

//todo esto es para cuando haga click se haga una copia de la img y la siguiente salga mas grande

let copias = [];           // cada copia cambia x eso se guarda como un array                                 porque hay varias copias de la misma cosa 
let escalaInicial = 0.3;   // tamaño de la primera copia segun el canvas
let escalaNueva = 0.3;     // tamaño de la próxima copia
let crecimiento = 1.15;    // determina cuanto crece cada copia

async function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch'); 

 //esto es para que dentro del canvas si haces click der. no te abra ese menu contextual (lo busque con la ia no se muy bien como funca)
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

  if (imagenesListas == false) //esto determina si cargaron o no las imagenes, si cargaron lo ignora y sigue
  {
    return;
  }

  // Esto hace que si haces click afuera del lienzo lo ignore 
  if (mouseEnLienzo() == false) 
  {
    return;
  }

  //todo esto es para cuando apretes el click izq. ejecute lo de agrandar etc.
  if (mouseButton.left) 
  {
    crearCopia();
    agrandarProximaCopia();
    desplazarFondo();

  //esto pega el reset si tocas el click der. 
  } else if (mouseButton.right) 
  {
    reiniciar();
  }
}

async function cargarImagenes() {
  imgInterface = await loadImage('Fotos/Div.mac.interface.jpg');

  let imgEyes = await loadImage('Fotos/Div.mac.eyes.jpg');
  let imgWires = await loadImage('Fotos/Div.mac.wires_man.jpg');
  let imgBlue = await loadImage('Fotos/Div.mac.blue_screen.jpg');

//esto determina y guarda la posicion actial de cada fondo uno x uno y despues se lo pasa a "dibujar banda () que lo actualiza
  fondo = [
    { img: imgEyes, y: 0, actual: 0, objetivo: 0, dir: 1 },
    { img: imgWires, y: 180, actual: 0, objetivo: 0, dir: -1 },
    { img: imgBlue, y: 360, actual: 0, objetivo: 0, dir: 1 },
  ];

  imagenesListas = true; 
}