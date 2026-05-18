let captura;
let ancho, alto;
let texto = "";
let f;
let startTime;
let mostrarTexto = false;
let cycleTime = 15000; // Duración del ciclo completo (15 segundos)

function setup() {
  f = loadFont('NatURl-Mono.ttf'); 
  let canvas = createCanvas(700, 700);
  canvas.parent('div-sketch');
  captura = createCapture(VIDEO, { flipped: true });
  captura.size(150, 150);
  captura.hide();
  frameRate(30);
  startTime = millis();
}

function draw() {
 

  // Cargar y modificar los píxeles para las capturas en tono rojo
  captura.loadPixels();
  let capturaRoja = captura.get(); // Copiamos la captura original para modificarla
  capturaRoja.loadPixels();

  for (let i = 0; i < capturaRoja.pixels.length; i += 4) {
    capturaRoja.pixels[i] = capturaRoja.pixels[i];     // Mantener rojo
    capturaRoja.pixels[i + 1] = 0;                    // Verde en 0
    capturaRoja.pixels[i + 2] = 0;                    // Azul en 0
  }
  capturaRoja.updatePixels();

  // Dibujar el mosaico usando la versión roja
  for (let x = 0; x < width; x += ancho) {
    for (let y = 0; y < height; y += alto) {
      ancho = random(100, 150);
      alto = random(100, 150);
      image(capturaRoja, x, y, ancho, alto);
    }
  }

  // Dibujar la captura central con colores originales
  image(captura, width / 2 - 200, height / 2 - 200, 400, 400);

  // Control del tiempo para los textos
  let tiempo = (millis() - startTime) % cycleTime;
  
   textFont(f);

  // Mostrar el primer texto después de 3 segundos, durante 5 segundos
  if (tiempo > 3000 && tiempo < 8000) {
    mostrarTexto = true;
    texto = "¿Quién soy yo?";
  }
  // Mostrar el segundo texto después de 12 segundos, durante 4 segundos
  else if (tiempo > 12000 && tiempo < 16000) {
    mostrarTexto = true;
    texto = "¿A dónde pertenezco?";
  } else {
    mostrarTexto = false;
  }

  // Dibujar el texto si está activo
  if (mostrarTexto) {
    fill(128, 0, 0); // Color bordó
    textSize(32);
    textAlign(CENTER, CENTER);
    text(texto, width / 2, height / 2); // Ubicado en el centro del lienzo
  }
}
