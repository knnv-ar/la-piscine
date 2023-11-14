// click para cambiar la figura de ondas
// teclado de la A a la J
// barra espaciadora = tempo

let lineCount = 0; // contador de líneas
let lineSpacing = 1.25; // espaciado entre líneas
let waveAmplitude = 500; // amplitud de la onda
let waveFrequency = 0.05; // frecuencia de la onda
let osc; // objeto del oscilador
let ruido;
let noiseType = 'white'; // tipo de ruido
let reverb;
let chorusDepth = 0.03;
let chorusRate = 1.5;
let kick;
let isBomboPlaying = false;
let sonidoDeA
let isKeyPressed = {};
let lowPassFilter;
let highPassFilter;

function preload() {
  kick = loadSound('sonido/kick.wav');
  sonidoDeA = loadSound('sonido/A.wav');
 sonidoDeW = loadSound('sonido/Pad 2.wav');
   sonidoDeS = loadSound('sonido/Pad 3.wav');
   sonidoDeE = loadSound('sonido/Pad 4.wav');
   sonidoDeD = loadSound('sonido/Pad 5.wav');
   sonidoDeF = loadSound('sonido/Pad 6.wav');
 sonidoDeT = loadSound('sonido/Pad 7.wav');
 sonidoDeG = loadSound('sonido/Pad 8.wav');
 sonidoDeY = loadSound('sonido/Pad 9.wav');
  sonidoDeH = loadSound('sonido/Pad 10.wav');
  sonidoDeU = loadSound('sonido/Pad 11.wav');
  sonidoDeJ = loadSound('sonido/Pad 1.wav');
}

function setup() {
  let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  osc = new p5.Oscillator(); 
  osc.start();
  ruido = new p5.Noise(); // Inicializar el ruido
  ruido.start();
  ruido.amp(0); // Establecer la amplitud inicial del ruido a 0
  reverb = new p5.Reverb(); 
  reverb.process(osc, 5, 2); 
 
  chorus = new p5.Oscillator();
  chorus.setType('sine');
  chorus.freq(chorusRate);
  chorus.amp(chorusDepth);
  chorus.start();
   lowPassFilter = new p5.LowPass();
  highPassFilter = new p5.HighPass();
  osc.disconnect();
  osc.connect(lowPassFilter);
  lowPassFilter.disconnect();
  lowPassFilter.connect(highPassFilter);
  highPassFilter.connect();
}

function draw() {
  background(220);

  // crea una nueva linea
  if (frameCount % 1 === 0) {
    let x = width - lineSpacing; // posición x inicial
    let y = height; // posición y inicial 
    for (let i = 0; i <= lineCount; i++) {
      let currentX = x - i * lineSpacing;
      let currentLineY = y;
      let waveOffset = i * lineSpacing * 206; // desplazamiento
      let waveHeight = sin(frameCount * waveFrequency + waveOffset) * waveAmplitude; // altura de la onda

      stroke(0); 
      strokeWeight(5);
      line(currentX, height, currentX, height - waveHeight);

      // genera sonido largo de la línea
      if (i % 100000 === 10) {
        let soundVolume = map(waveHeight, 0, waveAmplitude, 0, 0.4);
        let soundFreq = map(waveHeight, 0, waveAmplitude, 22, 633);
        osc.freq(soundFreq); // ajustar la frecuencia del sonido
        osc.amp(soundVolume, 1); //volumen del sonido


        // Agregar ruido según la posición del mouse
        let noiseAmount = map(waveFrequency*100, 0, width, 0, 0.35);
        if (noiseType === 'white') {
          ruido.setType('white');
          ruido.amp(noiseAmount);
        } else if (noiseType === 'pink') {
          ruido.setType('pink');
          ruido.amp(noiseAmount);
        } else if (noiseType === 'brown') {
          ruido.setType('brown');
          ruido.amp(noiseAmount);
        }
      }
    }
    lineCount++;
  }

  // cambia la frecuencia al hacer clic
  if (mouseIsPressed) {
    waveFrequency = random(0.05, 1);
    lineSpacing = random(1, 5);
    waveAmplitude = random(206, 718);
  }
  
  chorus.freq(map(mouseY, 0, height, 0, 10));
  chorus.amp(map(mouseX, 0, width, 0, 0.5));
  
  if (isBomboPlaying) {
    // Restablecer el valor de lineSpacing para ajustar el tempo del bombo
    let bpm = map(waveFrequency, 1, 5, 60, 240);
    kick.rate(bpm/12); // Ajustar la velocidad del bombo según el valor de lineSpacing
    if (!kick.isPlaying()) {
      kick.play();
    }
  }
  
let aBpm = map(waveFrequency, 0.05, 1, 5, 60); 
  sonidoDeA.rate(aBpm / 60);   
  sonidoDeW.rate(aBpm / 57); 
  sonidoDeS.rate(aBpm / 54);   
  sonidoDeE.rate(aBpm / 51);    
  sonidoDeD.rate(aBpm / 48);   
  sonidoDeF.rate(aBpm / 45);  
  sonidoDeT.rate(aBpm / 42); 
  sonidoDeG.rate(aBpm / 39); 
  sonidoDeY.rate(aBpm / 36);  
  sonidoDeH.rate(aBpm / 33);  
  sonidoDeU.rate(aBpm / 30); 
  sonidoDeJ.rate(aBpm / 27); 
  
   //  frecuencia del filtro pasa bajos
  let lowPassFrequency = map(waveFrequency, 0.05, 1, 10, 22050); 
  lowPassFilter.freq(lowPassFrequency);

  //frecuencia del filtro pasa altos 
  let highPassFrequency = map(waveFrequency, 0.05, 1, 10, 22); 
  highPassFilter.freq(highPassFrequency);

  

}

function keyPressed() {
  if (keyCode === 32) { // la tecla presionada es la barra espaciadora
    isBomboPlaying = true;
  }
  if (keyCode === 65) {
    if (!isKeyPressed[65]) {
      sonidoDeA.play();
      isKeyPressed[65] = true;
    }
  }
   if (keyCode === 87) {
    if (!isKeyPressed[87]) {
      sonidoDeW.play();
      isKeyPressed[87] = true;
    }
  }
   if (keyCode === 83) {
    if (!isKeyPressed[83]) {
      sonidoDeS.play();
      isKeyPressed[83] = true;
    }
  }
   if (keyCode === 69) {
    if (!isKeyPressed[69]) {
      sonidoDeE.play();
      isKeyPressed[69] = true;
    }
  }
   if (keyCode === 68) {
    if (!isKeyPressed[68]) {
      sonidoDeD.play();
      isKeyPressed[68] = true;
    }
  }
   if (keyCode === 70) {
    if (!isKeyPressed[70]) {
      sonidoDeF.play();
      isKeyPressed[70] = true;
    }
  }
   if (keyCode === 84) {
    if (!isKeyPressed[84]) {
      sonidoDeT.play();
      isKeyPressed[84] = true;
    }
  }
   if (keyCode === 71) {
    if (!isKeyPressed[71]) {
      sonidoDeG.play();
      isKeyPressed[71] = true;
    }
  }
   if (keyCode === 89) {
    if (!isKeyPressed[89]) {
      sonidoDeY.play();
      isKeyPressed[89] = true;
    }
  }
   if (keyCode === 72) {
    if (!isKeyPressed[72]) {
      sonidoDeH.play();
      isKeyPressed[72] = true;
    }
  }
   if (keyCode === 85) {
    if (!isKeyPressed[85]) {
      sonidoDeU.play();
      isKeyPressed[85] = true;
    }
  }
   if (keyCode === 74) {
    if (!isKeyPressed[74]) {
      sonidoDeJ.play();
      isKeyPressed[74] = true;
    }
  }
}

function keyReleased() {
  if (keyCode === 32) { // Comprueba si se soltó 
    isBomboPlaying = false;
  }
  if (keyCode === 65) {
    isKeyPressed[65] = false;
  }
  if (keyCode === 87) {
    isKeyPressed[87] = false;
  }
  if (keyCode === 83) {
    isKeyPressed[83] = false;
  }
  if (keyCode === 69) {
    isKeyPressed[69] = false;
  }
  if (keyCode === 68) {
    isKeyPressed[68] = false;
  }
  if (keyCode === 70) {
    isKeyPressed[70] = false;
  }
  if (keyCode === 84) {
    isKeyPressed[84] = false;
  }
  if (keyCode === 71) {
    isKeyPressed[71] = false;
  }
  if (keyCode === 89) {
    isKeyPressed[89] = false;
  }
  if (keyCode === 72) {
    isKeyPressed[72] = false;
  }
  if (keyCode === 85) {
    isKeyPressed[85] = false;
  }
  if (keyCode === 74) {
    isKeyPressed[74] = false;
  }
}

// cuando se sale de la ventana
function mouseOut() {
  osc.amp(0, 0.5);
  ruido.amp(0, 0.5);
}


function mouseMoved() {
  if (lineSpacing < 2) {
    noiseType = 'white';
  } else if (lineSpacing < 3) {
    noiseType = 'pink';
  } else {
    noiseType = 'brown';
  }
  
}


