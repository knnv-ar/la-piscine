estado = 0;
var radioMayor = 100;
var x = radioMayor;
var y = radioMayor;
var velocidadX = 0.01; // velocidad de mov. en eje X
var velocidadY = 0.01; // velocidad de mov. en eje Y
var direccionX = 0.01; // dirección de mov. en eje X
var direccionY = 0.01; // dirección de mov. en eje Y
var maxcolor = 20;
var angulo = 0.0;
var desplazamiento = 0;
var desplazamiento2 = 400;
var igual = 400;
var velocidad = 0.02;
var img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25,img26,img27,img28,img29;



function preload() {
  img = loadImage("1/cubismo.webp");
  img1 = loadImage("1/abstraccionismo.webp");
  img2 = loadImage("1/expresionismo.webp");
  img3 = loadImage("1/futurismo.webp");
  img4 = loadImage("1/impresionismo.webp");
  img5 = loadImage("1/impresionismo/1.webp");
  img6 = loadImage("1/impresionismo/2.webp");
  img7 = loadImage("1/cubismo/1.webp");
  img8 = loadImage("1/cubismo/2.webp");
  img9 = loadImage("1/cubismo/3.webp");
  img10 = loadImage("1/cubismo/4.webp");
  img11 = loadImage("1/cubismo/5.webp");
  img12 = loadImage("1/futurismo/1.webp");
  img13 = loadImage("1/futurismo/2.webp");
  img14 = loadImage("1/expresionismo/1.webp");
  img15 = loadImage("1/expresionismo/2.webp");
  img16 = loadImage("1/abstraccionismo/1.webp");
  img17 = loadImage("1/abstraccionismo/2.webp");
  img18 = loadImage("1/abstraccionismo/3.webp");
  img19 = loadImage("1/abstraccionismo/4.webp");
  img20 = loadImage("1/abstraccionismo/5.webp");
  img21 = loadImage("1/fondo.webp");
  img22 = loadImage("1/impresionismo/3.webp");
  img23 = loadImage("1/finall1.webp");
  img24 = loadImage("1/fondo1.webp");
  img25 = loadImage("1/cuerdas.webp");
    img26 = loadImage("1/fondofinal.webp");
  img27 = loadImage("1/fondofut.webp");
  img28 = loadImage("1/fondoex.webp");
    img29 = loadImage("1/fondoab.webp");



}

function setup() {
  let canvas = createCanvas(600, 350);
  canvas.parent('div-sketch');
  header = createElement("h1", "Presionar teclas del 1-6 para recorrer el trabajo. Con la 'r' se vuelve al principio.");
}

function keyPressed() {


  if (key == "r") {
    estado = 0;


  }
  if (key == "1") {
    estado = 1;


  }
  if (key == "2") {
    estado = 2;


  }
  if (key == "3") {
    estado = 3;


  }
  if (key == "4") {
    estado = 4;


  }
  if (key == "5") {
    estado = 5;


  }
  if (key == "6") {
    estado = 6;


  }
}

function draw() {
  fondo();

  if (estado == 0) {
header.html("Presionar teclas del 1-6 para recorrer el trabajo. Con la 'r' se vuelve al principio.");
    image(img4, 5, 100);
    img4.resize(100, 150);

    image(img, 120, 93);
    img.resize(100, 160);

    image(img3, 240, 94);
    img3.resize(100, 170);

    image(img2, 355, 100);
    img2.resize(90, 170);

    image(img1, 455, 93);
    img1.resize(100, 170);
  }

  if (estado == 1) {

    image(img5, 30, 10);
    img5.resize(250, 150);

    image(img6, 330, 13);
    img6.resize(250, 150);

    image(img22, 180, 172);
    img22.resize(250, 170);
  } else if (estado == 2) {

    image(img7, 30, 20);
    img7.resize(100, 150);

    image(img8, 260, 20);
    img8.resize(100, 160);

    image(img9, 480, 20);
    img9.resize(100, 170);

    image(img10, 150, 150);
    img10.resize(90, 170);

    image(img11, 370, 150);
    img11.resize(100, 170);
  } else if (estado == 3) {

    image(img12, 40, 100);
    img12.resize(300, 200);

    image(img13, 400, 93);
    img13.resize(150, 200);

  } else if (estado == 4) {

    image(img14, 300, 70);
    img14.resize(250, 180);

    image(img15, 90,70);
    img15.resize(150, 220);

  } else if (estado == 5) {

    image(img16, 30, 20);
    img16.resize(150, 150);

    image(img17, 260, 20);
    img17.resize(100, 130);

    image(img18, 450, 20);
    img18.resize(120, 150);

    image(img19, 130, 170);
    img19.resize(150, 170);

    image(img20, 350, 170);
    img20.resize(150, 170);
    
  } else if (estado == 6) {


    push();
    var y1 = desplazamiento + sin(angulo) * igual;
    image(img23, 0, y1);
    angulo += velocidad;
    pop();
    push();
    image(img25, 110, 30);
    img25.resize(400,400);
    pop();

  }
}

function fondo() {
  if (estado == 0) {

    background(250);
  }
  if (estado == 1) {
    push();
    tint(255, 127);
    image(img24, 0, 0);
    pop();
  } else if (estado == 2) {

    image(img21, 0, 0);


  } else if (estado == 3) {

    image(img27,0,0);


  } else if (estado == 4) {

    image(img28,0,0);


  } else if (estado == 5) {

    image(img29,0,0);


  } else if (estado == 6) {

    image(img26,0,0);


  }

}
