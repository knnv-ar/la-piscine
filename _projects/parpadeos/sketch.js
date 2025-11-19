let columnas = 10;
let filas = 10;
let tamanoCelda;
let tiempoParpadeo;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noFill();
  stroke(0);
  tamanoCelda = width / columnas;
  frameRate(0.8); // Velocidad de parpadeo
}

function draw() {
  background(255);

  let centroX = width / 2;
  let centroY = height / 2;

  for (let col = 0; col < columnas; col++) {
    for (let fil = 0; fil < filas; fil++) {
      let xOriginal = col * tamanoCelda;
      let yOriginal = fil * tamanoCelda;


      let centroCeldaX = xOriginal + tamanoCelda / 2;
      let centroCeldaY = yOriginal + tamanoCelda / 2;

  
      let distanciaAlCentro = dist(
        centroCeldaX,
        centroCeldaY,
        centroX,
        centroY
      );

    
      let tamAncho = tamanoCelda + random(-mouseY / 50, mouseY / 50);
      let tamAlto = tamanoCelda + random(-mouseY / 50, mouseY / 50);

    
      if (random(1) > 0.5) {
        rect(xOriginal, yOriginal, tamAncho, tamAlto);

        
        let tipoLinea = int(random(4));
        if (tipoLinea === 0) {
          line(xOriginal, yOriginal, xOriginal + tamAncho, yOriginal + tamAlto);
        } else if (tipoLinea === 1) {
          line(xOriginal + tamAncho, yOriginal, xOriginal, yOriginal + tamAlto);
        } else if (tipoLinea === 2) {
          line(
            xOriginal,
            yOriginal + tamAlto / 2,
            xOriginal + tamAncho,
            yOriginal + tamAlto / 2
          );
        } else {
          line(
            xOriginal + tamAncho / 2,
            yOriginal,
            xOriginal + tamAncho / 2,
            yOriginal + tamAlto
          );
        }
      }
    }
  }
}
