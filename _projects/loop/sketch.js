let musica;
let videos = [];
let videoActual;
let videoNumero = 0;

let ojoI = false;
let ojoD = false;

function preload() {
  musica = loadSound("mp3/musica_fondo.mp3");

  videos[0] = createVideo("video/espiral.mp4");
  videos[1] = createVideo("video/noticias.mp4");
  videos[2] = createVideo("video/computadora.mp4");
  videos[3] = createVideo("video/propaganda.mp4");
  videos[4] = createVideo("video/recuerdo.mp4");
  videos[5] = createVideo("video/plata.mp4");
  videos[6] = createVideo("video/mundo.mp4");
  videos[7] = createVideo("video/error.mp4");
  
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  for (let i = 0; i < videos.length; i++) {
    videos[i].hide();
    videos[i].loop();
    videos[i].speed(1.5);
  }
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(6);

  //Cara Izq
  line(256, 59, 185, 78);
  line(185, 78, 145, 117);
  line(145, 117, 120, 195);
  line(120, 195, 130, 280);
  line(130, 280, 132, 351);
  line(132, 351, 175, 413);
  line(175, 413, 235, 442);
  line(235, 442, 256, 446);

  //Der
  line(256, 59, 327, 78);
  line(327, 78, 367, 117);
  line(367, 117, 392, 195);
  line(392, 195, 382, 280);
  line(382, 280, 380, 351);
  line(380, 351, 337, 413);
  line(337, 413, 277, 442);
  line(277, 442, 256, 446);

  //Oreja Izq
  line(120, 208, 92, 212);
  line(92, 212, 86, 253);
  line(86, 253, 106, 316);
  line(106, 316, 127, 323);
  line(122, 234, 102, 237);
  line(102, 237, 115, 294);
  line(115, 294, 128, 298);
  //Der
  line(392, 208, 420, 212);
  line(420, 212, 426, 253);
  line(426, 253, 406, 316);
  line(406, 316, 385, 323);
  line(390, 234, 410, 237);
  line(410, 237, 397, 294);
  line(397, 294, 382, 298);

  //Cachete
  line(131, 279, 171, 338);
  line(171, 338, 175, 411);
  //Dcha
  line(381, 279, 341, 338);
  line(341, 338, 337, 411);

  //Ceja Izq
  push();
  strokeCap(SQUARE);
  line(142, 177, 176, 170);
  pop();
  line(176, 170, 224, 193);
  line(224, 193, 244, 212);
  //Dcha
  push();
  strokeCap(SQUARE);
  line(370, 177, 336, 170);
  pop();
  line(336, 170, 288, 193);
  line(288, 193, 268, 212);

  //Nariz Izq
  line(244, 212, 228, 282);
  push();
  strokeCap(SQUARE);
  line(228, 282, 250, 280);
  pop();
  line(244, 286, 256, 279);
  line(228, 282, 220, 291);
  line(220, 291, 217, 305);
  line(218, 292, 215, 304);
  line(215, 304, 227, 310);
  line(230, 309, 239, 303);
  line(250, 308, 256, 311);
  //Dcha
  line(268, 212, 284, 282);
  push();
  strokeCap(SQUARE);
  line(284, 282, 262, 280);
  pop();
  line(268, 286, 256, 279);
  line(284, 282, 292, 291);
  line(292, 291, 295, 305);
  line(294, 292, 297, 304);
  line(297, 304, 285, 310);
  line(282, 307, 272, 303);
  line(262, 308, 256, 311);

  //Ojo Izq
  if (ojoI) {
    line(173, 209, 199, 209);
    line(199, 209, 219, 227);
    line(173, 209, 156, 220);
    line(156, 220, 144, 238);
    line(144, 238, 178, 253);
    line(178, 253, 200, 246);
    line(200, 246, 219, 227);
    line(173, 209, 148, 239);
  } else {
    line(220, 227, 197, 247);
    line(197, 247, 173, 255);
    line(173, 255, 142, 239);
    line(142, 239, 152, 221);
  }
  //Dcho
  if (ojoD) {
    line(339, 209, 313, 209);
    line(313, 209, 293, 227);
    line(339, 209, 356, 220);
    line(356, 220, 368, 238);
    line(368, 238, 334, 253);
    line(334, 253, 312, 246);
    line(312, 246, 293, 227);
    line(339, 209, 364, 239);
  } else {
    line(293, 227, 315, 247);
    line(315, 247, 339, 255);
    line(339, 255, 370, 239);
    line(370, 239, 360, 221);
  }

  //Ojera Izq
  line(220, 238, 202, 265);
  line(202, 265, 176, 283);
  //Dcha
  line(292, 238, 310, 265);
  line(310, 265, 336, 283);

  //Boca Izq
  line(256, 353, 243, 348);
  line(243, 348, 212, 368);
  line(243, 348, 215, 370);
  line(212, 370, 251, 384);
  line(252, 385, 257, 386);
  //Dcha
  line(256, 353, 269, 348);
  line(269, 348, 300, 368);
  line(269, 348, 297, 370);
  line(300, 370, 261, 384);
  line(260, 385, 255, 386);

  if (ojoD && ojoI) {
    background(255);
    stroke(0);

    line(256, 59, 185, 78);
    line(185, 78, 145, 117);
    line(145, 117, 120, 195);
    line(120, 195, 130, 280);
    line(130, 280, 132, 351);
    line(132, 351, 175, 413);
    line(175, 413, 235, 442);
    line(235, 442, 256, 446);
    line(256, 59, 327, 78);
    line(327, 78, 367, 117);
    line(367, 117, 392, 195);
    line(392, 195, 382, 280);
    line(382, 280, 380, 351);
    line(380, 351, 337, 413);
    line(337, 413, 277, 442);
    line(277, 442, 256, 446);
    line(120, 208, 92, 212);
    line(92, 212, 86, 253);
    line(86, 253, 106, 316);
    line(106, 316, 127, 323);
    line(122, 234, 102, 237);
    line(102, 237, 115, 294);
    line(115, 294, 128, 298);
    line(392, 208, 420, 212);
    line(420, 212, 426, 253);
    line(426, 253, 406, 316);
    line(406, 316, 385, 323);
    line(390, 234, 410, 237);
    line(410, 237, 397, 294);
    line(397, 294, 382, 298);
    line(131, 279, 171, 338);
    line(171, 338, 175, 411);
    line(381, 279, 341, 338);
    line(341, 338, 337, 411);
    push();
    strokeCap(SQUARE);
    line(142, 177, 176, 170);
    pop();
    line(176, 170, 224, 193);
    line(224, 193, 244, 212);
    push();
    strokeCap(SQUARE);
    line(370, 177, 336, 170);
    pop();
    line(336, 170, 288, 193);
    line(288, 193, 268, 212);
    line(244, 212, 228, 282);
    push();
    strokeCap(SQUARE);
    line(228, 282, 250, 280);
    pop();
    line(244, 286, 256, 279);
    line(228, 282, 220, 291);
    line(220, 291, 217, 305);
    line(218, 292, 215, 304);
    line(215, 304, 227, 310);
    line(230, 309, 239, 303);
    line(250, 308, 256, 311);
    line(268, 212, 284, 282);
    push();
    strokeCap(SQUARE);
    line(284, 282, 262, 280);
    pop();
    line(268, 286, 256, 279);
    line(284, 282, 292, 291);
    line(292, 291, 295, 305);
    line(294, 292, 297, 304);
    line(297, 304, 285, 310);
    line(282, 307, 272, 303);
    line(262, 308, 256, 311);
    if (ojoI) {
      line(173, 209, 199, 209);
      line(199, 209, 219, 227);
      line(173, 209, 156, 220);
      line(156, 220, 144, 238);
      line(144, 238, 178, 253);
      line(178, 253, 200, 246);
      line(200, 246, 219, 227);
      line(173, 209, 148, 239);
    } else {
      line(220, 227, 197, 247);
      line(197, 247, 173, 255);
      line(173, 255, 142, 239);
      line(142, 239, 152, 221);
    }
    if (ojoD) {
      line(339, 209, 313, 209);
      line(313, 209, 293, 227);
      line(339, 209, 356, 220);
      line(356, 220, 368, 238);
      line(368, 238, 334, 253);
      line(334, 253, 312, 246);
      line(312, 246, 293, 227);
      line(339, 209, 364, 239);
    } else {
      line(293, 227, 315, 247);
      line(315, 247, 339, 255);
      line(339, 255, 370, 239);
      line(370, 239, 360, 221);
    }
    line(220, 238, 202, 265);
    line(202, 265, 176, 283);
    line(292, 238, 310, 265);
    line(310, 265, 336, 283);
    line(256, 353, 243, 348);
    line(243, 348, 212, 368);
    line(243, 348, 215, 370);
    line(212, 370, 251, 384);
    line(252, 385, 257, 386);
    line(256, 353, 269, 348);
    line(269, 348, 300, 368);
    line(269, 348, 297, 370);
    line(300, 370, 261, 384);
    line(260, 385, 255, 386);

    videoActual = videos[videoNumero];
    videoActual.show();
    image(videoActual, 0, 0, 512, 512);
    tint(255, 110);

    if (frameCount % 90 === 0) {
      cambiarVideo();
    } else {
      for (let i = 0; i < videos.length; i++) {
        videos[i].hide();
      }
    }
  }
  
  if (ojoD && ojoI) {
    if (!musica.isPlaying()) {
      musica.loop();
      musica.setVolume(0.3);
    }
  } else {
    if (musica.isPlaying()) {
      musica.stop();
    }
    
  }
}

function cambiarVideo() {
  videoActual.hide();

  videoNumero = (videoNumero + 1) % videos.length;

  videoActual = videos[videoNumero];
  videoActual.show();
}

function mousePressed() {
  if (mouseX > 148 && mouseX < 219 && mouseY > 209 && mouseY < 260) {
    ojoI = !ojoI;
  }
  if (mouseX > 293 && mouseX < 364 && mouseY > 209 && mouseY < 260) {
    ojoD = !ojoD;
  }
}
