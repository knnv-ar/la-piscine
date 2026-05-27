//DECLARO VARIABLES GLOBALES 
let rotar1_3 = 0;
let rotar1_4 = 0;
let rotar2_2 = 0;
let rotar3_3 = 0;
//let rotar3_4 = 0; 
let rotar = false;

function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
}

function draw() {
  background(256);
  
    //reorganizacion

  //LINEA SUPERIOR
  push();
  fill(256);
  strokeWeight(4);
  rect(15, 15, 150, 150); // N°1
  rect(180, 15, 150, 150); // N°2
  rect(345, 15, 150, 150); // N°3
  
  //rect N° 1
  rect(30,30,120,120);  // N°1 - 1.2
  rect (50,50,80,80);   // N°1 - 1.3
  rect (65,65,50,50);   // N°1 - 1.4
  // rect N°2
  push();
  rect (195,30,120,120); //N°2 - 2.2
  rect (215,50,80,80);    //N°2 - 2.3
  fill(0);
  rect (230,65,50,50);
  pop();
  //rect N°3
  rect (360,30,120,120); // N°3.2
  rect (380,50,80,80);   //N°3.3
  rect (395,65,50,50);   //N°3.4
  pop();

  
  //LINEA DEL MEDIO
  push();
  strokeWeight(4);
  fill(256)
  rect(15, 180, 150, 150); // N°1
  rect(180, 180, 150, 150); // N°2
  rect(345, 180, 150, 150); // N°3
  
  //rect N°1 
  push();
  rect(30,195,120,120);   //N°1.2
  push();
  translate(90, 255); // Mueve el origen al centro del rectángulo
  rotate(rotar1_3);   // Rota el rect N° 1.3
  rect(-40, -40, 80, 80);  //  rect centrado 
  pop();

  push();
  translate(90, 270); // Mueve el origen al centro del rectángulo
  rotate(rotar1_4);   // Rota el rect N°1.4
  fill(0);
  rect(-15, -15, 30, 30);  // rect N°1.4 gira en sintonia con el rect N°1.3
  pop();

  pop();
  
  //rect N°2
  rect (195,195,120,120);  //N°2.2
  //rect N°3
  rect(360,195,120,120); // N°3.2
   push();
  translate(420, 255); // Mueve el origen al centro del rectángulo
  rotate(rotar3_3);   // Rota el rect 3.3
  rect(-40, -40, 80, 80);  // rect centrado 
  pop();
 // rect (380,215,80,80);  // N°3.3
  fill(0);
  rect (405,240,30,30);  // N°3.4

  
  //LINEA INFERIOR
  push();
  fill (256);
  rect(15, 345, 150, 150); // N°1
  rect(180, 345, 150, 150); // N°2
  rect(345, 345, 150, 150); // N°3
  pop();
  

  //rect N°1
  rect(30,360,120,120); // N°1.2
  //rect N°2
  rect(195,360,120,120); //N°2.2
  //rect N°3
  rect (360,360,120,120);
 
   // Incrementa el ritmo de rotación
  if (rotar) {
    rotar1_3 += 0.05;
    rotar1_4 += 0.05;
    rotar2_2 += 0.05;
    rotar3_3 += 0.05;
 //  rotar3_4 += 0.05; 
  }
  
  if (mouseIsPressed) {
    rotar = !rotar;   //alterna la rotacion al presionar el mouse, invierto valor
  }
}

