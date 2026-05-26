let angle = 2;
let angleRotate = 4;

var img1, img2;
var sonidojan;
let cam; // Variable para la webcam

function preload() {
  img1 = loadImage("imagenes/1.jpg");
  img2 = loadImage("imagenes/2.jpg");
  sonidojan = loadSound("sonidojan.mp3");
}

function setup() {
  let canvas = createCanvas(1512, 1012, WEBGL);
  canvas.parent('div-sketch');
  sonidojan.loop();
  
  // Inicializa la captura de la webcam
  cam = createCapture(VIDEO);
  cam.size(712, 712);
  cam.hide(); // Oculta la captura del video en la pantalla principal
}

function draw() {
  background(0);
  var sonidojanRate = map(mouseX, 0, width, 2, -1);
  sonidojan.rate(sonidojanRate);
  
  // ESFERA NEGRA
  push();
  angle += radians(0.5); // Rotación más lenta
  for (let a = 0; a < radians(360); a += radians(500)) {
    noStroke();
    fill(0);
    texture(img1);
    translate(0, 0, 0);
    rotateX(frameCount * 0.0001); // Rotación más lenta en el eje X
    rotateY(frameCount * 0.01);   // Rotación más lenta en el eje Y
    rotateZ(frameCount * 0.0001); // Rotación más lenta en el eje Z
    sphere(150); // Tamaño de la esfera reducido

    push();
    fill(255);
    translate(0, 0, 0);
    rotate(angle);
    star(30, mouseX, mouseY, 10, 200);
    pop();

    push();
    fill(255);
    translate(0, 0, 0);
    rotate(-angle);
    star(0, mouseX, mouseY, 10, 200);
    pop();
  }
  pop();
  
  // ESFERA BLANCA CON WEBCAM
  push();
  angle += radians(0.5); // Rotación más lenta
  for (let a = 0; a < radians(360); a += radians(5000)) {
    noStroke();
    fill(0);
    texture(cam); // Aplica la textura de la webcam
    translate(0, 0, 0);
    rotateX(frameCount * 0.002); // Rotación más lenta en el eje X
    rotateY(frameCount * 0.02);  // Rotación más lenta en el eje Y
    rotateZ(frameCount * 0.02);  // Rotación más lenta en el eje Z
    sphere(200); // Tamaño de la esfera reducido

    push();
    fill(random(255), random(255), random(255));
    translate(0, 0, 0);
    rotate(angle);
    star(30, mouseX, mouseY, 10, 200);
    pop();

    push();
    fill(random(255), random(255), random(255));
    translate(0, 0, 0);
    rotate(-angle);
    star(0, mouseX, mouseY, 10, 200);
    pop();
  }
  pop();
}

// Función para dibujar las estrellas
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Pausa del sonido
function keyPressed() {
  if (key == "p") {
    sonidojan.pause();
  }
  if (key == " ") {
    sonidojan.loop();
  }
}



// ==========================================
// Código consolidado desde funciones.js
// ==========================================

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 5;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
   endShape(CLOSE);
}