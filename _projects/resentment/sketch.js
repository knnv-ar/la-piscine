//Título de la Obra: Resentment

//Año: 2022

//Autor/a: Romina González

let angle = 0;
var img;
var song, song2;
var luces = false;
var posZ = 100;
var minimo = 1
var maximo = 10;
var texto = "";
function preload() {
  img = loadImage("imagenes/nihil.jpeg");
  song = loadSound("KissTheGoGoat.mp3");
  song2 = loadSound("DanceMacabre.mp3");
  song3 = loadSound("Con ClaviConDio.mp3");
}
function setup() {
  let canvas = createCanvas(800, 850, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
background(25)
  
  push(); //esfera fondo
  translate(0, 0, -800)
  rotateY(angle);
  strokeWeight(1);
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  ambientLight(30);
  pointLight(218, 119, 99, locX, locY, posZ);
  translate(0, -95, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  ambientMaterial(140, 61, 46);
  sphere(800);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(0);
  ellipse(0, 0, 600, 600);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(5);
  ellipse(0, 0, 550, 550);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(10);
  ellipse(0, 0, 500, 500);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(15);
  ellipse(0, 0, 450, 450);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(20);
  ellipse(0, 0, 400, 400);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(25);
  ellipse(0, 0, 350, 350);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(30);
  ellipse(0, 0, 300, 300);
  pop();

  push();
  rotateZ(angle);
  noStroke();
  fill(35);
  ellipse(0, 0, 250, 250);
  angle += 0.01;
  pop();

  push(); //etiqueta disco
  rotateZ(angle);
  noStroke();
  fill(111, 54, 54);
  ellipse(0, 0, 200, 200);

  pop();

  push();
  rotateZ(angle);
  fill(140, 61, 46)
  noStroke();
  ellipse(0, 0, 40, 40);
  pop();

  push();
  strokeWeight(3);
  fill(20);
  rect(-380, 0, 750, 750);
  pop();

  image(img, -380, 0, 750, 500); //nihil
  
  push()
  fill(200, 160)
  rect(170,0,200,200)

  
  pop()
}

function keyPressed() {
  song.stop();
  song2.stop();
  song3.stop();
  if (key == "p") {
    song.pause(); //pausa
  }
  if (key == "1") {
    song.play(); //empieza cancion.
  }
  if (key == "2") {
    song2.play(); //empieza cancion 2.
  }
  if (key == "p") {
    song2.pause(); //pausa
  }
  if (key == "3") {
    song3.play(); //empieza cancion 3.
  }

  if (key == "p") {
    song3.pause(); //pausa
  }

  if (key == "+") {
    //control luz
    posZ += 10;
  } else {
    posZ -= 10;
  }
}
