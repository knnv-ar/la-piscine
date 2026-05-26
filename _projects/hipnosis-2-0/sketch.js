var hipnosis;
var f;
  

function preload(){
 hipnosis = loadStrings("hipnosis.txt");
  cel = loadImage ("celular-con-brazos.webp");
  celu = loadImage("celu.webp");
  braN = loadImage ("solobrazosnegativo.webp");
  
}

function setup() {
  let canvas = createCanvas(520, 1000);
  canvas.parent('div-sketch');
  f = loadFont("vcr-osd-mono.ttf");
  
}

function draw() {

  
    background(250,10);
   
swingX = sin (frameCount/50)*120;
swingY = cos (frameCount/25)*20;

    
  //pendulo: celular  
image (cel, 200 + swingX, 250 + swingY, 180,400);
  
  
  //guía al clickear

if (mouseIsPressed){
  background(0);
 
  //
  image(braN,200 + swingX, 250 + swingY, 180,400);
  //
  image(celu,10,0);
//
  textFont(f);
  textSize(16);
  for (var i = 0; i < hipnosis.length; i++) {
    fill(128+(i*10));
    text(hipnosis[i], 40, 200+i*20);
     
     
}
  
  
 
document.oncontextmenu = function() {
  return false;
  
}

}
}
