let boton;
let coordx = 1;
let coordy = 5;
let fin;
let col = 1;
let fef;
var bina = [30, 30, 30, 255]; //array para comparacion
var bonano = [150, 150, 150, 255]; //array para comparacion

function preload() {
  img = loadImage("nees.webp"); //carga de la imagen
}

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  image(img, 0, 0); //insercion de la imagen en el canvas
  img.filter(GRAY); //transformacion de imagen a escala de grises
  img.resize(width, 0); //ajuste de la imagen al tamaño del canvas
  background(20); //el background esta en el setup para que lo que se dibuje en el draw quede grabado en el mismo
  boton = createButton("Procesar"); //boton para iniciar el programa
  boton.position(230, 490);
  boton.mousePressed(activar);
  frameRate(60);
}

function draw() {
  textSize(6); //ajuste de las caracteristicas de los caracteres
  fill(255);
  col = img.get(coordx, coordy); //lectura de los colores y grabado en una variable para comparacion

  if (fin == 0) {
    //este condicional evita que el codigo siga funcionando una vez alcanzado el limite definido
    if (coordx <= 506) {
      //condicional: limite horizontal del canvas
      coordx += 3;
    } else {
      //ajusta la posicion vertical y horizontal para seguir dibujando en la siguiente linea
      coordx = 5;
      coordy += 6;
    }

    if (coordy >= 500) {
      //condicional: limite vertical del canvas
      fin = 1; //variable para detener el programa
      textSize(8); //datos adicionales
      text("Alpha v0.01 - Sistema Binario De Interpretacion Visual, Nazareno Alexis Mazzolo Viale, 2021.", 40, 510);
      
    }
    else {
      if (col[1] < bina[1] || col[1] > bonano[1]) { //comparador de arrays de color
        textFont("Source Code Pro");
        text("1", coordx - 3, coordy + 7);
      } else {
        textFont("Source Code Pro");
        text("0", coordx - 3, coordy + 7);
      }
    }
  }
}

function activar() {//funcion que esconde el boton "procesar" una vez iniciado el programa
  fin = 0;
  boton.hide();
}
