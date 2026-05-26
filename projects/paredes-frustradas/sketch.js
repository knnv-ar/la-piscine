let funciontx = "functionsetup() ";
let tx =
  ' let posX, posY;function setup() {createCanvas(512, 512);console.log()}function draw() {background(0);console.log("eje x " + mouseX + ";" + " eje y " + mouseY);push();fill(150);textSize(40);text(funciontx, 10, 10, 70, 70);pop();let blanco = color(256);let tranquiGris = color (150)let heavyGris = color (80)let negro = color(0)//SUELO push();translate(-400,150)scale(10)        push();      push();      fill (240);      strokeWeight(0);    quad(0,30,60,60,120,30,60,0);      pop();    pop();  pop();    //codigo  if (mouseIsPressed)  {    push();    fill(blanco); textSize(10);   text(tx, 10, 20, width/3, height)  } else {    push();    fill(80);    textSize(10);    posX = random(0,width)  posY = random(0,height)    text(tx, 10, 20, posX, posY);  pop();  }       //SILLA ENTERA  push(); translate(250,150)  push();    translate(0,80)      //patas    push();        //pata delante izq        strokeWeight(0);       fill(tranquiGris);      quad(60,70,60,120,70,115,70,65);   fill(heavyGris);       quad(60,70,60,120,50,115,50,65);        //pata trazera izq        fill(tranquiGris);        quad(120,40,120,90,110,95,110,45)        fill(heavyGris);        quad(110,45,110,95,100,90,100,50)      pop();      push();     translate(-50,-25)       push();        //pata delante izq        strokeWeight(0);        fill(tranquiGris);       quad(60,70,60,120,70,115,70,65);       fill(heavyGris);        quad(60,70,60,120,50,115,50,65);        //pata trazera izq     fill(tranquiGris);        quad(120,40,120,90,110,95,110,45)  fill(heavyGris);   quad(110,45,110,95,100,90,100,50)      pop(); pop(); //apoya.asspush();strokeWeight(0); fill(blanco);quad(0,30,60,60,120,30,60,0);fill(heavyGris); quad(0,30,60,60,60,70,0,40);fill(tranquiGris);quad(60,60,120,30,120,40,60,70)pop()pop()//apoyaespaldapush();push();strokeWeight(0); translate(-10,5)fill(heavyGris);quad(60,0,60,80,120,110,120,30) pop(); strokeWeight(0);fill(tranquiGris); quad(110,115,120,110,120,30,110,35)  fill(blanco);quad(110,35,50,5,60,0,120,30)  pop(); pop();}';

let posX, posY;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
}

function draw() {
  background(0);
 
  
  push();
  fill(150);
  textSize(40);
  text(funciontx, 10, 10, 70, 70);
  pop();

  /*push();
    stroke(400);
    fill(256);
    rect(256, 20, 15, 490, 20);
    rect(80, 380, 203, 10, 20);
    rect(80, 390, 11, -320, 20);
  pop();*/

  let blanco = color(256);
  let tranquiGris = color(150);
  let heavyGris = color(80);
  let negro = color(0);

  //SUELO
  push();
  translate(-400, 150);
  scale(10);
  push();
  push();
  fill(240);
  
  strokeWeight(0);
  quad(0, 30, 60, 60, 120, 30, 60, 0);
  pop();
  pop();
  pop();
  

  //codigo
   push();
  if (mouseIsPressed) {
    push();
    blendMode(DIFFERENCE);
    push();
    fill(blanco);
    textSize(10);
    text(tx, 10, 20, width / 1.5, height);
    (pop);
    (pop);
  } else {
    
    push();
    fill(blanco);
    textSize(10);
    posX = random(0, width);
    posY = random(0, height);
    text(tx, 10, 20, posX, posY);
    pop();
  }
  (pop);
  
  
  //SILLA ENTERA
  push();
  translate(250, 150);
  push();
  translate(0, 80);
  //patas
  push();
  //pata delante izq
  strokeWeight(0);
  fill(tranquiGris);
  quad(60, 70, 60, 120, 70, 115, 70, 65);
  fill(heavyGris);
  quad(60, 70, 60, 120, 50, 115, 50, 65);

  //pata trazera izq
  fill(tranquiGris);
  quad(120, 40, 120, 90, 110, 95, 110, 45);
  fill(heavyGris);
  quad(110, 45, 110, 95, 100, 90, 100, 50);
  pop();

  push();
  translate(-50, -25);
  push();
  //pata delante izq
  strokeWeight(0);
  fill(tranquiGris);
  quad(60, 70, 60, 120, 70, 115, 70, 65);
  fill(heavyGris);
  quad(60, 70, 60, 120, 50, 115, 50, 65);

  //pata trazera izq
  fill(tranquiGris);
  quad(120, 40, 120, 90, 110, 95, 110, 45);
  fill(heavyGris);
  quad(110, 45, 110, 95, 100, 90, 100, 50);
  pop();
  pop();

  //apoya.ass
  push();
  strokeWeight(0);
  fill(blanco);
  quad(0, 30, 60, 60, 120, 30, 60, 0);
  fill(heavyGris);
  quad(0, 30, 60, 60, 60, 70, 0, 40);
  fill(tranquiGris);
  quad(60, 60, 120, 30, 120, 40, 60, 70);
  pop();
  pop();

  //apoyaespalda
  push();
  push();
  strokeWeight(0);
  translate(-10, 5);
  fill(heavyGris);
  quad(60, 0, 60, 80, 120, 110, 120, 30);
  pop();
  strokeWeight(0);
  fill(tranquiGris);
  quad(110, 115, 120, 110, 120, 30, 110, 35);
  fill(blanco);
  quad(110, 35, 50, 5, 60, 0, 120, 30);
  pop();
  pop();
}
