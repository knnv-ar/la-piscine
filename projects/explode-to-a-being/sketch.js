var ima,ima11, ima1, ima2, ima3, ima5,ima6,ima7,ima8;
let song ; 
var falso = false;
var width = 400;
var posyima;

function setup() {
  let canvas = createCanvas(850, 800);
  canvas.parent('div-sketch');
  song.loop();
  alert("Para interactuar presione el mouse, y las letras, A - S - D- F");
  posyima = height;
  posyima2 = height;
}
function preload(){
  ima = loadImage ("imagen/antiglosario1.png");
  ima11 = loadImage("imagen/antiglosario3.png");
  ima1 = loadImage("imagen/hombre.png");
  ima2 = loadImage ("imagen/antiglosario4.png");
  ima3 = loadImage ("imagen/antiglosario5.png");
  ima4 = loadImage ("imagen/antiglosario2.png");
  ima5 = loadImage("imagen/cambio0.png");
  ima6 = loadImage("imagen/cambio1.png");
  ima7 = loadImage ("imagen/cambio2.png");
  ima8 = loadImage ("imagen/cambio3.png");
  ima9 = loadImage ("imagen/cambio9.jpg")
  song = loadSound("comfortably.mp3")
}


function draw() {
  background(0, 0, 128);
  image (ima5,200,200)
   if (posyima + ima2.height  <30 || ima.heigth < 30){
     posyima = height;
     posyima2 = height;
   } 
  
  posyima = posyima -5;
  image(ima2,60,posyima,20,20);
  image(ima3,700,posyima,20,20);
  posyima2 = posyima2 -8;
  image (ima4,100,posyima2,30,40);
  image (ima,800,posyima2,20,20);
  image(ima11,650,posyima2,20,20);
   if (mouseIsPressed ){
     background (255,69,0);
     image(ima7,200,250)
   } 
 if (keyIsPressed){
   if (key== "a" || key == "A" ) {
   background (255,0,0)
   image (ima6,200,200)
 } else if  (key == "d" || key == "D"){
   background (112, 128, 144)
   image (ima7,150,300)
 } else if (key  == "s" || key == "S"){
   background (245, 255, 250)
   image (ima8,200,200)
 } else if (key == "f" || key == "F"){
   background (240, 255, 255)
   image(ima9,0,0,850,800)
 }
  
} 
 for (var x = 20; x < width; x += 20) {
    var mx = mouseX / 10;
    var desplazamientoA = random(-mx, mx);
 desplazamientoB = random(-mx, mx);
    line(x + desplazamientoA, 1000, x - desplazamientoB, 0);
}
}
  
 document.oncontextmenu = function() {
  return false;
}
