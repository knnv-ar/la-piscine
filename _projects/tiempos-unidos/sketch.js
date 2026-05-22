//cancion: Antonio D'Africa, Sall - Phantom / https://www.youtube.com/watch?v=Sr3fdQXZcXU
var luces=false;
var velocidad;
var fft;
var sonido;

function preload(){
  img=loadImage("fondo.jpg");
  grilla=loadImage("grilla1.png");
  cielo=loadImage("cielo.jpg");
  sonido=loadSound("phantom.mp3");  
}

function setup() {
  let canvas = createCanvas(600, 500, WEBGL);
  canvas.parent('div-sketch');
  sonido.loop();
  fft = new p5.FFT();
  fft.setInput(sonido); 
}

function draw() {
  background(200);
  luces=true;
  ambientLight(500);
  sonido.setVolume(0.25);

  push();
  if(luces){
     lights();
  }else{
    noLights();
  }
  pop();
  
  push();
  noStroke();
  rotateX(frameCount * 0.01); 
  texture(cielo);
  translate(0,0,0);
  sphere(400);
  pop();
 
  push();
  noStroke();
  rotateX(frameCount * 0.0080);
 
  texture(img);
  translate(0,0,0);
  sphere(150);
  pop();
  
  push();
  rotateX(1.52);
  texture(grilla);
  translate(mouseX-500, 300, -10);
  plane(2500,400);
  pop();
  
  push();
  var spectrum = fft.analyze();
  translate(-300,-400);
  noStroke();
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, 2000);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(200, map(x, 0, width, 0, 255), 255, 500);
    rect(x, height, width / spectrum.length, h, 240);
  }
  endShape();
  pop();
 
}
function keyPressed(){
  if(keyPressed)
    {
      if(key=='p')
        {
          sonido.pause();
        }
      if(key==' ')
        {
          sonido.play();
        }
      if(key=='s')
        {
          sonido.stop();
        }
    }
}

