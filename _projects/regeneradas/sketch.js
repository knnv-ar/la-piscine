//AM1 cátedra Lacabanne
//Inspirado en las obras de Vera Molnár

let cantidad = 25;
let medidaInicial = 20;
let aumentoporcuadrado = 20;
let intensidadTemblor = 3;

function setup() {
 let canvas = createCanvas(512, 512);
 canvas.parent('div-sketch');
  background(255);  
  stroke(0);
  strokeWeight(1);
  noFill();
  frameRate(3);
}

function draw() {

  if (keyIsPressed && (key === 'b' || key === 'B')) {
    background(255);
  }

  let centroX = width / 2;
  let centroY = height / 2;

  for (let i = 0; i < cantidad; i++) {
    let medida = medidaInicial + i * aumentoporcuadrado;

    let desplazamientoX = random(-intensidadTemblor, intensidadTemblor);
    let desplazamientoY = random(-intensidadTemblor, intensidadTemblor);

    let x = centroX - medida / 2 + desplazamientoX;
    let y = centroY - medida / 2 + desplazamientoY;
    rect(x, y, medida, medida);
  }
}

