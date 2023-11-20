

var cuerpo;
var mano;

function preload() {
  cuerpo = loadImage("Imagenes/cuerpo_sangre2.jpg");
  sangre=loadImage("Imagenes/sangre3.png")
  
}

function setup() {
  let canvas = createCanvas(600, 550);
  canvas.parent('div-sketch');
   
   
}

function draw() {
  background(220);
  image(cuerpo,0,0,730,700);
  
  if (mouseIsPressed){
   
   
       for (let i = 0; i < 70; i++) { 
    let x = random(width); 
    let y = random( height); 
    image(sangre, x, y, 80,80);
         
   
    }
}
} 