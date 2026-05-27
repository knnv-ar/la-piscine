var img;
var cancion;
var button;
var activaSonido=true;

function preload() {
  img = loadImage("hola/saekitoshio2.webp");
  
  cancion = loadSound("holy-ground.mp3");

}

function setup() {
 // createCanvas(510 ,460);
  let canvas = createCanvas(480, 650);
  canvas.parent('div-sketch');
  background(10, 10, 10);
  //cancion.loop();
  button = createButton("Click");
  button.mousePressed(togglePlaying);
}

function loadead(){
}

//botón para activar y desactivar sonido
function togglePlaying() {
  
  if (!cancion.isPlaying()) 
  {
    cancion.play();
    button.html("Pausa");
  }else{
    cancion.pause();
    button.html("Click");
  }
  
}

function draw() {
  
  tint(250);
  image(img, 10, 40);

  
  //poema
  stroke(100);
  textAlign(CENTER);
  textSize(22);
  textFont("Georgia");
  text("No vendí mis manos al dolor", 250, 30);
  
  
  
  for (var x = 10; x < width; x += 10) {
    var mx = mouseX / 20;
    var desplazamientoA = random(-mx, mx);
    var desplazamientoB = random(-mx, mx);
    line(x + desplazamientoA, 10, x - desplazamientoB, 30);
   }
  
  noStroke();
  fill(100,100,100,100);
  rect(35,42,250,400);
  
  //stroke(0);
  fill(250,250,240);
  textSize(15);
  textAlign(LEFT);
  textFont("Georgia");
  text("La planta no florece", 40, 55);
   text("y escondida vive en mi cuerpo", 40, 75);
  text("Yo abrazo lo que existe", 40, 95);
  text("El tiempo vive para que yo viva",40, 115);
  text("y lejos",40, 135);
  text("veo todo lo viviente",40, 155);
  text("Los recuerdos",40, 175);
  text("transformaron una herida",40, 195);
  text("que sangraba al silencio",40, 215);
  text("No olvides que",40, 235);
  text("si despierto y lloro",40, 255);
  text("es porque soy una niña",40, 275);
  text("que busca entre tus manos",40, 295);
  text("el contacto",40, 315);
  text("por donde me acompañes",40, 335);
  text("y hagas del dolor",40, 355);
  text("un refugio",40, 375);
  text("donde la herida",40, 395);
  text("deje de saber",40, 415);
  text("a sangre y quemadura",40, 435);

  
  //sonido baja y sube con el mouse
  var volumen = map(mouseY, 0, height, 1, 0);
  cancion.setVolume(volumen);
 
}

document.oncontextmenu = function() 
{
  return false;
}
