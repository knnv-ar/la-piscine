/*
THE ENEMY - Facundo Visca (2022) -

TP N° 2 - Artes Multimediales 1 - Cát. Lacabanne
Universidad Nacional de las Artes (UNA)

***ADVERTENCIA*** Algunas escenas tienen un efecto estroboscópico que puede causar incomodidad para los espectadores fotosensibles

Montaje sonoro a partir de "Paranoid Android" (Radiohead,1997)

*/

let frases = [
  "hi there!",
  "so you are an artist...",
  "HA",
  "there is NO art here",
  "...",
  "understood?",
  "everything will be DELETED",
  "it's NOT art...     it's ENTERTAINMENT!",
  "FORMAT COMPLETE",
  "format in progress..",
  "",
];
let puntos = [];

let c = 0;
let index = 1;
let lastMillis = 0;
let fuente;
let paranoid;
let fft;

function setup() {

  let canvas = createCanvas(700, 700);
  canvas.parent('div-sketch');
  background(35);

  textFont(fuente);
  paranoid.play();
  paranoid.setVolume(1);

  for (let x = 0; x < width; x++) {
    puntos[x] = random(height);
  }

  fft = new p5.FFT();
}

function draw() {
  tiempo();
}


 function preload() {
  fuente = loadFont("retro.ttf"); 
  paranoid = loadSound("paranoid.mp3");
}

function mensaje(linea, x, y) {
  let g = random(220, 255);
  background(35);

  textSize(30);
  fill(30, g, 10);
  text(frases[linea].substring(0, index), x, y, width - 50, height);

  if (millis() > lastMillis + 120) {
    index = index + 1;
    lastMillis = millis();
  }
  if (index > frases[linea].length + 1.5) {
    index = 0;
  }
}

function tiempo() {
  if (paranoid.currentTime() < 0.2) {
    background(35);
  } else if (paranoid.currentTime() < 4.1) {
    barra();
  } else if (paranoid.currentTime() < 5.4) {
    mensaje(0, 20, 50);
  } else if (paranoid.currentTime() < 6.8) {
    mensaje(4, 20, 50);
  } else if (paranoid.currentTime() < 9.4) {
    mensaje(1, 20, 50);
  } else if (paranoid.currentTime() < 11) {
    mensaje(2, 20, 50);
  } else if (paranoid.currentTime() < 13.8) {
    mensaje(3, 20, 50);
  } else if (paranoid.currentTime() < 15) {
    mensaje(4, 20, 50);
  } else if (paranoid.currentTime() < 16) {
    mensaje(5, 20, 50);
  } else if (paranoid.currentTime() < 17.4) {
    mensaje(4, 20, 50);
  } else if (paranoid.currentTime() < 20.9) {
    mensaje(6, 20, 50);
  } else if (paranoid.currentTime() < 21.7) {
    background(35);
  } else if (paranoid.currentTime() < 33.4) {
    ojo();
  } else if (paranoid.currentTime() < 39.3) {
    ojos();
  } else if (paranoid.currentTime() < 41.9) {
    ojos2();
  } else if (paranoid.currentTime() < 43.9) {
    ojos3();
  } else if (paranoid.currentTime() < 45.9) {
    ojos4();
  } else if (paranoid.currentTime() < 49.9) {
    ojos5();
  } else if (paranoid.currentTime() < 52.9) {
    background(35);
  } else if (paranoid.currentTime() < 55.9) {
    flash();
  } else if (paranoid.currentTime() < 56) {
    background(35);
  } else if (paranoid.currentTime() < 58.8) {
    flash2();
  } else if (paranoid.currentTime() < 61.6) {
    flash();
  } else if (paranoid.currentTime() < 61.7) {
    background(35);
  } else if (paranoid.currentTime() < 65.6) {
    //cambiar por otro for
    flash2();
  } else if (paranoid.currentTime() < 67) {
    background(35);
  } else if (paranoid.currentTime() < 73.8) {
    flash();
  } else if (paranoid.currentTime() < 81) {
    background(35);
    lluvia(1);
  } 
  else if (paranoid.currentTime() < 81.3) {
    lluvia(1, mensaje(10, 70, 250));
  }else if (paranoid.currentTime() < 83.8) {
    lluvia(1, mensaje(9, 70, 250));
  }
   else if (paranoid.currentTime() < 84.5) {
    lluvia(1, mensaje(10, 70, 250));
  }else if (paranoid.currentTime() < 89.9) {
    lluvia(1, mensaje(7, 70, 250));
  } else if (paranoid.currentTime() < 90.2) {
    lluvia(1.5, mensaje(10, 70, 250));
  } else if (paranoid.currentTime() < 96.8) {
    lluvia(1.8, mensaje(8, 125, 250));
  } else if (paranoid.currentTime() < 101) {
    lluvia(2.5);
  } else if (paranoid.currentTime() < 103) {
    lluvia(3);
  } else if (paranoid.currentTime() < 104.4) {
    lluvia(5);
  } else if (paranoid.currentTime() < 107.4) {
    background(35);
  } else if (paranoid.currentTime() < 110.5) {
    background(35);

    flash();
  } else if (paranoid.currentTime() < 113.2) {
    background(35);

    ondas2();
  } else if (paranoid.currentTime() < 116.2) {
    background(35);

    flash();
  } else if (paranoid.currentTime() < 125.3) {
    background(35);

    ondas();
  } else if (paranoid.currentTime() < 126.3) {
    background(35);
  }
}
function keyPressed() {
  if (key == "p") {
    paranoid.jump(80);
  }
}
//Funcion |
function barra() {
  background(35);

  push();
  blink();
  noStroke();
  rect(30, 48, 6, 30);
  pop();
}

//Parpadeo texto

function blink() {
  let n = 48;
  c++;
  if (c % n > n / 2) {
    fill(35);
  } else {
    fill(0, 255, 0);
  }
}

function lluvia(cantidad) {
  let g = random(210, 255);

  stroke(0, g, 0);

  for (let x = 0; x < puntos.length; x++) {
    puntos[x] += random(cantidad);
    if (puntos[x] > height) {
      puntos[x] = 0;
    }
    point(x, puntos[x]);
  }
}
function ojo() {
  let p1 = random(12, 20);
  let p2 = random(2, 5);
  let g = random(200, 245);
  let s = random(0.01, 0.1)
  let ox = 0;
  let oy = 0;
  ox = sin(frameCount / 150) * 600;
  oy = cos(frameCount / 100) * 400;

  strokeWeight(s);
  stroke(0, g, 0);
  noFill();

  ellipse(width / 2, height / 2, ox, oy);
  noFill();
  stroke(0, g, 0);

  ellipse(350, 350, p1, p1);
  ellipse(350, 350, p2, p2);
}

function ojos() {
  scale(0.5);

  push();
  translate(0, 0);
  ojo();
  pop();

  push();
  translate(700, 0);
  ojo();
  pop();

  push();
  translate(0, 700);
  ojo();
  pop();

  push();
  translate(700, 700);
  ojo();
  pop();

  push();
  translate(350, 350);
  ojo();
  pop();
}

function ojos2() {
  scale(0.5);
  push();
  ojos();
  pop();

  push();
  translate(700, 0);
  ojos();
  pop();

  push();
  translate(0, 700);
  ojos();
  pop();

  push();
  translate(700, 700);
  ojos();
  pop();
}
function ojos3() {
  scale(0.5);
  push();
  ojos2();
  pop();

  push();
  translate(700, 0);
  ojos2();
  pop();

  push();
  translate(0, 700);
  ojos2();
  pop();

  push();
  translate(700, 700);
  ojos2();
  pop();
}
function ojos4() {
  scale(0.5);
  push();
  ojos3();
  pop();

  push();
  translate(700, 0);
  ojos3();
  pop();

  push();
  translate(0, 700);
  ojos3();
  pop();

  push();
  translate(700, 700);
  ojos3();
  pop();
}
function ojos5() {
  scale(0.5);
  push();
  ojos4();
  pop();

  push();
  translate(700, 0);
  ojos4();
  pop();

  push();
  translate(0, 700);
  ojos4();
  pop();

  push();
  translate(700, 700);
  ojos4();
  pop();
}

function flash() {
  if (frameCount % 4 == 0) {
    background(35);
  } else {
    background(0, 240, 0);
  }
}

function flash2() {
  let g = random(200, 255);
  stroke(0, g, 0);

  for (i = 0; i < frameCount / 3; i += 5) {
    line(350, 350, random(width), random(height));
  }
}

function ondas() {
  let wave = fft.waveform();

  beginShape();
  noFill();
  strokeWeight(1);
  stroke(0, 250, 0);
  for (let i = 0; i < width; i++) {
    let indice = floor(map(i, 0, width, 0, wave.length));

    let x = i;
    let y = wave[indice] * 300 + height / 2;
    vertex(x, y);
  }
  endShape();
}

function ondas2() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  let wave = fft.waveform();

  beginShape();
  noFill();
  strokeWeight(1);
  stroke(0, 250, 0);

  for (let i = 0; i <= 180; i++) {
    let indice = floor(map(i, 0, 180, 0, wave.length));

    let r = map(wave[indice], -1, 1, 150, 350);

    let x = r * sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  endShape();
  beginShape();
  noFill();
  strokeWeight(1);
  stroke(0, 250, 0);

  for (i = 0; i <= 180; i++) {
    let indice = floor(map(i, 0, 180, 0, wave.length));

    let r = map(wave[indice], -1, 1, 150, 350);

    let x = r * -sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  endShape();
}
