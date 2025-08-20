//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//------------Universidad Nacional de las Artes-------------
//---Licenciatura en Artes Multimediales.
//---Artes Multimediales I (Catedra: Lacabanne).
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//------------Trabajo Practico I (Correccion I)-------------
//...Título de la Obra: 'Pensamiento Creativo I (Ideas)'
//...Año: 2025
//...Autor/a: OLIVA, Carolina Milena
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



//0000000000000000000000000000000000000000000000000000000000000000000
//--------------------VARIABLES-GLOBALES--------------------------
//0000000000000000000000000000000000000000000000000000000000000000000

// Posicion esfera limite
let centroX = 256;
let centroY = 256;
let radioEsfera = 192;

// Variables interaccion mouse
let congelarNegro = false;
let clickActivo = false;

//Parametros generales
let mitadCanX, altoInicial, direccion, gris, grosor;
let reboteX = 1,
  reboteY = 1;
let anchoAnteriorRaiz, altoAnteriorRaiz;

// Declarando parametros de cada raiz 
let raizUnoX,
  raizUnoY,
  raizUnoAnteriorX,
  raizUnoAnteriorY,
  raizUnoDireccion,
  raizUnoReboteX = 1,
  raizUnoReboteY = 1,
  raizUnoGris,
  raizUnoGrosor,
  raizUnoActivado = false;
let raizDosX,
  raizDosY,
  raizDosAnteriorX,
  raizDosAnteriorY,
  raizDosDireccion,
  raizDosReboteX = 1,
  raizDosReboteY = 1,
  raizDosGris,
  raizDosGrosor,
  raizDosActivado = false;
let raizTresX,
  raizTresY,
  raizTresAnteriorX,
  raizTresAnteriorY,
  raizTresDireccion,
  raizTresReboteX = 1,
  raizTresReboteY = 1,
  raizTresGris,
  raizTresGrosor,
  raizTresActivado = false;
let raizCuatroX,
  raizCuatroY,
  raizCuatroDireccion,
  raizCuatroAnteriorX,
  raizCuatroAnteriorY,
  raizCuatroReboteX = 1,
  raizCuatroReboteY = 1,
  raizCuatroGris,
  raizCuatroGrosor,
  raizCuatroActivado = false;
let raizCincoX,
  raizCincoY,
  raizCincoAnteriorX,
  raizCincoAnteriorY,
  raizCincoDireccion,
  raizCincoReboteX = 1,
  raizCincoReboteY = 1,
  raizCincoGris,
  raizCincoGrosor,
  raizCincoActivado = false;
let raizSeisX,
  raizSeisY,
  raizSeisAnteriorX,
  raizSeisAnteriorY,
  raizSeisDireccion,
  raizSeisReboteX = 1,
  raizSeisReboteY = 1,
  raizSeisGris,
  raizSeisGrosor,
  raizSeisActivado = false;
let raizSieteX,
  raizSieteY,
  raizSieteAnteriorX,
  raizSieteAnteriorY,
  raizSieteDireccion,
  raizSieteReboteX = 1,
  raizSieteReboteY = 1,
  raizSieteGris,
  raizSieteGrosor,
  raizSieteActivado = false;
let raizOchoX,
  raizOchoY,
  raizOchoAnteriorX,
  raizOchoAnteriorY,
  raizOchoDireccion,
  raizOchoReboteX = 1,
  raizOchoReboteY = 1,
  raizOchoGris,
  raizOchoGrosor,
  raizOchoActivado = false;
let raizNueveX,
  raizNueveY,
  raizNueveAnteriorX,
  raizNueveAnteriorY,
  raizNueveDireccion,
  raizNueveReboteX = 1,
  raizNueveReboteY = 1,
  raizNueveGris,
  raizNueveGrosor,
  raizNueveActivado = false;
let raizDiezX,
  raizDiezY,
  raizDiezAnteriorX,
  raizDiezAnteriorY,
  raizDiezDireccion,
  raizDiezReboteX = 1,
  raizDiezReboteY = 1,
  raizDiezGris,
  raizDiezGrosor,
  raizDiezActivado = false;

//0000000000000000000000000000000000000000000000000000000000000000000
//--------------------------SETUP----------------------------------
//0000000000000000000000000000000000000000000000000000000000000000000
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
  frameRate(24);

  //Posicion inicial de la -raiz principal-
  altoAnteriorRaiz = centroY + radioEsfera * 0.8;
  anchoAnteriorRaiz = centroX
  mitadCanX = anchoAnteriorRaiz;
  altoInicial = altoAnteriorRaiz;

  //Direccion de las raices (inicia siempre para arriba a -90°)
  direccion = -HALF_PI;
  //Color y grosor aleatorio
  gris = random(50, 255);
  grosor = random(1, 4);
}

//0000000000000000000000000000000000000000000000000000000000000000000
//--------------------------DRAW----------------------------------
//0000000000000000000000000000000000000000000000000000000000000000000
function draw() {
  
  //TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  // ------ [ RAIZ PRINCIPAL ]
  let alturaMinimaParaBrotes = 150; // (crece 150 px antes de 'brotar')
  // Referencia (la posicion en el primer frame)
  let xActual = mitadCanX;
  let yActual = altoInicial;

  // Movimiento
  mitadCanX += cos(direccion) * 2 * reboteX;
  altoInicial += sin(direccion) * 2 * reboteY;
  //(multiplicar por 'rebote' invierte la direccion que le da el efecto al mismo)
  direccion += random(-0.2, 0.2);
  //(variación aleatoria de la dirección)

  // Limite + efecto rebote
  let distPrincipal = dist(mitadCanX, altoInicial, centroX, centroY);
  if (distPrincipal > radioEsfera) {
    let normalX = (mitadCanX - centroX) / distPrincipal;
    let normalY = (altoInicial - centroY) / distPrincipal;
    //Choque
    let golpeLimite = cos(direccion) * normalX + sin(direccion) * normalY;
    //Efecto rebote
    let nuevaDirX = cos(direccion) - 2 * golpeLimite * normalX;
    let nuevaDirY = sin(direccion) - 2 * golpeLimite * normalY;

    //Para que pueda rebotar con angulo
    direccion = atan2(nuevaDirY, nuevaDirX);

    // Reposicionar justo en el borde
    mitadCanX = centroX + normalX * (radioEsfera - 1);
    altoInicial = centroY + normalY * (radioEsfera - 1);
  }

  // Dibujo
  stroke(150);
  strokeWeight(grosor);
  line(anchoAnteriorRaiz, altoAnteriorRaiz, mitadCanX, altoInicial);

  // Actualizo
  anchoAnteriorRaiz = xActual;
  altoAnteriorRaiz = yActual;

  //TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  // ----- | RAICES SECUNDARIAS | ----- (direccion, color, grosor)
  
  // Antes de generar 'brotes', verifica si la raíz supero la altura minima
  if (altoInicial < height - alturaMinimaParaBrotes && random() < 0.15) {
    let brote = random(0, 1);
    let xInicio =
      anchoAnteriorRaiz + (mitadCanX - anchoAnteriorRaiz) * brote;
    let yInicio = altoAnteriorRaiz + (altoInicial - altoAnteriorRaiz) * brote;
    // 'brote' = valor aleatorio necesario para generar punto de nacimiento de la raiz al diferenciar la posicion anterior con la actual.
   
    if (!raizUnoActivado) {
      raizUnoX = xInicio;
      raizUnoY = yInicio;
      raizUnoAnteriorX = xInicio;
      raizUnoAnteriorY = yInicio;
      raizUnoDireccion = direccion + random(-1.5, 1.5);
      raizUnoGris = gris * random(0.4, 0.8);
      raizUnoGrosor = random(0.5, 2.5);
      raizUnoActivado = true;
    } else if (!raizDosActivado) {
      raizDosX = xInicio;
      raizDosY = yInicio;
      raizDosAnteriorX = xInicio;
      raizDosAnteriorY = yInicio;
      raizDosDireccion = direccion + random(-1.5, 1.5);
      raizDosGris = gris * random(0.4, 0.8);
      raizDosGrosor = random(0.5, 2.5);
      raizDosActivado = true;
    } else if (!raizTresActivado) {
      raizTresX = xInicio;
      raizTresY = yInicio;
      raizTresAnteriorX = xInicio;
      raizTresAnteriorY = yInicio;
      raizTresDireccion = direccion + random(-1.5, 1.5);
      raizTresGris = gris * random(0.4, 0.8);
      raizTresGrosor = random(0.5, 2.5);
      raizTresActivado = true;
    } else if (!raizCuatroActivado) {
      raizCuatroX = xInicio;
      raizCuatroY = yInicio;
      raizCuatroAnteriorX = xInicio;
      raizCuatroAnteriorY = yInicio;
      raizCuatroDireccion = direccion + random(-1.5, 1.5);
      raizCuatroGris = gris * random(0.4, 0.8);
      raizCuatroGrosor = random(0.5, 2.5);
      raizCuatroActivado = true;
    } else if (!raizCincoActivado) {
      raizCincoX = xInicio;
      raizCincoY = yInicio;
      raizCincoAnteriorX = xInicio;
      raizCincoAnteriorY = yInicio;
      raizCincoDireccion = direccion + random(-1.5, 1.5);
      raizCincoGris = gris * random(0.4, 0.8);
      raizCincoGrosor = random(0.5, 2.5);
      raizCincoActivado = true;
    } else if (!raizSeisActivado) {
      raizSeisX = xInicio;
      raizSeisY = yInicio;
      raizSeisAnteriorX = xInicio;
      raizSeisAnteriorY = yInicio;
      raizSeisDireccion = direccion + random(-1.5, 1.5);
      raizSeisGris = gris * random(0.4, 0.8);
      raizSeisGrosor = random(0.5, 2.5);
      raizSeisActivado = true;
    } else if (!raizSieteActivado) {
      raizSieteX = xInicio;
      raizSieteY = yInicio;
      raizSieteAnteriorX = xInicio;
      raizSieteAnteriorY = yInicio;
      raizSieteDireccion = direccion + random(-1.5, 1.5);
      raizSieteGris = gris * random(0.4, 0.8);
      raizSieteGrosor = random(0.5, 2.5);
      raizSieteActivado = true;
    } else if (!raizOchoActivado) {
      raizOchoX = xInicio;
      raizOchoY = yInicio;
      raizOchoAnteriorX = xInicio;
      raizOchoAnteriorY = yInicio;
      raizOchoDireccion = direccion + random(-1.5, 1.5);
      raizOchoGris = gris * random(0.4, 0.8);
      raizOchoGrosor = random(0.5, 2.5);
      raizOchoActivado = true;
    } else if (!raizNueveActivado) {
      raizNueveX = xInicio;
      raizNueveY = yInicio;
      raizNueveAnteriorX = xInicio;
      raizNueveAnteriorY = yInicio;
      raizNueveDireccion = direccion + random(-1.5, 1.5);
      raizNueveGris = gris * random(0.4, 0.8);
      raizNueveGrosor = random(0.5, 2.5);
      raizNueveActivado = true;
    } else if (!raizDiezActivado) {
      raizDiezX = xInicio;
      raizDiezY = yInicio;
      raizDiezAnteriorX = xInicio;
      raizDiezAnteriorY = yInicio;
      raizDiezDireccion = direccion + random(-1.5, 1.5);
      raizDiezGris = gris * random(0.4, 0.8);
      raizDiezGrosor = random(0.5, 2.5);
      raizDiezActivado = true;
    }
  }
  //TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  //----- | RAICES SECUNDARIAS | ----- (animacion, limite, dibujo)

  //------------------------------ [ RAIZ UNO ]
  if (raizUnoActivado) {
    push();
    // Referencia
    let ActualUnoX = raizUnoX;
    let ActualUnoY = raizUnoY;

    // Movimiento
    raizUnoX += cos(raizUnoDireccion) * 1.5 * raizUnoReboteX;
    raizUnoY += sin(raizUnoDireccion) * 1.5 * raizUnoReboteY;
    raizUnoDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distUno = dist(raizUnoX, raizUnoY, centroX, centroY);
    if (distUno > radioEsfera) {
      let normalX = (raizUnoX - centroX) / distUno;
      let normalY = (raizUnoY - centroY) / distUno;
      //Golpe con el limite
      let golpeLimite = cos(raizUnoDireccion) * normalX + sin(raizUnoDireccion) * normalY;
      let nuevaDirX = cos(raizUnoDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizUnoDireccion) - 2 * golpeLimite * normalY;
      //Rebota con cambio de angulo
      raizUnoDireccion = atan2(nuevaDirY, nuevaDirX);

      // Reposicionar justo en el borde
      raizUnoX = centroX + normalX * (radioEsfera - 1);
      raizUnoY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizUnoGris);
    strokeWeight(raizUnoGrosor);
    line(raizUnoAnteriorX, raizUnoAnteriorY, raizUnoX, raizUnoY);

    // Actualizo
    raizUnoAnteriorX = ActualUnoX;
    raizUnoAnteriorY = ActualUnoY;
    pop();
  }

  ///------------------------------[ RAIZ DOS ]
  if (raizDosActivado) {
    push();
    // Referencia
    let ActualDosX = raizDosX;
    let ActualDosY = raizDosY;

    // Movimiento
    raizDosX += cos(raizDosDireccion) * 1.5 * raizDosReboteX;
    raizDosY += sin(raizDosDireccion) * 1.5 * raizDosReboteY;
    raizDosDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distDos = dist(raizDosX, raizDosY, centroX, centroY);
    if (distDos > radioEsfera) {
      let normalX = (raizDosX - centroX) / distDos;
      let normalY = (raizDosY - centroY) / distDos;

      let golpeLimite =
        cos(raizDosDireccion) * normalX + sin(raizDosDireccion) * normalY;

      let nuevaDirX = cos(raizDosDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizDosDireccion) - 2 * golpeLimite * normalY;

      raizDosDireccion = atan2(nuevaDirY, nuevaDirX);

      raizDosX = centroX + normalX * (radioEsfera - 1);
      raizDosY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizDosGris);
    strokeWeight(raizDosGrosor);
    line(raizDosAnteriorX, raizDosAnteriorY, raizDosX, raizDosY);

    // Actualizo
    raizDosAnteriorX = ActualDosX;
    raizDosAnteriorY = ActualDosY;
    pop();
  }

  //------------------------------[ RAIZ TRES ]
  if (raizTresActivado) {
    push();
    // Referencia
    let ActualTresX = raizTresX;
    let ActualTresY = raizTresY;

    // Movimiento
    raizTresX += cos(raizTresDireccion) * 1.5 * raizTresReboteX;
    raizTresY += sin(raizTresDireccion) * 1.5 * raizTresReboteY;
    raizTresDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distTres = dist(raizTresX, raizTresY, centroX, centroY);
    if (distTres > radioEsfera) {
      let normalX = (raizTresX - centroX) / distTres;
      let normalY = (raizTresY - centroY) / distTres;

      let golpeLimite =
        cos(raizTresDireccion) * normalX + sin(raizTresDireccion) * normalY;

      let nuevaDirX = cos(raizTresDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizTresDireccion) - 2 * golpeLimite * normalY;

      raizTresDireccion = atan2(nuevaDirY, nuevaDirX);

      raizTresX = centroX + normalX * (radioEsfera - 1);
      raizTresY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizTresGris);
    strokeWeight(raizTresGrosor);
    line(raizTresAnteriorX, raizTresAnteriorY, raizTresX, raizTresY);

    // Actualizo
    raizTresAnteriorX = ActualTresX;
    raizTresAnteriorY = ActualTresY;
    pop();
  }

  //------------------------------[ RAIZ CUATRO ]
  if (raizCuatroActivado) {
    push();
    // Referencia
    let ActualCuatroX = raizCuatroX;
    let ActualCuatroY = raizCuatroY;

    // Movimiento
    raizCuatroX += cos(raizCuatroDireccion) * 1.5 * raizCuatroReboteX;
    raizCuatroY += sin(raizCuatroDireccion) * 1.5 * raizCuatroReboteY;
    raizCuatroDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distCuatro = dist(raizCuatroX, raizCuatroY, centroX, centroY);
    if (distCuatro > radioEsfera) {
      let normalX = (raizCuatroX - centroX) / distCuatro;
      let normalY = (raizCuatroY - centroY) / distCuatro;

      let golpeLimite =
        cos(raizCuatroDireccion) * normalX + sin(raizCuatroDireccion) * normalY;

      let nuevaDirX = cos(raizCuatroDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizCuatroDireccion) - 2 * golpeLimite * normalY;

      raizCuatroDireccion = atan2(nuevaDirY, nuevaDirX);

      raizCuatroX = centroX + normalX * (radioEsfera - 1);
      raizCuatroY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizCuatroGris);
    strokeWeight(raizCuatroGrosor);
    line(raizCuatroAnteriorX, raizCuatroAnteriorY, raizCuatroX, raizCuatroY);

    // Actualizo
    raizCuatroAnteriorX = ActualCuatroX;
    raizCuatroAnteriorY = ActualCuatroY;
    pop();
  }

  //------------------------------[ RAIZ CINCO ]
  if (raizCincoActivado) {
    push();
    // Referencia
    let ActualCincoX = raizCincoX;
    let ActualCincoY = raizCincoY;

    // Movimiento
    raizCincoX += cos(raizCincoDireccion) * 1.5 * raizCincoReboteX;
    raizCincoY += sin(raizCincoDireccion) * 1.5 * raizCincoReboteY;
    raizCincoDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distCinco = dist(raizCincoX, raizCincoY, centroX, centroY);
    if (distCinco > radioEsfera) {
      let normalX = (raizCincoX - centroX) / distCinco;
      let normalY = (raizCincoY - centroY) / distCinco;

      let golpeLimite =
        cos(raizCincoDireccion) * normalX + sin(raizCincoDireccion) * normalY;

      let nuevaDirX = cos(raizCincoDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizCincoDireccion) - 2 * golpeLimite * normalY;

      raizCincoDireccion = atan2(nuevaDirY, nuevaDirX);

      raizCincoX = centroX + normalX * (radioEsfera - 1);
      raizCincoY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizCincoGris);
    strokeWeight(raizCincoGrosor);
    line(raizCincoAnteriorX, raizCincoAnteriorY, raizCincoX, raizCincoY);

    // Actualizo
    raizCincoAnteriorX = ActualCincoX;
    raizCincoAnteriorY = ActualCincoY;
    pop();
  }

  //------------------------------[ RAIZ SEIS ]
  if (raizSeisActivado) {
    push();
    // Referencia
    let ActualSeisX = raizSeisX;
    let ActualSeisY = raizSeisY;

    // Movimiento
    raizSeisX += cos(raizSeisDireccion) * 1.5 * raizSeisReboteX;
    raizSeisY += sin(raizSeisDireccion) * 1.5 * raizSeisReboteY;
    raizSeisDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distSeis = dist(raizSeisX, raizSeisY, centroX, centroY);
    if (distSeis > radioEsfera) {
      let normalX = (raizSeisX - centroX) / distSeis;
      let normalY = (raizSeisY - centroY) / distSeis;

      let golpeLimite =
        cos(raizSeisDireccion) * normalX + sin(raizSeisDireccion) * normalY;

      let nuevaDirX = cos(raizSeisDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizSeisDireccion) - 2 * golpeLimite * normalY;

      raizSeisDireccion = atan2(nuevaDirY, nuevaDirX);

      raizSeisX = centroX + normalX * (radioEsfera - 1);
      raizSeisY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizSeisGris);
    strokeWeight(raizSeisGrosor);
    line(raizSeisAnteriorX, raizSeisAnteriorY, raizSeisX, raizSeisY);

    // Actualizo
    raizSeisAnteriorX = ActualSeisX;
    raizSeisAnteriorY = ActualSeisY;
    pop();
  }

  //------------------------------[ RAIZ SIETE ]
  if (raizSieteActivado) {
    push();
    // Referencia
    let ActualSieteX = raizSieteX;
    let ActualSieteY = raizSieteY;

    // Movimiento
    raizSieteX += cos(raizSieteDireccion) * 1.5 * raizSieteReboteX;
    raizSieteY += sin(raizSieteDireccion) * 1.5 * raizSieteReboteY;
    raizSieteDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distSiete = dist(raizSieteX, raizSieteY, centroX, centroY);
    if (distSiete > radioEsfera) {
      let normalX = (raizSieteX - centroX) / distSiete;
      let normalY = (raizSieteY - centroY) / distSiete;

      let golpeLimite =
        cos(raizSieteDireccion) * normalX + sin(raizSieteDireccion) * normalY;

      let nuevaDirX = cos(raizSieteDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizSieteDireccion) - 2 * golpeLimite * normalY;

      raizSieteDireccion = atan2(nuevaDirY, nuevaDirX);

      raizSieteX = centroX + normalX * (radioEsfera - 1);
      raizSieteY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizSieteGris);
    strokeWeight(raizSieteGrosor);
    line(raizSieteAnteriorX, raizSieteAnteriorY, raizSieteX, raizSieteY);

    // Actualizo
    raizSieteAnteriorX = ActualSieteX;
    raizSieteAnteriorY = ActualSieteY;
    pop();
  }

  //------------------------------[ RAIZ OCHO ]
  if (raizOchoActivado) {
    push();
    // Referencia
    let ActualOchoX = raizOchoX;
    let ActualOchoY = raizOchoY;

    // Movimiento
    raizOchoX += cos(raizOchoDireccion) * 1.5 * raizOchoReboteX;
    raizOchoY += sin(raizOchoDireccion) * 1.5 * raizOchoReboteY;
    raizOchoDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distOcho = dist(raizOchoX, raizOchoY, centroX, centroY);
    if (distOcho > radioEsfera) {
      let normalX = (raizOchoX - centroX) / distOcho;
      let normalY = (raizOchoY - centroY) / distOcho;

      let golpeLimite =
        cos(raizOchoDireccion) * normalX + sin(raizOchoDireccion) * normalY;

      let nuevaDirX = cos(raizOchoDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizOchoDireccion) - 2 * golpeLimite * normalY;

      raizOchoDireccion = atan2(nuevaDirY, nuevaDirX);

      raizOchoX = centroX + normalX * (radioEsfera - 1);
      raizOchoY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizOchoGris);
    strokeWeight(raizOchoGrosor);
    line(raizOchoAnteriorX, raizOchoAnteriorY, raizOchoX, raizOchoY);

    // Actualizo
    raizOchoAnteriorX = ActualOchoX;
    raizOchoAnteriorY = ActualOchoY;
    pop();
  }

  //------------------------------[ RAIZ NUEVE ]
  if (raizNueveActivado) {
    push();
    // Referencia
    let ActualNueveX = raizNueveX;
    let ActualNueveY = raizNueveY;

    // Movimiento
    raizNueveX += cos(raizNueveDireccion) * 1.5 * raizNueveReboteX;
    raizNueveY += sin(raizNueveDireccion) * 1.5 * raizNueveReboteY;
    raizNueveDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distNueve = dist(raizNueveX, raizNueveY, centroX, centroY);
    if (distNueve > radioEsfera) {
      let normalX = (raizNueveX - centroX) / distNueve;
      let normalY = (raizNueveY - centroY) / distNueve;

      let golpeLimite =
        cos(raizNueveDireccion) * normalX + sin(raizNueveDireccion) * normalY;

      let nuevaDirX = cos(raizNueveDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizNueveDireccion) - 2 * golpeLimite * normalY;

      raizNueveDireccion = atan2(nuevaDirY, nuevaDirX);

      raizNueveX = centroX + normalX * (radioEsfera - 1);
      raizNueveY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizNueveGris);
    strokeWeight(raizNueveGrosor);
    line(raizNueveAnteriorX, raizNueveAnteriorY, raizNueveX, raizNueveY);

    // Actualizo
    raizNueveAnteriorX = ActualNueveX;
    raizNueveAnteriorY = ActualNueveY;
    pop();
  }

  //------------------------------[ RAIZ DIEZ ]
  if (raizDiezActivado) {
    push();
    // Referencia
    let ActualDiezX = raizDiezX;
    let ActualDiezY = raizDiezY;

    // Movimiento
    raizDiezX += cos(raizDiezDireccion) * 1.5 * raizDiezReboteX;
    raizDiezY += sin(raizDiezDireccion) * 1.5 * raizDiezReboteY;
    raizDiezDireccion += random(-0.25, 0.25);

    // Limite + Rebote 
    let distDiez = dist(raizDiezX, raizDiezY, centroX, centroY);
    if (distDiez > radioEsfera) {
      let normalX = (raizDiezX - centroX) / distDiez;
      let normalY = (raizDiezY - centroY) / distDiez;

      let golpeLimite =
        cos(raizDiezDireccion) * normalX + sin(raizDiezDireccion) * normalY;

      let nuevaDirX = cos(raizDiezDireccion) - 2 * golpeLimite * normalX;
      let nuevaDirY = sin(raizDiezDireccion) - 2 * golpeLimite * normalY;

      raizDiezDireccion = atan2(nuevaDirY, nuevaDirX);

      raizDiezX = centroX + normalX * (radioEsfera - 1);
      raizDiezY = centroY + normalY * (radioEsfera - 1);
    }

    // Dibujo
    stroke(raizDiezGris);
    strokeWeight(raizDiezGrosor);
    line(raizDiezAnteriorX, raizDiezAnteriorY, raizDiezX, raizDiezY);

    // Actualizo
    raizDiezAnteriorX = ActualDiezX;
    raizDiezAnteriorY = ActualDiezY;
    pop();
  }
  
  
  //0000000000000000000000000000000000000000000000000000000000000000000
  //-----------------INTERACCIÓN MOUSE + FADE----------------------------
  //0000000000000000000000000000000000000000000000000000000000000000000

  //TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  //----- | Fade | ----- (hacia esfera)
  let distancia = dist(mouseX, mouseY, centroX, centroY);
  let dentroEsfera = distancia < radioEsfera;

  //----- | Alfa | ----- (hacia esfera)
  let difuminarRaiz = 1;
  if (!congelarNegro && dentroEsfera) {
    difuminarRaiz = 80 * (1 - distancia / radioEsfera);
  }
  //----- | Aplica Fade | -----
  if (difuminarRaiz > 1) {
    fill(0, difuminarRaiz);
    noStroke();
    rect(0, 0, width, height);
  } 
  
   //----- | Efecto Desvanecerse | -----
  if (congelarNegro) {
    fill(255, 255, 255, 50);
    noStroke(); 
    rect(0, 0, width, height);
  }
}
