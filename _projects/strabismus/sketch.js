//Variables globales para dibujar fondo
let wCirculito = 2;
let hCirculito = 2;
let margen = 50;
let espaciado = 3;
let velocidad = 0.02; //Determina que tan rapido es el pestañeo
let clickeado = false; //Para que se reinicie el click al cambiar velocidad
//Variables de las lagrimas y su tamaño y animacion
let lagrimaActiva1 = false;
let lagrimaY1 = 200;
let lagrimaActiva2 = false;
let lagrimaY2 = 200;
let lagrimaActiva3 = false;
let lagrimaY3 = 200;
let lagrimaActiva4 = false;
let lagrimaY4 = 200;
//Cambio fondo
let colorFondo = 0;
let colorGrilla = 255;
let colorLagrima = 80;

function setup() {
  createCanvas(512, 512);
  noStroke();
  ellipseMode(CORNER);
  background(0);
  frameRate(60);
}

function draw() {
  background(colorFondo);

  // Clicks aumentan o disminuyen velocidad de pestañeo
  if (mouseIsPressed && !clickeado) {
    if (mouseButton === LEFT) {
      velocidad += 0.02;
    } else if (mouseButton === RIGHT) {
      velocidad = max(0.02, velocidad - 0.02);
    }
    clickeado = true;
  }
  if (!mouseIsPressed) {
    clickeado = false;
  }

  // Activar cada lágrima según la velocidad
  lagrimaActiva1 = velocidad >= 0.2;
  lagrimaActiva2 = velocidad >= 0.3;
  lagrimaActiva3 = velocidad >= 0.4;
  lagrimaActiva4 = velocidad >= 0.5;
  // Movimiento individual de cada lágrima
  if (lagrimaActiva1) {
    lagrimaY1 += 5; //Velocidad de caida 
    if (lagrimaY1 > height - margen) {
      lagrimaY1 = 150 + margen;
    }
  }
  if (lagrimaActiva2) {
    lagrimaY2 += 5;
    if (lagrimaY2 > height - margen) {
      lagrimaY2 = 150 + margen;
    }
  }
  if (lagrimaActiva3) {
    lagrimaY3 += 8;
    if (lagrimaY3 > height - margen) {
      lagrimaY3 = 150 + margen;
    }
  }
  if (lagrimaActiva4){
    lagrimaY4 += 8;
    if (lagrimaY4 > height - margen){
      lagrimaY4 = 150 + margen;
    }
  }
  if (velocidad < 0.2) {
    !lagrimaActiva1, !lagrimaActiva2, !lagrimaActiva3, !lagrimaActiva4;
  }

  // Parámetros de los ojos
  let ojoX = width / 3;
  let ojoY = height / 3;
  let ojo2X = width * 2 / 3;
  let ojo2Y = height / 3;
  let ojoAlto = map(sin(frameCount * velocidad), -1, 1, 5, 40); //Usa seno para hacer movimiento pestañeo, el map transforma los limites de -1 a 1 a 5 y 40 que es abierto del todo y semi cerrado
  let ojoAncho = 80;

  // Forma de la lágrima (forma de elipse, misma ojos)
  let anchoL = 6;
  let altoL = 20;

  for (let y = margen; y < height - margen; y += hCirculito + espaciado) {
    for (let x = margen; x < width - margen; x += wCirculito + espaciado) {
      let cx = x + wCirculito / 2;
      let cy = y + hCirculito / 2;

      // Ojo 1
      let dx1 = cx - ojoX;
      let dy1 = cy - ojoY;
      let dentroDelOjo1 = (dx1 * dx1) / (ojoAncho * ojoAncho / 2) + (dy1 * dy1) / (ojoAlto * ojoAlto / 2) <= 1; //Se usa la misma formula de elipse para la lagrima

      // Ojo 2
      let dx2 = cx - ojo2X;
      let dy2 = cy - ojo2Y;
      let dentroDelOjo2 = (dx2 * dx2) / (ojoAncho * ojoAncho / 2) + (dy2 * dy2) / (ojoAlto * ojoAlto / 2) <= 1;

      // Lagrima 1
      let dxL1 = cx - ojoX;
      let dyL1 = cy - lagrimaY1;
      let dentroDeLagrima1 = (dxL1 * dxL1) / (anchoL * anchoL) + (dyL1 * dyL1) / (altoL * altoL) < 1;

      // Lagrima 2
      let dxL2 = cx - ojo2X;
      let dyL2 = cy - lagrimaY2;
      let dentroDeLagrima2 = (dxL2 * dxL2) / (anchoL * anchoL) + (dyL2 * dyL2) / (altoL * altoL) < 1;

      // Lagrima 3 
      let dxL3 = cx - ojoX;
      let dyL3 = cy - lagrimaY3;
      let dentroDeLagrima3 = (dxL3 * dxL3) / (anchoL * anchoL) + (dyL3 * dyL3) / (altoL * altoL) < 1;
      
      // Lagrima 4
      let dxL4 = cx - ojo2X;
      let dyL4 = cy - lagrimaY4;
      let dentroDeLagrima4 = (dxL4 * dxL4) / (anchoL * anchoL) + (dyL4 * dyL4) / (altoL * altoL) < 1;
      
      // La variable determina si el punto que esta dibujando en la grilla esta dentro del camino de una lagrima
      let lagrimaSobrePunto = (
        (lagrimaActiva1 && dentroDeLagrima1) ||
        (lagrimaActiva2 && dentroDeLagrima2) ||
        (lagrimaActiva3 && dentroDeLagrima3) ||
        (lagrimaActiva4 && dentroDeLagrima4)
      );

      if (!dentroDelOjo1 && !dentroDelOjo2) {
        fill(lagrimaSobrePunto ? colorLagrima : colorGrilla);
        ellipse(x, y, wCirculito, hCirculito);
      }
    }
  }
  //Cambia los colores segun posición mouse
  let cambioColor = cos(map(mouseY, 0, height, 0, PI)); // de 1 a -1
  cambioColor = map(cambioColor, -1, 1, 0, 1); // normalizar a 0–1
  colorFondo = 255 * (1 - cambioColor);
  colorGrilla = 255 * cambioColor;
  colorLagrima = 80 + (240 - 80) * (1 - cambioColor);
  }

document.oncontextmenu = function() {
  return false;
};