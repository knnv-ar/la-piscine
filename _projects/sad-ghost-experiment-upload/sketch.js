let seleccion, volumen;
let tiempo = 0;
let duracion = 500;
let cronometro;
let fft;
let a = 0;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('div-sketch');
  stroke(100, 0, 0);
  strokeWeight(0.3);
  fill(100, 0, 0, 0);

  fft = new p5.FFT();

  cronometro = 2;
  oscilador1();
  delay1();
  canvas.parent.botonOnOff();
  canvas.parent.botonSeleccionador();
  canvas.parent.deslizadorVolumen();
}

function draw() {
  background(a);

  let spectrum = fft.analyze();

  for (let i = 0; 800 > i; i++) {
    square(1, i, spectrum[i]);

    push();
    strokeWeight(3);
    point(i, spectrum[i] * 4);
    pop();
  }

  sinte1.freq(cronometro);

  if (millis() - tiempo > duracion) {
    randomizarVariables();
    tiempo = millis();
  }

  function randomizarVariables() {
    cronometro = random(100, 200);
  }
}

function mouseWheel(event) {
  a += event.delta;
  return false;
}

document.oncontextmenu = function () {
  return false;
};




function oscilador1() {
  sinte1 = new p5.Pulse();
  sinte1.amp(0);
}

function delay1() {
  delay = new p5.Delay();
  delay.process(sinte1, 0.44, 0.5, 2000);
}

function botonOnOff() {
  botonOnOff = createButton("play")
    .position(5, 5) .style ("font-family","courier")
    .mousePressed(() => {
      if (sinte1.started) {
        sinte1.stop();
        botonOnOff.html ("play")
      } else {
        sinte1.start();
         botonOnOff.html ("stop")
      }
    });
}

function botonSeleccionador() {
  seleccion = createSelect().position(5, 50).style ("font-family","courier");
  seleccion.option("sine");
  seleccion.option("triangle");
  seleccion.option("square");

  seleccion.changed(function () {
    sinte1.setType(seleccion.value());
  });
}



function deslizadorVolumen() {
  volumen = createSlider(0, 0.1, 0, 0).position(0, 80);
  volumen.input(function () {
    sinte1.amp(volumen.value());
  });
}



