/////////////////////////////////////////////////////////////////////////
//-----------------Universidad Nacional de las Artes-------------
//---Licenciatura en Artes Multimediales.
//---Artes Multimediales I (Catedra: Lacabanne).
/////////////////////////////////////////////////////////////////////////

//------------------Trabajo Practico I---------------------------

//...Título de la Obra: 'Migrando'
//...Año: 2025
//...Autor/a: OLIVA, Carolina Milena

/////////////////////////////////////////////////////////////////////////
//------------------Codigo:

// Segmento de Variables Glorbales:

let mitadCanvAncho, altoInicial, direccion, gris, grosor;
let reboteX = 1,
  reboteY = 1;

// Declarando la Raiz Principal y las diez raices que le brotan:
let raizUnoX,
  raizUnoY,
  raizUnoDireccion,
  raizUnoReboteX = 1,
  raizUnoReboteY = 1,
  raizUnoGris,
  raizUnoGrosor,
  raizUnoActivado = false;
let raizDosX,
  raizDosY,
  raizDosDireccion,
  raizDosReboteX = 1,
  raizDosReboteY = 1,
  raizDosGris,
  raizDosGrosor,
  raizDosActivado = false;
let raizTresX,
  raizTresY,
  raizTresDireccion,
  raizTresReboteX = 1,
  raizTresReboteY = 1,
  raizTresGris,
  raizTresGrosor,
  raizTresActivado = false;
let raizCuatroX,
  raizCuatroY,
  raizCuatroDireccion,
  raizCuatroReboteX = 1,
  raizCuatroReboteY = 1,
  raizCuatroGris,
  raizCuatroGrosor,
  raizCuatroActivado = false;
let raizCincoX,
  raizCincoY,
  raizCincoDireccion,
  raizCincoReboteX = 1,
  raizCincoReboteY = 1,
  raizCincoGris,
  raizCincoGrosor,
  raizCincoActivado = false;
let raizSeisX,
  raizSeisY,
  raizSeisDireccion,
  raizSeisReboteX = 1,
  raizSeisReboteY = 1,
  raizSeisGris,
  raizSeisGrosor,
  raizSeisActivado = false;
let raizSieteX,
  raizSieteY,
  raizSieteDireccion,
  raizSieteReboteX = 1,
  raizSieteReboteY = 1,
  raizSieteGris,
  raizSieteGrosor,
  raizSieteActivado = false;
let raizOchoX,
  raizOchoY,
  raizOchoDireccion,
  raizOchoReboteX = 1,
  raizOchoReboteY = 1,
  raizOchoGris,
  raizOchoGrosor,
  raizOchoActivado = false;
let raizNueveX,
  raizNueveY,
  raizNueveDireccion,
  raizNueveReboteX = 1,
  raizNueveReboteY = 1,
  raizNueveGris,
  raizNueveGrosor,
  raizNueveActivado = false;
let raizDiezX,
  raizDiezY,
  raizDiezDireccion,
  raizDiezReboteX = 1,
  raizDiezReboteY = 1,
  raizDiezGris,
  raizDiezGrosor,
  raizDiezActivado = false;

///////////////////////////////////////////////////////
function setup() {
  ///////////////////////////////////////////////////////
  let canvas = createCanvas(512, 512);
  background(0);
  frameRate(24);

  //Posicion inicial de la raiz principal
  mitadCanvAncho = width / 2;
  altoInicial = height;
  //Direccion de las raices (inicia siempre para arriba (-90°))
  direccion = -HALF_PI;
  //Color Aleatorio de grises a blancos
  gris = random(100, 255);
  //Grosor Aleatorio de las raices
  grosor = random(2, 5);
}

///////////////////////////////////////////////////////
function draw() {
  ///////////////////////////////////////////////////////
  //-------------RAIZ PRINCIPAL
  let alturaMinimaParaBrotes = 50; // La raíz principal debe crecer 50px antes de brotar
  //Recuerda las posiciones que se usaron en el primer frame para los proximos frames
  let anchoAnterior = mitadCanvAncho;
  let altoAnterior = altoInicial;

  // Crecimiento Animado Direccional de raiz considerando rebote:
  // Multiplicar por rebote invierte la direccion que le da el efecto al mismo.
  mitadCanvAncho += cos(direccion) * 2 * reboteX;
  altoInicial += sin(direccion) * 2 * reboteY;
  direccion += random(-0.2, 0.2); // Variación aleatoria de la dirección.

  // Dibujo Raiz Principal:
  stroke(gris);
  strokeWeight(grosor);
  line(anchoAnterior, altoAnterior, mitadCanvAncho, altoInicial);

  // Rebote:
  if (mitadCanvAncho < 0 || mitadCanvAncho > width) reboteX *= -1;
  if (altoInicial < 0 || altoInicial > height) reboteY *= -1;

  ///////////////////////////////////////////////////////
  //-------------RAICES BROTES

  // Antes de generar brotes verifica si la raíz supero la altura minima establecida
  if (altoInicial < height - alturaMinimaParaBrotes && random() < 0.15) {
    let brote = random(0, 1);
    let xInicio = anchoAnterior + (mitadCanvAncho - anchoAnterior) * brote;
    let yInicio = altoAnterior + (altoInicial - altoAnterior) * brote;
    // 'brote' = valor aleatorio necesario para generar punto de brote al diferenciar la posicion anterior con la actual.

    if (!raizUnoActivado) {
      raizUnoX = xInicio;
      raizUnoY = yInicio;
      raizUnoDireccion = direccion + random(-1.5, 1.5);
      raizUnoGris = gris * random(0.4, 0.8);
      raizUnoGrosor = random(0.5, 2.5);
      raizUnoActivado = true;
    } else if (!raizDosActivado) {
      raizDosX = xInicio;
      raizDosY = yInicio;
      raizDosDireccion = direccion + random(-1.5, 1.5);
      raizDosGris = gris * random(0.4, 0.8);
      raizDosGrosor = random(0.5, 2.5);
      raizDosActivado = true;
    } else if (!raizTresActivado) {
      raizTresX = xInicio;
      raizTresY = yInicio;
      raizTresDireccion = direccion + random(-1.5, 1.5);
      raizTresGris = gris * random(0.4, 0.8);
      raizTresGrosor = random(0.5, 2.5);
      raizTresActivado = true;
    } else if (!raizCuatroActivado) {
      raizCuatroX = xInicio;
      raizCuatroY = yInicio;
      raizCuatroDireccion = direccion + random(-1.5, 1.5);
      raizCuatroGris = gris * random(0.4, 0.8);
      raizCuatroGrosor = random(0.5, 2.5);
      raizCuatroActivado = true;
    } else if (!raizCincoActivado) {
      raizCincoX = xInicio;
      raizCincoY = yInicio;
      raizCincoDireccion = direccion + random(-1.5, 1.5);
      raizCincoGris = gris * random(0.4, 0.8);
      raizCincoGrosor = random(0.5, 2.5);
      raizCincoActivado = true;
    } else if (!raizSeisActivado) {
      raizSeisX = xInicio;
      raizSeisY = yInicio;
      raizSeisDireccion = direccion + random(-1.5, 1.5);
      raizSeisGris = gris * random(0.4, 0.8);
      raizSeisGrosor = random(0.5, 2.5);
      raizSeisActivado = true;
    } else if (!raizSieteActivado) {
      raizSieteX = xInicio;
      raizSieteY = yInicio;
      raizSieteDireccion = direccion + random(-1.5, 1.5);
      raizSieteGris = gris * random(0.4, 0.8);
      raizSieteGrosor = random(0.5, 2.5);
      raizSieteActivado = true;
    } else if (!raizOchoActivado) {
      raizOchoX = xInicio;
      raizOchoY = yInicio;
      raizOchoDireccion = direccion + random(-1.5, 1.5);
      raizOchoGris = gris * random(0.4, 0.8);
      raizOchoGrosor = random(0.5, 2.5);
      raizOchoActivado = true;
    } else if (!raizNueveActivado) {
      raizNueveX = xInicio;
      raizNueveY = yInicio;
      raizNueveDireccion = direccion + random(-1.5, 1.5);
      raizNueveGris = gris * random(0.4, 0.8);
      raizNueveGrosor = random(0.5, 2.5);
      raizNueveActivado = true;
    } else if (!raizDiezActivado) {
      raizDiezX = xInicio;
      raizDiezY = yInicio;
      raizDiezDireccion = direccion + random(-1.5, 1.5);
      raizDiezGris = gris * random(0.4, 0.8);
      raizDiezGrosor = random(0.5, 2.5);
      raizDiezActivado = true;
    }
  }
  ///////////////////////////////////////////////////////
  // Activacion y Dibujo de raices

  //---------------RAIZ UNO---------------
  //Animacion:
  if (raizUnoActivado) {
    push();
    let posicionPrevX = raizUnoX;
    let posicionPrevY = raizUnoY;
    raizUnoX += cos(raizUnoDireccion) * 1.5 * raizUnoReboteX;
    raizUnoY += sin(raizUnoDireccion) * 1.5 * raizUnoReboteY;
    raizUnoDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizUnoGris);
    strokeWeight(raizUnoGrosor);
    line(posicionPrevX, posicionPrevY, raizUnoX, raizUnoY);
    //Efecto de rebote:
    if (raizUnoX < 0 || raizUnoX > width) raizUnoReboteX *= -1;
    if (raizUnoY < 0 || raizUnoY > height) raizUnoReboteY *= -1;
    pop();
  }

  //---------------RAIZ DOS---------------
  //Animacion:
  if (raizDosActivado) {
    push();
    let posicionPrevX = raizDosX;
    let posicionPrevY = raizDosY;
    raizDosX += cos(raizDosDireccion) * 1.5 * raizDosReboteX;
    raizDosY += sin(raizDosDireccion) * 1.5 * raizDosReboteY;
    raizDosDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizDosGris);
    strokeWeight(raizDosGrosor);
    line(posicionPrevX, posicionPrevY, raizDosX, raizDosY);
    //Efecto de rebote:
    if (raizDosX < 0 || raizDosX > width) raizDosReboteX *= -1;
    if (raizDosY < 0 || raizDosY > height) raizDosReboteY *= -1;
    pop();
  }

  //---------------RAIZ TRES---------------
  //Animacion:
  if (raizTresActivado) {
    push();
    let posicionPrevX = raizTresX;
    let posicionPrevY = raizTresY;
    raizTresX += cos(raizTresDireccion) * 1.5 * raizTresReboteX;
    raizTresY += sin(raizTresDireccion) * 1.5 * raizTresReboteY;
    raizTresDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizTresGris);
    strokeWeight(raizTresGrosor);
    line(posicionPrevX, posicionPrevY, raizTresX, raizTresY);
    //Efecto de rebote:
    if (raizTresX < 0 || raizTresX > width) raizTresReboteX *= -1;
    if (raizTresY < 0 || raizTresY > height) raizTresReboteY *= -1;
    pop();
  }

  //---------------RAIZ CUATRO---------------
  //Animacion:
  if (raizCuatroActivado) {
    push();
    let posicionPrevX = raizCuatroX;
    let posicionPrevY = raizCuatroY;
    raizCuatroX += cos(raizCuatroDireccion) * 1.5 * raizCuatroReboteX;
    raizCuatroY += sin(raizCuatroDireccion) * 1.5 * raizCuatroReboteY;
    raizCuatroDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizCuatroGris);
    strokeWeight(raizCuatroGrosor);
    line(posicionPrevX, posicionPrevY, raizCuatroX, raizCuatroY);
    //Efecto de rebote:
    if (raizCuatroX < 0 || raizCuatroX > width) raizCuatroReboteX *= -1;
    if (raizCuatroY < 0 || raizCuatroY > height) raizCuatroReboteY *= -1;
    pop();
  }

  //---------------RAIZ CINCO---------------
  //Animacion:
  if (raizCincoActivado) {
    push();
    let posicionPrevX = raizCincoX;
    let posicionPrevY = raizCincoY;
    raizCincoX += cos(raizCincoDireccion) * 1.5 * raizCincoReboteX;
    raizCincoY += sin(raizCincoDireccion) * 1.5 * raizCincoReboteY;
    raizCincoDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizCincoGris);
    strokeWeight(raizCincoGrosor);
    line(posicionPrevX, posicionPrevY, raizCincoX, raizCincoY);
    //Efecto de rebote:
    if (raizCincoX < 0 || raizCincoX > width) raizCincoReboteX *= -1;
    if (raizCincoY < 0 || raizCincoY > height) raizCincoReboteY *= -1;
    pop();
  }

  //---------------RAIZ SEIS---------------
  //Animacion:
  if (raizSeisActivado) {
    push();
    let posicionPrevX = raizSeisX;
    let posicionPrevY = raizSeisY;
    raizSeisX += cos(raizSeisDireccion) * 1.5 * raizSeisReboteX;
    raizSeisY += sin(raizSeisDireccion) * 1.5 * raizSeisReboteY;
    raizSeisDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizSeisGris);
    strokeWeight(raizSeisGrosor);
    line(posicionPrevX, posicionPrevY, raizSeisX, raizSeisY);
    //Efecto de rebote:
    if (raizSeisX < 0 || raizSeisX > width) raizSeisReboteX *= -1;
    if (raizSeisY < 0 || raizSeisY > height) raizSeisReboteY *= -1;
    pop();
  }

  //---------------RAIZ SIETE---------------
  //Animacion:
  if (raizSieteActivado) {
    push();
    let posicionPrevX = raizSieteX;
    let posicionPrevY = raizSieteY;
    raizSieteX += cos(raizSieteDireccion) * 1.5 * raizSieteReboteX;
    raizSieteY += sin(raizSieteDireccion) * 1.5 * raizSieteReboteY;
    raizSieteDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizSieteGris);
    strokeWeight(raizSieteGrosor);
    line(posicionPrevX, posicionPrevY, raizSieteX, raizSieteY);
    //Efecto de rebote:
    if (raizSieteX < 0 || raizSieteX > width) raizSieteReboteX *= -1;
    if (raizSieteY < 0 || raizSieteY > height) raizSieteReboteY *= -1;
    pop();
  }

  //---------------RAIZ OCHO---------------
  //Animacion:
  if (raizOchoActivado) {
    push();
    let posicionPrevX = raizOchoX;
    let posicionPrevY = raizOchoY;
    raizOchoX += cos(raizOchoDireccion) * 1.5 * raizOchoReboteX;
    raizOchoY += sin(raizOchoDireccion) * 1.5 * raizOchoReboteY;
    raizOchoDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizOchoGris);
    strokeWeight(raizOchoGrosor);
    line(posicionPrevX, posicionPrevY, raizOchoX, raizOchoY);
    //Efecto de rebote:
    if (raizOchoX < 0 || raizOchoX > width) raizOchoReboteX *= -1;
    if (raizOchoY < 0 || raizOchoY > height) raizOchoReboteY *= -1;
    pop();
  }

  //---------------RAIZ NUEVE---------------
  //Animacion:
  if (raizNueveActivado) {
    push();
    let posicionPrevX = raizNueveX;
    let posicionPrevY = raizNueveY;
    raizNueveX += cos(raizNueveDireccion) * 1.5 * raizNueveReboteX;
    raizNueveY += sin(raizNueveDireccion) * 1.5 * raizNueveReboteY;
    raizNueveDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizNueveGris);
    strokeWeight(raizNueveGrosor);
    line(posicionPrevX, posicionPrevY, raizNueveX, raizNueveY);
    //Efecto de rebote:
    if (raizNueveX < 0 || raizNueveX > width) raizNueveReboteX *= -1;
    if (raizNueveY < 0 || raizNueveY > height) raizNueveReboteY *= -1;
    pop();
  }

  //---------------RAIZ DIEZ---------------
  //Animacion:
  if (raizDiezActivado) {
    push();
    let posicionPrevX = raizDiezX;
    let posicionPrevY = raizDiezY;
    raizDiezX += cos(raizDiezDireccion) * 1.5 * raizDiezReboteX;
    raizDiezY += sin(raizDiezDireccion) * 1.5 * raizDiezReboteY;
    raizDiezDireccion += random(-0.25, 0.25);
    //Dibujo:
    stroke(raizDiezGris);
    strokeWeight(raizDiezGrosor);
    line(posicionPrevX, posicionPrevY, raizDiezX, raizDiezY);
    //Efecto de rebote:
    if (raizDiezX < 0 || raizDiezX > width) raizDiezReboteX *= -1;
    if (raizDiezY < 0 || raizDiezY > height) raizDiezReboteY *= -1;
    pop();
  }
}
