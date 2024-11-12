let img;
let img2;
let tamanio = 40;
let crecimiento = false;
let lineY = 429;
let lineAY = 429;
let puntos = [];

// variables izq arriba
let dx1 = 127;
let dy1 = 418;
let dx2 = 200;
let dy2 = 288;
let dx3 = 170;
let dy3 = 351;
let dx4 = 194;
let dy4 = 97;
// variables der arriba
let ix1 = 224;
let iy1 = 25;
let ix2 = 234;
let iy2 = 232;
let ix3 = 253;
let iy3 = 330;
let ix4 = 291;
let iy4 = 412;
// variables sup izq
let sx1 = 194;
let sy1 = 97;
let sx2 = 203;
let sy2 = 86;
let sx3 = 202;
let sy3 = 91;
let sx4 = 208;
let sy4 = 75;
// variables sup der
let supx1 = 213;
let supy1 = 20;
let supx2 = 217;
let supy2 = 40;
let supx3 = 221;
let supy3 = 35;
let supx4 = 224;
let supy4 = 25;
// variables izq abajo
let izqx1 = 127;
let izqy1 = 418;
let izqx2 = 151;
let izqy2 = 443;
let izqx3 = 165;
let izqy3 = 463;
let izqx4 = 177;
let izqy4 = 485;
// variables der abajo
let derx1 = 291;
let dery1 = 412;
let derx2 = 280;
let dery2 = 441;
let derx3 = 266;
let dery3 = 460;
let derx4 = 253;
let dery4 = 485;

function preload() {
  img = loadImage("img/micro.png"); 
  img2 = loadImage("img/microcito.png"); 
sound = loadSound("img/bichitos.mp3");
}

function setup() {
  createCanvas(400, 534);
  background(117, 170, 174);
  sound.loop();
}

function draw() {
  if (keyIsPressed) {
    if (key == "a" || key == "A") {
      background(117, 170, 174);
        strokeWeight(2);
      noFill()
  bezier(dx1, dy1, dx2, dy2, dx3, dy3, dx4, dy4);
  bezier(ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4);
  bezier(derx1, dery1, derx2, dery2, derx3, dery3, derx4, dery4);
  bezier(izqx1, izqy1, izqx2, izqy2, izqx3, izqy3, izqx4, izqy4);
  bezier(sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4);
  bezier(supx1, supy1, supx2, supy2, supx3, supy3, supx4, supy4);
    } else {
      image(img, 0, 0, 400, 534);
    }
  }
  
  if (mouseIsPressed) {
    image(img2, 0, 0, 400, 534);
  }
// Dibujar líneas desde los lados hacia el centro
  for (let y = 0; y <= height; y += 5) {
    let weight = map(y, 0, height, 0, 1);
    strokeWeight(weight);
    stroke(40,89,147);
    // Línea desde la izquierda
    line(0, y,200, y);
    // Línea desde la derecha
    line(width, y, 200, y);
  }

  
  // Oscilación izq
  dx2 = 151 + (100 - (200 - 151)) * sin(frameCount * 0.05);
  dx3 = 165 + (100 - (200 - 165)) * sin(frameCount * 0.05);
  
  // Oscilación izq baja
  izqx2 = 151 + (100 - (200 - 151)) * sin(frameCount * 0.05);
  izqx3 = 165 + (100 - (200 - 165)) * sin(frameCount * 0.05);
  
  // Oscilación derecha
  ix2 = 234 + (100 - (234 - 200)) * sin(frameCount * 0.05 + PI / 2);
  ix3 = 253 + (100 - (253 - 200)) * sin(frameCount * 0.05 + PI / 2);
  
  // Oscilación derecha baja
  derx2 = 280 + (100 - (280 - 200)) * sin(frameCount * 0.05 + PI / 2);
  derx3 = 266 + (100 - (266 - 200)) * sin(frameCount * 0.05 + PI / 2);
  
  // Dibujar líneas hacia abajo desde y=429
  for (let y = 429; y <= 534; y += 5) {
    let weight = map(y, 429, 534, 0, 1);
    strokeWeight(weight);
    stroke(0);
    line(0, y, 400, y);
  }

  // Dibujar líneas hacia arriba desde y=429
  for (let y = 429; y >= 0; y -= 5) {
    let weight = map(y, 429, 0, 0, 1); 
    strokeWeight(weight);
    stroke(167, 212, 226);
    line(0, y, 400, y);
  }
  
  noFill();
  stroke(0);
  strokeWeight(2);

  // Animación de tamaño
  if (crecimiento) {
    tamanio += 0.5;
    if (tamanio >= 50) {
      crecimiento = false;
    }
  } else {
    tamanio -= 0.5;
    if (tamanio <= 10) {
      crecimiento = true;
    }
  }
  
  stroke(255, 0, 0);
  strokeWeight(2);
  bezier(dx1, dy1, dx2, dy2, dx3, dy3, dx4, dy4);
  bezier(ix1, iy1, ix2, iy2, ix3, iy3, ix4, iy4);
  bezier(derx1, dery1, derx2, dery2, derx3, dery3, derx4, dery4);
  bezier(izqx1, izqy1, izqx2, izqy2, izqx3, izqy3, izqx4, izqy4);
  bezier(sx1, sy1, sx2, sy2, sx3, sy3, sx4, sy4);
  bezier(supx1, supy1, supx2, supy2, supx3, supy3, supx4, supy4);
  
  // Líneas adicionales
  line(sx4, 480, 211, ix3);
  line(supx1, supy1, 213, dx4);

  // Dibujar la elipse
  fill(241, 237, 227);
  ellipse(210, 412, tamanio, tamanio);
}
