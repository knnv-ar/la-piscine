/*
  Inspiración conceptual: Luis Benedit
  Título de la Obra: FishTron
  Año: 2025
  Autora: Mercedes Velazquez
  
    Esta obra parte de una estructura cerrada: una vitrina, dentro de esta dos figuras suspendidas (los ‘participantes’), un público y un panel LED. Cuando se presiona la tecla “4” (tecla del símbolo $), aparecen billetes y las figuras internas flotan, como si una cuerda invisible se activara. El trabajo combina influencias de los hábitats experimentales de Luis Benedit y del formato interactivo del reality show Fishtank. Todo el sketch está construido con primitivas 2D, estructuras condicionales y repeticiones para la creación y la activación de un sistema simbólico. Se busca evidenciar una dinámica: alguien observa, alguien “paga”, y entonces el cuerpo se mueve. El resto del tiempo, espera.


*/

//                              Declaración de variables                                       //
let paso = 10; /*distancia entre puntos panel led*/

let activarBilletes = false;

let flotacion = 0; //movimiento vertical de las figuras dentro de la vitrina.

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}
function draw() {
  background(255);

  
  //                               Panel LED                                                   //

  
  
  //      Panel

  fill(0);
  strokeWeight(3);
  stroke(150);

  rect(1, 10, 510, 30);

  //      Leds (puntitos)

  stroke(255);
  for (let y = 15; y < 40; y += paso / 2) {
    for (let x = 6; x < 510; x += paso / 2) {
      ellipse(x, y, 1, 1);
    }
  }

  //      Movimiento Simbolo Dinero $$$

  if (keyIsPressed && key == "4") {
    activarBilletes = true;
    let billetes = frameCount % 512; // Movimiento horizontal del billete y 512 para que no siga eternamente viajando a la derecha
    push();

    translate(billetes, 15); // Mueve el billete dentro del panel

    //         Billete 1
    strokeWeight(1);
    stroke(255);
    fill(0);
    rect(0, 0, 65, 20);

    strokeWeight(2);
    stroke(255);
    translate(25, 0);

    
  beginShape();
    vertex(15, 2);
    vertex(0, 5);
    vertex(5, 10);
    vertex(20, 5);
    vertex(0, 20);
    endShape();

    line(0, 10, 0, 20);
    line(10, 20, 10, 1);

    pop();

    //         Billete 2
    push();

    translate(billetes, 15); // Mueve el billete dentro del panel

    translate(80, 0);
    strokeWeight(1);
    stroke(255);
    fill(0);
    rect(0, 0, 65, 20);

    strokeWeight(2);
    stroke(255);
    translate(25, 0);

    beginShape();
    vertex(15, 2);
    vertex(0, 5);
    vertex(5, 10);
    vertex(20, 5);
    vertex(0, 20);
    endShape();

    line(0, 10, 0, 20);
    line(10, 20, 10, 1);

    pop();

    //Billete 3

    push();

    translate(billetes, 15); // Mueve el billete horizontalmente dentro del panel

    translate(160, 0);
    strokeWeight(1);
    stroke(255);
    fill(0);
    rect(0, 0, 65, 20);

    strokeWeight(2);
    stroke(255);
    translate(25, 0);

    beginShape();
    vertex(15, 2);
    vertex(0, 5);
    vertex(5, 10);
    vertex(20, 5);
    vertex(0, 20);
    endShape();

    line(0, 10, 0, 20);
    line(10, 20, 10, 1);

    pop();
  }

  
  
  
  
  
  //                              Elementos Vitrina/Habitat                                    //

  //                          Ventana

  //(DIA/NOCHE)
  let t = frameCount % 600; //10 segundos por ciclo.
  let transicion = map(sin((TWO_PI * t) / 600), -1, 1, 0, 255);

  //Sol
  fill(0 - transicion);
  noStroke();
  circle(215, 225, 40);

  //Luna
  fill(255, transicion);
  circle(215, 235, 40);


  //Marco ventana
  stroke(0);
  strokeWeight(2);
  noFill();
  quad(148, 147, 148, 293, 273, 285, 273, 155);
  line(215, 153, 215, 288);
  line(150, 220, 273, 220);

  
  
  
  
  
  
  //                              Personas encerradas                                          //

  noStroke();
  fill(0);

  //                            Persona 1
  push();
  translate(0, flotacion);
  beginShape();
  vertex();
  vertex(410, 210);
  vertex(405, 195);
  vertex(390, 200);
  vertex(385, 210);
  vertex(385, 220);
  vertex(390, 225);
  vertex(400, 225);
  vertex(390, 230);
  vertex(400, 250); //ultimo valor cambia forma persona
  vertex(420, 370);
  endShape();

  pop();

  //                           Persona 2
  fill(0);
  push();
  translate(650, -30 + flotacion);
  scale(-1, 1);
  beginShape();
  vertex();
  vertex(410, 210);
  vertex(405, 195);
  vertex(390, 200);
  vertex(385, 210);
  vertex(385, 220);
  vertex(390, 225);
  vertex(400, 225);
  vertex(390, 230);
  vertex(400, 290); //ultimo valor cambia forma persona
  vertex(420, 370);
  endShape();
  pop();


  
  4
  //                  Hilos

  //Persona derecha
  stroke(0);
  strokeWeight(1);
  line(250, 120, 248, 200 + flotacion);
  line(250, 120, 242, 200 + flotacion);
  line(250, 120, 255, 190 + flotacion);

  //Persona Izquierda
  line(395, 125, 404, 230 + flotacion);
  line(395, 125, 409, 230 + flotacion);
  line(395, 125, 400, 230 + flotacion);

  if (keyIsPressed && key == "4") {
    flotacion = sin(frameCount * 0.1) * 5;
  } else {
    flotacion = 0;
  }

  
  
  
  
  
  
  //                                 Vitrina-Habitat                                           //
  stroke(0);
  strokeWeight(0.5);

  line(140, 140, 140, 300);
  line(140, 300, 350, 420);

  // Cara frontal derecha
  line(350, 420, 460, 360);
  line(460, 360, 460, 140);

  // Cara superior frontal
  line(460, 140, 290, 150);
  line(140, 140, 290, 150);

  // Conexiones de profundidad (hacia atrás)
  line(140, 300, 280, 290);
  line(280, 290, 460, 360);
  line(280, 290, 280, 150);

  // Cara trasera
  line(350, 420, 350, 80);
  line(350, 80, 140, 140);
  line(350, 80, 460, 140);

  
  
  
  
  
  
  
  
  
  //                                    Público                                                //
  fill(0);
  //Persona 1

  beginShape();
  vertex(60, 200);
  vertex(80, 210);
  vertex(90, 220);
  vertex(90, 240);
  vertex(100, 250);
  vertex(90, 260);
  vertex(95, 260);
  vertex(90, 275);
  vertex(60, 280);
  vertex(60, 300);
  vertex(10, 100); //valor 10 cambia interesante. (negativo)
  endShape();

  //Persona 2
  push();
  translate(0, 150);
  beginShape();
  vertex(60, 200);
  vertex(80, 210);
  vertex(90, 220);
  vertex(90, 240);
  vertex(100, 250);
  vertex(90, 260);
  vertex(95, 260);
  vertex(90, 275);
  vertex(60, 280);
  vertex(60, 300);
  vertex(10, 100); //valor 10 cambia interesante. (negativo)
  endShape();
  pop();

  //Persona 3
  push();
  translate(50, 100);

  beginShape();
  vertex(60, 200);
  vertex(80, 210);
  vertex(90, 220);
  vertex(90, 240);
  vertex(100, 250);
  vertex(90, 260);
  vertex(95, 260);
  vertex(90, 275);
  vertex(60, 280);
  vertex(60, 300);
  vertex(10, 100); //valor 100 cambia interesante. (negativo)
  endShape();
  pop();
}





