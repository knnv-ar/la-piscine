let tiempo = 0;
let mouse_exploded = false;

function setup() {
  createCanvas(600, 600);
  noFill();
}

function draw() {
  background(0, 35);
  translate(width / 2, height / 2);

  let explosion_factor = mouse_exploded ? 2 : 1;

  push();
  scale(explosion_factor);

  let cantidad = 600;
  let capas = 40;

  for (let j = 0; j < capas; j++) {

    // violeta más suave
    if (j % 5 === 0) {
      stroke(120, 0, 200, 50);
    } else {
      stroke(255, 70);
    }

    beginShape();
    for (let i = 0; i < cantidad; i++) {

      let ang = map(i, 0, cantidad, 0, TWO_PI);

      // ---------- RUIDO BASE ----------
      let baseNoise = noise(i * 0.015, tiempo * 0.01, j * 0.25);

      // ---------- RUIDO FINO → fractal ----------
      let rippleNoise = noise(i * 0.05, j * 0.1, tiempo * 0.2);

      // ---------- NUEVO: RUIDO GRANULAR (alta frecuencia) ----------
      let grainNoise = noise(i * 0.2, j * 0.3, tiempo * 1.2) * 15;

      // ---------- NUEVO: PULSO ORGÁNICO ----------
      let pulse = sin(tiempo * 1.4 + j * 0.2) * 20;

      // ---------- RADIO ----------
      let radio = 
        100 +
        baseNoise * 350 * sin(tiempo * 0.5 + j) +
        rippleNoise * 40 +
        grainNoise +   // NUEVO
        pulse;          // NUEVO

      let x = radio * cos(ang);
      let y = radio * sin(ang) * sin(tiempo * 0.3 + j);

      // -------- DEFORMACIONES --------

      let deform1 = noise(x * 0.004, y * 0.004, tiempo * 0.05) * 240;
      let deform2 = noise(x * 0.01, y * 0.01, tiempo * 0.1) * 40;

      // ---------- NUEVO: MICRO-VIBRACIÓN (temblor) ----------
      let jitter = sin(ang * 20 + tiempo * 5) * 3;

      vertex(
        x + (deform1 + deform2) * sin(ang * 3) + jitter,
        y + (deform1 + deform2) * cos(ang * 3) + jitter
      );
    }
    endShape(CLOSE);
  }

  // SIMETRÍA
  push();
  scale(-1, 1);

  for (let j = 0; j < capas; j++) {

    if (j % 5 === 0) {
      stroke(120, 0, 200, 50);
    } else {
      stroke(255, 70);
    }

    beginShape();
    for (let i = 0; i < cantidad; i++) {

      let ang = map(i, 0, cantidad, 0, TWO_PI);

      let baseNoise = noise(i * 0.015, tiempo * 0.01, j * 0.25);
      let rippleNoise = noise(i * 0.05, j * 0.1, tiempo * 0.2);
      let grainNoise = noise(i * 0.2, j * 0.3, tiempo * 1.2) * 15;
      let pulse = sin(tiempo * 1.4 + j * 0.2) * 20;

      let radio =
        100 +
        baseNoise * 350 * sin(tiempo * 0.5 + j) +
        rippleNoise * 40 +
        grainNoise +
        pulse;

      let x = radio * cos(ang);
      let y = radio * sin(ang) * sin(tiempo * 0.3 + j);

      let deform1 = noise(x * 0.004, y * 0.004, tiempo * 0.05) * 240;
      let deform2 = noise(x * 0.01, y * 0.01, tiempo * 0.1) * 40;

      let jitter = sin(ang * 20 + tiempo * 5) * 3;

      vertex(
        x + (deform1 + deform2) * sin(ang * 3) + jitter,
        y + (deform1 + deform2) * cos(ang * 3) + jitter
      );
    }
    endShape(CLOSE);
  }

  pop();
  pop();

  tiempo += 0.01;
}

function mousePressed() {
  mouse_exploded = !mouse_exploded;
}