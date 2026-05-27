//Núcleo
//Mercedes Maudet
//AM1 Cátedra Lacabanne
//2024


let v1 = 1;
let v2 = 1;
let limite = 1000;
let dibujo = true;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(0);
}

function draw() {
  
  if(dibujo){
  v1 += 0.5;
  v2++;

  let mov1 = sin(v1 / 10) * 200; //eje y
  let mov2 = cos(v1 / 10) * 10; //eje x
  let mov3 = sin(v2 / 5) * 50; //eje y
  let mov4 = cos(v1 / 8) * 50; //eje x
  let mov5 = sin(v1 / 10) * 100; //eje y

  stroke(255, 255, 255, 30);
  strokeWeight(2);
  translate(width / 2, height / 2);

  point(mov3, mov5); //vertical con lineas
  point(mov1, mov4); //horizontal con lineas

  strokeWeight(1);
  line(mov2, mov2, mov3, mov5); //centro vertical
  line(mov1, mov2, mov1, mov4); //onda
  line(mov2, mov2, mov1, mov4); //centro horizontal
  }
  
  if(frameCount > limite){
    dibujo = false;
     }
}
