//ESPIRAL DE NOVEDADES
var angulo = 0.0;
var desplazamiento = 256;
var escalar = 130;
var velocidad = 0.07;
var b =255;
var n = 0;
var rot=60
var roti=3



function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(b);
   frameRate(300)

}
function draw(){ 

  fondo()
  
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  ellipse(x, y, rot, roti);
  angulo += velocidad;
  escalar += velocidad;
  // console.log(frameCount)

  }


function fondo(){
   for(var eli = 250; eli > 20; eli -=20 )
 {
  ellipse(256, 256, eli, eli);
  fill(b);
   noStroke();
  }
  
  for(var eli2 = 230; eli2 > 20; eli2 -=20 )
 {
  ellipse(256, 256, eli2, eli2);
  fill(n);
   noStroke();
  }
 
  push()
  if(mouseIsPressed){
  mousePressed()
   background(0);
  }
  
  pop()
  

  } 

function mousePressed() {
    n=255;
    b=0;
  rot=3;
  roti=60;
 // background(0)
  }