//Trabajo práctico Artes Multimediales 1 - Cátedra Lacabanne / Vicente Cuadros / 2020

//variable global

let musi1;


//precargar sonidos

function preload() {
  musi1 = loadSound('musica/musi1.mp3')
}
//lienzo

function setup() {
  let canvas = createCanvas(720, 500, WEBGL);
  canvas.parent('div-sketch');
  musi1.loop();
  amp = new p5.Amplitude();

}


function draw() {
  
  
  let paneo = map(mouseX, 0, width, -0.7, 0.7);
  musi1.pan(paneo);
  
  let volumen = map(mouseY, 0, width, 1, 0.4);
  volumen = constrain(volumen, 0, 1);
  musi1.amp(volumen);

  
//esfera 1
  
  let esf1 = (Number(mouseY*mouseX))
  background(0);      
  fill(0, 1, 0);
  stroke(270);
  push();
  translate(mouseY, mouseX * 0.20, -350);
  rotateZ(frameCount * 0.001);
  sphere(esf1);
  pop();
  
//esfera 2
  
  let esf2 = (Number(mouseY*mouseX)/10)      
  fill(5, 0, 0);
  stroke(270);
  push();
  translate(mouseY, mouseX * 0.20, -350);
  rotateZ(frameCount * 0.000001);
  sphere(esf2);
  pop();

//esfera 3
  
  let esf3 = (Number(mouseX*mouseY)/25)      
  noFill();
  stroke(200);
  push();
  translate(mouseX, mouseY * 0.20, -350);
  rotateZ(frameCount * 0.0001);
  sphere(esf3);
  pop();

//esfera 4
  
  let esf4 = (Number(mouseX*mouseY));
  noFill();
  stroke(400);
  push();
  translate(350, mouseY * 0.20, -350);
  rotateZ(frameCount * 0.0001);
  sphere(esf4);
  pop();
  
 //Esfera pequeña, esquina inferior derecha
  
  let esf5=(Number(mouseY*mouseY)/1000);     
  noFill();
  stroke(300);
  push();
  translate(350, mouseX * 0.20, -350);
  rotateZ(frameCount * 0.001);
  sphere(esf5);
  pop();
  
//Cubo
  
  function cubito(){
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(500, 500, 500);
  pop();
  }
  
// variable que muestra el cubo según ubicación del mouse
  
  if (mouseX>300&&mouseY>200){
   cubito()

  }else{
  
  //Variable para mostrar cubo en esquina superior izquierda

  if(mouseX<50&&mouseY<50){
    mouseX=mouseX*1000
    mouseY=mouseY*1000
  }

}

  
}





