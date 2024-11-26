// Variables para las imágenes
let imgmarco;
let video;
let foto;

// Variables para los elementos de dibujo
let colorpincel, zoom, colorPunto, pieza;
let borrador = false;
let tamanioStroke = 10;
let muestravideo = true;
let photoallowed = true;
let zoomallowed = false;
let brushactive = false;
let puntosactive = false;

function preload() {
  imgmarco = loadImage("imagenes/marco.png");
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('div-sketch');
  colorpincel = color("#FFFFFF");

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  // Al principio muestra el video
  if (muestravideo) {
    image(video, 0, 0, 640, 480);
  }

  // Cuando deja de mostrar el video, activa los pinceles
  if (mouseIsPressed && muestravideo == false && brushactive) {
    if (borrador) {
      colorpincel = foto.get(mouseX, mouseY);
    }
    stroke(colorpincel);
    strokeWeight(tamanioStroke);
    point(mouseX, mouseY);
    frameCount = 0;
  }

  // Dibujo con pincel de zoom
  if (mouseIsPressed && zoomallowed) {
    zoom = foto.get(mouseX, mouseY, 25, 25);
    image(zoom, mouseX, mouseY, 50, 50);
    frameCount = 0;
  }

  // Efecto puntillismo
  if (puntosactive) {
    for (i = 0; i < 200; i++) {
      x = random(800);
      y = random(533);
      colorPunto = foto.get(x, y);
      stroke(colorPunto);
      strokeWeight(4);
      point(x, y);
    }
  }

  // Efecto pixelado al presionar la tecla x
  if (keyIsPressed) {
    if (key == "x" || key == "X") {
      pieza = get();
      i = 0;
      j = 0;

      do {
        i = 0;
        do {
          x = i;
          y = j;
          colorTrazo = pieza.get(x, y);
          noStroke();
          fill(colorTrazo);
          rect(x, y, 10, 10);
          i += 10;
        } while (i < 640);

        j += 10;
      } while (j < 480);
    }
  }

  // Con más de 2 minutos sin interactuar, resetea todo
  if (frameCount > 7200) {
    muestravideo = true;
    photoallowed = true;
    zoomallowed = false;
    brushactive = false;
    tamanioStroke = 10;
    puntosactive = false;
    frameCount = 0;
  }

  // Muestra al final de todo la imagen del marco
  image(imgmarco, 0, 0, 640, 480);
}

//Para evitar que salga el menú con el click derecho
document.oncontextmenu = function () {
  return false;
};

//Cambio de herramientas con presión de teclas
function keyPressed() {
  frameCount = 0; // Para cualquier tecla presionada, la cuenta vuelve a 0

  // Con f toma la foto
  if (key == "f" || key == "F") {
    if (photoallowed) {
      muestravideo = false; // Deja de mostrar el video
      photoallowed = false; // Desactiva la toma de fotos
      brushactive = true; // Activa dibujo con pincel
      foto = video.get(); // Toma la foto
      image(foto, 0, 0, 640, 480); // Y la muestra
    }
  }

  // Con las flechas aumenta o disminuye el tamaño del pincel
  if (keyCode == RIGHT_ARROW) {
    if (tamanioStroke <= 30) {
      tamanioStroke += 1;
    }
  }
  if (keyCode == LEFT_ARROW) {
    if (tamanioStroke >= 2) {
      tamanioStroke -= 1;
    }
  }

  // Con z activa el pincel de zoom
  if (key == "z" || key == "Z") {
    zoomallowed = true; // Activa pincel de zoom
    brushactive = false; // Desactiva pincel normal
  }

  //Con rgbwk cambia los colores
  if (key == "r" || key == "R") {
    brushactive = true; // Activa dibujo con pincel
    colorpincel = color("#ff0000");
    borrador = false;
    zoomallowed = false;
  }
  if (key == "g" || key == "G") {
    brushactive = true; // Activa dibujo con pincel
    colorpincel = color("#008000");
    borrador = false;
    zoomallowed = false;
  }
  if (key == "b" || key == "B") {
    brushactive = true; // Activa dibujo con pincel
    colorpincel = color("#000080");
    borrador = false;
    zoomallowed = false;
  }
  if (key == "w" || key == "W") {
    brushactive = true; // Activa dibujo con pincel
    colorpincel = color("#FFFFFF");
    borrador = false;
    zoomallowed = false;
  }
  if (key == "k" || key == "K") {
    brushactive = true; // Activa dibujo con pincel
    colorpincel = color("#000000");
    borrador = false;
    zoomallowed = false;
  }

  //Con e cambia al borrador
  if (key == "e" || key == "E") {
    brushactive = true; // Activa dibujo con pincel
    borrador = true;
    zoomallowed = false;
    puntosactive = false; // Desactiva puntillismo
  }

  // Con p activa el filtro de posterización
  if (key == "p" || key == "P") {
    zoomallowed = false; // Desactiva pincel de zoom
    filter(POSTERIZE, 3);
    brushactive = true; // Activa dibujo con pincel
    puntosactive = false; // Desactiva puntillismo
  }

  // Con i activa el filtro de inversión
  if (key == "i" || key == "I") {
    zoomallowed = false; // Desactiva pincel de zoom
    filter(INVERT);
    brushactive = true; // Activa dibujo con pincel
    puntosactive = false; // Desactiva puntillismo
  }

  // Con a activa y desactiva el efecto de puntillismo automático
  if (key == "a" || key == "A") {
    zoomallowed = false; // Desactiva pincel de zoom
    brushactive = true; // Activa dibujo con pincel
    if (puntosactive) {
      puntosactive = false;
    } else if (puntosactive == false) {
      puntosactive = true;
    }
  }

  //Con s guarda la obra final
  if (key == "s" || key == "S") {
    saveCanvas("miObra.jpg");
  }

  //Con n resetea y se puede hacer una nueva obra
  if (key == "n" || key == "N") {
    muestravideo = true;
    photoallowed = true;
    zoomallowed = false;
    brushactive = false;
    tamanioStroke = 10;
    puntosactive = false;
  }
}
