var fotos = ["imagen","ninguna","es","inofensiva","ninguna", "imagen","es","inofensiva","ninguna","imagen","es","inofensiva","ninguna","imagen","inofensiva","es","imagen","ninguna","inofensiva"];

var index = 0;
function preload(){
  cabezote = loadImage('import/arriba.png')
  corazon = loadImage('import/corazon.png')
}

function setup(){
  let canvas = createCanvas(400, 528);
  canvas.parent('div-sketch');
  }

function draw (){
  background(0);
  image(cabezote,0,0,)
  image(corazon,0,465)
  

fill(255);
textSize(32)
text(fotos[index],19,254);
}
function mousePressed(){
  index = index +1;
  
  if (index == 19)
    index = 0;
  }

 
