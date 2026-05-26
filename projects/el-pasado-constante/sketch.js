//Silvero Agustín sketch

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var imgfondo;
var numeroImagen=0;


function preload() {
      img1 = loadImage("fotos/msurrealistas.jpg") ;
      img2 = loadImage("fotos/martemoderno.jpg");
      img3 = loadImage("fotos/mcubismo.jpg");
      img4 = loadImage("fotos/mfovismo.jpg");
      img5 = loadImage("fotos/mpostimpresionismo.jpg");
      img6 = loadImage("fotos/mpuntillismo.jpg");
      img7 = loadImage("fotos/mrealismo.jpg");
      img8 = loadImage("fotos/caballete.png");
      imgfondo = loadImage("fotos/galeria.jpg")
}


function setup() {
  let canvas = createCanvas(720, 1080);
  canvas.parent('div-sketch');
}

function draw() {
  
  background(240);
  image(imgfondo,0,0);
  image(img8,180,330,380,740);
  
  
  //Cambio de imagen cuando hacemos click
  
  if (numeroImagen==0){
  image(img1, mouseX, mouseY);}
  
  else if (numeroImagen==1){
    image(img2, mouseX, mouseY);}
    
  else if (numeroImagen==2){
    image(img3, mouseX, mouseY);}
  
  else if (numeroImagen==3){
    image(img4, mouseX, mouseY);}
  
  else if (numeroImagen==4){
    image(img5, mouseX, mouseY);}
  
  else if (numeroImagen==6){
    image(img6, mouseX, mouseY);}
    
    else if (numeroImagen==7){
    image(img7, mouseX, mouseY);}
}
function mousePressed(){
    if (numeroImagen<7) {
        
        numeroImagen++;}
    else if (numeroImagen==7){
      numeroImagen=0;
    }
}
