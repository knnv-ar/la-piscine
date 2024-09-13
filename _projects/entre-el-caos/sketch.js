/*Instrucciones


*/

let rectWidth = 50; //ancho del rectangulo
let rectHeight = 40; //alto del rectangulo
let espacioX = 60; //espacio horizontal entre rectangulos
let espacioY = 45; //espacio vertical entre rectangulos
let angulo = 0.0;
let velocidad = 0.05;
let escala = 20;
let mitadAncho, mitadAlto;
let velocidadReducida = 0.02;

function setup() {
  let canvas=createCanvas(512, 512,WEBGL);
  canvas.parent('div-sketch');
  mitadAncho = width / 2;
  mitadAlto = height / 2;
}

function draw() {
  background(0);
  strokeWeight(0.8);
  noFill(); // Sin relleno
  stroke(170); // Color del borde (gris claro)

  // Dibuja las líneas aleatorias de fondo si se presiona la tecla 'b'
  if (keyIsPressed && (key == "b" || key == "B")) {
    background(0); // Fondo negro para limpiar la pantalla
    stroke(220, 100); // gris con opacidad
    let numLineas = int(random(0, 200)); // Número de líneas aleatorio

    for (let i = 0; i < numLineas; i++) {
      let startX = random(width);
      let startY = random(height);
      let endX = random(width);
      let endY = random(height);

      // Dibuja una línea aleatoria en la pantalla
      line(startX, startY, endX, endY);
      velocidad -= 0.2;
    }
  }

  //cuadriláteros
  strokeWeight(1);
  for (let y = 100; y < 400; y += espacioY) {
    for (let x = 80; x < 400; x += espacioX) {
      let animAng = angulo + (x + y) * 0.1;

      // Cambio las coordenadas de los vértices en función de la animación
      let xAni = cos(animAng) * 2; // Ajusta el desplazamiento horizontal
      let yAni = sin(animAng) * 5; // Ajusta el desplazamiento vertical

      let x1 = x + xAni;
      let y1 = y + yAni;
      let x2 = x + rectWidth + xAni;
      let y2 = y + yAni;
      let x3 = x + rectWidth + xAni;
      let y3 = y + rectHeight + yAni;
      let x4 = x + xAni;
      let y4 = y + rectHeight + yAni;

      // Dibuja el cuadrilátero usando las coordenadas actualizadas
      quad(x1, y1, x2, y2, x3, y3, x4, y4);

      // ---- LÍNEAS CAÓTICAS ----
      stroke(255, random(50, 150)); // Color de las líneas con opacidad variable
      let numLines = int(random(5, 18)); // Número de líneas aleatorio por rectángulo

      for (let i = 0; i < numLines; i++) {
        let startX = x1 + random(rectWidth);
        let startY = y1 + random(rectHeight);
        let endX = x1 + random(rectWidth);
        let endY = y1 + random(rectHeight);

        // Dibuja una línea aleatoria dentro del rectángulo
        line(startX, startY, endX, endY);

        // Genera líneas aleatorias dentro del cuadrilátero

        if (keyIsPressed && (key == "a" || key == "A")) {
          let numLines = int(random(2, 50)); // Número aleatorio de líneas por rectángulo
          for (let i = 0; i < numLines; i++) {
            // Genera puntos aleatorios dentro del área del rectángulo
            let startX = x + random(rectWidth);
            let startY = y + random(rectHeight);
            let endX = x + random(rectWidth);
            let endY = y + random(rectHeight);

            // Dibuja la línea aleatoria
            stroke(255, random(50, 150)); // Color de las líneas con opacidad variable

            line(startX, startY, endX, endY);
          }
        }
      }
    }
  }

  // Ajusta la velocidad según la posición del mouse
  if (mouseIsPressed) {
    if (mouseY < mitadAlto) {
      // Aumenta la velocidad si el mouse está en la mitad superior
      velocidad += 0.06;
    } else {
      // Disminuye la velocidad gradualmente si el mouse está en la mitad inferior
      velocidad = max(0, velocidad - velocidadReducida);
    }
    angulo += 0.1; // Incrementa el ángulo
  }

  angulo += velocidad; // Actualiza el ángulo para la próxima frame
}


