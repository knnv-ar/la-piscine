let img1, img2;

function preload(){
 img1 = loadImage("imagen/piel.webp");
 img2 = loadImage("imagen/emoji.webp");
}
function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
  
}

function draw() {
  background(200);
  
  image(img1, -400, -400, 800, 800);
  
  rotateY(frameCount * 0.01);
 
  push();
  noStroke();
  texture(img2);
  sphere(70); //Parámetros: radio
  pop();
}
