/* 
-Título de la obra: Ojo del huracan
-Año: 2024
-Autor/a: Florencia Ailen Arbia 🌺
-Breve descripción: 
  Mi obra consiste en la rotación continua de un conjunto de líneas sobre un eje centrado en el lienzo, con una variación gradual y constante de color, que remiten a un ojo, humano, y al mismo tiempo el de un huracán. También tiene dos conjuntos de cuadrados que se abren y se cierran generando la ilusión de un párpado.
*/

//Empezamosssss 🤠

function setup() {
let canvas=  createCanvas(512, 512;
canvas.parent('div-sketch');
  background(0);
}
//Declaramos variables globales
let angulo = 0; //color del stroke  
let angulo2 = 0; //para la transparencia del stroke
let angulo3 = 0; //
let angulo4 = 0; //

function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //lineas rotantes (ponele que el iris 👁️, aka huracan 🌪️)
  //color del stroke cambiante
  let valorSeno = sin(angulo);
  let tinte = map(valorSeno, -1, 1, 40, 200);
  angulo += 1;
  //Transparencia cambiante del stroke
  let valorSeno2 = sin(angulo2);
  let transparenciaStroke = map(valorSeno2, -1, 2, 150, 200);
  angulo2 += 1.2;

  stroke(tinte, tinte, tinte, transparenciaStroke);

  let rota = random(0, 360);

  y1 = 15;
  y2 = 45;
  let origenX = width / 2;
  let origenY = height / 2;

  //repite el patron de lineas verticalmente bueno ya no verticales
  while (y2 < 50) {
    push();
    translate(origenX, origenY); //mueve toda la cosa al centro
    for (let i = 40; i < 400; i += 5) {
      rotate(rota);
      line(i - 5, y1, i - 5, y2);
    }
    pop();
    y1 += 50;
    y2 += 50;
  }

  //"parapados"
  // cambia dirección
  //Movimiento parpado arriba
  let valorSeno3 = sin(angulo3);
  let yMap1 = map(valorSeno3, -1, 1, -261, 0);
  angulo3 += 0.47; //velocidad de parpadeo
  //Movimiento parpado abajo
  let valorSeno4 = sin(angulo4);
  let yMap2 = map(valorSeno3, -1, 1, 773, 512);
  angulo4 += 0.47; //velocidad de parpadeo again

  push(); // encierra a ambos parpados
  //stroke fijo para los "parpados"
  stroke(10);
  strokeWeight(2.5);
  fill(27);
  push(); //parpado 1 abajo
  translate(256, yMap2);
  for (let i = 500; i > 0; i -= 11) {
    rect(0, 0, 10 + i, 10 + i);
  }
  pop();
  push();
  translate(256, yMap1); //parpado 2 arriba
  for (let i = 500; i > 0; i -= 11) {
    rect(0, 0, 10 + i, 10 + i);
  }
  pop();
  pop();
}
document.oncontextmenu = function () {
  return false;
};



