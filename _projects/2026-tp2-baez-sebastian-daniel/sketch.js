
let fotos = [];
let mirilla;
let fondo;
let carpetas = -1;
let moneyy;
let dinero;
let musica = false;
let inicioMusica = 0;
let Dolar;

//variables del dolar para que se mueva
let fx;
let fy
let fvx;
let fvy;
const FW=90;
const FH=73;


async function setup() {
  let canvas = createCanvas(650, 650); 
  canvas.parent('div-sketch'); 
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  textSize(24);
  noCursor();
  
 
  fondo = await loadImage("imagenes/fmi.jpg");
  mirilla = await loadImage("imagenes/miraa.png");
  Dolar=await loadImage("imagenes/dolar1.png");
  fotos= [
    
  { img: await loadImage('imagenes/michel.jpg'),  texto: 'Michel Camdessus monto de prestamo Us$9.200 millones',  color:[255, 0, 0] },
    { img: await loadImage('imagenes/horst.jpg'),   texto: 'Horst Köhler monto del prestamo US$22.000 millones',   color: [255, 0, 0] },
    { img: await loadImage('imagenes/lagarde.jpg'), texto: 'Christine Lagarde monto del prestamo US$57.000 millones ', color:[255, 0, 0] },
    { img: await loadImage('imagenes/krista.jpg'),  texto: 'Kristalina Georgieva monto del prestamo US$20.000 millones',  color: [255, 0, 0] },
  ];
  
  moneyy = await loadSound("musica/moneyy.mp3");
  dinero = await loadSound("musica/dinero.mp3");
  reiniciarDolar();
}
 
function draw() {
  
  if (musica && moneyy && millis() - inicioMusica >= moneyy.duration() * 1000) {
    moneyy.play();
    inicioMusica = millis();
  }
 
  background(0);
  if (fondo) image(fondo, width / 2, height / 2);
 
  let actual= fotos [carpetas];
  if(actual){
    image(actual.img,width/2,height/2);
    push();
    fill(actual.color);
    stroke(0);
    text(actual.texto, width/2, height-40);
    pop();
   }
    
 moverDolar();
  if (Dolar) image(Dolar, fx, fy, FW, FH);
  
 
  if (mirilla) image(mirilla, mouseX, mouseY);


  }

function moverDolar() {
  fx+= fvx;
  fy+= fvy;
  if (fx< FW/2 || fx>width -FW/2) {
    fvx *= -1;
     }
  if (fy< FH/2 || fy>height - FH/2) {
    fvy *= -1;
    }
  }
  function reiniciarDolar() {
    fx= random (FW / 2, width - FW / 2);
    fy= random (FH / 2, height - FH / 2 );
    fvx= random (3 , 6) * random([-1, 1]);
    fvy= random (3 , 6) * random([-1, 1]);
    }
  
  function clickEndolar() {
    return abs(mouseX - fx) < FW / 2 && abs(mouseY - fy) < FH / 2;
    
    }

function mousePressed() {
  userStartAudio();
  iniciarMusica();
  
 if (clickEndolar()) {
   
  suenaDinero();
  cambiadeImagen();
  reiniciarDolar();
   
}
  }

  
function iniciarMusica() {
  if (moneyy && !musica) {
    moneyy.play();
    musica = true;
    inicioMusica = millis();
  }
}
 
function suenaDinero() {
  if (dinero) {
    dinero.stop();
    dinero.play();
  }
}
 
function cambiadeImagen() {
  carpetas = carpetas + 1;
 
  if (carpetas >= fotos.length) {
    carpetas = -1;
  }
  
}
