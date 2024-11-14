let figuras = [];
let dentroDeLaHabitacion = false;
let puertaPos = { x: 0, y: 200, z: 300 };
let cuboExterior = true;
let velocidadAumentada = false;
let sonidoVoz, fondo, textura, reverb;
let colores;

function preload() {
  sonidoVoz = loadSound("voz.wav"); //  voz 
  textura = loadImage("textura.jpg"); // la textura del cubo exterior
  fondo = loadImage("fondo.jpg"); //  fondo 
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  userStartAudio(); // AUDIOO activ0 después de una acción 
  
  reverb = new p5.Reverb();
  reverb.drywet(0.5); 
  
  colores = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 70, 0),
    color(0, 80, 255)
  ];
  

  //  figuras adicionales con tamaños y velocidades aleatorias
  for (let i = 0; i < 6; i++) {
    let tamano = random(20, 80);
    figuras.push(new Figura(random(-200, 200), random(-150, 150), random(-200, 200), tamano, random(0.5, 2), colores[i % colores.length], i));
  }
}

function draw() {
  background(0); // Color de fondo básico para iniciar

  // el fondo está cargado, lo muestra fuera de la habitación
  if (!dentroDeLaHabitacion && fondo) {
    push();
    texture(fondo);
    plane(width, height);
    pop();
  }

  orbitControl();

  if (dentroDeLaHabitacion) {
    dibujarHabitacion();
    for (let figura of figuras) {
      figura.mover();
      figura.mostrar();
    }
  } else {
    dibujarCuboExterior();
  }
}
function dibujarHabitacion() {
  push();
  stroke(255); // líneas visibles para marcar los límites de la habitación
  noFill();
  
  //  fondo
  push();
  translate(0, 0, -300);
  box(600, 600, 1); // trasera con borde pero sin relleno
  pop();

  //  laterales y techo
  push();
  translate(300, 0, 0);
  rotateY(HALF_PI);
  box(600, 600, 1); 
  pop();
  
  push();
  translate(-300, 0, 0);
  rotateY(HALF_PI);
  box(600, 600, 1); 
  pop();

  push();
  translate(0, -300, 0);
  rotateX(HALF_PI);
  box(600, 600, 1); 
  pop();
  
  push();
  translate(0, 300, 0);
  rotateX(HALF_PI);
  box(600, 600, 1); 
  pop();

  pop();
}

  function dibujarCuboExterior() {
    push();
    stroke(150);
    texture(textura); //  textura en el cubo exterior
    box(600);
    
    //  la puerta
    fill(0, 0, 0); 
    translate(puertaPos.x, puertaPos.y, 301);
    plane(100, 200); 
    pop();}

//  clic para entrar en la habitación
function mousePressed() {
  let d = dist(mouseX - width / 2, mouseY - height / 2, puertaPos.x, puertaPos.y);
  if (!dentroDeLaHabitacion && d < 50) {
    dentroDeLaHabitacion = true;
    cuboExterior = false;
  } else {
    velocidadAumentada = true; //  la velocidad cuando se mantiene presionado el mouse
  }
}

function mouseReleased() {
  velocidadAumentada = false; // restaura la velocidad cuando se suelta el mouse
}

class Figura {
  constructor(x, y, z, tamano, velocidad, color, id) {
    this.pos = createVector(x, y, z);
    this.tamano = tamano;
    this.velInicial = velocidad;
    this.vel = createVector(random(-velocidad, velocidad), random(-velocidad, velocidad), random(-velocidad, velocidad));
    this.color = color;
    this.forma = int(random(3)); 
    this.id = id;

    //  copia del sonido de voz para cada figura
    this.sonido = sonidoVoz;

    this.reverb = new p5.Reverb();
    this.reverb.process(this.sonido, 1.5, 3); // reverb a cada sonido
  }

  mover() {
    let velocidad = velocidadAumentada ? this.velInicial * 9.5 : this.velInicial;
    this.vel.setMag(velocidad);

    this.pos.add(this.vel);

    let colision = false;
    if (this.pos.x > 300 - this.tamano / 2 || this.pos.x < -300 + this.tamano / 2) {
      this.vel.x *= -1;
      colision = true;
    }
    if (this.pos.y > 300 - this.tamano / 2 || this.pos.y < -300 + this.tamano / 2) {
      this.vel.y *= -1;
      colision = true;
    }
    if (this.pos.z > 300 - this.tamano / 2 || this.pos.z < -300 + this.tamano / 2) {
      this.vel.z *= -1;
      colision = true;
    }

    if (colision) {
      this.sonido.rate(1 + this.id * 0.2); //  el pitch basado en el ID 
      this.sonido.play(); // play del sonido con pitch modificado
    }
  }

  mostrar() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(this.color);
    noStroke();
    
    if (this.forma == 0) {
      box(this.tamano);
    } else if (this.forma == 1) {
      sphere(this.tamano / 2);
    } else {
      cone(this.tamano / 2, this.tamano);
    }
    
    pop();
  }
}