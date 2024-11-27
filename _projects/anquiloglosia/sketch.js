let img; // variable para la imagen
let risa, llanto; // sonidos para cada esquina
let circlesTop = []; // array para los círculos de la parte superior
let circlesBottom = []; // array para los círculos de la parte inferior
let topHeight, bottomHeight; // altura para las mitades superior e inferior

function preload() {
  // apara cargar la imagen y los sonidos
  img = loadImage('roma/soledad.jpg'); //  ruta de la imagen
  risa = loadSound('sonidos/risa.wav'); // ruta del sonido1
  llanto = loadSound('sonidos/llanto.mp3'); // ruta del sonido2
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('div-sketch');
  topHeight = height / 2;  // mitad superior
  bottomHeight = height / 2;  // mitad inferior
}

function draw() {
  background(255); // Fondo blanco

  // mostrar la imagen de fondo
  image(img, 0, 0, width, height);

  // Detectar la proximidad del cursor a las esquinas
  if (mouseX > width - 100 && mouseY < 100) {
    // Cursor cerca de la esquina superior derecha
    if (!risa.isPlaying()) {
      risa.play();
    }

    // círculos blancos en la mitad superior
    fill(255);
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(topHeight);
      let size = random(5, 10); // tamaño de los círculos
      ellipse(x, y, size, size);
    }
  } else {
    risa.stop(); // parar el sonido cuando el cursor se aleja
  }

  if (mouseX < 100 && mouseY > height - 100) {
    // cursor cerca de la esquina inferior izquierda
    if (!llanto.isPlaying()) {
      llanto.play();
    }

    // círculos negros en la mitad inferior
    fill(0);
    for (let i = 0; i < 100; i++) {
      let x = random(width);
      let y = random(bottomHeight, height); //  valores entre bottomHeight y height
      let size = random(5, 10); // Tamaño de los círculos
      ellipse(x, y, size, size);
    }
  } else {
    llanto.stop(); // parar el sonido cuando el cursor se aleja
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  topHeight = height / 2;  // re-calcular y redimensionar las mitades
  bottomHeight = height / 2;
}