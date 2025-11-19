let vertices = [];
let caras = [];
let buffer;
let ultimoCambio = 0;
let tiempoCambio = 5000;
let ultimaCaptura = 0;
let tiempoCaptura = 3000;

function setup() {
  let canvas = createCanvas(800, 800, WEBGL);
  canvas.parent('div-sketch');
  buffer = createGraphics(400, 400, WEBGL);
  generarMallaAleatoria();
}

function draw() {
  background(20);

  // --- animación principal ---
  push();
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.008);

  ambientLight(50);
  pointLight(255, 255, 255, 200, 0, 200);
  fill(150, 200, 255, 150);
  stroke(200);
  strokeWeight(2);

  dibujarMalla(vertices, caras);

  // --- cada 5 segundos: nueva malla ---
  if (millis() - ultimoCambio > tiempoCambio) {
    generarMallaAleatoria();
    ultimoCambio = millis();
  }

  if (millis() - ultimaCaptura > tiempoCaptura) {
    guardarSnapshotEnBuffer();
    ultimaCaptura = millis();
  }
  pop();
  // --- mostrar buffer en pantalla como ejemplo ---
  push();
  translate(-width / 2, -height / 2); // ponerlo en la esquina superior izquierda
  image(buffer, 0, 0, 300, 300); // muestra buffer reducido
  pop();
}

// ---------------------------------
// FUNCIONES AUXILIARES
// ---------------------------------
function generarMallaAleatoria() {
  vertices = [];
  caras = [];
  let n = int(random(12, 30));
  for (let i = 0; i < n; i++) {
    vertices.push(
      createVector(random(-1, 1), random(-1, 1), random(-1, 1)).normalize()
    );
  }
  for (let i = 0; i < n - 2; i++) {
    caras.push([i, i + 1, int(random(n))]);
  }
}

function dibujarMalla(verts, faces) {
  beginShape(TRIANGLES);
  for (let i = 0; i < faces.length; i++) {
    let f = faces[i];
    for (let vi = 0; vi < f.length; vi++) {
      let v = verts[f[vi]];
      vertex(v.x * 150, v.y * 150, v.z * 150);
    }
  }
  endShape();
}

function guardarSnapshotEnBuffer() {
  buffer.push();
  buffer.background(20); // limpiar buffer
  buffer.rotateY(frameCount * 0.01);
  buffer.rotateX(frameCount * 0.008);
  buffer.ambientLight(50);
  buffer.pointLight(255, 255, 255, 200, 0, 200);
  buffer.fill(150, 200, 255, 150);
  buffer.stroke(200);
  buffer.strokeWeight(2);
  dibujarMallaEnBuffer(buffer, vertices, caras);
  buffer.pop();
}

function dibujarMallaEnBuffer(b, verts, faces) {
  b.beginShape(TRIANGLES);
  for (let i = 0; i < faces.length; i++) {
    let f = faces[i];
    for (let vi = 0; vi < f.length; vi++) {
      let v = verts[f[vi]];
      b.vertex(v.x * 150, v.y * 150, v.z * 150);
    }
  }
  b.endShape();
}
