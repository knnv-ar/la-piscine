///////////////////////////////////////////////////////////
//----------- Universidad Nacional de las Artes -----
// Licenciatura en Artes Multimediales.
// Artes Multimediales I (Catedra: Lacabanne).
///////////////////////////////////////////////////////////
//----------- Trabajo Practico II -----
//...Título de la Obra: 'NONAMEAUN'
//...Año: 2025
//...Autor/a: OLIVA, Carolina Milena
///////////////////////////////////////////////////////////
//----------- Referencias de otrxs Artistas-----
//..."Text to Braille" de jesmehta
//...LINK: ( https://editor.p5js.org/jesmehta/sketches/eMMWyzD25 )
///////////////////////////////////////////////////////////
//----------- Links de Sitios Web que utilice para
//-----------   la realizacion de este proyecto -----
//...Escritura en Braille: (https://letrasaciegas.com/wp-content/uploads/2020/01/Braille-alfabeto.jpg)
//...Traductor Texto a Braille: //https://symbolwiki.com/es/tools/braille-translator
//...Ejemplo de Trackeo de Mano:
//https://docs.ml5js.org/#/reference/handpose
///////////////////////////////////////////////////////////
//------------------------------------ GLOBALES
// VARIABLES TRACKEO
let manoPos;
let video;
let manos = [];
let trackeoActivo = false;
let tiempoInicioTrackeo = 0;
let sinManoFrame = 0;
let desactivoFrame = 30;

// VARIABLES BRAILLE Y LETRAS
let brailleVisible = false;
let brailleReveladoPermanente = false;
let duracionCincoSeg = 5000;
let duracionDoSeg = 2000;
let animacionBraille = 0;

// VARIABLES FADE IN-OUT
let fadeOutCanvas = false;
let fadeInVideo = false;
let tiempoInicioFadeOut = 0;
let tiempoInicioFadeIn = 0;
// usar los 5000 millis de antees
let alfaCanvas = 255;
let alfaVideo = 0;

// VARIABLE REINICIO --- TRACKING FINAL
let esperandoTrackeoFinal = false;

// FUNCION actualizarAnimacionesTexto()
let palabrasReveladas = {
  hoy: false,
  y: false,
  siempre: false,
  me: false,
  hago: false,
  presente: false,
  ante: false,
  tu: false,
  ausencia: false,
};
let palabrasAnimacion = {
  hoy: { porcentaje: 0, tiempoInicio: 0 },
  y: { porcentaje: 0, tiempoInicio: 0 },
  siempre: { porcentaje: 0, tiempoInicio: 0 },
  me: { porcentaje: 0, tiempoInicio: 0 },
  hago: { porcentaje: 0, tiempoInicio: 0 },
  presente: { porcentaje: 0, tiempoInicio: 0 },
  ante: { porcentaje: 0, tiempoInicio: 0 },
  tu: { porcentaje: 0, tiempoInicio: 0 },
  ausencia: { porcentaje: 0, tiempoInicio: 0 },
};
let palabrasPos = {
  hoy: { x: 0, y: 0, ancho: 0, activa: true },
  y: { x: 0, y: 0, ancho: 0, activa: false },
  siempre: { x: 0, y: 0, ancho: 0, activa: false },
  me: { x: 0, y: 0, ancho: 0, activa: false },
  hago: { x: 0, y: 0, ancho: 0, activa: false },
  presente: { x: 0, y: 0, ancho: 0, activa: false },
  ante: { x: 0, y: 0, ancho: 0, activa: false },
  tu: { x: 0, y: 0, ancho: 0, activa: false },
  ausencia: { x: 0, y: 0, ancho: 0, activa: false },
};

// VARIABLE POSICION BRAILLE
let brailleFrase = [];
let celdaTamaño = 20;
let celdaEspacio = celdaTamaño * 1.4;
let areaDisponibleAncho = 560 - 80;

// VARIABLE POSICIONES Y PARA ---BRAILLE---
let posInicioYBraille = [
  100 + (60 - celdaTamaño) / 2, // HYS 0
  200 + (60 - celdaTamaño) / 2, // MHP 1
  300 + (60 - celdaTamaño) / 2, // ATA 2
];

// POSICIONES Y PARA ---LETRAS---
let posYTexto = [
  160 + 10, // HYS 0
  260 + 10, //MHP 1
  360 + 10, //ATA 2
];
// VARIABLES AUDIO
let sonidoInicio;
let sonidoFraseCompleta;
let estadoAudio = "inactivo"; // "inactivo", "fadeIn", "reproduciendo", "fadeOut", "fraseCompleta"
let tiempoInicioAudio = 0;
let duracionTreSeg = 3000;
// usar 'duracionCincoSeg = 5000;'
let todasLasPalabrasReveladas = false;
let fraseCompletaReproducida = false;

///////////////////////////////////////////////////// PRELOAD
function preload() {
  manoPos = ml5.handPose({ flipped: true });
  sonidoInicio = loadSound("inicio.wav");
  sonidoFraseCompleta = loadSound("fraseCompleta.wav");
}

///////////////////////////////////////////////////// SETUP
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('div-sketch');
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  manoPos.detectStart(video, devuelveManos);
  inicializarBraille();
  calcularPosicionesPalabras();

  // LOOPEO INICIO
  sonidoInicio.setLoop(true);
}

///////////////////////////////////////////////////// DRAW
function draw() {
  // GESTIONAR FADE IN/OUT DEL CANVAS Y VIDEO
  actualizarFades();
  
  if (esperandoTrackeoFinal) {
    mensajePreReset();
    return;
  }
  
  if (fadeInVideo) {
    camaraVideo();
    return;
  }
  
  dibujarExperienciaNormal();
}

///////////////////////////////////////////////////// FADES
function actualizarFades() {
  // CANVAS FADE OUT
  if (fadeOutCanvas) {
    let progresoFadeOut = (millis() - tiempoInicioFadeOut) / duracionCincoSeg;
    alfaCanvas = 255 * (1 - constrain(progresoFadeOut, 0, 1));

    if (progresoFadeOut >= 1) {
      fadeOutCanvas = false;
      fadeInVideo = true;
      tiempoInicioFadeIn = millis();
    }
  }
  
  // VIDEO FADE IN
  if (fadeInVideo) {
    let progresoFadeIn = (millis() - tiempoInicioFadeIn) / duracionDoSeg;
    alfaVideo = 255 * constrain(progresoFadeIn, 0, 1);

    if (progresoFadeIn >= 1) {
      fadeInVideo = false;
      esperandoTrackeoFinal = true;
    }
  }
}

///////////////////////////////////////////////////// SIN FADE Y TRACKEO
function dibujarExperienciaNormal() {
  // LIMPIAR CANVAS
  background(0);
  
  push();
  // CONTENIDO ACTUAL
  momentoAudio();

  // TRACKEO ACTIVO --- REVELADO DE BRAILLE ACTIVO
  if (manos.length > 0) {
    if (!trackeoActivo) {
      tiempoInicioTrackeo = millis();
    }
    trackeoActivo = true;
    sinManoFrame = 0;

    if (
      (brailleVisible && animacionBraille >= 1) ||
      brailleReveladoPermanente
    ) {
      verificarLecturaBraille();
    }
  }

  // PUNTOS DE LAS MANOS EN NARANJA Y AZUL
  if (trackeoActivo) {
    for (let i = 0; i < manos.length; i++) {
      let manita = manos[i];
      if (manita.confidence > 0.1) {
        // PUNTOS PUNTITAS DEDOS
        let puntasDedos = [4, 8, 12, 16, 20];

        for (let j of puntasDedos) {
          let keypoint = manita.keypoints[j];
          if (keypoint) {
            let colorHalo;
            if (manita.handedness == "Left") {
              colorHalo = [100, 150, 255];
            } else {
              colorHalo = [255, 138, 22];
            }

            // APLICAR FADE A LOS HALOS
            let factorFade = alfaCanvas / 255;
            
            // HALO PUNTITAS
            fill(colorHalo[0], colorHalo[1], colorHalo[2], 40 * factorFade);
            noStroke();
            circle(keypoint.x, keypoint.y, 40);

            fill(colorHalo[0], colorHalo[1], colorHalo[2], 80 * factorFade);
            circle(keypoint.x, keypoint.y, 25);

            fill(colorHalo[0], colorHalo[1], colorHalo[2], 150 * factorFade);
            circle(keypoint.x, keypoint.y, 12);
          }
        }

        // PUNTOS MANO GENERAL
        for (let j = 0; j < manita.keypoints.length; j++) {
          if (!puntasDedos.includes(j)) {
            let keypoint = manita.keypoints[j];
            let factorFade = alfaCanvas / 255;
            
            if (manita.handedness == "Left") {
              fill(0, 0, 255, 180 * factorFade);
            } else {
              fill(255, 138, 22, 180 * factorFade);
            }
            noStroke();
            circle(keypoint.x, keypoint.y, 6);
          }
        }
      }
    }
  }
  // TRACKING INACTIVO
  if (trackeoActivo && manos.length === 0) {
    sinManoFrame++;
  }
  if (sinManoFrame > desactivoFrame) {
    trackeoActivo = false;
    sinManoFrame = 0;
  }

  // TXT INICIO 
  if (!trackeoActivo && !brailleReveladoPermanente) {
    fill(255); 
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(20);
    text(
      "Ubica tus manos frente a la cámara y espera...",
      width / 2,
      height / 2
    );
    if (!brailleVisible) {
      animacionBraille = 0;
    }
  } else {
    if (!brailleReveladoPermanente) {
      let tiempoTranscurrido = millis() - tiempoInicioTrackeo;
      animacionBraille = constrain(tiempoTranscurrido / duracionCincoSeg, 0, 1);
      if (animacionBraille > 0) {
        brailleVisible = true;
      }
      if (animacionBraille >= 1) {
        brailleReveladoPermanente = true;
      }
    }
    if (brailleVisible || brailleReveladoPermanente) {
      dibujarBrailleCompleto();
    }
    actualizarAnimacionesTexto();
  }
  dibujarTextoPermanente();

  pop();
}

///////////////////////////////////////////////////// REINICIAMOS
function mensajePreReset() {
  background(0);
  push();
  tint(255, alfaVideo);
  image(video, 0, 0, width, height);
  
  // TXT INSTRUCCIONES
  fill(255, 200, 0, 200);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Toca la pantalla con tu dedo índice para reiniciar", width / 2, height - 30);
  pop();
  
  verificarTrackeoFinal();
}

////////////////////////////////////////////////////// CAMARA VIEW
function camaraVideo() {
  push();
  tint(255, alfaVideo);
  image(video, 0, 0, width, height);
  pop();
}

///////////////////////////////////////////////////// TRACKING FINAL
function verificarTrackeoFinal() {
  if (manos.length === 0) return;

  for (let i = 0; i < manos.length; i++) {
    let mano = manos[i];

    // VERIFICA INDICE
    let punto7 = mano.keypoints[7];
    let punto8 = mano.keypoints[8];

    // DISTANCIA REINICIO
    let distanciaCentro = dist(punto7.x, punto7.y, width / 2, height / 2);

    if (distanciaCentro < 100) {
      reiniciarExperiencia();
      return;
    }
  }
}

///////////////////////////////////////////////////// AUDIOS
function momentoAudio() {
  // REVELADO TOTAL
  todasLasPalabrasReveladas =
    palabrasReveladas.hoy &&
    palabrasReveladas.y &&
    palabrasReveladas.siempre &&
    palabrasReveladas.me &&
    palabrasReveladas.hago &&
    palabrasReveladas.presente &&
    palabrasReveladas.ante &&
    palabrasReveladas.tu &&
    palabrasReveladas.ausencia;

  // AUDIO FADE IN-OUT --- INACTIVO-ACTIVO
  switch (estadoAudio) {
    case "inactivo":
      if (trackeoActivo && !sonidoInicio.isPlaying()) {
        estadoAudio = "fadeIn";
        tiempoInicioAudio = millis();
        sonidoInicio.play();
        sonidoInicio.setVolume(0);
      }
      break;

    case "fadeIn":
      let progresoFadeIn = (millis() - tiempoInicioAudio) / duracionTreSeg;
      if (progresoFadeIn >= 1) {
        sonidoInicio.setVolume(1);
        estadoAudio = "reproduciendo";
      } else {
        sonidoInicio.setVolume(progresoFadeIn);
      }
      break;

    case "reproduciendo":
      if (todasLasPalabrasReveladas && !fraseCompletaReproducida) {
        estadoAudio = "fadeOut";
        tiempoInicioAudio = millis();
      }
      break;

    case "fadeOut":
      let progresoFadeOut = (millis() - tiempoInicioAudio) / duracionCincoSeg;
      if (progresoFadeOut >= 1) {
        sonidoInicio.setVolume(0);
        sonidoInicio.stop();
        estadoAudio = "fraseCompleta";
        tiempoInicioAudio = millis();
        sonidoFraseCompleta.play();
      } else {
        sonidoInicio.setVolume(1 - progresoFadeOut);
      }
      break;

    case "fraseCompleta":
      if (!sonidoFraseCompleta.isPlaying() && !fraseCompletaReproducida) {
        fraseCompletaReproducida = true;
        iniciarTransicionFinal();
      }
      break;
  }
}

///////////////////////////////////////////////////// INICIAR TRANSICION FINAL
function iniciarTransicionFinal() {
  fadeOutCanvas = true;
  tiempoInicioFadeOut = millis();
  alfaCanvas = 255;
  alfaVideo = 0;

  // REINICIAR AUDIO
  sonidoInicio.stop();
  sonidoInicio.setVolume(1);
}

///////////////////////////////////////////////////// REINICIAR TUTTO
function reiniciarExperiencia() {
  //REINICIO VARIABLES
  brailleVisible = false;
  brailleReveladoPermanente = false;
  animacionBraille = 0;
  trackeoActivo = false;
  sinManoFrame = 0;
  fraseCompletaReproducida = false;
  estadoAudio = "inactivo";
  fadeOutCanvas = false;
  fadeInVideo = false;
  esperandoTrackeoFinal = false;
  alfaCanvas = 255;
  alfaVideo = 0;

  // PALABRAS
  for (let palabra in palabrasReveladas) {
    palabrasReveladas[palabra] = false;
  }

  // ANIMACION
  for (let palabra in palabrasAnimacion) {
    palabrasAnimacion[palabra].porcentaje = 0;
    palabrasAnimacion[palabra].tiempoInicio = 0;
  }

  // ESTADO
  palabrasPos.hoy.activa = true;
  palabrasPos.y.activa = false;
  palabrasPos.siempre.activa = false;
  palabrasPos.me.activa = false;
  palabrasPos.hago.activa = false;
  palabrasPos.presente.activa = false;
  palabrasPos.ante.activa = false;
  palabrasPos.tu.activa = false;
  palabrasPos.ausencia.activa = false;
}

///////////////////////////////////////////////////// ANIMACION x PALABRA
function actualizarAnimacionesTexto() {
  for (let palabra in palabrasAnimacion) {
    if (
      palabrasReveladas[palabra] &&
      palabrasAnimacion[palabra].porcentaje < 1
    ) {
      let tiempoTranscurrido =
        millis() - palabrasAnimacion[palabra].tiempoInicio;
      palabrasAnimacion[palabra].porcentaje = constrain(
        tiempoTranscurrido / duracionDoSeg,
        0,
        1
      );
    }
  }
}

/////////////////////////////////////////////////////  BRAILLE
function inicializarBraille() {
  // CADA FRASE Y PALABRA POR SEPARADO
  // HOY ⠓⠕⠽ Y ⠽ SIEMPRE ⠎⠊⠑⠍⠏⠗⠑
  let hoy = [
    { char: "⠓", puntos: "125" }, // h
    { char: "⠕", puntos: "135" }, // o
    { char: "⠽", puntos: "13456" }, // y
  ];
  let y = [
    { char: "⠽", puntos: "13456" }, // y
  ];
  let siempre = [
    { char: "⠎", puntos: "234" }, // s
    { char: "⠊", puntos: "24" }, // i
    { char: "⠑", puntos: "15" }, // e
    { char: "⠍", puntos: "134" }, // m
    { char: "⠏", puntos: "1234" }, // p
    { char: "⠗", puntos: "1235" }, // r
    { char: "⠑", puntos: "15" }, // e
  ];

  // ME ⠍⠑ HAGO ⠓⠁⠛⠕ PRESENTE ⠏⠗⠑⠎⠑⠝⠞⠑
  let me = [
    { char: "⠍", puntos: "134" }, // m
    { char: "⠑", puntos: "15" }, // e
  ];
  let hago = [
    { char: "⠓", puntos: "125" }, // h
    { char: "⠁", puntos: "1" }, // a
    { char: "⠛", puntos: "1245" }, // g
    { char: "⠕", puntos: "135" }, // o
  ];
  let presente = [
    { char: "⠏", puntos: "1234" }, // p
    { char: "⠗", puntos: "1235" }, // r
    { char: "⠑", puntos: "15" }, // e
    { char: "⠎", puntos: "234" }, // s
    { char: "⠑", puntos: "15" }, // e
    { char: "⠝", puntos: "1345" }, // n
    { char: "⠞", puntos: "2345" }, // t
    { char: "⠑", puntos: "15" }, // e
  ];

  // ANTE ⠁⠝⠞⠑ TU⠀⠞⠥ AUSENCIA ⠁⠥⠎⠑⠝⠉⠊⠁
  let ante = [
    { char: "⠁", puntos: "1" }, // a
    { char: "⠝", puntos: "1345" }, // n
    { char: "⠞", puntos: "2345" }, // t
    { char: "⠑", puntos: "15" }, // e
  ];
  let tu = [
    { char: "⠞", puntos: "2345" }, // t
    { char: "⠥", puntos: "135" }, // u
  ];
  let ausencia = [
    { char: "⠁", puntos: "1" }, // a
    { char: "⠥", puntos: "135" }, // u
    { char: "⠎", puntos: "234" }, // s
    { char: "⠑", puntos: "15" }, // e
    { char: "⠝", puntos: "1345" }, // n
    { char: "⠉", puntos: "14" }, // c
    { char: "⠊", puntos: "24" }, // i
    { char: "⠁", puntos: "1" }, // a
  ];

  let espacio = { char: " ", puntos: "" };

  // FRASE X FRASE
  brailleHYS = [...hoy, espacio, ...y, espacio, ...siempre];
  brailleMHP = [...me, espacio, ...hago, espacio, ...presente];
  brailleATA = [...ante, espacio, ...tu, espacio, ...ausencia];

  // PARA ANIMACION EN SECUENCIA
  brailleFrase = [...brailleHYS, ...brailleMHP, ...brailleATA];
}

///////////////////////////////////////////////////// POSICION BRAILLE
function calcularPosicionesPalabras() {
  // POSICION X POR FRASE
  let anchoHYS = (brailleHYS.length - 1) * celdaEspacio;
  let anchoMHP = (brailleMHP.length - 1) * celdaEspacio;
  let anchoATA = (brailleATA.length - 1) * celdaEspacio;

  let posXTexto = [80 + (areaDisponibleAncho - anchoHYS) / 2, //HYS 0
                  80 + (areaDisponibleAncho - anchoMHP) / 2,  // MHP 1
                  80 + (areaDisponibleAncho - anchoATA) / 2]; //ATA 2


  // 0 HOY (3) +1 Y (1) +1 SIEMPRE (7)
  let hoyInicio = 0;
  let yInicio = hoyInicio + 4;
  let siempreInicio = yInicio + 2;

  palabrasPos.hoy.x = posXTexto[0] + hoyInicio * celdaEspacio;
  palabrasPos.hoy.y = posInicioYBraille[0];
  palabrasPos.hoy.ancho = 3 * celdaEspacio;

  palabrasPos.y.x = posXTexto[0] + yInicio * celdaEspacio;
  palabrasPos.y.y = posInicioYBraille[0];
  palabrasPos.y.ancho = 1 * celdaEspacio;

  palabrasPos.siempre.x = posXTexto[0] + siempreInicio * celdaEspacio;
  palabrasPos.siempre.y = posInicioYBraille[0];
  palabrasPos.siempre.ancho = 7 * celdaEspacio;

  // 0 ME (2) +1 HAGO (4) +1 PRESENTE (8)
  let meInicio = 0;
  let hagoInicio = meInicio + 3;
  let presenteInicio = hagoInicio + 5;

  palabrasPos.me.x = posXTexto[1] + meInicio * celdaEspacio;
  palabrasPos.me.y = posInicioYBraille[1];
  palabrasPos.me.ancho = 2 * celdaEspacio;

  palabrasPos.hago.x = posXTexto[1] + hagoInicio * celdaEspacio;
  palabrasPos.hago.y = posInicioYBraille[1];
  palabrasPos.hago.ancho = 4 * celdaEspacio;

  palabrasPos.presente.x = posXTexto[1] + presenteInicio * celdaEspacio;
  palabrasPos.presente.y = posInicioYBraille[1];
  palabrasPos.presente.ancho = 8 * celdaEspacio;

  // 0 ANTE (4) +1 TU (2) +1 AUSENCIA (8)
  let anteInicio = 0;
  let tuInicio = anteInicio + 5;
  let ausenciaInicio = tuInicio + 3;

  palabrasPos.ante.x = posXTexto[2] + anteInicio * celdaEspacio;
  palabrasPos.ante.y = posInicioYBraille[2];
  palabrasPos.ante.ancho = 4 * celdaEspacio;

  palabrasPos.tu.x = posXTexto[2] + tuInicio * celdaEspacio;
  palabrasPos.tu.y = posInicioYBraille[2];
  palabrasPos.tu.ancho = 2 * celdaEspacio;

  palabrasPos.ausencia.x = posXTexto[2] + ausenciaInicio * celdaEspacio;
  palabrasPos.ausencia.y = posInicioYBraille[2];
  palabrasPos.ausencia.ancho = 8 * celdaEspacio;
}

///////////////////////////////////////////////////// DIBUJAR BRAILLE
function dibujarBrailleCompleto() {
  // CALCULAR POSICIONES X CENTRADAS PARA CADA FRASE
  let anchoHYS = (brailleHYS.length - 1) * celdaEspacio;
  let anchoMHP = (brailleMHP.length - 1) * celdaEspacio;
  let anchoATA = (brailleATA.length - 1) * celdaEspacio;

  let posXTexto = [80 + (areaDisponibleAncho - anchoHYS) / 2, //HYS 0
                  80 + (areaDisponibleAncho - anchoMHP) / 2,  // MHP 1
                  80 + (areaDisponibleAncho - anchoATA) / 2]; //ATA 2

  // DIBUJAR HOY Y SIEMPRE
  for (let i = 0; i < brailleHYS.length; i++) {
    dibujarCaracterBraille(
      brailleHYS[i],
      posXTexto[0] + i * celdaEspacio,
      posInicioYBraille[0]
    );
  }

  // DIBUJAR ME HAGO PRESENTE
  for (let i = 0; i < brailleMHP.length; i++) {
    dibujarCaracterBraille(
      brailleMHP[i],
      posXTexto[1] + i * celdaEspacio,
      posInicioYBraille[1]
    );
  }

  // DIBUJAR ANTE TU AUSENCIA
  for (let i = 0; i < brailleATA.length; i++) {
    dibujarCaracterBraille(
      brailleATA[i],
      posXTexto[2] + i * celdaEspacio,
      posInicioYBraille[2]
    );
  }
}

///////////////////////////////////////////////////// DIBUJAR CHAR
function dibujarCaracterBraille(charData, x, y) {
  if (charData.puntos !== "") {
    let caracterVisible;
    if (brailleReveladoPermanente) {
      caracterVisible = 1;
    } else {
      let indice = brailleFrase.findIndex((c) => c === charData);
      caracterVisible = constrain(
        (animacionBraille * brailleFrase.length - indice) / 2,
        0,
        1
      );
    }

    if (caracterVisible > 0) {
      dibujarCeldaBraille(charData.puntos, x, y, 60, caracterVisible);
    }
  }
}

///////////////////////////////////////////////////// CELDAS
function dibujarCeldaBraille(puntos, x, y, alturaDisponible, porcentaje = 1) {
  let celdaAltura = alturaDisponible * 0.7;
  let celdaAncho = celdaTamaño;

  let pos = [
    { x: 0.2, y: 0.1 }, // PUNTO 1
    { x: 0.2, y: 0.45 }, // PUNTO 2
    { x: 0.2, y: 0.8 }, // PUNTO 3
    { x: 0.8, y: 0.1 }, // PUNTO 4
    { x: 0.8, y: 0.45 }, // PUNTO 5
    { x: 0.8, y: 0.8 }, // PUNTO 6
  ];

  let puntosDiametro = celdaTamaño * 0.35;
  
  // APLICAR FADE MANUALMENTE AL BRAILLE
  let alfaBase = porcentaje * 255;
  let alfaFinal = alfaBase * (alfaCanvas / 255); 
  
  fill(255, alfaFinal); 
  noStroke();

  for (let puntitos = 0; puntitos < puntos.length; puntitos++) {
    let puntosUbi = parseInt(puntos.charAt(puntitos)) - 1;
    if (puntosUbi >= 0 && puntosUbi < pos.length) {
      let puntosX = x + pos[puntosUbi].x * celdaAncho;
      let puntosY = y + pos[puntosUbi].y * celdaAltura;
      circle(puntosX, puntosY, puntosDiametro * porcentaje);
    }
  }
}

///////////////////////////////////////////////////// LECTURA BRAILLE
function verificarLecturaBraille() {
  //RECONOCER MANOS
  if (manos.length === 0) return;

  //PRIMER MANO --- PUNTOS DEDO INDICE/MEDIO
  let mano = manos[0];
  //NOTA: averiguar mas sobre MediaPipe
  let puntosIndice = [];
  let puntosMedio = [];

  //dedo indice
  for (let i = 7; i <= 8; i++) {
    if (mano.keypoints[i]) puntosIndice.push(mano.keypoints[i]);
  }
  //dedo medio
  for (let i = 11; i <= 12; i++) {
    if (mano.keypoints[i]) puntosMedio.push(mano.keypoints[i]);
  }

  //DETECCION DE DEDOS POR PALABRA
  //'HOY'
  if (palabrasPos.hoy.activa && !palabrasReveladas.hoy) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "hoy") ||
      verificarPuntosEnPalabra(puntosMedio, "hoy")
    ) {
      revelarPalabra("hoy");
    }
  }
  //'Y'
  if (palabrasPos.y.activa && !palabrasReveladas.y && palabrasReveladas.hoy) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "y") ||
      verificarPuntosEnPalabra(puntosMedio, "y")
    ) {
      revelarPalabra("y");
    }
  }
  //'SIEMPRE'
  if (
    palabrasPos.siempre.activa &&
    !palabrasReveladas.siempre &&
    palabrasReveladas.y
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "siempre") ||
      verificarPuntosEnPalabra(puntosMedio, "siempre")
    ) {
      revelarPalabra("siempre");
    }
  }

  //'ME'
  if (
    palabrasPos.me.activa &&
    !palabrasReveladas.me &&
    palabrasReveladas.siempre
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "me") ||
      verificarPuntosEnPalabra(puntosMedio, "me")
    ) {
      revelarPalabra("me");
    }
  }
  //'HAGO'
  if (
    palabrasPos.hago.activa &&
    !palabrasReveladas.hago &&
    palabrasReveladas.me
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "hago") ||
      verificarPuntosEnPalabra(puntosMedio, "hago")
    ) {
      revelarPalabra("hago");
    }
  }
  //'PRESENTE'
  if (
    palabrasPos.presente.activa &&
    !palabrasReveladas.presente &&
    palabrasReveladas.hago
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "presente") ||
      verificarPuntosEnPalabra(puntosMedio, "presente")
    ) {
      revelarPalabra("presente");
    }
  }

  //'ANTE'
  if (
    palabrasPos.ante.activa &&
    !palabrasReveladas.ante &&
    palabrasReveladas.presente
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "ante") ||
      verificarPuntosEnPalabra(puntosMedio, "ante")
    ) {
      revelarPalabra("ante");
    }
  }
  //'TU'
  if (
    palabrasPos.tu.activa &&
    !palabrasReveladas.tu &&
    palabrasReveladas.ante
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "tu") ||
      verificarPuntosEnPalabra(puntosMedio, "tu")
    ) {
      revelarPalabra("tu");
    }
  }
  //'AUSENCIA'
  if (
    palabrasPos.ausencia.activa &&
    !palabrasReveladas.ausencia &&
    palabrasReveladas.tu
  ) {
    if (
      verificarPuntosEnPalabra(puntosIndice, "ausencia") ||
      verificarPuntosEnPalabra(puntosMedio, "ausencia")
    ) {
      revelarPalabra("ausencia");
    }
  }
}

//////////////////////////////////////////////  MOSTRAR TRADUCCION
function revelarPalabra(palabra) {
  palabrasReveladas[palabra] = true;

  // ANIMACION INDIVIDUAL X PALABRA
  palabrasAnimacion[palabra].tiempoInicio = millis();
  palabrasAnimacion[palabra].porcentaje = 0;

  // DESBLOQUEO EN ORDEN
  if (palabra === "hoy") palabrasPos.y.activa = true;
  if (palabra === "y") palabrasPos.siempre.activa = true;
  if (palabra === "siempre") palabrasPos.me.activa = true;
  if (palabra === "me") palabrasPos.hago.activa = true;
  if (palabra === "hago") palabrasPos.presente.activa = true;
  if (palabra === "presente") palabrasPos.ante.activa = true;
  if (palabra === "ante") palabrasPos.tu.activa = true;
  if (palabra === "tu") palabrasPos.ausencia.activa = true;
}

//////////////////////////////////////////////  PUNTOS MANO EN PALABRA
function verificarPuntosEnPalabra(puntos, palabra) {
  //AREA DE PALABRA
  let area = palabrasPos[palabra];

  //CADA PUNTO DE DEDOS
  for (let punto of puntos) {
    let puntoX = punto.x;

    //DETECCION DE DEDOS EN AREA
    if (
      puntoX >= area.x && //izquierda
      puntoX <= area.x + area.ancho && //derecha
      punto.y >= area.y && //arriba
      punto.y <= area.y + 60 //abajo
    ) {
      return true;
    }
  }
  return false;
}

//////////////////////////////////////////////  DIBUJAR SUBTITULOS
function dibujarTextoPermanente() {
  // DE A UNA
  if (
    !palabrasReveladas.hoy &&
    !palabrasReveladas.y &&
    !palabrasReveladas.siempre &&
    !palabrasReveladas.me &&
    !palabrasReveladas.hago &&
    !palabrasReveladas.presente &&
    !palabrasReveladas.ante &&
    !palabrasReveladas.tu &&
    !palabrasReveladas.ausencia
  ) {
    return;
  }

  // DISEÑO TXT
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);

  // ANIMACION X PALABRA
  for (let palabra of [
    "hoy", "y", "siempre", "me", "hago", "presente", "ante", "tu", "ausencia"
  ]) {
    if (palabrasReveladas[palabra]) {
      let progreso = palabrasAnimacion[palabra].porcentaje;
      let alfaBase = progreso * 255;
      let alfaFinal = alfaBase * (alfaCanvas / 255); 
      
      fill(255, 255, 0, alfaFinal); 

      // POSICION HORIZONTAL DE TEXTO CON BRAILLE
      let area = palabrasPos[palabra];
      let centroX = area.x + area.ancho / 2;

      // HOY Y SIEMPRE
      if (palabra === "hoy") {
        text("hoy", centroX, posYTexto[0]);
      } else if (palabra === "y") {
        text("y", centroX, posYTexto[0]);
      } else if (palabra === "siempre") {
        text("siempre", centroX, posYTexto[0]);
      }
      // ME HAGO PRESENTE
      else if (palabra === "me") {
        text("me", centroX, posYTexto[1]);
      } else if (palabra === "hago") {
        text("hago", centroX, posYTexto[1]);
      } else if (palabra === "presente") {
        text("presente", centroX, posYTexto[1]);
      }
      // ANTE TU AUSENCIA
      else if (palabra === "ante") {
        text("ante", centroX, posYTexto[2]);
      } else if (palabra === "tu") {
        text("tu", centroX, posYTexto[2]);
      } else if (palabra === "ausencia") {
        text("ausencia", centroX, posYTexto[2]);
      }
    }
  }
}

/////////////////////////////////////// CALLBACK TRACKEO
function devuelveManos(resultados) {
  manos = resultados;
}