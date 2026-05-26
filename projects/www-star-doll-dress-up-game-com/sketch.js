var posx = [];
var posy = [];
var t = 40;
var default_ = 1;
var opcion;


function preload(){
  layout =loadImage("media/layout.png");
  base =loadImage("media/base.png");
  img1 =loadImage("media/c1.png");
  img2 =loadImage("media/c2.png");
  img3 =loadImage("media/c3.png");
  star =loadImage("media/star.png");
}

function setup() {
  let canvas = createCanvas(800, 670);
  canvas.parent('div-sketch')
  
  opcion = img1;
  
  //fondo 1  
  push()
  noStroke();
  fill(255);
  var xespacio = (width - t) / 9;
  var yesapcio = (height - t) / 10;
  
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      posx.push(i * xespacio + t / 3); 
      posy.push(j * yesapcio + t / 2);
    }
  }
  pop()
  
}

function draw() {
  
  //fondo 1
  background(255,203,226);
  push()
  noStroke();
  for (var i = 0; i < posx.length; i++) 
  {
    posy[i] += 3; 
    if (posx[i] > width + 40) {
      posx[i] = -40; 
    }
    if (posy[i] > height + 40) { 
      posy[i] = -40; 
    }
  }
  for (var i = 0; i < posx.length; i++) 
  {
    ellipse(posx[i], posy[i], 40, 40);
  }
  pop()

  //fondo2
  push();
  image(layout,0,0)
  pop();
  
  //opciones deco
  push()
  strokeWeight(6)
  stroke(234,77,146)
  fill(255)
  ellipse(100,240,70)
  ellipse(100,340,70)
  ellipse(100,440,70)
  image(star,65,205)
  image(star,65,305)
  image(star,65,405)
  pop()
  
  //dibujos
  image(base,-75,10)
  image(opcion,-75,10)
  
}
 //cambio de img

function mouseClicked()
{
  if (dist(mouseX, mouseY,100,240)<70)
  {
    opcion = img1;
  }
  else if (dist(mouseX,mouseY, 100,340)<70){
    opcion = img2;
  }
  else if (dist(mouseX,mouseY,100,440)<70){
    opcion = img3;
  }
}
