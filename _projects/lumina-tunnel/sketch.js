//Título de la obra:"Lumina Tunnel"
//Año: 2025
//Autor/a: Sofía Mora
//Instrucciones: El usuario controla la cámara dentro del túnel moviendo el mouse:
//Arriba/abajo: la cámara avanza o retrocede a lo largo del túnel.
//Izquierda/derecha: la cámara se desplaza lateralmente, explorando los costados del espacio.
//Los movimientos están limitados a los “topes” del túnel para que la navegación siempre se mantenga dentro del entorno. Al mover el mouse hasta los extremos, el usuario puede explorar completamente las superficies y elementos del túnel sin salirse de los límites visuales.



let camX = 0;
let camY = -50; // altura de la cámara
let camZ = 600; // distancia inicial
let numPuntos = 2000;

let amplitud = 50;
let velocidad = 0.02;

let puntosCentro = [];
let puntosDer = [];
let techoPuntos = [];
let numTecho = 1000;
let cancion;

function preload() {
  cancion = loadSound("sonidos/musica.mp3");
}

function setup() {
  let canvas = createCanvas(700, 700,WEBGL);
canvas.parent('div-sketch');
  noStroke();
  cancion.loop();

  //puntos centro
  for (let i = 0; i < numPuntos; i++) {
    puntosCentro.push({
      x: random(-3000, 3500),
      y: random(-3000, 300),
      z: random(-2000, -4000),
      desplazamiento: random(TWO_PI),
    });
  }

  //  puntos zona derecha
  for (let x = 1900; x >= 250; x -= 50) {
    let yMin = map(x, 1900, 550, -300, -2150);
    let yMax = map(x, 1900, 550, 300, 150);
    for (let y = yMax; y >= yMin; y -= 50) {
      let zBase = map(x, 1900, 250, -2000, -800); // perspectiva Z
      let desplazamiento2 = random(TWO_PI);
      puntosDer.push({ x, y, zBase, desplazamiento2 });
    }
  }

  //Luces del techo
  for (let i = 0; i < numTecho; i++) {
    let x = random(-1900, 1900);
    let y = random(-700, -150);
    let z = random(-6000, 0);
    let velocidad3 = random(5, 15);
    techoPuntos.push({ x, y, z, velocidad3 });
  }
}

function draw() {
  background(0);
  movimientoCamara();

  pointLight(255, 255, 255, 0, 0, 300);

  // Dibujo piso
  push();
  perspectiva(0, 800, 0, 0, 200, -8000, 2000, 80, 0.2);
  pop();

  //Dibujar puntos centro perspectiva
  for (let i = 0; i < puntosCentro.length; i++) {
    let p = puntosCentro[i];

    let zOscilacion =
      p.z + sin(frameCount * velocidad + p.desplazamiento) * amplitud;

    let perspectivaP = map(zOscilacion - camZ, -2000, 0, 0.2, 1);

    push();
    translate(p.x * perspectivaP, p.y * perspectivaP);
    ellipse(0, 0, 5 * perspectivaP);
    pop();

    // Mover los puntos hacia la cámara
    p.z += 5;
    if (p.z > 600) {
      p.z = -2000; // reinicia el túnel
    }

    // Mover los puntos hacia la cámara
    p.z += p.desplazamiento;

    // Reiniciar la luz si pasa la cámara
    if (p.z > 0) {
      p.z = random(-4000, -1000); // reaparece en la parte trasera del túnel
      p.x = random(-300, 300);
      p.y = random(-300, 300);
      p.desplazamiento = random(5, 15); // velocidad nueva
    }
  }

  // Pared derecha
  push();
  fill(0, 255, 200);
  for (let i = 0; i < puntosDer.length; i++) {
    let p = puntosDer[i];
    let zOsc =
      p.zBase + sin(frameCount * velocidad + p.desplazamiento2) * amplitud;
    let perspectiva = map(zOsc - camZ, -2000, 0, 0.2, 1);
    push();
    translate(p.x, p.y, zOsc);
    scale(perspectiva);
    sphere(5);
    pop();
  }
  pop();

  /// Techo
  push();
  fill(255, 255, 150);
  for (let i = 0; i < techoPuntos.length; i++) {
    let s = techoPuntos[i];

    push();
    translate(s.x, s.y, s.z);
    let perspectiva = map(s.z - camZ, -2000, 0, 0.2, 1);
    scale(perspectiva);
    sphere(5);
    pop();

    s.z -= s.velocidad3;
    if (s.z < -2000) {
      s.z = 800;
      s.x = random(-1900, 1900);
      s.y = random(-700, -150);
      s.velocidad3 = random(5, 15);
    }
  }
  pop();

  //
  push();
  perspectiva(
    -400, // x1 (lado izquierdo)
    -200, // y1
    -8000, // z1
    -400, // x2
    -200, // y2
    2000, // z2
    200, // ancho
    50,
    1.4
  );
  pop();

  push();
  perspectiva(
    400, // x1 (lado izquierdo)
    -200, // y1
    -8000, // z1
    -400, // x2
    -200, // y2
    2000, // z2
    200, // ancho
    50,
    1.4
  );
  pop();
}

// Cámara
function movimientoCamara() {
  let zVel = map(mouseY, 0, height, -10, 10);
  camZ += zVel;
  camZ = constrain(camZ, -1000, 8000);

  let rotY = map(mouseX, 0, width, -200, 200);

  let direX = rotY; // punto de fuga central
  let direZ = camZ - 200;
  let direY = camY;

  camera(camX, camY, camZ, direX, direY, direZ, 0, 1, 0);
}

function perspectiva(
  x1,
  y1,
  z1,
  x2,
  y2,
  z2,
  ancho = 100,
  separacion = 50,
  cierre = 1.4
) {
  stroke(0, 200, 255);
  strokeWeight(2);
  noFill();
  stroke(0, 200, 255);
  strokeWeight(2);
  noFill();

  for (let x = -ancho; x <= ancho; x += separacion) {
    // punto cercano
    let px1 = x + x1;
    let py1 = y1;
    let pz1 = z1;

    // punto de fuga cerrado
    let px2 = x1 * cierre;
    let py2 = y2;
    let pz2 = z2;

    beginShape();
    vertex(px1, py1, pz1);
    vertex(px2, py2, pz2);
    endShape();
  }
}
