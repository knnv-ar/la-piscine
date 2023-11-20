//VARIABLE GLOBAL
let fibonacci = 1.618;

function setup() 
{
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() 
{
  background (240);
  frameRate(2);
  
  //VARIABLES LOCALES
  let direccionRand = random(200, 500);
  let radioRand2 = random(0, 100);
  let radioRand1 = random(100, 0);
  let strokeRand = random (100,50)
  
  //UPDATE
  translate (width/2, height/2);
 
  //FONDO DE PANTALLA - FLOR FIBONACCI - ORDEN AFUERA, CAOS ADENTRO.
  push();
  noFill();
  stroke(strokeRand);
  mousePressed();
  for (i = 0; i < direccionRand; i += fibonacci)
    { 
      rotate (PI / (radioRand1+radioRand2)); //formas más llenas aunque incompletas, + natural
      //esporádicamente se muestra que hay matemática cruda en el medio.
      bezier (i,0 , -70, 330, 70, 330, i,0);
    }
  pop();
  
   if (keyIsPressed == true)
    {
      fondo()
    }
  document.oncontextmenu = function () 
  {
    return false;
  };
}

function mousePressed()
{if(mouseIsPressed ==true)
  {
    if (mouseButton == LEFT)
      {
        stroke (0)
        background(256)
      }
    if (mouseButton == RIGHT)
      {
        background(0)
        stroke (256)
      }
  }
}

function fondo()
{
  background(240);
  let radioRand0 = random(50);
  push();
  
  //FONDO DE PANTALLA - FLOR FIBONACCI - ORDEN AFUERA, CAOS ADENTRO.
  noFill();
  stroke(100);
  mousePressed();
  for (i = 1; i < 100; i += 1.618)
    { 
      rotate (PI / radioRand0); //más filoso, menos natural
      bezier (i,0 , -70, 330, 70, 330, i,0);
    }
  pop();
}