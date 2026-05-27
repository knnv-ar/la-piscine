/* TRABAJO PRÁCTICO Nº 2
   ARTES MULTIMEDIALES 1, CÁTEDRA - LACABANNE, TURNO MAÑANA. 
   NOMBRE DE LA OBRA: [k][E][s][e][S][T][o][B][a][b][Y][y]?
   AÑO: 2022.
   ALUMNO/A: Camila Merli.
*/



//SONIDOS E IMAGENES CARGADAS
function preload() {
  k = loadSound("sonidos/k.mp3");
  E = loadSound("sonidos/e.mp3");
  s = loadSound("sonidos/s-2.mp3");
  e = loadSound("sonidos/e-2.mp3");
  S = loadSound("sonidos/s.mp3");
  T = loadSound("sonidos/t.mp3");
  o = loadSound("sonidos/0.mp3");
  B = loadSound("sonidos/b.mp3");
  a = loadSound("sonidos/a.mp3");
  b = loadSound("sonidos/b-2.mp3");
  Y = loadSound("sonidos/y.mp3");
  y = loadSound("sonidos/y-2.mp3");
  fondo = loadImage("imagenes/1.webp");
  dos = loadImage("imagenes/2.webp");
  tres = loadImage("imagenes/3.webp");
  cuatro = loadImage("imagenes/4.webp");
  cinco = loadImage("imagenes/5.webp");
  seis = loadImage("imagenes/6.webp");
  siete = loadImage("imagenes/7.webp");
  ocho = loadImage("imagenes/8.webp");
  nueve = loadImage("imagenes/9.webp");
  diez = loadImage("imagenes/10.webp");
  once = loadImage("imagenes/11.webp");
  doce = loadImage("imagenes/12.webp");
}

//FONDO CON DIBUJO ORIGINAL
function setup() {
  let canvas = createCanvas(1072, 786);
  canvas.parent('div-sketch');
  image(fondo, 0, 0);
  
}

//ESPECIFICACION DE TECLA PARA CADA PAR DE SONIDO E IMAGEN
function keyPressed() {
  if (key == "k") {
    k.play();
    image(
      dos,
      random(windowWidth),
      random(windowHeight),
      dos.width / 1.5,
      dos.height / 1.5
    );
  }
  if (key == "0") {
    k.play();
    image(
      dos,
      random(windowWidth),
      random(windowHeight),
      dos.width / 1.5,
      dos.height / 1.5
    );
  }
  if (key == "E") {
    E.play();
    image(
      tres,
      random(windowWidth),
      random(windowHeight),
      tres.width / 1.5,
      tres.height / 1.5
    );
  }
  if (key == "1") {
    E.play();
    image(
      tres,
      random(windowWidth),
      random(windowHeight),
      tres.width / 1.5,
      tres.height / 1.5
    );
  }
  if (key == "s") {
    s.play();
    image(
      cuatro,
      random(windowWidth),
      random(windowHeight),
      cuatro.width / 1.5,
      cuatro.height / 1.5
    );
  }
  if (key == "2") {
    s.play();
    image(
      cuatro,
      random(windowWidth),
      random(windowHeight),
      cuatro.width / 1.5,
      cuatro.height / 1.5
    );
  }
  if (key == "e") {
    e.play();
    image(
      cinco,
      random(windowWidth),
      random(windowHeight),
      cinco.width / 1.5,
      cinco.height / 1.5
    );
  }
  if (key == "3") {
    e.play();
    image(
      cinco,
      random(windowWidth),
      random(windowHeight),
      cinco.width / 1.5,
      cinco.height / 1.5
    );
  }
  if (key == "S") {
    S.play();
    image(
      seis,
      random(windowWidth),
      random(windowHeight),
      seis.width / 2,
      seis.height / 1.5
    );
  }
  if (key == "4") {
    S.play();
    image(
      seis,
      random(windowWidth),
      random(windowHeight),
      seis.width / 1.5,
      seis.height / 1.5
    );
  }
  if (key == "T") {
    T.play();
    image(
      siete,
      random(windowWidth),
      random(windowHeight),
      siete.width / 1.5,
      siete.height / 1.5
    );
  }
  if (key == "5") {
    T.play();
    image(
      siete,
      random(windowWidth),
      random(windowHeight),
      siete.width / 1.5,
      siete.height / 1.5
    );
  }
  if (key == "o") {
    o.play();
    image(
      ocho,
      random(windowWidth),
      random(windowHeight),
      ocho.width / 1.5,
      ocho.height / 1.5
    );
  }
  if (key == "6") {
    o.play();
    image(
      ocho,
      random(windowWidth),
      random(windowHeight),
      ocho.width / 1.5,
      ocho.height / 1.5
    );
  }
  if (key == "B") {
    B.play();
    image(
      nueve,
      random(windowWidth),
      random(windowHeight),
      nueve.width / 1.5,
      nueve.height / 1.5
    );
  }
  if (key == "7") {
    B.play();
    image(
      nueve,
      random(windowWidth),
      random(windowHeight),
      nueve.width / 1.5,
      nueve.height / 1.5
    );
  }
  if (key == "a") {
    a.play();
    image(
      diez,
      random(windowWidth),
      random(windowHeight),
      diez.width / 1.5,
      diez.height / 1.5
    );
  }
  if (key == "8") {
    a.play();
    image(
      diez,
      random(windowWidth),
      random(windowHeight),
      diez.width / 1.5,
      diez.height / 1.5
    );
  }
  if (key == "b") {
    b.play();
    image(
      once,
      random(windowWidth),
      random(windowHeight),
      once.width / 1.5,
      once.height / 1.5
    );
  }
  if (key == "9") {
    b.play();
    image(
      once,
      random(windowWidth),
      random(windowHeight),
      once.width / 1.5,
      once.height / 1.5
    );
  }
  if (key == "Y") {
    Y.play();
    image(
      doce,
      random(windowWidth),
      random(windowHeight),
      doce.width / 1.5,
      doce.height / 1.5
    );
  }
  if (key == "+") {
    Y.play();
    image(
      doce,
      random(windowWidth),
      random(windowHeight),
      doce.width / 1.5,
      doce.height / 1.5
    );
  }
  if (key == "y") {
    y.play();
    image(fondo, 180, 140, fondo.width / 1.5, fondo.height / 1.5);
  }
  if (key == "-") {
    y.play();
    image(fondo, 180, 140, fondo.width / 1.5, fondo.height / 1.5);
  }
  if (key == "?") {
    image(fondo, 0, 0);
  }
}



