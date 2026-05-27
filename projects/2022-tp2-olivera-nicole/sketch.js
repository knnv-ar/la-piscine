// Título: ¿De qué y quién le servimos?
// 2025
// Olivera Nicole

let citas = [
  "Algo le está pasando a mi generación.",
  'Es la época donde decir "me quiero matar" es normal.',
  "Desde 2010 a hoy, la depresión en adolescentes mujeres aumenta un 145% y en varones 161%.",
  "Tasas de suicidio en los adolescentes más jóvenes: en varones aumenta el 91%, en mujeres aumenta el 167% desde 2010.",
  "Visitas a los servicios de urgencia por autolesiones: en mujeres aumenta 188%, en varones aumenta el 50% desde 2010. ",
  "¿Qué pasó en 2010?",
  "Salió el primer iPhone con cámara frontal.",
  'Apareció el "like" de Facebook.',
  "En 2010, arranca a crecer nuestra propia vida en la otra vida: las redes sociales.",
  "El teléfono pasa a ser el celular, y nosotros pasamos a ser yo y el otro yo.",
  "Siento que siempre me puedo estar perdiendo algo.",
  "Se atrofia la presencia.",
  "Cuando usamos redes sociales no solo miramos una pantalla, estamos activando una vía de recompensa de nuestro cerebro.",
  "Cada notificación, cada video sugerido, dispara liberaciones de dopamina, el neurotransmisor del placer.",
  "Esta estimulación constante provoca cambios.",
  "Una reducción de conectividad en el área que regula la atención, el autocontrol y la toma de decisiones.",
  "¿Por qué miramos tanto el celular?",
  "ESTÁ DISEÑADO ASÍ",
  "No toleramos el aburrimiento.",
  "En 2010 sale el iPhone 4 con una cámara frontal.",
  'Facebook inventa el "like".',
  "Ahora las cosas están pasando. Tanto que en realidad, constantemente ya pasaron.",
  "La ansiedad es la protagonista de nuestra vida y nuestro tiempo.",
  "La ansiedad muestra la necesidad de actualización, de actualidad, no de PRESENTE.",
  "Consumimos digitalidad y consumimos su patrón temporal.",
  "El presente fué sustituido por la actualidad.",
  "No se trata de tener una posición anti-tecnología.",
  "Se trata de entender la relación de poder en la que se inscriben esas tecnologías.",
  "¿De qué y quién le servimos?",
];

let citasObjeto = []; // acá vamos a guardar los objetos con sus datos

function setup() {
  let canvas = createCanvas(300, 500);
  canvas.parent('div-sketch');
  textSize(20);
  textFont("Times New Roman");
  fill(255);
}

function draw() {
  background("#1B35F7");
  // recorrer y dibujar cada texto
  for (let i = 0; i < citasObjeto.length; i++) {
    let texto = citasObjeto[i];
    text(texto.contenido, texto.posicionX, texto.posicionY, 220, 200);
    texto.posicionY -= texto.velocidad;
  }

  // agregar citas cada cierto tiempo
  if (frameCount % 180 === 0 && citas.length > 0) {
  agregarTexto(citas.shift()); // shift elimina la primera posición
  }
}

// función para crear objeto-texto
function agregarTexto(textoRecibido) {
  citasObjeto.push({
    contenido: textoRecibido,
    posicionX: 20,
    posicionY: height + 10, // empieza afuera, abajo de todo
    velocidad: 1.0,
  });
}
