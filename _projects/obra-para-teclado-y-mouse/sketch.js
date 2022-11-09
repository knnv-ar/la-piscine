/*

Obra para una teclado y mouse


Mouse:mover en sentido X / Y 

Teclas:

piano="p"
pizz="z"
cello="c"
pad="d"
perc="r"
sint="s"
sint2="S"
tenido="t"

*/

let galaxiaFondo;
//variables banco de sonidos
let pizz;
let e_piano;
let cello;
let pad;
let perc;
let sint;
let sint2;
let tenido;

function preload() {
  galaxiaFondo = loadImage("galaxiaFondo.jpg");

  pizz = loadSound("sounds/E_pizz.mp3");
  e_piano = loadSound("sounds/E_piano.mp3");
  cello = loadSound("sounds/cello_e.mp3");
  pad = loadSound("sounds/pad_e.mp3");
  perc = loadSound("sounds/perc_e.mp3");
  sint = loadSound("sounds/sint_e.mp3");
  sint2 = loadSound("sounds/sint2.mp3");
  tenido = loadSound("sounds/tenido.mp3");
  
}
function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(30);

  var pan = map(mouseX, 100, width - 100, -1, 1);

  pizz.pan(pan);
  e_piano.pan(pan);
  cello.pan(pan);
  pad.pan(pan);
  perc.pan(pan);
  sint.pan(pan);
  sint2.pan(pan);
  tenido.pan(pan);

  push();
  texture(galaxiaFondo);
  translate(0, 0, mouseY);
  plane(1200, 1200);
  pop();
  noStroke();

  if (mouseY > 461) {
    //cilindro
    push();
    noFill();
    strokeWeight(1);
    stroke(random(255), random(255), 255);
    translate(5, 3, mouseX);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    rotateZ(frameCount * 0.1);
    cylinder(150, 120); 
    pop();

    push();
    noFill();
    strokeWeight(1);
    stroke(random(255), random(255), 255);
    translate(5, 3, mouseX);
    rotateZ(frameCount * 0.01);
    sphere(50);
    pop();

    if (mouseX > 489) {
      push();
      noFill();
      strokeWeight(random(5));
      stroke(255, random(255), 255);
      translate(10, 5, 0);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cone(500, 200); 
      pop();
    }

  }

  if (frameCount > 400) {
    push()
    background(30);
    noFill();
    strokeWeight(1);
    stroke(random(255));
    translate(10, 5, mouseX);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(300, 600);
    pop()

    for (let y = 5; y < 40; y += 10) {
      noFill();
      stroke(30, 220, y);
      strokeWeight(1);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(mouseY);
    }
  }

  if (frameCount > 900) {
    background(30);
    for (let y = 50; y < 600; y += 50) {
      for (let x = 50; x < 600; x += 50) {
        fill(x, y, 240);
        stroke(30, 255, x);
        strokeWeight(1);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        sphere(mouseX);
      }
    }
  }

  if (frameCount > 1200) {
    for (let y = 50; y < 600; y += 10) {
      for (let x = 50; x < 600; x += 20) {
        noStroke();
        fill(x, y, 120);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        ellipse(x, y, 10, 10);
      }
    }
  }

  if (keyIsPressed === true && key == "p") {
    pianoF();
  }

  if (keyIsPressed === true && key == "z") {
    pizzF();
  }

  if (keyIsPressed === true && key == "c") {
    celloF();
  }

  if (keyIsPressed === true && key == "d") {
    padF();
  }

  if (keyIsPressed === true && key == "r") {
    percF();
  }

  if (keyIsPressed === true && key == "s") {
    sintF();
  }
  if (keyIsPressed === true && key == "S") {
    sint2F();
  }

  if (keyIsPressed === true && key == "t") {
    tenidoF();
  }
} //FIN DRAW

//funciones banco de sonidos

function pizzF() {
  pizz.stop();
  pizz.play();
}

function pianoF() {
  e_piano.stop();
  e_piano.play();
}
function celloF() {
  cello.stop();
  cello.loop();
}

function padF() {
  pad.stop();
  pad.play();
}
function percF() {
  perc.stop();
  perc.play();
}

function sintF() {
  sint.stop();
  sint.loop();
}

function sint2F() {
  sint2.stop();
  sint2.play();
}
function tenidoF() {
  tenido.stop();
  tenido.loop();
}
function mouseWheel() {
  e_piano.stop();
  pizz.stop();
  cello.stop();
  pad.stop();
  perc.stop();
  sint.stop();
  sint2.stop();
  tenido.stop();
}
