let lineas_contador; 
let lineas_lienzo; 
let vaciado_llenado = false; // true si el patrón se está vaciando. false si se está llenando.

// audio)
let sonidodefondo; // Para Fall.mp3
let sonidopip; // Para boton.mp3

// reglas
let angulo = 0;       
let maxcanvaslen; 
let lastchange = 0; 
const tiempo = 8000; 

// lineas_lienzo)
const min_lines = 50; 
const max_lines = 250; 
let currentmaxlen; 
     
function preload() {
    sonidodefondo = loadSound('sonido/fall.mp3');
    sonidopip = loadSound('sonido/boton.mp3');
}

function setup() {
  let canvas = createCanvas(600, 600, WEBGL)  
  canvas.parent('div-sketch');
  colorMode(RGB, 255); 
  
  frameRate(60); 
  maxcanvaslen = dist(0, 0, width / 2, height / 2);
  lastchange = millis(); // marca de tiempo actual
  
 
  sonidodefondo.setVolume(0.5); // volumen medio para el ambiente
  sonidodefondo.loop(); 
  
  startNewCycle(); 
}

function draw() {
    const bgColor = 0; 
    background(bgColor); 
    
    const linea_color = 255;

    // (tiempo actual > tiempo en que debe ocurrir el próximo cambio) 
  
    if (millis() > lastchange + tiempo) {
        startNewCycle();
    }
    
    // vaciado
    if (vaciado_llenado && lineas_contador > 0) {
        lineas_contador -= 5; 
        if (lineas_contador <= 0) {
            vaciado_llenado = false;
        }
    } else if (!vaciado_llenado && lineas_contador < lineas_lienzo) { 
        lineas_contador += 3;  //llenado
        if (lineas_contador >= lineas_lienzo) {
            lineas_contador = lineas_lienzo;
        }
    }
    
  
    // 3D y lineas
  
    rotateX(frameCount * 0.010);
    rotateY(frameCount * 0.006);
    rotateZ(frameCount * 0.004); 

    for (let i = 0; i < lineas_lienzo; i++) {
        if (i > lineas_contador) continue; 
        
        stroke(linea_color); 
        strokeWeight(1); 
        
        let len = currentmaxlen * map(sin(i * 0.1 + frameCount * 0.05), -1, 1, 0.5, 1); // longitud radial de la línea actual // la longitud de la línea varia entre el 50% y el 100% de la longitud máxima.
       
      
        let x = cos(angulo + i * 0.1) * len;
        let y = sin(angulo + i * 0.1) * len;
        let z = cos(i * 0.3 + frameCount * 0.01) * len * 0.3;

        line(0, 0, 0, x, y, z); //Dibuja la línea desde el origen hasta el punto calculado (x, y, z).
    }
    angulo += 0.01;
}

function startNewCycle() {
    if (sonidopip && sonidopip.isLoaded()) {
        sonidopip.play();
    }

    // nro de lineas random
    lineas_lienzo = floor(random(min_lines, max_lines));
    
    //tamañano de figura en canvas
    currentmaxlen = random(maxcanvaslen * 1, maxcanvaslen * 3); 
    
    // reinicio
    vaciado_llenado = true;
    lineas_contador = lineas_lienzo; 
    lastchange = millis(); 

 }