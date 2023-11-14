function setup() {
  frameRate(5);
  //actualización del canvas, 5 fps por segundos.

  let canvas = createCanvas(512,512);
  canvas.parent('div-sketch');

  rectMode(CENTER);
  //rects centrados en canvas.

  //noLoop(); //se puede sacar para ver como quedaria la imagen fija.
}

function draw() {
  background(240);

  for (
    let ycoordenada = 50;
    ycoordenada < 460;
    ycoordenada = ycoordenada + 40 //posicion vertical de figuras, identifica hasta donde llegan las columnas en el margen inferior.
  ) {
    for (
      let xcoordenada = 50;
      xcoordenada < 460;
      xcoordenada = xcoordenada + 100 //posicion horizontal de figuras, identifica hasta donde llegan las filas en el margen derecho.
    ) {
      for (let wAncho = 40; wAncho > 5; wAncho = wAncho - radio) {
        rect(xcoordenada, ycoordenada, wAncho, wAncho);
        //determina medidas de rectangulos (valor 40 determina el tamaño,valor 5 determina rect centra)
        radio = random(5);
        //variable para asignar valor a radio de recs internos. un numero aleatorio entre 0 y 5 a cada llamada del canvas.
      }
    }
  }
}
