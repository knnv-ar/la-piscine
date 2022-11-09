let estribo, estrofa;
let track;
let vox1, vox2, vox3, vox4, vox5;

function preload() {
  estribo = loadSound("sonidos/ESTRIBO.mp3");
  estrofa = loadSound("sonidos/ESTROFA.mp3");
  track = loadSound("sonidos/TRACK.mp3");
  vox1 = loadSound("sonidos/CHU.mp3");
  vox2 = loadSound("sonidos/AHYEY.mp3");
  vox3 = loadSound("sonidos/WEI.mp3");
  vox4 = loadSound("sonidos/YOU.mp3");
  vox5 = loadSound("sonidos/A.mp3");
}

function setup() {
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  
  

  //estribo
  if (keyIsPressed) {
    if (key == "q") {
      estribo.stop();
      estribo.loop();
    }
  }
  if (keyIsPressed) {
    if (key == "w") {
      estribo.stop();
    }
  }

  //estrofa
  if (keyIsPressed) {
    if (key == "a") {
      estrofa.stop();
      estrofa.loop();
    }
  }
  if (keyIsPressed) {
    if (key == "s") {
      estrofa.stop();
    }
  }

  //voxes
  if (keyIsPressed) {
    if (key == "z") {
      vox1.stop();
      vox1.play();
    }
  }
  if (keyIsPressed) {
    if (key == "x") {
      vox2.stop();
      vox2.play();
    }
  }

  if (keyIsPressed) {
    if (key == "c") {
      vox3.stop();
      vox3.play();
    }
  }
  if (keyIsPressed) {
    if (key == "v") {
      vox4.stop();
      vox4.play();
    }
  }
  if (keyIsPressed) {
    if (key == "b") {
      vox5.stop();
      vox5.play();
    }
  }

  //Figura 1
  if (estribo.isLooping()) {
    for (x = 0; x < 400; x++) {
      noFill();
      rotateZ(sin(frameCount * 0.002));
      stroke(250, 0, 0, 10);
      circle(x, x, 100);
    }
  }

  //Figura 2
  if (estrofa.isLooping()) {
    for (i = 0; i < 400; i++) {
      stroke(20, 206, 206);
      noFill();
      rotateZ(cos(frameCount * 0.0002));
      square(i, 0, 100);
    }
  }
}
