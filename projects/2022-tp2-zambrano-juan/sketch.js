let img;
let audio;
let tiempo = 0;
let nivelSaturacion = 0;

function preload() {
  img = loadImage("imagenes/tired.webp"); // Imagen linda y fachera 🫡
  audio = loadSound("audio/saturacion.mp3") // Pitido infernal
  
}

function setup() {
  
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
  noFill();
  audio.loop()
}

function draw() {
  background(0); // fondo base
  image(img, 0, 0, width, height);

  // Con esto avanza el tiempo ⌚
  tiempo++;

  // Controla la saturación con un valor entre 0 y 1
  nivelSaturacion = map(tiempo, 0, 600, 0, 1, true); // Tomo el valor de tiempo, que empieza en 0 y va creciendo hasta 600, y lo convierto en un número que va de 0 a 1, manteniendo la proporción. Si el tiempo supera 600, lo dejo clavado en 1. 🫨

  // con esto aumento la cantidad de lineas progresivamente 🙃
  let cantidadLineas = int(nivelSaturacion * 2000); // Uso int para que redondeé los numeros decimales del map en enteros 😉

  strokeWeight(random(0.5, 2));

  // Aquí dibujo las lineas y se alterna la saturación 😋
  for (let i = 0; i < cantidadLineas; i++) {
    stroke(
      random(30, 150)
    );
    line(random(width), random(height), random(width), random(height));
  }

  // Cuando se satura por completo esto da un toque mas caótico 🥴
  if (nivelSaturacion >= 1) {
    for (let i = 0; i < 200; i++) {
      stroke(random(50, 200));
      line(random(width), random(height), random(width), random(height));
      ellipse(random(width), random(height), random(5, 20));
    }

    push();
    tint(255, random(50, 150));
    image(img, random(-5, 5), random(-5, 5), width, height);
    pop();
  }
}
