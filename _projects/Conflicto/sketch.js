let alejandose = true; // Variable booleana que controla la dirección del movimiento (acercarse o alejarse)
let velocidad = 0; // Variable que determina la velocidad de movimiento

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);// Crea un lienzo de 512x512 píxeles
  canvas.parent('div-sketch');
  angleMode(DEGREES); // Configura el modo de ángulo a grados en lugar de radianes
}

function draw() {
  background(0, 5); // Dibuja un fondo negro con una ligera transparencia para crear un efecto de rastro
  strokeWeight(1); // Establece el grosor de las líneas a 1 píxel
  noFill(); // Evita que las figuras tengan un relleno

  // Controla el movimiento de alejamiento y acercamiento
  if (alejandose) {
    velocidad += 0.2; // Si se está alejando, aumenta la velocidad
    if (velocidad > 25) {
      alejandose = false; // Cambia de dirección cuando la velocidad alcanza un límite superior
    }
  } else {
    velocidad -= 0.12; // Si se está acercando, disminuye la velocidad
    if (velocidad < 0) {
      alejandose = true; // Cambia de dirección cuando la velocidad alcanza un límite inferior
    }
  }

  let girar = frameCount * 0.01; // Calcula una velocidad de rotación basada en el número de frames

  // Dibuja un patrón radial con movimiento
  for (let i = 0; i < 8; i++) { // Bucle que se ejecuta 8 veces para crear un patrón radial
    push(); // Guarda el estado actual de las transformaciones
    translate(width / 2, height / 2); // Traslada el origen al centro del lienzo
    rotate(girar + (360 / 8) * i); // Rota el lienzo para crear un efecto radial
    rotate(girar * 50); // Aplica una rotación adicional para más dinamismo
    stroke(255); // Establece el color de la línea a blanco
    ellipse(50 + velocidad, 75, 100, 100); // Dibuja una elipse cuyo centro se desplaza con la velocidad

    stroke(200); // Establece el color de la línea a un gris oscuro
    bezier(100, 100, 150, 150, 200, 50, 250, 100); // Dibuja una curva Bézier en los extremos con puntos de control fijos

    pop(); // Restaura el estado de las transformaciones anteriores
  }
  
  // Dibuja líneas aleatorias en el centro del lienzo
  for (let i = 0; i < 10; i++) { // Bucle que se ejecuta 10 veces para crear líneas aleatorias
    push(); // Guarda el estado actual de las transformaciones
    stroke(random(100,255 ),200); // Establece un color aleatorio para las líneas
    translate(width / 2, height / 2); // Traslada el origen al centro del lienzo
    line(random(-50, 50), random(-50, 50), random(-50, 50), random(-50, 50)); // Dibuja una línea con puntos aleatorios
    pop(); // Restaura el estado de las transformaciones anteriores
  }
}

