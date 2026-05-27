   var angulo = 0.0;
   var desplazamiento = 250;
   var escalar = 100;
   var velocidad = 0.01;

function setup() {
   let canvas = createCanvas(512, 512);
   canvas.parent('div-sketch'); // 
} //
function draw() { //
   background(4); //
  
   push(); //Capa 1
   for (var i = 20; i < 500; i += 10) {
   stroke(25);
   line(i, 20, i, 500);
   }
   pop(); //Fin de capa 1
  
  //Cuadrados
  
   push(); //Capa 2
   if (mouseIsPressed == true) {
    stroke(25); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(40, 108, 70, 70);
   rect(44, 110, 60, 60);
   rect(48, 114, 50, 50);
   rect(52, 118, 40, 40);
   rect(56, 122, 30, 30);
   rect(60, 126, 20, 20);
   rect(64, 130, 10, 10);
   pop(); //Fin de capa 2
  
   push(); //Capa 3
   if (mouseIsPressed == true) {
    stroke(35); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(396, 334, 70, 70);
   rect(400, 338, 60, 60);
   rect(404, 342, 50, 50);
   rect(408, 346, 40, 40);
   rect(412, 350, 30, 30);
   rect(416, 354, 20, 20);
   rect(420, 358, 10, 10);
   pop(); //Fin de capa 3
  
   push(); //Capa 4
   if (mouseIsPressed == true) {
    stroke(45); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(367, 127, 40, 40);
   rect(371, 131, 30, 30);
   rect(375, 135, 20, 20);
   rect(379, 139, 10, 10);
   pop() //Fin de capa 4
   
   push(); //Capa 5
   if (mouseIsPressed == true) {
    stroke(45); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(406, 82, 40, 40);
   rect(410, 86, 30, 30);
   rect(414, 90, 20, 20);
   rect(418, 94, 10, 10);
   pop(); //Fin de capa 5
  
   push(); //Capa 6
   if (mouseIsPressed == true) {
    stroke(45); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(29, 421, 40, 40);
   rect(33, 425, 30, 30);
   rect(37, 429, 20, 20);
   rect(41, 433, 10, 10);
   pop(); //Fin de capa 6
  
   push(); //Capa 7
   if (mouseIsPressed == true) {
    stroke(45); //Gris
  }
  else {
    fill(255); //Blanco
  }
   noFill(); //Sin relleno
   rect(68, 374, 40, 40);
   rect(72, 378, 30, 30);
   rect(76, 382, 20, 20);
   rect(80, 386, 10, 10);
   pop(); //Fin de capa 7
  
   fill(4);
   stroke(255);
   strokeWeight(2);
   // ELIPSES DE ABAJO A LA IZQUIERDA  
   ellipse(100, 490, 150, 30);
   ellipse(120, 485, 150, 30);
   ellipse(140, 475, 150, 30);
   ellipse(160, 465, 150, 30);
   ellipse(180, 455, 150, 30);
   ellipse(200, 445, 150, 30);
   ellipse(220, 435, 150, 30);
   ellipse(240, 425, 150, 30);
   ellipse(260, 415, 150, 30);
   
   // Elipse flotando 1
   push(); //Capa 8
   var y1 = desplazamiento + sin(angulo) * escalar;
   ellipse(259, y1, 60, 30);
   angulo += velocidad;
   pop(); //Fin de capa 8
  
  //ELIPSES DE ARRIBA A LA IZQUIERDA
   ellipse(100, 24, 150, 30);
   ellipse(120, 34, 150, 30);
   ellipse(140, 44, 150, 30);
   ellipse(160, 54, 150, 30);
   ellipse(180, 64, 150, 30);
   ellipse(200, 74, 150, 30);
   ellipse(220, 84, 150, 30);
   ellipse(240, 94, 150, 30);
   ellipse(260, 104, 150, 30);
  
   // Elipse flotando 2
   push(); //Capa 9
   var y2= desplazamiento + sin(angulo + 0.50) * escalar;
   ellipse(258, y2, 60, 30);
   angulo += velocidad;
   pop(); //Fin de capa 9
  
  //En la tres línes si se pasa el mouse a la derecha, empiezan a moverse, y si se pasa a la izquierda se detienen.
  
  //Linea 1
  push(); //Capa 10
  strokeWeight(1);
  var mx = mouseX / 185;
  var desplazamientoA = random(-mx, mx);
  var desplazamientoB = random(-mx, mx);
  line(185 + desplazamientoA, 104, 185 - desplazamientoB, 413);
  pop(); //Fin de la capa 10
  
  //Linea 2
  push(); //Capa 11
  strokeWeight(1);
  var mx = mouseX / 185;
  var desplazamientoC = random(-mx, mx);
  var desplazamientoD = random(-mx, mx);
  line(334 + desplazamientoC, 104, 334 - desplazamientoD, 413);
  pop(); //Fin de la capa 11
  
  //Linea 3
  push(); //Capa 12
  strokeWeight(1);
  var mx = mouseX / 185;
  var desplazamientoE = random(-mx, mx);
  var desplazamientoF = random(-mx, mx);
  line(258 + desplazamientoE, 89, 258 - desplazamientoF, 429);
  pop(); //Fin de la capa 12
  
  //FIN.
}