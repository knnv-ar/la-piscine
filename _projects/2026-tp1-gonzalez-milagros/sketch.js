function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');
}

function draw() {

  // FONDO 𓏲 ๋࣭  ࣪ ˖✮⋆˙
  
  fill(20, 30);
  rect(0, 0, width, height);

  // ESTRELLAS 𓏲 ๋࣭  ࣪ ˖✮⋆˙

  randomSeed(50);

  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let brilloBase = random(50, 150);
    let tamaño = random(1, 4);
    let brillo = brilloBase + sin(frameCount * 0.08 + i) * 40;

    fill(brillo);
    ellipse(x, y, tamaño, tamaño);
  }

  // MARCO 𓏲 ๋࣭  ࣪ ˖✮⋆˙
  
  push();
  noFill();
  stroke(50);
  strokeWeight(2);
  rect(15, 15, width - 30, height - 30);
  pop();

  // GALAXIA 𓏲 ๋࣭  ࣪ ˖✮⋆˙
  
  translate(width / 2, height / 2);

  for (let i = 0; i < 1000; i++) {

    let radio = random(60, 230);
    let velocidad = map(radio, 60, 230, 0.015, 0.002);
    let anguloInicial = random(TWO_PI);
    let angulo = anguloInicial + frameCount * velocidad;
    let x = cos(angulo) * radio;
    let y = sin(angulo) * radio * 0.25;
    let brillo = random(120, 230);
    let tamaño = random(1, 5);

    fill(brillo);
    ellipse(x, y, tamaño, tamaño);
  }

}