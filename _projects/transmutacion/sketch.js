document.oncontextmenu = function () {
  return false;
};

let cubo;
let sonido;
let img;
let playingVideo = false; 

function preload() {
  img = loadImage("foto.jpg");
  sonido = loadSound("audio2.mp3");
}

function setup() {
  let canvas = createCanvas(600, 702, WEBGL);
  canvas.parent('div-sketch');
  cubo = createVideo("cubo.mp4");
  cubo.loop();
  cubo.hide(); 
}

function draw() {
  background(0, 10, random(5, 35));
  ambientLight(255);

  if (key === 'a') {
  camera(mouseX, mouseY, 0, 0, 0, 0, 0, 1, 0);
  }
  
  directionalLight(25, 100, 100, mouseX, mouseY, 0);

  
if (key === 'a') {
    if (!sonido.isPlaying()) {
      sonido.loop(); 
    }
  } else {
    if (sonido.isPlaying()) {
      sonido.stop(); 
    }
  }

  specularMaterial(40);
  push();
  texture(img);

if (key === 'a') {
  texture(cubo); // Muestra el video sobre el cubo
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
  }

  noStroke();
  box(250, 350);
  pop();
}

function keyPressed() {
  if (key === 'a') {
    if (!playingVideo) {
      cubo.play();  
      playingVideo = true;
    //} else {
      //cubo.stop();  
      //playingVideo = false;
    }
  }
}
