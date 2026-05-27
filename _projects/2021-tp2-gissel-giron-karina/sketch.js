var puntos = [];

var mult;

var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

var sonido;
var fft;

var particula = [];

let angle = 0

let boxSize = 100
let boxSize2 = 40
let boxSize3 = 500
let boxSize4 = 40
var maus = 10;

function preload() {
  sonido = loadSound("blue-dream-cheel.mp3");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
   
  angleMode(DEGREES);
  noiseDetail(10);

  fft = new p5.FFT(); //sinido

  var densidad = 90;
  var espacio = width / densidad;

  for (var x = -3; x < width; x += espacio) {
    for (var y = -3; y < height; y += espacio) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      puntos.push(p);
    }
  }
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  mult = random(0.002, 0.01);
  
  
  
  
// background(0);
}

function draw() {
background(0);
 
  var locX = mouseX - width / 1;
  var locY = mouseY - height / 1;
  
  rotateZ(angle);
  rotateX(angle);
  rotateY(angle);

  //box(100);
  noFill();
  stroke(255);
  strokeWeight(3);
  box(boxSize);
  
  rotateX(angle); 
  stroke(255);
  fill(245, 84, 84,85 );
  box(boxSize2);
  
   noFill();
   strokeWeight(1);
 
rotateY(angle);
  box(boxSize3);
  
rotateY(angle);
sphere(boxSize4);
  
  
  rotateX(angle);
  

  angle+= 0.55
  
  
  
  
  noCursor();
  
  strokeWeight(1);
  noStroke();
  
   push();
  
  translate(locX, locY);
  rotateY(frameCount * 0.003);
  noFill();
  stroke(255);
  sphere(maus, maus);
  pop();
  

  for (var i = 0; i < puntos.length; i++) {
    var r = map(puntos[i].x, 0, width, r1, r2);
    var g = map(puntos[i].x, 0, height, g1, g2);
    var b = map(puntos[i].x, 0, width, b1, b2);

    var alpha = map(
      dist(width / 55, height / 55, puntos[i].x, puntos[i].y),
      0,160,300, 8);

    fill(r, g, b, alpha);

    var angulo = map(
      noise(puntos[i].x * mult, puntos[i].y * mult),
      0,
      1,
      0,
      720
    );

    puntos[i].add(createVector(cos(angulo), sin(angulo)));
    
  
    if (dist(width / 55, height / 55, puntos[i].x, puntos[i].y) < 160) {
      ellipse(puntos[i].x, puntos[i].y, 2.55);
    }
  }

  stroke(255);
  noFill();

  translate(width / 55, height / 55);

  var wave = fft.waveform(); //sonido

  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i < 181; i += 0.5) {
      var index = floor(map(i, 0, 181, 0, wave.length));

      var r = map(wave[index], -1, 1, 150, 170);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y);
    }
    endShape();
  }

  
  var p = new Particula();
  particula.push(p);
  
  
  for (var i = particula.length - 1; i >= 0; i--) {
    if (!particula[i].edges()) {
      particula[i].update()
      particula[i].show()
       } else {
    particula.splice(i, 1)
      
    }
  }
}

function mouseClicked() {
  if (sonido.isPlaying()) {
    sonido.pause();
    noLoop();
  } else {
    sonido.play();
    loop();
  }
}

class Particula {
  constructor() {
    this.pos = p5.Vector.random2D().mult(161); //diametro de las particulas
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(1, 5);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  edges(){
    if(this.pos.x < -width / 2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2){
      return true 
    }else{
      return false
    }
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.w); // tamaño de las particulas
  }
}
