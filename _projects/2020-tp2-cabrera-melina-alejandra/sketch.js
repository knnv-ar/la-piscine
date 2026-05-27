//Melina Alejandra Cabrera
//UNA - Artes  Multimediales
//Cátedra Lacabanne, turno mañana 2020

let eyes = 0;
let xy = [];
let velocidad=5;
let img1, img2;
let song;


function preload() {
  //imagenes
  
  img1 = loadImage('nota2.webp');
  img2 = loadImage('color.webp');
  
}

function setup() {
  let canvas = createCanvas(750, 600);
  canvas.parent('div-sketch');
}


function draw() {
  background(img2);
  cara();


// mouse + clave de sol

  for (var i = 0; i < xy.length; i++) {
    image(img1,xy[i][0], xy[i][1], 50, 80);
    xy[i][1] += velocidad;
    
    if(xy[i][1]>height){
      xy.splice(i,1)
    }
  }
 // console.log(xy);
}


function mousePressed() {
  xy.push([mouseX, mouseY]);
}



//mouse + cara

function mouseMoved() {
  eyes = eyes + 5;
  if (eyes > 200) {
    eyes = 0;
  }
}


//CARA
  
function cara() {
  
//ojos + transpariencia
  stroke (0);
  fill(270);
  ellipse(500, 200, 100, 50);
  ellipse(200, 200, 100, 50);
  
  fill(eyes);
  ellipse(500, 200, 60, 40);
  ellipse(200, 200, 60, 40);
  
  fill(0);
  ellipse(500, 200, 20, 20);
  ellipse(200, 200, 20, 20);
  
  
//cejas + mouse, cambio de color
  
  fill('red');
  rect (170, 80, 80, 20);
  rect (450, 80, 80, 20);
  
  if (mouseY > 200 && mouseY < 300) {
    fill ('blue');
    rect (170, 80, 80, 20);
    rect (450, 80, 80, 20);
  }
  
//nariz + mouse, cambio de color
  if (mouseX > 400) {
  fill('red');
  }
  triangle(400, 400, 300, 400, 350, 55);
}
