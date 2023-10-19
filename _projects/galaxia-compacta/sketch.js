let angulo = 0;
function setup() {
  createCanvas(512, 512);
  Canvas.parent('div-sketch')
}

function draw() {
  background(0);
    if(mouseIsPressed){
    if(mouseButton==LEFT){
      background(random(255))
    }
  }
  //puntos aleatorios
    for (let i = 0; i <70; i++) {
    let x = random(width);
    let y = random(height);
    stroke(random(255))
    strokeWeight(4)
    point(x, y);
  }
  //translación
  translate (width/2, height/2);
  rectMode(CENTER);
  

/* apriete la tecla izquiedra para rotar las figuras*/
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
      angulo += 0.03;
    }
  }
  rotate(angulo);

  
  noFill();
  stroke(200);
  /* Cuadrado1 */
  strokeWeight(20);
  rotate(angulo);
  rect(0, 0, 482, 482);
  /* Cuadrado2 */
  stroke(160);
  strokeWeight(16);
  rotate(angulo);
  rect(0, 0, 400, 400);
  /* Cuadrado3 */
  stroke(120);
  strokeWeight(12);
  rotate(angulo);
  rect(0, 0, 326, 326);
  /* Cuadrado4 */
  stroke(80);
  strokeWeight(8);
  rotate(angulo);
  rect(0, 0, 262, 262);
  /* Cuadrado5 */
  strokeWeight(4);
  stroke(40);
  rotate(angulo);
  rect(0, 0, 204, 204);
}