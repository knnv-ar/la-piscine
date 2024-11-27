//tp2 
//clic 
let img1;
let img2;
let palpitar = 1; 
let grande = true;  
let img3;
let coordenadas = [];
let cantidadClics = 0;
let clicsImg3 = 15;  
let img4;
let verImg4 = false; 
let sonidoError


function preload() {
  img1 = loadImage("/ffondo.png");
  img2 = loadImage("/continuar.png");
  img3 = loadImage("/seguir.png");
  img4 = loadImage("/abandonar.png"); 
  sonidoError = loadSound("/error.mp3");
}

function setup() {
  
  let canvas = createCanvas(400, 500);
  canvas.parent('div-sketch');
  coordenadas = [
    { x: 50, y: 150 },  
    { x: 150, y: 270 }, 
    { x: 25, y: 330 }, 
    { x: 0, y: 400 },  
    { x: 270, y: 50 },
    { x: 100, y: 100 }, 
    { x: 200, y: 250 }, 
    { x: 0, y: 0 },   
    { x: 300, y: 300 }, 
    { x: 150, y: 400 },  
    { x: 20, y: 50 }, 
    { x: 100, y: 170 }, 
    { x: 0, y: 250 }, 
    { x: 0, y: 0 },   
    { x: 300, y: 100 },
    { x: 120, y: 400 }  
  ];
}

function draw() {
  image(img1, 0, 0);
  
  let x = 100;
  let y = 200;
  
  let imgWidth = img2.width * palpitar;
  let imgHeight = img2.height * palpitar;
  
  image(img2, x, y, imgWidth, imgHeight);
  
  
  if (grande) {
    palpitar += 0.003;  
    if (palpitar >= 1) {  
      grande = false;
    }
  } else {
    palpitar -= 0.003;  
    if (palpitar <= 0.9) { 
      grande = true;
    }
  }

  
  let cantidadImg3 = min(cantidadClics, coordenadas.length); 
  for (let i = 0; i < cantidadImg3; i++) {
    image(img3, coordenadas[i].x, coordenadas[i].y);
  }
  
  if (cantidadClics >= clicsImg3 && !verImg4) {
    verImg4 = true; 
  }

  if (verImg4) {
    image(img4, 15, 150);  
  }
}

   function mousePressed() {
 
  let x = 100;
  let y = 200;
  let imgWidth = img2.width * palpitar;
  let imgHeight = img2.height * palpitar;

 if  (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
  cantidadClics++; 
    sonidoError.play(); 
  }

}



