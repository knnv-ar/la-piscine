function setup() {
  createCanvas(512, 512);
  background(18);
  x = width / 2;
  y = height / 2;
}

function draw() {
  let direccion = random(4);

  if (direccion < 1) {
    x += 15;
  } else if (direccion < 2) {
    x -= 15;
  } else if (direccion < 3) {
    y += 15;
  } else if (direccion < 4) {
    y -= 15;
}

  // Limitar el punto para que no se salga de la pantalla 
  if (x > width) {
    x = width;
  } else if (x < 0) {
    x = 0;
  }

  if (y > height) {
    y = height;
  } else if (y < 0) {
    y = 0;
  }


  noFill();
  stroke(250); // BLANCO
  circle(x, y,30);
   
  stroke(65); // GRIS
  rect(x, y,60);
   
  stroke(5); // NEGRO
  circle(x, y,90);
}