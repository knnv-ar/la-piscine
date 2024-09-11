let angle = 0;
let size = 200;
let grosor = 1;
let cambiarGrosor = false;

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
}

function draw() {
  
  //Defino el angulo 
  angle += 0.02;
  
  background(0,5);
  
  //////////////// :3 ///////////////////
  
  strokeWeight(grosor);
  noFill();
  noStroke();
  
    //FIGURA 1
  
  push();
  //Guardo parametros para Figura 1 en variables
  //Tamaño y Mov
    let x1 = width / 2 + sin(angle) * size;
  let y1 = height / 2 + cos(angle * 3) * size;
  
  let curva1X = width / 2 + cos(angle) * size;
  let curva1Y = height / 2 + sin(angle) * size;
  
  let curva2X = width / 2 + sin(-angle) * size;
  let curva2Y = height / 2 + cos(-angle) * size;
  
  stroke(random(20,180));
  beginShape();
  vertex(x1, y1);
  bezierVertex(curva1X,
               curva1Y,
               curva2X,
               curva2Y,
               x1, y1);
  endShape();
  pop();
  
  ////////////////////////
  
  //FIGURA 2
  
  push();
  //Guardo parametros para Figura 2 en variables
  //Tamaño y Mov
  let x1_2 = width/2 + cos(angle) * size;
  let y1_2 = height/2 + sin(angle*3) * size;
  
  let curva1X_2 = width/2 + sin(angle) * size;
  let curva1Y_2 = height/2 + cos(angle) * size;
  
  let curva2X_2 = width/2 + cos(-angle) * size;
  let curva2Y_2 = height/2 + sin(-angle) * size;
  
  stroke(random(15,200));
  
  beginShape();
  vertex(x1_2, y1_2);
  bezierVertex(curva1X_2, 
               curva1Y_2, 
               curva2X_2,
               curva2Y_2,
               x1_2, y1_2);
  endShape();
  
  pop();

  ///////////////////////////
  
  //CURVA CONECTORA
  push();
  noStroke();
  
  fill(random(0,220),30)
  
  //Guardo parametros para la curva en variables
  //Tamaño
     let conecCurva1X = random(width/2,200);
     let conecCurva1Y = random(height/2,300);
     let conecCurva2X = random(width/2,200);
     let conecCurva2Y = random(height/2,300);

   beginShape();
   vertex(x1, y1);
   bezierVertex(conecCurva1X,
                conecCurva1Y,
                conecCurva2X,
                conecCurva2Y,
                x1_2, y1_2); 
   endShape();
   pop();
  
  //Grosor crece o disminuye dependiendo de la ubicacion del mouse en el eje X
if(cambiarGrosor === true){
  if (mouseX < width / 2) {
    grosor -= 0.01;
  } else if (mouseX > width / 2) {
    grosor += 0.01;
  }
}
  

  //////////////////////////////////////
  
  
  //LINEAS MOUSE CON CLICK DEL MOUSE
  if(mouseIsPressed){
        strokeWeight(1.2);
        stroke(245);
    //se crean lineas en posiciones random desde el centro
    //margen de 30px
        line(random(30,width - 30), width / 2, height / 2, random(30,height - 30));
  }
  
}
//acá termina el draw^

//Cambio de grosor con tecla Enter
function keyPressed() {
  if (keyCode === ENTER) {
    cambiarGrosor = !cambiarGrosor;
  }
  }