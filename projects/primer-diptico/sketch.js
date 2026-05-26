var img1;

var minimo = 1
var maximo = 20;


function preload() {
  img1 = loadImage("home-ohii.webp");
}

function setup() {
  let canvas = createCanvas(450, 450);
  canvas.parent('div-sketch');
}

function draw() {
 

  var lineas = map(mouseX, 0, width, minimo, maximo);

  for (var i = 0; i <= 500; i++) {
    var x = random(img1.width);
    var y = random(img1.height);
    var angulo = random(-10, 10);
    var pix = img1.get(x, y);
    strokeWeight(lineas);
    stroke(pix);
    line(x, y, x, y + angulo);
  }
}
