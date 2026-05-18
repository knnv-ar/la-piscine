let particulasEscena2 = [];
let estadoEscena2 = "NORMAL";
let limiteDistancia = 550;

let velocidadAtraccion = 0.1;
let fuerzaExplosion = 42;
let velocidadRegreso = 0.08;

function setup() {
  let canvas = createCanvas(690, 500, WEBGL);
  canvas.parent('div-sketch');
  noStroke();

  for (let i = 0; i < 420; i++) {
    let x = random(-limiteDistancia, limiteDistancia);
    let y = random(-limiteDistancia, limiteDistancia);
    let z = random(-limiteDistancia, limiteDistancia);
    particulasEscena2.push({
      x,
      y,
      z,
      vx: random(-1, 1) * 0.5,
      vy: random(-1, 1) * 0.5,
      vz: random(-1, 1) * 0.5,
      tam: random(1, 4),
      posOriginal: createVector(x, y, z),
      velExplosion: createVector(0, 0, 0),
    });
  }
}

function draw() {
  background(10, 50, 80);

  // Control de estados con el mouse
  if (mouseIsPressed) {
    if (estadoEscena2 === "NORMAL" || estadoEscena2 === "REGRESO") {
      iniciarAtraccionEscena2();
    }
  } else {
    if (estadoEscena2 === "ATRAER" || estadoEscena2 === "CENTRO") {
      iniciarExplosionEscena2();
    }
  }

  actualizarMovimientoEscena2();

  let radioCam = 650;
  let camX = cos(frameCount * 0.003) * radioCam;
  let camZ = sin(frameCount * 0.001) * radioCam;
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);
  rotateY(frameCount * 0.002);
  rotateX(frameCount * 0.004);

  ambientLight(80);
  pointLight(255, 255, 255, 0, 0, 500);

  for (let p of particulasEscena2) {
    push();
    translate(p.x, p.y, p.z);
    fill(180, 200, 255);
    sphere(p.tam);
    pop();
  }
}

function iniciarAtraccionEscena2() {
  if (
    estadoEscena2 === "NORMAL" ||
    estadoEscena2 === "REGRESO" ||
    estadoEscena2 === "EXPLOSION"
  ) {
    for (let p of particulasEscena2) {
      p.posOriginal.set(p.x, p.y, p.z);
    }
  }
  estadoEscena2 = "ATRAER";
}

function iniciarExplosionEscena2() {
  estadoEscena2 = "EXPLOSION";

  for (let p of particulasEscena2) {
    let direccion = createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    direccion.normalize();

    p.velExplosion.set(
      direccion.x * fuerzaExplosion,
      direccion.y * fuerzaExplosion,
      direccion.z * fuerzaExplosion
    );

    p.posOriginal.set(p.x, p.y, p.z);
  }
}

function actualizarMovimientoEscena2() {
  for (let p of particulasEscena2) {
    if (estadoEscena2 === "ATRAER") {
      let centro = createVector(0, 0, 0);
      let actual = createVector(p.x, p.y, p.z);
      let diff = p5.Vector.sub(centro, actual);

      if (diff.mag() < 0.8) {
        estadoEscena2 = "CENTRO";
      } else {
        diff.mult(velocidadAtraccion);
        p.x += diff.x;
        p.y += diff.y;
        p.z += diff.z;
      }
    } else if (estadoEscena2 === "EXPLOSION") {
      p.x += p.velExplosion.x;
      p.y += p.velExplosion.y;
      p.z += p.velExplosion.z;

      p.velExplosion.mult(0.95);

      if (p.velExplosion.mag() < 0.5) {
        estadoEscena2 = "REGRESO";
      }
    } else if (estadoEscena2 === "REGRESO") {
      let destino = p.posOriginal.copy();
      let actual = createVector(p.x, p.y, p.z);
      let diff = p5.Vector.sub(destino, actual);

      diff.mult(velocidadRegreso);
      p.x += diff.x;
      p.y += diff.y;
      p.z += diff.z;

      if (diff.mag() < 23) {
        estadoEscena2 = "NORMAL";
      }
    } else if (estadoEscena2 === "NORMAL") {
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      if (abs(p.x) > limiteDistancia) {
        p.vx *= -1;
      }
      if (abs(p.y) > limiteDistancia) {
        p.vy *= -1;
      }
      if (abs(p.z) > limiteDistancia) {
        p.vz *= -1;
      }
    }
  }
}
