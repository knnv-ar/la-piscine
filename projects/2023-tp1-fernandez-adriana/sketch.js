//Inspirado en los trabajos de Vera Molnár.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {

  background(244);

  mitadAncho = mouseX;
  mitadAlto = mouseY;

  
  noFill(0);
  rect(mouseX, mouseY, 73, 73);


  //cajas
  strokeWeight(1);
  stroke(0);

  //fila1
  fill(140);
  rect(81, 81, 63, 63);
  rect(81, 189, 63, 63);
  rect(81, 297, 63, 63);
  rect(81, 405, 63, 63);

  //fila2
  fill(179);
  rect(201, 81, 63, 63);
  rect(201, 189, 63, 63);
  rect(201, 297, 63, 63);
  rect(201, 405, 63, 63);

  //fila3
  fill(217);
  rect(321, 81, 63, 63);
  rect(321, 189, 63, 63);
  rect(321, 297, 63, 63);
  rect(321, 405, 63, 63);

  //sinrelleno
  noFill(0)
  strokeWeight(2)
  //arriba
  rect(352, 114, 63, 63);
  rect(220,118,63,63);
  rect(47,103,63,63);
  //medio
  rect(160,223,63,63);
  rect(122,172,63,63);
  rect(278,223, 63,63);
  rect(290,234, 33,33);
  rect(100,179,33,33);
  rect(244,208,43,43);
  //abajo
  rect(59,269,63,63)
  rect(131,280,60,60)
  rect(236,350,60,60)
  rect(281,314,60,60) 
  
  rect(70,368,50,50);
  rect(128,438,70,70);
  rect(299,424,50,50);
  
  if (mouseIsPressed){
   fill(217);
  rect(81, 81, 63, 63);
  rect(81, 189, 63, 63);
  rect(81, 297, 63, 63);
  rect(81, 405, 63, 63); 
  }
  if (mouseIsPressed){
    fill(179);
  rect(201, 81, 63, 63);
  rect(201, 189, 63, 63);
  rect(201, 297, 63, 63);
  rect(201, 405, 63, 63);
  }
  if (mouseIsPressed){
     fill(140);
  rect(321, 81, 63, 63);
  rect(321, 189, 63, 63);
  rect(321, 297, 63, 63);
  rect(321, 405, 63, 63);
  }
  
    
    

}
