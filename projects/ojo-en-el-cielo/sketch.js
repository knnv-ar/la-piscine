//VARIABLES
let negro, color;
let song;



function preload() {
   //OJO EN COLOR
  color = loadImage("imagenes/ojocolor.webp");
  
  //OJO EN BLANCO Y NEGRO
  negro = loadImage("imagenes/ojoblancoynegro.webp");
  
  //AUDIO
  song= loadSound("imagenes/survive-mono.mp3");


  
}
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  image(color, 0, 0);
  image(negro, 0, 0);
  

  
//AUDIO  
  song = loadSound("imagenes/survive-mono.mp3");
  
}

//FUNCION DE PINTAR
function mouseDragged() {
  //movimiento de pincel pintando
  copy(color, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);
  
}

//FUNCION AUDIO
function mousePressed() {
  if (song.isPlaying()) {

  } else {
    song.play();

  }
}





  
  




