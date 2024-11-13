let lucesvi;
let lucescom;
let iniciocen = 0; // Posición inicial del círculo central (comienza desde arriba)
let velocidad = 8; // Velocidad de movimiento del círculo

let inicioizq = 350; // Posición inicial del círculo de la izquierda
let inicioder = 350; // Posición inicial del círculo de la derecha

function setup() {
  let canvas = createCanvas(600, 350);
  canvas.parent('div-sketch');
  lucesvi = createVideo("Video/h_1.mp4");
  lucesvi.loop();
  lucesvi.hide(); 
  
 
  lucescom = createVideo("Video/h_2.mp4"); 
  lucescom.loop();
  lucescom.hide();
}

function draw() {
  background(0);
  colorMode(HSB,360,100,100);

  // Videos
  image(lucesvi, 0, 0, 650, 350); // Primer video
  image(lucescom, 0, 0, mouseX, height); // Segundo video 

  // Circulos
  fill(0); 
  noStroke(); 
  ellipse(300, iniciocen, 150, 150); // Círculo central

  ellipse(100, inicioizq, 200, 200); // Círculo de la izquierda
 
  ellipse(500, inicioder, 200, 200); // Círculo de la derecha

  // Movimiento de los círculos
  iniciocen += velocidad; // circulo central hacia abajo
  inicioizq -= velocidad; // circulo de la izquierda hacia arriba
  inicioder -= velocidad; // circulo de la derecha hacia arriba

  // Si el círculo central llega al fondo, vuelve a la parte superior
  if (iniciocen > height) {
    iniciocen = 0;
  }

  // Si los círculos de los lados llegan a la parte superior, vuelven al fondo
  if (inicioizq < 0) {
    inicioizq = height;
  }

  if (inicioder < 0) {
    inicioder = height;
  }
}