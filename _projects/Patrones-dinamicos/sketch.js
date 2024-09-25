let variant = 0;

function setup() {
  //createCanvas(512, 512);  // Crea un lienzo de 512x512 píxeles
  let canvas = createCanvas(512, 512);
canvas.parent('div-sketch');
  background(30);
}

function draw() {
  //Para ver la variante 3 hay que poner en comentario el background
   
  switch (variant) {  // Elige qué bloque de código ejecutar según la tecla presionada (variant)
    
      
      //VARIANTE 1
    case 1:
      // Movimiento del mouse, las curvas seguirán al cursor
      
      // Dibuja una curva de Bézier desde un punto fijo a la posición del mouse
      push();
      noFill();
      stroke(random(125, 255));  // El color de la línea es aleatorio en cada frame
      
      // Dibuja la curva de Bézier controlada por el movimiento del mouse
      bezier(160, 155, mouseX, mouseY, mouseX, mouseY, 365, 385);
      
      // Dibuja otra curva de Bézier en espejo de la primera
      noFill();
      stroke(random(125, 255));  // Usa un rango de colores aleatorios más brillantes
      
      // Otra curva de Bézier reflejada con control del mouse
      bezier(352, 155, mouseX, mouseY, mouseX, mouseY, 147, 385);
      pop();
      break;
      //VARIANTE 2
    case 2:
      push();  // Guarda la configuración de dibujo actual
      background(30); 
      // Dibuja curvas de Bézier con incrementos de 10 píxeles
      for (let i = 50; i < 400; i += 10) {
        noFill();
        stroke(170);
        // Dibuja la curva Bézier desde el borde izquierdo hacia la parte inferior
        bezier(0, i, i, 500, i, 20, 512, 350);
      } 
      // Dibuja una serie de curvas invertidas reflejadas en la parte inferior
      for (let i = 50; i < 400; i += 10) {
        noFill();
        stroke(170);
        // Curvas invertidas reflejadas en la parte inferior
        bezier(0, 512 - i, i, 12, i, 492, 512, 162);
      }
      pop();  // Restaura la configuración de dibujo guardada antes del push()
      break;
  
      //VARIANTE 3
    case 3:
      push();  // Guarda la configuración de dibujo actual
      background(30);
      // Dibuja curvas de Bézier en un patrón original con un efecto espejo
      
      // Dibuja una serie de curvas de Bézier con incrementos de 20 píxeles
      for (let k = 10; k < 400; k += 20) {
        noFill();
        stroke(170);
        
        // Bézier desde la mitad superior de la pantalla hacia abajo
        bezier(256, 0, 140, k, -250, 200 + k, 256, 512);
      }
  
      // Efecto espejo de las curvas anteriores, pero hacia el lado derecho
      for (let k = 10; k < 400; k += 30) {
        noFill();
        stroke(170);
        bezier(256, 0, 372, k, 762, 200 + k, 256, 512);
      }

      // Otras curvas adicionales, desde abajo hacia arriba
      for (let k = 10; k < 200; k += 30) {
        noFill();
        stroke(170);
        bezier(256, 512, 50, 280 + k, 462, 252 + k, 256, 0);
      }

      // Otras curvas adicionales, de arriba hacia abajo
      for (let k = 10; k < 200; k += 30) {
        noFill();
        stroke(170);
        bezier(256, 0, 50, 252 + k, 462, 280 + k, 256, 512);
      }
  
      pop();  // Restaura la configuración de dibujo guardada
      break;
      
      case 4:
      background(30)
      break; // Restaura la configuración de dibujo guardada
  
  }
}

function keyPressed() {
  // Cambia la variante dependiendo de la tecla presionada
  if (key === '1') {
    variant = 1;  // Activa el caso 1 (patrones de Bézier horizontales)
  } else if (key === '2') {
    variant = 2;  // Activa el caso 2 (efecto espejo de Bézier)
  } else if (key === '3') {
    variant = 3;  // Activa el caso 3 (curvas de Bézier siguiendo al mouse)
  }
    else if (key === '4') {
    variant = 4;  // Activa el caso 3 (curvas de Bézier siguiendo al mouse)
  }
}