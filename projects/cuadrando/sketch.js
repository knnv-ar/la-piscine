//TP1 Cuadrando - Travaglini

let tiempo = 0;

function setup() {
 let canvas = createCanvas(512, 512)
 canvas.parent('div-sketch');
  noStroke();             
  rectMode(CENTER); 
}

function draw() {
  // El fondo va oscilando entre tonos de gris usando seno
  let grisFondo = 20 + sin(tiempo) * 20;
  background(grisFondo);
  tiempo += 0.01;// El tiempo avanza muy de a poco, para animar todo

  let cantidad = 10;// Cantidad de cuadrados en cada fila/columna
  let tamañoBase = 20; // Tamaño base para calcular los demás

  // Doble bucle para recorrer toda la grilla
  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {

      // Calcula la posición base del cuadrado en la grilla
      let baseX = i * width / cantidad + width / cantidad / 2;
      let baseY = j * height / cantidad + height / cantidad / 2;

      // Pequeñas variaciones en la posición para que todo se mueva de manera desigual
      let offsetX = sin(i * 1.3 + tiempo * 1.7) * 5 + cos(j * 0.9 + tiempo * 1.3) * 3;
      let offsetY = cos(j * 1.5 + tiempo * 1.1) * 5 + sin(i * 1.1 + tiempo * 0.8) * 4;

      let centroX = baseX + offsetX;
      let centroY = baseY + offsetY;

      // Distancia entre el mouse y cada cuadrado
      let distancia = dist(mouseX, mouseY, centroX, centroY);

      // Cuanto más cerca está el mouse, más claro se vuelve el cuadrado
      let gris = 255 - constrain(distancia / 1.5, 0, 255);
      fill(gris);

      // El cuadrado grande tiene un leve "pulso", va creciendo y achicándose
      let pulsoGrande = sin(frameCount * 0.05 + i * 0.3 + j * 0.2) * 3;

      // Tamaño del cuadrado grande según distancia y pulso
      let tamañoGrande = tamañoBase * 1.5 - constrain(distancia / 12, 0, tamañoBase / 1.5) + pulsoGrande;

      // Dibuja el cuadrado grande con una rotación suave
      push();
      translate(centroX, centroY);
      rotate(distancia * 0.005 + sin(i * 0.5 + j * 0.7 + tiempo) * 0.3);
      rect(0, 0, tamañoGrande, tamañoGrande);
      pop();

      // Cuadrado más chico dentro, con su propia pequeña animación 
      
      // Desplazamiento leve del cuadrado chico
      let offsetPequeX = sin(i * 2 + tiempo * 2.5) * 2;
      let offsetPequeY = cos(j * 2 + tiempo * 2) * 2;

      let centroPequeX = centroX + offsetPequeX;
      let centroPequeY = centroY + offsetPequeY;

      // Pulso del cuadrado chico
      let pulsoPeque = cos(frameCount * 0.08 + i * 0.6 + j * 0.4) * 2;

      // Tamaño del cuadrado chico
      let tamañoPeque = tamañoBase * 0.7 - constrain(distancia / 20, 0, tamañoBase / 3) + pulsoPeque;

      // Color más claro para que se note la diferencia con el cuadrado grande
      fill(constrain(gris + 60, 0, 255));

      // Dibujo del cuadrado chico, también rotando un poquito
      push();
      translate(centroPequeX, centroPequeY);
      rotate(-distancia * 0.01 + cos(i * 0.7 + j * 0.9 + tiempo) * 0.5);
      rect(0, 0, tamañoPeque, tamañoPeque);
      pop();
    }
  }
}
