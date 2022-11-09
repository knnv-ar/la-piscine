function preload(){
  cancion = loadSound("./assets/cancion.mp3");
  fuente = loadFont("./assets/dogica.ttf");
}

function setup() {
 let canvas = createCanvas(400, 400);
 canvas.parent('div-sketch');
  }

function draw() {
  background(mouseX,mouseY);
 //console.log(cancion.currentTime());
  
  //lineasMouse();
  textoInicio();
  escena1();
  escena2();
  escena3();
  escena4();
  }

function keyReleased(){
  if (key == "x"){
    cancion.play()
  }
   
}

var angulo = 0.0; //angulo para el color
angulo1 = 0.0; //angulo para escena 2
angulo2 = 0.0; //escena 3
angulo3 = 0.0; //escena 4

desplazamiento = 40;

function textoInicio() {
  desplazamiento = desplazamiento + 10;
  if ((desplazamiento) => 75) {
    desplazamiento = 70;
  }
  for (i = 0.3; i < 30; i++) {
    for (j = 0.3; j < 30; j++) {
      rectMode(CENTER);
      noStroke();

      fill(68, 154, 118, 50);
      rect(i * 25, random(j * 500, 0), 5);
    }
  }
  push();
  textFont(fuente);
  fill(68, 154, 118);
  textSize(15);
  text("PRESS 'X' TO PLAY", 70, 200);
  pop();
}

function escena1() {
  var valorSeno = sin(angulo); //color en movimiento
  var color1 = map(valorSeno, -1, 1, 0, 255);

  push();
  if (key == "x") {
    if (cancion.currentTime() > 0) {
      background(color1);
      angulo += 0.05;
    }
    if (cancion.currentTime() > 2.5) {
      background(color1, 0, 0);
      angulo += 0.7;
    }
    if (cancion.currentTime() > 3.7) {
      background(0, color1, 0);
      angulo += 1;
    }
    if (cancion.currentTime() > 4.3) {
      background(0, 0, color1);
      angulo += 2;
    }
    if (cancion.currentTime() > 4.7) {
      background(color1);
      angulo += 0.5;
    }
    if (cancion.currentTime() > 6) {
      background(random(0, color1), random(0, color1), random(0, color1));
      angulo += 5;
    }
    if (cancion.currentTime() > 6.5) {
      background(0);
    }
  }
  pop();
}

function escena2() {
  var valorSeno = sin(angulo1); //color en movimiento
  var color2 = map(valorSeno, -1, 1, 0, 255);
  var color3 = map(-valorSeno, -1, 1, 0, 255);

  if (cancion.currentTime() > 6.7) {
    background(color2);
    angulo1 += 0.05;

    /*for (var a = 0; a < 400; a++) {
      strokeWeight(1);
      stroke(color3, 100);
      line(random(-300,0) * a, 600 + a, 600 + a, 600 - a * 5);
    } */
    
    for (var a = 0; a < 400; a++) {
      strokeWeight(random(1,4));
      stroke(color3, 100);
      line(-300 * a, 600 + a, 600 + a, 600 - a * 5);
    }
    
    
    if (cancion.currentTime() > 7) {
      rectMode(CENTER);
    stroke(color2);
      //noStroke();
      strokeWeight(4);
       fill(color2, 105, 97) //1
  rect(100,100,200)
    }
    if (cancion.currentTime() > 7.5) {
      fill(255, color2, 128) //2
  rect(100,300,200)
    }
    if (cancion.currentTime() > 8) {
      fill(248, 243, color2) //3
  rect(300,100,200)
    }
    if (cancion.currentTime() > 8.5) {
      fill(color2, 214, 164)  //4
  rect(300,300,200)
    }
    if (cancion.currentTime() > 9) {
      fill(8, color2, 209)  //5
   rect(150,150,100)
    }
    if (cancion.currentTime() > 9.5) {
        fill(89, 173, color2)  //6
  rect(150,250,100)
    }
    if (cancion.currentTime() > 10) {
        fill(color2, 148, 255)  //7
  rect(250,150,100)
    }
    if (cancion.currentTime() > 10.5) {
     fill(199, color2, 232)  //8
  rect(250,250,100)
    }
  }
}

function escena3() {
  var valorSeno = sin(angulo2); //color en movimiento
  var color3 = map(valorSeno, -1, 1, 0, 255);
  var color4 = map(-valorSeno, -1, 1, 0, 255);
  
  rectMode(CENTER);
  noStroke();
  //strokeWeight(random(0,4));
  //stroke(color3);
  
  if (cancion.currentTime() > 11) {
    background(color3);
    
    push()
    for (var a = 0; a < 400; a++) {
      strokeWeight(random(5,6));
      stroke(color4);
      line(-300 * a, 600 + a, 600 + a, 600 - a * 5);
    }
    pop()
    
  
    
    fill(color3, 214, 164);
rect(200, 200, random(0, 400));
  } if (cancion.currentTime() > 13.5) {
    fill(89, color3, 246);
rect(200, 200, random(0, 400));
  } if (cancion.currentTime() > 14) {
    fill(157, 148, color3);
rect(200, 200, random(0, 400));
  } if (cancion.currentTime() > 17.5) {
    fill(color3, 128, 232);
rect(200, 200, random(0, 300));
  } if (cancion.currentTime() > 18) {
    fill(248, color3, 208);
rect(200, 200, random(0, 300));
  }
  
  angulo2 += 0.1;
}
  // 2, 3, 4 , 
function escena4(){
   var valorSeno = sin(angulo3); //color en movimiento
  var color5 = map(valorSeno, -1, 1, 0, 255);
  var color6 = map(-valorSeno, -1, 1, 0, 255);
 
  
  if (cancion.currentTime() > 20.5) { //1
     background(color5);
    stroke(color6, 200);
   for (var a = 0; a < 400; a++) {
      strokeWeight(1);
      line(random(-100,0) * a, 600 + a, 600 + a, 600 - a * 5);
    } 
  } if (cancion.currentTime() > 23.5) {  //2
    background(color5);
      for (var b = 0; b < 400; b++) {
      strokeWeight(2);
      line(random(-500, -b) +500,b *25 ,b*25,b*25);
    } 
  } if (cancion.currentTime() > 26.5) { //3
    background(color5);
      for (var c = 0; c < 400; c++) {
      strokeWeight(2);
      line(random(-400, -c) +400,c *25 ,c*25,c*25);
    } 
  } if (cancion.currentTime() > 29.5) {  //4
    background(color5);
      for (var d = 0; d < 400; d++) {
      strokeWeight(2);
      line(random(-300, -d) +300,d *25 ,d*25,d*25);
    } 
  } if (cancion.currentTime() > 32.5) { //5
    background(color5);
     for (var e = 0; e < 400; e++) {
      strokeWeight(1);
      line(random(-100,-200) * e, 600 + e, 600 + e, 600 - e * 2);
    } 
  } if (cancion.currentTime() > 35.5) { //6
    background(color5);
      for (var f = 0; f < 400; f++) {
      strokeWeight(2);
      line(random(-200, -f) +500,f,f,f);
    } 
  } if (cancion.currentTime() > 41) { //7
    background(0);
  } if (cancion.currentTime() > 43.5) { //8
    background(0);
     push();
  textFont(fuente);
  fill(68, 154, 118);
    noStroke();
  textSize(14);
  text("THANKS FOR WATCHING :) ", 40, 200);
  pop();
  } 
  
  angulo3 += 0.05
}

/* function lineasMouse() {
  stroke(mouseY, mouseX);
  line(0, 0, mouseX, mouseY);
  line(400, 0, mouseX, mouseY);
  line(0, 400, mouseX, mouseY);
  line(400, 400, mouseX, mouseY);
  line(200, 0, mouseX, mouseY);
  line(0, 200, mouseX, mouseY);
  line(200, 400, mouseX, mouseY);
  line(400, 200, mouseX, mouseY);
} */
