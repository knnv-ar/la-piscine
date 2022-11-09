const escenas = {
    TITULOS: 0,
    MAIN: 1,
    SEGURO: 2,
    MUSEO: 3,
    GALERIA: 4,
    VIVA: 5,
    DUCHAMP: 6,
  };
  
  let escena = escenas.TITULOS;
  let mAn;
  let mAl;
  const cBack = 30;
  const cStroke = 180;
  let translatex;
  let translatey;
  let escala;
  let ranX;
  let ranY;
  let ran;
  
  //Para prenderTele()
  let lineInc = 9;
  let cRect = 0;
  
  //Para museo()
  let xMano = 1300;
  let yMano = 1200;
  
  
  //Para Punio
  let switchViva = false;
  
  //--------------------------------------------------------------
  
  function setup() {
    let canvas = createCanvas(512, 512);
    canvas.parent('div-sketch');
    //translate(-90, -90);
    frameRate(60);
    noSmooth();
    mAn = width / 2;
    mAl = height / 2;
  
    //Para prenderTele();
    x1 = mAn;
    x2 = mAn;
    line1y1 = mAl;
    line1y2 = mAl;
    line2y1 = mAl;
    line2y2 = mAl;
  
    //Para museo()
  }
  
  //--------------------------------------------------------------
  
  function draw() {
    if (escena == escenas.TITULOS) {
      titulos();
    } else if (escena === escenas.MAIN) {
      main();
    } else if (escena === escenas.SEGURO) {
      seguro();
    } else if (escena === escenas.MUSEO) {
      museo();
    } else if (escena === escenas.GALERIA) {
      galeria();
    } else if (escena === escenas.VIVA) {
      viva();
    } else if (escena === escenas.DUCHAMP) {
      duchamp();
    }
  }
  
  //Escenas-------------------------------------------------------
  //TITULOS
  function titulos() {
    background(cBack);
    fill(cStroke);
    ran = 1;
    ranX = random(-ran, ran);
    ranY = random(-ran, ran);
    stroke(180);
    strokeWeight(1);
    textSize(60);
    text(" BERRINCHE  \n", 20 , 230);
    text("               #0.3 ", 20 , 290);
    textSize(30);
    text(" [ENTER]", 30, 380);
    textSize(20);
    text("by lecs", 420 + ranX , 480 + ranY);
    if (line1y1 > 0) {
      prenderTele();
    }
  }
  //MAIN
  function main() {
    background(cBack);
    stroke(cStroke);
    push();
    translate(-20, -85);
    scale(1.2);
    mano(235, 240);
    translate(20, 85);
    scale(1 / 1.2);
    pop();
    fill(cStroke);
    strokeWeight(1);
    textSize(55);
    text("¿ES ARTE?", 100, 415);
    text("Y/N", 215, 470);
  }
  //¿Seguro?
  function seguro() {
    background(cBack);
    fill(cStroke);
    stroke(cStroke);
    //Manos
    push();
    translate(8, 15);
    let escala = 0.29;
    scale(escala);
    for (let x = 120; x < width / escala; x = x + 250) {
      for (let y = 120; y < 1300; y = y + 300) {
        mano(x, y);
      }
    }
    translate(-8, -15);
    scale(1 / 1.3);
    pop();
    //Texto
    textSize(45);
    text("¿SEGURO?", 130, 415);
    text("Y/N", 220, 470);
  }
  //BOLCHE
  function bolche() {
    background(cBack);
    fill(cStroke);
    stroke(cStroke);
    push();
    image(bolchePic, width / 2 - 100, height / 2 - 170, 200, 180);
    textSize(55);
    text("¡VIVA EL ARTE!", 55, 370);
    textSize(25);
    text(" [ENTER]", 200, 430);
  }
  //Museo
  function museo() {
    background(cBack);
    noFill();
    //Museo
    strokeWeight(4);
    rect(20, -10, 300, 200);
    rect(126, 119, 80, 70);
    rect(126, 119, 40, 70);
    //cartel
    rect(126, 30, 80, 50);
    strokeWeight(1);
    textSize(25);
    fill(cStroke);
    text("L'ART", 132, 62);
    //Controles
    textSize(20);
    text("MOVIMIENTO", 23, 410);
    textSize(30);
    text("[⇧]", 63, 440);
    text("[⇦][⇩][⇨]", 20, 470);
    //Mano + mensaje
    textSize(35);
    text("Al Museo!", 315, 450);
    stroke(cStroke);
    push();
    scale(0.3);
    mano(xMano, yMano);
    scale(1 / 0.3);
    pop();
  }
  //Galería
  function galeria() {
    background(cBack);
    stroke(cStroke);
    ranX = random(-0.5, 0.5);
    ranY = random(-0.5, 0.5);
    push();
    scale(0.8);
    translate(80, -20);
    mano();
    scale(1 / 0.8);
    translate(-100, 20);
    pop();
    noFill();
    strokeWeight(4);
    //Marco
    rect(131, 50, 250, 275);
    rect(117, 35, 280, 305);
    //Cartelito
    push();
    translate(0 - ranX, -5 - ranY);
    strokeWeight(3);
    rect(327, 362, 60, 35);
    strokeWeight(0.5);
    textSize(9);
    text("Mano (2022)", 330, 372);
    textSize(8);
    text("Píxel sobre \npíxel", 330, 382);
    pop();
    //Texto
    strokeWeight(1);
    fill(cStroke);
    textSize(40);
    text("¿AHORA SÍ?", 140, 438);
    //textSize(50);
    text("Y/N", 225, 483);
  }
  //DUCHAMP
  function duchamp() {
    escalax = 0.8;
    escalay = 0.9;
    push();
    scale(escalax, escalay);
    translate(-60 / escalax, 20 / escalay);
    background(cBack);
    stroke(cStroke);
  
    //CUADRO --------------
    //Manitos
    escala = 0.15;
    for (let x = 155 / escala; x < (131 + 250) / escala; x += 40 / escala) {
      for (let y = 75 / escala; y < (50 + 275) / escala; y += 45 / escala) {
        ranX = random(-6, 6);
        ranY = random(-6, 6);
        scale(escala);
        mano(x + ranX, y - ranY);
        scale(1 / escala);
      }
    }
    //Marco
    noFill();
    strokeWeight(4);
    rect(131, 50, 250, 275);
    rect(117, 35, 280, 305);
    translate(60 / escalax, -20 / escalay);
    scale(1 / escalax, 1 / escalay);
    pop();
    //-----------------------------------------------
    //Cartelito
    noFill();
    stroke(cStroke);
    push();
    translatex = -50;
    translatey = -450;
    escala = 1.4;
    translate(translatex - ranX / 10, translatey - ranY / 10);
    scale(escala);
    strokeWeight(3);
    rect(327, 362, 63, 37);
    strokeWeight(0.5);
    textSize(9);
    text("Mano() (2022)", 330, 372);
    textSize(8);
    text("Píxel sobre \npíxel", 330, 382);
    scale(1 / escala);
    translate(-translatex, -translatey);
    pop();
    //Texto
    translatex = 0;
    translatey = -20;
    translate(translatex, translatey);
    strokeWeight(1);
    fill(cStroke);
    textSize(38);
    text("C'EST ", 285, 196);
    text("PAS", 285, 255);
    text("AN ARTE", 285, 315);
    translate(-translatex, -translatey);
    textSize(45);
    text("[ENTER]", 170, 440);
  }
  //Viva
  function viva() {
    noFill();
    strokeWeight(7);
    //Animación de cambio de color
    if (frameCount % 12 === 0) {
      if (switchViva === true) {
        switchViva = false;
      } else {
        switchViva = true;
      }
    }
    if (switchViva) {
      background(cBack);
      stroke(cStroke);
    } else {
      background(cStroke);
      stroke(cBack);
    }
    //Puño
    push();
    scale(0.85);
    translate(55, 40);
    puño();
    translate(-55, -40);
    scale(1 / 0.85);
    pop();
    //Texto
    strokeWeight(1);
    textSize(90);
    if (switchViva) {
      fill(cStroke);
    } else {
      fill(cBack);
    }
    text("VIVA", 150, 95);
    textSize(80);
    text("EL ARTE!", 90, 470);
    textSize(25);
    text("[ENTER]", 345, 360);
  }
  
  //Dibujos ----------------------------------------------------
  
  //Mano
  function mano(centerX = width / 2, centerY = height / 2) {
    strokeWeight(7);
    noFill();
    //Dedo Mayor
    line(
      centerX + calibX(217),
      centerY + calibY(315),
      centerX + calibX(218),
      centerY + calibY(142)
    );
    line(
      centerX + calibX(266),
      centerY + calibY(315),
      centerX + calibX(264),
      centerY + calibY(145)
    );
    //cima del dedo mayor
    arc(centerX + calibX(241), centerY + calibY(142), 46, 50, PI, 0);
    //Uña Mayor
    circle(centerX + calibX(241), centerY + calibY(142), 28);
    //Nudillos
    arc(
      centerX + calibX(242),
      centerY + calibY(190),
      10,
      5,
      0.89 * PI,
      0.11 * PI
    );
    arc(
      centerX + calibX(242),
      centerY + calibY(243),
      10,
      5,
      0.89 * PI,
      0.11 * PI
    );
    //Anular
    bezier(
      centerX + calibX(265),
      centerY + calibY(243),
      centerX + calibX(280),
      centerY + calibY(220),
      centerX + calibX(320),
      centerY + calibY(212),
      centerX + calibX(311),
      centerY + calibY(301)
    );
    //Littlefinger y costado de la mano
    bezier(
      calibX(314) + centerX,
      calibY(248) + centerY,
      calibX(349) + centerX,
      calibY(225) + centerY,
      calibX(360) + centerX,
      calibY(300) + centerY,
      calibX(341) + centerX,
      calibY(356) + centerY
    );
    //Bottom Mano - derecha
    bezier(
      calibX(341) + centerX,
      calibY(356) + centerY,
      calibX(312) + centerX,
      calibY(392) + centerY,
      calibX(255) + centerX,
      calibY(370) + centerY,
      calibX(223) + centerX,
      calibY(369) + centerY
    );
    //bottom mano - izquierda
    bezier(
      calibX(223) + centerX,
      calibY(369) + centerY,
      calibX(195) + centerX,
      calibY(400) + centerY,
      calibX(120) + centerX,
      calibY(320) + centerY,
      calibX(138) + centerX,
      calibY(305) + centerY
    );
    //pulgar
    bezier(
      calibX(138) + centerX,
      calibY(305) + centerY,
      calibX(140) + centerX,
      calibY(300) + centerY,
      calibX(170) + centerX,
      calibY(270) + centerY,
      calibX(176) + centerX,
      calibY(275) + centerY
    );
    //Índice
    bezier(
      calibX(218) + centerX,
      calibY(250) + centerY,
      calibX(188) + centerX,
      calibY(230) + centerY,
      calibX(175) + centerX,
      calibY(243) + centerY,
      calibX(174) + centerX,
      calibY(323) + centerY
    );
  }
  //Prender tele intro
  function prenderTele() {
    strokeWeight(7);
    if (line2y1 < height) {
      console.log(cBack);
      if (cRect < cBack) {
        cRect += 1;
      }
      if (x1 >= 0 || x2 <= 1) {
        noStroke();
        fill(cRect);
        ran = 0;
        if (x1 < 0.4 * width) {
          ran = random(-3, 3);
        }
        rect(0, 0, width, line1y1);
        rect(0, line2y1, width, height);
        stroke(255);
        line(x1, line1y1 + ran, x2, line1y2 + ran);
        x1 -= lineInc * 1.2;
        x2 += lineInc * 1.2;
      } else {
        noStroke();
        ran = random(-3, 3);
        mult = 1.8; //Multiplica el incremento
        fill(cRect);
        rect(0, 0, width, line1y1);
        rect(0, line2y1, width, height);
        stroke(cStroke);
        line(x1, line1y1 + ran, x2, line1y2 + ran);
        line(x1, line2y1 + ran, x2, line2y2 + ran);
        line1y1 -= lineInc * mult;
        line1y2 -= lineInc * mult;
        line2y1 += lineInc * mult;
        line2y2 += lineInc * mult;
      }
    }
  }
  //Puño
  function puño() {
    noFill();
    strokeWeight(7);
    //Muñeca inferior
    line(162, 412, 297, 412);
    //Muñeca izq
    line(162, 412, 164, 335);
    //Muñeca der
    bezier(297, 412, 288, 340, 295, 315, 295, 315);
    //Pulgar
    //Cara externa derecha
    bezier(295, 315, 319, 270, 425, 260, 339, 144);
    //Uña
    bezier(336, 141, 318, 133, 302, 158, 253, 165);
    //yema
    bezier(253, 165, 225, 200, 320, 220, 333, 178);
    //Palma
    //Línea palma
    bezier(220, 260, 270, 165, 290, 215, 332, 215);
    //Costado izquierdo
    bezier(164, 335, 139, 299, 139, 246, 145, 170);
    //Dedo Meñique
    //Inf Izq (en sentido horario, abajo para arriba)
    bezier(200, 205, 180, 245, 145, 190, 145, 160);
    bezier(145, 160, 145, 150, 160, 130, 180, 145);
    bezier(200, 205, 190, 160, 180, 145, 180, 145);
    //Anular
    bezier(180, 145, 170, 108, 216, 98, 227, 120);
    bezier(227, 120, 229, 133, 259, 239, 200, 205);
    //Mayor
    bezier(227, 120, 239, 83, 294, 85, 280, 157);
    bezier(235, 197, 241, 201, 256, 203, 270, 203);
    //Índice
    bezier(280, 117, 299, 77, 349, 97, 330, 138);
  }
  
  //---------------------------------------------------------------------
  //Cambios de escena  con el teclado
  function keyPressed() {
    if (keyCode === ENTER) {
      //Enter para continuar
      if (escena === escenas.TITULOS) {
        escena = escenas.MAIN;
      }
      if (escena === escenas.VIVA || escena === escenas.DUCHAMP) {
        x1 = mAn;
        x2 = mAn;
        line1y1 = mAl;
        line1y2 = mAl;
        line2y1 = mAl;
        line2y2 = mAl;
        xMano = 1300;
        yMano = 1200;
        escena = escenas.TITULOS;
      }
    }
    //Preguntas Y/N
    else if (key === "y" || key === "Y") {
      //MAIN
      if (escena === escenas.MAIN) {
        //MAIN YES VA A SEGURO
        escena = escenas.SEGURO;
        //SEGURO YES VA A VIVA
      } else if (escena === escenas.SEGURO) {
        escena = escenas.VIVA;
        //GALERIA YES VA A VIVA
      } else if (escena === escenas.GALERIA) {
        escena = escenas.VIVA;
      }
      //MAIN
    } else if (key === "n" || key === "N") {
      //MAIN NO VA A MUSEO
      if (escena === escenas.MAIN) {
        escena = escenas.MUSEO;
      }
      //SEGURO NO VA A MUSEO
      if (escena === escenas.SEGURO) {
        escena = escenas.MUSEO;
      }
      //GALERIA NO VA A DUCHAMP
      if (escena === escenas.GALERIA) {
        escena = escenas.DUCHAMP;
      }
    }
    if (escena === escenas.MUSEO) {
      if (keyCode === UP_ARROW) {
        if (xMano === 600 && yMano < 900) {
          yMano -= 250;
          escena = escenas.GALERIA;
        }
        if (yMano >= 900 || xMano >= 1200) {
          yMano -= 100;
        }
      } else if (keyCode === DOWN_ARROW) {
        yMano += 100;
      } else if (keyCode === LEFT_ARROW) {
        if (!(yMano <= 700 && xMano <= 1200)) {
          xMano -= 100;
        }
      } else if (keyCode === RIGHT_ARROW) {
        xMano += 100;
      }
    }
  }
  
  //------------------------------------
  
  //Funciones utilitarias
  //Ayuda a calcular posiciones en x de mano()
  function calibX(x) {
    return x - width / 2;
  }
  //Idem en y
  function calibY(y) {
    return y - height / 2;
  }
  
  function ranXY(ran){
      ranX = random(-ran, ran);
    ranY = random(-ran, ran);
  }
  
  //Imprime la posicion del mouse
  function mousePressed() {
    console.log(mouseX + " - " + mouseY);
  }
  