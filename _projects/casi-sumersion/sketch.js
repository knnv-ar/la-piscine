//CASI SUMERSIÓN, 2021.
//Esta obra cuenta con la funcionalidad del clic
//y las flechas del teclado.
//¡Que la disfrutes!


var video1, video2, video3, video4;
var audio1, audio2, audio3, audio4;
var textura;
var p1, p2, p3, p4, p5;

function preload() {
  audio1 = loadSound("audios/tormenta.mp3");
  audio2 = loadSound("audios/oceano.mp3");
  audio3 = loadSound("audios/loop.mp3");
  audio4 = loadSound("audios/stars.mp3");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');

  video1 = createVideo("videos/rayo.mp4");
  video1.hide();
  video1.loop();

  video2 = createVideo("videos/agua2.mp4");
  video2.hide();
  video2.loop();

  video3 = createVideo("videos/loop3.mp4");
  video3.hide();
  video3.loop();

  video4 = createVideo("videos/stars.mp4");
  video4.hide();
  video4.loop();

  textura = video1;
  audio1.loop();
}

function draw() {
  //console.log("x: " + mouseX + " y: " + mouseY);

  background(0);
  escena();

}

function escena1() {
  textura = video1;
  audio1.loop();
  audio2.stop();
  audio3.stop();
  audio4.stop();
}

function escena2() {
  textura = video2;
  audio2.loop();
  audio1.pause();
  audio3.pause();
  audio4.stop();
}

function escena3() {
  textura = video3;
  audio3.loop();
  audio4.stop();
  audio2.stop();
  audio1.stop();
}

function escena4() {
  textura = video4;
  audio4.loop();
  audio3.stop();
  audio2.stop();
  audio1.stop();
}


function keyPressed() {
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      escena4();
    }
    if (keyCode == DOWN_ARROW) {
      escena1();
    }
    if (keyCode == LEFT_ARROW) {
      escena2();
    }
    if (keyCode == RIGHT_ARROW) {
      escena3();
    }
  }
}

function escena() {
  noStroke();
  lights();

  var mX = mouseX - width / 2;
  var mY = mouseY - height / 2;

  pointLight(133, 64, 255, mX, mY, 150);

  p1 = -200;
  p2 = 200;
  p3 = 150;
  p4 = -150;
  p5 = 0;

  if (mouseX >= 150 && mouseX <= 350 && mouseY >= 150 && mouseY <= 350) {
    p1 = -400;
    p2 = 400;
    p3 = 200;
    p4 = -200;
  }

  if (mouseX >= 230 && mouseX <= 280 && mouseY >= 230 && mouseY <= 280) {
    p1 = -500;
    p2 = 500;
    p3 = 400;
    p4 = -400;
  }

  push(); //pantalla superior

  texture(textura);
  quad(p1, p1, p2, p1, p3, p5, p4, p5);

  pop();
  push(); //pantalla inferior

  texture(textura);
  quad(p3, p5, p4, p5, p1, p2, p2, p2);

  pop();
  push(); // esfera
  
  

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // rotateZ(frameCount * 0.01);
  translate(mX, mY, random(-10, 10));
  texture(textura);
  sphere(50);
  
  if (mouseIsPressed) {
    tint(mouseX,mouseY);
    sphere(250);
  }

  pop();
}
document.oncontextmenu = function () {
  return false;
};
