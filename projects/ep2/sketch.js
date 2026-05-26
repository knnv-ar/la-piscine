//Universidad Nacional de las Artes.
//Área Transdepartamental de Artes Multimediales.
//Artes Multimediales -Cátedra Lacabanne.
//Turno Mañana.
// Recuperatorio Parcial Nº 2.
//Nasha Santillan.


/* variables*/
var corazon=[]; 
var cantidad = 50;
var sonidoreproduciendose = false;

var offset=30;

function preload(){
  img1 = loadImage('imagenes/portada-ep2.jpg');
  img2 = loadImage('imagenes/corazon2.png');
  soundFormats('mp3');
  sonido1 = loadSound('sonidos/llueve-natalia-lacunza.mp3');
  sonido2 = loadSound('sonidos/ya-te-vas-natalia-lacunza.mp3');
}

function setup() {
  let canvas = createCanvas(650, 500);
  canvas.parent('div-sketch');
  background(img1);

  for (let i = 0; i <= cantidad; i++) {
     corazon.push({posx:i * 60,
                posy:0,
                angulo:i * 20, 
                velAngulo:random(3),
                velx:random(3), 
                vely:random(3)});
  }
 
}

function draw() {
  background(img1);

  for (var i = 0; i <= cantidad; i++) {
     corazoncito(i);
  }
  textSize(20);
  text('Presione la tecla "L" o "Y"', 10, 500);
  fill(125, 127, 127);
}
function keyPressed(){ 
    if (key == "l" || key == "L") {
      if (sonidoreproduciendose == false){
          sonido1.play();
          sonido2.stop();
          sonidoreproduciendose =true;}
     
    } else if (key == "y" || key == "Y" ){
      if (sonidoreproduciendose == true){
          sonido1.stop();
          sonido2.play();
          sonidoreproduciendose =false;}
    } else{
      sonido2.stop();
      sonido1.stop();
    }
}

function corazoncito(indice) {

  push();

  corazon[indice].posx += corazon[indice].velx ;
  corazon[indice].posy += corazon[indice].vely;
  corazon[indice].angulo+=corazon[indice].velAngulo;
  
  translate(corazon[indice].posx, corazon[indice].posy);
  rotate(radians(corazon[indice].angulo));

  image(img2,0,0,20,20);


  if (corazon[indice].posy > height+offset) {
    corazon[indice].posy = -offset;
  }

  if (corazon[indice].posx > width+offset) {
     corazon[indice].posx = -offset;
  }
  pop();
}



