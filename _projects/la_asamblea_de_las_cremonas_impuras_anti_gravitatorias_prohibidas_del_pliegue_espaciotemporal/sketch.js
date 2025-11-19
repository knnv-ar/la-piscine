// --- VARIABLES PRINCIPALES ---
let figuras = []; // Arreglo donde se guardan las figuras 3D
let cantidadFiguras = 18; // Cantidad total de figuras generadas
let tiempo = 0; // Variable para animar las figuras con el tiempo

// --- ESFERA CENTRAL (HALO LUMINOSO) ---
let haloPos = { x: 2220, y: 600, z: -200 }; // Posición en el espacio del halo
let haloRadio = 100; // Tamaño base de la esfera-halo

// --- SONIDO ---
let sonido;

function preload() {
  sonido = loadSound("sound/fondo.mp3");
}

function setup() {
  let canvas = createCanvas(700, 700, WEBGL);
  canvas.parent("div-sketch");
  colorMode(HSL, 360, 90, 160);
  noFill();
  strokeCap(ROUND);
  smooth();

  for (let i = 0; i < cantidadFiguras; i++) figuras.push(crearFigura());

  if (sonido && sonido.loop) {
    sonido.setVolume(1);
    sonido.loop();
  }
}

function draw() {
  background(255, 10, 40);
  orbitControl();
  tiempo += 0.0005;

  rotateY(tiempo * 0.6);
  rotateX(sin(tiempo * 0.3) * 0.4);

  for (let f of figuras) {
    f.radioGrande += sin(tiempo * f.pulso + f.fase) * 1.2;
    f.radioChico += cos(tiempo * f.pulso * 4.5 + f.fase) * 0.8;
    f.tono = (f.tono + 1.2) % 360;
    f.rotX += f.rotVelX;
    f.rotY += f.rotVelY;
    f.rotZ += f.rotVelZ;
    if (f.torsionActiva) f.torsion += sin(tiempo * 0.3 + f.fase) * 0.02;

    push();
    translate(f.posX, f.posY, f.posZ);
    rotateX(f.rotX);
    rotateY(f.rotY);
    rotateZ(f.rotZ);

    let mezclaRoja = 0.6 + 0.4 * sin(tiempo + f.fase);
    let tono = f.tono * (1 - mezclaRoja) + 10 * mezclaRoja;
    let brillo = sin(tiempo * f.velocidadBrillo + f.fase) * 0.5 + 0.5;
    let alpha = 0.4 + (1 - 0.4) * brillo;

    strokeWeight(5.2);
    stroke(tono, 90, 70, alpha);

    dibujarForma(f);
    pop();
  }

  push();
  translate(haloPos.x, haloPos.y, haloPos.z);
  let pulso = sin(tiempo * 3) * 0.1 + 1;
  for (let i = 0; i < 3; i++) {
    strokeWeight(2 - i * 0.8);
    stroke(270, 60, 70, 0.15 * (3 - i));
    sphere(haloRadio * pulso * (1 + i * 0.05));
  }
  pop();
}

function crearFigura() {
  return {
    tipo: random(["toroide", "esfera", "cinta", "icosa", "nudo", "espiral"]),
    radioGrande: random(30, 90),
    radioChico: random(200, 900),
    torsion: random(-2, 32),
    torsionActiva: random() > 0.4,
    nivelRuido: random(0.05, 1.1),
    tono: random(200, 340),
    pulso: random(0.2, 1.5),
    fase: random(TWO_PI),
    velocidadBrillo: random(1.5, 4),
    posX: random(-9000, 2400),
    posY: random(-3000, 5000),
    posZ: random(-5000, 4000),
    rotX: random(TWO_PI),
    rotY: random(TWO_PI),
    rotZ: random(TWO_PI),
    rotVelX: random(-0.002, 0.002),
    rotVelY: random(-0.003, 0.003),
    rotVelZ: random(-0.002, 0.002),
  };
}

function dibujarForma(f) {
  if (f.tipo === "toroide") dibujarToroide(f);
  else if (f.tipo === "esfera") dibujarEsfera(f);
  else if (f.tipo === "icosa") dibujarIcosaedro(f);
  else if (f.tipo === "cinta") dibujarCinta(f);
  else if (f.tipo === "nudo") dibujarNudo(f);
  else dibujarEspiralHiperbolica(f);
}

function dibujarToroide(f) {
  let R = f.radioGrande,
    r = f.radioChico,
    torsion = f.torsion,
    ruido = f.nivelRuido;
  for (let i = 0; i <= 60; i += 4) {
    beginShape();
    let u = (i / 60) * TWO_PI;
    for (let j = 0; j <= 40; j += 4) {
      let v = (j / 40) * TWO_PI;
      let n = (sin(u * 3 + v * 2 + tiempo) + 1) / 2;
      let twist = torsion * sin(u * 3 + tiempo) * (1 + n * ruido);
      let Rr = R + n * 190 * ruido;
      let rr = r + n * 40 * ruido;
      vertex(
        (Rr + rr * cos(v + twist)) * cos(u),
        (Rr + rr * cos(v + twist)) * sin(u),
        rr * sin(v + twist)
      );
    }
    endShape();
  }
}

function dibujarEsfera(f) {
  let R = f.radioGrande,
    ruido = f.nivelRuido;
  for (let i = 0; i <= 16; i += 3) {
    beginShape();
    let theta = (i / 36) * TWO_PI;
    for (let j = 0; j <= 36; j += 3) {
      let phi = (j / 36) * TWO_PI;
      let n = (sin(theta * 3 + phi * 2 + tiempo) + 1) / 2;
      let r = R + n * 160 * ruido;
      vertex(
        r * sin(theta) * cos(phi),
        r * sin(theta) * sin(phi),
        r * cos(theta)
      );
    }
    endShape();
  }
}

function dibujarIcosaedro(f) {
  let R = f.radioGrande,
    ruido = f.nivelRuido;
  let t = (1 + sqrt(5)) / 2;
  let v = [
    [-1, t, 0],
    [1, t, 0],
    [-1, -t, 0],
    [1, -t, 0],
    [0, -1, t],
    [0, 1, t],
    [0, -1, -t],
    [0, 1, -t],
    [t, 0, -1],
    [t, 0, 1],
    [-t, 0, -1],
    [-t, 0, 1],
  ];
  beginShape();
  for (let i = 0; i < v.length; i++) {
    let n = (sin(i * 2 + tiempo) + 1) / 2;
    vertex(
      v[i][0] * (R + n * 80 * ruido),
      v[i][1] * (R + n * 180 * ruido),
      v[i][2] * (R + n * 80 * ruido)
    );
  }
  endShape(CLOSE);
}

function dibujarCinta(f) {
  beginShape();
  for (let i = 0; i < 200; i++) {
    let t = map(i, 0, 1200, 0, TWO_PI * 3);
    let n = (sin(t * 3 + tiempo) + 1) / 2;
    let r = 300 + n * 100 * f.nivelRuido;
    vertex(
      cos(t) * r,
      sin(t) * r,
      sin(t * 2 + tiempo * 2) * 100 * f.nivelRuido
    );
  }
  endShape();
}

function dibujarNudo(f) {
  beginShape();
  for (let i = 0; i <= 80; i++) {
    let t = map(i, 0, 80, 0, TWO_PI);
    let n = (sin(t * 5 + tiempo * 1.4) + 1) / 2;
    vertex(
      (f.radioGrande + f.radioChico * 0.05 * cos(3 * t)) * cos(2 * t),
      (f.radioGrande + f.radioChico * 0.05 * cos(3 * t)) * sin(2 * t),
      f.radioChico * 0.05 * sin(3 * t) * (1 + n * f.nivelRuido)
    );
  }
  endShape();
}

function dibujarEspiralHiperbolica(f) {
  beginShape();
  for (let i = 0; i < 1500; i++) {
    let t = i * 0.05;
    let n = sin(t * 22 + tiempo) * f.nivelRuido;
    let x = cos(t) * (f.radioGrande + n * 200);
    let y = sin(t) * (f.radioGrande + n * 200);
    let z = tan(t * 0.2) * 60 * n;
    vertex(x, y, z);
  }
  endShape();
}
