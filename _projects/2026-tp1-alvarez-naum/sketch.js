
let cx, cy;              
let numVertices = 90;   
let baseRadius = 150;    // radio de la figura cuando sólida
let cicloDuracion = 500; // sólida -> etérea
let t = 0;              
 
function setup() {
   
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  colorMode(RGB, 255);
  cx = width / 2;
  cy = height / 2;
  frameRate(60);
  function setup() {
  let canvas = createCanvas(512, 512); 
  canvas.parent('div-sketch'); 
}


}
 
function draw() {
 
  // --- velocidad del ciclo: al mantener presionado el mouse se
  // "interviene" la obra y su disolución se acelera ---
  let velocidad;
  if (mouseIsPressed) {
    velocidad = 4;
  } else {
    velocidad = 1;
  }
  t = t + velocidad;
 
  let onda = -cos((t / cicloDuracion) * radians(360));
  let progreso = (onda + 1) / 2;

  let estelaAlpha = 255 - 70 * progreso;
  background(255, estelaAlpha);
 
  push();
  translate(cx, cy);
  rotate(frameCount * 0.0015);        // la figura nunca está del todo quieta
  let pulso = 1 + sin(frameCount * 0.01) * 0.02;
  scale(pulso);                        // leve respiración de escala
 

  if (progreso > 0.15) {
    noFill();
    stroke(0, 60 * progreso);
    strokeWeight(0.6);
 
    for (let i = 0; i < numVertices; i += 6) {
      let angulo = (i / numVertices) * radians(360);
      let radioFinal = baseRadius + 60 + random(0, 120) * progreso;
 
      let x1 = 0;
      let y1 = 0;
      let x2 = cos(angulo - 0.3) * radioFinal * 0.4;
      let y2 = sin(angulo - 0.3) * radioFinal * 0.4;
      let x3 = cos(angulo + 0.3) * radioFinal * 0.7;
      let y3 = sin(angulo + 0.3) * radioFinal * 0.7;
      let x4 = cos(angulo) * radioFinal;
      let y4 = sin(angulo) * radioFinal;
 
      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
  }
 

  let alphaRelleno = 220 * (1 - progreso);          // la masa se diluye primero
  let alphaContorno = 255 * (1 - progreso * 0.85);  // el contorno resiste un poco más
  let grosor = 3 - progreso * 2.5;
 
  fill(20, alphaRelleno);
  stroke(0, alphaContorno);
  strokeWeight(grosor);
 
  beginShape();
  for (let i = 0; i < numVertices; i++) {
    let angulo = (i / numVertices) * radians(360);
 

    let ondaForma = sin(angulo * 5 + frameCount * 0.02) * 18
                   + cos(angulo * 3 - frameCount * 0.015) * 12;
    let temblor = random(-1, 1) * 40 * progreso;
 
    let radio = baseRadius + ondaForma * progreso + temblor;
 
    let x = cos(angulo) * radio;
    let y = sin(angulo) * radio;
    vertex(x, y);
  }
  endShape(CLOSE);

  if (progreso > 0.05) {
    noFill();
    for (let i = 0; i < numVertices; i++) {
      let angulo = (i / numVertices) * radians(360);
      let distanciaExtra = 30 + random(0, 140) * progreso;
      let radio = baseRadius + distanciaExtra;
 
      let x = cos(angulo + frameCount * 0.003) * radio;
      let y = sin(angulo + frameCount * 0.003) * radio;
 
      let alphaParticula = 180 * progreso * random(0.2, 1);
      stroke(40, alphaParticula);
      strokeWeight(2);
      point(x, y);
    }
  }
 
  pop();
}
 
 
