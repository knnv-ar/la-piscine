//veo una mancha
//en mi ropa
//algunas veces
//y pienso
//¿que soy?
  
  var foto;
var minimo = 1
var maximo = 600;

function preload() {
  foto = loadImage("maria-2.webp");
}

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent('div-sketch');
}

function draw() {
  filter(OPAQUE);
let x1 = map(mouseX, 0, width, minimo, maximo);
  
  strokeWeight (0)
  fill (0)
  textStyle (NORMAL)
text ("¿que soy?", x1, mouseX, mouseY)
  textSize (60)
  textFont("timesnewroman")

 

  var lineas = map(mouseX, 20, width, minimo, maximo);

  for (var i = 0; i <= 100; i++) {
    var x = random(foto.width);
    var y = random(foto.height);
    var angulo = random(-2, 1);
    var pix = foto.get(x, y);
    strokeWeight(10);
    stroke(pix);
    line(x, y, x, y + angulo);
  }
}
function mouseClicked() {
  textFont ("timesnewroman")
  textStyle (NORMAL)
  fill (200)
  strokeWeight (0)
  textSize (30)
  text("veo una mancha en mi ropa y pienso",mouseX, mouseY)

}
