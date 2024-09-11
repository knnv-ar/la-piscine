// Declaración de variables
let speed = 7; //+ o - velocidad de la ellipse giratoria. Si le sumo velocidad, tarda en llenarse más. CAMBIAR A 0.9 PARA PRESENTACIÓN
// Para las ellipses en movimiento
let dist = 10;
let dist2 = 30;
let dist3 = 40;
let dist4 = 50;
let dist6 = 60;
let dist7 = 20;
let dist8 = 70;
let dist9 = -10;
let dist10 = 0;

function setup() {
  let canvas = createCanvas(512,512,WEBGL);
  canvas.parent('div-sketch');
  background(0); //fondo negro. Si lo pongo acá, se agregan estrellas.
}

function draw() {
  let x = 256;
  let y = 256;
  let diámetro = 30;

  //CIELO ESTRELLADO. CAPA 1 (ÚLTIMA)
  push();
  for (let i = 0; i < 5; i++) {
    //cuanto - pongo, se agregan al lienzo más lento
    fill(255, 100); //estrellas blancas (500,100-->transparencia)
    ellipse(random(width), random(height), random(0, 3));
  }
  pop();
  
  //ELLIPSES CENTRALES
  push();
  stroke(255); // Color del borde
  strokeWeight(1); // Grosor del borde
  noFill(); // Sin relleno para las elipses principales
  for (let i = 0; i < 9; i++) {
    strokeWeight(0.01);
    ellipse(x, y, diámetro, diámetro);
    diámetro += 20; //AUMENTA el tamaño de las elipses grandes
    
    //2️⃣Creé las ellipses pequeñas que dibujan su recorrido.
    if (i === 1) {
      let pointX = x + sin(frameCount * speed) * 30;
      let pointY = y + cos(frameCount * speed) * 20;
      //el valor de * cambia el lugar de la bola
      noFill();
    }
    // Nueva elipse a una distancia fija
    let angle = frameCount * speed;
    let angle2 = angle + PI; // Ángulo opuesto (180 grados)
    let pointX2 = x + sin(angle2) * (20 + dist);//Sumamos la distancia al radio
    let pointY2 = y + cos(angle2) * (20 + dist);
    ellipse(pointX2, pointY2, 10);

    // Nuevas elipses adicionales
    let angle3 = angle + PI / 2; // 90 grados
    let pointX3 = x + sin(angle3) * (20 + dist2);
    let pointY3 = y + cos(angle3) * (20 + dist2);
    ellipse(pointX3, pointY3, 10);

    let angle4 = angle + (3 * PI) / 2; // 270 grados
    let pointX4 = x + sin(angle4) * (20 + dist3);
    let pointY4 = y + cos(angle4) * (20 + dist3);
    ellipse(pointX4, pointY4, 10);

    let angle5 = angle + PI / 4; // 45 grados
    let pointX5 = x + sin(angle5) * (20 + dist4);
    let pointY5 = y + cos(angle5) * (20 + dist4);
    ellipse(pointX5, pointY5, 10);

    let angle6 = angle + PI / 6; //
    let pointX6 = x + sin(angle6) * (20 + dist6);
    let pointY6 = y + cos(angle6) * (20 + dist6);
    ellipse(pointX6, pointY6, 10);

    let angle7 = angle + PI / 7; //
    let pointX7 = x + sin(angle7) * (20 + dist7);
    let pointY7 = y + cos(angle7) * (20 + dist7);
    ellipse(pointX7, pointY7, 10);

    let angle8 = angle + PI / 8; //
    let pointX8 = x + sin(angle8) * (20 + dist8);
    let pointY8 = y + cos(angle8) * (20 + dist8);
    ellipse(pointX8, pointY8, 10);

    let angle9 = angle + PI / 9; //
    let pointX9 = x + sin(angle9) * (20 + dist9);
    let pointY9 = y + cos(angle9) * (20 + dist9);
    ellipse(pointX9, pointY9, 10);

    let angle10 = angle + PI / 10; //
    let pointX10 = x + sin(angle10) * (20 + dist10);
    let pointY10 = y + cos(angle10) * (20 + dist10);
    ellipse(pointX10, pointY10, 10);
  }
  pop();

  //picos del centro
  push();
  if (mouseIsPressed === true) {
    noFill();
    stroke(255);
    strokeWeight(0.01);
    triangle(180, 203, 0, 0, 185, 190); // Esquina 1
    triangle(339, 205, 512, 0, 326, 190); // Esquina 2
    triangle(320, 325, 512, 512, 335, 305); // Esquina 3
    triangle(175, 310, 0, 512, 187, 320); // Esquina 4
    //𓇮 que van de la esquina izq arriba a la esquina izq abajo
    triangle(179, 200, 0, 50, 174, 210);
    triangle(172, 210, 0, 100, 167, 220);
    triangle(167, 220, 0, 150, 165, 235);
    triangle(162, 235, 0, 200, 160, 250);
    triangle(160, 250, 0, 250, 160, 260);
    triangle(160, 260, 0, 300, 162, 270);
    triangle(160, 271, 0, 350, 164, 285);
    triangle(165, 285, 0, 400, 170, 295);
    triangle(170, 295, 0, 450, 175, 310);
    //𓇮 de izq abajo a der abajo
    triangle(188, 320, 100, 512, 200, 335);
    triangle(200, 335, 150, 512, 215, 340);
    triangle(215, 343, 200, 512, 230, 348);
    triangle(230, 349, 250, 512, 250, 350);
    triangle(250, 350, 290, 512, 270, 350);
    triangle(270, 350, 350, 512, 290, 345);
    triangle(290, 345, 401, 512, 305, 335);
    triangle(305, 335, 450, 512, 320, 325);
    //𓇮 de der abajo a der arriba
    triangle(345, 290, 512, 450, 335, 305);
    triangle(345, 290, 512, 400, 350, 275);
    triangle(350, 256, 512, 320, 350, 275);
    triangle(350, 265, 512, 250, 350, 250);
    triangle(350, 250, 512, 200, 350, 235);
    triangle(350, 235, 512, 150, 345, 220);
    triangle(345, 220, 512, 100, 335, 205);
    //triangle(345, 205, 512, 50, 350, 190);
    //𓇮 de dere arriba a izq arriba
    triangle(320, 185, 450, 0, 328, 190);
    triangle(320, 185, 400, 0, 310, 179);
    triangle(295, 170, 350, 0, 310, 177);
    triangle(295, 168, 300, 0, 275, 162);
    triangle(250, 162, 255, 0, 275, 162);
    triangle(230, 165, 200, 0, 250, 160);
    triangle(220, 170, 150, 0, 230, 165);
    triangle(200, 180, 100, 0, 220, 170);
    triangle(185, 190, 50, 0, 200, 180);
    pop();
    //poner que deje de aparecer
  }

  //TRANSLADAR CIRCULOS A OTRAS ZONAS
  //REPETICIÓN 1
   if (keyIsPressed === true) {
  push();
  translate(150, 150);
  stroke(255); // Color del borde
  strokeWeight(0.1); // Grosor del borde
  noFill(); // Sin relleno para las elipses principales
  // Nueva elipse a una distancia fija
  let angle = frameCount * speed; // Declaramos la variable angle al inicio del bloque if
  let angle2 = angle + PI; // Ángulo opuesto (180 grados)
  let pointX2 = x + sin(angle2) * (20 + dist); // Sumamos la distancia al radio
  let pointY2 = y + cos(angle2) * (20 + dist);
  ellipse(pointX2, pointY2, 10);
  let angle3 = angle + PI / 2; // 90 grados
  let pointX3 = x + sin(angle3) * (20 + dist2);
  let pointY3 = y + cos(angle3) * (20 + dist2);
  ellipse(pointX3, pointY3, 10);
  let angle4 = angle + (3 * PI) / 2; // 270 grados
  let pointX4 = x + sin(angle4) * (20 + dist3);
  let pointY4 = y + cos(angle4) * (20 + dist3);
  ellipse(pointX4, pointY4, 10);
  let angle5 = angle + PI / 4; // 45 grados
  let pointX5 = x + sin(angle5) * (20 + dist4);
  let pointY5 = y + cos(angle5) * (20 + dist4);
  ellipse(pointX5, pointY5, 10);
  let angle6 = angle + PI / 6; //
  let pointX6 = x + sin(angle6) * (20 + dist6);
  let pointY6 = y + cos(angle6) * (20 + dist6);
  ellipse(pointX6, pointY6, 10);
  let angle7 = angle + PI / 7; //
  let pointX7 = x + sin(angle7) * (20 + dist7);
  let pointY7 = y + cos(angle7) * (20 + dist7);
  ellipse(pointX7, pointY7, 10);
  let angle8 = angle + PI / 8; //
  let pointX8 = x + sin(angle8) * (20 + dist8);
  let pointY8 = y + cos(angle8) * (20 + dist8);
  ellipse(pointX8, pointY8, 10);
  let angle9 = angle + PI / 9; //
  let pointX9 = x + sin(angle9) * (20 + dist9);
  let pointY9 = y + cos(angle9) * (20 + dist9);
  ellipse(pointX9, pointY9, 10);
  let angle10 = angle + PI / 10; //
  let pointX10 = x + sin(angle10) * (20 + dist10);
  let pointY10 = y + cos(angle10) * (20 + dist10);
  ellipse(pointX10, pointY10, 10);
  pop();
  
    //REPETICIÓN 2
  push();
  translate(150,-150);
  stroke(255);
  strokeWeight(0.1);
  noFill();
  let angleR2 = frameCount * speed;
  let angle20 = angle + PI;
  let pointX20 = x + sin(angle2) * (20 + dist); 
  let pointY20 = y + cos(angle2) * (20 + dist);
  ellipse(pointX2, pointY2, 10);
  let angle30 = angle + PI / 2; // 90 grados
  let pointX30 = x + sin(angle3) * (20 + dist2);
  let pointY30 = y + cos(angle3) * (20 + dist2);
  ellipse(pointX3, pointY3, 10);
  let angle40 = angle + (3 * PI) / 2; // 270 grados
  let pointX40 = x + sin(angle4) * (20 + dist3);
  let pointY40= y + cos(angle4) * (20 + dist3);
  ellipse(pointX4, pointY4, 10);
  let angle50 = angle + PI / 4; // 45 grados
  let pointX50 = x + sin(angle5) * (20 + dist4);
  let pointY50 = y + cos(angle5) * (20 + dist4);
  ellipse(pointX5, pointY5, 10);
  let angle60 = angle + PI / 6; //
  let pointX60 = x + sin(angle6) * (20 + dist6);
  let pointY60= y + cos(angle6) * (20 + dist6);
  ellipse(pointX6, pointY6, 10);
  let angle70 = angle + PI / 7; //
  let pointX70 = x + sin(angle7) * (20 + dist7);
  let pointY70 = y + cos(angle7) * (20 + dist7);
  ellipse(pointX7, pointY7, 10);
  let angle80 = angle + PI / 8; //
  let pointX80 = x + sin(angle8) * (20 + dist8);
  let pointY80 = y + cos(angle8) * (20 + dist8);
  ellipse(pointX8, pointY8, 10);
  let angle90 = angle + PI / 9; //
  let pointX90 = x + sin(angle9) * (20 + dist9);
  let pointY90 = y + cos(angle9) * (20 + dist9);
  ellipse(pointX9, pointY9, 10);
  let angle100 = angle + PI / 10; //
  let pointX100 = x + sin(angle10) * (20 + dist10);
  let pointY100 = y + cos(angle10) * (20 + dist10);
  ellipse(pointX10, pointY10, 10);
  pop();
  
  //REPETICIÓN 3
 push();
  translate(-150,-150);
  stroke(255); 
  strokeWeight(0.1); 
  noFill(); 
  let angleR3 = frameCount * speed;
  let angle200 = angle + PI; 
  let pointX200 = x + sin(angle2) * (20 + dist);
  let pointY200 = y + cos(angle2) * (20 + dist);
  ellipse(pointX2, pointY2, 10);
  let angle300 = angle + PI / 2; 
  let pointX300 = x + sin(angle3) * (20 + dist2);
  let pointY300 = y + cos(angle3) * (20 + dist2);
  ellipse(pointX3, pointY3, 10);
  let angle400 = angle + (3 * PI) / 2;
  let pointX400 = x + sin(angle4) * (20 + dist3);
  let pointY400= y + cos(angle4) * (20 + dist3);
  ellipse(pointX4, pointY4, 10);
  let angle500 = angle + PI / 4;
  let pointX500 = x + sin(angle5) * (20 + dist4);
  let pointY500 = y + cos(angle5) * (20 + dist4);
  ellipse(pointX5, pointY5, 10);
  let angle600 = angle + PI / 6;
  let pointX600 = x + sin(angle6) * (20 + dist6);
  let pointY600= y + cos(angle6) * (20 + dist6);
  ellipse(pointX6, pointY6, 10);
  let angle700 = angle + PI / 7; 
  let pointX700 = x + sin(angle7) * (20 + dist7);
  let pointY700 = y + cos(angle7) * (20 + dist7);
  ellipse(pointX7, pointY7, 10);
  let angle800 = angle + PI / 8; //
  let pointX800 = x + sin(angle8) * (20 + dist8);
  let pointY800 = y + cos(angle8) * (20 + dist8);
  ellipse(pointX8, pointY8, 10);
  let angle900 = angle + PI / 9; //
  let pointX900 = x + sin(angle9) * (20 + dist9);
  let pointY900 = y + cos(angle9) * (20 + dist9);
  ellipse(pointX9, pointY9, 10);
  let angle1000 = angle + PI / 10; //
  let pointX1000 = x + sin(angle10) * (20 + dist10);
  let pointY1000 = y + cos(angle10) * (20 + dist10);
  ellipse(pointX10, pointY10, 10);
  pop();
  
    //REPETICIÓN 4
 push();
  translate(-150,150);
  stroke(255);
  strokeWeight(0.1);
  noFill();
  let angleR4 = frameCount * speed;
  let angle2000 = angle + PI; // Ángulo opuesto (180 grados)
  let pointX2000 = x + sin(angle2) * (20 + dist);
  let pointY2000 = y + cos(angle2) * (20 + dist);
  ellipse(pointX2, pointY2, 10);
  let angle3000 = angle + PI / 2; // 90 grados
  let pointX3000 = x + sin(angle3) * (20 + dist2);
  let pointY3000 = y + cos(angle3) * (20 + dist2);
  ellipse(pointX3, pointY3, 10);
  let angle4000 = angle + (3 * PI) / 2; // 270 grados
  let pointX4000 = x + sin(angle4) * (20 + dist3);
  let pointY4000= y + cos(angle4) * (20 + dist3);
  ellipse(pointX4, pointY4, 10);
  let angle5000 = angle + PI / 4; // 45 grados
  let pointX5000 = x + sin(angle5) * (20 + dist4);
  let pointY5000 = y + cos(angle5) * (20 + dist4);
  ellipse(pointX5, pointY5, 10);
  let angle6000 = angle + PI / 6; //
  let pointX6000 = x + sin(angle6) * (20 + dist6);
  let pointY6000= y + cos(angle6) * (20 + dist6);
  ellipse(pointX6, pointY6, 10);
  let angle7000 = angle + PI / 7; //
  let pointX7000 = x + sin(angle7) * (20 + dist7);
  let pointY7000 = y + cos(angle7) * (20 + dist7);
  ellipse(pointX7, pointY7, 10);
  let angle8000 = angle + PI / 8; //
  let pointX8000 = x + sin(angle8) * (20 + dist8);
  let pointY8000 = y + cos(angle8) * (20 + dist8);
  ellipse(pointX8, pointY8, 10);
  let angle9000 = angle + PI / 9; //
  let pointX9000 = x + sin(angle9) * (20 + dist9);
  let pointY9000 = y + cos(angle9) * (20 + dist9);
  ellipse(pointX9, pointY9, 10);
  let angle10000 = angle + PI / 10; //
  let pointX10000 = x + sin(angle10) * (20 + dist10);
  let pointY10000 = y + cos(angle10) * (20 + dist10);
  ellipse(pointX10, pointY10, 10);
  pop();
   }
}
