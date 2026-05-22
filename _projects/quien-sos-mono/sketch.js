
var estado = 0

function preload() {

  img2 = loadImage("img/hanuman.png");
  img3 = loadImage("img/verde.png");
  img4 = loadImage("img/rojo.png") ;
  img5 = loadImage("img/montana1.png") ;
  img6 = loadImage("img/montana2.png") ;
  img7 = loadImage("img/edificionaranja.png");
  img8 = loadImage("img/edificioazul.png")
  img9 = loadImage("img/mantra.png");
  img10 = loadImage("img/psy1.gif");
  img11 = loadImage("img/amarillo.png");
  img12 = loadImage("img/cian.png");
  img13 = loadImage("img/13.png");
  cancion= loadSound("img/mantra.mp3")
 
 

}

function setup() {
  let canvas = createCanvas(1000, 700);
  canvas.parent('div-sketch');
   noCursor();
  cancion.play ()

}
  
function draw() {

  image(img10, -90, 0);
  image(img9, 0, 0);

 

  
  if (estado == 0) {
    Comienzo();
  } else if (estado == 1) {
    Ciudad();
  } else if (estado == 2){
    Montanas()
  } else if (estado == 3)
    Templo ()
  
}



function mouseClicked() {
  if (estado === 0) {
    estado = 1;
  } else if (estado === 1){
    estado = 2;
  } else if (estado === 2){
     estado = 3;
} else if (estado === 3){
    estado = 0;
}
}



/*funciones*/

function Comienzo (){
  image(img10, -90, 0);
  image (img2, mouseX - 200, mouseY -300);
  image(img9, 0, 0);

}
function Ciudad() {
  image(img10, -90, 0);

    image(img3, 50, 0);
  image(img2, mouseX - 200, mouseY -300); 
image(img4, -200,0)
  image(img9, 0, 0);


}


function Montanas() {
  image(img10, -90, 0);
  image(img5, 0, 0);
  image (img2, mouseX - 200, mouseY -300);
  image(img6, 0, 150);
  image(img9, 0, 0)
    
}

function Templo () {
  image(img10, -90, 0);
  image(img12, 100 , 0);
  image(img13, -275, 100);
  image (img2, mouseX - 200, mouseY -300);
  image(img9, 0, 0);
  
  
}


