// el cuarteto de la caza
// solherrera
let xoff = 0.80;
let yoff = 0.80;

let mySound;
let fft;

let video;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sound/sol (5).mp3');
}

function setup() {
 let canvas= createCanvas(1000, 1000);
  canvas.parent('div-sketch');
  video = createVideo("video/MVI_7884.mp4");
  video.size(width, height);
  video.hide();
  video.loop();
  fft = new p5.FFT();
  mySound.play();
}

function draw() {
  xoff += 0.008;
  yoff += 0.01;
  let nX = noise(xoff) * width;
  let nY = noise(yoff) * height;

  let bassEnergy = fft.getEnergy("bass");
  let speedFactor = map(bassEnergy, 0, 255, 0.01, 0.2);

  // Dibuja el fondo del video con un tint para dar opacidad
  tint(255, 7); // Ajusta el valor alfa para cambiar la opacidad
  image(video, 0, 0, width, height);

  // Ajusta la posición del video para que esté centrado en el lienzo
  let videoX = (width - video.width) / 2;
  let videoY = (height - video.height) / 2;

  // Dibuja el video
  image(video, videoX, videoY);

  fill(244, 4, 4, 50);
  ellipse(nX, nY, 5, 221);

  // Ajusta la velocidad de la elipse basada en el espectro del sonido
  xoff += speedFactor;
  yoff += speedFactor;
}
