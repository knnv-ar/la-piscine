
var sound;
var fft;
var angleBoliche = 0;

let count = 0;

function preload() {
  sound = loadSound("./sonidos/aero.mp3");
  boliche = loadImage("./texturas/textura.jpg");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent('div-sketch');
  cnv.mouseClicked(togglePlay);
  angleMode(DEGREES);
  fft = new p5.FFT();
  sound.amp(0.5);
  noLoop();
  
}

function draw() {
  colorMode(HSB, 100);

  h = random(0, 360);
  s = random(0, 100);
  b = random(0, 100);
  
  if (count % 5 == 0) {
    
    hb = random(0, 100);
    sb = random(0, 50);
    bb = random(0, 150);
    background(hb, sb, bb);
  }
  count += 1;
  

  stroke(h, s, b);
  strokeWeight(6);
  noFill();
  

//esfera 
  push();

  orbitControl();
  noStroke();
  rotateY(angleBoliche);
  texture(boliche);
  sphere(120);
  angleBoliche = angleBoliche + 0.50
  
  

  pop();

  var wave = fft.waveform();

  beginShape();
  for (var i = 0; i <= 180; i += 0.5) {
    var index = floor(map(i, 0, 180, 0, wave.length - 10));
    var r = map(wave[index], -1, 1, h, 350);
    var x = r * sin(i);
    var y = r * cos(i);
    vertex(x, y);
  }
  endShape();
  beginShape();
  for (var i = 0; i <= 180; i += 0.5) {
    var index = floor(map(i, 0, 180, 0, wave.length - 10));
    var r = map(wave[index], -1, 1, h, 350);
    var x = r * -sin(i);
    var y = r * -cos(i);
    vertex(x, y);
  }
  endShape();
  
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
    noLoop();
  } else {
    sound.play();
    loop();
  }
}
