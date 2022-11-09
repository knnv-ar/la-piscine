// *** "Mounstruos" ***
// Interacciones: 
// Presionar '1' para apagar la luz
// Presionar '0' para prender la luz1
// Cuando el mouse pasa un rango determinado se ve algo

var blanco = 255;
var negro = 0;
var gris = 120;
var grisOscuro = 15;
var grisClaro = 250;
var gris3 = 230;

var luz = 255;
var oscuridad = 0;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(0);

  const colorArriba = color(luz, grisClaro);
  const colorAbajo = color(grisOscuro, oscuridad);

  if (keyIsPressed == true)
    {
      if (key == '1')
        {
          blanco = 0;
          gris = 0;
          grisClaro=0;
          grisOscuro=0;
          gris3=0;
          
          
        }
      else if (key == '0')
        {
          blanco = 255;
          gris = 120;
          grisClaro=250;
          grisOscuro =15;
          gris3=230;
        }
    }

  push();

  for (var i = 0; i <= width; i++) {
    translate(i * 2, i * 12);
    fill(gris3);
    strokeWeight(7);
    stroke(negro);
    rect(width / 2, 0, 60, 55);
  }
  pop();

  push();
  fill(grisOscuro);
  quad(314, 421, 330, 433, 331, 487, 312, 470);
  quad(298, 328, 314, 337, 314, 390, 297, 376);
  quad(289, 246, 301, 253, 301, 307, 288, 296);
  quad(280, 179, 290, 182, 290, 236, 280, 225);
  pop();

  push(); //segunda luz;

  for (var l = 90; l <= 320; l++) {
    const degrade = lerpColor(colorArriba, colorAbajo, l / 350);
    stroke(degrade);
    line(76, l, 225, l);
  }

  pop();

  push();
  translate(58, 93);
  rotate(radians(10));
  fill(negro);
  rect(0, 0, 40, 190);
  pop();

  push();
  translate(205, 101);
  rotate(radians(-10));
  fill(negro);
  rect(0, 0, 50, 190);
  pop();

  push();

  fill(grisOscuro);

  translate(75, 87);
  rect(0, 0, 150, 20);

  pop();
  
    push(); //pupila
  fill(negro);
  ellipse(147,218,20,20);
 fill(blanco);
  ellipse(147,218,10,10);
  pop();

  push();
  if (mouseX > 75 && mouseX < 400) {

  } else {
    fill(negro);
    rect(40, 105, 200, 200);
    fill(blanco);
    ellipse(147, 218, 10, 10);
  } //luz apagada

  pop();
  
  push()//rasguños
  stroke(negro);
  for(i=10; i<=11;i++){
    translate(i+10,i);
  line(0,164,135,177);
    
  }pop()
  push()
  for(i=0;i<=10;i++)
    {
      translate(i+5,i+10);
      line(0,30,10,112);
    }
  pop()

  push(); //ojo
  translate(70, 170);
  noFill();
  strokeWeight(2);
  stroke(negro);
  beginShape();
  vertex(120, 45);
  bezierVertex(80, 18, 40, 50, 45, 55);
  endShape();
  

  beginShape();
  vertex(120, 45);
  bezierVertex(130, 45, 40, 80, 45, 55);
  endShape();
  pop();

  //lamparita

  translate(-60, 0);
  push();
  translate(471, 1);
  stroke(grisOscuro);
  line(0, 0, 0, 300);

  pop();

  push();
  translate(461, 300);
  noStroke();
  fill(gris);
  rect(0, 0, 20, 10, 2);

  pop();

  push();
  translate(471, 328);
  noStroke();
  fill(blanco);
  ellipse(0, 0, 35, 40);

  pop();
}
