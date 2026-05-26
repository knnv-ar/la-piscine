/*
Artes Multimediales 1 - Cátedra Lacabanne
Pot Florencia - 2020
*/


//declaración de variables
var busqueda;
var contador = 0
var i = 0
var j = 0
var k = 0
var data = '¿Qué te preocupa hoy?'
var flag = false
var logo = ['g', 'S', 'e', 'a', 'r', 'c', 'h']
var col = [
  [255, 62, 48, 100],
  [247, 181, 41, 100],
  [23, 156, 82, 100],
  [23, 107, 239, 100]
]

function preload() {
  //JSON con data de terminos más buscados desde el comienzo de la cuarentena -- src => https://trends.google.com.ar/trends/?geo=AR
  busqueda = loadJSON("busquedas.json");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('div-sketch');
  frameRate(12);
  background(255);
  fill(0)
  translate(-115, -50)
  scale(1.3)

  //logo (no arme un loop porque el kerning no me quedaba como queria)
  push();
  textSize(80);
  fill(23, 107, 239);
  text('B', 226, 200);
  fill(255, 62, 48);
  text('ú', 276, 200);
  fill(247, 181, 41);
  text('s', 319, 200);
  fill(23, 107, 239);
  text('q', 358, 200);
  fill(23, 156, 82);
  text('u', 399, 200);
  fill(247, 181, 41);
  text('e', 439, 200);
  fill(255, 62, 48);
  text('d', 481, 200);
  fill(23, 156, 82);
  text('a', 521, 200);
  pop();

  //search bar
  push();
  noFill();
  strokeWeight(2);
  rect(200, 240, 400, 40, 20);
  pop();

}

function draw() {
  tipeo(data, 0, 250, 298, 100);
  
  //llama a la función que trae todos los terminos de búsquedas juntos una vez que se haya presionado enter 15 veces
  if (contador > 10) {
    wordVomit();
    flag = true;
  }
  
  //texto que indica presionar enter parpadeante -- Desaparece una vez que se llama a la función con los terminos de busqueda
  if (flag == false) {
  j++
  if (j % 10 == 0) {
    fill(255)
  } else {
    fill(200)
  }
  text('Presione Enter', 300, 400)}
}


//trae las primeras 15 palabras del JSON, una por enter
function keyPressed() {
  contador++;
  i++;
  k++;
  if (keyCode === ENTER) {
    if (k == 4) {
      k = 0
    }
    fill(col[k]);
    textSize(busqueda[i].tendency * 2);
    text(busqueda[i].term, random(100, width - 200), random(50, height - 50));
  }
}


//función que trae los terminos de busqueda en el JSON con un tamaño de la tipo definido por el rate de crecimiento de los mismos, y con los colores variables
function wordVomit() {
  push();
  for (var i = 0, k = 0; i < 45; i++, k++) {
    if (k == 4) {
      k = 0
    }
    fill(col[k]);
    textSize(busqueda[i].tendency);
    text(busqueda[i].term, random(-200, width), random(0, height + 50));
  }
  pop();
}

//función que genera el tipeo del principio en la barra de búsqueda
function tipeo(sentence, n, x, y, velocidad) {
  if (n < (sentence.length)) {
    fill(0);
    textSize(30);
    text(sentence.substring(0, n + 1), x, y);
    n++;
    setTimeout(function() {
      tipeo(sentence, n, x, y, velocidad)
    }, velocidad);
  }
}
