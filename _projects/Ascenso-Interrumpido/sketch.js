//AM1 Cátedra Lacabanne
//Obra "Ascenso Interrumpido"
//Sofia Mora



let grupo1 = 50;
let grupo2 = 20;
let grupo2extra = 40;
let grupo3 = 30;
let grupo4 = 80;
let grupo5 = 80;
let grupo6 = 82;
let grupo7 = 20;
let grupo8 = 35;
let grupo9 = 72;
let grupo10 = 40;

let fase = 0;
let ticksDesdeInicio = 0;
let contadorFramesEnter = 0;

function setup() {
  createCanvas(512,512);
  canvas.parent('div-sketch');
  rectMode(CENTER);
}

function draw() {
  background(0);
  strokeWeight(3);

  for (let i = 0; i < grupo2; i++) {
    let d = i * 4;
    let x = 50 + d * 0.2;
    let y = 290 - d * 1.5;
    let tam = 30 + i / 4;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo4; i++) {
    let d = i * 4;
    let x = 310 - d;
    let y = 270 + d * 1.5;
    let tam = 30 + i / 4;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo1; i++) {
    let d = i * 4;
    let x = 200 - d * 1.2;
    let y = 230 - d * 0.4;
    let tam = 30 + i / 4;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }
  for (let i = 0; i < grupo10; i++) {
    let d = i * 3;
    let x = 100 + d * 1.2;
    let y = 100 - d * 0.3;
    let tam = 15 + i / 3;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo9; i++) {
    let d = i * 3;
    let x = 220 + d * 0.3;
    let y = 10 + d * 1.2;
    let tam = 20 + i / 3;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo8; i++) {
    let d = i * 4;
    let x = 100 - d;
    let y = height - 40;
    let tam = 30 + i / 2;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo5; i++) {
    let d = i * 4;
    let x = 50 + d * 0.7;
    let y = 330 + d;
    let tam = 40 + i / 2;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo3; i++) {
    let d = i * 4;
    let x = 400 + d;
    let y = 220 - d * 0.8;
    let tam = 40 + i / 4;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo3; i++) {
    let d = i * 4;
    let x = 230 + d;
    let y = 260 - d * 2.3;
    let tam = 50 + i / 4;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo5; i++) {
    let d = i * 4;
    let x = width - d * 1.9;
    let y = 310 - d * 0.7;
    let tam = 40 + i / 2;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  for (let i = 0; i < grupo6; i++) {
    let d = i * 12;
    let x = 10 + d * 0.9;
    let y = 340 - d * 0.3;
    let tam = 30 + i / 2;

    if (i % 2 === 0) fill(255);
    else fill(0);

    noStroke();
    rect(x, y, tam, tam);
  }

  // Interacción
  if (mouseIsPressed && frameCount % 6 === 0) {
    if (mouseButton === LEFT) {
      ticksDesdeInicio++;

      // borrar primeros grupos
      if (grupo1 > 0) grupo1--;
      if (grupo3 > 0) grupo3--;
      if (grupo4 > 0) grupo4--;
      if (grupo9 > 0) grupo9--;
      if (grupo10 > 0) grupo10--;

      if (fase === 0 && ticksDesdeInicio >= 2) {
        fase = 1;
      }

      // borrar el resto
      if (fase === 1) {
        if (grupo2extra > 0) grupo2extra--;
        if (grupo2 > 0) grupo2--;
        if (grupo5 > 0) grupo5--;
        if (grupo6 > 0) grupo6--;
        if (grupo7 > 0) grupo7--;
        if (grupo8 > 0) grupo8--;
      }
    }

    // reset inmediato
    if (mouseButton === RIGHT) {
      grupo1 = 40;
      grupo2 = 20;
      grupo2extra = 40;
      grupo3 = 30;
      grupo4 = 80;
      grupo5 = 80;
      grupo6 = 82;
      grupo7 = 20;
      grupo8 = 20;

      fase = 0;
      ticksDesdeInicio = 0;
    }
  }
}