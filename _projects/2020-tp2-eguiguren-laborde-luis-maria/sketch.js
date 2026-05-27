var img = [];
var cantidadImg=14;
var numeroImagen=0;
var inicio=false;

function preload() {
  for (var i=0; i<cantidadImg; i++) {
    img[i] = loadImage(str("imagic/image_"+ i +".jpg"));
  }

}

function setup() {
  let canvas = createCanvas(250, 500);
  canvas.parent('div-sketch');
 
}

function draw() {
   
   if (inicio) {
     image(img[numeroImagen], 0, 0);
  
  }else{

  background(0);
  }
}

function mousePressed() {
    inicio=true;
    numeroImagen=random(cantidadImg);
    numeroImagen=int(numeroImagen);
    print(numeroImagen);
  
 
}
