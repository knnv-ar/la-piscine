let tiempo = 0;
let desplazamientoZ = 0;
let fuente;
let direccionRotacion = 1;
let direccionRotacionObjetivo = 1; // Dirección objetivo
let ultimoCambio = 0;
let camaraZ = 400; // Posición Z de la cámara
let velocidad = 5; // Velocidad inicial del túnel

function preload() {
  fuente = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('div-sketch');
  noStroke();
  textFont(fuente);
}

function draw() {
  background(5);

  // Luces
  ambientLight(40);
  directionalLight(200, 200, 220, -0.3, -0.4, -1);
  
  //Cámara acercándose al túnel
  camaraZ = lerp(camaraZ, 50, 0.01); // Se acerca suavemente desde 400 hasta 50
  camera(0, 0, camaraZ, 0, 0, 0, 0, 1, 0);
  
  orbitControl();
  
  // Cambiar dirección de rotación cada cierto tiempo (cada 2 segundos aprox)
  if (frameCount - ultimoCambio > 120) {
    direccionRotacionObjetivo *= -1;
    ultimoCambio = frameCount;
  }
  
  // Transición más lenta entre direcciones
  direccionRotacion = lerp(direccionRotacion, direccionRotacionObjetivo, 0.005);
  
  // Rotación constante en Z con dirección variable suave
  rotateZ(frameCount * 0.04 * direccionRotacion);
  rotateX(cos(tiempo * 0.003) * 0.2);

  // PARÁMETROS DEL TÚNEL
  let numAnillos = 80;     // cantidad de anillos
  let separacionZ = 8;    // distancia entre anillos
  let particulasPorAnillo = 120; // pelotitas por anillo
  let radioBase = 100;     // radio del túnel

  // Aumentar velocidad progresivamente (acelera hasta un máximo)
  velocidad += 0.05; // Incremento gradual
  velocidad = constrain(velocidad, 5, 30); // Limita entre 5 y 30
  
  // Desplazamos los anillos hacia la cámara
  desplazamientoZ += velocidad;

  for (let i = 0; i < numAnillos; i++) {
    // z del anillo i
    let z = -i * separacionZ + (desplazamientoZ % (numAnillos * separacionZ));

    // Cuando el anillo está muy cerca de la cámara, lo dejamos pasar de largo
    
    if (z > 100) {
      z -= numAnillos * separacionZ;
    }

    // Pequeña variación del radio para que respire
    let radio = radioBase + 20 * sin(tiempo * 0.02 + i * 0.4);

    for (let j = 0; j < particulasPorAnillo; j++) {
      let angulo = TWO_PI * (j / particulasPorAnillo);

      // Coordenadas del círculo
      let x = cos(angulo) * radio;
      let y = sin(angulo) * radio * 0.7; // un poco más chato verticalmente

      // Espasmo sutil de cada partícula
      let vibracion = sin(tiempo * 0.03 + j * 0.7 + i * 0.3) * 5;
      let xV = x + cos(angulo + tiempo * 0.02) * vibracion;
      let yV = y + sin(angulo - tiempo * 0.02) * vibracion;

      push();
      translate(xV, yV, z);

      // Color matrix con profundidad de campo
      let factorDistancia = map(abs(z), 0, 500, 1, 0.3); // Se oscurecen con la distancia
      let r = map(sin(tiempo*0.01 + i), -1, 1, 0, 70) * factorDistancia;
      let g = map(cos(tiempo*0.015 + j), -1, 1, 220, 255) * factorDistancia;
      let b = map(sin(tiempo*0.012 + i + j), -1, 1, 0, 70) * factorDistancia;
      
      // Dibujar 0s y 1s
      fill(r, g, b);
      noStroke();      
      
      textSize(1 + factorDistancia * 4); // Más grandes cerca, más chicos lejos
      textAlign(CENTER, CENTER);
      
      // Alternar entre 0 y 1
      let digito = (i + j) % 2 === 0 ? "0" : "1";
      text(digito, 0, 0);

      pop();
    }
  }

  tiempo++;
}