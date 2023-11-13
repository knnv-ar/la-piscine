// oesa
// conjetura de collatz (3n + 1)
// martin julio
// 27-6-23

  /*CONTROLES:
  
  - tecla "w" para reiniciar (sin cambiar valores)
  - tecla "p" para pausar / reanudar
  - tecla "o" para guardar imagen
  
  - tecla "1" para aumentar longitud
  - tecla "2" para disminuir longitud
  
  - tecla "3" para aumentar angulo par
  - tecla "4" para disminuir angulo par
  
  - tecla "5" para aumentar angulo impar
  - tecla "6" para disminuir angulo impar
  
  - tecla "7" para aumentar opacidad fondo
  - tecla "8" para disminuir opacidad fondo
  - tecla "9" para fondo transparente
  
  - tecla "a" para aumentar velocidad
  - tecla "s" para restablecer velocidad por defecto
  - tecla "d" para disminuir velocidad
  
  - tecla "k" para reiniciar, restableciendo valores por defecto
  - click al centro para reiniciar con valores aleatorios
    (solo cambia longitud y angulos)
    
*/

let vel = 12;
let opp = 0;

let anguloPar = 0.24;
let anguloImpar = -0.47;
let long = 1.9;

let num;
let sec_A, sec_B;
let angulo_A, angulo_B;

let p_x, p_y;

let inicio, saltar, ciclo_A, ciclo_B;

let ent_x, ent_y;

function setup() {

  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(150);

  num = 3;
  inicio = true;
  saltar = false;
}

function draw() {

  resetMatrix();
  fill(150, opp);
  noStroke();
  rect(0, 0, width, height);

  // velocidad
  for (let i = 0; i < 100 * vel + 1; i++) {
    // evaluadores estado
    if (Number.MAX_VALUE < sec_A * 3 + 2) saltar = true;
    else saltar = false;

    if (sec_A > 1) ciclo_A = true;
    else ciclo_A = false;

    if (sec_B > 1) ciclo_B = true;
    else ciclo_B = false;

    // nuevo numero
    if (inicio) {
      sec_A = num;
      sec_B = num;
      angulo_A = angulo_B = 0;
      pasos_A = pasos_B = 0;
      p_x = width / 2;
      p_y = p_x; //height * 0.9;
      inicio = false;
    }

    // COLLATZ A
    else if (ciclo_A && !saltar) {
      // caso par
      if (sec_A % 2 == 0) {
        sec_A = sec_A / 2;
        angulo_A += anguloPar;
      }
      // caso impar
      else {
        sec_A = 3 * sec_A + 1;
        angulo_A += anguloImpar;
      }

      resetMatrix();
      translate(p_x, p_y);
      stroke(255, 40);
      line(0, 0, cos(angulo_A) * long, -sin(angulo_A) * long);
      p_x += cos(angulo_A) * long;
      p_y -= sin(angulo_A) * long;
    }

    // COLLATZ B
    else if (ciclo_B && !saltar) {
      // caso par
      if (sec_B % 2 == 0) {
        sec_B = sec_B / 2;
        angulo_B -= anguloPar;
      }
      // caso impar
      else {
        sec_B = 3 * sec_B + 1;
        angulo_B -= anguloImpar;
      }

      resetMatrix();
      translate(p_x, p_y);
      stroke(0, 50);
      line(0, 0, -cos(angulo_B) * long, -sin(angulo_B) * long);
      p_x -= cos(angulo_B) * long;
      p_y -= sin(angulo_B) * long;
    }

    // fin numero
    else {
      num++;
      saltar = false;
      inicio = true;
    }
  }

  // mouse
  if (dist(mouseX, mouseY, 256, 256) < 45) cursor(HAND);
  else cursor(CROSS);
}

////////////////////////////////////////////////

function touchEnded() {
  push();
  resetMatrix();
  if (dist(mouseX, mouseY, 256, 256) < 45) {
    anguloPar = random(2 * PI);
    anguloImpar = random(2 * PI);
    long = random(1.5, 50);
    setup();
  }
  pop();
}

function keyPressed() {
  if (key == "1" || keyCode == 49) long += 0.1;
  if (key == "2" || keyCode == 50) long -= 0.1;

  if (key == "3" || keyCode == 51) anguloPar += 0.02;
  if (key == "4" || keyCode == 52) anguloPar -= 0.02;

  if (key == "5" || keyCode == 53) anguloImpar += 0.02;
  if (key == "6" || keyCode == 54) anguloImpar -= 0.02;

  if (key == "7" || keyCode == 55) {
    if (opp >= 255) opp = 255;
    else opp += 1;
  }
  if (key == "8" || keyCode == 56) {
    if (opp <= 0) opp = 0;
    else opp -= 1;
  }
  if (key == "9" || keyCode == 57) opp = 0;

  if (key == "s" || key == "S") vel = 15;
  if (key == "a" || key == "A") vel += vel / 2;
  if (key == "d" || key == "D") {
    if (vel <= 0) vel = 0;
    else vel -= vel / 2;
  }

  if (key == "w" || key == "W") setup();
  if (key == "k" || key == "K") {
    vel = 15;
    anguloPar = 0.24;
    anguloImpar = -0.47;
    long = 1.9;
    opp = 0;
    setup();
  }

  if (key == "o" || key == "O") save("collatz.png");
  if (key == "p" || key == "P") {
    if (isLooping()) noLoop();
    else loop();
  }
}

const cnv = document.getElementById("defaultCanvas0"); // id del canvas que crea p5
cnv.style.setProperty("touch-action", "manipulation"); // para que no haga zoom tocar doble en el celu
cnv.style.setProperty("user-select", "none"); // para que no seleccione el texto al clickear doble
