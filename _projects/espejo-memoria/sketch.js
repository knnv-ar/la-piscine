//VARIABLES GLOBALES-------------
let video;
let tamElipse = 9;

//PRELOAD-------------------------
function preload(){
  musicaFondo = loadSound("aguirretriste.mp3");
  cuadros = loadSound("cuadros.mp3");
  matGay = loadSound("matrimoniogay.mp3");
  once = loadSound("once.mp3");
  cromanion = loadSound("cromanion.mp3");
}

//SETUP--------------------------
function setup() {
  createCanvas(600, 480);
  
  video = createCapture(VIDEO);
video.size(600, 480);
  video.hide();
  
  musicaFondo.loop();
  musicaFondo.amp(0.3);
  musicaFondo.rate(0.7);
}
//DRAW---------------------------
function draw() {
  background(0);
  
  video.loadPixels();
  grilla();
  
  
}

//GRILLA---------------------------
function grilla() {
  for (let x = 0; x <= width; x += tamElipse) {
    for (let y = 0; y <= height; y += tamElipse) {
      
      //(y * el ancho del video) + la xPos * la cant de           espacio que ocupa el px en el array [RGBA = 4 espacios por px] ✍️
      let index = ((y * video.width) + x) * 4;
      
      let r = video.pixels[index]; //pixel[0]
      let g = video.pixels[index + 1]; //pixel[1]
      let b = video.pixels[index + 2]; //pixel[2]
  
      fill(r,g,b)
      noStroke();
      
      rect(x, y, tamElipse);
    }
  }
}

//KEYISPRESSED---------------------------------
function keyPressed(){
  cuadros.stop(); 
  matGay.stop();
  once.stop();
  cromanion.stop();
  
  switch(key){
    case "1":
      cuadros.play();
      cuadros.amp(0.5);
      break;
      
    case "2":
      matGay.play();
      matGay.amp(0.06);
      break;
      
    case "3":
      once.play();
      once.amp(0.7);
      break;
      
    case "4":
      cromanion.play();
      cromanion.amp(0.08);
      break;
  }
}
