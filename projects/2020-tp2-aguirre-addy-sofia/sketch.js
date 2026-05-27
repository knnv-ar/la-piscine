let ppio=["el lenguaje ", "la información ", "el código ", "la naturaleza ", "una voz sintética ", "una señal saturada ", "la realidad ", "el sentido de comunidad ", "una ridícula obsesión ", "el silencio "]
let medio=["forma ", "se transforma en ", "desplaza ", "responde a ", "reemplaza ", "sólo es ", "desactiva ", "diseña ", "certifica ", "manifiesta "]
let final=["una estructura", "un ser vivo", "un sueño electrónico", "un objeto físico", "un signo", "una extensión de la vida", "el miedo a estar conectado a tu propia verdad", "la velocidad de transmisión", "una crisis", "un estado cognitivo"]
let foto=[];
let numfoto = 15;


   function preload() {
  foto1 = loadImage("imagenes/1.webp");
  foto2 = loadImage("imagenes/2.webp");
  foto3 = loadImage("imagenes/3.webp");
  foto4 = loadImage("imagenes/4.webp");
  foto5 = loadImage("imagenes/x.webp");
  foto6 = loadImage("imagenes/5.webp");
  foto7 = loadImage("imagenes/6.webp");
  foto8 = loadImage("imagenes/7.webp");
  foto9 = loadImage("imagenes/8.webp");
  foto10 = loadImage("imagenes/9.webp");
  foto11 =loadImage("imagenes/10.webp");
  foto12 =loadImage("imagenes/11.webp");
  foto13 =loadImage("imagenes/12.webp");
  foto14 =loadImage("imagenes/13.webp");
  foto15 =loadImage("imagenes/14.webp");
 
  foto = [foto1,foto2,foto3, foto4, foto5, foto6, foto7,foto8, foto9,foto10, foto11,foto12,foto13,foto13,foto14,foto15]
}
     
function setup() {
  let canvas = createCanvas(650, 500);
  canvas.parent('div-sketch');

  
  
}

function draw() {

  
  if (mouseIsPressed) {
    clear();
    push(); // BLOQUE 1
    imageMode(CORNER);
    let randoImg =random(foto)
    scale(1);
    image(randoImg, 0,0);
    
    pop(); // FIN BLOQUE 1
    
    push(); // BLOQUE 1
  let ppio_random= random(ppio);
  let medio_random =random(medio);
  let final_random= random(final);
  let foto_random= random(foto);
  let frase= ppio_random + medio_random + final_random
  textAlign(CENTER)
  textSize(15.5)
  //textStyle(BOLDITALIC);
  translate(320,10)
  fill(255,245,0)
  textFont("Helvetica")
  
  text(frase, 10, 10)
  
  pop(); // FIN BLOQUE 2
}

 
 
  
}
