// Agregar sonido ->cuando me alejo el sonido se escucha mas de lejos

// USA AWSD PARA MOVERTE 
let velMov = 500; // velocidad de la camara

// posiciones de la cámara
let movX = 0;
let movY = 0;
let movZ = 700; // z profundidad

// dirección hacia donde mira
let dirX = 0;
let dirY = 0;
let dirZ = -1; //
let invertido = false;

let angulo = 0;
let cambiarCamara = false; //-> esta en false entonces si puedo mover la cam

let texCielo, imgOjo;
let sonido;

// cargo las imagenes y sonido
function preload() {
  texCielo = loadImage("clouds-3422258.jpg");
  imgOjo = loadImage("download (18).jpg");
  sonido = loadSound("bellatrix (1).mp3");
}

function setup() {
  createCanvas(800, 600, WEBGL); // ancho y alto y vamos a trabajar con 3d
  textureWrap(REPEAT); // indica que las texturas se repitan para q no se distorcione
  noCursor();
  perspective(PI / 3.5, width / height, 0.1, 10000); // pi/3.5 que tan abierta esta la camara , width / height pantalla, 0.1 lo mas cerca q lo podemos ver, 10000 lo max de lejos

  mov = createVector(0, 0, 700); //inicializa la posicion de la cam
  nMov = createVector(0, 0, -1); // dirije la mirada de la camara

  sonido.loop(); //sonido en bucle
  sonido.setVolume(0.5); //fija el volumen inicial
 
}

function draw() {
  background(0);

  if (!cambiarCamara) movimiento(); // Si no está activado el cambio de cámara, entonces ejecutá la función movimiento()

  //ajustarVolumen(); -> esto es una funcion q todavia no hice

  // cielo envolvente
  push();
  noStroke();


  texture(texCielo); // aplica la imagen texCielo como textura
  sphere(1000); // dibuja una esfera gigante (radio 1000) que te envuelve: al estar la textura aplicada y con textureWrap(REPEAT) permite que la imagen se vea como cielo envolvente.
  pop();

  mostrarOjo(); // pone la img ojo
  mostrarCaosRojo(); // lo mismo para las lineas rojas
}

function mostrarOjo() {
  push(); // aíslan transformaciones.
  translate(0, 0, -400); // Se mueve 400 unidades hacia “adelante”, o sea, más profundo en la escena, alejándose de la cámara.
  noStroke();
  ambientLight(255);
  texture(imgOjo);
  plane(400, 400); // ahi va a estar la imagen
  pop();
}

function mostrarCaosRojo() {
  push();
  translate(700, -80, 0); // mové el objeto 700 a la derecha (X), 80 hacia arriba (Y) y sin cambiar profundidad (Z)
  rotateY(PI); // lo girás 180 grados en Y.
  strokeWeight(1);
  dibujaCaosRojo();
  pop();
}

function dibujaCaosRojo() {
  if (invertido) {
    stroke(180, 70, 255); // 
  } else {
    stroke(255, 0, 0);
  }
  noFill();

  let tiempo = frameCount * 0.02; // más simple y directo, cada frame sube un poquito

  for (let i = 0; i < 45; i++) {
    // loop se repite 45 veces, sin y cos le da movimiento circular y fluido
    let x = sin(tiempo * i * 0.5) * random(-100, 100); // tiempo * i * 0.5** cuanto más grande es *i*, más se desfasará el movimiento  random(-100,100)`  agarra una posicion random
    let y = cos(tiempo * i * 0.5) * random(-90, 80);
    //
    beginShape(); //traza las lineas
    //lineas del medio
    for (let j = 0; j < 10; j++) {
      let n = random(TWO_PI * 2); //devuelve un número random entre 0 y 720° en radianes 360x2
      let largo = random(50, 333); // agarra un largo random
      let nx = x + cos(n) * largo;
      let ny = y + sin(n) * largo;
      vertex(nx, ny); // dibuja x y y
    }
    endShape(); // cerrás la forma.
    // dibuja todas las puntas unidas.
  } 
}

function movimiento() {
  // si apretás A, girás la cámara para la izquierda bajando el ángulo
  if (keyIsDown(65)) angulo -= 0.05; // A

  // si apretás D, girás para la derecha subiendo el ángulo
  if (keyIsDown(68)) angulo += 0.05; // D

  // recalculás la dirección según el ángulo actual
  // dirX y dirZ son la dirección adelante/atrás según donde estés mirando
  dirX = Math.sin(angulo); // componente X el sin hace q se mueva suavemente y circular
  dirY = 0; // no te movés en Y (vertical)
  dirZ = -Math.cos(angulo); // componente Z

  let paso = velMov / frameRate(); // paso = cuánto avanza por frame según los cuadros por segundo

  // si apretás W, avanzás para adelante 
  if (keyIsDown(87)) {
    movX += dirX * paso; // movés en X
    movZ += dirZ * paso; // movés en Z
  }

  // si apretás S, vas para atrás
  if (keyIsDown(83)) {
    movX -= dirX * paso; // movés para el otro lado
    movZ -= dirZ * paso;
  }

// mirarX/Y/Z es el punto hacia donde la cámara está mirando
let mirarX = movX + dirX; // posición actual + dirección
let mirarY = movY;        // misma altura
let mirarZ = movZ + dirZ; // posición actual + dirección en Z

 // seteás la cámara con posición + punto de mirada 
camera(
  movX,
  movY + 100,
  movZ,       // posición de la cámara
  mirarX,
  mirarY + 100,
  mirarZ      // a dónde mira
);
}
function keyPressed() {
  if (key === 'q' || key === 'Q') {
    invertido = !invertido;

    if (invertido) {
      texCielo.filter(INVERT); // 
    } else {
      texCielo.filter(INVERT); // 
    }
  }
}