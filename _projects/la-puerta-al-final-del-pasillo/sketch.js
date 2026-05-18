let recorrido = 400;
let posiciona = 400;
let posicionb = 400;
let volumena = 0;
let volumenb = 0;

function preload() {
  p1 = loadImage("img/p1.png");
  pared = loadImage("img/ladrillo.jpg");
  galaxia = loadImage("img/galaxia.gif");
  piso = loadImage("img/cemento.jpg");
  techo = loadImage("img/techo.jpg");
  no = loadSound("sound/no.mp3");
  alarma = loadSound("sound/alarm.mp3");
  paso = loadSound("sound/paso.mp3");
  fin = loadSound("sound/spacesound.mp3");
}

function setup() {
  
  let canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('div-sketch');

  alarma.loop();

  no.loop();

  fin.loop();

  //debugMode();
}

function draw() {
  
  //console.log(volumena, volumenb);
  
  background(0);
  orbitControl();

  alarma.setVolume(volumena);
  no.setVolume(volumena);
  fin.setVolume(volumenb);

  lights();
  pointLight(200, 200, 220, 0, 300, 200);
  ambientMaterial(20);
  
  camera(0, 0, recorrido, mouseX - width / 2, mouseY - height / 2, 0, 0, 1, 0);

  //PUERTA
  push();
  noStroke();
  texture(p1);
  translate(0, 7, 101);
  plane(85, 190);
  pop();

  //Piso
  push();
  noStroke();
  texture(piso);
  rotateX(17.27);
  translate(0, -250, 100);
  plane(300, 400);
  pop();

  //Techo
  push();
  noStroke();
  texture(techo);
  rotateX(17.27);
  translate(0, -250, -100);
  plane(300, 400);
  pop();

  //PARED IZQ
  push();
  noStroke();
  rotateY(14);
  texture(pared);
  translate(-270, 0, -100);
  plane(400, 200);
  pop();

  //PARED DER
  push();
  noStroke();
  rotateY(-14);
  texture(pared);
  translate(270, 0, -100);
  plane(400, 200);
  pop();

  //PARED FONDO
  push();
  noStroke();
  texture(pared);
  translate(0, 0, 100);
  plane(300, 200);
  pop();

  //FIN
  push();
  noStroke();
  texture(galaxia);
  translate(0, 0, 0);
  plane(550, 550);
  pop();

  if (recorrido <= 50) {
    recorrido = 400;
    posiciona = 400;
    posicionb = 400;
  } else if (recorrido >= 800) {
    recorrido = 400;
    posiciona = 400;
    posicionb = 400;
  } else if (recorrido < 400){
    proximidadpuerta();
  }else{
    proximidadvacio();
  }
}

function keyPressed() {
  if (key === "w") {
    recorrido -= 50;
    posiciona -= 50;
    posicionb -= 50;
    paso.play();
  }

  if (key === "s") {
    recorrido += 50;
    posiciona += 50;
    posicionb += 50;
    paso.play();
  }
}

function proximidadpuerta() {
  volumenb = (posicionb - 400) * -0.003;
  volumena = 0;
}

function proximidadvacio() {
  volumena = (posiciona - 400) * -0.002;
  volumenb = 0;
}
