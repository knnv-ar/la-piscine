//Autor: Barbara Saez
//Titulo: Rough
//Catedra: Lacabbane 2022/ Turno Mañana 2022


//original
let speedX = 10;

function setup() {

  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
  if (keyIsPressed){
    if (keyIsPressed ==0) {
  frameRate(10);} 

  //trying¿?
  for (let i = 0; i < width; i++) {
    let b = random(height);
    stroke(b);
    rotate(PI / 1);
    line(b * 5, 0, i, height);
  }
  //lines above
  
      line(400, 400, 400, 2);
      line(390, 390, 390, 1);
      line(380, 380, 380, 1);
      speedX = speedX + 2;
      line(370, 370, 370, 1);
      line(360, 360, 360, 1);
      line(350, 350, 350, 1);
      speedX = speedX + 2;
      line(340, 340, 340, 1);
      line(330, 330, 330, 1);
      line(320, 320, 320, 1);
      speedX = speedX + 2;
      line(310, 310, 310, 1);
      line(300, 300, 300, 1);
      line(290, 290, 290, 2);
      speedX = speedX + 2;
      line(280, 280, 280, 2);
      line(270, 270, 270, 2);
      line(90, 90, 90, 689);

      //lines below
      push();
      strokeWeight(3);
      line(100, 100, 100, 689);
      line(110, 110, 110, 689);
      line(120, 120, 120, 689);
      strokeWeight(3);
      line(130, 130, 130, 689);
      line(140, 140, 140, 689);
      line(150, 150, 150, 689);
      line(160, 160, 160, 689);
      push();
      strokeWeight(3);
      line(170, 170, 170, 689);
      line(180, 180, 180, 689);
      line(190, 190, 190, 689);
      line(200, 200, 200, 689);
      strokeWeight(3);
      line(210, 210, 210,689);
      line(220, 220, 220, 689);
      line(230, 230, 230, 689);
      line(240, 240, 240, 689);
      strokeWeight(3);
      line(250, 250, 250, 689);
      pop();
    }
}
