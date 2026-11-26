// noprotect
let t = 0;

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
}

function draw() {
  background(0, 40);

  // líneas difusas de la vidriera
  strokeWeight(1.5);
  let espacio = 5;

  for (let x = 0; x < 512; x += espacio) {
    let variacion = noise(
      /*genera valores suaves y continuos*/ x * 0.025
    ); /*varia los valores de distancia entre lineas de forma sutil(entre 0 y 1)*/

    let intensidad = map(
      variacion,
      0,
      1,
      5,
      45
    ); /*convierte los valores de variacion en rangos entre 5 y 45 para la opacidad de la linea*/

    stroke(255, intensidad);

    line(x, 0, x, 512);

    // max(..., 1) asegura que espacio nunca sea 0 o negativo
    espacio = max(
      map(noise(x * 0.08), 0, 1, 3, 10),
      1
    ); /*convierte los valores de noise en la distancia en píxeles hasta la siguiente línea (entre 3 y 10 píxeles)*/
  }

  //comentario sobre map
  /*lo uso xq si no, noise solo produce resultados de decimales muy pequeños que para opacidad o para el espacio entre líneas no serian prudentes*/
  //manos
  strokeWeight(2);

  for (let copia = 0; copia < 3; copia++) {
    let tiempo = t - copia * 0.2;

    let gris = 255 - copia * 70;

    stroke(gris);
    fill(gris);
    //comentario sobre sin()
    /*oscila en un rango entre -1 y 1*/

    //brazo
    let x1 = 10;
    let y1 = 256 + sin(tiempo - 2) * 5;

    //palma
    let x2 = 110;
    let y2 = 256 + sin(tiempo - 1.5) * 25;

    //carpita
    let x3 = 250;
    let y3 = 256 + sin(tiempo - 1) * 60;

    //pulgar
    let xPulgar = 310;
    let yPulgar = y2 + 20 + sin(tiempo - 0.8) * 55;

    //nudillos 1
    let x4 = 320;
    let y4 = 256 + sin(tiempo - 0.5) * 90;

    //nudillos 2
    let x5 = 400;
    let y5 = 256 + sin(tiempo - 0.2) * 100;

    //dedos
    let x6 = 450;
    let y6 = 256 + sin(tiempo) * 110;

    //toda esta seccion conecta un segmento con el siguiente y va achicando el ancho

    // segmento 1 brazo

    for (let x = x1; x < x2; x += 4) {
      let y = map(x, x1, x2, y1, y2);
      let ancho = map(x, x1, x2, 28, 24);
      line(x, y - ancho, x, y + ancho);
    }

    //segmento 2 pulgar
    for (let x = x2; x < xPulgar; x += 4) {
      let y = map(x, x2, xPulgar, y2, yPulgar);

      let ancho = map(x, x2, xPulgar, 14, 8);

      line(x, y - ancho, x, y + ancho);
    }

    // segmento 3 palma
    for (let x = x2; x < x3; x += 4) {
      let y = map(x, x2, x3, y2, y3);
      let ancho = map(x, x2, x3, 24, 20);
      line(x, y - ancho, x, y + ancho);
    }

    // segmento 4 carpita
    for (let x = x3; x < x4; x += 4) {
      let y = map(x, x3, x4, y3, y4);
      let ancho = map(x, x3, x4, 20, 16);
      line(x, y - ancho, x, y + ancho);
    }
    // segmento 5 nudillos
    for (let x = x4; x < x5; x += 4) {
      let y = map(x, x4, x5, y4, y5);
      let ancho = map(x, x4, x5, 16, 11);
      line(x, y - ancho, x, y + ancho);
    }

    //segmento 6 dedos
    for (let x = x5; x < x6; x += 4) {
      let y = map(x, x5, x6, y5, y6);
      let ancho = map(x, x5, x6, 12, 7);
      line(x, y - ancho, x, y + ancho);
    }

    //dibujo puntos anatomicos
    fill(255, 50);
    stroke(255, 50);
    //brazo
    ellipse(x1, y1, 30, 60);
    //pulgar
    ellipse(xPulgar, yPulgar, 10, 15);
    //muñeca
    ellipse(x2, y2, 4, 40);
    //carpita
    ellipse(x3, y3 - 10, 20, 22);
    ellipse(x3, y3 - 15, 20, 22);
    //nudillos 1
    ellipse(x4, y4, 20, 22);
    //nudillos 2
    ellipse(x5, y5, 20, 22);
    //dedos
    ellipse(x6, y6, 10, 15);
  }

  t += 0.05;
}
