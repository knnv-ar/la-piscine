// TP N°2 Victoria González - UNA Artes Multimediales  
// ¿Qué sucedería si liberaras tu creatividad?


let img;
let cols = 20;
let rows = 25;
let puntos = [];
let originales = [];

let sonidoMagico;
let sonidoWow;

async function setup() {
let canvas = createCanvas(400, 500, WEBGL);
canvas.parent('div-sketch');

  img = await loadImage('img/mar.jpg');

  if (typeof loadSound === 'function') {
    sonidoMagico = await loadSound('musica/sonidomagico.mp3');
    sonidoWow = await loadSound('musica/sonidowow.mp3');
  }

  noStroke();
  iniciarGrilla();
}

//Creamos la red a desformar
function iniciarGrilla() {
  puntos = [];
  originales = [];

  //Recorremos las filas y columnas y registramos los puntos
  for (let y = 0; y <= rows; y++) {
    puntos[y] = [];
    originales[y] = [];

    //Pasamos de la grilla a la escala de los pixeles
    for (let x = 0; x <= cols; x++) {
      let px = map(x, 0, cols, 0, width);
      let py = map(y, 0, rows, 0, height);

      //Creamos el objeto y guardamos en originales el punto de inicio
      puntos[y][x] = createVector(px, py);  
      originales[y][x] = createVector(px, py);
    }
  }
}

function draw() {
  push();

  //Corremos el punto de origen de webgl
  translate(-width / 2, -height / 2);

  //Dibujamos la imagen original fija de fondo
  image(img, 0, 0, width, height);


  //Dibujamos encima la imagen para deformarla
  texture(img);
  textureMode(NORMAL);
  noStroke();

  //Recorremos la fila hacia abajo
  
  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);       //formamos las superficies con triangulos
    for (let x = 0; x <= cols; x++) {
      let p1 = puntos[y][x];
      let p2 = puntos[y + 1][x];      //vertices donde dibujaremos (cambian de lugar)

      let u = x / cols;
      let v1 = y / rows;
      let v2 = (y + 1) / rows;

      //Ubicamos estos puntos en la imagen
      vertex(p1.x, p1.y, u, v1);
      vertex(p2.x, p2.y, u, v2);
    }
    endShape();
  }

  // Destellitos .+*..+*...+
  for (let i = 0; i < 12; i++) {
    let x = random(width);
    let y = random(height);
    let r = sin(frameCount * 0.2 + i) * 10 + 10;

    stroke(random(255), random(255), random(255), 220);
    line(x - r, y, x + r, y);
    line(x, y - r, x, y + r);
  }

  pop();
}

function mousePressed() {
  if (sonidoWow && typeof sonidoWow.play === 'function') {
    sonidoWow.play();
  }
}

//Al mover el cursor manteniendo el click:

function mouseDragged() {
  if (sonidoMagico && !sonidoMagico.isPlaying()) {
    sonidoMagico.play();
  }

  //Registro del cursor
  let radio = 70;
  let movX = mouseX - pmouseX;
  let movY = mouseY - pmouseY;

  //Recorremos la grilla
  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= cols; x++) {

      //Tomamos el punto actual y calculamos su distancia con el cursor
      let p = puntos[y][x];           
      let d = dist(mouseX, mouseY, p.x, p.y);   

      //Si el punto esta dentro de los 70px lo deplaza en xy
      if (d < radio) {
        let influencia = map(d, 0, radio, 0.5, 0);
        p.x += movX * influencia;
        p.y += movY * influencia;
      }
    }
  }
}

