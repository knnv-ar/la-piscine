//Aaron Juarez TN
//TP2 
//Ir


var img;
var fondo;
var calle;
function preload() {
  img = loadImage("rueda.webp");
  fondo = loadImage("fondo.webp");
  calle = loadImage("calle.webp");
  musiquita = loadSound("tp2am1.mp3");
}
function setup() {
  let canvas = createCanvas(600, 700, WEBGL);
  canvas.parent('div-sketch');
  musiquita.loop(); 
}

function draw() {
  background(0);

  var mousex = mouseX - width / 2;
  var mousey = mouseY - height / 2;
  ambientLight(60);

  //Fondo
  push();
  imageMode(CENTER);
  translate(0, -90, -200);
  image(fondo, 0, 0, 950, 1200);
  pop();

  //Rueda
  push();
  pointLight(100, 100, 200, mousex, mousey, 250);
  specularMaterial(100);
  texture(img);
  translate(0, 20, 0);
  rotateY(width / 2.5);
  rotateZ(frameCount * 0.2);
  noStroke();
  torus(70, 35);
  pop();

  //Calle
  push();
  pointLight(100, 100, 200, mousex, mousey, 250);
  specularMaterial(100);
  texture(calle);
  noStroke();
  translate(40, 400, -100);
  rotateZ(radians(87));
  rotateX(radians(-25));
  rotateY(frameCount * 0.05);
  cylinder(300, 550);
  pop();
}
