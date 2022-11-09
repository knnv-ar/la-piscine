//TP N°2 AM1 TM UNA - Victoria Cuomo
//Nombre de la obra: Characters, downstairs

// Cuphead & Mugman
// Creator: Jared Moldenhauer - © studio mdhr entertainment inc.

// Oswald 
// Creator: Walt Disney - © Walt Disney Company

// Droopy
// Creator: Tex Avery -  © Metro-Goldwyn-Mayer

// Song: Ode to the sleep (instrumental) - Twenty One Pilots
// Authors: Tyler Joseph / Josh Dun - © 2022 copyright fbr and tøp

var back, cuphead, oswald, droopy, duchamp, ode;
let pos = [
  [400, 32],
  [320, 80],
  [270, 118],
  [220, 162],
  [160, 200],
  [120, 242],
  [90, 285],
  [45, 327],
  [0, 368],
  [-40, 410],
  [-90, 450],
];

function preload() {
  back = loadImage("img/escaleras.jpg");
  cuphead = loadImage("img/cups.png");
  duchamp = loadImage("img/duchamp.png");
  ode = loadSound("ode.mp3");
  oswald = loadImage("img/disneys.png");
  droopy = loadImage("img/droopy.png");
}

function cups(ejeX, ejeY) {
  //cuphead y mugman
  image(cuphead, ejeX, ejeY, 200, 160);
}
function oswalds(ejeX, ejeY) {
  //oswald
  image(oswald, ejeX + 40, ejeY - 40, 200, 200);
}
function droopys(ejeX, ejeY) {
  //droopy
  image(droopy, ejeX + 10, ejeY - 85, 250, 240);
}

function tiempo() {
  //canción
  if (ode.currentTime() < 12.5) {
    tint(255, 255, 255, random(120, 255));
    for (let i = 0; i < pos.length; i++) {
      cups(pos[i][0], pos[i][1]);
    }
  } else if (ode.currentTime() < 25) {
    tint(255, 255, 255, random(120, 255));
    for (let i = 0; i < pos.length; i++) {
      oswalds(pos[i][0], pos[i][1]);
    }
  } else if (ode.currentTime() < 38) {
    tint(255, 255, 255, random(120, 255));
    for (let i = 0; i < pos.length; i++) {
      droopys(pos[i][0], pos[i][1]);
    }
  }
}

function setup() {
  let canvas = createCanvas(500, 543);
  canvas.parent('div-sketch');
  ode.loop();
  noCursor();
  ode.setVolume(0.8);
}

function draw() {
  background(255);
  tint(255);
  image(back, 0, 0); //fondo de escaleras

  frameRate(28);
  tiempo();

  tint(255, 255, 255, random(50, 200));
  image(duchamp, 0, 0);
}
document.oncontextmenu = function () {
  return false;
};
