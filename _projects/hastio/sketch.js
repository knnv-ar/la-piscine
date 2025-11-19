let forma = [prim, prim1, prim2, prim3, prim4];
let indice = 0;
let indice2 = 0;
let r = 255;
let g = 0;
let b = 0;

function preload() {
  fondo = loadSound("fonfoSonido2.wav");
  cambio = loadSound("pip.wav");
}

function prim() {
  box(50, 50);
}

function prim1() {
  sphere(40);
}

function prim2() {
  cone(30,70);
}

function prim3() {
  cylinder(20,90);
}

function prim4() {
  torus(30,10);
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  fondo.loop();
}

function draw() {
  background(0);
  
  if(mouseIsPressed) {
    temblor1 = random(20);
    temblor2 = random(20);
    r = random(255);
    g = random(255);
    b = random(255);
  } else {
    temblor1 = 0;
    temblor2 = 0;
  }
  
  //---------------------//ARRIBA//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, -243 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, -242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, -242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, -242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, -242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, -243 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  
  //---------------------//ABAJO 1//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, -143 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, -142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, -142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, -142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, -142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, -143 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  
  //---------------------//ABAJO 2//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, -43 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, -42 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, -42 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, -42 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, -42 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, -43 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  
  //---------------------//ABAJO 3//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, 53 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, 52 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, 52 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, 52 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, 52 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, 53 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  
  //---------------------//ABAJO 4//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, 143 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, 142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, 142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, 142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, 142 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, 143 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  
  //---------------------//ABAJO 5//---------------------//
  
  //cubo 1
  push();
  stroke(r, g, b);
  noFill();
  translate(-240 + temblor1, 243 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 2
  push();
  stroke(r, g, b);
  noFill();
  translate(-144 + temblor1, 242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 3
  push();
  stroke(r, g, b);
  noFill();
  translate(-48 + temblor1, 242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 4
  push();
  stroke(r, g, b);
  noFill();
  translate(46 + temblor1, 242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 5
  push();
  stroke(r, g, b);
  noFill();
  translate(146 + temblor1, 242 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
  //cubo 6
  push();
  stroke(r, g, b);
  noFill();
  translate(238 + temblor1, 243 + temblor2, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  forma[indice]();
  pop();
}

function mousePressed() {
  indice = (indice + 1) % forma.length;
  cambio.play();
}