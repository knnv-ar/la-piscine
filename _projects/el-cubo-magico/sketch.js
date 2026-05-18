// apretando click derecho y usando la persepctiva de la habitacion hacia el cuadro que esta en la misma direccion veras lo que hay en el
// apretando click izq y usando la persepctiva de la habitacion hacia el cuadro que esta en la misma direccion veras lo que hay en el

let colors;
//escenario 1
let paredes1;
var paredes;
var pisos;
var fondo;
let playingMusic = false
let playmusic= false

var i;
let luzX = 0;
let luzY = 0;
function preload() {
   paredes = loadImage("cuadro1.jpg");
  paredes1 = loadImage("cuadro2.jpg");
  pisos = loadImage("piso.webp");
  fondo = loadImage("fondo.jpg");
  img1 = loadImage("psicodelico1.png");
  cuadro = loadImage("marconeon.png");
  img2 = loadImage("psicodelico2.jpeg");
 musica = loadSound("musica1.mp3");
musica2 =loadSound("musica2.mp3");

}

function setup() {
  let canvas = createCanvas(1270, 720, WEBGL);
   canvas.parent('div-sketch');
  noCursor();
  frameRate(60);
  colors = [color(255, 255, 0), color(0, 0, 0)];
}

function draw() {
  if (mouseIsPressed === true){
    
    if (mouseButton === LEFT) {
      if(!playingMusic){
      playingMusic = true
      musica.play();
    }
      push();
      ambientLight(255, 255, 183);

      pointLight(200, 225, 250, luzX, luzY, 600);
      translate(0, 0, cos(frameCount * 0.12) * 1000 - 800);

      texture(img2);
      rotateX(frameCount * 0.05);
      rotateY(frameCount * 0.05);
      rotateZ(frameCount * 0.1);
      box(400, 400); //Parámetros: ancho y alto

      pop();
    } 
    if (mouseButton === RIGHT) {
      if(!playmusic){
      playmusic = true
      musica2.play();
    }
     
 
      ambientLight(255, 255, 183);
      pointLight(200, 225, 250, luzX, luzY, 600);
      texture(img1);
      noStroke();
      translate(0, 0, cos(frameCount * 0.12) * 1000 - 700);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      sphere(230);
      image(cuadro, -300, -300, 600, 600);
    }
  }
  else
  {
   
    musica.stop(); 
    musica2.stop();
    playingMusic = false
    playmusic = false
    //techo
    background(85, 100, 235);

    noStroke();

    //fondo

    push();

    texture(fondo);

    translate(0, 0, -490);

    plane(500, 700);

    pop();

    //piso

    push();

    texture(pisos);

    translate(0, 500, -490);

    rotateX(1);

    plane(1280, 720);

    pop();

    //pared

    push();

    texture(paredes1);

    translate(350, 0, -140);

    rotateY(1.85);

    plane(800, 720);

    pop();

    //pared

    push();

    texture(paredes);

    translate(-350, 0, -140);

    rotateY(-1.85);

    plane(800, 710);

    pop();

  }
  document.oncontextmenu = function () {
    return false;
  };
}
