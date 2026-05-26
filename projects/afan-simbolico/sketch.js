let eq = []; //Puntos al rededor de los que se mueve el fuego
let cantEq = 3; // Cantidad de flamas

let nodo = []; //Nodos que constituyen el fuego
let nodoAnterior = []; //Posiciones anteriores de los nodos
let cant = 150; //Cantidad de nodos por flama

let img; //Imagen de fondo

let conexion = 0; //Mide la conexión del espectador con la obra

let w = 0; //Angulo de la imagen de fondo
let dw = 0; //Velocidad angular de la imagen de fondo

function preload() {
  img = loadImage("autorreflejo.jpg");
}//                                        ║
//                                         ║ 
function setup() {//              ═══════GIRA════════        ║
  colorMode(HSB);//                        ║                  ║
  let canvas = createCanvas(600, 600);//                ║                 ║
  canvas.parent('div-sketch');
  frameRate(60);//                                          //   
  inicializar();//                                         //
}//                                           //         ═//   
function draw() {//                          //      ══//
  fondo();//                                <<════//
  conexion = calcularConexion();//           \\ 
  fuego(conexion);//                          \\
}

//Función que determina el caos
function mousePressed() {
  noiseSeed(frameCount * mouseX * mouseY);
}

function fuego(conexion) {
  //Como se mueve el centro de equilibrio principal en función de la conexión
  eq[0].x =
    -conexion * 100 * cos(frameCount / (20 + 20 * (1 - conexion))) +
    conexion * 300 * noise(frameCount / (30 - 20 * conexion), 0) +
    width / 2 -
    150 * conexion;
  eq[0].y =
    conexion * 100 * sin(frameCount / (20 + 20 * (1 - conexion))) +
    conexion * 300 * noise(0, frameCount / (30 - 20 * conexion), 0) +
    height / 2 -
    150 * conexion;
  //Movimiento de los demas centros en función del centro principal (Como si fueran osciladores acoplados)
  for (n = 1; n < cantEq; n++) {
    let eqax = (eq[n - 1].x - eq[n].x) / eq[n].m - eq[n].vx * eq[n].v;
    let eqay = (eq[n - 1].y - eq[n].y) / eq[n].m - eq[n].vy * eq[n].v;

    eq[n].vx += eqax;
    eq[n].vy += eqay;

    eq[n].x += eq[n].vx;
    eq[n].y += eq[n].vy;

    eq[n].x += eq[n].vx;
    eq[n].y += eq[n].vy;
  }
  //Movimiento de los nodos (Como si fueran osciladores acoplados)
  for (n = 0; n < cantEq; n++) {
    for (i = 0; i < cant; i++) {
      nodoAnterior[n][i].x = nodo[n][i].x;
      nodoAnterior[n][i].y = nodo[n][i].y;
    }

    for (i = 0; i < cant; i++) {
      if (i == 100) {
      }

      let ax =
        (eq[n].x - nodo[n][i].x) / nodo[n][i].m - nodo[n][i].vx * nodo[n][i].v;
      let ay =
        (eq[n].y - nodo[n][i].y) / nodo[n][i].m - nodo[n][i].vy * nodo[n][i].v;

      nodo[n][i].vx += ax;
      nodo[n][i].vy += ay;

      nodo[n][i].x += nodo[n][i].vx;
      nodo[n][i].y += nodo[n][i].vy;

      nodo[n][i].x += nodo[n][i].vx;
      nodo[n][i].y += nodo[n][i].vy;

      crearFuego(n, i, 25 - 10 * n);
    }
  }
}

//Función que crea el fuego a partir de las posiciones de los nodos
function crearFuego(index1, index2, tono) {
  blendMode(SCREEN);
  strokeWeight(2);
  stroke(tono, 100, 100, 0.3);
  line(
    nodo[index1][index2].x,
    nodo[index1][index2].y,
    nodoAnterior[index1][index2].x,
    nodoAnterior[index1][index2].y
  );
}

function calcularConexion() {
  //Cuando el espectador gira, el lienzo rota y aumenta la conexión
  if (
    (mouseY < height / 2 && pmouseX - mouseX < 0 && mouseIsPressed) ||
    (mouseY > height / 2 && pmouseX - mouseX > 0 && mouseIsPressed)
  ) {
    conexion += 0.0005;
    dw += 0.00005;
  } else if (
    (mouseX < width / 2 && pmouseY - mouseY > 0 && mouseIsPressed) ||
    (mouseX > height / 2 && pmouseY - mouseY < 0 && mouseIsPressed)
  ) {
    conexion += 0.0005;
    dw += 0.00005;
  } else {
    conexion -= 0.01;
    dw -= 0.001;
  }
  dw = constrain(dw, 0, 0.05);
  w += dw;
  return constrain(conexion, 0, 1);
}

function fondo() {
  push(); //Para la imagen de fondo
  blendMode(BLEND);
  tint(255, 0.06);
  translate(300, 300);
  rotate(w);
  image(img, -450, -450);
  pop();
  background('black')
}

function inicializar() {
  for (n = 0; n < cantEq; n++) {
    eq[n] = {
      x: height / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      m: 60,
      v: 0.1,
    };
  }

  for (n = 0; n < cantEq; n++) {
    nodo[n] = [];
    nodoAnterior[n] = [];

    for (i = 0; i < cant; i++) {
      nodo[n][i] = {
        x: eq[n].x,
        y: eq[n].x,
        vx: 0,
        vy: 0,
        m: 18 + 0.14 * i,
        v: 0.03,
      };

      nodoAnterior[n][i] = {
        x: eq[n].x,
        y: eq[n].x,
      };
    }
  }
}