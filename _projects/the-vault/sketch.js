let fondo, moth, mantita, jellyImages;
let angles = [0, Math.PI]; 
let radius = 335; 
let centerX, centerY; 
let speed = 0.02; 
let songs = []; 
let currentSongIndex = 0; 

function preload() {
  fondo = loadImage("vault-tres.png");
  moth = loadImage("skykid.png");
  mantita = loadImage("manta.png");
  jellyImages = [loadImage("jelly.png"), loadImage("jelly.png")];

  
  songs.push(loadSound("tranquility.mp3"));
  songs.push(loadSound("leaving.mp3"));
  songs.push(loadSound("goodbye.mp3"));
}

function setup() {
  let canvas = createCanvas(1400, 800);
  canvas.parent('div-sketch');
  
  centerX = 761; 
  centerY = 351; 

  songs[currentSongIndex].loop();
}

function draw() {
  background(220);


  //fondo
  image(fondo, 0, 0, 1400, 800);
  noFill();
  
  push()
  stroke(244, 255, 140);
  strokeWeight(10);

  // círculo con un "efecto" de brillo
  for (let i = 0; i < 5; i++) {
    stroke(244, 255, 140, 50 - i * 10); 
    circle(centerX, centerY, 400 + i * 5); 
  }
  pop()

  push();

  //imágenes posicion
  let imageWidth = 150; 
  let imageHeight = 200; 

  for (let i = 0; i < jellyImages.length; i++) {
    let x = centerX + cos(angles[i]) * radius - imageWidth / 2;
    let y = centerY + sin(angles[i]) * radius - imageHeight / 2;
    image(jellyImages[i], x, y, imageWidth, imageHeight);
    angles[i] += speed;
  }

  pop();

  push();
  tint(250, 247, 170);
  image(moth, 732, 316, 200, 200);
  pop();

  push();
  tint(97, 96, 181);
  image(mantita, -100, 425, 700, 700);
  pop();
}

//mantita que cambia písta de audio
function mousePressed() {
  
  if (
    mouseX > -100 &&
    mouseX < -100 + 700 &&
    mouseY > 425 &&
    mouseY < 425 + 700
  ) {
    
    songs[currentSongIndex].stop();

    
    currentSongIndex = (currentSongIndex + 1) % songs.length;

    songs[currentSongIndex].loop();
  }
}
