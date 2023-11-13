
let cl = -1;
let cielo;
let marco;
let zapallo;
let z =  0;

let expl = [];

function setup() {
  
  createCanvas(540, 960);
  windowResized();
  background(220);
  
  cielo = loadImage("img/cielo.png");
  edif = loadImage("img/edif.png");
  marco = loadImage("img/marco.png");
  zapallo = loadImage("img/zapallo.png");
  
  for (let i = 0; i < 13; i++) {
    
    if (i == 12) expl[i] = zapallo;
    else if (i <= 9) expl[i] = loadImage("img/0" + i + ".png");
    else expl[i] = loadImage("img/" + i + ".png");
  }
}

function draw() {

  image(cielo, 0, 0, width, height);
  push();
  translate(width/2, height/2);
  scale(1 + z*0.1);
  if (cl >= 0) image(expl[cl ], -width/2, -height/2, width, height);
  pop();
  image(edif, 0, 0, width, height);
  image(marco, 0, 0, width, height);
}

function mouseReleased() {
  if ( cl < 12) cl++;
  else if ( cl >= 12) z++;
}

function windowResized() {
  
  const pg = document.getElementsByTagName("body")[0];
  const cnv = document.getElementById("defaultCanvas0");
  
  pg.style.backgroundColor = "rgb(0,0,0)";
  pg.style.display = "flex";
  pg.style.justifyContent = "center";
  pg.style.alignItems = "center";
  pg.style.overflow = "hidden";
  pg.style.width = "100vw";
  pg.style.height = "100vh";
  cnv.style.margin = "2vw";
  if (windowWidth > windowHeight ) {
    cnv.style.height = "96vh";
    cnv.style.width = "54vh";
  }
}