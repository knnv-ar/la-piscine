let fondoTV;
let tvPrendida = false;
let video1, video2, video3, video4, video5;
let indiceVideoActual = 0;
let botonX = 480, botonY = 430, botonAncho = 160, botonAlto = 185;

function preload() {
  fondoTV = loadImage("fondo/tele.jpg");
  // videos
  video1 = createVideo(["videos/Los-Doodlebops.mp4"]);
  video2 = createVideo(["videos/Los-Imaginadores.mp4"]);
  video3 = createVideo(["videos/Sid-el-Niño-Científico.mp4"]);
  video4 = createVideo(["videos/Campamento-Lakebottom.mp4"]);
  video5 = createVideo(["videos/Tio-Grandpa.mp4"]);
}

function setup() {
  //createCanvas(780, 700);
  let canvas = createCanvas(780, 700);
  canvas.parent('div-sketch');

  //tamaño y la posición de los videos
  video1.size(360, 300);
  video1.position(145, 160);
  
  video2.size(360, 300);
  video2.position(148, 160);
  
  video3.size(365, 300);
  video3.position(145, 160);
  
  video4.size(365, 300);
  video4.position(145, 160);
  
  video5.size(365, 300);
  video5.position(145, 160);

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
}

function mostrarVideo(indice) {
  // Detiene todos los videos
  video1.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  video5.hide();

  // se repoducira y mostrara el video que corresponda 
  if (indice == 0) {
    video1.show();
    video1.play();
  } else if (indice == 1) {
    video2.show();
    video2.play();
  } else if (indice == 2) {
    video3.show();
    video3.play();
  } else if (indice == 3) {
    video4.show();
    video4.play();
  } else if (indice == 4) {
    video5.show();
    video5.play();
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
  // Detiene y no muestra todos los videos
  video1.pause();
  video2.pause();
  video3.pause();
  video4.pause();
  video5.pause();

  // Muestra y reproduce el video correspondiente
  if (indice == 0) {
    video1.play();
    video1.show();
  } else if (indice == 1) {
    video2.play();
    video2.show();
  } else if (indice == 2) {
    video3.play();
    video3.show();
  } else if (indice == 3) {
    video4.play();
    video4.show();
  } else if (indice == 4) {
    video5.play();
    video5.show();
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
