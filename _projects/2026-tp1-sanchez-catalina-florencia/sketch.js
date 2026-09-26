let angulo = 0;
let espaciado = 20;
let ventana = 20;
let modo = "automatico";
let t = 0;

function setup() {
  
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch');
  frameRate(30);
}

function keyPressed() {
  if (key === "a" || key === "A") {
    modo = "automatico";
  }
  if (key === "m" || key === "M") {
    modo = "manual";
  }
}

function draw() {
  background(220);
 
  rectMode(CENTER);
  noFill();
  stroke(0);

  // SI APRIETO LA M, SE CONTROLA MANUALMENTE
  if (modo === "manual") {
    espaciado = map(mouseX, 0, width, 2, 30, true);
    ventana = map(mouseY, 0, height, 3, 100, true);
  }
  if (modo === "automatico") {
    espaciado = map(noise(t), 0, 1, 1, 30);
    ventana = map(noise(t + 100), 0, 1, 1, 50);

    t += 0.03;
  }

  for (let tam = ventana; tam <= 512; tam += espaciado) {
    if (tam % 2 == 0) {
      strokeWeight(3);
    } else {
      strokeWeight(2);
    }
    rect(256, 256, tam, tam); //cuadrados
  }
  
  //PUNTILLADO 
  strokeWeight(2);
  noFill();

  let vibracion = map(sin(angulo), -1, 1, -5, 5); // oscila 5px para cada lado
  for (let y = -5; y <= 520; y += 3) {
    for (let x = -5; x <= 520; x += 2) {
     point(x + vibracion, y - vibracion); // puntos de la cuadricula
    }
  }
  
//VENTANA CENTRAL
  let color = map(sin(angulo), -1, 1, 0, 250); // VARIA EL COLOR 
  let tamCentro = map(sin(angulo), -1, 1, 18, 20); // VARIA EL TAMAÑO LEVEMENTE
  fill(color); 
  rect(256, 256, tamCentro, tamCentro);
  angulo += 0.08; // variacion de la vibracion
}
