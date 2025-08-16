let centrox, centroy;
let angulo = 0;
let espacio = 15;
let est = 0.08;
let vueltas = 2;
let vueltar;
let diacirculo;

function setup() {
  let canvas = createCanvas(512, 512, WEBGL)
  canvas.parent('div-sketch');
  background(0);
  noFill();
  stroke(150);

  // Coordenadas del centro
  centrox = width / 2;
  centroy = height / 2;

  // Conversión de vueltas a radianes
  vueltar = TWO_PI * vueltas;

  // Diámetro de los círculos
  diacirculo = espacio * TWO_PI;

  // Dibujamos los elementos estáticos por primera vez
  dibujarFondo();
}

function draw() {
  stroke(255);
  noFill();

  if (angulo < vueltar) {
    let radio = espacio * angulo;
    let x = centrox + radio * cos(angulo);
    let y = centroy + radio * sin(angulo);
    ellipse(x, y, diacirculo, diacirculo);
    angulo += est;
  } else {
    // Reiniciar la animación de la espiral
    angulo = 0;
    background(0);
    dibujarFondo(); // Volvemos a dibujar líneas y cuadros
    
  }
}

// Función para dibujar líneas y cuadros fijos
function dibujarFondo() {
  stroke(150);

  // cuadros
  rect(180,200,150,150);
  rect(130,150,250,250);
  rect(80,90,350,350);
  rect(30,50,450,455);
  rect

 
  
 
  fill(0);
  ellipse(420,480,50,50);
  
  fill(0);
  ellipse(320,480,50,50);
  
  fill(0);
  ellipse(220,480,50,50);
  
  
  fill(0);
  ellipse(120,480,50,50);
  // Cuadros
  noFill();
  rect(100, 460, 40, 40);
  fill(100);
  rect(100, 480, 20, 20);

  noFill();
  rect(200, 460, 40, 40);
  fill(150);
  rect(220, 480, 20, 20);

  noFill();
  rect(300, 460, 40, 40);
  fill(150);
  rect(300, 480, 40, 20);

  fill(150);
  rect(400, 460, 40, 40);
  
 
}





