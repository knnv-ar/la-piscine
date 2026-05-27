let inicioy = 120;
let filas = 30;
let iniciofilax = 100;
let finfilax = 400;
let espacio = 2; //separación horizontal
let distancia = 10;//separación vertical

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  
  background(0);
}

function draw() {
  
  // dibujo grilla de puntos en el centro del canvas
  for (let i = 0; i < filas; i++) {
    let y = inicioy + i * distancia;
    for (let x = iniciofilax; x <= finfilax; x += espacio) {
      strokeWeight(3);
      stroke(0);
      //stroke(255);
      point(x, y);
      
      
    }
  }

  
  /*
  //dibujo una grilla cuadriculada 

  for (let i = 0; i < 512; i += 10) {
      stroke(0);
      strokeWeight(5);
      line(i, 0, i, 512);
      line(0, i, 512, i);
    }
  */

  //creo las variables con coordenadas 'aleatorias' para dibujar las formas

  let x = random(iniciofilax, finfilax);
  let filarandom = floor(random(0, filas)); //redondeo para que no se pase la grilla
  let y = inicioy + filarandom * distancia;

  //dibujo cuadrados
  stroke(255, 10);
  rect(x, y, 5, 5);
  
 
 //dibujo puntos
  strokeWeight(7);
  stroke(0);     
  point(x, y);
 

}
