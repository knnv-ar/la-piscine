///////////////////////////////////////////////////////////
// Variables para controles
let relleno = 0;
let tamanio = 0;
let rotacion = 1;
let rotacionIn = 0;
let angulo = rotacion;
let anguloIn = rotacionIn;
let rotacionSuave;
let rotacionSuaveIn;
let tamanioBox;
let transparencia = 0;

//Variables de configuración cubos
let capas = 2;
let espaciado;

// Variables para cambios en tamaño de cubos
let ancho;
let alto;
let prof;

//Variables para control de sonido
let volumenCaos = 0;
let volumenPaz = 2;
let sonidoActivado = false;

//Botones
let btnRP;
let btnRM;
let btnTP;
let btnTM;
let btnRtP;
let btnRtM;
let btnRiP;
let btnRiM;

//Variables responsive
let translateRIzq;
let translateRUp;

///////////////////////////////////////////////////////////////////////////
//Pre-carga de tipografía y audio
function preload() {
  font = loadFont("font/Helvetica Neue LT Std 93 Black Extended.otf");
  sonidoCaos = loadSound("sound/sonido-caos.mp3");
  sonidoPaz = loadSound("sound/sonido-paz.mp3");
}

///////////////////////////////////////////////////////////

function setup() {
  if (revisarResponsive()) {
    let canvas = createCanvas(380, 800, WEBGL);
    canvas.parent('div-sketch');
  } else {
    let canvas = createCanvas(800, 550, WEBGL);
    canvas.parent('div-sketch');
  }
  textFont(font);
  textAlign(CENTER, CENTER);

  // Crear un nuevo elemento <style> para definir CSS
  let  style = document.createElement("style");
  style.innerHTML = `
    .btn {
      padding: 0 0.3em;
      border: none;
      border-radius: 5em;
      background-color: grey;
      color: white;
      font-size: 1.5em;
      font-weight: bold;
    }

    .btn:hover {
      background-color: black;
    }
  `;

//   // Agregar el <style> al <head> del documento
  document.head.appendChild(style);

  btnRP = createButton("+");
  btnRP.addClass("btn");
  btnRM = createButton("−");
  btnRM.addClass("btn");
  btnTP = createButton("+");
  btnTP.addClass("btn");
  btnTM = createButton("−");
  btnTM.addClass("btn");
  btnRtP = createButton("+");
  btnRtP.addClass("btn");
  btnRtM = createButton("−");
  btnRtM.addClass("btn");
  btnRiP = createButton("+");
  btnRiP.addClass("btn");
  btnRiM = createButton("−");
  btnRiM.addClass("btn");

  sonidoCaos.loop();
  sonidoCaos.setVolume(volumenCaos);
  sonidoPaz.loop();
  sonidoPaz.setVolume(volumenPaz);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let z1;
let y1;
let x1;

function draw() {
  revisarResponsive();
  background(0);
  if (revisarResponsive()) {
    controlesMobile();
  } else if (!revisarResponsive()) {
    controlesDesktop();
  }

  ////////////////////////////////////////////////

  //ACCIONES DE BOTONES
  btnRP.mousePressed(() => (relleno < 10 ? relleno++ : null));
  btnRM.mousePressed(() => (relleno >= 1 ? relleno-- : null));
  btnTP.mousePressed(() => {
    if (tamanio < 10) {
      tamanio++;
      if (tamanio > 5 && tamanio < 8) {
        volumenCaos = tamanio / 30;
        volumenPaz = (10 - tamanio) / 15;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      } else if (tamanio >= 8) {
        volumenCaos = tamanio / 10;
        volumenPaz = (10 - tamanio) / 100;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      } else {
        volumenCaos = tamanio / 100;
        volumenPaz = (10 - tamanio) / 5;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      }
    }
  });
  btnTM.mousePressed(() => {
    if (tamanio >= 1) {
      tamanio--;
      if (tamanio > 5 && tamanio < 8) {
        volumenCaos = tamanio / 30;
        volumenPaz = (10 - tamanio) / 15;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      } else if (tamanio >= 8) {
        volumenCaos = tamanio / 10;
        volumenPaz = (10 - tamanio) / 100;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      } else {
        volumenCaos = tamanio / 100;
        volumenPaz = (10 - tamanio) / 4;
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.setVolume(volumenPaz);
      }
    }
  });

  btnRtP.mousePressed(() => (rotacion < 10 ? rotacion++ : null));
  btnRtM.mousePressed(() => (rotacion >= 1 ? rotacion-- : null));
  btnRiP.mousePressed(() => (rotacionIn < 10 ? rotacionIn++ : null));
  btnRiM.mousePressed(() => (rotacionIn >= 1 ? rotacionIn-- : null));

  ////////////////////////////////////////////////

  //CUBOS
  push();
  translate(translateRIzq, translateRUp, 0);
  //acomoda el cubo segun canvas

  //Control de la rotacion general del cubo
  rotacionSuave = rotacion * 0.005;
  rotateX(angulo * 1);
  rotateY(angulo * 1);
  angulo += rotacionSuave;

  ////////////////////////////////////////////////

  //Dibujo de los cubos individuales básicos
  for (z1 = -capas; z1 <= capas; z1++) {
    for (y1 = -capas; y1 <= capas; y1++) {
      for (x1 = -capas; x1 <= capas; x1++) {
        push();
        translate(x1 * espaciado, y1 * espaciado, z1 * espaciado); //Mueve cada cubo a su posición correspondiente en la cuadrícula tridimensional.

        // Rotar cada cubo sobre su propio eje
        rotacionSuaveIn = rotacionIn * 0.0001;
        anguloIn += rotacionSuaveIn;
        rotateX(anguloIn * 1);
        rotateY(anguloIn * 1);

        // Colores en degradado para cada cubo
        stroke(
          70,
          map(z1, -capas, capas, 0, 100),
          map(y1, -capas, capas, 0, 200)
        );
        strokeWeight(2);
        transparencia = relleno * 12;
        fill(
          70,
          map(z1, -capas, capas, 0, 100),
          map(y1, -capas, capas, 0, 200),
          transparencia
        );

        if (revisarResponsive(z1, y1, x1)) {
          cubosResponsive();
        } else if (!revisarResponsive()) {
          cubosDesktop(z1, y1, x1);
        }

        pop();
      }
    }
  }
  pop();

}
///////////////////////////////////////////////////////////////////////////

function mousePressed() {
  if (revisarResponsive()) {
    //Activación de sonido
    if (mouseX >= 0 && mouseX <= 380 && mouseY >= 750 && mouseY <= 800) {
      if (!sonidoActivado) {
        sonidoCaos.loop();
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.loop();
        sonidoPaz.setVolume(volumenPaz);
      } else if (sonidoActivado) {
        sonidoCaos.stop();
        sonidoPaz.stop();
      }
      sonidoActivado = !sonidoActivado;
    }
  } else if (!revisarResponsive()) {
    //Activación de sonido
    if (mouseX >= 600 && mouseX <= 800 && mouseY >= 525 && mouseY <= 550) {
      if (!sonidoActivado) {
        sonidoCaos.loop();
        sonidoCaos.setVolume(volumenCaos);
        sonidoPaz.loop();
        sonidoPaz.setVolume(volumenPaz);
      } else if (sonidoActivado) {
        sonidoCaos.stop();
        sonidoPaz.stop();
      }
      sonidoActivado = !sonidoActivado;
    }
  }
}

////////////////////////////////////////////////////////////////////////

function revisarResponsive() {
  if (windowWidth < windowHeight) {
    translateRIzq = 0;
    translateRUp = -150;
    tamanioBox = 30;
    espaciado = 50;
    return true;
  } else if (windowWidth > windowHeight) {
    translateRIzq = -100;
    translateRUp = 0;
    tamanioBox = 40;
    espaciado = 60;
  }

  return false;
}

function controlesMobile() {
  //Área de controles
  fill(80);
  rect(-200, 100, 400, 400);

  fill("#FD86AE");
  text("CONTROLES", 0, 140);
  fill("#F9CE90");
  text("Relleno", -100, 190);
  fill("#CDDC39");
  text("Sonido", 100, 190);
  fill("#7C90FF");
  text("Rotación", -100, 290);
  fill("#CBB0FA");
  text("Rotación", 100, 270);
  text("individual", 100, 290);
  fill(255);

  text(relleno, -100, 220);

  text(tamanio, 100, 220);

  text(rotacion, -100, 320);

  text(rotacionIn, 100, 320);

  btnRP.position(35, 605);
  btnRM.position(115, 605);
  btnTP.position(235, 605);
  btnTM.position(315, 605);
  btnRtP.position(35, 705);
  btnRtM.position(115, 705);
  btnRiP.position(235, 705);
  btnRiM.position(315, 705);

  /////////////////////////////////////////////

  fill("green");
  rect(-200, 350, 400, 80);
  textSize(12);
  fill(255);
  text("Click AQUÍ para activar", 0, 370);
  text("o desactivar el sonido", 0, 385);
  textSize(18);
}

///////////////////////////////////////////////////////////////////////////

function controlesDesktop() {
  /////////////////////////////////////////////
  //Área de controles
  fill(80);
  rect(200, -300, 325, 600);

  fill("#FD86AE");
  text("CONTROLES", 300, -250);
  fill("#F9CE90");
  text("Relleno", 300, -200);
  fill("#CDDC39");
  text("Sonido", 300, -80);
  fill("#7C90FF");
  text("Rotación", 300, 40);
  fill("#CBB0FA");
  text("Rotación", 300, 160);
  text("individual", 300, 180);
  fill(255);

  text(relleno, 300, -160);

  text(tamanio, 300, -40);

  text(rotacion, 300, 80);

  text(rotacionIn, 300, 220);

  btnRP.position(645, 100);
  btnRM.position(727, 100);
  btnTP.position(645, 220);
  btnTM.position(727, 220);
  btnRtP.position(645, 340);
  btnRtM.position(727, 340);
  btnRiP.position(645, 480);
  btnRiM.position(727, 480);

  /////////////////////////////////////////////

  fill("green");
  rect(200, 250, 300, 300);
  fill(255);
  textSize(9);
  text("Click AQUÍ para activar", 300, 260);
  text("o desactivar el sonido", 300, 270);
  textSize(18);
}

///////////////////////////////////////////////////////////////////////////

function cubosResponsive(z, y, x) {
  // Dibujo para los cubos con cambios de tamaño
  if (tamanio == 0) {
    box(tamanioBox);
  } else if (tamanio == 1) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(25, 30); // Ancho aleatorio
          alto = random(25, 30); // Altura aleatoria
          prof = random(25, 30); //Profundidad aleatoria
        }
      }
    }

    espaciado = 50;
    //Variación de colores
    stroke(
      random(60, 80),
      random(map(z1, -capas, capas, 0, 90), map(z1, -capas, capas, 0, 110)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(60, 80),
      random(map(z1, -capas, capas, 0, 90), map(z1, -capas, capas, 0, 110)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 2) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(25, 35);
          alto = random(25, 35);
          prof = random(25, 35);
        }
      }
    }
    espaciado = 51;
    //Variación de colores
    stroke(
      random(50, 80),
      random(map(z1, -capas, capas, 0, 85), map(z1, -capas, capas, 0, 115)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(50, 80),
      random(map(z1, -capas, capas, 0, 85), map(z1, -capas, capas, 0, 115)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 3) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(20, 35);
          alto = random(20, 35);
          prof = random(20, 35);
        }
      }
    }
    espaciado = 52;
    //Variación de colores
    stroke(
      random(50, 90),
      random(map(z1, -capas, capas, 0, 80), map(z1, -capas, capas, 0, 120)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(50, 90),
      random(map(z1, -capas, capas, 0, 80), map(z1, -capas, capas, 0, 120)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 4) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(20, 40);
          alto = random(20, 40);
          prof = random(20, 40);
        }
      }
    }
    espaciado = 53;
    //Variación de colores
    stroke(
      random(40, 90),
      random(map(z1, -capas, capas, 0, 75), map(z1, -capas, capas, 0, 125)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(40, 90),
      random(map(z1, -capas, capas, 0, 75), map(z1, -capas, capas, 0, 125)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 5) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(15, 40);
          alto = random(15, 40);
          prof = random(15, 40);
        }
      }
    }
    espaciado = 54;
    //Variación de colores
    stroke(
      random(40, 100),
      random(map(z1, -capas, capas, 0, 70), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(40, 100),
      random(map(z1, -capas, capas, 0, 70), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 6) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(15, 45);
          alto = random(15, 45);
          prof = random(15, 45);
        }
      }
    }
    espaciado = 55;
    //Variación de colores
    stroke(
      random(30, 100),
      random(map(z1, -capas, capas, 0, 65), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(30, 100),
      random(map(z1, -capas, capas, 0, 65), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 7) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(10, 45);
          alto = random(10, 45);
          prof = random(10, 45);
        }
      }
    }
    espaciado = 55;
    //Variación de colores
    stroke(
      random(30, 110),
      random(map(z1, -capas, capas, 0, 60), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(30, 110),
      random(map(z1, -capas, capas, 0, 60), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 8) {
    rotacion = 8;
    rotacionIn = 8;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(10, 50);
          alto = random(10, 50);
          prof = random(10, 50);
        }
      }
    }
    espaciado = random(58, 62);
    //Variación de colores
    stroke(
      random(20, 110),
      random(map(z1, -capas, capas, 0, 55), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(20, 110),
      random(map(z1, -capas, capas, 0, 55), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 9) {
    rotacion = 9;
    rotacionIn = 9;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(5, 50);
          alto = random(5, 50);
          prof = random(5, 50);
        }
      }
    }
    espaciado = random(55, 65);
    //Variación de colores
    stroke(
      random(20, 120),
      random(map(z1, -capas, capas, 0, 50), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(20, 120),
      random(map(z1, -capas, capas, 0, 50), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 10) {
    rotacion = 10;
    rotacionIn = 10;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(1, 55);
          alto = random(1, 55);
          prof = random(1, 55);
        }
      }
    }
    espaciado = random(50, 70);
    //Variación de colores
    stroke(
      random(10, 120),
      random(map(z1, -capas, capas, 0, 45), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(10, 120),
      random(map(z1, -capas, capas, 0, 45), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  }
}

/////////////////////////////////////////////

function cubosDesktop() {
  // Dibujo para los cubos con cambios de tamaño
  if (tamanio == 0) {
    box(tamanioBox);
  } else if (tamanio == 1) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(35, 45); // Ancho aleatorio
          alto = random(35, 45); // Altura aleatoria
          prof = random(35, 45); //Profundidad aleatoria
        }
      }
    }
    espaciado = 60;
    //Variación de colores
    stroke(
      random(60, 80),
      random(map(z1, -capas, capas, 0, 90), map(z1, -capas, capas, 0, 110)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(60, 80),
      random(map(z1, -capas, capas, 0, 90), map(z1, -capas, capas, 0, 110)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 2) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(30, 50);
          alto = random(30, 50);
          prof = random(30, 50);
        }
      }
    }
    espaciado = 61;
    //Variación de colores
    stroke(
      random(50, 80),
      random(map(z1, -capas, capas, 0, 85), map(z1, -capas, capas, 0, 115)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(50, 80),
      random(map(z1, -capas, capas, 0, 85), map(z1, -capas, capas, 0, 115)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 3) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(25, 55);
          alto = random(25, 55);
          prof = random(25, 55);
        }
      }
    }
    espaciado = 63;
    //Variación de colores
    stroke(
      random(50, 90),
      random(map(z1, -capas, capas, 0, 80), map(z1, -capas, capas, 0, 120)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(50, 90),
      random(map(z1, -capas, capas, 0, 80), map(z1, -capas, capas, 0, 120)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 4) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(15, 55);
          alto = random(15, 55);
          prof = random(15, 55);
        }
      }
    }
    espaciado = 65;
    //Variación de colores
    stroke(
      random(40, 90),
      random(map(z1, -capas, capas, 0, 75), map(z1, -capas, capas, 0, 125)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(40, 90),
      random(map(z1, -capas, capas, 0, 75), map(z1, -capas, capas, 0, 125)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 5) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(10, 55);
          alto = random(10, 55);
          prof = random(10, 55);
        }
      }
    }
    espaciado = 65;
    //Variación de colores
    stroke(
      random(40, 100),
      random(map(z1, -capas, capas, 0, 70), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(40, 100),
      random(map(z1, -capas, capas, 0, 70), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 6) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(5, 60);
          alto = random(5, 60);
          prof = random(5, 60);
        }
      }
    }
    espaciado = 65;
    //Variación de colores
    stroke(
      random(30, 100),
      random(map(z1, -capas, capas, 0, 65), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(30, 100),
      random(map(z1, -capas, capas, 0, 65), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 7) {
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(1, 60);
          alto = random(1, 60);
          prof = random(1, 60);
        }
      }
    }
    espaciado = 65;
    //Variación de colores
    stroke(
      random(30, 110),
      random(map(z1, -capas, capas, 0, 60), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(30, 110),
      random(map(z1, -capas, capas, 0, 60), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 8) {
    rotacion = 8;
    rotacionIn = 8;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(1, 70);
          alto = random(1, 70);
          prof = random(1, 70);
        }
      }
    }
    espaciado = random(66, 70);
    //Variación de colores
    stroke(
      random(20, 110),
      random(map(z1, -capas, capas, 0, 55), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(20, 110),
      random(map(z1, -capas, capas, 0, 55), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 9) {
    rotacion = 9;
    rotacionIn = 9;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(1, 75);
          alto = random(1, 75);
          prof = random(1, 75);
        }
      }
    }
    espaciado = random(65, 75);
    //Variación de colores
    stroke(
      random(20, 120),
      random(map(z1, -capas, capas, 0, 50), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(20, 120),
      random(map(z1, -capas, capas, 0, 50), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  } else if (tamanio == 10) {
    rotacion = 10;
    rotacionIn = 10;
    for (let z = 0; z < capas; z++) {
      for (let y = 0; y < capas; y++) {
        for (let x = 0; x < capas; x++) {
          ancho = random(1, 80);
          alto = random(1, 80);
          prof = random(1, 80);
        }
      }
    }
    espaciado = random(60, 85);
    //Variación de colores
    stroke(
      random(10, 120),
      random(map(z1, -capas, capas, 0, 45), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200)
    );
    fill(
      random(10, 120),
      random(map(z1, -capas, capas, 0, 45), map(z1, -capas, capas, 0, 130)),
      map(y1, -capas, capas, 0, 200),
      transparencia
    );
    box(ancho, alto, prof);
  }
}
