/*Aleph: Es una obra de arte generativo donde las figuran rebotan por todo el lienzo y dibujan sobre él. Podés mantener el click izquierdo y a su vez alejar o acercar las figuras mientras se mueven para cambiar su esparcimiento. 
Y además, para poder visualizarlas en mayor detalle, manetené el click derecho para limpar el canvas, así las figuras aún se moverán pero no dejarán la estela de movimiento, mientras mantenes el click derecho también  podes acercarte o alejarte de las figuras para apreciarlas.*/

let esferas = [];
let textures = [];
let estrellas = [];
let figuras = [];
let limpiando = false;
let sonido;


function preload() {
  textures[0] = loadImage("imagenes/img1.webp");
  textures[1] = loadImage("imagenes/img2.webp");
  textures[2] = loadImage("imagenes/img3.webp");
  textures[3] = loadImage("imagenes/img4.webp");
  sonido = loadSound("sonido/sonido-ambiente.mp3");
}

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');

    userStartAudio().then(() => {

    //Canción principal
    if (!sonido.isPlaying()) {
      sonido.loop();
      sonido.setVolume(0.5);
    }
  });
  
  // Esferas rebotantes
  for (let i = 0; i < 4; i++) {
    esferas.push({
      x: random(-300, 300),
      y: random(-200, 200),
      z: random(-300, 300),
      tam: 60,
      velX: random(1.5, 3) * (random() < 0.5 ? -1 : 1),
      velY: random(1.5, 3) * (random() < 0.5 ? -1 : 1),
      velZ: random(1.5, 3) * (random() < 0.5 ? -1 : 1),
      rotX: 0,
      rotY: 0
    });
  }

  // Figuras rebotantes
  let tipos = ["cruz", "estrella", "piramideMultiple", "cuboEscalonado", "cruzDoble", "torresSuperpuestas"];
  for (let i = 0; i < 6; i++) {
    figuras.push({
      tipo: tipos[i],
      x: random(-300, 300),
      y: random(-200, 200),
      z: random(-300, 300),
      tam: random(10, 25),
      velX: random(1, 2) * (random() < 0.5 ? -1 : 1),
      velY: random(1, 2) * (random() < 0.5 ? -1 : 1),
      velZ: random(1, 2) * (random() < 0.5 ? -1 : 1),
      rotX: 0,
      rotY: 0
    });
  }

  // Estrellas de fondo
  for (let i = 0; i < 300; i++) {
    estrellas.push({
      x: random(-800, 800),
      y: random(-600, 600),
      z: random(-800, 800),
      r: random(1, 3)
    });
  }
}

function draw() {
  // Siempre permite mover y acercar/alejar
  orbitControl();

  // Si está limpiando, fondo liso
  if (limpiando) {
    background(5, 20, 40);
  }

  // Luces
  pointLight(100, 200, 255, 0, 0, 500);
  ambientLight(50, 100, 150);

  // Dibujar estrellas
  noStroke();
  fill(100, 200, 255, 180);
  for (let e of estrellas) {
    push();
    translate(e.x, e.y, e.z);
    sphere(e.r);
    pop();
  }

  // Actualizar esferas
  for (let e of esferas) {
    e.x += e.velX;
    e.y += e.velY;
    e.z += e.velZ;
    e.rotX += 0.01;
    e.rotY += 0.01;

    if (e.x > 400 || e.x < -400) e.velX *= -1;
    if (e.y > 250 || e.y < -250) e.velY *= -1;
    if (e.z > 400 || e.z < -400) e.velZ *= -1;
  }

  // Dibujar esferas
  for (let i = 0; i < esferas.length; i++) {
    let e = esferas[i];
    push();
    translate(e.x, e.y, e.z);
    rotateX(e.rotX);
    rotateY(e.rotY);
    texture(textures[i]);
    noStroke();
    sphere(e.tam);
    pop();
  }

  // Actualizar y dibujar figuras
  stroke(100, 200, 255);
  noFill();

  for (let f of figuras) {
    f.x += f.velX;
    f.y += f.velY;
    f.z += f.velZ;
    if (f.x > 400 || f.x < -400) f.velX *= -1;
    if (f.y > 250 || f.y < -250) f.velY *= -1;
    if (f.z > 400 || f.z < -400) f.velZ *= -1;
    f.rotX += 0.02;
    f.rotY += 0.02;

    push();
    translate(f.x, f.y, f.z);
    rotateX(f.rotX);
    rotateY(f.rotY);

    switch (f.tipo) {
      case "cruz":
        box(f.tam, f.tam * 4, f.tam * 4);
        box(f.tam * 4, f.tam, f.tam * 4);
        box(f.tam * 5, f.tam * 5, f.tam);
        break;
      case "estrella":
        cylinder(f.tam * 0.2, f.tam * 4);
        push(); rotateX(HALF_PI); cylinder(f.tam * 0.2, f.tam * 4); pop();
        push(); rotateY(HALF_PI); cylinder(f.tam * 0.2, f.tam * 4); pop();
        break;
      case "piramideMultiple":
        for (let j = 0; j < 3; j++) {
          push(); translate(0, -j * f.tam * 0.8, 0); cone(f.tam - j * 5, f.tam); pop();
        }
        break;
      case "cuboEscalonado":
        for (let j = 0; j < 3; j++) {
          push(); translate(0, -j * f.tam * 0.6, 0); box(f.tam - j * 5); pop();
        }
        break;
      case "cruzDoble":
        for (let j = 0; j < 2; j++) {
          push(); rotateY(j * PI / 4);
          box(f.tam, f.tam * 4, f.tam * 4);
          box(f.tam * 4, f.tam, f.tam * 4);
          pop();
        }
        break;
      case "torresSuperpuestas":
        for (let j = 0; j < 3; j++) {
          push(); translate(0, -j * f.tam, 0); cylinder(f.tam * 0.5, f.tam * 1.5); pop();
        }
        break;
    }
    pop();
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    limpiando = true;   // Click derecho activa modo limpiar
  } else if (mouseButton === LEFT) {
    limpiando = false;  // Click izquierdo = modo dibujo normal
  }
}

function mouseReleased() {
  if (mouseButton === RIGHT) {
    limpiando = false;  // Soltar derecho vuelve al modo dibujo
  }
}
