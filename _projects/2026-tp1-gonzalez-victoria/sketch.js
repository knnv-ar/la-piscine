function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

//============== FONDO DINÁMICO ========================//


let angulo = 0.0;

  function draw() {
  let valorSin = sin(angulo); //oscila entre -1 y 1 a la velocidad de let angulo

  let gris = map(valorSin, -1, 1, 0, 255); //cambiamos con map a colores
  background(gris);
  
  angulo += 0.002; //regula la velocidad cuando se mueve


  stroke(225);
  noFill();

  //========= BUCLE PARA REPETIR EL DIBUJO =========//

let distancia = 5; //para que la onda se multiplique
    
for (let i = -1; i <= 1; i++) {
    push();

  // asi cada capa se mueve distinto en velocidad y en cercanía
  
    let reboteX = sin(frameCount * 0.05 + i * 2) * (distancia * i);
    let reboteY = cos(frameCount * 0.08 + i * 2) * (distancia * i);
    
    // movemos el nuevo punto de origen
    translate(reboteX, reboteY);

    dibujo();

    pop();
  }

  // ========= VECTORES ========= //

  let v = createVector(random(-50, 50), random(-50, 50));
  let v2 = createVector(random(-20, 20), random(-20, 20));
  let v3 = createVector(random(-45, 45), random(-45, 45));
  let v4 = createVector(random(-60, 60), random(-60, 60));
  let v5 = createVector(random(-30, 30), random(-30, 30));
  let v6 = createVector(random(-10, 10), random(-10, 10));
  let v7 = createVector(random(-70,70), random(-70,70));

  stroke(100);

  line(230, 225, 230 + v.x, 225 + v.y);
  line(230, 225, 230 + v2.x, 225 + v2.y);

  stroke(180);

  line(230, 225, 230 + v3.x, 225 + v3.y);
  line(230, 225, 230 + v4.x, 225 + v4.y);

  stroke(225);

  line(230, 225, 230 + v5.x, 225 + v5.y);
  line(230, 225, 230 + v6.x, 225 + v6.y);

  stroke(0);
  line(230, 225, 230 + v7.x, 225 + v7.y);
}

function dibujo() {
  // ========= PERA ========= //
  push();

  strokeCap(ROUND);
  strokeWeight(0.5);

  line(146, 261, 176, 306); //linea abajo de arriba a abajo
  line(146, 261, 176, 236); //linea arriba de abajo a arriba

  // ========= NARIZ ========= //

  line(181, 236, 166, 216); //agujeros de abajo a arriba
  line(166, 216, 191, 211); //puente abajo a arriba

  // ========= CUELLO ========= //

  line(176, 306, 166, 351); //de arriba abajo
  bezier(271, 301, 246, 326, 236, 361, 271, 376); //punto arriba y punto abajo

  // ========= CABEZA ========= //

  bezier(191, 211, 286, 71, 446, 271, 261, 326); //punto de la frente y controles, controles y punto de la nuca

  // ========= MANDIBULA ========= //

  line(196, 311, 241, 331); //linea mas larga
  line(241, 331, 261, 306); //linea corta

  // ========= OREJA ========= //

  bezier(286, 251, 286, 286, 286, 281, 261, 286);

  pop();
}
