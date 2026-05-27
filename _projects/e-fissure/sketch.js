//Nancy Felipos


//se crea una clase con su información y comportamiento
class Boton {
  constructor(x_, y_, r_) {
    // Posición y tamaño
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // está el punto dentro del círculo? (como mouse rollover)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r - radio / 2;
  }

  // Enseña nuestra clase (hardcoded colors)
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(mouseX,mouseY,0);
    } else {
      fill(mouseX,mouseY,10);
    }
    stroke(3);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
// variable del sonido
let radio = 25
let sonido1;
// el objeto de la clase (esto lanzará el sonido)
let circulo1;
let circulo2;
let circulo3;
let circulo4;
let circulo5;
let circulo6;
/////////////////////////////////////////
let jap;
let ing;
let rus;
let ruspa;
let spa;
let frn;
////////////////////////////////////////////
let mic;
let song;
let sound;
var img1;
var img2;
var img3;
var img4;
var minimo = 1
var maximo = 10;

function preload() {
  img1 = loadImage("img/2.webp");
  img2 = loadImage("img/2e.webp");
  img3 = loadImage("img/inte.webp");
  img4 = loadImage("img/yesno.webp");
  song = loadSound('sound/fondo1.mp3');
  ing = loadSound('sound/ing.mp3');
  frn = loadSound('sound/frn.mp3');
  spa = loadSound('sound/spa.mp3');
  ruspa = loadSound('sound/rusospa.mp3');
  rus = loadSound('sound/rusoo.mp3');
  jap = loadSound('sound/1-japo.mp3');
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('div-sketch');
  background(255, 0, 0);
  ///////////////////////////////
    // crea una entrada de audio
  mic = new p5.AudioIn();

  // inicia la entrada de audio
  // por defecto, no la conecta (.connect()) a los parlantes del computador.
  mic.start();
  song.loop();
  ///////////////////////////////////////////////
    sonido1 = jap;
  sonido2 = frn;
  sonido3 = ing;
  sonido4 = rus;
  sonido5 = ruspa;
  sonido6 = spa;

  // Creamos el botón
  circulo1 = new Boton(90,200,18);
  circulo2 = new Boton(100,220,18);
  circulo3 = new Boton(120,230,18);
  circulo4 = new Boton(140,220,18);
  circulo5 = new Boton(150,180,18);
  circulo6 = new Boton(150,200,18);
  
}
function draw() {
  
  background(mouseX, mouseY,100,200);
  textSize(16);
  textAlign(RIGHT);
  text('TALK TO ME AND PRESS MY LITTLE EYES',400,20);
  
  image(img2, 35, 28,440,440);
  
  
  let gridSize = 35;
  

  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(mouseX, mouseY);
      rect(x , y , 20, 5);
      stroke(255, 50);
      line(x, y, width / 2, height / 2);
    }
  }
  
  image(img1, 20, 0);
  image(img3, 0, 0);
    /////////////////////////////////////mic
  let vol = mic.getLevel();
  fill(mouseX,mouseY,60);
  stroke(0);
    ///////////////////////////////////////
     // Muestra el botón
  circulo1.display(mouseX, mouseY);
  circulo2.display(mouseX, mouseY);
  circulo3.display(mouseX, mouseY);
  circulo4.display(mouseX, mouseY);
  circulo5.display(mouseX, mouseY);
  circulo6.display(mouseX, mouseY);
  ////////////////////////////////////////////////
  var lineas = map(mouseX, 0, width, minimo, maximo);  
  for (var i = 0; i <= 30; i++) {
    var x = random(img1.width );
    var y = random(img1.height);
    var angulo = random(-40, 1);
    var pix = img1.get(x, y);
    strokeWeight(lineas);
    stroke(pix);
    line(x, y, x, y + angulo);
    
    
  }
    // dibuja una elipse con altura según el volumen
  let h = map(vol, 0, 1, height, 0);
  ellipse(120, h - 310, 30, 30);
  
}
function mousePressed() {

  if (circulo1.contains(mouseX, mouseY)) {
  sonido1.play();
  }
  if (circulo2.contains(mouseX, mouseY)) {
  sonido2.play();
  }
   if (circulo3.contains(mouseX, mouseY)) {
  sonido3.play();
  }
  if (circulo4.contains(mouseX, mouseY)) {
  sonido4.play();
  }
   if (circulo5.contains(mouseX, mouseY)) {
  sonido5.play();
  }
  if (circulo6.contains(mouseX, mouseY)) {
  sonido6.play();
  }
}
