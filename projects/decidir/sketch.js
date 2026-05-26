
// Presionar y soltar para decidir
//Audio: AL024 - Mathame - Skywalking


let r = 200;
let density;
let h = 278;
let s = 100;
let b = 100;
let a = 0;
var heartbeat;
let r1 = 0.4;
var img1;
var img2;
var img3;
var rapidez = false;
var ralentizar = false;
let fr = 30;
var n1= 32;
var flagm=0;

function preload() {
  heartbeat = loadSound("heartbeat.mp3");
  song = loadSound("audio.mp3");
  song2 = loadSound("audio2.mp3");
  img1 = loadImage("img2.png");
  img2 = loadImage("img3.png");
  img3 = loadImage("t.png");
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(2);
  heartbeat = createAudio("heartbeat.mp3");
  song = createAudio("audio.mp3");
  song2 = createAudio("audio2.mp3");
  heartbeat.loop();
  frameRate(fr);
}

function draw() {
  background(230, 50, 15, 100);
  sphere1();
  bingBang();
  if (rapidez) {
    for (var i = 0; i < random(30, 70); i++) {
      if (i % 2 == 0) {
        push();
        translate(random(-200, 800), random(-200, 800), 0);
        texture(img1);
        plane(150, 150); //Parámetros: ancho y alto
        pop();
      } else {
        push();
        translate(random(-200, 800), random(-200, 800), 0);
        texture(img2);
        plane(150, 150); //Parámetros: ancho y alto
        pop();
      }
    }
  }

  if (ralentizar) {
      
      push();
    if (n1<200&&flagm==0){
    n1++;
    }
    else if(n1>32){
      flagm=1;
      n1--;
    }
    else{
      n1=32;
      flagm=0;
    }
        translate(p5.Vector.fromAngle(millis() / 300, n1));
        noStroke();
        fill(0);
        sphere(20);
        pop();
      }
    }
  
function mousePressed() {
  if (mouseX > 300) {
    fastSpeed();
    r1 = 2;
    rapidez = true;
    ralentizar = false;
  } else {
    slowSpeed();
    r1 = 0.2;
    rapidez = false;
    ralentizar = true;
  }
}

function mouseReleased() {
  //heartbeat.pause();
  song.pause();
  heartbeat.speed(1);
  r1 = 0.4;
  song2.pause();
  rapidez = false;
  ralentizar = false;
}

function bingBang() {
  push();
  stroke(h, s, b, a);
  rotateZ(frameCount * r1);
  rotateY(frameCount * r1);

  for (let phi = 0; phi < 180; phi += 2) {
    beginShape(POINTS);
    for (let theta = 0; theta < 360; theta += 2) {
      let x = r * (1 + sin(theta * 6) * sin(phi * 5)) * cos(phi);
      let y = r * (1 + sin(theta * 6) * sin(phi * 5)) * sin(phi) * sin(theta);
      let z = r * (1 + sin(theta * 6) * sin(phi * 5)) * sin(phi) * cos(theta);

      vertex(x, y, z);
    }
    endShape();
  }
  pop();
}

function fastSpeed() {
  heartbeat.speed(3);
  song.play();
  song.speed(1.4);
  song.volume(0.2);
  song2.play();
}

function slowSpeed() {
  heartbeat.speed(0.8);
  song.play();
  song.volume(0.1);
  song.speed(0.7);
  song2.play();
  song2.speed(0.3);
}

function sphere1() {
  push();
  translate(mouseX - width / 2, 0);
  sphere(10);
  pop();
}
