let img = [];
let sonido = [];
let video = [];

function preload() {
  img[0] = loadImage("textura1.jpg"); 
  img[1] = loadImage("textura2.jpg")
  sonido[0] = loadSound("mistico.wav")
 
}

let camX = 0;
let camY = 0;
let camZ = 0;
let step = 10; 

function setup() {
  let canvas = createCanvas(512,512,WEBGL);
  canvas.parent('div-sketch');
  sonido[0].loop();
  vid = createVideo("lowres.mp4");
  vid.size(320, 240);
  vid.hide();
  vid.play();
  vid.elt.muted = true;
}

function draw() {
  
  
  let h = hour();
  background(h*10);
  

  
  sonido[0].setVolume(0.1);

  if (keyIsDown(87)) {  
    camZ += step;
  }
  else if (keyIsDown(83)) {  
    camZ -= step;
  }
 
  let camY = map(mouseY,0,-height/2,0,200,0);
  let camX = map(mouseX, 0, width/2, 0, -100, 0);
  camera(camX, camY, (height / 3.2) / tan(PI / 6), 0, 0, camZ, 0, 1, 0);

  translate(0, 0, camZ-100);
  normalMaterial()
  texture(img[1]);
  rotateX(PI / 2);
  plane(200, 200);

  push();
  texture(img[0]);
  box(512, 512, 300, 400, 100);
  pop();
  
  push();
  rotateX(frameCount * 3.21)
  rotateY(frameCount * 3.21)
  rotateZ(frameCount * 3.21)
  plane(50,20,20,20)
  plane(50,h,203,20)
  plane(100,202,20,20)
  plane(200,150,203,20)
  plane(300,200,30,30)
  pop();
  
  push();
  texture(vid);
  sphere(75,20,20);
  rotateY(frameCount *0.01)
  pop();
  
  

}