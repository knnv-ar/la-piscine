//título: "qr for me"
let font, // variable para texto
  fontsize = 40; //tamaño de fuente
var angulo = 0; //variable para la rotación de las figuras
var entro = true;
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  background(200);
  
  //texto de inicio
  textFont();
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  text("Bienvenidx", width / 2, 240);

  textSize(fontsize / 2);
  text('Presione "Enter" para simular el Qr', width / 2, 280);
  text("que le gustaría ser", width / 2, 300);
  
}

function draw() {
  
  if (keyCode === ENTER) {
    //cuadrados negros y blancos de los extremos
    //cuadrado pequeño superior izquierdo
    if(entro){
      background(200);
      entro = false; //booleana 
    }
    push();
    noStroke();
    fill(255);
    rect(55, 54, 40, 40);

    fill(0);
    rect(55, 54, 30, 30);

    fill(255);
    rect(55, 54, 20, 20);

    fill(0);
    rect(55, 54, 10, 10);

    pop();

    //cuadrado pequeño superior derecho
    push();
    noStroke();
    fill(255);
    rect(455, 54, 40, 40);

    fill(0);
    rect(455, 54, 30, 30);

    fill(255);
    rect(455, 54, 20, 20);

    fill(0);

    rect(455, 54, 10, 10);
    pop();
    //cuadro pequeño inferior izquierdo

    noStroke();
    fill(255);
    rect(55, 454, 40, 40);

    fill(0);
    rect(55, 454, 30, 30);

    fill(255);
    rect(55, 454, 20, 20);

    fill(0);
    rectMode(RADIUS);
    rect(55, 454, 10, 10);

    //cuadrado pequeño inferior derecho
    noStroke();
    fill(255);
    rect(455, 454, 40, 40);

    noStroke();
    fill(0);
    rect(455, 454, 30, 30);

    noStroke();
    fill(255);
    rect(455, 454, 20, 20);

    noStroke();
    fill(0);
    rect(455, 454, 10, 10);

    //cuadrado grande superior izquierdo
    push();
    noStroke();
    fill(255);
    rectMode(RADIUS);
    rect(116, 114, 60, 60);

    fill(0);
    rect(116, 114, 50, 50);

    fill(255);
    rect(116, 114, 40, 40);

    fill(0);
    rect(116, 114, 30, 30);

    fill(255);
    rect(116, 114, 20, 20);

    noStroke();
    fill(0);
    rect(116, 114, 10, 10);

    //cuadrado grande superior derecho
    noStroke();
    fill(255);
    rectMode(RADIUS);
    rect(394, 115, 60, 60);

    fill(0);
    rect(394, 115, 50, 50);

    fill(255);
    rect(394, 115, 40, 40);

    fill(0);
    rect(394, 115, 30, 30);

    fill(255);
    rect(394, 115, 20, 20);

    fill(0);
    rect(394, 115, 10, 10);

    //cuadrado grande inferior izquierdo
    noStroke();
    fill(255);
    rect(115, 395, 60, 60);

    fill(0);
    rect(115, 395, 50, 50);

    fill(255);
    rect(115, 395, 40, 40);

    fill(0);
    rect(115, 395, 30, 30);

    fill(255);
    rect(115, 395, 20, 20);

    fill(0);
    rect(115, 395, 10, 10);
    //cuadrado grande inferior derecho
    noStroke();
    fill(255);
    rect(395, 397, 60, 60);

    fill(0);
    rect(395, 397, 50, 50);

    fill(255);
    rect(395, 397, 40, 40);

    fill(0);
    rect(395, 397, 30, 30);

    fill(255);
    rect(395, 397, 20, 20);

    fill(0);
    rect(395, 397, 10, 10);

    //cuadrados y rotaciones
    //cuadrado blanco del centro
    push();
    noStroke();
    fill(0);
    translate(width / 2, height / 2);
    rotate(angulo);
    rectMode(RADIUS);
    rect(0, 0, 110, 110);
    pop();

    push();
    noStroke();
    fill(200, 70);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 2);
    rect(0, 0, 100, 100);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 90,90);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 2);
    rectMode(RADIUS);
    rect(0, 0, 85, 85);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 75, 75);
    pop();

    push();
    noStroke();
    fill(200,70);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 2);
    rect(0, 0, 65, 65);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 55, 55);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo);
    rect(0, 0, 45, 45);
    pop();

    push();
    noStroke();
    fill(0);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(angulo);
    rect(0, 0, 35, 35);
    pop();

    push();
    noStroke();
    fill(200);
    rectMode(RADIUS);
    translate(width / 2, height / 2);
    rotate(-angulo / 2);
    rect(0, 0, 25, 25);
    pop();

    angulo = angulo + 0.01; //velocidad de rotación

    //para que no se desplegue el menu del botón derecho
    document.oncontextmenu = function () {
      return false;
    };


    // mantener presionado el botón izquierdo o derecho para colorar el fondo del lienzo.
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        noStroke();
        fill(random(256)); //elige un color de la lista random
        rect(mouseX, mouseY, 10 + random(10), 10 + random(10));
        //dibujar rectangulos en diferentes tamaños con diferentes matices de grises.
      }
    }

    if (mouseIsPressed) {
      if (mouseButton == RIGHT) {
        noStroke();
        fill(random(256)); //elige un color de la lista random
        rect(mouseX, mouseY, 10 + random(60), 20 + random(60));
        //dibujar rectangulos en tamaños más pequeños con diferentes matices de grises.
      }
    }
  }
}
