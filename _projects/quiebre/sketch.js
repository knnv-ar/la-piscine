//Vera Molnar(des lignes) y Frieder Nake(Homenaje a Paul Klee)


let tiempo = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(1);
  stroke(0);
  strokeWeight(1);
  frameRate(30);
}

function draw() {
  let cantidad = 7; // Lineas

  for (let i = 0; i < cantidad; i++) {
    let angulo = random(TWO_PI);

    let x1 = width / 2;
    let y1 = height / 2;

    let distancia = tiempo * 0.5;
    let x2 = width / 2 + cos(angulo) * distancia;
    let y2 = height / 2 + sin(angulo) * distancia;

    stroke(random(250));
    line(x1, y1, x2, y2);
  }

  tiempo++;

  //if (tiempo > width) {
  //noLoop();
  //}
}