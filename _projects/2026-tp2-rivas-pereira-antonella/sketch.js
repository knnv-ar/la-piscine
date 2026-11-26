
let img;
let colores= []
let posicionesX = [];
let posicionesY = [];
let orientaciones = [];
let colorimagen;
let sonidoA;
let sonidoW;
let sonidoS;
let sonidoD;

async function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');
  background(0);

 img = await loadImage("img/gatitosorpresa.jpg");

  //sonidos de cada tecla
 sonidoA = await loadSound("sonidos/pop.mp3");
 sonidoW = await loadSound("sonidos/down.mp3");
 sonidoS = await loadSound("sonidos/pip.mp3");
 sonidoD = await loadSound("sonidos/retro.mp3");
  
}

function draw() {
 
 //imagen: cambio de color en loop 
  
  colorimagen = map(cos(frameCount * 0.2), -1, 1, 0, 360);
  tint(colorimagen, 100, 100);
  imageMode(CENTER);
  image(img, 200, 200, 150, 150);
  tint(255);

  
  // LINEAS
  strokeWeight(4);

  for (let i = 0; i < posicionesX.length; i++) {
  stroke(colores[i]);//colores randoms
    
  //posiciones de las lineas verticales
    if (orientaciones[i] == false) {
      
    line(posicionesX[i], posicionesY[i] - 200,
           posicionesX[i], posicionesY[i] + 200);
      
    } else {
      //posiciones de las lineas horizontales
      line(posicionesX[i] - 200, posicionesY[i],
           posicionesX[i] + 200, posicionesY[i]);
      
    }

  }
}

function keyPressed() {
  
 colores.push(color(random(255), random(255), random(255)));//aca determino los colores

  
  // HORIZONTALES
  if (key == 'w') {
    sonidoW.play();
    posicionesX.push(200);
    posicionesY.push(random(0, 130));
    orientaciones.push(true);
  }

  if (key == 's') {
     sonidoS.play();
    posicionesX.push(200);
    posicionesY.push(random(270, 400));
    orientaciones.push(true)
  }

  
  //VERTICALES
if (key == 'a') {
   sonidoA.play();
    posicionesX.push(random(0, 130));
    posicionesY.push(200);
    orientaciones.push(false);
  }
if (key == 'd') {
   sonidoD.play();
    posicionesX.push(random(270, 400));
    posicionesY.push(200);
    orientaciones.push(false);
  }
}
