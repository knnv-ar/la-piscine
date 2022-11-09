//MADE BY LEON FLAX - "TURN ON THE BRIGHT LIGHTS" - TP1 AM1 TM - UNA - ATAM - 2022

// CLICK IZQUIERDO PARA INVERTIR COLORES //
// --- ESCAPE PARA VOLVER AL INICIO --- //

let rAngle = 0; //Angulo inicial
let rAngle2 = 0; //Angulo inicial
let rSpeed = 3; // Velocidad exterior
let rSpeed2 = 8.5; // Velocidad interior
let contadorT = 0; // Contador del texto

let for1 = 225; // Color del primer for
let for2 = 0; // Color del segundo for
let bkColor = 0; // Color de fondo
let cityW = 255; // Color trazo de ciudad

let startClick; // Pantalla de inicio
let txtColor = 100; // Parpadeo texto de inicio
let txtColorCount = 0; // Parpadeo texto de inicio
let circ = 1000; // Tamano inicial de circulo

function mouseClicked() {
  if(mouseButton == LEFT) {
    startClick++;
  }
  if(mouseButton == LEFT && startClick == 2) {
    for1 = 0;
    for2 = 255;
    bkColor = 255;
    cityW = 35;
  } else if(mouseButton == LEFT && startClick > 2) {
    startClick = 1;
    for1 = 255;
    for2 = 0;
    bkColor = 0;
    cityW = 255;
  }
  if(mouseButton == RIGHT) {
    startClick = 0;
    circ = 1000;
  }
}
function keyTyped() {
  // Velocidades de giro
  if(key === "1") {
    rSpeed = 1;
    rSpeed2 = 6.5;
  } else if(key === "2") {
    rSpeed = 2;
    rSpeed2 = 7.5;
  } else if(key === "3") {
    rSpeed = 3;
    rSpeed2 = 8.5;
  } else if(key === "4") {
    rSpeed = 4;
    rSpeed2 = 9.5;
  } else if(key === "5") {
    rSpeed = 5;
    rSpeed2 = 10.5;
  } else if(key === "6") {
    rSpeed = 6;
    rSpeed2 = 11.5;
  } else if(key === "7") {
    rSpeed = 7;
    rSpeed2 = 12.5;
  } else if(key === "8") {
    rSpeed = 8;
    rSpeed2 = 13.5;
  } else if(key === "9") {
    rSpeed = 9;
    rSpeed2 = 14.5;
  } else if(key === "0" || keyCode === 32) {
    // 0 o Espacio para parar
    rSpeed = 0;
    rSpeed2 = 0;
  }
}

function keyPressed() {
  if(keyCode === ESCAPE) {
    // Escape para volver a inicio
    startClick = 0;
  }
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  frameRate(60);
  startClick = 0;
}

function draw() {
  background(220);

  circ = map(mouseY, 500, 225, 1000, 200);

  push();
  noStroke();
  fill(bkColor);
  rect(0, 0, width, height);
  pop();

  push();
  translate(width / 2, height / 2);
  noStroke();
  rectMode(CENTER);
  fill(for1);

  rotate(rAngle);
  rAngle += rSpeed;

  for(let i = 0; i <= 180; i += 45) {
    rotate(i);
    rect(0, 0, width * 1.5, 40);
  }

  pop();

  push();
  translate(width / 2, height / 2);
  noStroke();
  rectMode(CENTER);

  rotate(rAngle * -1);

  for(let i = 0; i <= 180; i += 45) {
    rotate(i);
    fill(for2);
    rect(0, 0, width * 1.5, 40);
  }

  push();

  rotate(rAngle2 * 1);
  rAngle2 += rSpeed2;

  for(let i = 0; i <= 360; i += 45) {
    rotate(i);
    stroke(for1);
    strokeWeight(3);
    line(0, 0, 35, 35);
  }

  rotate(rAngle2 * -1);

  for(let i = 0; i <= 360; i += 45) {
    rotate(i);
    stroke(for2);
    strokeWeight(3);
    line(0, 0, 35, 35);
  }

  pop();

  pop();

  push(); // COMIENZA CIUDAD INFERIOR //////////
  noFill();
  stroke(cityW);
  strokeWeight(2);
  scale(0.9);
  translate(20, 80);

  rotate(sin(rAngle)); // Rotacion ciudad inferior

  beginShape(); // atras izquierda
  vertex(43, 388);
  vertex(52, 388);
  vertex(51, 300);
  vertex(66, 293);
  vertex(67, 275);
  vertex(86, 284);
  vertex(91, 314);
  vertex(91, 355);
  vertex(103, 355);
  vertex(103, 367);
  vertex(109, 367);
  vertex(109, height + 50);
  vertex(43, height + 50);
  endShape(CLOSE);

  triangle(75, 279, 76, 217, 77, 280);

  beginShape(); // atras izquierda
  vertex(109, height + 50);
  vertex(109, 330);
  vertex(124, 330);
  vertex(124, 315);
  vertex(145, 315);
  vertex(145, 413);
  vertex(155, 413);
  vertex(155, height + 50);
  endShape(CLOSE);

  push();
  strokeWeight(1);

  for(let i = 315; i <= 440; i += 7.85) {
    if(i < 328) {
      rect(124, i, 145 - 124, 4);
    } else if(i < 415) {
      rect(109, i, 145 - 109, 4);
    } else {
      rect(109, i, 155 - 109, 4);
    }
  }

  pop();

  beginShape(); // atras centro-izquierda
  vertex(155, height + 50);
  vertex(155, 256);
  vertex(181, 256);
  vertex(181, 270);
  vertex(196, 270);
  vertex(196, 367);
  vertex(202, 367);
  vertex(202, height + 50);
  endShape(CLOSE);

  push();
  stroke(cityW);
  strokeWeight(3);
  line(155, height + 50, 155, 256);
  line(181, height + 50, 181, 256);
  strokeWeight(2.5);
  line(196, height + 50, 196, 270);
  pop();

  beginShape(); // atras centro
  vertex(202, height + 50);
  vertex(202, 283);
  vertex(205, 283);
  vertex(205, 299);
  vertex(209, 299);
  vertex(209, 291);
  vertex(245, 291);
  vertex(245, 299);
  vertex(249, 299);
  vertex(249, 282);
  vertex(252, 282);
  vertex(252, height + 50);
  endShape(CLOSE);

  triangle(226, 291, 228, 213, 229, 291);

  push();

  strokeWeight(1);

  for(let i = 304; i <= 440; i += 10) {
    rect(207, i, 40, 6);
  }

  pop();

  beginShape();
  vertex(252, height + 50);
  vertex(252, 404);
  vertex(262, 404);
  vertex(262, 268);
  vertex(277, 268);
  vertex(277, 285);
  vertex(283, 285);
  vertex(283, 318);
  vertex(286, 318);
  vertex(286, 392);
  endShape();

  beginShape();
  vertex(286, 392);
  vertex(286, 303);
  vertex(293, 303);
  vertex(293, 275);
  vertex(299, 275);
  vertex(299, 264);
  vertex(324, 264);
  vertex(324, 275);
  vertex(328, 275);
  vertex(328, 303);
  vertex(338, 304);
  vertex(338, 317);
  vertex(349, 317);
  vertex(349, 372);
  vertex(355, 372);
  vertex(355, height + 50);
  endShape();

  push();

  strokeWeight(0.5);

  for(let i = 268; i < height + 20; i += 4.7) {
    if(i < 276) {
      for(let x = 303; x < 322; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 304 && i > 276) {
      for(let x = 296.5; x < 323; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 315 && i > 304) {
      for(let x = 289; x < 336; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 375 && i > 315) {
      for(let x = 289; x < 345; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 390 && i > 375) {
      for(let x = 289; x < 354; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i > 380 && i < height) {
      rect(349, i, 3, 3);
    }
  }

  pop();

  push();

  beginShape(); // atras derecha (raro)
  vertex(418, 392);
  vertex(418, 296);
  vertex(427, 296);
  vertex(427, 271);
  vertex(434, 271);
  vertex(434, 260);
  vertex(436, 260);
  vertex(441, 247);
  vertex(441, 228);
  vertex(444, 226);
  vertex(441, 224);
  vertex(444, 222);
  vertex(440, 220);
  vertex(448, 215);
  vertex(454, 220);
  vertex(452, 222);
  vertex(453, 224);
  vertex(451, 226);
  vertex(453, 226);
  vertex(452, 244);
  vertex(458, 259);
  vertex(461, 259);
  vertex(461, 272);
  vertex(467, 272);
  vertex(467, 298);
  vertex(477, 298);
  vertex(477, height);
  //vertex(486, 363);
  //vertex(486, height + 50);
  endShape();

  triangle(447, 216, 447, 141, 448, 216);

  push();

  strokeWeight(1);

  for(let i = 276; i < height; i += 9) {
    if(i < 300) {
      push();
      strokeWeight(0.4);
      for(let x = 276; x < 300; x += 6.5) {
        rect(432, x, 30, 3);
      }
      pop();
    } else if(i < 390 && i >= 300) {
      rect(424, i, 470 - 424, 4);
    } else if(i >= 390 && i < height * 1.5) {
      rect(452, i, 470 - 452, 4);
    }
  }

  pop();

  pop();

  push();
  noStroke();

  rect(40, 417, 54, height); // adelante izquierda

  push();
  strokeWeight(1);

  for(let i = 431; i < height; i += 10) {
    for(x = 44; x < 89; x += 13) {
      rect(x, i, 8, 5);
    }
  }
  pop();
  pop();

  push(); // adelante derecha

  beginShape();
  vertex(370, 427);
  vertex(370, 348);
  vertex(418, 348);
  endShape();

  rect(355, 428, 403 - 355, height + 50);

  rect(404, 392, 452 - 404, height + 50);

  push();
  strokeWeight(1);
  for(let i = 397; i < 506; i += 10) {
    for(let x = 410; x < 444; x += 10) {
      rect(x, i, 5, 5);
    }
  }

  pop();

  pop();

  push(); // adelante centro

  rect(279, 393, 346 - 279, height + 50);

  push();
  strokeWeight(1);
  for(let i = 393; i <= height; i += 10) {
    rect(279, i, 346 - 279, 6);
  }
  pop();
  pop();

  pop(); // FINALIZA CIUDAD INFERIOR

  push(); // COMIENZA CIUDAD SUPERIOR ///////////////
  noFill();
  stroke(cityW);
  strokeWeight(2);
  scale(0.8);
  translate(width / 0.88, height / 1.3);
  rotate(180);

  rotate(sin(rAngle) * -2); // Rotacion ciudad superior

  beginShape(); // atras izquierda
  vertex(43, 388);
  vertex(52, 388);
  vertex(51, 300);
  vertex(66, 293);
  vertex(67, 275);
  vertex(86, 284);
  vertex(91, 314);
  vertex(91, 355);
  vertex(103, 355);
  vertex(103, 367);
  vertex(109, 367);
  vertex(109, height + 50);
  vertex(43, height + 50);
  endShape(CLOSE);

  triangle(75, 279, 76, 217, 77, 280);

  beginShape(); // atras izquierda
  vertex(109, height + 50);
  vertex(109, 330);
  vertex(124, 330);
  vertex(124, 315);
  vertex(145, 315);
  vertex(145, 413);
  vertex(155, 413);
  vertex(155, height + 50);
  endShape(CLOSE);

  push();
  strokeWeight(1);

  for(let i = 315; i <= 440; i += 8) {
    if(i < 328) {
      rect(124, i, 145 - 124, 4);
    } else {
      rect(109, i, 145 - 109, 4);
    }
  }

  pop();

  beginShape(); // atras centro-izquierda
  vertex(155, height + 50);
  vertex(155, 256);
  vertex(181, 256);
  vertex(181, 270);
  vertex(196, 270);
  vertex(196, 367);
  vertex(202, 367);
  vertex(202, height + 50);
  endShape(CLOSE);

  push();
  stroke(cityW);
  strokeWeight(3);
  line(155, height + 50, 155, 256);
  line(181, height + 50, 181, 256);
  strokeWeight(2.5);
  line(196, height + 50, 196, 270);
  pop();

  beginShape(); // atras centro
  vertex(202, height + 50);
  vertex(202, 283);
  vertex(205, 283);
  vertex(205, 299);
  vertex(209, 299);
  vertex(209, 291);
  vertex(245, 291);
  vertex(245, 299);
  vertex(249, 299);
  vertex(249, 282);
  vertex(252, 282);
  vertex(252, height + 50);
  endShape(CLOSE);

  triangle(226, 291, 228, 213, 229, 291);

  push();

  strokeWeight(1);

  for(let i = 304; i <= 440; i += 10) {
    rect(207, i, 40, 6);
  }

  pop();

  beginShape();
  vertex(252, height + 50);
  vertex(252, 404);
  vertex(262, 404);
  vertex(262, 268);
  vertex(277, 268);
  vertex(277, 285);
  vertex(283, 285);
  vertex(283, 318);
  vertex(286, 318);
  vertex(286, 392);
  endShape();

  beginShape();
  vertex(286, 392);
  vertex(286, 303);
  vertex(293, 303);
  vertex(293, 275);
  vertex(299, 275);
  vertex(299, 264);
  vertex(324, 264);
  vertex(324, 275);
  vertex(328, 275);
  vertex(328, 303);
  vertex(338, 304);
  vertex(338, 317);
  vertex(349, 317);
  vertex(349, 372);
  vertex(355, 372);
  vertex(355, height + 50);
  endShape();

  push();

  strokeWeight(0.5);

  for(let i = 268; i < height + 20; i += 4.7) {
    if(i < 276) {
      for(let x = 303; x < 322; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 304 && i > 276) {
      for(let x = 296.5; x < 323; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 315 && i > 304) {
      for(let x = 289; x < 336; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 375 && i > 315) {
      for(let x = 289; x < 345; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i < 390 && i > 375) {
      for(let x = 289; x < 354; x += 5) {
        rect(x, i, 3, 3);
      }
    } else if(i > 380 && i < height) {
      rect(349, i, 3, 3);
    }
  }

  pop();

  push();

  beginShape(); // atras derecha (raro)
  vertex(418, 392);
  vertex(418, 296);
  vertex(427, 296);
  vertex(427, 271);
  vertex(434, 271);
  vertex(434, 260);
  vertex(436, 260);
  vertex(441, 247);
  vertex(441, 228);
  vertex(444, 226);
  vertex(441, 224);
  vertex(444, 222);
  vertex(440, 220);
  vertex(448, 215);
  vertex(454, 220);
  vertex(452, 222);
  vertex(453, 224);
  vertex(451, 226);
  vertex(453, 226);
  vertex(452, 244);
  vertex(458, 259);
  vertex(461, 259);
  vertex(461, 272);
  vertex(467, 272);
  vertex(467, 298);
  vertex(477, 298);
  vertex(477, height);
  //vertex(486, 363);
  //vertex(486, height + 50);
  endShape();

  triangle(447, 216, 447, 141, 448, 216);

  push();

  strokeWeight(1);

  for(let i = 276; i < height; i += 9) {
    if(i < 300) {
      push();
      strokeWeight(0.4);
      for(let x = 276; x < 300; x += 6.5) {
        rect(432, x, 30, 3);
      }
      pop();
    } else if(i < 390 && i >= 300) {
      rect(424, i, 470 - 424, 4);
    } else if(i >= 390 && i < height * 1.5) {
      rect(452, i, 470 - 452, 4);
    }
  }

  pop();

  pop();

  push();
  noStroke();

  rect(40, 417, 54, height); // adelante izquierda

  push();
  strokeWeight(1);

  for(let i = 431; i < height; i += 10) {
    for(x = 44; x < 89; x += 13) {
      rect(x, i, 8, 5);
    }
  }
  pop();
  pop();

  push(); // adelante derecha

  beginShape();
  vertex(370, 427);
  vertex(370, 348);
  vertex(418, 348);
  endShape();

  rect(355, 428, 403 - 355, height + 50);

  rect(404, 392, 452 - 404, height + 50);

  push();
  strokeWeight(1);
  for(let i = 397; i < 506; i += 10) {
    for(let x = 410; x < 444; x += 10) {
      rect(x, i, 5, 5);
    }
  }

  pop();

  pop();

  push(); // adelante centro

  rect(279, 393, 346 - 279, height + 50);

  push();
  strokeWeight(1);
  for(let i = 393; i <= height; i += 10) {
    rect(279, i, 346 - 279, 6);
  }
  pop();
  pop();

  pop(); // FINALIZA CIUDAD SUPERIOR

  push(); // Texto
  textSize(28);
  fill(220);
  stroke(0);
  strokeWeight(2);

  contadorT++; // Contador Texto

  if(contadorT <= 40) {
    text("turn", width / 3.5, 470);
  } else if(contadorT <= 90) {
    text("on", width / 3, 470);
  } else if(contadorT <= 110) {
    text("the", width / 2.5, 470);
  } else if(contadorT <= 180) {
    push();

    strokeWeight(0.5);
    strokeCap(PROJECT);
    stroke(cityW);

    for(let x = 251; x < 336; x += 5) {
      // Lineas en "bright"
      if(x < 290) {
        line(x, 426, x + 2, 444);
        line(x, 497, x + 2, 478);
      } else if(x > 294) {
        line(x, 426, x - 1, 444);
        line(x, 497, x - 1, 478);
      } else if(x == 291) {
        line(x, 426, x, 444);
        line(x, 497, x, 478);
      }
    }
    pop();

    fill(cityW);
    noStroke();
    text("bright", width / 2, 470);
  } else if(contadorT <= 240) {
    strokeWeight(2);
    text("lights", width / 1.5, 470);
  } else if(contadorT >= 240) {
    contadorT = 0;
  }

  pop();

  txtColorCount++;

  if(txtColorCount == 0 || txtColorCount < 30) {
    // parpadeo texto inicio
    txtColor = 100;
  } else if(
    txtColorCount == 30 ||
    (txtColorCount > 30 && txtColorCount < 40)
  ) {
    txtColor = 255;
  } else if(txtColorCount > 40) {
    txtColorCount = 0;
  }

  if(startClick === 0) {
    // Pantalla inicial
    push();
    fill(0);
    noStroke();

    push();
    fill(250);
    rect(0, 0, width, height);
    pop();

    push();
    translate(width / 2, height / 2);
    ellipse(0, 0, circ, circ); // Circulo pantalla inicial - diametro letiable
    pop();

    fill(txtColor);
    textAlign(CENTER);
    textSize(30);
    text("click to start", width / 2, height / 2 + 8);
    pop();
  }
}

document.oncontextmenu = function () {
  return false;
};
