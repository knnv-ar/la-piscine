//Créditos; adjunto agradecidamente las obras que me permitieron formar la mía.
//Música de fondo: Synthwave Goose - Blade Runner 2049
//“Pintura Arquitectónica” de Liubov Popova (1916)
//“Flores” de Natalia Gonchorov (1912)

//Declaración de variables
var luces = false;
var fondo;
var fondoDistopico;
var textura;
var texturaDistopica;
var musica;
var voz;
var glitch;
var mouse = 100;
var fuente1;
var fuente2;

function preload() {
  //Ingreso la imagen en la variable textura
  textura = loadImage("imagenes/textura.png");
  texturaDistopica = loadImage("imagenes/textura-distopica.png");
  //Ingreso el video en la variable, también le digo que el video esté en   constante loop.- (una vez que termine, que se reinicie).
  fondo = createVideo("videos/fondo.mp4");
  fondo.loop();
  fondo.hide();
  //El otro video
  fondoDistopico = createVideo("videos/fondo-distopico.mp4");
  fondoDistopico.loop();
  fondoDistopico.hide();
  //cargo la música
  musica = loadSound("sonidos/musica.mp3");
  voz = loadSound("sonidos/interestelar.mp3");
  //cargo las fuentes
  fuente1 = loadFont("fuentes/fuente1.otf");
  fuente2 = loadFont("fuentes/fuente2.otf");
}

//Creo el canvas
function setup() {
  let canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('div-sketch');
  musica.loop();
  musica.setVolume(0.1);
  voz.loop();
  voz.setVolume(0.1);
}

function draw() {
  //declaro variables y les asigno el valor
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  //Si el mouse está presionado entonces que muestre la parte destructiva o distópica
  if (mouseIsPressed) {
    //habilito las luces
    lights();
    //asigno las texturas para los cubos
    texture(texturaDistopica);
    image(fondoDistopico, -700, -300);
    noStroke();

    //Primer cubo
    push();
    translate(-100, -90, 70);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(90, 90);
    pop();

    //Segundo cubo
    push();
    translate(100, -90, 70);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(90, 90);
    pop();

    //Tercer cubo
    push();
    translate(-100, 90, 70);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(90, 90);
    pop();

    //Cuarto cubo
    push();
    translate(100, 90, 70);
    rotateX(frameCount * 0.012);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(90, 90);
    pop();

    //únicamente la esfera va a tener su luz por lo que la asigno solo a esta forma y también le doy un movimiento intermitente (aleatorio)
    push();
    pointLight(255, 139, 61, locX, locY, mouse);
    fill(255, 248, 231);
    translate(0, 0, random(-20, 20));
    sphere(40);
    pop();

    //genero el  texto Katastrofí (en Griego: Catástrofe)
    push();
    textFont(fuente2);
    textSize(width / 22);
    textAlign(CENTER, CENTER);
    text("katastrofí", 0, -240);
    pop();

    //En caso de que no se clickee, se mostrará la parte pacífica o utópica
  } else {
    //genero una luz de ambiente como para dar un entorno más oscuro y asigno la textura a la forma
    push();
    ambientLight(25);
    texture(textura);
    image(fondo, -700, -500);
    translate(0, 0, 0);
    //Le doy una rotación sobre todos los ejes y que vaya rotando sobre sí mismo
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    //Asigno una luz direccional de color blanca
    directionalLight(255, 255, 255, locY, locX, 0);
    //Luego asigno una luz <en forma de spot> para que se desplace de forma aleatoria y genere ese efecto de estrellas sobre el cubo
    spotLight(
      255,
      255,
      255,
      random(-100, 100),
      random(-100, 100),
      100,
      0,
      10,
      -80
    );
    //genero la forma, Único cubo
    box(150, 150, 150);
    pop();

    //genero el texto proélefsi (En griego: Origen)
    push();
    fill(194,194,194);
    textFont(fuente1);
    textSize(width / 15);
    textAlign(CENTER, CENTER);
    text("proélefsi", 0, 240);
    pop();
  }
}
//al hacer click derecho no se despliega el menú
document.oncontextmenu = function () {
  return false;
};
