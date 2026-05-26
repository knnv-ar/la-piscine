/*Obra: Glitch en la ciudad
Alumna: Marcela Cardozo
Artes Multimediales I
Catedra Lacabanne*/

/*Para comenzar la obra hacer click en el
boton de la derecha*/

var img, img2, img3, img4, img5;
var estatica, clack, batucada;
var cliks = 0;
function preload() {
  img1 = loadImage("imagenes/tv.png");
  img2 = loadImage("imagenes/f100.png");
  img3 = loadImage("imagenes/glitch.png");
  img4 = loadImage("imagenes/boton.png");
  img5 = loadImage("imagenes/multitud.jpg");
  estatica = loadSound("sonidos/pink.mp3");
  clack = loadSound("sonidos/clack.mp3");
  batucada= loadSound("sonidos/batucada.mp3");
}

function setup() {
  let canvas = createCanvas(700, 500);
  canvas.parent('div-sketch');
}

function draw() {
  background(30);

  if (cliks == 1 || cliks == 5) {
    for (let i = 40; i < 445; i++) {
      let r = random(150);
      stroke(r);
      line(45, i, 545, i);
    }
  }
  if (cliks == 2) {
    image(img5, 35, 30);
    image(img2, 90, 140);
    if (frameCount % 100 == 0) {
      image(img3, 90, 140);
    }
  }
  if (cliks == 3) {
    image(img5, 35, 30);
    image(img3, random(90, 94), random(140, 142));
  }
  if (cliks == 4) {
    tint(0, random(20, 100), random(20, 100));
    image(img5, 35, 30);
    tint(255);
    image(img3, random(90, 94), random(140, 142));

    for (let i = 40; i < 445; i++) {
      let r = random(150);
      stroke(r, 70);
      line(45, i, 545, i);
    }
  }

  image(img1, 0, 0);
  image(img4, 600, 330);
  fill(255, 0, 0);
  if (frameCount % 50 < 25 && cliks == 0) {
    fill(70, 30, 20);
  }

  if (cliks == 6) {
    fill(70, 30, 20);
  }
  noStroke();
  circle(670, 400, 7);

  //console.log (mouseX, mouseY)
}

function mousePressed() {
  if (cliks < 6 &&  mouseX > 600 && mouseX < 670 && mouseY > 320 && mouseY < 400) {
    cliks++;
    clack.play();
    
  }
  if (cliks == 1 || cliks == 4 || cliks == 5) {
    estatica.loop();
    estatica.setVolume(0.4);
  } 
  else {
    estatica.stop();
  }
  
  if (cliks == 2 || cliks == 3 || cliks == 4) {
    batucada.stop();
    batucada.loop();
  } 
  else {
    batucada.stop();
  }
}
