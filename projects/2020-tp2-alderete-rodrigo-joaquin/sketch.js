//RODRIGO ALDERETE
//PARCIAL Nº2
//Activar webcam antes de inicializar la app.
//Utilizar click izquierdo del mouse.
//Con el teclado usar la letra S para detener,la letra P para pausar y el space bar para reiniciar la cancion una vez intervenida.

let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eye1X, eye1Y, eye2X, eye2Y;
let Shoulder1X, Shoulder1Y, Shoulder2X, Shoulder2Y;
let value = 0;

var SFX, song;

function preload() {
  SFX = loadSound("sfx.mp3");
  song = loadSound("kulikitaka-ti.mp3");
}

document.oncontextmenu = function() {
  return false;
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('div-sketch');
  video = createCapture(VIDEO);
  video.hide();
  song.loop();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    
    eye1X = poses[0].pose.keypoints[1].position.x;
    eye1Y = poses[0].pose.keypoints[1].position.y;
    
    eye2X = poses[0].pose.keypoints[2].position.x;
    eye2Y = poses[0].pose.keypoints[2].position.y;
    
  }
}

function modelReady() {
}

function draw() {
  image(video, 0, 0);

  fill(255, 0, 0);
  ellipse(noseX, noseY, 40);
  
  tint(value);
  
  eye(eye1X, eye1Y, 50, 1);
  eye(eye2X, eye2Y, 50, -1);
}

function eye(x, y, size, n) {
	let angle = frameCount * 0.2;
	
	fill(255);
	noStroke();
	ellipse(x, y, size, size);
	
	fill(56);
	noStroke();
	ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
    SFX.play();
  } else {
    SFX.play();
    value = 0;
  }  }
  
   function keyPressed() {
  if (key == "s") {
    song.stop();
  }
  if (key == "p") {
    song.pause();
  }
  if (key == " ") {
    song.loop();
  }  } 
