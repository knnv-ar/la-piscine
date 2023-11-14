let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let zoom = 0; // Valor inicial del zoom
var cancion;


function preload() {
 img1 = loadImage("foto1.jpg");
 img2 = loadImage("foto2.jpg");
 img3 = loadImage("foto6.jpg");
 img4 = loadImage("foto5.jpg");
 img5 = loadImage("foto8.jpg");
 img6 = loadImage("foto7.jpg");
  
 cancion = loadSound("viento.mp3"); 
}



function setup() {
  //createCanvas(windowWidth, windowHeight,  WEBGL);
  let canvas = createCanvas(512, 512, WEBGL);
  canvas.parent('div-sketch');
  cancion.loop();
  }
  

function draw() {
  //orbitControl();

  background(255);
  noCursor();
  noStroke();
  
  rotateY(frameCount * 0.001);
  scale(0.7);
  
  
  
  push();
  texture(img3);
  translate(0, 120, 130);
  box(240, 300, 60);
  pop();
  
  push();
  texture(img5); //no puedo bajar el prisma, ni rotar la imagen
  translate(0, -100, -100);
  box(350, 250, 40);
  pop();
  
 
  
  push();
  texture(img2);
  translate(120, 0, 0);
  box(150, 350, 70);
  pop();
  
  push();
  texture(img2);
  translate(-120, 0, 0);
  box(150, 350, 70);
  pop();
  
  push();
  texture(img5);
  translate(205, 0, 0);
  box(20, 390, 70);
  pop();
  
  
  
  push();
  texture(img5);
  translate(-205, 0, 0);
  box(20, 390, 70);
  pop();
  
  push();
  texture(img6);
  translate(-300, 0, 0);
  box(210, 290, 30);
  pop();
  
  push();
  texture(img6);
  translate(300, 0, 0);
  box(210, 290, 30);
  pop();
  
 
  
  push();
  texture(img3);
  translate(0, -50, 0);
  box(100, 700, 110);
  pop();
  
   push();
  texture(img2);
  translate(0, -425, 0);
  box(90, 50, 90);
  pop();
  
  
  
  push();
  texture(img4);
  translate(-90, 0, 0);
  box(30, 600, 100);
  pop();
  
  push();
  texture(img4);
  translate(90, 0, 0);
  box(30, 600, 100);
  pop();
  
  push();
  texture(img5);
  translate(0, 0, -90);
  box(80, 450, 70);
  pop();
  
   push();
  texture(img6);
  translate(0, 0, 90);
  box(80, 450, 70);
  pop();
  
  push();
  texture(img5);
  translate(-140, 0, 90);
  box(80, 200, 50);
  pop();
  
  push();
  texture(img5);
  translate(140, 0, 90);
  box(80, 200, 50);
  pop();
  
  push();
  texture(img3);
  translate(-230, 120, 130);
  box(150, 220, 50);
  pop();
  
  push();
  texture(img3);
  translate(230, 120, 130);
  box(150, 220, 50);
  pop();
  
  
  push();
  texture(img4);
  translate(-230, 100, 130);
  box(30, 260, 80);
  pop();
  
  push();
  texture(img4);
  translate(230, 100, 130);
  box(30, 260, 80);
  pop();
  
  

  let centerX = 0; // Coordenada X del centro de la escena
  let centerY = 0; // Coordenada Y del centro de la escena

  // Calcula las coordenadas de la cámara en función del zoom
  let camX = cos(frameCount * 0.001) * zoom + centerX;
  let camY = sin(frameCount * 0.001) * zoom + centerY;
  let camZ = sin(frameCount * 0.0001) * zoom;

  // Establece la posición de la cámara
  camera(camX, camY, camZ, centerX, centerY, 0, 0, 1, 0);



  // Realiza el zoom lento
  let targetZoom = 380; // Valor objetivo del     zoom
  zoom = lerp(zoom, targetZoom, 0.01);
}

// tengo que arreglar la velocidad

