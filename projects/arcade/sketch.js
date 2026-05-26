//VARIABLES
var img1
var img2
var imgBloque
var imgBloque_90
var imgBloque_180
var imgBloque_270
var img4
var font1
var font2
var font3
var juego = 0
var bloqueX = -450
var bloqueY = -400
var listOfCircles = []
var circleSize = 20;
var lastMoveTime = 0;
var direction = "down"
var loser = false
var rot = 1
var sonstart
var imgpacman
var imgcoin
var imgBloqueSeleccionada
var sonprik
var soncharge
var sonerrrro
var sonerrrroHasPlayed=false;

//que no abra menu click derecho
document.oncontextmenu = function() {
  return false;
}

function preload() {
  img1 = loadImage("imagenes/fondo3.jpg");
  img2 = loadImage("imagenes/tetrisss.png");
  imgBloque = loadImage("imagenes/bloque.png");
  imgBloque_90 = loadImage("imagenes/tetris-bloque-90.png");
  imgBloque_180 = loadImage("imagenes/tetris-bloque-180.png");
  imgBloque_270 = loadImage("imagenes/tetris-bloque-270.png");
  img4 = loadImage("imagenes/snakes.png");
  imgpacman = loadImage("imagenes/pacman.png");
  imgcoin =loadImage("imagenes/coin.png");
  font1 = loadFont("fonts/barcade.ttf");
  font2 = loadFont("fonts/pixel.ttf");
  font3 = loadFont("fonts/gaming.ttf");
  sonstart = loadSound("sonidos/start.wav");
  imgBloqueSeleccionada = imgBloque
  sonprik = loadSound("sonidos/prik.wav");
  soncharge = loadSound("sonidos/charge.wav");
  sonerrrro = loadSound("sonidos/errrro.wav");
}
function keyPressed(){
  if(key ==" "){
    var volum = 0.2
    sonprik.setVolume(volum);
    sonprik.play();
    rot+=1
    if(rot>4){
      rot=1;
    }
  }
}
function reset(){
  loser=false
for (i = 0; i < 5; i++) {
    let circle = {
      x: 250,
      y: i * circleSize
    };
    listOfCircles[i] = circle;
  }
}
function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent('div-sketch');
  for (i = 0; i < 5; i++) {
    let circle = {
      x: 250,
      y: i * circleSize
    };
    listOfCircles[i] = circle;
  }
}

function draw() {
  background(220);
  /* PANTALLA INICIO */
  image(img1, 0, 0, 500, 400);
  stroke(255);
  strokeWeight(2);
  textSize(65);
  fill("#ED26E4");
  textFont(font1);
  text("(ARCADE)", 110, 120);
  noStroke();
  textSize(45);
  fill(255);
  textFont(font2);
  fill("#FFF300");
  push();
  translate(p5.Vector.fromAngle(millis() / 400, 20));
  text("PLAY", 205, 190);
  pop();
  textSize(32);
  text("PRESS 1", 200, 240);
  text("PRESS 2", 195, 280);
  textFont(font3);
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(15);
  text("© COPYRIGHT UNA 2020", 150, 350);
  text("ALL RIGHTS RESERVED", 157, 370);
  noStroke();
  /* FIN PANTALLA INICIO */

  if (keyIsPressed) {
    var volume = 0.2
    if (key == 1) {
      juego = 1
     soncharge.setVolume(volume)
     soncharge.play();
    }
    if (key == 2) {
      juego = 2
     soncharge.setVolume(volume)
     soncharge.play();
    }
    if (key == 3) {
      juego = 0
     soncharge.setVolume(volume)
     soncharge.play();
    }
  }
  /* PANTALLA TETRIS */
  if (juego == 1) {
    image(img2, -22, 0, 548, 400);
    image(imgBloqueSeleccionada, bloqueX, bloqueY, 1350, 1000);
    textSize(20);
    fill(255);
    textFont(font2);
    text("PRESS 3 TO RETURN TO MENU", 119, 50);
    stroke(0);
    fill("#FFF300");
    textSize(22);
    text("PRESS 'SPACE' TO ROTATE",115,390);
    if (keyIsPressed) {
      if (keyCode == UP_ARROW) {
        bloqueY = bloqueY - 5;
      }
      if (keyCode == DOWN_ARROW) {
        bloqueY = bloqueY + 5;
      }
      if (keyCode == LEFT_ARROW) {
        bloqueX = bloqueX - 5;
      }
      if (keyCode == RIGHT_ARROW) {
        bloqueX = bloqueX + 5;
      }
        if (bloqueX > -270) {
          bloqueX = -270
        } if (bloqueX < -600) {
          bloqueX = -600
        } if (bloqueY > -130){
          bloqueY = -130
        } if (bloqueY < -450){
          bloqueY = -450
        }
    }
    switch(rot){
    case 1:imgBloqueSeleccionada=imgBloque;break;
    case 2:imgBloqueSeleccionada=imgBloque_90;break;
    case 3:imgBloqueSeleccionada=imgBloque_180;break;
    case 4:imgBloqueSeleccionada=imgBloque_270;break;
    }        
  }
  /* FIN PANTALLA TETRIS */
  /* PANTALLA SNAKE */
  if (juego == 2) {
    if (keyIsPressed){
      if (key == "r"){
        reset();
        sonerrrroHasPlayed=false;
        direction ="down"
        var volumi = 0.2
        sonstart.setVolume(volumi)
     sonstart.play();
      }
    }
    image(img4, -22, 0, 548, 400)
    image(imgpacman, 150,100,60,40);
    image(imgcoin, 300,270,40,30);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    fill(255);
    textFont(font2);
    text("PRESS 3 TO RETURN TO MENU", 115, 60);
    noStroke();
    for (var i in listOfCircles) {
      if (loser==true){
        fill(0);
      }
      let circulo = listOfCircles[i]
      circle(circulo.x, circulo.y, circleSize);
    }

    if (millis() > (lastMoveTime + 100)) {
      
      if (loser == false) {
        listOfCircles.splice(0, 1);
        let head = listOfCircles[listOfCircles.length - 1]
        if (direction == "down") {
          listOfCircles.push({
            x: head.x,
            y: head.y + circleSize
          })
        } else if (direction == "right") {
          listOfCircles.push({
            x: head.x + circleSize,
            y: head.y
          })
        } else if (direction == "up") {
          listOfCircles.push({
            x: head.x,
            y: head.y - circleSize
          })
        } else if (direction == "left") {
          listOfCircles.push({
            x: head.x - circleSize,
            y: head.y
          })
        }


        lastMoveTime = millis();
      }
    }

    if (keyIsPressed) {
      if (keyCode == UP_ARROW && direction!="down") {
       direction = "up"
      }
      if (keyCode == DOWN_ARROW && direction!="up") {
        direction = "down"
      }
      if (keyCode == LEFT_ARROW && direction!="right") {
        direction = "left"
      }
      if (keyCode == RIGHT_ARROW && direction!="left") {
        direction = "right"
      }
    }
    var head = listOfCircles[listOfCircles.length - 1]
    var volumen = 0.2
    if (head.x > 400) {
      loser = true
      stroke(0);
      strokeWeight(3);
      fill("#FFF300");
      textSize(35);
      textFont(font2);
      text("PRESS 'R' TO RESET",96,200);
      
      if(sonerrrroHasPlayed==false){
        var volum = 0.2
        sonerrrro.setVolume(volum);
        sonerrrro.play();
        noStroke();
        sonerrrroHasPlayed=true;
      }
    }
    if (head.x < 100){

      loser = true
      stroke(0);
      strokeWeight(3);
      fill("#FFF300");
      textSize(35);
      textFont(font2);
      text("PRESS 'R' TO RESET",96,200);
      
      if(sonerrrroHasPlayed==false){
        var volu = 0.2
        sonerrrro.setVolume(volu);
        sonerrrro.play();
        noStroke();
        sonerrrroHasPlayed=true;
      }
    }
    if (head.y < 40){
      loser = true
      stroke(0);
      strokeWeight(3);
      fill("#FFF300");
      textSize(35);
      textFont(font2);
      text("PRESS 'R' TO RESET",96,200);
      
      if(sonerrrroHasPlayed==false){
        var vol = 0.2
        sonerrrro.setVolume(vol);
        sonerrrro.play();
        noStroke();
        sonerrrroHasPlayed=true;
      }
    }
    if (head.y > 320){
      loser = true
      stroke(0);
      strokeWeight(3);
      fill("#FFF300");
      textSize(35);
      textFont(font2);
      text("PRESS 'R' TO RESET",96,200);
      
      if(sonerrrroHasPlayed==false){
        var v = 0.2
        sonerrrro.setVolume(v);
        sonerrrro.play();
        noStroke();
        sonerrrroHasPlayed=true;
      
      noStroke();
    }}
  /* FIN PANTALLA SNAKE */
  }}
