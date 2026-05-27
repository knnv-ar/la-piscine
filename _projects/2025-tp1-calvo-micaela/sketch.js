///  TP I - Artes Multimediales I - "Sinuosidad" - Micaela Calvo  ///

var amplitud = 50;
var curva = 30;
var tamaño = 8;
var margen = 30;
var angulo = 0;
var variacionLineas = 5;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');

  noFill();
}

function draw() {
  background(0, 20);
  translate(width / 2, height / 2);

  var color = random(150,230);  
  stroke(color);
  
  /* se expande mientras se hace clic */
  tamaño = constrain(tamaño, 1, 4);
  if (mouseIsPressed) {
      tamaño += 0.01;   
  } else {
      tamaño -= 0.01; 
  }

  /* gira mientras se presione 'r' */
  if (keyIsPressed && key === "r") {
    rotate(angulo);
    angulo += 0.01; 
  } else {
    rotate(angulo);
    angulo -= 0; 
  }
  
  
  push();
  scale(tamaño);
  
  var limiteIzquierdo = -width / 2 + margen;
  var limiteDerecho = width / 2 - margen - curva;
  
  variacionLineas += 0.01; 
  variacionLineas = constrain(variacionLineas, 5, 10); 
  
  for (var x = limiteIzquierdo; x < limiteDerecho; x += variacionLineas)  {
      var y1 = sin(x * 0.02 + frameCount * 0.03) * amplitud;
      var y2 = sin((x + curva) * 0.02 + frameCount * 0.02) * amplitud;
      var cx1 = x + curva;
      var cx2 = x + 2 * curva;

    for(var b = 10; b < 20; b +=20) {
      bezier(b, b, cx1, y1, cx2, y2, x, y2);
    }
  }
  pop();

}

