// "TP2 Red Viva - Travaglini"
let nodos = []; // array de todas las partículas
let cant = 600;// cantidad total de nodos
let baseHue = 260;// tono base del color (violeta–azul)
let activar = false;// sirve para darle un brillo extra al núcleo

// Variables que controlan el efecto de explosión
let explosion = 0;// nivel general de explosión (va de 0 a 1 con lerp)
let explosionForce = 0; // fuerza con la que empuja la explosión

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100, 100);// colores tipo “neón”
  noStroke();

  // Creamos cada partícula con sus propiedades iniciales
  for (let i = 0; i < cant; i++) {
    nodos.push({
      x: random(-600, 600),// posición inicial comprimida en X
      y: random(-450, 450),// posición inicial en Y
      z: random(-900, 300),// profundidad inicial 
      speed: random(1, 4),// velocidad a la que “vienen hacia adelante”
      size: random(5, 12),// tamaño de la esfera

      // Parámetros para la oscilación suave (onda)
      fase: random(TWO_PI),
      amplitud: random(5, 20)
    });
  }
}

function draw() {
  // Fondo muy oscuro con un leve toque del tono base
  background((baseHue + 80) % 360, 80, 10);

  orbitControl();// permite mover la cámara con el mouse

  // LUCES SUAVES
  ambientLight(baseHue, 50, 40); // luz ambiental general

  // Mapeamos posición del mouse a coordenadas 3D
  let lx = map(mouseX, 0, width, -600, 600);
  let ly = map(mouseY, 0, height, -400, 400);
  let luzColorHue = (baseHue + 70) % 360; // color complementario

  // Luz que se mueve con el mouse
  pointLight(
    luzColorHue, 60, 90,
    lx, ly, 300
  );
  // PARTICULAS CON MOVIMIENTO y EXPLOSIÓN ESPACIAL
  push();

  for (let p of nodos) {

    // Movimiento ondulante base
    p.fase += 0.02;
    let oscil = sin(p.fase) * p.amplitud;

    // EXPLOSIÓN (con barra espaciadora)
    if (keyIsDown(32)) {// 32 = espacio
      // La explosión sube relativamente rápido
      explosion = lerp(explosion, 1, 0.25);
      explosionForce = lerp(explosionForce, 1, 0.2);
    } else {
      // Y baja lento para que se sienta suave
      explosion = lerp(explosion, 0, 0.06);
      explosionForce = lerp(explosionForce, 0, 0.1);
    }

    // Movimiento radial cuánto empuja la explosión a cada partícula
    let ex = p.x * 0.015 * explosionForce;
    let ey = p.y * 0.015 * explosionForce;
    let ez = p.z * 0.015 * explosionForce;

    // “Caos” vibrante
    let chaos = explosion * 30;

    // Vibraciones caóticas en cada eje
    let cx = sin(frameCount * 0.2 + p.fase) * chaos;
    let cy = cos(frameCount * 0.15 + p.fase) * chaos;
    let cz = sin(frameCount * 0.18 + p.fase) * chaos;

    push();

    // Brillo depende de la profundidad
    let brilloZ = map(p.z, -900, 300, 40, 95);
    fill(baseHue, 40, brilloZ, 80);

    // Posición final de la esfera sumando:
    // posición base, oscilación, explosión y estilo caos
    translate(
      p.x + oscil + ex + cx,
      p.y - oscil * 0.3 + ey + cy,
      p.z + ez + cz
    );

    sphere(p.size); // dibuja la partícula
    pop();

    // Movimiento lineal: las partículas avanzan hacia el frente en Z
    p.z += p.speed;

    // Respawn cuando llegan demasiado adelante
    if (p.z > 300) {
      p.z = -900; // vuelven al fondo profundo
      p.x = random(-600, 600);
      p.y = random(-450, 450);
      p.speed = random(1, 4);
      p.size = random(5, 12);
      p.fase = random(TWO_PI);
    }
  }
  pop();

  // CONEXIONES ENTRE NODOS CERCANOS
  stroke((baseHue + 50) % 360, 30, 80, 25); //color suave
  strokeWeight(2);

  // Pequeña red que une nodos cercanos para sensación de “tejido”
  for (let i = 0; i < nodos.length; i++) {
    let a = nodos[i];

    // Compara cada nodo con sus vecinos inmediatos
    for (let j = i + 1; j < i + 6 && j < nodos.length; j++) {
      let b = nodos[j];
      let d = dist(a.x, a.y, a.z, b.x, b.y, b.z);

      // Si están cerca, se dibuja una línea vibrante
      if (d < 150) {
        let vib = sin(frameCount * 0.1 + i * 0.2) * 2;

        line(
          a.x, a.y, a.z,
          b.x + vib, b.y - vib, b.z
        );
      }
    }
  }
  noStroke();

  // NÚCLEO CENTRAL (esfera grande)
  push();
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.006);

  let brillo = activar ? 100 : 75;// enciende más cuando movés el mouse
  ambientMaterial((baseHue + 30) % 360, 70, brillo);

  // Pequeña pulsación del núcleo
  let r = 120 + sin(frameCount * 0.05) * 8;
  sphere(r, 64, 64);
  pop();

  // ANILLOS ORBITALES
  push();
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.006);

  let ringHue = (baseHue + 80) % 360;
  noFill();
  stroke(ringHue, 60, 90, 50);
  strokeWeight(2);

  // Tres anillos que rotan a distintas velocidades
  for (let i = 0; i < 3; i++) {
    push();
    rotateY(frameCount * 0.01 * (i + 1));
    rotateX(frameCount * 0.005 * (i + 1));

    beginShape();
    let radius = 200 + i * 40; // cada anillo más grande que el anterior

    for (let a = 0; a < TWO_PI; a += 0.1) {
      let x = cos(a) * radius;
      let y = sin(a) * radius;
      vertex(x, y, 0); // el anillo está en el plano XY
    }

    endShape(CLOSE);
    pop();
  }

  noStroke();
  pop();
}

// Cambia la paleta de color al hacer clic
function mousePressed() {
  baseHue = random(200, 300);
}

// Ajusta el canvas cuando cambia el tamaño de la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
