/*
  Compromisos
  2021
  Agustín Nicolás Gutiérrez
*/

//DECLARACIÓN DE VARIABLES
//IMAGEN
var desp = 0;
var psed = 0;
var cromatico = 0;
var fondo = 0;
var colorFondo = 0;
var transparencia = 250;
var coloresInicio = [0, 50, 100, 150, 200];
var r1;
var r2;
var r3;
//AUDIO
var cualDrone;
var drone1;
var drone2;
var drone3;
var duracion1;
var duracion2;
var duracion3;
var posicion;

function preload() {
  //Carga de archivos de audio
  drone1 = loadSound("audio/drone1.mp3");
  drone1.setVolume(0);
  drone2 = loadSound("audio/drone2.mp3");
  drone2.setVolume(0);
  drone3 = loadSound("audio/drone3.mp3");
  drone3.setVolume(0);

  //Estos están por si el mismo clip suena dos veces al mismo tiempo
  drone1b = loadSound("audio/drone1.mp3");
  drone1b.setVolume(0);
  drone2b = loadSound("audio/drone2.mp3");
  drone2b.setVolume(0);
  drone3b = loadSound("audio/drone3.mp3");
  drone3b.setVolume(0);
}
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('div-sketch');
}

function draw() {
  //Valor oscilatorio +
  var valorDesp = sin(desp);
  var mov = map(valorDesp, -1, 1, 0, width);
  desp += 0.01;

  //Valor oscilatorio -
  var valorPsed = sin(psed);
  var vom = map(valorPsed, 1, -1, 0, width);
  psed += 0.01;

  //Movimiento Cromático
  var colorDesp = sin(cromatico);
  var colores = round(map(colorDesp, -1, 1, 0, 250));
  cromatico += 0.05;

  //Movimiento fondo;
  var tinteFondo = sin(fondo);
  var colorFondo = round(map(tinteFondo, -1, 1, 0, 250));
  fondo += 0.05;

  background(colorFondo);
  for (i = 0; i < 300; i++) {
    noFill();

    /*Inicializa el valor RGB a partir de random +array para darle vida al movimiento
    stroke(r1 + colores, r2 + colores, r3 + colores, 400);
    strokeWeight(2);*/

    //Lineas
    push();
    stroke(r1 + colores, r2 + colores, r3 + colores, 1000);
    strokeWeight(2);
    bezier(7, 2, 12, mov, mov, 113, 600, 595);
    bezier(0, 2, vom, 250, 280, vom, 598, 598);
    bezier(4, 1, 200, vom, vom, 420, 596, 598);
    pop();

    push();
    stroke(r2 + colores, r1 + colores, r3 + colores, 1000);
    strokeWeight(2.5);
    bezier(0, 302, mov, mov, vom, vom, 600, 298);
    bezier(0, 301, vom, mov, vom, vom, 600, 302);
    pop();

    push();
    stroke(r3 + colores, r2 + colores, r1 + colores, 1000);
    strokeWeight(1.5);
    bezier(0, 600, vom, 300, 300, vom, 600, 598);
    bezier(0, 600, vom, 0, 0, vom, 598, 600);
    pop();

    push();
    stroke(r1 + colores, r3 + colores, r2 + colores, 1000);
    strokeWeight(3);
    bezier(0, 600, mov, 400, 600, vom, 600, 600);
    bezier(5, 600, mov, 100, 500, vom, 600, 0);
    bezier(600, 0, 0, 150, 300, vom, 600, 600);
    pop();
  }

  if (mouseIsPressed) {
    //Opera valores de fondo y transparencia

    transparencia--;

    //Visualizar
    fill(0, 0, 0, transparencia);
    square(0, 0, width);
  } else {
    transparencia = 250;

    //Elige un valor de inicialización de color cada vez que se suelta el mouse para que cada click reinicie
    r1 = random(coloresInicio);
    r2 = random(coloresInicio);
    r3 = random(coloresInicio);

    //Pantalla a negro
    fill(0, 0, 0, transparencia);
    square(0, 0, width);

    //Este bloque parece redundante porque ya está instanciado, pero a veces al terminar de ejecutar el audio volvía a dispararse solo.
    drone1.stop(1);
    drone1.setVolume(0, 0.9);
    drone2.stop(1);
    drone2.setVolume(0, 0.9);
    drone3.stop(1);
    drone3.setVolume(0, 0.9);
  }

  //COMPORTAMIENTO DEL AUDIO

  //Paneo responde a ubicación en eje X
  posicion = map(mouseX, 0, width, -1, 1);
  drone1.pan(posicion);
  drone2.pan(posicion);
  drone3.pan(posicion);

  //Reproducción aleatoria de pistas de audio
  duracion1 = round(drone1.currentTime());
  duracion2 = round(drone2.currentTime());
  duracion3 = round(drone3.currentTime());

  if (duracion1 == 25) {
    salida1();
    azar();
    if (cualDrone == 1) {
      cue1b();
    } else if (cualDrone == 2) {
      cue2();
    } else if (cualDrone == 3) {
      cue3();
    }
  } else if (duracion2 == 25) {
    salida2();
    azar();
    if (cualDrone == 1) {
      cue1();
    } else if (cualDrone == 2) {
      cue2b();
    } else if (cualDrone == 3) {
      cue3();
    }
  } else if (duracion3 == 25) {
    salida3();
    azar();
    if (cualDrone == 1) {
      cue1();
    } else if (cualDrone == 2) {
      cue2();
    } else if (cualDrone == 3) {
      cue3b();
    }
  }
} // FIN DE DRAW

//Comienza a ejecutar
function mousePressed() {
  azar();

  if (cualDrone == 1) {
    cue1();
  } else if (cualDrone == 2) {
    cue2();
  } else if (cualDrone == 3) {
    cue3();
  }
}
//Trigger de random
function azar() {
  //Disparador de drones al azar
  var numeros = [1, 2, 3];
  cualDrone = random(numeros);
  return cualDrone;
}

//Triggers de audio
function cue1() {
  drone1.setVolume(1, 10);
  drone1.play();
}
function cue2() {
  drone2.setVolume(1, 10);
  drone2.play();
}
function cue3() {
  drone3.setVolume(1, 10);
  drone3.play();
}

//Triggers de audio si suena dos veces el mismo clip
function cue1b() {
  drone1.setVolume(1, 10);
  drone1.play();
}
function cue2b() {
  drone2.setVolume(1, 10);
  drone2.play();
}
function cue3b() {
  drone3.setVolume(1, 10);
  drone3.play();
}

//Triggers de fade-out
function salida1() {
  drone1.setVolume(0, 10);
}
function salida2() {
  drone2.setVolume(0, 10);
}
function salida3() {
  drone3.setVolume(0, 10);
}

//Detiene ejecución de audio
function mouseReleased() {
  drone1.setVolume(0, 0.9);
  drone1.stop(1);
  drone2.setVolume(0, 0.9);
  drone2.stop(1);
  drone3.setVolume(0, 0.9);
  drone3.stop(1);
}
