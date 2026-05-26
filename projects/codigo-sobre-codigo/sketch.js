let img;
let revelado = [];
let juegoTerminado = false;
let resultado = "";

// tiempo en segundos (ejemplo: 20 segundos)
let tiempoTotal = 20;
// convertir a frames (60 fps por defecto en p5.js)
let tiempoLimite = tiempoTotal * 60;

function preload() {
  img = loadImage("imagenes/compu.jpg");
}

function setup() {
  let canvas = createCanvas(600, 655);
  canvas.parent("div-sketch");
  img.resize(600, 655);
  background(255);
  textAlign(CENTER, CENTER);
  noStroke();

  // inicializar array de revelado
  for (let x = 0; x < img.width; x++) {
    revelado[x] = [];
    for (let y = 0; y < img.height; y++) {
      revelado[x][y] = false;
    }
  }
}

function draw() {
  if (juegoTerminado) {
    background(255);
    textSize(40);
    fill(0);
    text(resultado, width/2, height/2);
    return;
  }

  // si se acabó el tiempo
  if (frameCount >= tiempoLimite) {
    finalizarJuego();
    return;
  }

  let tam = map(mouseX, 0, width, 8, 20);
  textSize(tam);

  let zona = 30;

  for (let x = mouseX - zona; x < mouseX + zona; x += tam) {
    for (let y = mouseY - zona; y < mouseY + zona; y += tam) {
      if (x >= 0 && x < img.width && y >= 0 && y < img.height) {
        let xi = floor(x);
        let yi = floor(y);

        if (!revelado[xi][yi]) {
          let pix = img.get(xi, yi);
          fill(pix);
          let brillo = (red(pix) + green(pix) + blue(pix)) / 3;
          let num = int(map(brillo, 0, 255, 0, 9));
          text(num, x, y);
          revelado[xi][yi] = true;
        }
      }
    }
  }
}

function finalizarJuego() {
  juegoTerminado = true;

  // calcular progreso
  let revelados = 0;
  let totalPix = 0;
  for (let x = 0; x < img.width; x += 20) {
    for (let y = 0; y < img.height; y += 20) {
      totalPix++;
      if (revelado[x][y]) revelados++;
    }
  }
  let porcentaje = (revelados / totalPix) * 100;

  if (porcentaje >= 60) {
    resultado = "¡Ganaste! 🎉";
  } else {
    resultado = "Perdiste 😢";
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // reiniciar juego
    juegoTerminado = false;
    resultado = "";
    frameCount = 0; // reinicia el contador de tiempo
    background(255);
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        revelado[x][y] = false;
      }
    }
  }
}
