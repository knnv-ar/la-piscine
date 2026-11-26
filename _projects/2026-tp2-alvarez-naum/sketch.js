// TP Nº 2 - Usame para crear
// Un proyector apunta hacia el cielo de una noche muy oscura.
// Su único botón dice "USAME PARA CREAR": al tocarlo, el proyector se
// enciende (y arranca el zumbido del motor) y el botón pasa a decir
// "REINICIA LA CREACIÓN", en rojo de alerta.
// Mientras se mantiene apretado el mouse, el recorrido del cursor se vuelve
// un trazo de luz que queda en el cielo, como en un lienzo.
//   - si el cursor se mueve en círculos: azul y amarillo
//   - si se mueve en línea recta: rojo y verde
//   - tecla ESPACIO: alterna entre luz fluorescente y color sólido
// Al reiniciar suena un disparo y lo creado se derrumba: cada trazo cae entero
// al piso y se amontona a los dos costados del proyector, como desechos que se acumulan.

// ---------- VARIABLES ----------

// sonido del motor: se genera con el audio del navegador (Web Audio),
// sin archivos ni librerías, así suena siempre
let audio;        // el "motor de sonido" del navegador
let volumen;      // control de volumen general
let zumbidos = []; // array de osciladores: el zumbido eléctrico
let frecuencias = [110, 220, 330, 440];  // graves que se escuchan en cualquier parlante
let fuente;  // tipografía tenebrosa (Creepster), con letras que chorrean

let encendido = false;  // si el proyector está prendido
let solido = false;     // false: luz fluorescente / true: color sólido

// posición de la lente del proyector (de donde salen los haces)
let lenteX;
let lenteY;

// el único botón: una placa chica debajo de la lente
let botonX;
let botonY;
let botonAncho = 144;
let botonAlto = 25;

// pequeños giros y saltos de cada letra, para que parezca escrito a mano
let giros = [];
let saltos = [];

// capas (lienzos aparte) que se dibujan una encima de otra en cada cuadro
let noche;   // el cielo con estrellas
let lienzo;  // lo que se está creando
let basura;  // los desechos acumulados en el piso

// cada trazo (desde que se aprieta el mouse hasta que se suelta) se guarda
// como un array de tramos; "trazos" es el array de todos los trazos hechos
let trazoActual = [];
let trazos = [];
// los trazos que están cayendo después de reiniciar
let cayendo = [];
// altura de la pila de desechos de cada costado: crece un poco con cada trazo,
// pero nunca pasa de pilaMaxima, así el cielo queda despejado
let pilaIzquierda = 0;
let pilaDerecha = 0;
let pilaMaxima = 70;
let margenProyector = 190;  // los desechos no caen sobre el proyector

// array con los últimos puntos del recorrido del cursor:
// con ellos averiguamos si el movimiento es recto o circular
let recorrido = [];
let puntosRecorrido = 16;  // cuántos puntos guardamos
let separacionPuntos = 12; // distancia mínima en píxeles entre puntos guardados
let forma = "recta";       // "recta" o "circulo"

// colores fluorescentes, en arrays de [rojo, verde, azul]
let fluorCirculo = [[0, 220, 255], [255, 255, 0]];
let fluorRecta = [[255, 20, 60], [57, 255, 20]];

// los mismos colores en versión sólida: más oscuros y opacos, como pintura
let solidoCirculo = [[20, 60, 170], [225, 170, 20]];
let solidoRecta = [[190, 25, 35], [25, 130, 55]];

// ---------- SETUP ----------

async function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('div-sketch');  // obligatorio para la galería <la-piscine>

  lenteX = width / 2;
  lenteY = height - 125;
  botonX = lenteX - botonAncho / 2;
  botonY = lenteY + 12;  // justo debajo del tubo de la lente

  // la tipografía se busca primero en la carpeta tipografias; si no está,
  // se carga la misma tipografía desde internet; y si eso también falla,
  // el botón se escribe con una letra común, pero la obra funciona igual
  try {
    fuente = await loadFont("tipografias/creepster-regular.ttf");
  } catch (error) {
    try {
      fuente = await loadFont("https://cdn.jsdelivr.net/npm/@expo-google-fonts/creepster@0.4.0/400Regular/Creepster_400Regular.ttf");
    } catch (error2) {
      fuente = "sans-serif";
    }
  }

  // un giro y un salto al azar para cada letra, elegidos una sola vez
  for (let i = 0; i < 25; i++) {
    giros.push(random(-0.12, 0.12));
    saltos.push(random(-1.2, 1.2));
  }

  // las tres capas, del tamaño del lienzo
  noche = createGraphics(width, height);
  lienzo = createGraphics(width, height);
  basura = createGraphics(width, height);
  pintarNoche();

}

// arma el sonido del motor la primera vez que se enciende el proyector
// (los navegadores solo dejan crear sonido después de un clic)
function crearMotor() {
  // Safari viejo usa otro nombre para el mismo objeto
  if (window.AudioContext) {
    audio = new AudioContext();
  } else {
    audio = new webkitAudioContext();
  }

  // volumen general: empieza en silencio
  volumen = audio.createGain();
  volumen.gain.value = 0;
  volumen.connect(audio.destination);

  // 1. el zumbido eléctrico: cuatro ondas graves (110 Hz y sus armónicos),
  //    cada una más suave que la anterior
  for (let i = 0; i < frecuencias.length; i++) {
    let onda = audio.createOscillator();
    onda.type = "sawtooth";  // onda "serrucho": suena más áspera, más a motor
    onda.frequency.value = frecuencias[i];
    let fuerza = audio.createGain();
    fuerza.gain.value = 0.25 / (i + 1);
    onda.connect(fuerza);
    fuerza.connect(volumen);
    onda.start();
    zumbidos.push(onda);
  }

  // 2. el ventilador: ruido al azar, filtrado para que suene a aire
  let muestras = audio.sampleRate * 2;
  let buffer = audio.createBuffer(1, muestras, audio.sampleRate);
  let datos = buffer.getChannelData(0);
  for (let i = 0; i < muestras; i++) {
    datos[i] = random(-1, 1);
  }
  let ruido = audio.createBufferSource();
  ruido.buffer = buffer;
  ruido.loop = true;
  let filtro = audio.createBiquadFilter();
  filtro.type = "bandpass";
  filtro.frequency.value = 900;
  let aire = audio.createGain();
  aire.gain.value = 0.6;
  ruido.connect(filtro);
  filtro.connect(aire);
  aire.connect(volumen);
  ruido.start();
}

// crea un ruido blanco (valores al azar) de la duración pedida, en segundos
function crearRuido(segundos) {
  let muestras = floor(audio.sampleRate * segundos);
  let buffer = audio.createBuffer(1, muestras, audio.sampleRate);
  let datos = buffer.getChannelData(0);
  for (let i = 0; i < muestras; i++) {
    datos[i] = random(-1, 1);
  }
  let ruido = audio.createBufferSource();
  ruido.buffer = buffer;
  return ruido;
}

// una capa de ruido filtrado que golpea fuerte y se apaga en "duracion" segundos
function capaDeRuido(tipoFiltro, frecuencia, fuerza, duracion, salida) {
  let ahora = audio.currentTime;
  let ruido = crearRuido(duracion + 0.1);
  let filtro = audio.createBiquadFilter();
  filtro.type = tipoFiltro;
  filtro.frequency.value = frecuencia;
  let volumenCapa = audio.createGain();
  volumenCapa.gain.setValueAtTime(fuerza, ahora);
  volumenCapa.gain.exponentialRampToValueAtTime(0.001, ahora + duracion);
  ruido.connect(filtro);
  filtro.connect(volumenCapa);
  volumenCapa.connect(salida);
  ruido.start(ahora);
  ruido.stop(ahora + duracion + 0.1);
}

// el disparo: cuatro capas que suenan juntas
function disparo() {
  if (!audio) {
    return;
  }
  let ahora = audio.currentTime;

  // un compresor iguala las capas y hace que el tiro suene fuerte y "pegado"
  let compresor = audio.createDynamicsCompressor();
  compresor.threshold.value = -20;
  compresor.ratio.value = 8;
  compresor.attack.value = 0.001;
  compresor.release.value = 0.2;
  let salida = audio.createGain();
  salida.gain.value = 1.4;
  compresor.connect(salida);
  salida.connect(audio.destination);

  // 1. el chasquido: ruido agudo que dura apenas 6 centésimas de segundo
  capaDeRuido("highpass", 1500, 2.0, 0.06, compresor);

  // 2. el estallido: ruido completo que se apaga en un cuarto de segundo
  capaDeRuido("lowpass", 3000, 1.2, 0.25, compresor);

  // 3. el golpe grave: una onda que cae de 130 Hz a 45 Hz, como un empujón de aire
  let onda = audio.createOscillator();
  onda.frequency.setValueAtTime(130, ahora);
  onda.frequency.exponentialRampToValueAtTime(45, ahora + 0.18);
  let golpe = audio.createGain();
  golpe.gain.setValueAtTime(1.5, ahora);
  golpe.gain.exponentialRampToValueAtTime(0.001, ahora + 0.35);
  onda.connect(golpe);
  golpe.connect(compresor);
  onda.start(ahora);
  onda.stop(ahora + 0.4);

  // 4. el eco: ruido grave y suave que se pierde en la noche durante segundo y medio
  capaDeRuido("lowpass", 700, 0.35, 1.5, compresor);
}

// cambia el volumen y el tono del motor de a poco (sin saltos bruscos)
function ajustarMotor(nuevoVolumen, aceleracion) {
  if (!audio) {
    return;
  }
  volumen.gain.setTargetAtTime(nuevoVolumen, audio.currentTime, 0.1);
  for (let i = 0; i < zumbidos.length; i++) {
    zumbidos[i].frequency.setTargetAtTime(frecuencias[i] * aceleracion, audio.currentTime, 0.2);
  }
}

// ---------- DRAW ----------

function draw() {
  // las capas: primero el cielo, después los desechos y encima lo creado.
  // lo creado queda guardado en "lienzo" y por eso permanece entre cuadros
  image(noche, 0, 0);
  image(basura, 0, 0);
  image(lienzo, 0, 0);

  // el proyector solo pinta si está encendido, si el mouse está apretado,
  // si el cursor se movió y si no está sobre el botón ni debajo de la lente
  let seMovio = mouseX != pmouseX || mouseY != pmouseY;
  let dibujando = encendido && mouseIsPressed && seMovio && !sobreBoton() && mouseY < lenteY - 10;
  if (dibujando) {
    guardarPunto(mouseX, mouseY);
    detectarForma();
    dibujarTrazo();
  }

  // al soltar el mouse vaciamos el recorrido: el próximo trazo empieza de cero
  // (y arranca como recta hasta que el gesto muestre que da vueltas)
  if (!mouseIsPressed) {
    recorrido = [];
    forma = "recta";
    guardarTrazo();
  }

  actualizarMotor();

  // los tramos que caen después de un disparo
  actualizarCaida();

  // el proyector y el botón se redibujan siempre encima de todo
  dibujarProyector();
  dibujarBoton();
}

// ---------- FUNCIONES DE USUARIO ----------

// pinta el cielo nocturno con algunas estrellas tenues, en su propia capa
function pintarNoche() {
  noche.background(5, 5, 15);
  noche.noStroke();
  for (let i = 0; i < 120; i++) {
    noche.fill(255, random(20, 90));
    noche.circle(random(width), random(height - 160), random(1, 2.5));
  }
}

// agrega un punto al recorrido, solo si está a cierta distancia del anterior
// (así el array mide el dibujo y no la velocidad del mouse),
// y borra el más viejo si hay demasiados
function guardarPunto(x, y) {
  if (recorrido.length > 0) {
    let ultimo = recorrido[recorrido.length - 1];
    if (dist(ultimo.x, ultimo.y, x, y) < separacionPuntos) {
      return;
    }
  }
  recorrido.push({ x: x, y: y });
  if (recorrido.length > puntosRecorrido) {
    recorrido.splice(0, 1);
  }
}

// calcula cuánto gira, en promedio, la dirección del trazo en cada tramo:
//   - si casi no gira, el cursor va derecho        -> "recta"
//   - si gira bastante hacia un mismo lado, da vueltas -> "circulo"
// alcanza con 6 puntos para decidir, así el color cambia enseguida
function detectarForma() {
  if (recorrido.length < 6) {
    return;
  }

  let giroTotal = 0;
  for (let i = 2; i < recorrido.length; i++) {
    let a = recorrido[i - 2];
    let b = recorrido[i - 1];
    let c = recorrido[i];
    // dirección de cada tramo
    let direccion1 = atan2(b.y - a.y, b.x - a.x);
    let direccion2 = atan2(c.y - b.y, c.x - b.x);
    let giro = direccion2 - direccion1;
    // corregimos el salto entre -PI y PI (si no, un giro chico parece enorme)
    if (giro > PI) {
      giro = giro - TWO_PI;
    }
    if (giro < -PI) {
      giro = giro + TWO_PI;
    }
    giroTotal = giroTotal + giro;
  }
  let giroPromedio = giroTotal / (recorrido.length - 2);

  // abs() da el valor sin signo: girar a la derecha o a la izquierda da igual
  if (abs(giroPromedio) > 0.05) {
    forma = "circulo";
  } else if (abs(giroPromedio) < 0.025) {
    forma = "recta";
  }
}

// elige los dos colores según la forma del movimiento y el modo
function elegirPaleta() {
  if (forma == "circulo") {
    if (solido) {
      return solidoCirculo;
    }
    return fluorCirculo;
  } else {
    if (solido) {
      return solidoRecta;
    }
    return fluorRecta;
  }
}

// dibuja el haz que sale de la lente y el trazo de luz entre la posición
// anterior del mouse y la actual (sin círculos: solo la línea)
function dibujarTrazo() {
  let paleta = elegirPaleta();

  // los dos colores de la paleta se mezclan de a poco a lo largo del trazo
  let colorA = color(paleta[0][0], paleta[0][1], paleta[0][2]);
  let colorB = color(paleta[1][0], paleta[1][1], paleta[1][2]);
  let mezcla = (sin(frameCount * 0.08) + 1) / 2;  // va de 0 a 1 y vuelve
  let c = lerpColor(colorA, colorB, mezcla);
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  // el haz: un cono muy transparente desde la lente
  lienzo.noStroke();
  lienzo.fill(r, g, b, 6);
  lienzo.triangle(lenteX - 12, lenteY, lenteX + 12, lenteY, mouseX, mouseY);

  // guardamos el tramo (sus dos puntas, su color y su grosor) para después
  let grosor = 3;
  if (solido) {
    grosor = 7;
  }
  trazoActual.push({ x1: pmouseX, y1: pmouseY, x2: mouseX, y2: mouseY, r: r, g: g, b: b, grosor: grosor });

  lienzo.strokeCap(ROUND);
  if (solido) {
    // color sólido: una sola línea opaca, como un trazo de pintura
    lienzo.stroke(r, g, b);
    lienzo.strokeWeight(7);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    // luz fluorescente: varias líneas superpuestas, de la más ancha y
    // transparente (el resplandor) a la más fina y brillante (el centro)
    lienzo.stroke(r, g, b, 18);
    lienzo.strokeWeight(22);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY);

    lienzo.stroke(r, g, b, 45);
    lienzo.strokeWeight(10);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY);

    lienzo.stroke(r, g, b, 220);
    lienzo.strokeWeight(3);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY);

    lienzo.stroke(255, 255, 255, 140);
    lienzo.strokeWeight(1);
    lienzo.line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// dibuja el proyector apuntando hacia arriba, en la parte de abajo del lienzo
function dibujarProyector() {
  // patas del trípode
  stroke(70);
  strokeWeight(5);
  line(lenteX, botonY + botonAlto, lenteX - 60, height);
  line(lenteX, botonY + botonAlto, lenteX + 60, height);
  line(lenteX, botonY + botonAlto, lenteX, height);

  // tubo de la lente
  stroke(90);
  strokeWeight(2);
  fill(25, 25, 32);
  rect(lenteX - 28, lenteY - 2, 56, 14, 4);

  // lente: apagada es gris, encendida brilla
  if (encendido) {
    noStroke();
    fill(255, 255, 220, 60);
    ellipse(lenteX, lenteY, 90, 34);
    fill(255, 255, 230);
    ellipse(lenteX, lenteY, 48, 14);
  } else {
    stroke(110);
    fill(60, 60, 75);
    ellipse(lenteX, lenteY, 48, 14);
  }
}

// el único botón: una placa chica debajo de la lente, con el texto de terror
function dibujarBoton() {
  // el botón, más chico, en el centro; se aclara cuando el cursor está encima
  stroke(110);
  strokeWeight(1.5);
  if (sobreBoton()) {
    fill(70, 70, 88);
  } else {
    fill(22, 22, 30);
  }
  rect(botonX, botonY, botonAncho, botonAlto, 5);

  // luz piloto: verde si está prendido, roja si está apagado
  noStroke();
  if (encendido) {
    fill(57, 255, 20);
  } else {
    fill(150, 20, 20);
  }
  circle(botonX + botonAncho - 6, botonY + 6, 4);

  if (encendido) {
    // alerta: letras rojas que laten
    let latido = 205 + sin(frameCount * 0.12) * 50;
    escribirAMano("REINICIA LA CREACIÓN", 12, false, latido);
  } else {
    escribirAMano("USAME PARA CREAR", 14, true, 255);
  }
}

// escribe una frase letra por letra, centrada en el botón: cada letra
// tiene su propio giro y su propio salto, así las terminaciones quedan
// irregulares, como escritas a mano
function escribirAMano(frase, tamano, gris, alfa) {
  textFont(fuente);
  textSize(tamano);
  textAlign(LEFT, CENTER);

  // medimos el ancho total sumando cada letra (y los espacios agrandados)
  let anchoTotal = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) == " ") {
      anchoTotal = anchoTotal + tamano * 0.45;
    } else {
      anchoTotal = anchoTotal + textWidth(frase.charAt(i));
    }
  }
  let x = lenteX - anchoTotal / 2;
  let y = botonY + botonAlto / 2;

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);

    // las letras rojas de alerta tiemblan un poco, como de miedo
    let temblor = 0;
    if (!gris) {
      temblor = random(-0.5, 0.5);
    }

    push();
    translate(x + temblor, y + saltos[i] + temblor);
    rotate(giros[i]);

    // contorno oscuro, como un sticker
    stroke(10, 10, 20, alfa);
    strokeWeight(2);
    strokeJoin(ROUND);
    if (gris) {
      fill(200, 200, 200, alfa);  // gris claro
    } else {
      fill(235, 15, 15, alfa);  // rojo sangre
    }
    text(letra, 0, 0);
    pop();

    // el espacio de esta tipografía es muy angosto: lo agrandamos a mano
    if (letra == " ") {
      x = x + tamano * 0.45;
    } else {
      x = x + textWidth(letra);
    }
  }
}

// el motor suena más fuerte y más agudo mientras se dibuja, como si hiciera fuerza
function actualizarMotor() {
  if (!encendido) {
    return;
  }
  if (mouseIsPressed && !sobreBoton()) {
    ajustarMotor(0.6, 1.15);
  } else {
    ajustarMotor(0.35, 1);
  }
}

// devuelve true si el cursor está dentro del botón
function sobreBoton() {
  return mouseX > botonX && mouseX < botonX + botonAncho &&
         mouseY > botonY && mouseY < botonY + botonAlto;
}

// cuando se suelta el mouse, el trazo terminado pasa al array de trazos
function guardarTrazo() {
  if (trazoActual.length > 0) {
    trazos.push(trazoActual);
    trazoActual = [];
  }
}

// el disparo derriba lo creado: el lienzo se vacía y cada trazo, entero,
// empieza a caer hacia uno de los dos costados del proyector
function reiniciarCreacion() {
  guardarTrazo();
  lienzo.clear();

  for (let i = 0; i < trazos.length; i++) {
    let trazo = trazos[i];

    // el centro del trazo y su tamaño
    let minX = width;
    let maxX = 0;
    let minY = height;
    let maxY = 0;
    for (let j = 0; j < trazo.length; j++) {
      let t = trazo[j];
      minX = min(minX, t.x1, t.x2);
      maxX = max(maxX, t.x1, t.x2);
      minY = min(minY, t.y1, t.y2);
      maxY = max(maxY, t.y1, t.y2);
    }
    let centroX = (minX + maxX) / 2;
    let centroY = (minY + maxY) / 2;

    // los tramos se guardan relativos al centro, para poder girar el trazo entero
    let partes = [];
    for (let j = 0; j < trazo.length; j++) {
      let t = trazo[j];
      partes.push({
        ax: t.x1 - centroX, ay: t.y1 - centroY,
        bx: t.x2 - centroX, by: t.y2 - centroY,
        r: t.r, g: t.g, b: t.b, grosor: t.grosor
      });
    }

    // se achica hasta entrar en el costado, y se aplasta: queda tirado en el piso
    let ancho = max(maxX - minX, maxY - minY, 1);
    let escalaX = constrain(120 / ancho, 0.3, 0.6);
    let escalaY = escalaX * 0.4;

    // cae del lado en el que estaba: a la izquierda o a la derecha del proyector,
    // sobre la pila de ese costado (que va creciendo de a poco)
    let mitad = (ancho * escalaX) / 2;
    let destinoX;
    let altoPila;
    if (centroX < lenteX) {
      destinoX = random(10 + mitad, max(10 + mitad, lenteX - margenProyector - mitad));
      altoPila = pilaIzquierda;
      pilaIzquierda = min(pilaMaxima, pilaIzquierda + 4);
    } else {
      destinoX = random(min(width - 10 - mitad, lenteX + margenProyector + mitad), width - 10 - mitad);
      altoPila = pilaDerecha;
      pilaDerecha = min(pilaMaxima, pilaDerecha + 4);
    }
    // el piso donde se apoya: entre el suelo y la altura actual de la pila
    let piso = height - 4 - random(0, altoPila);

    cayendo.push({
      x: centroX,
      y: centroY,
      partes: partes,
      mitadAlto: (maxY - minY) / 2,     // para saber dónde está su borde de abajo
      angulo: 0,
      anguloFinal: random(-0.15, 0.15), // queda casi acostado
      escalaX: 1,
      escalaY: 1,
      escalaFinalX: escalaX,
      escalaFinalY: escalaY,
      velY: random(-4, -1),             // el disparo lo levanta un poco antes de caer
      destinoX: destinoX,
      piso: piso,
      espera: i * 6                     // caen uno detrás de otro
    });
  }
  trazos = [];

  encendido = false;
  ajustarMotor(0, 1);  // se apaga el motor
  recorrido = [];
  forma = "recta";
}

// mueve cada trazo que cae: gravedad, se acuesta, se aplasta, se corre hacia
// su costado y, al llegar al piso, queda estampado en la capa de basura
function actualizarCaida() {
  for (let i = cayendo.length - 1; i >= 0; i--) {
    let c = cayendo[i];

    if (c.espera > 0) {
      c.espera = c.espera - 1;
    } else {
      c.velY = c.velY + 0.4;                               // gravedad
      c.y = c.y + c.velY;
      c.x = c.x + (c.destinoX - c.x) * 0.1;                // easing hacia su costado
      c.angulo = c.angulo + (c.anguloFinal - c.angulo) * 0.05;
      c.escalaX = c.escalaX + (c.escalaFinalX - c.escalaX) * 0.08;
      c.escalaY = c.escalaY + (c.escalaFinalY - c.escalaY) * 0.08;
    }

    // su borde de abajo, según cuánto está aplastado
    let bordeAbajo = c.y + c.mitadAlto * c.escalaY;

    if (c.espera == 0 && c.velY > 0 && bordeAbajo >= c.piso) {
      // llegó al piso: termina de aplastarse y queda ahí, más apagado (ya es desecho)
      c.escalaX = c.escalaFinalX;
      c.escalaY = c.escalaFinalY;
      c.angulo = c.anguloFinal;
      c.y = c.piso - c.mitadAlto * c.escalaY;
      dibujarDesecho(basura, c, 0.7);
      cayendo.splice(i, 1);
    } else {
      dibujarDesecho(window, c, 1);  // mientras cae, se dibuja en el lienzo principal
    }
  }
}

// dibuja un trazo entero en la capa indicada, girado y aplastado alrededor de su centro
function dibujarDesecho(capa, c, brillo) {
  capa.push();
  capa.translate(c.x, c.y);
  capa.rotate(c.angulo);
  capa.scale(c.escalaX, c.escalaY);
  capa.strokeCap(ROUND);
  for (let j = 0; j < c.partes.length; j++) {
    let t = c.partes[j];
    // un resplandor suave y la línea encima
    capa.stroke(t.r * brillo, t.g * brillo, t.b * brillo, 40);
    capa.strokeWeight(t.grosor * 3);
    capa.line(t.ax, t.ay, t.bx, t.by);
    capa.stroke(t.r * brillo, t.g * brillo, t.b * brillo);
    capa.strokeWeight(t.grosor);
    capa.line(t.ax, t.ay, t.bx, t.by);
  }
  capa.pop();
}

// ---------- FUNCIONES DISPARADAS POR EVENTOS ----------

// el mismo botón enciende el proyector o reinicia la creación
function mousePressed() {
  if (sobreBoton()) {
    if (encendido) {
      audio.resume();
      disparo();
      reiniciarCreacion();
    } else {
      encendido = true;
      // el sonido se crea con el primer clic (los navegadores no dejan sonar antes)
      if (!audio) {
        crearMotor();
      }
      audio.resume();
    }
  }
}

// Safari a veces solo habilita el sonido al soltar el clic:
// por eso también lo despertamos acá
function mouseReleased() {
  if (audio && audio.state != "running") {
    audio.resume();
  }
}

// la barra espaciadora alterna entre luz fluorescente y color sólido
function keyPressed() {
  if (key == " ") {
    solido = !solido;
  }
}
