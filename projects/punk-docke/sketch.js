var fadeStartTime = 0;
var fadeDuration = 5000; 


function setup() {
  let canvas = createCanvas(600, 700);
  canvas.parent('div-sketch');

}
var img1;
var img2;
var img3;
var img4;
var img5;
var sound;

function preload() {
  img1 = loadImage("img/dock1.jpg");
  img2 = loadImage("img/dock3.jpg");
  img3 = loadImage("img/kindof1j.jpg");
  img4 = loadImage("img/kindof2j.jpg");
  img5 = loadImage("img/kindof3j.jpg");
  sound =loadSound("img/neon.mp3")
}
 
function draw() {
  
  background(0);
 
  var fader = map( millis()-fadeStartTime, 0, fadeDuration, 255, 0 );
  fader = constrain( fader, 0, 255 );
 
  if(fader < 255){
   
    tint(255, 255-fader);
    image(img2, 0, 0, width, height);
    tint(255, fader);
    
    image(img1, 0, 0, width, height);  
  }
    
 if (fader == 0){
  let t = map(mouseX, 0, width, 0, 255);
  tint(255, t);
  if (mouseX>100){
    image(img3, 0, 0, 275, height);
  }
  if (mouseX>300){
  let t = map(mouseX, 275, width, 0, 255);
  tint(255, t);
  image(img4, 275, 0, 125, height);
                 } 
  if(mouseX>350){
  let t = map(mouseX,400, width, 0, 255);
  tint(255, t);
  image(img5, 400, 0, 200, height)
 }
  if (fader == 0){
   if (mouseX >450){
     sound.play();
     var volumen = map(mouseX, 100, width - 100, 1, 0);
     sound.setVolume(volumen);
 }
 } 
 }
 }   
