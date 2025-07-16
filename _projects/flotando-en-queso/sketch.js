let bloques = [];

function setup() {

  createCanvas(512, 512);

  background(255, 255, 224);

  stroke(0);

  strokeWeight(1);

  let columnas = 10;

  let filas = 10;

  let anchoCelda = width / columnas;

  let altoCelda = height / filas;

  for (let i = 0; i < columnas; i++) {

    for (let j = 0; j < filas; j++) {

      let x = i * anchoCelda;

      let y = j * altoCelda;

      let bloque = {

        x: x,

        y: y,

        w: anchoCelda,

        h: altoCelda,

        vx: random(-0.5, 0.5),

        vy: random(-0.5, 0.5),

        lineas: generarLineas(anchoCelda, altoCelda)

      };

      bloques.push(bloque);

    }

  }

}

function generarLineas(ancho, alto) {

  let lineas = [];

  let cantidad = int(random(3, 6));

  for (let i = 0; i < cantidad; i++) {

    let x1 = floor(random(0, ancho));

    let y1 = floor(random(0, alto));

    let horizontal = random() > 0.5;

    let largo;

    if (horizontal) {

      largo = floor(random(ancho * 0.2, ancho * 0.9));

      lineas.push({ x1: x1, y1: y1, x2: x1 + largo, y2: y1 });

    } else {

      largo = floor(random(alto * 0.2, alto * 0.9));

      lineas.push({ x1: x1, y1: y1, x2: x1, y2: y1 + largo });

    }

  }

  return lineas;

}

function draw() {

  background(255,255,224);

  stroke(0);

  strokeWeight(1);

  for (let bloque of bloques) {

    // Movimiento

    bloque.x += bloque.vx;

    bloque.y += bloque.vy;

    // Rebote

    if (bloque.x < 0 || bloque.x + bloque.w > width) bloque.vx *= -1;

    if (bloque.y < 0 || bloque.y + bloque.h > height) bloque.vy *= -1;

    // Dibujo

    push();

    translate(bloque.x, bloque.y);

    for (let ln of bloque.lineas) {

      line(ln.x1, ln.y1, ln.x2, ln.y2);

    }

    pop();

  }

}