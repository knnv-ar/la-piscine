//VELOCIDAD Y FRAME
let Dibujo = 0; //este deberia ser el frame, le puse "Dibujo" para entender yo
let vx = 5;
let vy = 5;

//DISTANCIA EN LA QUE HACEN LA ACCION
let DX = 236; // EL DE X
let DY = 236; // EL DE Y

function setup() {
  createCanvas(512, 512);
}

function draw() {
  noStroke();
  fill(20, 5); //LA ESTELA
  rect(0, 0, width, height); //CUBRE EL LIENZO

  stroke(200);
  strokeWeight(5);

  //calculo con seno

  let x = DX * sin(vx * Dibujo);
  let y = DY * sin(vy * Dibujo);

  translate(width / 2, height / 2); //lo mueve al centro de la pantalla
  point(x, y);

  Dibujo += 0.009; //para que vaya sumando cada frame
}

function keyPressed() {
  if (key === " ") {
    // Limpia el fondo para que dibuje otra cosa
    background(0);
    Dibujo = 0;

    //frecuencia de la curvva
    vx = int(random(1, 5));
    vy = int(random(1, 5));
  }
}

//Para acordarme que es del 1 al 5 porque comienza del 1 y termina en el 4.999... y no en el 5 literal. Porque random es min = mayor o igual. Y max = menor que.
//el seno depende de "Dibujo" devuelve valor entre -1 y 1. Cuando "Dibujo" crece el seno va cambiando
