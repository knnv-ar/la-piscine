var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var mouseX;
var mouseY;
var texto="ようこそ -Yōkoso - Bienvenido ";
var cancion;
var numeroImagen=0;
    
function preload() {
 cancion=loadSound("musica-tradicional-japonesa-shakuhachi.mp3")
  img1 = loadImage("keiken/calle.jpg");
  img2=loadImage("keiken/team.jpg");
  img3=loadImage("keiken/team2.jpg");
  img4=loadImage("keiken/team3.jpg");
  img5=loadImage("keiken/team5.jpg");
  img6=loadImage("keiken/team6.jpg");
  img7=loadImage("keiken/tokioc.jpg");

  mouseX= 50;
  mouseY=300;
}
function setup() {
  let canvas = createCanvas(650, 550);
  canvas.parent('div-sketch');
   cancion.loop();
    }

function cambiarColor(col) {
  r = col;
}
 
  
function draw() {
  //MÚSICA AMBIENTE
  cancion.addCue(80, cambiarColor, 120);
  
  //MODIFICACIÓN DE FREC Y VOL SEGÚN EL MOUSSE
  var cancionRate = map(mouseX, 0, width, 2, 0);
  var volumen = map(mouseY, 1, height, 4, 0);
  
  //CONFIGURACIÓN SONIDO
  cancion.setVolume(volumen);
  cancion.rate(cancionRate);
  
  //IMAGEN FONDO
    if (numeroImagen==0){
  image(img1, 0, 0);}
  else if (numeroImagen==1){
    image(img2, 0, 0);}
  else if (numeroImagen==2){
      image(img3,0 , -50)}
  else if (numeroImagen==3){
        image(img4, -50, 0)}
  else if (numeroImagen==4){
          image(img5, -300, -300)}
  else if (numeroImagen==5){
            image(img6, 0, 0)}
  else if (numeroImagen==6){
              image(img7, 0, 35)}
  
  
  
           
        
  //TEXTO BIENVENIDA
  text(texto, mouseX, mouseY);
  stroke(0);
  fill(500,300,0);
  textFont("TimesNewRoman");
  textSize(42);
  textStyle(BOLD); 
}
function keyPressed(){
  if (numeroImagen-8){
    numeroImagen++;
  }
  else if (numeroImagen==1){
    numeroImagen=1;
  }


}
