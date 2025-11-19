let estrellas = [];
let fondo;
let audio1, audio2;
let seguirMouse = false;

function preload() {
  fondo = loadImage("imagenes/galaxy.jfif"); 
  audio1 = loadSound("audio/Espacio.mp3");
  audio2 = loadSound("audio/Brillitos.mp3");
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
  audio1.loop();
  audio2.stop();
  for (let i = 0; i < 100; i++) {
    estrellas.push(new Estrella());
  }
}

function draw() {
  background(0);

  // Fondo con imagen
  push();
  translate(0, 0, -300);    
  noStroke();
  texture(fondo);           
  plane(1000, 1000);        
  pop();
  

  rotateY(frameCount * 0.002);

  let mx = map(mouseX, 0, width, -200, 200);
  let my = map(mouseY, 0, height, -200, 200);

  for (let e of estrellas) {
    e.mover(mx, my);
    e.mostrar();
  }

  resetMatrix();
  translate(-width/2 + 10, -height/2 + 20);
  fill(255);
  textSize(12);
  text("Modo: " + (seguirMouse ? "Siguiendo" : "Flotando") + " (click para cambiar)", 0, 0);
}

//Función que hace que las estrellas sigan al mouse
function mousePressed() {
  seguirMouse = !seguirMouse;
   if (seguirMouse) {
    // Cambiar a audio2
    if (audio1.isPlaying()) audio1.stop();
    if (!audio2.isPlaying()) audio2.loop();
  } else {
    if (audio2.isPlaying()) audio2.stop();
    if (!audio1.isPlaying()) audio1.loop();
  if (!seguirMouse) {
    for (let e of estrellas) {
      e.vel = p5.Vector.random3D().mult(random(0.5, 2));
    }
  }
}
}

class Estrella {
  constructor() {
    this.pos = createVector(random(-200, 200), random(-200, 200), random(-200, 200));
    this.vel = p5.Vector.random3D().mult(1);
    this.tam = random(4, 10);
  }

  mover(mx, my) {
    if (seguirMouse) {
      let objetivo = createVector(mx, my, 0);
      let direccion = p5.Vector.sub(objetivo, this.pos);
      direccion.normalize();
      direccion.mult(0.6);
      this.vel.add(direccion);
    }

    this.pos.add(this.vel);
    this.vel.limit(6);

    if (abs(this.pos.x) > 200) this.vel.x *= -1;
    if (abs(this.pos.y) > 200) this.vel.y *= -1;
    if (abs(this.pos.z) > 200) this.vel.z *= -1;
  }

  mostrar() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill(255, 255, 150);
    this.dibujarEstrella(0, 0, this.tam, this.tam / 2, 5);
    pop();
  }

  dibujarEstrella(x, y, radio1, radio2, nPicos) {
    let angulo = TWO_PI / nPicos;
    let mitadAng = angulo / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angulo) {
      vertex(x + cos(a) * radio1, y + sin(a) * radio1);
      vertex(x + cos(a + mitadAng) * radio2, y + sin(a + mitadAng) * radio2);
    }
    endShape(CLOSE);
  }
}
