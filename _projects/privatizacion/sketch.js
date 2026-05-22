var imgMural, imgLouvre, sonido;
var audioreproduciendose;
audioreproduciendose = false;

var minimo = 1;
var maximo = 5;

function preload() {
  imgMural = loadImage("img/mural-nicolas-romero.jpg");
  imgLouvre = loadImage("img/louvre-cambio.jpg");
  sonido = loadSound("musica/rap-yorquesta.mp3");
}

function setup() {
  let canvas = createCanvas(530, 430);
  canvas.parent('div-sketch');
}


function draw() {
  //Pinta aletoriamente los pixeles de la image.
  var lineas = map(mouseX, 0, width, minimo, maximo);

  for (var i = 0; i <= 100; i++) {
    var x = random(imgMural.width);
    var y = random(imgMural.height);
    var angulo = random(-10, 10);
    var pixel = imgMural.get(x, y);
    strokeWeight(lineas);
    stroke(pixel);
    line(x, y, x, y + angulo);
  }
  
//Cabia la imagen y Suena música
   if (keyIsPressed) {
    background(0);
    image(imgLouvre, 0, 0);
    if (audioreproduciendose==false){
      sonido.play();
      audioreproduciendose=true;
    }
  } else{
    sonido.stop()
  }
}
