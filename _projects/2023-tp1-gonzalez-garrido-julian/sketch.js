//------------------------IBIDEM-------------------------//

var t = 4.5;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noStroke();
  numeroAleatorio = noise(2, 8) * 12;
}

function draw() {
  background(5, 5); // rastros

  //contador cantidad de puntos

  var puntos = frameCount;

  if (puntos >= 400) {
    frameCount = 0.2;
    numeroAleatorio = noise(2, 8) * 12;
  }

  /////////////////grilla_01///////////////

  for (x = 0; x <= 200; x = x + 2500 / puntos) {
    for (y = 0; y <= 200; y = y + 2500 / puntos) {
      // fill("#8AB8DD");

      // movimiento particulas
      var a = x + 300 * cos(30 * numeroAleatorio * (t / 40));
      var b = y + 300 * sin(10 * numeroAleatorio * (t * 0.1));

      ellipse(a, b, 4); // dibujar partícula
    }
  }
  t = t + 0.009; // actualizar tiempo
}

/*
////////grilla 02///////////////////////

 fill ("#black")
  for (x = 0; x <= 400; x = x + 6000/(puntos)) {
    for (y = 0; y <= 400; y = y +6000/(puntos)) {
     // fill("#8AB8DD");
      
      anguloX = (PI * 5, 0, (300));
      anguloY = (PI / 5, 0, (600));

      // movimiento particulas
      a = x + 120 * PI * cos(-30 * numeroAleatorio * (-t /-40 ));
      b = y + 150 * PI * sin(-10 * numeroAleatorio * (-t * -0.1 ));

      ellipse(a, b, 4); // dibujar partícula
    }
   }
   
   ///////////////////////////////////////////
   
         
      //var anguloX = (PI * 5, 0, (300));
      //var anguloY = (PI / 5, 0, (600));

 */
