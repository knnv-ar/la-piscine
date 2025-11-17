let apolo, dioniso, self, laurel, higuera, sol, luna, triskelion;
let mostrar = "todas";
let aulos, lira, integrado;
let fuente;
let t = 0;
let particulasApolo = [];
let particulasDioniso = [];
let explosiones = [];

function preload() {
  apolo = loadImage("imagenes/ego.png");
  dioniso = loadImage("imagenes/shadow.png");
  self = loadImage("imagenes/self.png");
  laurel = loadImage("imagenes/laurel.png");
  higuera = loadImage("imagenes/higuera.png");
  sol = loadImage("imagenes/sol.png");
  luna = loadImage("imagenes/luna.png");
  triskelion = loadImage("imagenes/triskelion.png");
  fuente = loadFont("fuente/Actalou.ttf");
  lira = loadSound("sonidos/RIPTO - Icarus & Apollo.mp3");
  aulos = loadSound("sonidos/BTS - Dionysus.mp3");
  integrado = loadSound("sonidos/ROSALIA - Divinize.mp3");
}

function setup() {
  createCanvas(700, 700);
  textFont(fuente);
  textSize(20);
  integrado.loop();
}

function draw() {

  // ----------- FONDOS -----------
  push();
  noStroke();
  fill(178, 231, 240); 
  rect(0, 0, 350, 700);
  fill(121, 108, 163); 
  rect(350, 0, 350, 700);
  pop();


  // ----------- PARTICULAS -----------

  if (mostrar === "todas") {
    if (frameCount % 3 === 0) {
      crearParticulaApolo();
      crearParticulaDioniso();
    }
    actualizarParticulasYcolisiones();
    pulso();

  } else if (mostrar === "apolo") {
    if (frameCount % 3 === 0) crearParticulaApolo();
    actualizarParticulasSolo(particulasApolo, 225, 102, 25, 180);

  } else if (mostrar === "dioniso") {
    if (frameCount % 3 === 0) crearParticulaDioniso();
    actualizarParticulasSolo(particulasDioniso, 23, 13, 143, 180);
  }

  // explosiones negras
  dibujarExplosiones();

  // ----------- IMÁGENES -----------
  mostrarHumano();
  mostrarApolo();
  mostrarDioniso();
  
  if (mostrar === "apolo") {
  desaturarMitad("dioniso");
  }
  if (mostrar === "dioniso") {
  desaturarMitad("apolo");
  }
  image(triskelion, 300, 550, 100, 100)

  // ----------- MARCO -----------
  push();
  noFill();
  strokeWeight(4);
  stroke(0);
  rect(0, 0, 700, 700);
  strokeWeight(2);
  line(350, 0, 350, 700);
  pop();
  
}

function mostrarHumano() {
  image(self, 222, 158);
  fill(0);
  textSize(28);
  textAlign(CENTER); 
  text("SELF", 222 + self.width/2, 158 - 15); 
}

function mostrarApolo() {
  image(laurel, 2, 150);
  image(apolo, 2, 250);
  image(sol, 50, 30, 150, 100);
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("EGO", 2 + apolo.width/2, 250 + apolo.height + 5); 
}

function mostrarDioniso() {
  image(higuera, 440, 150);
  image(dioniso, 440, 250);
  image(luna, 500, 30, 150, 100);
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("SHADOW", 440 + dioniso.width/2, 250 + dioniso.height + 5);
}

function pulso() {
  push();
  noStroke();
  t += 0.05;
  let base = 500;
  let ampli = 120;
  let d = base + sin(t) * ampli;

  fill(13, 13, 13, 40);
  ellipse(350, 350, d * 1.3);

  fill(59, 59, 59, 60);
  ellipse(350, 350, d * 0.9);

  fill(105, 105, 105, 90);
  ellipse(350, 350, d * 0.5);
  pop();
}

function pararMusica() {
  integrado.stop();
  aulos.stop();
  lira.stop();
}


function crearParticulaApolo() {
  particulasApolo.push({
    x: random(20, 160),
    y: random(200, 500),
    vx: random(0.5, 1.5),  
    vy: random(-0.3, 0.3)
  });
}

function crearParticulaDioniso() {
  particulasDioniso.push({
    x: random(540, 680),
    y: random(200, 500),
    vx: random(-4, -1),
    vy: random(-2, 2)
  });
}

function actualizarParticulasYcolisiones() {

  // mover y dibujar naranjas
  for (let i = particulasApolo.length - 1; i >= 0; i--) {
    let p = particulasApolo[i];
    p.x += p.vx;
    p.y += p.vy;

    // dibujar
    noStroke();
    fill(225, 102, 25, 180);
    ellipse(p.x, p.y, 10);

    // colisión con azules
    for (let j = particulasDioniso.length - 1; j >= 0; j--) {
      let d = dist(p.x, p.y, particulasDioniso[j].x, particulasDioniso[j].y);
      if (d < 12) {
        // crear explosión negra
        explosiones.push({
          x: (p.x + particulasDioniso[j].x) / 2,
          y: (p.y + particulasDioniso[j].y) / 2,
          r: 5,
          vida: 20
        });

        // eliminar ambas partículas
        particulasApolo.splice(i, 1);
        particulasDioniso.splice(j, 1);
        break;
      }
    }
  }

  // mover y dibujar azules
  for (let i = particulasDioniso.length - 1; i >= 0; i--) {
    let p = particulasDioniso[i];
    p.x += p.vx;
    p.y += p.vy;

    fill(23, 13, 143, 180);
    ellipse(p.x, p.y, 10);
  }
}


function actualizarParticulasSolo(lista, r, g, b) {
  for (let i = lista.length - 1; i >= 0; i--) {
    let p = lista[i];
    p.x += p.vx;
    p.y += p.vy;

    fill(r, g, b, 180);
    ellipse(p.x, p.y, 10);
  }
}

function dibujarExplosiones() {
  for (let i = explosiones.length - 1; i >= 0; i--) {
    let e = explosiones[i];
    e.r += 2;
    e.vida--;

    fill(0, map(e.vida, 0, 20, 0, 200));
    noStroke();
    ellipse(e.x, e.y, e.r);

    if (e.vida <= 0) explosiones.splice(i, 1);
  }
}
function desaturarMitad(lado) {
  push();
  noStroke();
  fill(0, 0, 0, 120);

  if (lado === "apolo") {
    rect(0, 0, 350, 700);
  } else if (lado === "dioniso") {
    rect(350, 0, 350, 700);
  }
  pop();
}

function keyPressed() {

  if (key === 'A' || key === 'a') {
    mostrar = "apolo";
    pararMusica();
    lira.play();
  }

  if (key === 'D' || key === 'd') {
    mostrar = "dioniso";
    pararMusica();
    aulos.play();
  }

  if (key === 'S' || key === 's') {
    mostrar = "todas";
    pararMusica();
    integrado.loop();
  }
}