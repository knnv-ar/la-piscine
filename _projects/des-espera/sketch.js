
let img = 0;
let ambiente = 0;
let tiempo = 0;
let dali = 0;
let gif = 0;
let gif2 = 0;
let time = 0;
let gota = 0;

function preload() {
  img = loadImage("amarillo.jpg");
  ambiente = loadSound("sonidoplaya.mp3");
  tiempo = loadImage("rojo1.jpg");
  pink = loadSound("pink.mp3");
  gif = loadImage("tiempo1.gif");
  gif2 = loadImage("tiempo2.gif");
   time= loadImage("time.gif");
  gota= loadImage("lagrimas.gif");
}

function setup() {
  let canvas = createCanvas(800, 600);
canvas.parent('div-sketch');
  noCursor()
  ambiente.play();
  img.resize(width, height);
  print(img.width);
}

function draw() {
  background(0);
  image(img, 0, 0, 800, 600);
  tint(210,220,220)
  
  
  //click para ver el cambio
  if (mouseIsPressed) {
    
   //imágen ojos
    image(tiempo, 0, 0, 800, 600);
  //reloj grande
    image(gif, 500, -55, 380, 400);
//reloj chico
    image(gif2, 50, 0, 100, 100);
    image(gif2, 50, 700, 100, 100);
    image(gif2, 50, 600, 100, 100);
    image(gif2, 50, 500, 100, 100);
    image(gif2, 50, 400, 100, 100);
    image(gif2, 50, 300, 100, 100);
    image(gif2, 50, 200, 100, 100);
    image(gif2, 50, 100, 100, 100);
    //timeisover
      image(time, 50, 0, 100, 100);
    image(time, 50, 700, 100, 100);
    image(time, 50, 600, 100, 100);
    image(time, 50, 500, 100, 100);
    image(time, 50, 400, 100, 100);
    image(time, 50, 300, 100, 100);
    image(time, 50, 200, 100, 100);
    image(time, 50, 100, 100, 100);
    
    //"sudor"
        image(gota, 350, 10,200, 200);

   
  }
}

function mousePressed() {
  pink.play();
  ambiente.stop();
}

function mouseReleased() {
  pink.stop();
  ambiente.play();
}
