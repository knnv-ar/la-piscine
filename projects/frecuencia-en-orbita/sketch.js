let notas = [15, 21, 23, 25, 29, 34, 39, 42];
let osc, env;

function preload() {
  base1 = loadSound("160.wav");
  base2 = loadSound("120.mp3");
  base3 = loadSound("drum.mp3");
}

function setup() {
  let canvas =createCanvas(750, 500, WEBGL);
  canvas.parent('div-sketch');
  env = new p5.Envelope(0.0001, 0.2, 0.1, 0.1);
  osc = new p5.Oscillator("sawtooth");
  osc.start();
  osc.amp(env);
}

function draw() {
  background(0);

  orbitControl();

  push();

  translate(0, 0, 100);
  sistema(40, 70);

  push();

  translate(300, 250, -450);
  sistema(40, 70);

  pop();

  push();

  translate(300, -250, -450);
  sistema(40, 70);

  pop();

  push();

  translate(-300, -250, -450);
  sistema(40, 70);

  pop();

  push();

  translate(-300, 250, -450);
  sistema(40, 70);

  pop();

  push();

  translate(-700, 0, -1250);
  sistema(40, 70);

  pop();

  push();

  translate(700, 0, -1250);
  sistema(40, 70);

  pop();

  push();

  translate(0, 650, -1250);
  sistema(40, 70);

  pop();

  push();

  translate(0, -650, -1250);
  sistema(40, 70);

  pop();
}

function keyReleased() {
  
let prueba = false;
  
  
  if (keyCode === UP_ARROW) {
    base1.loop();
    base2.stop();
    base3.stop();
  } else if (keyCode === LEFT_ARROW) {
    base1.stop();
    base2.loop();
    base3.stop();
  } else if (keyCode === DOWN_ARROW) {
    base1.stop();
    base2.stop();
    base3.loop();
  } else if (keyCode === RIGHT_ARROW) {
    base1.stop();
    base2.stop();
    base3.stop();
  } 

}

function sistema(a1, a2) {
  let x1 = 1;
  let x2 = 6;
  let x3 = 5;
  let k1 = 260;

  stroke(255);

  push();

  if (keyIsPressed === true && key == "1") {
    stroke(0);
    fill(255, 190);
    rotateY(frameCount * 0.5);
    rotateZ(frameCount * 0.5);
    box(a1);
    osc.freq(midiToFreq(notas[1]));
    env.play();
  } else {
    stroke(0);
    fill(255);
    rotateY(x1 * frameCount * 0.01);
    rotateZ(x1 * frameCount * 0.01);
    box(a1);
  }

  pop();
  //rojo
  push();

  if (keyIsPressed === true && key == "2") {
    fill(255, 0, 0, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, -k1 * sin(x3 * frameCount * 0.001));
    box(a2);
    osc.freq(midiToFreq(notas[2]));
    env.play();
  } else {
    fill(255, 0, 0, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, -k1 * sin(x3 * frameCount * 0.001));
    box(a2);
  }

  pop();
  //cyan
  push();
  if (keyIsPressed === true && key == "3") {
    fill(0, 255, 255, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, k1 * sin(x3 * frameCount * 0.001));
    box(a2);
    osc.freq(midiToFreq(notas[3]));
    env.play();
  } else {
    fill(0, 255, 255, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, 0, k1 * sin(x3 * frameCount * 0.001));
    box(a2);
  }

  pop();
  push();
  //amarillo

  if (keyIsPressed === true && key == "4") {
    fill(255, 255, 0, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, -k1 * sin(x3 * frameCount * 0.001), 0);
    box(a2);
    osc.freq(midiToFreq(notas[4]));
    env.play();
  } else {
    fill(255, 255, 0, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, -k1 * sin(x3 * frameCount * 0.001), 0);
    box(a2);
  }

  pop();
  //azul
  push();

  if (keyIsPressed === true && key == "5") {
    fill(0, 0, 255, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, k1 * sin(x3 * frameCount * 0.001), 0);
    box(a2);
    osc.freq(midiToFreq(notas[5]));
    env.play();
  } else {
    fill(0, 0, 255, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(0, k1 * sin(x3 * frameCount * 0.001), 0);
    box(a2);
  }

  pop();
  push();
  //verde
  if (keyIsPressed === true && key == "6") {
    fill(0, 255, 0, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(-k1 * sin(x3 * frameCount * 0.001), 0, 0);
    box(a2);
    osc.freq(midiToFreq(notas[6]));
    env.play();
  } else {
    fill(0, 255, 0, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(-k1 * sin(x3 * frameCount * 0.001), 0, 0);
    box(a2);
  }

  pop();
  //magenta
  push();
  if (keyIsPressed === true && key == "7") {
    fill(255, 0, 255, 150);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(k1 * sin(x3 * frameCount * 0.001), 0, 0);
    box(a2);
    osc.freq(midiToFreq(notas[7]));
    env.play();
  } else {
    fill(255, 0, 255, 40);
    rotateX(x2 * frameCount * 0.001);
    rotateY(x2 * frameCount * 0.001);
    rotateZ(x2 * frameCount * 0.001);
    translate(k1 * sin(x3 * frameCount * 0.001), 0, 0);
    box(a2);
  }

  pop();
}
