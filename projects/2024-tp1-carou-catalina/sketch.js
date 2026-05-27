let spacePressed = false; // Variable para controlar si la barra espaciadora está presionada

function setup() {
  let canvas = createCanvas(512, 512,); // Crea una canva de 512x512 píxeles
  canvas.parent('div-sketch');
  background(40); // Establece el color de fondo a oscuro
  frameRate(2); // Establece el framerate a 2 FPS
}

function draw() { 
  background(40); // Borra el fondo en cada fotograma

  // Código para dibujar los cuadrados aleatorios
  if (!spacePressed) { 
    //lineas
    stroke(150);
    strokeWeight(5);
    line(380, 475, 486, 475); //1
    line(380, 475, 378, 420); //2
    line(377, 420, 300, 420); //3
    line(300, 418, 300, 350); //4
    line(300, 350, 170, 350); //5
    line(169, 250, 170, 350); //6 
    line(169, 250, 155, 250); //7
    line(155, 250, 155, 95); //8
    line(155, 95, 280, 95); //9
    line(280, 95, 280, 270); //10
    line(280, 270, 355, 270); //11
    line(355, 399, 355, 270); //12
    line(275, 399, 355, 399); //13
    line(275, 399, 275, 489); //14
    line(179, 489, 275, 489); //15
    line(179, 489, 179, 465); //16
    line(245, 465, 179, 465); //17
    line(245, 465, 246, 410); //18
    line(210, 410, 245, 410); //19
    line(210, 410, 210, 320); //20
    line(200, 320, 210, 320); //21
    line(200, 320, 200, 220); //22
    line(200, 220, 140, 220); //23
    line(140, 200, 140, 220); //24
    line(200, 200, 140, 200); //25
    line(200, 200, 200, 40); //26
    line(200, 40, 320, 40); //27
    line(320, 225, 320, 40); //28
    line(320, 225, 250, 225); //29
    line(250, 299, 250, 225); //30
    line(85, 299, 250, 299); //31
    line(85, 299, 86, 370); //32
    line(85, 370, 30, 370); //33
    line(30, 370, 30, 429); //34
    line(85, 428, 30, 429); //35
    line(85, 428, 85, 490); //36
    line(85, 490, 117, 490); //37
    line(117, 460, 117, 490); //38
    line(85, 459, 145, 459); //39
    line(145, 459, 145, 430); //40
    line(85, 428, 145, 428); //41
  } else {
    // Si la barra espaciadora está presionada, dibuja los cuadrados grises
    for (let i = 0; i < 20; i++)  {
      let size = random(1, 150); // Tamaño aleatorio de los cuadrados entre 1 y 150 píxeles
      let x = random(width); // Posición x aleatoria en el lienzo
      let y = random(height); // Posición y aleatoria en el lienzo
      let gray = random(255); // Color gris aleatorio
       

      fill(gray); // Rellena con un color gris aleatorio
      noStroke(); // No dibuja bordes
      square(x, y, size); // Dibuja el cuadrado
    }
  }

  // Aplica un velo semitransparente negro sobre todo el lienzo
  fill(0, 0, 0, 5); // Color negro con baja opacidad
  rect(0, 0, width, height); // Dibuja un rectángulo que cubre todo el lienzo
}

function keyPressed() {
  if (key === ' ') {
    spacePressed = !spacePressed; // Alterna entre mostrar y ocultar las líneas
  }
 
}