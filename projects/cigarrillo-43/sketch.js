//parte del juego
let patio;
let corre;
let vigiDere;
let vigiIzq;
let dialogo;
let unoDosTres;
let teVi;
let ganaste;
let timbre;
let chicos;
let pX = 25; // posición del jugador
let poseActual = vigiDere; // inicializamos con una pose
let posicionInicial = 25; // guardamos el spawnpoint
let noSePuede = false;
let mostrarMensaje = true;
let juegoTerminado = false; // checkea si ganamos o no
let estaCorriendo = false; // nueva variable para controlar la imagen
let cam;
let transparencia = 0;
let cantTransparencia = 1;

let font

let tiempo = 675;
let imagenes = [];
let textos = [];
let transparencias = [];
let cambioTransparencias = [];

//variables para controlar que no se reproduzcan mil veces los sonidos
let unoDosTresReproducido = false;
let teViReproducido = false;
let ganasteReproducido = false;
let timbreReproducido = false;
let chicosReproducido = false;

//variables mis poses
let pose1;
let pose2;
let pose3;
let pose4;
let pose5;
let numPose = 1;
let suma = false;

//museo de fotos
let silvia;
let desmallo;
let diapo1T = 0;
let diapo1CT = 1;

function preload() {
  font= loadFont("./fonts/GloriaHallelujah-Regular.ttf")
  patio = loadImage("./img/patio.jpg");
  corre = loadImage("./img/corre.gif");
  vigiDere = loadImage("./img/vigi-dere.png");
  vigiIzq = loadImage("./img/vigi-izq.png");
  dialogo = loadImage("./img/dialogo.png");
  unoDosTres = loadSound("./sound/123.wav");
  teVi = loadSound("./sound/tevi.wav");
  ganaste = loadSound("./sound/ganaste.wav");
  timbre = loadSound("./sound/timbre.mp3");
  chicos = loadSound("./sound/chicos.mp3");
  //fotos poses yo
  pose1 = loadImage("./img/posesyo/pose1.png");
  pose2 = loadImage("./img/posesyo/pose2.png");
  pose3 = loadImage("./img/posesyo/pose3.png");
  pose4 = loadImage("./img/posesyo/pose4.png");
  pose5 = loadImage("./img/posesyo/pose5.png");
  //cargar fotos museo

  let nombres = [
    "silvia",
    "desmallo",
    "banios",
    "promesas",
    "abi",
    "miles",
    "venom",
    "peter",
    "mercury",
    "sanmartin",
    "corderita",
    "pistola",
    "ancla",
    "bandera",
    "fuente",
    "chupete",
  ];
  for (let i = 0; i < nombres.length; i++) {
  imagenes.push(loadImage(`./img/${nombres[i]}.jpg`));
}

  // Configuración de textos con propiedades personalizadas
  textos = [
    {
      texto: [
        "En mi acto de egreso con mi primera seño de primaria, la seño Silvia",
        "Después de dos años en el cuerpo de abanderados sin desmayarme, en mi último acto me tocó",
      ],
      pos: [
        { x: 40, y: 320 },
        { x: 325, y: 53 },
      ],
      tam: 18,
      limite: 230,
    },
    {
      texto: ["Con mis amigas de salita de 4 en los baños de salita de 4"],
      pos: [{ x: 110, y: 360 }],
      tam: 24,
      limite: 370,
    },
    {
      texto: ["Amistades", "que duran años"],
      pos: [
        { x: -145, y: 315 },
        { x: 140, y: 120 },
      ],
      tam: 24,
      limite: 600,
    },
    {
      texto: ["Ocasión para disfrazarme", "Ocasión que disfruto"],
      pos: [
        { x: -150, y: 80 },
        { x: 130, y: 360 },
      ],
      tam: 21,
      limite: 600,
    },
    {
      texto: ["Y si es de Spider-Man, mejor"],
      pos: [{ x: -70, y: 350 }],
      tam: 26,
      limite: 700,
    },
    {
      texto: ["Donde me pueda trepar me trepo"],
      pos: [{ x: 65, y: 280 }],
      tam: 25,
      limite: 200,
    },
    {
      texto: ["Levantarme temprano siempre fue una pesadilla"],
      pos: [{ x: 350, y: 150 }],
      tam: 26,
      limite: 200,
    },
  ];

  for (let i = 0; i < textos.length; i++) {
    transparencias.push(0);
    cambioTransparencias.push(2);
  }
}

function setup() {
  let canvas = createCanvas(600, 450);
  canvas.parent('div-sketch');

  cam = createCapture(VIDEO);
  cam.hide();
  poseActual = vigiDere; //Posición inicial del Benja mirando a la derecha
}

function draw() {
  background(patio);
  if (!chicosReproducido) {
    chicos.loop();
    chicosReproducido = true;
  }

  //Verificamos si está corriendo para mostrar la imagen correspondiente
  if (estaCorriendo) {
    image(corre, pX - 115, 55, 208, 370);
    if (!suma) {
      // Solo suma si aún no ha sido incrementado
      numPose++;
      suma = true; // Marca que ya fue incrementado
      if (numPose == 6) {
        numPose = 1;
      }
    }
  } else {
    suma = false;
    switch (
      numPose //cambio de mis poses
    ) {
      case 1:
        image(pose1, pX - 90, 150, 217, 290);
        break;
      case 2:
        image(pose2, pX - 70, 150, 217, 290);
        break;
      case 3:
        image(pose3, pX - 70, 150, 217, 290);
        break;
      case 4:
        image(pose4, pX - 100, 130, 232, 310);
        break;
      case 5:
        image(pose5, pX - 75, 140, 217, 290);
    }
  }

  //nosotrosss
  if (numPose == 4 && !estaCorriendo) {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    image(cam, pX, 240, 100, 70);
    pop();
  } else if (numPose !== 5 || estaCorriendo) {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    image(cam, pX, 185, 100, 70);
    pop();
  }

  //el Benja (el vigilante)
  push();
  rectMode(CENTER);
    image(poseActual, 460, 250, 77, 170);
  pop();

  //Si el juego terminó, mostramos el mensaje y evitamos que se ejecute el resto del código
  if (juegoTerminado) {
    escribir("¡Ganaste!", 18, 210, 375);

    if (!ganasteReproducido) {
      unoDosTres.stop();
      ganaste.play();
      ganasteReproducido = true;
    }
    if (ganasteReproducido && !timbreReproducido) {
      timbre.play();
      timbreReproducido = true;
      chicos.stop();
    }
    if (timbreReproducido) {
      transparencia += cantTransparencia;
      if (transparencia == 255) {
        cantTransparencia = 0;
        museo();
      }
    }

    estaCorriendo = false;
  } else {
    //linea principal del benja
    if (mostrarMensaje) {
      escribir("1,2,3, Cigarrillo 43!", 15, 195, 390);
      teViReproducido = false;

      if (!unoDosTresReproducido) {
        unoDosTres.play();
        unoDosTresReproducido = true; //Marcamos que ya se reprodujo
      }
    }

    //Comprobamos si el jugador llego al Benja
    if (pX > 470) {
      juegoTerminado = true; // Terminar el juego
    }

    //Detectamos si se está presionando una tecla
    if (keyIsPressed || mouseIsPressed) {
      estaCorriendo = true; // ponemos el gif de correr
      pX++;

      //Si se mueve mientras el Benja está viendo, volvemos al spawnpoint y cambiamos a la pose de "apunta"
      if (noSePuede && pX !== posicionInicial) {
        pX = posicionInicial;
        escribir("¡Te vi!", 20, 210, 390);
        

        if (!teViReproducido) {
          teVi.play();
          teViReproducido = true;
        }
      } else {
        poseActual = vigiDere;
      }
    } else {
      estaCorriendo = false;
    }

    //Cambiamos la pose del Benja cada 3 segundos
    if (frameCount % 180 === 0) {
      cigarrillo();
    }
  }
  push();
  fill(0, 0, 0, transparencia);
  rect(0, 0, width, height);
  pop();

  //imagenes museooooo
  push();
  textFont("font");
  textAlign(CENTER);
  // Renderizar cada diapositiva
  for (let i = 0; i < textos.length; i++) {
    push();
    tint(255, 255, 255, transparencias[i]);
    fill(255, 255, 255, transparencias[i]);

    // Renderizar imágenes de cada diapositiva
    if (i === 0) {
      image(imagenes[0], 55, 50, 200, 250);
      image(imagenes[1], 345, 150, 200, 250);
    } else if (i === 1) {
      image(imagenes[2], 113, 50, 375, 281);
    } else if (i === 2) {
      image(imagenes[3], 40, 50, 250, 187);
      image(imagenes[4], 310, 200, 250, 187);
    } else if (i === 3) {
      image(imagenes[9], 15, 245, 135, 180);
      image(imagenes[8], 160, 170, 135, 180);
      image(imagenes[11], 305, 95, 135, 180);
      image(imagenes[10], 450, 30, 135, 180);
    } else if (i === 4) {
      image(imagenes[5], 20, 70, 173, 231);
      image(imagenes[6], 213, 70, 173, 231);
      image(imagenes[7], 406, 70, 173, 231);
    } else if (i === 5) {
      image(imagenes[12], 25, 25, 255, 191);
      image(imagenes[13], 310, 25, 255, 191);
      image(imagenes[14], 365, 230, 150, 200);
    } else if (i === 6) {
      image(imagenes[15], 65, 50, 262, 350);
    }

    // Renderizar texto con sus propiedades personalizadas
    textSize(textos[i].tam);
    for (let j = 0; j < textos[i].texto.length; j++) {
      text(
        textos[i].texto[j],
        textos[i].pos[j].x,
        textos[i].pos[j].y,
        textos[i].limite
      );
    }
    pop();
  }

  pop();
}

function escribir(a, b, c, d) {
  push();
  image(dialogo, 360, 180);
  fill(0);
  textSize(b);
  text(a, d, c, 60);
  pop();
}

//Permitimos o no el paso y cambiamos la pose del nenito
function cigarrillo() {
  if (!noSePuede) {
    poseActual = vigiIzq;
    noSePuede = true;
    mostrarMensaje = false;
    unoDosTresReproducido = false; //Reseteamos para que se puede volver a reproducirrr
  } else {
    poseActual = vigiDere;
    noSePuede = false;
    mostrarMensaje = true;
  }
}

function museo() {
  for (let i = 0; i < textos.length; i++) {
    if (i === 0 || transparencias[i - 1] < 0) {
      if (transparencias[i] < tiempo) {
        transparencias[i] += cambioTransparencias[i];
      }
      if (transparencias[i] >= tiempo) {
        cambioTransparencias[i] = -cambioTransparencias[i];
        transparencias[i] += cambioTransparencias[i];
      }
    }
  }
}

document.oncontextmenu = function () {
  return false;
};


