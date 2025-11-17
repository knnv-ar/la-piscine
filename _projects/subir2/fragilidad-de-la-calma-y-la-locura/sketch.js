let angulo = 0;
let velocidad = 0.001;
let maxVelocidad = 0.15;
let locura = false;
let tiempoLocura = 0;
let minimoLocuraFrames = 600; // 10 segundos
let boton;
let temblor = 0;
let temblorMax = 10;

// sonidos
let sonidoCalmo, sonidoLocura;
let volCalmo = 0.5, volLocura = 0.0;

// colores 
let coloresLocura = [
  [255, 0, 0],     // rojo
  [255, 120, 0],   // naranja
  [255, 200, 0],   // amarillo fuerte
  [255, 60, 20],   // rojo-anaranjado
  [255, 180, 60]   // amarillo-anaranjado
];
let colorIndex = 0;
let colorActual = [255, 255, 255]; // blanco en calma

function preload() {
  sonidoCalmo = loadSound('sound/calmo.mp3');
  sonidoLocura = loadSound('sound/locura.mp3');
}

function setup() {
 let canvas = createCanvas(600, 600, WEBGL);
 canvas.parent('div-sketch')
  boton = createButton('●');
  boton.position(width/2 - 25, height - 70);
  boton.size(50, 50);
  boton.style('border-radius', '50%');
  boton.style('background-color', 'red');
  boton.style('color', 'white');
  boton.style('font-size', '24px');
  boton.style('box-shadow', '2px 2px 6px #333');
  boton.mousePressed(handleBoton);

  sonidoCalmo.loop();
  sonidoCalmo.setVolume(volCalmo);
}

function draw() {
  // fondo azul muy oscuro
  background(10, 15, 40);

  // luz tipo sol cálido
  ambientLight(100); // más luz
  directionalLight(255, 220, 180, 0.8, -0.6, -0.3);

  if (!locura) {
    // calma
    velocidad = lerp(velocidad, 0.001, 0.02); // retorno progresivo
    temblor = lerp(temblor, 0, 0.05);
    colorActual = [255, 255, 255]; // blanco
    boton.show();

    // sonidos progresivos hasta la calma
    volCalmo = lerp(volCalmo, 0.6, 0.03);
    volLocura = lerp(volLocura, 0.0, 0.03);
    sonidoCalmo.setVolume(volCalmo);
    sonidoLocura.setVolume(volLocura);
    if (!sonidoCalmo.isPlaying()) sonidoCalmo.loop();
    if (sonidoLocura.isPlaying() && volLocura < 0.02) sonidoLocura.stop();

  } else {
    tiempoLocura++;

    // progresión de velocidad 
    if (velocidad < maxVelocidad) {
      velocidad = lerp(velocidad, maxVelocidad, 0.02);
    }

    // temblor progresivo
    if (temblor < temblorMax) {
      temblor = lerp(temblor, temblorMax, 0.02);
    }

    // colores cálidos cambian sincronizados con velocidad
    let cambioColorFrames = int(map(velocidad, 0.001, maxVelocidad, 50, 8));
    if (frameCount % cambioColorFrames === 0) {
      colorIndex = (colorIndex + 1) % coloresLocura.length;
      colorActual = coloresLocura[colorIndex];
    }

    // sonidos progresivos hasta locura
    volCalmo = lerp(volCalmo, 0.0, 0.03);
    volLocura = lerp(volLocura, 0.8, 0.03);
    if (!sonidoLocura.isPlaying()) sonidoLocura.loop();
    sonidoCalmo.setVolume(volCalmo);
    sonidoLocura.setVolume(volLocura);

    // botón oculto durante los primeros 10 segundos 
    if (tiempoLocura < minimoLocuraFrames) {
      boton.hide();
    } else {
      boton.show();
    }
  }

  // temblor de cámara
  translate(random(-temblor, temblor), random(-temblor, temblor), 0);

  // cubo
  push();
  rotateX(angulo);
  rotateY(angulo * 0.7);
  rotateZ(angulo * 0.3);
  stroke(0);
  strokeWeight(2);
  fill(colorActual[0], colorActual[1], colorActual[2]);
  box(150);
  pop();

  angulo += velocidad;
}

function handleBoton() {
  if (!locura) {
    iniciarLocura();
  } else {
    if (tiempoLocura >= minimoLocuraFrames) {
      volverACalma();
    }
  }
}

function iniciarLocura() {
  locura = true;
  tiempoLocura = 0;
  boton.hide();
}

function volverACalma() {
  locura = false;
  tiempoLocura = 0;
}


