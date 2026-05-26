// Inspirado en Lillian Schwartz Pixelation y Enigma "computer art"
//Ella buscaba romper la idea clasica que el arte es solo a mano fisca y que se podia hacer con computadoras tambien. No buscaba una obra "bonita" sino experimentar, explorar. Debido a una enfermedad ocular que afectó la forma en que veía el color y profundidad, desarrolló técnicas y métodos de edición para llevar la saturación a su punto límite óptimo para aumentar su visión.
//Schwartz comenzó a trabajar con la computadora en un momento en que el sentimiento anti-tecnología entre los artistas era frecuente. La computadora fue mal entendida, vista como una máquina rígida diseñada para uso comercial, asfixiante a la creatividad, o, por el contrario, artificialmente inteligente y, por lo tanto, degradando al artista al papel secundario como técnico. Pero Schwartz vio la computadora como parte de la evolución natural del almacén de herramientas de un artista, razonando que, al ignorar la computadora, “uno estaría ignorando una gran parte de nuestro mundo actual.
//Escribio codigo para generar patrones y texturas en blanco y negro mediante una computadora.Luego las imagenes fueron sacadas de lo digital y fueron pintadas a mano.Despues se utilizo para juntar las imagenes una Impresora óptica
// -Triángeles-
let tamanoCuadrado = 20;
function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');
}

function draw() {
  background(255);

 for (let x = 0; x < width; x += tamanoCuadrado) { //esto sera lo horizontal
    for (let y = 0; y < height; y += tamanoCuadrado) {// vertical //Estos dos for son para recorrer toda la pantalla en forma de grilla, avanzando de 20 en 20 (o sea, salta de cuadrado en cuadrado)
      
let suma = (x / tamanoCuadrado) + (y / tamanoCuadrado); // número de columna + número de fila,  me dice si esa casilla es par o impar


  if (suma % 2 == 0) { //significa que está chequeando si la variable suma es par (o sea, si el resto de dividirla por 2 es cero). 
        fill(0); // negro
      } else {
        fill(255); // blanco
      }

      noStroke();
      rect(x, y, tamanoCuadrado, tamanoCuadrado);
    }
  }


  // Si se cumple esta condición (hay un 1% de chance), se dibuja una línea random tipo "glitch"
if (random() < 0.01) {
  
  // Le pone color negro al borde (la línea que va a dibujar)
  stroke(0);
  
  // Dibuja una línea desde un punto aleatorio de la pantalla hasta otro punto aleatorio
  // random(width) elige una posición X al azar
  // random(height) elige una posición Y al azar
  // Así genera un efecto tipo error digital o interferencia
  line(random(width), random(height), random(width), random(height));
}

  strokeWeight(2);

   //TRIÁNGULO 1
  //coordenadas
  let x1 = 86;
  let y1 = 290;
  let x2 = 10;
  let y2 = 420;
  let x3 = 170;
  let y3 = 420;
    // calcular el centro de este nuevo triángulo sacando el promedio / 3

  let centroX = (x1 + x2 + x3) / 3;
  let centroY = (y1 + y2 + y3) / 3;
  // el bucle que repite los triángulos 10 veces, unos más chicos que el otro

  for (let i = 0; i < 10; i++) {
    let f = i / 10; // esto saca un factor f que va desde 0 hasta casi 1 (tipo 0.0, 0.1, 0.2, ..., 0.9). Sirve para determinar cuánto te acercás al centro del triángulo original
    fill(0);
    stroke(225);
    let nx1 = x1 + (centroX - x1) * f;
    // tomá el punto original x1, y muve un poquito hacia el centro cx. f controla cuánto te movés:
 // cuando f es 0 -> te quedás en el punto original
    // cuando f es 1 -> llegás al centro
    // cuando f es 0.5 -> vas a mitad de camino entre el punto y el centro.
 // Esto lo hace para los 3 vértices del triángulo (x1/y1, x2/y2, x3/y3). O sea, cada punto del triángulo se va moviendo hacia el centro en cada vuelta.

    let ny1 = y1 + (centroY - y1) * f;
    let nx2 = x2 + (centroX - x2) * f;
    let ny2 = y2 + (centroY - y2) * f;
    let nx3 = x3 + (centroX - x3) * f;
    let ny3 = y3 + (centroY - y3) * f; 

    triangle(nx1, ny1, nx2, ny2, nx3, ny3);
    // Eso dibuja el nuevo triángulo, usando los puntos que se acercaron al centro
    // Entonces, en cada vuelta, tenés un triángulo nuevo más chiquito que el anterior, todos metiéndose adentro del original.

  }

  //TRIÁNGULO 2
  x1 = 420;
  y1 = 30;
  x2 = 340;
  y2 = 150;
  x3 = 500;
  y3 = 150;
  centroX = (x1 + x2 + x3) / 3;
  centroY = (y1 + y2 + y3) / 3;
  for (let i = 0; i < 10; i++) {
    let f = i / 10;
    fill(0);
    stroke(225);
    let nx1 = x1 + (centroX - x1) * f;
    let ny1 = y1 + (centroY - y1) * f;
    let nx2 = x2 + (centroX - x2) * f;
    let ny2 = y2 + (centroY - y2) * f;
    let nx3 = x3 + (centroX - x3) * f;
    let ny3 = y3 + (centroY - y3) * f;
    triangle(nx1, ny1, nx2, ny2, nx3, ny3);
  }

  //TRIÁNGULO 3 (CENTRO FUERTE)
  x1 = 256;
  y1 = 100;
  x2 = 120;
  y2 = 300;
  x3 = 392;
  y3 = 300;
  centroX = (x1 + x2 + x3) / 3;
  centroY = (y1 + y2 + y3) / 3;
  for (let i = 0; i < 10; i++) {
    let f = i / 10;
    fill(0);
    stroke(255);
    let nx1 = x1 + (centroX - x1) * f;
    let ny1 = y1 + (centroY - y1) * f;
    let nx2 = x2 + (centroX - x2) * f;
    let ny2 = y2 + (centroY - y2) * f;
    let nx3 = x3 + (centroX - x3) * f;
    let ny3 = y3 + (centroY - y3) * f;
    triangle(nx1, ny1, nx2, ny2, nx3, ny3);
  }

  //TRIÁNGULO 4 (IZQUIERDA ARRIBA)
  x1 = 100;
  y1 = 200;
  x2 = 236;
  y2 = 35;
  x3 = 20;
  y3 = 10;
  centroX = (x1 + x2 + x3) / 3;
  centroY = (y1 + y2 + y3) / 3;
  for (let i = 0; i < 10; i++) {
    let f = i / 10;
    fill(0);
    stroke(255);
    let nx1 = x1 + (centroX - x1) * f;
    let ny1 = y1 + (centroY - y1) * f;
    let nx2 = x2 + (centroX - x2) * f;
    let ny2 = y2 + (centroY - y2) * f;
    let nx3 = x3 + (centroX - x3) * f;
    let ny3 = y3 + (centroY - y3) * f;
    triangle(nx1, ny1, nx2, ny2, nx3, ny3);
  }

  //TRIÁNGULO 5 (ABAJO DERECHA)
  x1 = 450;
  y1 = 500;
  x2 = 500;
  y2 = 350;
  x3 = 350;
  y3 = 350;
  centroX = (x1 + x2 + x3) / 3;
  centroY = (y1 + y2 + y3) / 3;
  for (let i = 0; i < 10; i++) {
    let f = i / 10;
    fill(0);
    stroke(255);
    let nx1 = x1 + (centroX - x1) * f;
    let ny1 = y1 + (centroY - y1) * f;
    let nx2 = x2 + (centroX - x2) * f;
    let ny2 = y2 + (centroY - y2) * f;
    let nx3 = x3 + (centroX - x3) * f;
    let ny3 = y3 + (centroY - y3) * f;
    triangle(nx1, ny1, nx2, ny2, nx3, ny3);
  }

}

