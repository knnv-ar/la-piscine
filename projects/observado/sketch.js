var posZ = 210;
let cam;
let delta = 0.01;
let pointLightOn = true;
let parpadeo = false;
let blinkStartTime = 0;
let blinkDuration = 200;

//  arreglo para guardar los ojos adicionales
let ojosExtras = [];
// control de repetición mientras se mantiene apretada la tecla
let agregandoOjos = false;
let ultimoOjoTiempo = 0;
let intervaloOjos = 100; // milisegundos entre generación de pares

let moviendoAdelante = false;
let moviendoAtras = false;
let velocidadZ = 2; // velocidad del movimiento continuo

function setup() {
  let canvas = createCanvas(600, 500, WEBGL)
  canvas.parent('div-sketch')
  cam = createCamera();
  cam.pan(-0.8)
  document.oncontextmenu = function () {
    return false;
  };
}

function draw() {
  background(50, 50, 50);
  noStroke();
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  
  specularMaterial(255);

  if (pointLightOn) {
    pointLight(5,56,255, locX, locY, posZ);
    pointLight(255,255,255, locX, locY, posZ);
  }
  
  specularMaterial(255);
  
  if (parpadeo) {
    let elapsed = millis() - blinkStartTime;
    if (elapsed < blinkDuration) {
      pointLightOn = !pointLightOn;
    } else {
      parpadeo = false;
    }
  }
  
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      delta = -0.01
    } else if (mouseButton === RIGHT) {
      delta = 0.01
    } else if (mouseButton === CENTER) {
      delta = 0           
    }
  }
  
  if (moviendoAdelante) posZ += velocidadZ;
  if (moviendoAtras) posZ -= velocidadZ;
  
  // pan de la camara  'delta'
  cam.pan(delta);
  
  // par de ojos
  push();
  translate(-60, -100, 0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  sphere(45);
  pop();
  
  push();
  translate(60, -100, 0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  sphere(45);
  pop();
  
  for (let i = ojosExtras.length - 1; i >= 0; i--) {
    const o = ojosExtras[i];
    const transcurrido = millis() - o.nacio;
    if (transcurrido > o.tiempoVida) {
      ojosExtras.splice(i, 1);
      continue;
    }

    let escala = map(o.z, -800, 400, 0.3, 1.0);
    escala = constrain(escala, 0.2, 1.0);
    let alpha = map(transcurrido, 0, o.tiempoVida, 255, 0);
    alpha = constrain(alpha, 0, 255);

    push();
    translate(o.x1, o.y, o.z);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    ambientMaterial(255, 255, 255, alpha);
    sphere(45 * escala);
    pop();

    push();
    translate(o.x2, o.y, o.z);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.02);
    ambientMaterial(255, 255, 255, alpha);
    sphere(45 * escala);
    pop();
  }

  if (agregandoOjos && millis() - ultimoOjoTiempo > intervaloOjos) {
    agregarParDeOjos();
    ultimoOjoTiempo = millis();
  }
}

function keyPressed() {
  const tecla = key.toLowerCase();

  if (tecla === 'a') {
    moviendoAdelante = true;
  } else if (tecla === 'd') {
    moviendoAtras = true;
  } else if (tecla === 'b') {
    parpadeo = true;
    inicioParpadeo = millis();
  } else if (tecla === 'o') {
    agregandoOjos = true;
    ultimoOjoTiempo = millis();
    agregarParDeOjos();
  }
}

function keyReleased() {
  const tecla = key.toLowerCase();
  if (tecla === 'a') moviendoAdelante = false;
  if (tecla === 'd') moviendoAtras = false;
  if (tecla === 'o') agregandoOjos = false;
}

// crear un par de ojos aleatorios, también en profundidad y con vida útil
function agregarParDeOjos() {
  let y = random(-500, 500);
  let x = random(-400, 400);
  let z = random(-1000, 1000);
  let separacion = 100;
  let tiempoVida = random(10000, 20000);
  ojosExtras.push({
    x1: x - separacion / 2,
    x2: x + separacion / 2,
    y: y,
    z: z,
    nacio: millis(),
    tiempoVida: tiempoVida
  });
}
