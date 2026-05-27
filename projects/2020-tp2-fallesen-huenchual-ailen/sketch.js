let a=0.0;
let s=0.0
function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent('div-sketch');
}

function draw() {
  background(0,0,0);
  stroke("rgba(0,255,0,0.25)");
  strokeWeight(4);
  fill(0,0,0);
  rect(0,0,150,150);
  rect(150,0,150,150);
  rect(300,0,150,150);
  rect(450,0,150,150);
  rect(0,150,150,150);
  rect(150,150,150,150);
  rect(300,150,150,150);
  rect(450,150,150,150);
  fill("#fae");
  textFont("Arial");
  text("click",95,50);
  text("click",230,70);
  text("click",400,90);
  text("click",550,120);
  text("click",550,170);
  text("click",440,200);
  text("click",330,220);
  text("Con un solo click...",200,250);
  if(mouseIsPressed)
{push();
 background(0,0,0);
 fill(0,0,0);
 stroke("#fae");
 ellipse(450,200,50,50);
 ellipse(300,100,70,70);
 ellipse(50,50,60,60);
 textFont("Arial");
 text("puedo cambiar el mundo.",200,250);
 stroke("#fae");
 strokeWeight(4);
 fill(random(10),random(200),random(350));
 a=a+0.04;
 s=cos(a*2);
 translate(width/2,height/2);
 scale(s);
 triangle(30,75,58,20,86,75);
 triangle(60,150,120,40,200,180);
}}
