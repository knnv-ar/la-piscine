/*
Ante todo, este proceso me trajo preguntas
¿Qué sale? ¿Qué quiero? ¿Donde estoy? ¿Qué hablo sin decir?
¿Cómo salir de lo rígido del loop? 


(Dehiscencia) El ambiente, la sensación de especialidad, jugar al leve control, movimiento que dirige (lo que busco).
Corte.
(Dis
Líneas random en cortocircuito como lo random de la linealidad.
Ociación).

*/
var desp = 0;
var escala = 0.1;
var angulo = 0;
var gris = 0;
var num = 0;
var desp2 = 0;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  //console.log(frameCount);
  //console.log("x: " + mouseX + " y: " + mouseY);

  //oscilación de gris
  var Vseno = sin(angulo);
  var gris = map(Vseno, -1, 1, 0, 255);
  angulo += 0.01;
  background(gris-20);

  //mov rombo
  var valorDesp = cos(desp);
  var mov = map(valorDesp, -1, 1, 12, 500);
  desp += 0.008;

  //mov bezier
  var Vdesp = sin(desp2);
  var mov1 = map(Vdesp, -1, 1, 12, width);
  desp2 += 0.01;

  if (frameCount >= 420 && frameCount <= 540) {
    for (y = 0; y <= height; y += 50) {
      for (x = 0; x <= width; x += 50) {
        stroke(200);
        scale(1);
        num = 1;
        /* line(
          x,
          y,
          random(mouseX, mouseY),
          random(mouseX, mouseY)
        )*/
       line(
          x,
          y,
          random(frameCount - 350, frameCount - 300),
          random(frameCount - 300, frameCount - 350)
        );
      }
    }
  } else if (frameCount >= 1100 && frameCount <= 1300) {
    for (y = 0; y <= height; y += 50) {
      for (x = 0; x <= width; x += 50) {
        stroke(200);
        scale(1);
        num = 1;
        line(
          x,
          y,
          random(frameCount - 800, frameCount - 850),
          random(frameCount - 850, frameCount - 800)
        );
      }
    }
  } else {
    stroke(gris);
    noFill();

    push(); //rombo
    stroke(200);
    for (var i = mouseX; i <= 400; i += 5) {
      rotate(0.01);
      scale(0.9);
      quad(256, 12 + i, 450, 256 + mov, 256, 450 - i, 50, 256 - mov);
    }
    pop();

    push();
    stroke(gris + 50);
    //scale(0.5);
    for (var i = 0; i <= width; i += 50) {
      //bezier(0 + i, 256, 256, movI, movI, 256, 512, (0 + i) * 2);
      // bezier (0+i,0, 400,mov+10, mov-10,200, 0,250-i);
      // bezier (100,450,200,250,500,50,350,250);
      bezier(512, 0 + i, mouseX, mov1 + 10, mouseY, mov1 - 10, 0, 250 + i);
    }
    pop();

    push(); //lineas centrales
    //translate(width / 2, height / 2);
    for (y = 150; y <= 350; y += 50) {
      for (x = 150; x <= 350; x += 50) {
        stroke(gris + 50);
        line(random(x, y), gris, 250, 250);
        line(gris, random(x, y), 250, 250);
      }
    }
  }
  /*
  if (mouseIsPressed) {
    for (y = 0; y <= height; y += 50) {
      for (x = 0; x <= width; x += 50) {
        stroke(200);
        // rotate(frameCount / 2);
        scale(1);
        num = 1;
        line(x, y, random(200, 400), random(200, 400));
      }
    }
  }
  */
  if (frameCount >= 1800) {
    background(0);
  }
}
