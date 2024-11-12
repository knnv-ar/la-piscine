/*Título de la Obra: UNO ES UNO
Año: 2024
Autor/a: Lucas Milton Dario Burgos
Enlace a la obra:
Breve descripción: 
 
 En la era de la reproducción, donde lo que veo aca, lo veo allá y lo vi mil veces, todo se duplica y transforma sucesivamente, creando cada vez un nuevo "algo" que puede ser en una mejor versión o una, tal vez, decadente y pobre. 

 Al fin y al cabo la réplica en sus diferentes versiones pasa a ser una partícula mas dentro de una idea general, donde cada partícula toma de otra lo que no tiene una. 

 Entonces, que pasa si pudiera tomar de lo que no tengo en otra versión imaginaria ideal de mi? podría intentar buscar la mejor versión de mi hasta lograrlo, pero se que seria un juego ilusorio infinito, porque de eso se trata la reproducción, querer ponerle un fin a la transformación es como intentar frenar una máquina en automático. Incontables escenarios ficticios de lo que podria haber sido y lo que ahora seria si hubiera intervenido un minimo movimiento de aguja. Pero aun asi somos esto, esto que puede ser un privilegio por serlo, deja en la deriva el cuestionamiento de si se trata de la mejor version.
 
Atravesando diferentes etapas de desarrollo podemos describir Uno es Uno como una obra progresiva, el compuesto de unidades simbolicas generan una conexion esencial entre sí.


Desarrollo técnico, estético y conceptual (describa en un mínimo de 200 y un máximo de 500 palabras las características técnicas, estéticas, conceptuales, referentes artísticos y bibliografía utilizada):*/

let sustance = 750;
let activatorText;
let activatorWhite;
let activatorBlack;
let eyeface1;
let eyeface2;
let eyeface3;
let eyeface4;
let eye2face1;
let eye2face2;
let eye2face3;
let eye2face4;
let lipsface1;
let lipsface2;
let lipsface3;
let lipsface4;
let noseface1;
let noseface2;
let noseface3;
let noseface4;
let face1,face2,face3,face4;
let pouringSound;
let subSound;
let xenSound;
let isReducing = false;
let flashEscena = false;
let fraseEscena = false;
let carasEscena = false;
let fraseCompleta = false;
let hasPlayedSubsSound = false;
let hasPlayedXenSound = false;
let frase = 0;
let flashActual = 0;
let ojosIzqActual = 0;
let ojosDerActual = 0;
let lipsActual = 0;
let noseActual = 0;
let rostroActual=0;
let velocidad = 2;
let you;
let are;
let one;

function preload() {
  face1 = loadImage("img/caras/face1.png");
  face2 = loadImage("img/caras/face2.png");
  face3 = loadImage("img/caras/face3.png");
  face4 = loadImage("img/caras/face4.png");
  eyeface1 = loadImage("img/caras/eyeface1.png");
  eyeface2 = loadImage("img/caras/eyeface2.png");
  eyeface3 = loadImage("img/caras/eyeface3.png");
  eyeface4 = loadImage("img/caras/eyeface4.png");
  eye2face1 = loadImage("img/caras/eye2face1.png");
  eye2face2 = loadImage("img/caras/eye2face2.png");
  eye2face3 = loadImage("img/caras/eye2face3.png");
  eye2face4 = loadImage("img/caras/eye2face4.png");
  lipsface1 = loadImage("img/caras/lipsface1.png");
  lipsface2 = loadImage("img/caras/lipsface2.png");
  lipsface3 = loadImage("img/caras/lipsface3.png");
  lipsface4 = loadImage("img/caras/lipsface4.png");
  noseface1 = loadImage("img/caras/noseface1.png");
  noseface2 = loadImage("img/caras/noseface2.png");
  noseface3 = loadImage("img/caras/noseface3.png");
  noseface4 = loadImage("img/caras/noseface4.png");
  xenSound = loadSound("sounds/xen.mp3");
  pouringSound = loadSound("sounds/pouring.mp3");
  subsSound = loadSound("sounds/subsSound.mp3");
  you = loadImage("img/you.png");
  are = loadImage("img/are.png");
  one = loadImage("img/one.png");
  activatorText = loadImage("img/activator.png");
  activatorWhite = loadImage("img/activatorWhite.png");
  activatorBlack = loadImage("img/activatorBlack.png");
}
function setup() {
  createCanvas(1000, 650);
}

function draw() {
  background(0);
  liquido();
  jeringa();
  image(activatorText, 0, 0);
  if (isReducing && sustance > 180) {
    sustance -= 10; // Reduce sustance progresivamente en cada frame
  }

  // Cuando sustance alcanza el valor mínimo, activar flash
  if (sustance <= 200) {
    isReducing = false; // Detenemos la reducción
    flash();
  }
  sosUno();
caras()
}

function mousePressed() {
  // Inicia la reducción solo si sustance es mayor que 180
  if (sustance > 200) {
    isReducing = true; // Activamos la reducción progresiva
    flashEscena = true;
    pouringSound.play();
  }
  if (sustance === 200) {
    flashEscena = false;
    fraseEscena = true;
    frameCount = 0;
    pouringSound.stop();
  }
 if (fraseCompleta) { // Se activará cuando fraseEscena haya terminado

    fraseEscena = false;
    carasEscena = true;
    frameCount = 0; // Reinicia el contador para carasEscena
    fraseCompleta = false; // Resetea para la próxima vez
  }
}
function liquido() {
  noStroke();
  fill(189, 223, 0);
  quad(750, 180, sustance, 180, sustance, 450, 750, 450);
}
function jeringa() {
  stroke(255);
  strokeWeight(10);
  noFill(0);
  quad(100 + 20, 140, 180 + 20, 140, 180 + 20, 480, 100 + 20, 480); // Lateral izquierdo
  quad(180 + 20, 180, 730 + 20, 180, 730 + 20, 450, 180 + 20, 450); // Cuerpo principal
  quad(730 + 20, 210, 780 + 20, 210, 780 + 20, 415, 730 + 20, 415); // Parte pequeña derecha
  quad(780 + 20, 310, 800 + 20, 310, 800 + 20, 335, 780 + 20, 335); // Detalle del medio
  quad(800 + 20, 325, 860 + 20, 325, 800 + 20, 325, 860 + 20, 325);
}
function flash() {
  if (flashEscena == true) {
    if (!hasPlayedSubsSound) {
      subsSound.play();
      hasPlayedSubsSound = true; 
    }

    if (frameCount % 4 === 0) {

      flashActual = (flashActual + 1) % 2;
    }

    if (flashActual === 0) {
      background(255);
      image(activatorBlack, 0, 0);
    } else if (flashActual === 1) {
      background(255);
      image(activatorWhite, 0, 0);
    }
  }
}
function sosUno() {
  if (fraseEscena == true) {
    subsSound.stop();
    if (!hasPlayedXenSound) {
      xenSound.play();
      hasPlayedXenSound = true; 
    }
    if (frameCount % 50 === 0) {
      
      frase = (frase + 1) % 3; 
    }
    if (frase === 0) {
      background(255);
      image(you, -10, 0);
      invert();
    } else if (frase === 1) {
      background(255);
      image(are, -10, 0);
      invert();
    } else if (frase === 2) {
      background(255);
      image(one, -10, 0);
      invert();
fraseCompleta = true;
    }
  }
}
function invert() {
  if (frameCount % 10 === 0) {
    filter(INVERT); 
  }
}
function caras() {
if(carasEscena == true){
background(0);
rostros()
  ojosIzq();
  ojosDer();
  labios();
  nariz();}
}
  function rostros(){
  if (frameCount % 15 === 0) {
  
    rostroActual = (rostroActual + 1) % 4; 
  }
  if (rostroActual == 0) {
    image(face1, 0, 0);
  } else if (rostroActual == 1) {
    image(face2, 0, 0);
  } else if (rostroActual == 2) {
    image(face3, 0, 0);
  } else if (rostroActual == 3) {
    image(face4, 0, 0);
  }
}
function ojosIzq() {
if(carasEscena == true){
  if (frameCount % 10 === 0) {
   
    ojosIzqActual = (ojosIzqActual + 1) % 4; 
  }
  if (ojosIzqActual == 0) {
    image(eyeface1, 0, 0);
  } else if (ojosIzqActual == 1) {
    image(eyeface2, 0, 0);
  } else if (ojosIzqActual == 2) {
    image(eyeface3, 0, 0);
  } else if (ojosIzqActual == 3) {
    image(eyeface4, 0, 0);
  }}
}
function ojosDer() {if(carasEscena == true){
  if (frameCount % 15 === 0) {

    ojosDerActual = (ojosDerActual + 1) % 4; 
  }
  if (ojosDerActual == 0) {
    image(eye2face1, 0, 0);
  } else if (ojosDerActual == 1) {
    image(eye2face2, 0, 0);
  } else if (ojosDerActual == 2) {
    image(eye2face3, 0, 0);
  } else if (ojosDerActual == 3) {
    image(eye2face4, 0, 0);
  }}
}

function labios() {if(carasEscena == true){
  if (frameCount % 13 === 0) {
    lipsActual = (lipsActual + 1) % 4; 
  }
  if (lipsActual == 0) {
    image(lipsface1, 0, 0);
  } else if (lipsActual == 1) {
    image(lipsface2, 0, 0);
  } else if (lipsActual == 2) {
    image(lipsface3, 0, 0);
  } else if (lipsActual == 3) {
    image(lipsface4, 0, 0);
  }}
}
function nariz() {if(carasEscena == true){
  if (frameCount % 12 === 0) {
    noseActual = (noseActual + 1) % 4; 
  }
  if (noseActual == 0) {
    image(noseface1, 0, 0);
  } else if (noseActual == 1) {
    image(noseface2, 0, 0);
  } else if (noseActual == 2) {
    image(noseface3, 0, 0);
  } else if (noseActual == 3) {
    image(noseface4, 0, 0);}
  }
}
