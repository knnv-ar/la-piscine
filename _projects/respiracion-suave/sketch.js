
let tiempo = 0;

function setup() {
  createCanvas(512, 512);
  background(0);
  frameRate(30); // Tasa de refre
  noFill();
}

function draw() {
  
  background(0, 20); // Fondo negro con un poco de transparencia para efecto estela.

  translate(width / 2, height / 2); 
  // Mueve el origen del dibujo al centro del lienzo.

  stroke(255); // Dibuja líneas blancas

  beginShape(); // beginShape y Vertex permiten dibujar una forma punto por punto. Cada vertex(x, y) es un punto en el dibujo, y beginShape() inicia la forma.
  
  for (let angulo = 0; angulo < TWO_PI * 2; angulo += 0.05) {  
    // Uso angulo para que la figura se dibuje punto por punto en forma circular. Two_PI porque asi se genera una vuelta completa, *2 seria básicamente que la figura se complete 2 veces. Con +=0.05 cambian la cantidad de puntos que se dibujan. Si uso un valor mas grande la figura se ve rota y con picos, si lo haces mas chico se ve mas suave pero consume mas recursos.

    let x = 180 * sin(3 * angulo + tiempo * 2);
    let y = 180 * sin(2 * angulo); 
    // Uso sin para darle movimientos suaves y repetitivos a la figura. Tiempo * 2 anima la figura, y uso * angulo para generar esas repeticiones en cada uno de los vertices. Si cambio los valores tambien cambia la cantidad de repeticiones.

    vertex(x, y); 
  }
  endShape(CLOSE); // Con esto se conecta el ultimo punto con el primero y cerramos la figurita

  tiempo += 0.01; // Avanza el tiempo para animar la forma, sin esto la figura no tendira movimiento. 
}
