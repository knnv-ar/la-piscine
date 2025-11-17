// Hécate - Kiara Vázquez - 2025 

let img = [];
let gif = [];
let song, song2;

let nextChange = 0;
let changeInterval;
let pulse = 0;

function preload() {

  img = [
    loadImage('img/222.jpg'),     // 0 fondo
    loadImage('img/brujas.png'),  // 1
    loadImage('img/000.jpg'),     // 2
    loadImage('img/coppola.png'), // 3
    loadImage('img/cabra.png'),   // 4
    loadImage('img/craneo.png'),  // 5
    loadImage('img/hecate.png'),  // 6
    loadImage('img/dientes.png'), // 7
    loadImage('img/luz.png'),     // 8
    loadImage('img/quema.png'),   // 9
    loadImage('img/ramas.png'),   // 10
    loadImage('img/rosario.png'), // 11
    loadImage('img/women.png'),   // 12
  ];


  gif = [
    loadImage('gif/cisne.gif'),   // 0
    loadImage('gif/flores.gif'),  // 1
    loadImage('gif/fuego.gif'),   // 2
    loadImage('gif/labios.gif'),  // 3
    loadImage('gif/mujer.gif'),   // 4
    loadImage('gif/velo.gif'),    // 5
    loadImage('gif/angel.gif'),   // 6
    loadImage('gif/velo2.gif'),   // 7
    loadImage('gif/llamas.gif'),  // 8
    loadImage('gif/niñas.gif'),   // 9
  ];

  song = loadSound('Rhiannon-Fleetwood Mac.mp3');
  song2 = loadSound('Berghain.mp3');
}

function setup() {
  let canvas = createCanvas(600, 800);
  canvas.parent('div-sketch');
  noStroke();
  imageMode(CENTER);

 // autoplay 
    userStartAudio().then(() => {

    //Canción principal
    if (!song.isPlaying()) {
      song.loop();
      song.setVolume(0.55);  // volumen principal
    }

    //Segunda canción 
    if (!song2.isPlaying()) {
      song2.loop();
      song2.setVolume(0.20); // volumen más bajo
    }
});

  changeInterval = random(3000, 6000);
  nextChange = millis() + changeInterval;
}

function draw() {
  background(25, 18, 30);

  //efecto respiración
  pulse = 1 + sin(frameCount * 0.02) * 0.05;

  // fondo
  blendMode(BLEND);
  tint(255, 90);
  image(img[0], width/2, height/2, width, height);

  tint(255, 230);
  image(img[2], width/2, height/2 + 80, 400*pulse, 400*pulse);

  // velos
  blendMode(OVERLAY);
  tint(255, 120);
  image(gif[7], width/2 + 80, 420, 520*pulse, 520*pulse);
  
  tint(255, 140);
  image(gif[5], width/2 - 80, 420, 520*pulse, 520*pulse);

  // cisne
  blendMode(SCREEN);
  tint(255, 240);
  image(gif[0], width/2, 90, 260*pulse, 260*pulse);

  // mujer gif respirando
  blendMode(LIGHTEST);
  tint(255, 210);
  image(gif[4], width/2, 240, 200*pulse, 200*pulse);

  // fuego y flores
  blendMode(SCREEN);
  tint(255);
  image(gif[2], 470, 690, 260*pulse);
  image(gif[1], 130, 700, 250*pulse, 250*pulse);

  // labios
  image(gif[3], 480, 580, 200*pulse, 200*pulse);

  // atmósfera
  blendMode(SOFT_LIGHT);
  fill(100, 50, 130, 25);
  rect(0, 0, width, height);

  // aura
  noStroke();
  fill(255, 200, 255, 25);
  ellipse(width/2, height/2 - 100, 800, 600);

  drawFrame();

  if (millis() > nextChange) {
    swapRandomElement();
    changeInterval = random(3000, 6000);
    nextChange = millis() + changeInterval;
  }
}

function drawFrame() {
  push();
  noFill();
  stroke(0, 0, 0, 160);
  strokeWeight(80);
  rect(-40, -40, width + 80, height + 80);
  pop();
}

function swapRandomElement() {
  //Número total de elementos 
  let total = img.length + gif.length;

  let choice = int(random(1, total)); //evita reemplazar fondo

  if (choice < img.length) {
    img[choice] = img[int(random(1, img.length))];
  } else {
    let i = choice - img.length;
    gif[i] = gif[int(random(0, gif.length))];
  }
}


