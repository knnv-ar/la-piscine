/*
--------------------------------------------------------
Juan Luciano Derene
Artes Multimediales 1
Trabajo Practico N°1
"Simpoiesis" (2026)
Catedra: Lacabanne
Turno: Mañana

GUIA:
Arrow Keys "Arriba, abajo, izquierda y derecha"
--------------------------------------------------------
*/

let posicionX = 324;
let posicionY = 155;
let tamanioPj = 8;
let cantidadPersonas = 20;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(60);
  rectMode(CENTER);
}

function draw() {
  background(200);
  noStroke();

  //Fondo
  for (let i = 0; i < 900; i += 15) {
    if (i < 900) {
      fill(25, 5);
      circle(500, 20, 900 - i);
    }
  }

  //--------------------------------------------------------
  //Pj
  if (keyIsDown(LEFT_ARROW)) {
    posicionX = posicionX - 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    posicionX = posicionX + 2;
  }
  if (keyIsDown(UP_ARROW)) {
    posicionY = posicionY - 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    posicionY = posicionY + 2;
  }

  if (posicionX < 0) {
    posicionX = 0;
  }
  if (posicionX > width - 4 * tamanioPj) {
    posicionX = width - 4 * tamanioPj;
  }
  if (posicionY < 0) {
    posicionY = 0;
  }
  if (posicionY > height - 5 * tamanioPj) {
    posicionY = height - 5 * tamanioPj;
  }

  //--------------------------------------------------------
  if (posicionX > 106 && posicionX < 206 && posicionY > 6 && posicionY < 107) {
    //1-Ronda interaccion
    push();
    translate(160, 55);
    rotate(frameCount * -0.007);
    fill(210);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 2) / 6);
      translate(2, -20);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //2-Ronda mediana superior izquierda
    push();
    translate(70, 95);
    rotate(frameCount * 0.006);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate(i * 3);
      translate(0, -33);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //3-Ronda grande inferior derecha
    push();
    translate(425, 434);
    rotate(frameCount * 0.006);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i++) {
      push();
      rotate(i * 4);
      translate(0, -40);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 32, 11);

      pop();
    }

    pop();

    //4-Ronda chiquita medio derecha
    push();
    translate(470, 340);
    rotate(frameCount * -0.008);
    fill(200);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 5) / 2);
      translate(0, -18);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //5-Ronda grande mitad izq.
    push();
    translate(92, 238);
    rotate(frameCount * -0.005);
    fill(160);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i++) {
      push();
      rotate(i * 4);
      translate(0, -65);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }

    pop();

    //6-Ronda grande principal
    push();
    translate(335, 178);
    rotate(frameCount * 0.003);
    fill(240);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 1) {
      push();
      rotate(i * 17);
      translate(0, -150);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 58, 12);

      pop();
    }
    pop();

    //7-Ronda chiquita inferior izq.
    push();
    translate(173, 462);
    rotate(frameCount * -0.004);
    fill(100);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate((i * 3) / 5);
      translate(0, -23);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 38, 11);

      pop();
    }
    pop();

    //8-Ronda chiquita inferior derecha
    push();
    translate(325, 466);
    rotate(frameCount * -0.007);
    fill(170);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 2) / 6);
      translate(0, -20);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //9-Ronda chiquita medio izq.
    push();
    translate(180, 360);
    rotate(frameCount * -0.007);
    fill(245);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 2) / 6);
      translate(0, -18);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //10-Ronda mediana medio inferior
    push();
    translate(252, 410);
    rotate(frameCount * 0.006);
    fill(130);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate(i * 3);
      translate(0, -29);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 42, 11);

      pop();
    }
    pop();

    //11-Ronda mediana inferior izquierda
    push();
    translate(78, 395);
    rotate(frameCount * 0.006);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 1) {
      push();
      rotate((i * 4) / 7);
      translate(0, -50);
      //

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 38, 11);

      pop();
    }
    pop();

    for (let i = 0; i < 900; i += 15) {
      if (i < 700) {
        fill(100, 8);
        circle(0, 500, 700 - i);
      }
    }
  }
  //--------------------------------------------------------
  else {
    background(200);
    noStroke();

    //Pj
    push();
    fill(255);
    //Cabeza
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 0 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 0 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 0 * tamanioPj,
      tamanioPj,
      tamanioPj
    );

    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 1 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 1 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 1 * tamanioPj,
      tamanioPj,
      tamanioPj
    );

    //Centro izquierdo
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 3 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 2 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    //Centro derecho
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 3 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 2 * tamanioPj,
      tamanioPj,
      tamanioPj
    );

    //Hombro izquierdo
    rect(
      posicionX + 0 * tamanioPj,
      posicionY + 2 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    //Hombro derecho
    rect(
      posicionX + 3 * tamanioPj,
      posicionY + 2 * tamanioPj,
      tamanioPj,
      tamanioPj
    );

    //Mano izquierda (volver a 0)
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 3 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    //Mano derecha (volver a 3)
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 3 * tamanioPj,
      tamanioPj,
      tamanioPj
    );

    //Piernas
    rect(
      posicionX + 1 * tamanioPj,
      posicionY + 4 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    rect(
      posicionX + 2 * tamanioPj,
      posicionY + 4 * tamanioPj,
      tamanioPj,
      tamanioPj
    );
    pop();

    //Fondo
    for (let i = 0; i < 900; i += 15) {
      if (i < 900) {
        fill(25, 5);
        circle(500, 20, 900 - i);
      }
    }

    //--------------------------------------------------------
    //1-Ronda interaccion
    push();
    translate(160, 55);
    fill(210);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 5) {
      push();
      rotate(i * 2);
      translate(2, -20);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //2-Ronda mediana superior izquierda
    push();
    translate(70, 95);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate(i * 3);
      translate(0, -33);
      //

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //3-Ronda grande inferior derecha
    push();
    translate(425, 434);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i++) {
      push();
      rotate(i * 4);
      translate(0, -40);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 32, 11);

      pop();
    }

    pop();

    //4-Ronda chiquita medio derecha
    push();
    translate(470, 340);
    fill(200);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 5) / 2);
      translate(0, -18);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //5-Ronda grande mitad izq.
    push();
    translate(92, 238);
    fill(160);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i++) {
      push();
      rotate(i * 4);
      translate(0, -65);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }

    pop();

    //6-Ronda grande principal
    push();
    translate(335, 178);
    fill(240);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 1) {
      push();
      rotate(i * 17);
      translate(0, -150);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 58, 12);

      pop();
    }
    pop();

    //7-Ronda chiquita inferior izq.
    push();
    translate(173, 462);
    fill(100);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate((i * 3) / 5);
      translate(0, -23);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 38, 11);

      pop();
    }
    pop();

    //8-Ronda chiquita inferior derecha
    push();
    translate(325, 466);
    fill(170);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 2) / 6);
      translate(0, -20);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //9-Ronda chiquita medio izq.
    push();
    translate(180, 360);
    fill(245);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 4) {
      push();
      rotate((i * 2) / 6);
      translate(0, -18);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 45, 11);

      pop();
    }
    pop();

    //10-Ronda mediana medio inferior
    push();
    translate(252, 410);
    fill(130);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 3) {
      push();
      rotate(i * 3);
      translate(0, -29);

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 42, 11);

      pop();
    }
    pop();

    //11-Ronda mediana inferior izquierda
    push();
    translate(78, 395);
    fill(230);
    noStroke();

    for (let i = 0; i < cantidadPersonas; i = i + 1) {
      push();
      rotate((i * 4) / 7);
      translate(0, -50);
      //

      //Cabeza
      rect(0, -20, 20, 16);

      //Torso
      rect(0, -5, 20, 22);

      //Piernas
      rect(0, 1, 10, 16);

      //Brazos
      rect(0, -10, 38, 11);

      pop();
    }
    pop();

    for (let i = 0; i < 900; i += 15) {
      if (i < 700) {
        fill(100, 8);
        circle(0, 500, 700 - i);
      }
    }
  }
}
