let fondoTV;
let tvPrendida = false;
let video1, video2, video3, video4, video5;
let indiceVideoActual = 0;
let botonX = 627, botonY = 445, botonAncho = 64, botonAlto = 195;

function preload() {
  fondoTV = loadImage("fondo/tele.jpg");
  // videos
  video1 = createVideo(["videos/los-doodlebops.mp4"]);
  video2 = createVideo(["videos/los-imaginadores.mp4"]);
  video3 = createVideo(["videos/sid-el-nino-cientifico.mp4"]);
  video4 = createVideo(["videos/campamento-lakebottom.mp4"]);
  video5 = createVideo(["videos/tio-grandpa.mp4"]);
}

function setup() {
  //createCanvas(780, 700);
  let canvas = createCanvas(780, 700);
  canvas.parent('div-sketch');

  // Pausa todos los videos al inicio
  video1.pause();
  video2.pause();
  video3.pause();
  video4.pause();
  video5.pause();

  // Ocultar los videos hasta que se reproduzcan
  video1.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  video5.hide();
}

function draw() {
  background(0);  

  image(fondoTV, 25, 20, 720, 600);

  if (tvPrendida) {
    mostrarVideo(indiceVideoActual);
  } else { // Mensaje
    fill(255);
    textSize(24);
    textAlign(RIGHT);
    text("La televisión está apagada", 465, 50);
  }
  // boton para prender la tele
  fill(190, 50, 90, 90);
  circle(botonX, botonY, botonAncho, botonAlto);
}

function mostrarVideo(indice) {

  // se repoducira y mostrara el video que corresponda 
  if (indice == 0) {
    image(video1,150, 169, 355, 290);
  } else if (indice == 1) {
    image(video2,150, 169, 356, 290);
  } else if (indice == 2) {
    image(video3,155, 175, 350, 270);
  } else if (indice == 3) {
    image(video4,153, 169, 355, 290);
  } else if (indice == 4) {
    image(video5,153, 190, 355, 250);
  }
}

function mousePressed() {
  // Comprueba si el clic fue dentro del área del botón
  if (mouseX >= botonX && mouseX <= botonX + botonAncho && mouseY >= botonY && mouseY <= botonY + botonAlto) {
    cambiarCanal();
  }
}

function cambiarCanal() {
  if (!tvPrendida) {
    // tele apagada, al prenderla reproduce el video1
    tvPrendida = true;
    reproducirVideo(indiceVideoActual);
  } else {
    // Si la TV está encendida, detén el video actual
    detenerVideo(indiceVideoActual);

    indiceVideoActual = (indiceVideoActual + 1);

    // al pasar al ultimo video, vuelve al principio
    if (indiceVideoActual == 5) {
      tvPrendida = false;
      indiceVideoActual = 0;  // Resetear el índice a 0 para que la TV vuelva al inicio
    }

    // cambia el video mientras la tele esta prendida
    if (tvPrendida) {
      reproducirVideo(indiceVideoActual);
    }
  }
}

function reproducirVideo(indice) {
  // Muestra y reproduce el video correspondiente
  if (indice == 0) {
     video1.loop();
  } else if (indice == 1) {
    video2.loop();
  } else if (indice == 2) {
    video3.loop();
  } else if (indice == 3) {
    video4.loop();
  } else if (indice == 4) {
    video5.loop();
  }
}

function detenerVideo(indice) {
  // Detener el video que corresponda 
  if (indice == 0) {
    video1.stop();
  } else if (indice == 1) {
    video2.stop();
  } else if (indice == 2) {
    video3.stop();
  } else if (indice == 3) {
    video4.stop();
  } else if (indice == 4) {
    video5.stop();
  }
}
