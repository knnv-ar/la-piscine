// Título: Itinerante sorpresa
// 2025
// Olivera Nicole

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  frameRate(5);
}

function draw() {
  background(255);
  noFill();

  // asigno la cantidad de columnas y filas para crear el patrón por el tamaño del canvas -- para utilizar la totalidad del canvas
  let cantColumnas = 6;
  let cantFilas = 6;
  let celdas = 512 / cantFilas; // da el alto/ancho de cada celda
  let margen = 8; // entre celda

  // primer for recorre cantColumnas (verticales)
  // segundo for recorre cantFilas (horizontales)
  for (let columna = 0; columna < cantColumnas; columna++) {
    for (let fila = 0; fila < cantFilas; fila++) {
      // se calcula cuánto espacio debe avanzar hacia la derecha y hacia abajo
      let x = fila * celdas + margen / 2;
      let y = columna * celdas + margen / 2;

      // se calcula cuánto espacio hay disponible dentro de cada celda para dibujar los cuadrados
      let espacioTotal = celdas - margen;

      //termina preparación previa de la grilla - y sus calculos - para comenzar a dibujar los cuadrados
      push();
      let cantidadDeCuadrados = 15;
      
      // margen interno entre cuadrados -- separación entre cuadrados concéntricos
      // calcula cuánto se debe achicar cada cuadrado concéntrico con respecto al anterior
      let margenInterno = espacioTotal / (cantidadDeCuadrados + 1);
      
      // grosores aleatorios para lineas
      let grosorX = random(1, 5); //
      let grosorY = random(5, 3);

      // dibujo
      for (let i = 0; i < cantidadDeCuadrados; i++) {
        // alternar grosores // par, impar
        if (i % 2 == 0) {
          strokeWeight(grosorX);
        } else {
          strokeWeight(grosorY);
        }

        // cada vértice del cuadrado está un poco más hacia el centro a medida que i aumenta. El cuadrado se achica progresivamente, formando varios cuadrados concéntricos.
        quad(
          x + margenInterno * i,
          y + margenInterno * i,
          x + espacioTotal - margenInterno * i,
          y + margenInterno * i,
          x + espacioTotal - margenInterno * i,
          y + espacioTotal - margenInterno * i,
          x + margenInterno * i,
          y + espacioTotal - margenInterno * i
        );
      }
      pop();
    }
  }
}
