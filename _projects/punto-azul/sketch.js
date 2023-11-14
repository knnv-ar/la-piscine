let god;
let mundo;
let video;
let luna

function preload() {
  god = loadImage('R.jpeg');
  dia = loadImage('planeta.png');
    luna = loadImage('LUNA.png');
    venus = loadImage('venus.jpeg');
     mercurio = loadImage('mercurio.jpg');
   marte = loadImage('marte.jpg');
}

function setup() {
  let canvas = createCanvas(600, 500, WEBGL);
  canvas.parent('div-sketch');
}
function draw() {
  background(51);

  let targetX = map(mouseX, 0, width, -width / 2, width / 2);
  let targetY = map(mouseY, 0, height, -height / 2, height / 2);
  
  let targetZ = map(mouseY, 0, height, -600, 600); // Mapea la posición vertical del mouse a un rango de valores para la coordenada Z

  push();
  translate(targetX, targetY, targetZ);
  rotateZ(frameCount * 0.01);
  texture(god);
  noStroke();
  sphere(600);
///TIERRA
    push();
  translate(0, 0, 10);
  rotateY(frameCount * 0.01);
  texture(dia);
  noStroke();
  sphere(50);
  pop();
    // Luna
  push();
  rotateY(frameCount * 0.05);
  translate(80, 0, 0);
  texture(luna);
  sphere(15);
  pop();
  // Mercurio
  push();
  rotateY(frameCount * 0.04);
  translate(-150, 0, 0);
  texture(mercurio);
  sphere(30);
  pop();
  
  // Venus
  push();
  rotateY(frameCount * 0.03);
  translate(-220, 0, 0);
   texture(venus);
  sphere(40);
  pop();
  
  // Marte
  push();
  rotateY(frameCount * 0.02);
  translate(-350, 0, 0);
  texture(marte);
  sphere(35);
  pop();
  
  pop();

}

