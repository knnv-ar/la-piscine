let img, img2;
let tam = 100;
let ang = 0;
let velocidad = 0.001;
let centroX, centroY;
let mostrarElementos = true;

function preload() {
  img = loadImage("arte.jpg");
  img2 = loadImage("differánce.jpg");
}

function setup() {
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.parent('div-sketch');
  centroX = 0;
  centroY = 0;
}

function draw() {
  background(5);
  stroke(175);

  push();
  noStroke();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  sphere(tam);
  pop();

  translate(centroX, centroY);

  if (mostrarElementos) {
    for (let i = 0; i < 200; i++) {
      let radio = i * 5;
      let x = radio * sin(ang * i);
      let y = radio * cos(ang * (i - 10));
      texture(img);
      circle(x, y, 2);
    }

    for (let i = 0; i < 200; i++) {
      let radio = i * 5;
      let x = radio * cos(ang * i);
      let y = radio * sin(ang * i);
      ellipse(x, y, 3, 50);
    }
  }

  ang += velocidad;
}

function mousePressed() {
  if (dist(mouseX - width / 2, mouseY - height / 2, 0, 0) < tam / 2) {
    mostrarElementos = false;
    tam += 100;
    if (tam > 200) {
      texture(img2);
    }
    tam = min(tam, 400);
  }
}
