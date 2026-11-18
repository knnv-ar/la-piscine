function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('div-sketch');
  background(0);
  estrellas(250, 10, 0, 255);
}

function estrellas(cantidadEstre, tamanio, brilloMenor, brilloMayor) {
  for (let i = 0; i < cantidadEstre; i++) {
    stroke(random(brilloMenor, brilloMayor));
    strokeWeight(random(tamanio));
    point(random(0, 511), random(0, 511));
  } 
}
