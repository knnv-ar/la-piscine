// Título de la Obra: "Caos + Orden = Vida".
// Año: 2025.
// Autor/a: Angel Marcelo Jimenez.
// TP1 - Multimedia 1 - Catedra Raúl Lacabanne.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  rectMode(CENTER); // Los rectángulos se dibujan desde su centro.
  noFill(); // Las figuras (cuadrados) no tienen relleno.
  strokeWeight(1.8); // aumente el grosor de las líneas.
  noSmooth(); // Desactiva el suavizado de bordes.
}

function draw() {
  //Se ejecuta un cuadro a cuadro continuo, generando animación.
  background(255); // Fija el fondo en blanco.

  let cols = 16; // Cantidad de columnas de la grilla.
  let rows = 16; // Cantidad de filas.
  let espX = width / cols; // Espaciado horizontal entre celdas.
  let espY = height / rows; // Espaciado vertical.
  let t = frameCount * 0.01; // Variable tiempo que avanza en cada cuadro (animación).

  // Bloque 1: Dibuja la grilla de cuadrados con perturbaciones
  stroke(0); // Trazo negro para las figuras.
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push(); // Guarda el estado gráfico antes de transf. (Grupo).

      // Coordenadas del centro de cada celda.
      let cx = x * espX + espX / 2;
      let cy = y * espY + espY / 2;

      translate(cx, cy); // Mueve el sistema de coordenadas al centro de la celda.

      // Pequeñas perturbaciones en posición usando ruido Perlin.
      let offsetX = map(noise(x * 0.3, y * 0.3, t), 0, 1, -3, 3);
      // Desplazamiento en X.
      let offsetY = map(noise(x * 0.3 + 100, y * 0.3 + 100, t), 0, 1, -3, 3);
      //Desplazamiento en Y.

      // Perturbación de rotación, con ruido (hasta ±9 grados aprox).
      let angle = map(
        noise(x * 0.3, y * 0.3, t + 50),
        0,
        1,
        -QUARTER_PI / 5,
        QUARTER_PI / 5
      );

      translate(offsetX, offsetY); // Aplica el desplazamiento.
      rotate(angle); // Aplica la rotación leve.

      // Color de trazo en escala de grises (variable con ruido).
      let gris = map(noise(x * 0.2, y * 0.2, t + 200), 0, 1, 30, 230);
      stroke(gris); // Se aplica el valor calculado al trazo.

      // Tamaño base del cuadrado y su perturbación con ruido.
      let tamBase = espX * 0.6; // Tamaño central (proporcional a la celda).
      let tamOffset = map(noise(x * 0.4, y * 0.4, t + 300), 0, 1, -10, 10);
      // Variación.
      let tamFinal = tamBase + tamOffset; // Tamaño final del cuadrado.
      rect(0, 0, tamFinal, tamFinal); // Dibuja el cuadrado desde el centro.
      pop(); // Restaura el estado gráfico antes de la transf. (Grupo).
    }
  }

  // Bloque 2: Dibuja líneas horizontales perturbadas (como si vibraran).
  stroke(0, 70); // Trazo negro con transparencia (70/255), (más tenue).
  for (let y = 1; y < rows; y++) {
    beginShape(); // Comienza una línea formada por varios puntos (vértices).
    for (let x = 0; x <= cols; x++) {
      let px = x * espX;
      let py = y * espY;

      // Se calcula un movimiento vertical sutil con ruido.
      let noiseVal = noise(x * 0.15, y * 0.15, t);
      let offset = map(noiseVal, 0, 1, -4, 4);

      vertex(px, py + offset); // Se añade el punto perturbado a la línea.
    }
    endShape(); // Finaliza la línea conectando todos los puntos.
  }

  // Bloque 3: Líneas verticales perturbadas (complemento de las anteriores).
  for (let x = 1; x < cols; x++) {
    beginShape();
    for (let y = 0; y <= rows; y++) {
      let px = x * espX;
      let py = y * espY;

      // Desplazamiento horizontal (usando ruido distinto para diferenciarlas).
      let noiseVal = noise(x * 0.15, y * 0.15, t + 50);
      let offset = map(noiseVal, 0, 1, -4, 4);

      vertex(px + offset, py);
    }
    endShape();
  }
}
