var fondo = 0;
var fondo2 = 50;
var fondo3 = 100;
var fondo4 = 170;
var fondo5 = 255;


function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
 
}
function draw() {
  //FONDO
  if (mouseX > 450) {
    background(fondo5);
  } else if (mouseX > 300) {
    background(fondo4);
  } else if (mouseX > 180) {
    background(fondo3);
  } else if (mouseX > 100) {
    background(fondo2);
  } else if (mouseX > 10 && mouseX < 50) {
    background(fondo);
  }

  //figura 1
  fill(190);
  strokeWeight(2);
 ellipse(440, 240, 120, 120)
  
  //figura2
  fill(100);
  arc(256, 240, 120, 120, 0, PI + QUARTER_PI, PIE);
  
  //figura3
  fill(250)
arc(70,240, 120, 120, 0, PI + TWO_PI, CHORD);
}
