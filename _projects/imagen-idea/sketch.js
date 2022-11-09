// León Flax - 2022 - UNA - AM1

let zValue = 12,
  song,
  rotateMode,
  colorCirc,
  rotar = 0,
  startClick = false,
  playCount = 0,
  playClr,  
  violeta,
  rojo,
  rojo2,
  azul;

function setup() {
  let canvas = createCanvas(850, windowHeight, WEBGL);
  canvas.parent('div-sketch');
  angleMode(DEGREES);
  frameRate(60);
  cursor(HAND);
}

function draw() {
  background(0);

  playCount++;

  if(!startClick) {
    startScreen();
  } else {
    luces();

    figura();

    cDerecho();
  }
}

// Tracks

// Art Deco - Lana del Rey
// Author: Elizabeth Grant / Rick Nowels - © Sony/ATV Music Publishing LLC, Universal Music Publishing Group

// Space Song - Beach House
// Author: Alex Kristian Scally / Victoria Garance Alixe Legrand - © Sub Pop Records

// Sleep Apnea - Beach Fossils
// Author: James Dustin Payseur - © Beach Fossils

// Why Didn't You Stop Me - Mitski
// Author: Mitsuki Laycock - © Warner Chappell Music, Inc

// Call It Fate, Call It Karma - Moon Panda
// Author: Julian Casablancas / Nick Valensi / Fabrizio Moretti / Albert Hammond Jr / Nikolai Fraiture - © The Strokes Band Music

function setCues(){
  violeta = color(30, 0, 94);
  rojo = color(94, 7, 0);
  rojo2 = color(146, 2, 0);
  azul = color(0, 37, 146);
  
  song.play();
  // Art Deco
  // Control eje Z
  song.addCue(0, zControl, 12);
  // Control rotacion de esfera
  song.addCue(0, rotControl, 1);
  // Control de color
  song.addCue(0, colControl, violeta);
  
  // Space Song
  // song.jump(30);
  song.addCue(30, zControl, 300);
  song.addCue(30, rotControl, 1);
  song.addCue(30, colControl, rojo);
  
  // Sleep Apnea
  // song.jump(60);
  song.addCue(60, zControl, 300);
  song.addCue(60, rotControl, 3);
  song.addCue(60, colControl, azul);
  
  // Why didnt you stop me
  // song.jump(90);
  song.addCue(90, zControl, 30);
  song.addCue(105, zControl, 3000);
  song.addCue(90, rotControl, 4);
  song.addCue(115, rotControl, 1);
  song.addCue(90, colControl, violeta);
  
  // Call it fate call it karma
  // song.jump(120);
  // song.jump(140);
  song.addCue(120, zControl, 12);
  song.addCue(120, rotControl, 2);
  song.addCue(120, colControl, rojo);
  song.addCue(157, endControl);
}

function preload() {
  song = loadSound("assets/songs.mp3");
}

function startScreen() {
  if (playCount < 15) {
    playClr = color(255);
  } else if (playCount >= 15 && playCount < 30) {
    playClr = color(250, 50);
  } else {
    playCount = 0;
  }

  push();
  fill(0);
  noStroke();
  rect(0, 0, width, height);
  pop();

  push();

  rotate(90);
  fill(playClr);
  scale(1.2);
  triangle(-50, 0, 0, -90, 50, 0);

  pop();
}

function mouseClicked() {
  if (!startClick && mouseButton == LEFT) {
    startClick = true;
    setCues();
    noCursor();
  }
}

function zControl(controlZ) {
  zValue = controlZ;
}

function rotControl(controlRot) {
  rotar = controlRot;
}

function colControl(controlCol) {
  colorCirc = controlCol;
}

function endControl() {
  startClick = false;
  song.stop();
  cursor(HAND);
  zControl(12);
  rotControl(1);
  colControl(violeta);
}

function luces() {
  // Luz con color y eje Z variables
  directionalLight(colorCirc, 5, 0, zValue);
}

function figura() {
  noStroke();
  // Rotacion variable de la esfera
  if (rotar == 1) {
    rotateY(frameCount * 0.25);
  } else if (rotar == 2) {
    rotateY(frameCount * 0.2);
  } else if (rotar == 3) {
    rotateY(frameCount * 0.15);
  } else if (rotar == 4) {
    rotateY(tan(frameCount * 15));
  }
  // Material de la esfera
  specularMaterial(0, 0, 0, 255);
  shininess(40);
  // Esfera
  sphere(250, 14, 100);
}

function windowResized() {
  resizeCanvas(850, windowHeight, WEBGL);
}

function cDerecho() {
  document.oncontextmenu = function () {
    return false;
  };
}
