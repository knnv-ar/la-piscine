let cantidadAnillos = 45;
let cantidadSegmentos = 18;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  angleMode(RADIANS);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let tiempo = frameCount * 0.01;
  let giro = tiempo * 0.15;

  for (let anillo = 0; anillo < cantidadAnillos; anillo++) {
    let profundidad = anillo / (cantidadAnillos - 1);
    let radioExterior = 12 + pow(profundidad, 1.8) * 258;
    let radioInterior = radioExterior - 9;
    let deformacion = sin(tiempo + anillo * 0.18) * 8;
    let giroAnillo = giro + sin(anillo * 0.44 + tiempo) * 0.4;

    for (let segmento = 0; segmento < cantidadSegmentos; segmento++) {
      let angulo1 = (segmento / cantidadSegmentos) * TWO_PI + giroAnillo;
      let angulo2 = ((segmento + 1) / cantidadSegmentos) * TWO_PI + giroAnillo;
      let onda1 = sin(angulo1 * 5 + tiempo * 2 + anillo * 0.2) * deformacion;
      let onda2 = sin(angulo2 * 5 + tiempo * 2 + anillo * 0.2) * deformacion;
      let r1Exterior = radioExterior + onda1;
      let r2Exterior = radioExterior + onda2;
      let r1Interior = radioInterior + onda1;
      let r2Interior = radioInterior + onda2;
      let alternancia = (segmento + anillo + floor(frameCount * 0.0005)) % 2;

      fill(alternancia === 0 ? 255 : 0);
      beginShape();
      vertex(cos(angulo1) * r1Exterior, sin(angulo1) * r1Exterior);
      vertex(cos(angulo2) * r2Exterior, sin(angulo2) * r2Exterior);
      vertex(cos(angulo2) * r2Interior, sin(angulo2) * r2Interior);
      vertex(cos(angulo1) * r1Interior, sin(angulo1) * r1Interior);
      endShape(CLOSE);
    }
  }

  fill(0);
  ellipse(0, 0, 14, 14);
}
