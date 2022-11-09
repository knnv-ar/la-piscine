//Con las letras Z, X, C y V y con los clicks del raton tenes algunas interacciones interesantes para hacer mientras la obra transcurre.
var fondo = 30;
var rectas1 = 200;
var cuadrados1 = 160;
var cuadrados2 = 70;
var cuadrados3 = 200;
var cuadrados4 = 255;

document.oncontextmenu = function () {
  return false;
};
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  //Cuadrados del fondo
  for (var a = 0; a < 513; a += 16) {
    fill(fondo);
    rect(a, 0, 32, 32);
    rect(a, 16, 32, 32);
    rect(a, 32, 32, 32);
    rect(a, 48, 32, 32);
    rect(a, 64, 32, 32);
    rect(a, 80, 32, 32);
    rect(a, 96, 32, 32);
    rect(a, 112, 32, 32);
    rect(a, 128, 32, 32);
    rect(a, 144, 32, 32);
    rect(a, 160, 32, 32);
    rect(a, 176, 32, 32);
    rect(a, 192, 32, 32);
    rect(a, 208, 32, 32);
    rect(a, 224, 32, 32);
    rect(a, 240, 32, 32);
    rect(a, 256, 32, 32);
    rect(a, 272, 32, 32);
    rect(a, 288, 32, 32);
    rect(a, 304, 32, 32);
    rect(a, 320, 32, 32);
    rect(a, 336, 32, 32);
    rect(a, 352, 32, 32);
    rect(a, 368, 32, 32);
    rect(a, 384, 32, 32);
    rect(a, 400, 32, 32);
    rect(a, 416, 32, 32);
    rect(a, 432, 32, 32);
    rect(a, 448, 32, 32);
    rect(a, 464, 32, 32);
    rect(a, 480, 32, 32);
    rect(a, 496, 32, 32);
  }
  //todos los frameCount son los cuadraditos mas pequeños que aparecen por delante del fondo
  if (frameCount < 90) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 180, 8);
    }
  }
  if (frameCount < 110) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 276, 8);
    }
  }
  if (frameCount < 122) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 52, 8);
    }
  }

  if (frameCount < 132) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 132, 8);
    }
  }
  if (frameCount < 156) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 436, 8);
    }
  }
  if (frameCount < 159) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 500, 8);
    }
  }
  if (frameCount < 153) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 340, 8);
    }
  }
  if (frameCount < 155) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 68, 8);
    }
  }
  if (frameCount < 160) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 212, 8);
    }
  }
  if (frameCount < 165) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 372, 8);
    }
  }
  if (frameCount < 167) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 308, 8);
    }
  }
  if (frameCount < 170) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 324, 8);
    }
  }
  if (frameCount < 171) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 148, 8);
    }
  }
  if (frameCount < 172) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 260, 8);
    }
  }
  if (frameCount < 197) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 468, 8);
    }
  }
  if (frameCount < 210) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 196, 8);
    }
  }
  if (frameCount < 235) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 420, 8);
    }
  }
  if (frameCount < 265) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 20, 8);
    }
  }
  if (frameCount < 266) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 36, 8);
    }
  }
  if (frameCount < 273) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 452, 8);
    }
  }
  if (frameCount < 280) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 292, 8);
    }
  }
  if (frameCount < 281) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 244, 8);
    }
  }
  if (frameCount < 282) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 228, 8);
    }
  }
  if (frameCount < 283) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 388, 8);
    }
  }
  if (frameCount < 284) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 100, 8);
    }
  }
  if (frameCount < 310) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 116, 8);
    }
  }
  if (frameCount < 311) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 4, 8);
    }
  }
  if (frameCount < 312) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 484, 8);
    }
  }
  if (frameCount < 313) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 84, 8);
    }
  }
  if (frameCount < 314) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 356, 8);
    }
  }
  if (frameCount < 315) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 356, 8);
    }
  }
  if (frameCount < 316) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 404, 8);
    }
  }
  if (frameCount < 340) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados2);
      rect(x, 164, 8);
    }
  }

  if (frameCount < 460) {
    for (var x = 232; x < 280; x += 8) {
      fill(cuadrados1);
      rect(x, 186, 8, 8);
      rect(x, 202, 8, 8);
      rect(x, 218, 8, 8);
      rect(x, 236, 8, 8);
      rect(x, 252, 8, 8);
    }
  }
  if (frameCount > 1050) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 164, 8);
    }
  }
  if (frameCount > 1160) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 404, 8);
    }
  }
  if (frameCount > 1280) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 356, 8);
    }
  }
  if (frameCount > 1330) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 356, 8);
    }
  }
  if (frameCount > 1400) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 84, 8);
    }
  }
  if (frameCount > 1420) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 484, 8);
    }
  }
  if (frameCount > 1422) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 4, 8);
    }
  }
  if (frameCount > 1443) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 116, 8);
    }
  }
  if (frameCount > 1444) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 100, 8);
    }
  }
  if (frameCount > 1445) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 388, 8);
    }
  }
  if (frameCount > 1600) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 228, 8);
    }
  }
  if (frameCount > 1640) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 244, 8);
    }
  }
  if (frameCount > 1650) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 292, 8);
    }
  }
  if (frameCount > 1651) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 452, 8);
    }
  }
  if (frameCount > 1652) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 36, 8);
    }
  }
  if (frameCount > 1653) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 20, 8);
    }
  }
  if (frameCount > 1654) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 420, 8);
    }
  }
  if (frameCount > 1655) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 196, 8);
    }
  }
  if (frameCount > 1656) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 468, 8);
    }
  }
  if (frameCount > 1657) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 260, 8);
    }
  }
  if (frameCount > 1658) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 148, 8);
    }
  }
  if (frameCount > 1780) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 324, 8);
    }
  }
  if (frameCount > 1781) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 308, 8);
    }
  }
  if (frameCount > 1782) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 372, 8);
    }
  }
  if (frameCount > 1783) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 212, 8);
    }
  }
  if (frameCount > 1784) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 68, 8);
    }
  }
  if (frameCount > 1785) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 340, 8);
    }
  }
  if (frameCount > 1786) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 500, 8);
    }
  }
  if (frameCount > 1787) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 436, 8);
    }
  }
  if (frameCount > 1788) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 132, 8);
    }
  }
  if (frameCount > 1789) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 52, 8);
    }
  }
  if (frameCount > 1790) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 276, 8);
    }
  }
  if (frameCount > 1880) {
    for (x = 4; x < 513; x += 16) {
      fill(cuadrados3);
      rect(x, 180, 8);
    }
  }
  if (frameCount > 1970) {
    for (var x = 232; x < 280; x += 8) {
      fill(cuadrados4);
      rect(x, 186, 8, 8);
      rect(x, 202, 8, 8);
      rect(x, 218, 8, 8);
      rect(x, 236, 8, 8);
      rect(x, 252, 8, 8);
    }
  }
  if (frameCount > 2340) {
    frameCount = 0;
  }
  //cuadrados del fondo cambian a blanco
  if (mouseIsPressed) {
    for (var z = 0; z < 513; z += 16) {
      fill(rectas1);
      rect(z, 0, 32, 32);
      rect(z, 16, 32, 32);
      rect(z, 32, 32, 32);
      rect(z, 48, 32, 32);
      rect(z, 64, 32, 32);
      rect(z, 80, 32, 32);
      rect(z, 96, 32, 32);
      rect(z, 112, 32, 32);
      rect(z, 128, 32, 32);
      rect(z, 144, 32, 32);
      rect(z, 160, 32, 32);
      rect(z, 176, 32, 32);
      rect(z, 192, 32, 32);
      rect(z, 208, 32, 32);
      rect(z, 224, 32, 32);
      rect(z, 240, 32, 32);
      rect(z, 256, 32, 32);
      rect(z, 272, 32, 32);
      rect(z, 288, 32, 32);
      rect(z, 304, 32, 32);
      rect(z, 320, 32, 32);
      rect(z, 336, 32, 32);
      rect(z, 352, 32, 32);
      rect(z, 368, 32, 32);
      rect(z, 384, 32, 32);
      rect(z, 400, 32, 32);
      rect(z, 416, 32, 32);
      rect(z, 432, 32, 32);
      rect(z, 448, 32, 32);
      rect(z, 464, 32, 32);
      rect(z, 480, 32, 32);
      rect(z, 496, 32, 32);
    }
  }

  //escalera formada por lineas cada vez mas largas
  if (keyIsPressed && key == "z") {
    for (var p = 0; p < 513; p += 16) {
      fill(rectas1);
      rect(-128, p, p, p);
    }
  }
  //escalera invertida
  if (keyIsPressed && key == "x") {
    for (var q = 0; q < 513; q += 16) {
      fill(rectas1);
      rect(q, -128, q, q);
    }
  }
  //varios cuadrados de mayor y menor amplitud con cierto margen entre si
  if (keyIsPressed && key == "v") {
    fill(cuadrados1);
    rect(0, 0, 512, 32);
    rect(0, 480, 512, 32);
    rect(0, 32, 32, 448);
    rect(480, 32, 32, 448);
    rect(64, 48, 384, 32);
    rect(64, 432, 384, 32);
    rect(64, 80, 32, 352);
    rect(416, 80, 32, 352);
    rect(128, 112, 256, 32);
    rect(128, 368, 256, 32);
    rect(128, 144, 32, 224);
    rect(352, 144, 32, 224);
    rect(192, 176, 128, 32);
    rect(192, 304, 128, 32);
    rect(192, 208, 32, 96);
    rect(288, 208, 32, 96);
  }
  //mini cuadrados en forma de X
  if (keyIsPressed && key == "c") {
    fill(cuadrados1);
    rect(8, 8, 16, 16);
    rect(40, 40, 16, 16);
    rect(72, 72, 16, 16);
    rect(104, 104, 16, 16);
    rect(136, 136, 16, 16);
    rect(168, 168, 16, 16);
    rect(200, 200, 16, 16);
    rect(232, 232, 16, 16);
    rect(248, 248, 16, 16);
    rect(264, 264, 16, 16);
    rect(296, 296, 16, 16);
    rect(328, 328, 16, 16);
    rect(360, 360, 16, 16);
    rect(392, 392, 16, 16);
    rect(424, 424, 16, 16);
    rect(456, 456, 16, 16);
    rect(488, 488, 16);
    rect(8, 488, 16);
    rect(40, 456, 16);
    rect(72, 424, 16);
    rect(104, 392, 16);
    rect(136, 360, 16);
    rect(168, 328, 16);
    rect(200, 296, 16);
    rect(232, 264, 16);
    rect(264, 232, 16);
    rect(296, 200, 16);
    rect(328, 168, 16);
    rect(360, 136, 16);
    rect(392, 104, 16);
    rect(424, 72, 16);
    rect(456, 40, 16);
    rect(488, 8, 16);
  }
}
