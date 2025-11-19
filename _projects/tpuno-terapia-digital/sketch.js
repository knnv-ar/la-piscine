//TP N1 "TERAPIA DIGITAL"
//Viviana Castro -TN
// Es un trabajo luego de muchos intentos fallidos y prácticas a prueba y error sobre lo que debía ajustar, para que el código funcionara como tenía en mente y sea lo más orgánico en las formas, escalas, tiempos y mátices de color

let t = 0;
let eventoActivo = false;
let tInicioEvento = 0;
let duracionEvento = 600; // Duración aumentada para que la ola recorra todo el lienzo (~10 segundos)
let avanceNormalOffset = 0;

function setup() {
 let canvas = createCanvas(512, 512);
canvas.parent('div-sketch')
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(20);

  let columnas = 16;
  let filas = 16;
  let espX = width / columnas;
  let espY = height / filas;

  if (!eventoActivo && random() < 0.0015) {
    eventoActivo = true;
    tInicioEvento = frameCount;

    // Sincronizar la ola normal con la ola evento
    avanceNormalOffset = t * 5;
  }

  let distanciaMaxima = columnas + filas - 2;
  let avanceEvento = 0;
  if (eventoActivo) {
    avanceEvento =
      ((frameCount - tInicioEvento) / duracionEvento) * distanciaMaxima;
    if (frameCount - tInicioEvento > duracionEvento) {
      eventoActivo = false;
    }
  }

  let avanceNormal = avanceNormalOffset + (t * 5 - avanceNormalOffset);

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      push();

      let x = i * espX + espX / 2;
      let y = j * espY + espY / 2;
      translate(x, y);

      let pulso = sin(t * 2 + i + j) * 0.1 + 0.95;

      let fase = (i + (filas - 1 - j)) * 0.3 + noise(i * 0.2, j * 0.2, t * 0.1);
      let osc = sin(t - fase);
      let intensidadComun = map(
        noise(t * 0.1 + i * 0.3 + j * 0.4),
        0,
        1,
        0.2,
        0.9
      );

      let distancia = i + (filas - 1 - j);

      let activaNormal = distancia <= avanceNormal;
      let tmp1 = map(distancia, avanceNormal - 8, avanceNormal + 8, 1, 0);
      if (tmp1 < 0) tmp1 = 0;
      if (tmp1 > 1) tmp1 = 1;
      let factorDesvanecimientoNormal = tmp1;

      let activaEvento = eventoActivo && distancia <= avanceEvento;
      let tmp2 = map(distancia, avanceEvento - 8, avanceEvento + 8, 1, 0);
      if (tmp2 < 0) tmp2 = 0;
      if (tmp2 > 1) tmp2 = 1;
      let factorDesvanecimientoEvento = tmp2;

      let intensidadEvento = 0;
      if (eventoActivo) {
        let anguloEvento =
          (TWO_PI * (frameCount - tInicioEvento)) / duracionEvento;
        intensidadEvento = (1 - cos(anguloEvento)) / 1.2;
      }

      let intensidadCruda =
        intensidadComun * (activaNormal ? factorDesvanecimientoNormal : 0);
      intensidadCruda +=
        intensidadEvento * (activaEvento ? factorDesvanecimientoEvento : 0);
      if (intensidadCruda > 1) intensidadCruda = 1;

      let tamCalmo = espX * 0.4;
      let escalaCalmo = pulso;
      let grisCalmo = 100;
      let opacidadCalmo = 150;

      let tamOla = map(osc, -1, 1, espX * 0.3, espX * 0.75);
      let escalaOla = map(osc, -1, 1, 0.9, 1.2) * pulso;
      let grisOla = map(osc, -1, 1, 50, 240);
      let opacidadOla = map(osc, -1, 1, 80, 255);

      let tam = tamCalmo + (tamOla - tamCalmo) * intensidadCruda;
      let escala = escalaCalmo + (escalaOla - escalaCalmo) * intensidadCruda;
      let gris = grisCalmo + (grisOla - grisCalmo) * intensidadCruda;
      let opacidad =
        opacidadCalmo + (opacidadOla - opacidadCalmo) * intensidadCruda;

      let opacidadLimitada = opacidad;
      if (opacidadLimitada < 0) opacidadLimitada = 0;
      if (opacidadLimitada > 255) opacidadLimitada = 255;

      fill(gris, opacidadLimitada);
      scale(escala);
      rect(0, 0, tam, tam);

      pop();
    }
  }

  t += 0.01;
}
