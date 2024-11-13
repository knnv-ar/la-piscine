//La niña que fui
// Al apretar el boton(o) se cambia el canal de recuerdos y las preguntas retoricas
let videoWidth = 240;
let videoHeight = 400;
let videos;
let video;
let img;
let videoContador = 0; // Índice del video actual que está pasando en pantalla
let textoContador = 0; // Índice del texto actual que se muestra

let textoActual = ""; 
let textos = [
  "¿Qué momento de tu infancia guardas como uno de los más felices?",
  "Si pudieras regresar a un día de tu infancia, ¿a cuál escogerías?",
  "Si pudieras abrazar tu yo de niño, ¿qué le dirías?"
];

function preload() {
  img = loadImage('fondo/pantalla.png');
  
  // Inicializo las rutas de los videos
  videos = [
    'video/trillis.mp4',
    'video/caprichosa.mp4',
    'video/tele.mp4'
  ];
}

function setup() {
  
  let canvas = createCanvas(500, 600);
  canvas.parent('div-sketch');
  
  // Creo el video inicial
  video = createVideo(videos[videoContador], videoLoaded);  
  video.size(videoWidth, videoHeight); 
  video.hide(); // Ocultar el video en el DOM
  video.loop(); // Iniciar el primer video
  
  
}

// Función que se llama cuando el video está listo para reproducirse
function videoLoaded() {
  video.loop(); 
}

function draw() {
  let videoX = 110;
  let videoY = 40;

 print(video.width)
 print(video.height)
  image(video, videoX, videoY, videoWidth, videoHeight);

  // Dibujo la imagen de fondo
  image(img, 0, 0, width, height);

  // Muestro el texto actual en la pantalla
  push();
textSize(15)
fill(255);
textAlign(CENTER, CENTER);
text(textoActual, width / 2, height - 50); 
pop();

}
function mousePressed(){

 if(mouseX>375 && mouseX<400 && mouseY>155 && mouseY <180 ){
  cambioVideo();

 }

}

// Función para cambiar el video y el texto
function cambioVideo() {
  // Avanzar al siguiente video, y volver al primero cuando lleguemos al final
  videoContador = (videoContador + 1) % videos.length;  
  
  // Detener y eliminar el video actual
  video.stop();
  video.remove();
  
  // Creo un nuevo video con la nueva fuente
  video = createVideo(videos[videoContador], videoLoaded); //  se llama a videoLoaded cuando esté listo
  video.size(videoWidth, videoHeight); 
  video.hide(); 

  // Cambio l texto al siguiente en la lista
  textoActual = textos[textoContador];
  
  // Avanza al siguiente texto en el array, y volver al primero cuando se llegue al final
  textoContador = (textoContador + 1) % textos.length;
}
