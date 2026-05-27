//fila izquierda//
var x = 20;
var y = 20;
var velocidad = 0.5;
var limite = 400;
var Vueltainicio=0;

//fila derecha//

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(220);
  strokeWeight(1);

  //fila1 cuadrados de base negra//

  strokeWeight(2);
  //2//
  fill(0);
  square(120, 20, 80);
  fill(128, 128, 128);
  square(130, 30, 60);
  fill(255);
  square(140, 40, 40);
  fill(224, 224, 224);
  square(150, 50, 20);

  //3//
  fill(0);
  square(220, 20, 80);
  fill(128, 128, 128);
  square(230, 30, 60);
  fill(255);
  square(240, 40, 40);
  fill(224, 224, 224);
  square(250, 50, 20);

  //4//
  fill(0);
  square(320, 20, 80);
  fill(128, 128, 128);
  square(330, 30, 60);
  fill(255);
  square(340, 40, 40);
  fill(224, 224, 224);
  square(350, 50, 20);

  //fila2 cuadrados de base blanca//

  strokeWeight(2);
  //2//
  fill(255);
  square(115, 125, 80);
  fill(128, 128, 128);
  square(125, 135, 60);
  fill(0);
  square(140, 140, 40);
  fill(224, 224, 224);
  square(150, 150, 20);

  //3//
  fill(255);
  square(225, 125, 80);
  fill(128, 128, 128);
  square(235, 135, 60);
  fill(0);
  square(240, 140, 40);
  fill(224, 224, 224);
  square(250, 150, 20);

  //4//
  fill(255);
  square(330, 125, 80);
  fill(128, 128, 128);
  square(340, 135, 60);
  fill(0);
  square(345, 140, 40);
  fill(224, 224, 224);
  square(355, 150, 20);

  //fila3 cuadrados de base negra//

  strokeWeight(2);
  //2//
  fill(0);
  square(110, 235, 80);
  fill(128, 128, 128);
  square(120, 245, 60);
  fill(255);
  square(140, 240, 40);
  fill(224, 224, 224);
  square(150, 250, 20);

  //3//
  fill(0);
  square(225, 235, 80);
  fill(128, 128, 128);
  square(235, 245, 60);
  fill(255);
  square(240, 240, 40);
  fill(224, 224, 224);
  square(250, 250, 20);

  //4//
  fill(0);
  square(340, 235, 80);
  fill(128, 128, 128);
  square(350, 245, 60);
  fill(255);
  square(340, 240, 40);
  fill(224, 224, 224);
  square(350, 250, 20);

  //fila4 cuadrados de base blanca//

  strokeWeight(2);
  //2//
  fill(255);
  square(100, 340, 80);
  fill(128, 128, 128);
  square(110, 360, 60);
  fill(0);
  square(140, 340, 40);
  fill(224, 224, 224);
  square(150, 350, 20);

  //3//
  fill(255);
  square(225, 340, 80);
  fill(128, 128, 128);
  square(235, 360, 60);
  fill(0);
  square(240, 340, 40);
  fill(224, 224, 224);
  square(250, 350, 20);

  //4//
  fill(255);
  square(350, 340, 80);
  fill(128, 128, 128);
  square(360, 360, 60);
  fill(0);
  square(350, 340, 40);
  fill(224, 224, 224);
  square(360, 350, 20);

  //fila5 (ultima) cuadrados de base negra//

  strokeWeight(2);
  //2//
  fill(0);
  square(90, 440, 80);
  fill(128, 128, 128);
  square(100, 460, 60);
  fill(255);
  square(140, 440, 40);
  fill(224, 224, 224);
  square(150, 450, 20);

  //3//
  fill(0);
  square(225, 440, 80);
  fill(128, 128, 128);
  square(235, 460, 60);
  fill(255);
  square(240, 440, 40);
  fill(224, 224, 224);
  square(250, 450, 20);

  //4//
  fill(0);
  square(355, 440, 80);
  fill(128, 128, 128);
  square(365, 460, 60);
  fill(255);
  square(340, 440, 40);
  fill(224, 224, 224);
  square(350, 450, 20);

  //cuadrados sin rellenar//
  //izquierda//

  push();
  x+= velocidad
  if (mouseIsPressed){    
    //movimiento hacia la izquierda//
        translate(-x,0);

     if (x > width-limite)//vuelta a punto de inicio
    x=Vueltainicio
  
  }

  //1 izquiera//
  strokeWeight(1);
  noFill();
  square(10, 25, 80);
  square(20, 35, 60);
  square(35, 40, 40);
  square(45, 50, 20);

  //2 izquierda//
  strokeWeight(1);
  noFill();
  square(5, 135, 80);
  square(20, 145, 60);
  square(40, 140, 40);
  square(50, 150, 20);

  //3 izquierda//
  strokeWeight(1);
  noFill();
  square(0, 240, 80);
  square(8, 260, 60);
  square(40, 240, 40);
  square(50, 250, 20);

  //4 izquierda//
  strokeWeight(1);
  noFill();
  square(-10, 340, 80);
  square(-1, 360, 60);
  square(40, 340, 40);
  square(50, 350, 20);

  //5 izquierda//
  strokeWeight(1);
  noFill();
  square(-55, 440, 80);
  square(-40, 460, 60);
  square(30, 440, 40);
  square(40, 450, 20);
  pop();
  //cuadrados sin rellenar//S
  //derecha//
  
  push();
  
  x += velocidad
  if (mouseIsPressed) {
    //movimiento hacia la derecha//
      translate(x, 0);
 if (x > width - limite)//vuelta a punto de inicio
    x= Vueltainicio
  }

  //1 derecha//
  strokeWeight(1);
  noFill();
  square(425, 25, 80);
  square(435, 35, 60);
  square(440, 40, 40);
  square(450, 50, 20);

  //2 derecha//
  strokeWeight(1);
  noFill();
  square(435, 135, 80);
  square(440, 145, 60);
  square(440, 140, 40);
  square(450, 150, 20);

  //3 derecha//
  strokeWeight(1);
  noFill();
  square(440, 240, 80);
  square(450, 260, 60);
  square(440, 240, 40);
  square(450, 250, 20);

  //4 derecha//
  strokeWeight(1);
  noFill();
  square(450, 340, 80);
  square(460, 360, 60);
  square(440, 340, 40);
  square(450, 350, 20);

  //5 derecha//
  strokeWeight(1);
  noFill();
  square(485, 440, 80);
  square(490, 460, 60);
  square(440, 440, 40);
  square(450, 450, 20);
  pop();
}
