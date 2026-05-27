//Quiero poder salir del VAR con alguna tecla y que cuando vuelva 
//a la etapa del circulo, halla una interferencia en esa imagen. Una cuarta presencia. Es el circulo "t"

let limite;
let BPM;
let ejeUno;
let rotacion;
let i = 250;
let f = 20;
let = mov = 1
let t


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  console.log(mouseX, mouseY);
}

function draw() {
  ejeUno = random(65, 68);
  BPM = random(4, 8);
  limite = random(0, 600);
  frameRate(BPM);
  t= random (20,500)


  noFill();
  stroke(360);
  strokeWeight(2);
  background(0);
  limite = random(0, 600);

  
  circle (mov,mov,mov)
  //mov = mov + 2
  mov = random (10,1200)

 circle (t,250,t)
  
  if (keyIsDown) {
    if (mouseButton == LEFT){
  
  for (var i = 250; i < limite; i += 50) {
    for (var f = 20; f <= random(100, 2500); f += 10) {
      line(i, f, width, height);
      line(i + 200, f + 200, width, height);

      push();
      scale(0.7);
      triangle(i, ejeUno, i, 365, 137, i);
      pop();
      
       }
    }
  }
}
}

document.oncontextmenu = function () {
  return false;
};

