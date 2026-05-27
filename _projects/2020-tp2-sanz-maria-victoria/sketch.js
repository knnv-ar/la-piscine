
var estado = 0

function preload() {

  img2 = loadImage("img/hanuman.webp");
  img3 = loadImage("img/verde.webp");
  img4 = loadImage("img/rojo.webp") ;
  img5 = loadImage("img/montana1.webp") ;
  img6 = loadImage("img/montana2.webp") ;
  img7 = loadImage("img/edificionaranja.webp");
  img8 = loadImage("img/edificioazul.webp")
  img9 = loadImage("img/mantra.mp3");
  img10 = loadImage("img/psy1.webp");
  img11 = loadImage("img/amarillo.webp");
  img12 = loadImage("img/cian.webp");
  img13 = loadImage("img/13.webp");
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


