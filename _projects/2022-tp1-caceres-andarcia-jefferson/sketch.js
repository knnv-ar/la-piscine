let ax = 0;
let ay = 0;
let vel1 = 2;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(0);
 
  strokeWeight(0.8);
  
  push();
  //MOVIMIENTO
  ax += vel1*0.25;
  ay += vel1*0.25;
  translate(ax,ay);
  //INTERACCION
  if (keyIsPressed == false || mouseIsPressed ==false) {
      if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
      ax=0;
    }
      if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
      ay=0;
    }
  //CUBOS
  push();
  for (let x0 = -1024; x0 < 1024; x0 += 120) {
    for( let y0= -1024; y0<1024; y0 += 120){
    fill(180);
    rect(15 + x0, 15+y0, 80, 80);
    quad(15 + x0, 15+ y0, 5 + x0, 25+ y0, 5 + x0, 105+ y0, 15 + x0, 95+ y0);
    quad(15 + x0, 95+ y0, 5 + x0, 105+ y0, 85 + x0, 105+ y0, 95 + x0, 95+ y0);
    fill(170, 150);
    quad(15 + x0, 15+ y0, 5 + x0, 25+ y0, 85 + x0, 25+ y0, 95 + x0, 15+ y0);
    quad(95 + x0, 15+ y0, 85 + x0, 25+ y0, 85 + x0, 105+ y0, 95 + x0, 95+ y0);
    rect(5 + x0, 25+y0, 80, 80);
  }
  }
  pop();
    }
  //VIBRACIÓN
  if (ax > 512 || ay > 512) {
    ax = -90;
    ay = -90;
    vel1= -1*vel1;
  } else {
    vel1= -1*vel1+24;
  }
  pop();
 
  }
  