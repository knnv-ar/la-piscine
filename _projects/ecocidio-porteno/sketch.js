// Fernando Germán Oliva
// TP Nro. 2
// Titulo: Ecocidio Porteño
// Año 2022

let img0; //147

let img1; //obelisco

let img2; //ecocidio
let img3;
let img4;
let img5;

let imgAux;

let sonido;

let posZ = 20;
let a = 5;

function preload() {
  sonido = loadSound("sierra.mp3");

  img0 = loadImage("img/img000.jpg");

  img1 = loadImage("img/img001.jpg");

  //fotos ecocidio

  img2 = loadImage("img/img002.jpg");
  img3 = loadImage("img/img003.jpg");
  img4 = loadImage("img/img004.jpg");
  img5 = loadImage("img/img005.jpg");
}

function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
  sonido.loop();
}

function draw() {
  background(252, 244, 3);

  lights();

  cilindro(img2, -350, -200, -600);

  cilindro(img3, 350, -200, -600);

  cilindro(img4, -350, 300, -600);

  cilindro(img5, 350, 300, -600);

  noFill();
  noStroke();
  translate(0, 0, posZ + a);
  texture(img1);
  plane(700, 500);

  if (posZ == -800) {
    a = 1;
  }

  if (posZ == 20) {
    a = -1;
  }

  posZ += a;

  paneo = map(mouseX, 100, width - 100, -1, 1);
  sonido.pan(paneo);

  volumen = map(mouseY, 100, height - 100, 1, 0);
  sonido.setVolume(volumen);
}

//*************************************************/

function cilindro (imagen, x, y, z) {
   
  push();
  
  noFill();
  noStroke();
    
  translate(x, y, z);
 
  rotateY(frameCount * 0.005);
  
  specularMaterial(125); 
  
  texture(imagen);
  
  cylinder(100,300);  // radio, altura , perímetro 650px
  
  pop(); 
}

//::::::::::::::::::::::::::::::::::::::::::::::::

function keyPressed() {
    if (key == "v") {
    //intercambio de texturas;
    imgAux = img1;
    img1 = img0;
    img0 = imgAux;
  }
}