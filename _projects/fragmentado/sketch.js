// Trabajo nro 2          AM1
// "Fragmentado" 
// Catalina Scaramuzza    2022

// Para interactuar con la obra simplemente presiona el mouse y deslizalo.

function setup() {
  let canvas = createCanvas(600, 800, WEBGL);
  canvas.parent('div-sketch');
}

function draw() {
  background(212, 212, 80);

  orbitControl();
  noStroke();


  //ojo (pupila)
  push();
  fill(19, 13, 64);
  translate(0, 0, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(0, 0, -100);
  plane(20, 20);
  pop();


  // izq
  push();
  fill(40, 35, 51);
  translate(-10, 0, 20);
  plane(25, 25);
  pop();
  
   push();
  fill(40, 35, 51);
  translate(-10, 0, -120);
  plane(25, 25);
  pop();

  push();
  fill(66, 60, 110);
  translate(-25, -5, 10);
  plane(20, 20);
  pop();

  push();
  fill(66, 60, 110);
  translate(-25, -5, 10);
  plane(20, 20);
  pop(); 
  
  push();
  fill(19, 13, 64);
  translate(-27, -7, 200);
  plane(15, 15);
  pop();

  push();
  fill(90, 77, 120);
  translate(-55, -18, -50);
  plane(25, 25);
  pop();

  push();
  fill(19, 13, 64);
  translate(-60, -23, 0);
  plane(20, 20);
  pop();

  push();
  fill(40, 35, 51);
  translate(-58, -27, 100);
  plane(20, 20);
  pop();

  push();
  fill(185, 196, 126);
  translate(-65, -37, 70);
  plane(20, 20);
  pop();

  push();
  fill(90, 77, 120);
  translate(-70, -45, 50);
  plane(20, 20);
  pop();

  push();
  fill(40, 35, 51);
  translate(-68, -55, 90);
  plane(20, 20);
  pop();

  //derecha

  push();
  fill(66, 60, 110);
  translate(10, -3, 0);
  plane(25, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(20, -5, 40);
  plane(20, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(25, -10, -50);
  plane(30, 30);
  pop();

  push();
  fill(66, 60, 110);
  translate(32, -7, 0);
  plane(20, 20);
  pop();

  push();
  fill(105, 8, 101);
  translate(40, -15, -100);
  plane(25, 25);
  pop();

  push();
  fill(90, 77, 120);
  translate(40, -20, 0);
  plane(20, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(45, -27, 20);
  plane(20, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(49, -33, 30);
  plane(20, 20);
  pop();

  push();
  fill(90, 77, 120);
  translate(53, -37, 50);
  plane(20, 20);
  pop();

  push();
  fill(40, 35, 51);
  translate(47, -40, 150);
  plane(20, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(45, -42, 200);
  plane(20, 20);
  pop();

  //parpado superior

  push(); //esquina izq
  fill(19, 13, 64);
  translate(-200, 0, 0);
  plane(20, 20);
  pop();

  push();
  fill(66, 60, 110);
  translate(-190, -5, 10);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-190, -10, -20);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-165, -15, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(185, 196, 126);
  translate(-160, -25, 30);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-155, -33, 10);
  plane(20, 20);
  pop();
  
   push();
  fill(66, 60, 110);
  translate(-140, -40, 40);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-135, -50, 10);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-125, -58, 10);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-105, -60, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(185, 196, 126);
  translate(-95, -63, 65);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-80, -65, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-70, -65, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-70, -70, 90);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-60, -70, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(37, 35, 51);
  translate(-45, -70, 120);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(-40, -72, 90);
  plane(20, 20);
  pop();
  
   push();
  fill(185, 196, 126);
  translate(-30, -70, 120);
  plane(20, 20);
  pop();
  
   push();
  fill(119, 150, 242);
  translate(-20, -70, 120);
  plane(20, 20);
  pop();

  push(); //esquina dere
  fill(19, 13, 64);
  translate(200, 10, 0);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(0, -75, 80);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(10, -75, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(105, 8, 101);
  translate(20, -70, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(30, -75, 70);
  plane(20, 20);
  pop();

   push();
  fill(19, 13, 64);
  translate(40, -75, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(50, -70, 60);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(55, -67, 60);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(60, -65, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(65, -60, 100);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(75, -55, 120);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(85, -50, 100);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(100, -45, 80);
  plane(20, 20);
  pop();
  
  push();
  fill(57, 133, 109);
  translate(110, -40, 80);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(120, -35, 80);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(130, -30, 80);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(145, -25, 60);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(155, -15, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(160, -10, 60);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(170, 0, 70);
  plane(20, 20);
  pop();
  
  push(); //punta arriba max izq
  fill(19, 13, 64);
  translate(-30, -190, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-10, -190, 10);
  plane(15, 15);
  pop();
  
  push();
  fill(105, 8, 101);
  translate(0, -185, 20);
  plane(15, 15);
  pop();
  
  push();
  fill(66, 60, 110);
  translate(15, -180, 25);
  plane(15, 15);
  pop();
  
  
   push();
  fill(57, 133, 109);
  translate(-40, -175, 40);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-55, -170, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-75, -173, 10);
  plane(20, 20);
  pop();
  
  push();
  fill(90, 77, 120);
  translate(-85, -160, 40);
  plane(20, 20);
  pop();
  
  push();
  fill(105, 8, 101);
  translate(-100, -150, 40);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-110, -130, 90);
  plane(20, 20);
  pop();
  
  push();
  fill(119, 150, 242);
  translate(-120, -110, 120);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-150, -110, 40);
  plane(20, 20);
  pop();
  
  push();
  fill(66, 60, 110);
  translate(-170, -100, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(90, 77, 120);
  translate(-165, -70, 70);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-175, -55, 55);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-187, -40, 30);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-180, -25, 50);
  plane(15, 15);
  pop();
  
  push(); //punta arriba max dere
  fill(19, 13, 64);
  translate(30, -140, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(105, 8, 101);
  translate(20, -135, 20);
  plane(15, 15);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(5, -135, 30);
  plane(15, 15);
  pop();
  
  
    push();
  fill(119, 150, 242);
  translate(40, -135, 0);
  plane(20, 20);
  pop();
  
    push();
  fill(19, 13, 64);
  translate(50, -125, 40);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(60, -120, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(70, -110, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(119, 150, 242);
  translate(80, -110, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(100, -110, 20);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(105, -95, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(66, 60, 110);
  translate(130, -95, 0);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(140, -85, 0);
  plane(20, 20);
  pop();
  
   push();
  fill(119, 150, 242);
  translate(145, -65, 40);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(155, -55, 40);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(170, -40, 10);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(180, -20, 20);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(175, -25, 20);
  plane(20, 20);
  pop();

  push(); //punta abajo max
  fill(19, 13, 64);
  translate(0, 110, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-190, 10, 0);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-165, 15, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(57, 133, 109);
  translate(-145, 20, 80);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-135, 35, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-120, 45, 70);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-105, 50, 100);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-110, 70, 10);
  plane(20, 20);
  pop();
  
  push();
  fill(66, 60, 110);
  translate(-90, 75, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(105, 8, 101);
  translate(-70, 80, 100);
  plane(20, 20);
  pop();

  push();
  fill(19, 13, 64);
  translate(-60, 95, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(66, 60, 110);
  translate(-40, 100, 50);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(-30, 105, 30);
  plane(20, 20);
  pop();
  
  push();
  fill(119, 150, 242);
  translate(-20, 105, 30);
  plane(20, 20);
  pop();
  
  push();
  fill(19, 13, 64);
  translate(15, 100, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(105, 8, 101);
  translate(25, 100, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(35, 100, 30);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(50, 95, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(65, 90, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(70, 75, 100);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(90, 75, 70);
  plane(20, 20);
  pop();
  
   push();
  fill(119, 150, 242);
  translate(100, 70, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(115, 65, 30);
  plane(20, 20);
  pop();
  
   push();
  fill(105, 8, 101);
  translate(120, 55, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(135, 45, 20);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(140, 30, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(155, 20, 25);
  plane(20, 20);
  pop();
  
   push();
  fill(105, 8, 101);
  translate(160, 15, 50);
  plane(20, 20);
  pop();
  
   push();
  fill(19, 13, 64);
  translate(160, 7, 80);
  plane(20, 20);
  pop();
  
  push(); //punta arriba min
  fill(19, 13, 64);
  translate(-10, -85, 0);
  plane(20, 20);
  pop();
}
