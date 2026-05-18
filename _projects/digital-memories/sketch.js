var captura;
var mp3;
var img = []; // Array para almacenar las imágenes
var tiempoCambio = 10 //intervalo de tiempo en milisegundos
var tiempoUltimoCambio = 0; // Tiempo del último cambio



function preload(){
  //sonido
  mp3 = loadSound("musica/doorbell.mp3");
  
  //imagenes
  img[0] = loadImage('imagenes/giphy1.gif');
  img[1] = loadImage('imagenes/giphy2.gif');
  img[2] = loadImage('imagenes/giphy3.gif');
  img[3] = loadImage('imagenes/giphy4.gif');
  img[4] = loadImage('imagenes/giphy5.gif');
  img[5] = loadImage('imagenes/giphy6.gif');
}

function setup() {
  //createCanvas(400, 400, WEBGL);
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('div-sketch');
  mp3.loop();
  // captura = createCapture(VIDEO);
  // captura.size(320, 240);
  // captura.hide(); // Ocultar el elemento de captura de video
}

function draw() {
  
// //   // Verificar si ha pasado el tiempo de cambio para la imagen de la cámara
// if (millis() - tiempoUltimoCambio > tiempoCambio) {
//     tiempoUltimoCambio = millis(); // Actualizar el tiempo del último cambio
//     let imgCapturada = captura.get(); // Obtener la imagen actual de la cámara
//    img.push(imgCapturada); // Agregar la imagen al array
//   }
    // Verificar si ha pasado el tiempo de cambio para el plano
  if (millis() - tiempoUltimoCambio > tiempoCambio) {
    tiempoUltimoCambio = millis(); // Actualizar el tiempo del último cambio
    let indiceAleatorio = floor(random(img.length)); // Elegir una imagen aleatoria
    texture(img[indiceAleatorio]); // Establecer la imagen como textura del plano
  
    // Control de velocidad con el teclado
  if (keyIsDown(UP_ARROW)) {
    tiempoCambio -= 10;
  } else if (keyIsDown(DOWN_ARROW)) {
    tiempoCambio += 10;
  }
  

  }
  noStroke();
  plane(400, 400);
  
  

  //rotación
  orbitControl();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

 
push();  
  // Generar colores aleatorios para el cubo
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Dibujar un cubo con cambio constante de color
  fill(r, g, b);
  stroke(0);
  box(100);
  pop();
}