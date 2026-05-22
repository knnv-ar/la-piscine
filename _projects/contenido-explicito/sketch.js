// Zina Stepanczuk - Artes Multimediales 1 Lacabanne



// VARIABLES *****************************

var imgRosas, imgWeston, imgExplicit, imgBlur;
var texto = "";
var alarma;

//ELIMINA MENÚ CLICK DERECHO *******************

document.oncontextmenu = function() {
  return false;
}

function preload() {
  
  
  imgExplicit = loadImage("foto/explicit-copy.png");
  
  
  imgWeston = loadImage("foto/weston.jpg");
  imgBlur = loadImage("foto/weston-blur.jpg");
  font = loadFont("foto/gagalin-regular.ttf");
  alarma = loadSound("yuta.mp3");
}
  
function setup() {
  let canvas = createCanvas(597, 500);
  canvas.parent('div-sketch');
  background(0); 

} 


function draw() {


  image(imgWeston, 0, 0);
  
  image(imgExplicit, 320, 230, 120, 70);
  

    
  if(mouseIsPressed && mouseX >= 410 && mouseX <= 440 && mouseY >= 225 && mouseY <= 240)  {
      
    
    image(imgBlur, 0, 0);
    textAlign(CENTER);
    textSize(150);
    text("CENSURA", 300, 300)
    textFont(font);
    fill(255,0,0)  
    alarma.play();
   
    
  } else { 
  alarma.stop() }
  
} 
