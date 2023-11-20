var back, cancion, customFont;
var showAlternateText = false;
var torusSize = 220;
var currentQuestionIndex = 0;

// array de preguntas
var questions = [
  "hi",
  "are you dreaming son?",
  "or not?",
  "why not?",
  "You don't want to?",
  "you can't?",
  "you shouldn't?",
  "Come on, try it",
  "just once",
  "I know what you want to",
];

function preload() {
  back = loadImage("one.gif");
  cancion = loadSound("vampire.mp3");
  customFont = loadFont("COMICATE.TTF");
}

function setup() {
  let canvas= createCanvas(900, 800, WEBGL);
canvas.parent('div-sketch');
cancion.loop();
}

function draw() {
noStroke();
background(20);

orbitControl();

//esfera fondo

push();
texture(back);
translate(0, 0, 0);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
rotateZ(frameCount * 0.01);
sphere(2900);
  pop();

  //esfera dos
  push();
  texture(back);
  translate(0, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  sphere(800);
  pop();

  //esfera tres
  push();
  texture(back);
  translate(0, 0, 0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.02);
  sphere(150);
  /*rotateX(frameCount * 0.05); // Rotación adicional alrededor del eje X
  rotateY(frameCount * 0.05); // Rotación adicional alrededor del eje Y
  rotateZ(frameCount * 0.05); // Rotación adicional alrededor del eje Z*/
  //torus(torusSize); // Añadir torus alrededor de la esfera
  pop();

  push();
  fill(225);
  textSize(30);
  textAlign(CENTER);
  textFont(customFont);

  // decide qué texto mostrar
  if (showAlternateText) {
    text(questions[currentQuestionIndex], 0, 300);
  } else {
    text("You clicked me!", 0, 300);
  }
  pop();
}

function mousePressed() {
  // cambiar la pregunta al hacer clic
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  showAlternateText = true;
}
