let angle = 0;
let sonido;
let z3 = -110;
let z4 = -110;

let zDirection3 = 1;
let zDirection4 = -1;
let imagen_Mar;
let b_1;
function preload() {
  sonido = loadSound("sonido/s_Mar.mp3");
  imagen_Mar = createVideo("video/cielo_Mar.mp4");
  b_1 = createVideo("video/b_1.mp4");
  imagen_Mar.size(220, 349);
  imagen_Mar.hide();
  b_1.size(320, 349);
  b_1.hide();
  imagen_Mar.loop();
  b_1.loop();
}
function setup() {
  let canvas = createCanvas(550, 500, WEBGL);
  canvas.parent('div-sketch');
  sonido.loop();
}

function draw() {
  background(20);
  noStroke();
  ambientLight(150);
  directionalLight(13, 135, 65, 0, 0, -1);

  z3 += 0.8 * zDirection3;
 


  push();
  
  pointLight(0, 58, 90, +20, 0, 0);
  translate(+100, -10, z3);
  rotateY(frameCount * 0.002);
  texture(b_1);
  sphere(200,120);

  pop();

  push();
  
  pointLight(0, 134, 0, 0, -300, 2);
  texture(imagen_Mar);
  plane(width / 1, height / 1);
  
  pop();
}
