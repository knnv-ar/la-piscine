let figuras = []; // Almacenar información de las esferas
let perspectiva = 0; // ajustar la perspectiva de la cámara
let miCancion; // Almacenar el sonido
let coloresInvertidos = false; //  invertir los colores
let mostrarTexto = false; // Determinar si mostrar texto
let miFuente; // Almacenar la fuente de texto

function preload() {
  // Función de p5.js para cargar recursos antes de iniciar el programa
  miFuente = loadFont('fuente.otf'); // Carga la fuente
  miCancion = loadSound('videoplayback.m4a'); // Carga el archivo de audio
}

function setup() {
  let canvas = createCanvas(650, 400,WEBGL);
  canvas.parent('div-sketch');
  ambientLight(100, 100, 100); // Establece la luz ambiente
  pointLight(255, 255, 255, 0, 0, 100); // Establece una luz puntual
  specularMaterial(255); // Material especular
  miCancion.loop(); // Reproduce la canción en bucle
}

function mouseClicked() {
  // Función de p5.js llamada cada vez que se hace clic en el lienzo
  coloresInvertidos = !coloresInvertidos; // Invierte el estado de coloresInvertidos
  mostrarTexto = !mostrarTexto; // Invierte el estado de mostrarTexto
}

function draw() {
  // Función de p5.js llamada en un bucle continuo
  if (coloresInvertidos) {
    // Si coloresInvertidos es verdadero
    background(0); // Fondo negro
    fill(255); // Relleno blanco
  } else {
    // Si coloresInvertidos es falso
    background(220); // Fondo gris claro
    fill(0); // Relleno negro
    stroke(1)
    strokeWeight(1)
  }

  perspectiva = map(mouseX, 0, width, -PI, PI); // Ajusta la perspectiva según la posición del ratón
  camera(0, 0, 300 * sin(perspectiva), 0, 0, 0, 0, 1, 0); // Configura la cámara

  if (figuras.length < 100) {
    // Si hay menos de 100 figuras en el arreglo
    let x = random(-width / 2, width / 2); // Posición x aleatoria
    let y = random(-height / 2, height / 2); // Posición y aleatoria
    let z = random(-100, 100); // Posición z aleatoria
    let radio = 10; // Radio de la esfera

    push(); // Guarda la configuración de la matriz de transformación
    translate(x, y, z); // Translada al punto (x, y, z)
    sphere(radio); // Dibuja una esfera
    pop(); // Restaura la configuración de la matriz de transformación

    figuras.push({ x, y, z, radio, tiempoCreacion: millis() }); // Agrega información de la esfera al arreglo
  }

  for (let i = figuras.length - 1; i >= 0; i--) {
    // Recorre el arreglo de figuras
    push(); // Guarda la configuración de la matriz de transformación
    translate(figuras[i].x, figuras[i].y, figuras[i].z); // Translada al punto de la i-ésima figura
    sphere(figuras[i].radio); // Dibuja una esfera
    pop(); // Restaura la configuración de la matriz de transformación

    if (millis() - figuras[i].tiempoCreacion > 500) {
      // Si han pasado más de 5000 milisegundos desde la creación de la i-ésima figura
      figuras.splice(i, 1); // Elimina la i-ésima figura del arreglo
    }
  }

  if (mostrarTexto) {
    // Si mostrarTexto es verdadero
    textFont(miFuente); // Establece la fuente de texto
    textSize(64); // Tamaño del texto
    textAlign(CENTER, CENTER); // Alineación del texto
    fill(255, 0, 0); // Color de relleno rojo
    text("Into The Unknown", 0, 0); // Muestra el texto en el centro del lienzo
  }
}
