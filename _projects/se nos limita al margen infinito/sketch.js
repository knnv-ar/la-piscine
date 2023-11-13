let puntos = [];

function preload() {
  ambient = loadSound("soundtrack.mp3");
}

function setup() {
  let canvas = createCanvas(600, 500, WEBGL);
 canvas.parent('div-sketch');

  background(0);
  // Se loopea el audio de fondo
  ambient.play();
  ambient.loop();

  // Llama a las funciones Loaded cuando sus respectivos videos terminan de cargar:

  // ---------------------------------------------------------------------------------
  vid = createVideo("feedback.mp4", vidLoaded);
  vid.size(320, 240);
  vid.hide();
  vid.elt.muted = true;

  fbAzul = createVideo("fbAzul.mp4", fbAzulLoaded);
  fbAzul.size(320, 240);
  fbAzul.hide();
  fbAzul.elt.muted = true;

  fidbak = createVideo("fidbak.mp4", fidbakLoaded);
  fidbak.size(320, 240);
  fidbak.hide();
  fidbak.elt.muted = true;
  // ---------------------------------------------------------------------------------

  // Creo un gráfico que es como generar un nuevo lienzo
  grafico = createGraphics(200, 200);
  grafico.background(255);
}

function vidLoaded() {
  vid.play();
  vid.loop();
}

function fbAzulLoaded() {
  fbAzul.play();
  fbAzul.loop();
}

function fidbakLoaded() {
  fidbak.play();
  fidbak.loop();
}
function draw() {
  // Dibuja puntos posicionados aleatoriamente en escala de grises...
  let x = random(width * 2) - width; // Posición x aleatoria fuera del lienzo
  let y = random(height * 2) - height; // Posición y aleatoria fuera del lienzo
  let z = random(-200, 200); // Posición z aleatoria
  let gris = random(0, 255); // Valor de gris aleatorio

  puntos.push({ x: x, y: y, z: z, gris: gris }); // Almacenar el punto en el array

  background(0);
  orbitControl();

  // Dibujar los puntos almacenados en el array en sus respectivas posiciones, las guardadas en el array
  for (let i = 0; i < puntos.length; i++) {
    let punto = puntos[i];
    fill(punto.gris);
    stroke(random(100, 255));
    point(punto.x, punto.y, punto.z);
  }

  // Dibujar la esfera 1
  push();
  noStroke();
  texture(vid);
  translate(-70, -80, 200);
  rotateY(3);
  sphere(60);
  pop();

  // Dibujar la esfera 2 (la de atrás jaja)
  push();
  noStroke();
  texture(fidbak);
  translate(-330, -100, -160);
  rotateY(3);
  sphere(80);
  pop();

  // Dibuja sphere con boxs alrededor
  noStroke();
  texture(fbAzul);
  push();
  translate(80, 0, -90);
  box(40, 200);
  sphere(70);
  translate(80, 0, 0);
  box(10, 100);
  translate(-160, 0, 0);
  box(10, 100);
  pop();

  // esfera 3 abajo
  push();
  translate(240, 270, -200);
  rotateX(3)
  noStroke();
  texture(vid);
  sphere(60);
  pop();
}
