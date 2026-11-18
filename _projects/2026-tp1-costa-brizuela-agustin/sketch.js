
function setup() {
  let canvas = createCanvas(512, 512);
  canvas.parent('div-sketch');
  noFill();
  stroke(0);
  strokeWeight(1);
  
}

function draw() {
  background(255);
  let margen = 18;  // margen desde el borde pa q sea mas limpio
  let tamañoCuadrado = 18; // tamaño de los cuadrados

  let columnas = (width - margen * 2) / tamañoCuadrado; //para q cada columna se calcule sola con margen incluido 
  let filas = (height - margen * 2) / tamañoCuadrado; //para q cada fila se calcule sola con margen incluido 
  
  randomSeed(1); //con esto fijo la seed pa q no se rompa todo

  //f de filas, c de columnas
  for (f = 0; f < filas; f++)    
  {
    let aleatorio = 0.3; //es para manejar los espacios entre los cuadrados, para q no se                                solapen muchos
    for (c = 0; c < columnas; c++) 
  {

      let x = margen + c * tamañoCuadrado;
      let y = margen + f * tamañoCuadrado;
      let x2 = random(-aleatorio, aleatorio) * tamañoCuadrado; 
      //uso aleatorio y -aleatorio para que los cuadrados se puedan mover en todas las                direcciones 
      let y2 = random(-aleatorio, aleatorio) * tamañoCuadrado;
      let rotacion = random(-aleatorio, aleatorio);

      // Empuje cuadrados
      
      let distancia = dist(mouseX, mouseY, x, y); 
      //uso dist para calcular la distancia entre el cursor y el punto original del cuadrado
      let radioEfecto = 40;
      let empuje = 0;
      
      if (distancia < radioEfecto) 
      {
        let proporcion = distancia / radioEfecto;
            empuje = tamañoCuadrado * 1.5 * (1 - proporcion);
          if (x < mouseX) empuje *= -1;
      }

      //esto es para dibujar los cuadros uno x uno
      push();
      translate(x + tamañoCuadrado / 2 + x2 + empuje, y + tamañoCuadrado / 2 + y2);
      rotate(rotacion);
      rectMode(CENTER); //pa q tome el centro de la figura como centro y no sus esquinas
      square(0, 0, tamañoCuadrado);
      pop();
    }
  }
}