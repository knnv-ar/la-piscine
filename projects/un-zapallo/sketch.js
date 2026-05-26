
let cl = -1;
let cielo;
let marco;
let zapallo;
let z =  0;

let expl = [];

function setup() {

  let canvas = createCanvas(540, 960);
  canvas.parent('div-sketch');
  
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
