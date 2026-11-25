let estadoJuego = "INICIO";
let imgSusto;
let sonidoSusto;

function setup() {

let canvas = createCanvas(600, 500); // Reemplazá con tus dimensiones
  canvas.parent('div-sketch'); // ESTA LÍNEA ES OBLIGATORIA

  createCanvas(600, 500);

  // imagen de susto
  imgSusto = createImg("imgSusto/imgSusto.jpg", "");
  imgSusto.hide();

  // sonido grito
  sonidoSusto = new Audio("grito/sonidoSusto.mp3");
  sonidoSusto.load();
}

function draw() {
  background(255);

  if (estadoJuego === "INICIO") {
    // Pantalla de inicio
    background(20);

    // Botón de inicio
    fill(46, 204, 113);
    noStroke();
    rect(20, 20, 180, 60, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("¡COMENZAR!", 110, 50);

    textSize(40);
    fill(231, 76, 60);
    text("LABERINTO EXTREMO", width / 2, height / 2 - 30);

    textSize(15);
    fill(200);
    text(
      "Haz clic en el botón verde,¡NO TE DISTRAIGAS!",
      width / 2,
      height / 2 + 30
    );
  } else if (estadoJuego === "JUGANDO") {
    // LABERINTO
    dibujarCamino();

    // punto rojo de la meta
    fill(231, 76, 60);
    noStroke();
    ellipse(565, 465, 10, 10);

    // Tramos permitidos  
    let tramos = [
      { xMin: 0,   xMax: 120, yMin: 0,   yMax: 120 }, // t1
      { xMin: 80,  xMax: 120, yMin: 100, yMax: 260 }, // t2
      { xMin: 80,  xMax: 300, yMin: 220, yMax: 260 }, // t3
      { xMin: 260, xMax: 300, yMin: 160, yMax: 400 }, // t4
      { xMin: 260, xMax: 500, yMin: 360, yMax: 400 }, // t5
      { xMin: 460, xMax: 500, yMin: 120, yMax: 400 }, // t6
      { xMin: 460, xMax: 575, yMin: 120, yMax: 150 }, // t7
      { xMin: 560, xMax: 570, yMin: 120, yMax: 480 }  // t8 Tramo final
    ];

    let dentroDeLaZona =
      mouseX >= 0 && mouseX <= 575 && mouseY >= 0 && mouseY <= 480;

    if (dentroDeLaZona) {
      let sobreAlgunTramo = false;

      // verificacion de recocrrido
      for (let i = 0; i < tramos.length; i++) {
        let t = tramos[i];
        if (mouseX >= t.xMin && mouseX <= t.xMax && mouseY >= t.yMin && mouseY <= t.yMax) {
          sobreAlgunTramo = true;
          break; // Si ya encontró uno, no necesita seguir buscando
        }
      }

      // susto si toca el area prohibida 
      if (!sobreAlgunTramo) {
        cambiarASusto();
      }
    }

    // Llegada a la "META"
    let distanciaMeta = dist(mouseX, mouseY, 565, 465);
    if (distanciaMeta < 6) {
      cambiarASusto();
    }
  } else if (estadoJuego === "SUSTO") {
    //imagen de susto
    background(0);

    if (imgSusto) {
      image(imgSusto, 0, 0, width, height);
    }

    //Botón de reintento
    fill(231, 76, 60);
    noStroke();
    rect(20, 20, 200, 60, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("¡VOLVER A INTENTAR!", 120, 50);
  }
}

function dibujarCamino() {
  background(1); // Paredes
  fill(0, 255, 0); // Camino transitable
  noStroke();

  // Pasillos del laberinto
  rect(0, 0, 120, 120); //Inicio
  rect(80, 100, 40, 160); //Bajada
  rect(80, 220, 220, 40); //Giro a la derecha
  rect(260, 160, 40, 240); //Bajada larga
  rect(260, 360, 240, 40); //Giro a la derecha
  rect(460, 120, 40, 280); //Subida vertical
  rect(460, 120, 115, 30); //Tramo horizontal superior
  rect(560, 120, 10, 360); //Tramo delgado
}

// grito
function cambiarASusto() {
  if (estadoJuego !== "SUSTO") {
    estadoJuego = "SUSTO";

    if (sonidoSusto) {
      sonidoSusto.currentTime = 0;
      sonidoSusto.play().catch((err) => {});
    }
  }
}

//Reinicio del juego
function mousePressed() {
  if (estadoJuego === "INICIO") {
    if (mouseX >= 20 && mouseX <= 200 && mouseY >= 20 && mouseY <= 80) {
      if (sonidoSusto) {
        sonidoSusto
          .play()
          .then(() => {
            sonidoSusto.pause();
            sonidoSusto.currentTime = 0;
          })
          .catch((err) => {});
      }
      estadoJuego = "JUGANDO"; //cambia estado de juego
    }
  } else if (estadoJuego === "SUSTO") {
    if (mouseX >= 20 && mouseX <= 220 && mouseY >= 20 && mouseY <= 80) {
      if (sonidoSusto) {
        sonidoSusto.pause();
        sonidoSusto.currentTime = 0;
      }
      estadoJuego = "JUGANDO";
    }
  }
}
