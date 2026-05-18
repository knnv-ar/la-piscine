let cantidadEsferas = 5;
let angulos = [];
let distancia = [];
let EsferasCreadas = [];
let imagenes = [];
let audioFiles = []; // Agregado: arreglo para los archivos de audio
let centroTexture;
let velocidadNormal = 0.005; // Velocidad normal de rotación
let velocidadRapida = 0.5; // Velocidad rápida de rotación (el doble de la normal) para esferas con textura igual a la grande

function preload() {
  for (let i = 1; i <= 5; i++) {
    let imagen = loadImage(`img/imagen0${i}.jpg`);
    imagenes.push(imagen);
  }
  for (let i = 1; i <= 5; i++) {
    let audio = loadSound(`audios/audio0${i}.mp3`);
    audioFiles.push(audio); // Agregado: almacenar los objetos de audio en el arreglo
  }
}

function setup() {
 let canvas = createCanvas(800, 800, WEBGL);
 canvas.parent('div-sketch')
  centroTexture = random(imagenes);

  for (let i = 0; i < cantidadEsferas; i++) {
    angulos[i] = random(TWO_PI);
    distancia[i] = random(100, 300);
    let textureIndex = i % imagenes.length;
    let texture = imagenes[textureIndex];

    EsferasCreadas.push({ x: distancia[i] * cos(angulos[i]), y: distancia[i] * sin(angulos[i]), z: 0, texture: texture });
  }
}

function draw() {
  background(0);
  noStroke()
  for (let i = 0; i < cantidadEsferas; i++) {
    let x = distancia[i] * cos(angulos[i]);
    let y = distancia[i] * sin(angulos[i]);
    let z = distancia[i] * tan(angulos[i]);

    push();

    if (centroTexture === EsferasCreadas[i].texture) {
      ambientLight(255);
      ambientMaterial(random(255), random(255), random(255)); // Color anaranjado

      let angle = frameCount * velocidadRapida;
      let xOffset = distancia[i] * cos(angle);
      let yOffset = distancia[i] * sin(angle);
      let zOffset = distancia[i] * tan(angle); // Ahora solo en el plano XY

      translate(xOffset, yOffset, zOffset);
    } else {
      let angle = frameCount * velocidadNormal;
      let xOffset = distancia[i] * cos(angulos[i] + angle);
      let yOffset = distancia[i] * sin(angulos[i] + angle);
      let zOffset = 4;

      translate(xOffset, yOffset, zOffset);
    }

    texture(EsferasCreadas[i].texture);
    sphere(25);

    pop();

    angulos[i] += radians(1);
  }

  // Dibuja la esfera grande en el centro después de las pequeñas
  push();
  translate(0, 0, 0);
  texture(centroTexture);
  rotateY(frameCount * velocidadNormal);
  sphere(75);
  pop();
}

function mouseClicked() {
  if (mouseButton === LEFT) {
    centroTexture = random(imagenes);

    // Reproduce un audio al azar
    let audioIndex = int(random(0, 5));
    audioFiles[audioIndex].play();
  }
  return false; // Evita la acción predeterminada del clic
}