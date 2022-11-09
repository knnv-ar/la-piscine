//"ESCORPIONES"

//Clickear sobre el lienzo y mover el mouse

let Valor = 0;
let Valor1 = 1;
let Valor2 = 2;
let Valor3 = 3;
let Valor4 = 4;
let Valor5 = 5;


function preload() {
  frame1 = loadImage("./assetsDATEST3.png");
  frame2 = loadImage("./assets/iatest2.jpg");
  frame3 = loadImage("./assets/DATEST2.png");
  frame4 = loadImage("./assets/DATEST1.png");
  frame5 = loadImage("./assets/DATEST8.png");
  frame6 = loadImage("./assets/DATEST7.png");

}
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');



}

function draw() {
  background(220);

  image(frame2, 0, 0, 512, 512);

  push();

  tint(330, Valor2);

  image(frame1, 0, 0, 512, 512);

  pop();

  push();

  tint(330, Valor4);

  image(frame3, 0, 0, 512, 512);

  pop();

  push();

  tint(330, Valor);

  image(frame4, 0, 0, 512, 512);

  pop();

  push();

  tint(330, Valor3);

  image(frame4, 0, 0, 512, 512);

  pop();

  push();

  tint(330, Valor1);

  image(frame5, 0, 0, 512, 512);

  pop();

  push();

  tint(330, Valor5);

  image(frame6, 0, 0, 512, 512);

  pop();
}

function mouseDragged() {

push();
  Valor = Valor + 3;
  if (Valor > 100) 
    Valor = 0;
 pop();

push();
 Valor1 = Valor1 + 3;
  if (Valor1 > 150) 
    Valor1 = 1;
  pop();

push();
 Valor2 = Valor2 + 3;
  if (Valor2 > 10) 
    Valor2 = 2;
  pop();

push();
 Valor3 = Valor3 + 3 ;
  if (Valor3 > 80) 
    Valor3 = 0;
  pop();

push();
 Valor4 = Valor4 + 3;
  if (Valor4 > 33) 
    Valor4 = 0;
  pop();

  push();
Valor5 = Valor5 + 3;
  if (Valor5 > 70) 
    Valor5 = 0;
  pop();
  

}